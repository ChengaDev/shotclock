import React, { useState } from 'react'
import styled from 'styled-components'
import ShotClock from './ShotClock'
import SEO from './SEO'
import { useLocalization } from '../contexts/Language/LanguageProvider'

const HISTORY_KEY = 'sc_yt_history'
const MAX_HISTORY = 3

type RecentVideo = { id: string; addedAt: number }

function loadHistory(): RecentVideo[] {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]')
  } catch { return [] }
}

function saveToHistory(id: string) {
  const existing = loadHistory().filter(v => v.id !== id)
  const updated = [{ id, addedAt: Date.now() }, ...existing].slice(0, MAX_HISTORY)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))
}

const VIDEO_ID_RE = /^[a-zA-Z0-9_-]{11}$/

const parseVideoId = (input: string): string | null => {
  const trimmed = input.trim()
  const validate = (id: string | null) => (id && VIDEO_ID_RE.test(id) ? id : null)
  try {
    const url = new URL(trimmed)
    if (url.hostname.includes('youtube.com')) {
      return validate(url.searchParams.get('v'))
    }
    if (url.hostname === 'youtu.be') {
      return validate(url.pathname.slice(1).split('?')[0])
    }
  } catch {
    return validate(trimmed)
  }
  return null
}

const YouTubePage: React.FC = () => {
  const { locals } = useLocalization()
  const [urlInput, setUrlInput] = useState('')
  const [videoId, setVideoId] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [recentVideos, setRecentVideos] = useState<RecentVideo[]>(() => loadHistory())
  const [showChangeInput, setShowChangeInput] = useState(false)

  const loadVideo = (id: string) => {
    saveToHistory(id)
    setRecentVideos(loadHistory())
    setVideoId(id)
    setError(false)
    setUrlInput('')
    setShowChangeInput(false)
  }

  const handleLoad = (e: React.FormEvent) => {
    e.preventDefault()
    const id = parseVideoId(urlInput)
    if (id) loadVideo(id)
    else setError(true)
  }

  const youtubeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: locals.youtubePageTitle,
    url: 'https://www.24shotclock.com/youtube',
    description: locals.youtubePageDescription,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: [
      'Paste any YouTube basketball game URL',
      '24-second FIBA shot clock panel',
      '14-second offensive rebound reset',
      'Real-time buzzer sound',
      'Works on mobile and desktop',
    ],
  }

  /* ── Landing: no video yet ── */
  if (!videoId) {
    return (
      <LandingWrapper>
        <SEO
          title={`${locals.youtubePageTitle} | ShotClock Pro`}
          description={locals.youtubePageDescription}
          schema={youtubeSchema}
        />
        <LandingTitle>{locals.youtubePageTitle}</LandingTitle>
        <LandingSubtitle>{locals.youtubePageDescription}</LandingSubtitle>
        <LandingForm onSubmit={handleLoad}>
          <UrlInput
            type="text"
            value={urlInput}
            onChange={e => { setUrlInput(e.target.value); setError(false) }}
            placeholder={locals.youtubeUrlPlaceholder}
            autoFocus
          />
          <LoadButton type="submit">{locals.youtubeLoadVideo}</LoadButton>
        </LandingForm>
        {error && <ErrorText inline>{locals.youtubeInvalidUrl}</ErrorText>}

        {recentVideos.length > 0 && (
          <RecentSection>
            <RecentLabel>Recently watched</RecentLabel>
            <RecentGrid>
              {recentVideos.map(v => (
                <RecentCard key={v.id} onClick={() => loadVideo(v.id)}>
                  <RecentThumb
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt="Video thumbnail"
                    loading="lazy"
                  />
                  <PlayOverlay>
                    <PlayTriangle />
                  </PlayOverlay>
                </RecentCard>
              ))}
            </RecentGrid>
          </RecentSection>
        )}
      </LandingWrapper>
    )
  }

  /* ── Play view: video on top, clock below ── */
  return (
    <PlayWrapper>
      <SEO
        title={`${locals.youtubePageTitle} | ShotClock Pro`}
        description={locals.youtubePageDescription}
        schema={youtubeSchema}
      />

      <PageTitle>{locals.youtubePageTitle}</PageTitle>

      {/* Video */}
      <VideoAspect>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="Basketball game"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoAspect>

      <ClockPanel>
        <ClockScaler>
          <ShotClock />
        </ClockScaler>
      </ClockPanel>

      <TopBar>
        {showChangeInput ? (
          <TopForm onSubmit={handleLoad}>
            <UrlInput
              type="text"
              value={urlInput}
              onChange={e => { setUrlInput(e.target.value); setError(false) }}
              placeholder={locals.youtubeUrlPlaceholder}
              autoFocus
            />
            <LoadButton type="submit">{locals.youtubeLoadVideo}</LoadButton>
            <CancelButton type="button" onClick={() => { setShowChangeInput(false); setError(false) }}>✕</CancelButton>
            {error && <ErrorText>{locals.youtubeInvalidUrl}</ErrorText>}
          </TopForm>
        ) : (
          <ChangeVideoButton onClick={() => setShowChangeInput(true)}>
            <VideoIcon />
            {locals.youtubeChangeVideo}
          </ChangeVideoButton>
        )}
      </TopBar>

      <PageBlurb>{locals.youtubeBlurb}</PageBlurb>

      <MobileLandscapeBanner>
        <RotatePortraitIcon />
        For the best experience, switch to portrait mode
      </MobileLandscapeBanner>
    </PlayWrapper>
  )
}

/* ── Icons ── */
const RotatePortraitIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
)

/* ── Landing ── */
const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(65vh - 80px);
  padding: 6rem 1.5rem 9rem;

  @media (max-width: 768px) and (orientation: portrait) {
    padding-top: 1.5rem;
  }
  background: ${props => props.theme.mainBackgroundColor};
`

const LandingTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 900;
  margin: 0 0 0.5rem;
  background: linear-gradient(135deg, ${props => props.theme.titleColor} 20%, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
`

const LandingSubtitle = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.subtleText};
  margin: 0 0 2rem;
  max-width: 460px;
  line-height: 1.6;
  text-align: center;
`

const LandingForm = styled.form`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  max-width: 520px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

/* ── Play layout (stacked) ── */
const PlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0;
  background: ${props => props.theme.mainBackgroundColor};
  box-sizing: border-box;

  @media (max-width: 1200px) and (orientation: landscape) and (max-height: 500px) {
    padding-top: 46px;
  }
`

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  font-weight: 800;
  margin: 0.5rem 0 0.25rem;
  text-align: center;
  background: linear-gradient(135deg, ${props => props.theme.titleColor} 20%, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

/* URL input bar — pinned at the top of the play view */
const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 1rem 0.25rem;
  gap: 0.25rem;
  margin-top: -20px;
`

const TopForm = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 560px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

/* 16:9 video, capped small so the clock panel has room */
const VideoAspect = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 20px auto 0;
  padding-bottom: min(56.25%, 47vh);
  height: 0;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 900px) and (orientation: portrait) {
    width: 100vw;
    max-width: 100vw;
    margin-left: calc(-50vw + 50%);
    padding-bottom: 56.25vw;
    height: 0;
    border-radius: 0;
  }


  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`

/* Clock panel below the video */
const ClockPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0;

`

/* Scale the clock down so it fits under the video without crowding */
const ClockScaler = styled.div`
  zoom: 0.55;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (orientation: portrait) {
    zoom: 1.0;
  }


  /* Collapse all internal vertical margins */
  * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
`

/* ── Shared form elements ── */
const UrlInput = styled.input`
  flex: 1;
  min-width: 160px;
  padding: 0.45rem 0.8rem;
  border: 2px solid ${props => props.theme.cardBorder};
  border-radius: 8px;
  background: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  font-size: 0.82rem;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder { color: ${props => props.theme.subtleText}; }
  &:focus { border-color: ${props => props.theme.accent}; }
`

const LoadButton = styled.button`
  padding: 0.45rem 1rem;
  background: ${props => props.theme.accent};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.15s;

  &:hover { opacity: 0.88; }
  &:active { opacity: 0.75; }
`

const RecentSection = styled.div`
  margin-top: calc(2.5rem + 15px);
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RecentLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${props => props.theme.subtleText};
  margin: 0 0 0.75rem;
`

const RecentGrid = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;

  @media (max-width: 768px) and (orientation: portrait) {
    flex-direction: column;
    align-items: center;
  }
`

const RecentCard = styled.button`
  position: relative;
  flex: 0 0 230px;
  width: 230px;
  height: 230px;
  border: 2px solid ${props => props.theme.cardBorder};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: none;
  padding: 0;
  transition: border-color 0.2s, transform 0.15s;

  &:hover {
    border-color: ${props => props.theme.accent};
    transform: scale(1.03);
  }
`

const RecentThumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.2s;

  ${RecentCard}:hover & {
    opacity: 1;
  }
`

const PlayTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 18px;
  border-color: transparent transparent transparent #ffffff;
  margin-left: 4px;
`

const CancelButton = styled.button`
  padding: 0.45rem 0.7rem;
  background: transparent;
  color: ${props => props.theme.subtleText};
  border: 1.5px solid ${props => props.theme.cardBorder};
  border-radius: 8px;
  font-size: 0.82rem;
  cursor: pointer;
  transition: color 0.15s;

  &:hover { color: ${props => props.theme.text}; }
`

const ChangeVideoButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  margin: 7px 0;
  background: transparent;
  color: ${props => props.theme.subtleText};
  border: 1.5px solid ${props => props.theme.cardBorder};
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: ${props => props.theme.text};
    border-color: ${props => props.theme.accent};
  }
`

const VideoIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polygon points="10 9 16 12 10 15" fill="currentColor" stroke="none" />
  </svg>
)

const ErrorText = styled.p<{ inline?: boolean }>`
  color: ${props => props.theme.colors.red};
  font-size: 0.78rem;
  margin: ${props => props.inline ? '0.5rem 0 0' : '0'};
  width: 100%;
`

const PageBlurb = styled.p`
  text-align: center;
  max-width: 640px;
  margin: 20px auto 1rem;
  padding: 0 1.5rem;
  font-size: 0.82rem;
  line-height: 1.65;
  color: ${props => props.theme.subtleText};
`

const MobileLandscapeBanner = styled.div`
  display: none;

  @media (max-width: 1200px) and (orientation: landscape) and (max-height: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 999;
    background: #fdcd27;
    color: #111;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 8px 16px;
    text-align: center;
    box-sizing: border-box;
  }
`

export default YouTubePage
