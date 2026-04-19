import React, { useState } from 'react'
import styled from 'styled-components'
import ShotClock from './ShotClock'
import SEO from './SEO'
import { useLocalization } from '../contexts/Language/LanguageProvider'

const parseVideoId = (input: string): string | null => {
  const trimmed = input.trim()
  try {
    const url = new URL(trimmed)
    if (url.hostname.includes('youtube.com')) {
      return url.searchParams.get('v')
    }
    if (url.hostname === 'youtu.be') {
      const id = url.pathname.slice(1).split('?')[0]
      return id || null
    }
  } catch {
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed
  }
  return null
}

const YouTubePage: React.FC = () => {
  const { locals } = useLocalization()
  const [urlInput, setUrlInput] = useState('')
  const [videoId, setVideoId] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [showChangeInput, setShowChangeInput] = useState(false)
  const [changeInput, setChangeInput] = useState('')
  const [changeError, setChangeError] = useState(false)

  const handleLoad = (e: React.FormEvent) => {
    e.preventDefault()
    const id = parseVideoId(urlInput)
    if (id) { setVideoId(id); setError(false) }
    else { setError(true) }
  }

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault()
    const id = parseVideoId(changeInput)
    if (id) {
      setVideoId(id)
      setShowChangeInput(false)
      setChangeInput('')
      setChangeError(false)
    } else {
      setChangeError(true)
    }
  }

  const openChangeInput = () => {
    setChangeInput('')
    setChangeError(false)
    setShowChangeInput(true)
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

      {/* Change video bar — outside/above the video */}
      <ChangeBar>
        {showChangeInput ? (
          <ChangeForm onSubmit={handleChange}>
            <UrlInput
              type="text"
              value={changeInput}
              onChange={e => { setChangeInput(e.target.value); setChangeError(false) }}
              placeholder={locals.youtubeUrlPlaceholder}
              autoFocus
            />
            <LoadButton type="submit">{locals.youtubeLoadVideo}</LoadButton>
            <CancelButton
              type="button"
              onClick={() => { setShowChangeInput(false); setChangeError(false) }}
              aria-label="Cancel"
            >
              ✕
            </CancelButton>
            {changeError && <ErrorText>{locals.youtubeInvalidUrl}</ErrorText>}
          </ChangeForm>
        ) : (
          <ChangeVideoButton onClick={openChangeInput}>
            <VideoIcon />
            {locals.youtubeChangeVideo}
          </ChangeVideoButton>
        )}
      </ChangeBar>

      {/* Video */}
      <VideoAspect>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="Basketball game"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoAspect>

      {/* Clock panel below the video */}
      <ClockPanel>
        <ClockScaler>
          <ShotClock />
        </ClockScaler>
      </ClockPanel>

      <MobileLandscapeBanner>
        <RotatePortraitIcon />
        For the best experience, switch to portrait mode
      </MobileLandscapeBanner>
    </PlayWrapper>
  )
}

/* ── Icons ── */
const VideoIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polygon points="10 9 16 12 10 15" fill="currentColor" stroke="none" />
  </svg>
)

const RotateIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22h6" />
  </svg>
)

const RotatePortraitIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
)

/* ── Landing ── */
const LandingWrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
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
  padding: 0;
  background: ${props => props.theme.mainBackgroundColor};
  box-sizing: border-box;
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

/* Change video bar — sits above the video, outside it */
const ChangeBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0;
  margin-bottom: 0.4rem;
  min-height: 36px;
`

/* 16:9 video, capped small so the clock panel has room */
const VideoAspect = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding-bottom: min(56.25%, 36vh);

  @media (max-width: 900px) and (orientation: portrait) {
    padding-bottom: 0;
    height: 48vh;
  }
  height: 0;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;

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
  zoom: 0.45;
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

const ChangeForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex-wrap: wrap;
`

const ChangeVideoButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
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

const ErrorText = styled.p<{ inline?: boolean }>`
  color: ${props => props.theme.colors.red};
  font-size: 0.78rem;
  margin: ${props => props.inline ? '0.5rem 0 0' : '0'};
  width: 100%;
`

const PortraitBanner = styled.div`
  display: none;

  @media (max-width: 1024px) and (orientation: portrait) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 999;
    background: ${props => props.theme.defaulButtonBackground};
    color: #111;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 8px 16px;
    text-align: center;
    box-sizing: border-box;
  }
`

const MobileLandscapeBanner = styled.div`
  display: none;

  @media (max-width: 900px) and (orientation: landscape) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 999;
    background: ${props => props.theme.defaulButtonBackground};
    color: #111;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 8px 16px;
    text-align: center;
    box-sizing: border-box;
  }
`

export default YouTubePage
