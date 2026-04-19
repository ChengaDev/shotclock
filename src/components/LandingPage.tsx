import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import AppRoutes from '../AppRoutes'
import SEO from './SEO'
import ShareButtons from './ShareButtons'
import featureFlags from '../featureFlags'

/* ─── SVG Icons ─── */
const IconClock = ({ color }: { color: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
    <circle cx="12" cy="12" r="1.5" fill={color} stroke="none" />
  </svg>
)

const IconLightning = ({ color }: { color: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={`${color}22`} stroke={color} />
  </svg>
)

const IconPlayBtn = ({ color }: { color: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <polygon points="10 9 16 12 10 15" fill={color} stroke="none" />
  </svg>
)

const IconDevice = ({ color }: { color: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" fill={`${color}12`} />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M9 10l2 2 4-4" stroke={color} strokeWidth="2.2" />
  </svg>
)

const IconTrophy = ({ color }: { color: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
    <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
    <path d="M12 17v4" />
    <path d="M8 21h8" />
    <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" fill={`${color}18`} />
  </svg>
)

const IconGlobe = ({ color }: { color: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const IconRules = ({ color }: { color: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" fill={`${color}18`} />
    <line x1="9" y1="11" x2="15" y2="11" />
    <line x1="9" y1="15" x2="13" y2="15" />
  </svg>
)

/* ─── Clock countdown hook ─── */
function useAnimatedClock() {
  const [display, setDisplay] = useState(24)
  const [buzzing, setBuzzing] = useState(false)
  const valRef = useRef(24)
  const buzzingRef = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (buzzingRef.current) return
      if (valRef.current <= 0) {
        buzzingRef.current = true
        setBuzzing(true)
        setTimeout(() => {
          valRef.current = 24
          setDisplay(24)
          buzzingRef.current = false
          setBuzzing(false)
        }, 1100)
      } else {
        valRef.current -= 1
        setDisplay(valRef.current)
      }
    }, 550)
    return () => clearInterval(id)
  }, [])

  return { display, buzzing }
}

const ArenaVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
`

const ArenaOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(to bottom,
      rgba(0,0,0,0.55) 0%,
      rgba(0,0,0,0.45) 40%,
      rgba(0,0,0,0.65) 100%
    );
`

/* ─── Component ─── */
const LandingPage: React.FC = () => {
  const { locals, languageCode } = useLocalization()
  const routes = AppRoutes(languageCode)
  const location = useLocation()
  const currentUrl = window.location.origin + location.pathname
  const videoRef = useRef<HTMLVideoElement>(null)

  // React 18 handles muted correctly as a JSX prop, but we also set it
  // imperatively on mount as a belt-and-suspenders for Safari.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  return (
    <>
      <SEO
        title="ShotClock Pro – Free Online Basketball Shot Clock | 24-Second Rule"
        description="Free online basketball shot clock for fans, coaches, and referees. Start the 24-second countdown, apply the 14-second reset, and hear the buzzer — no download needed."
      />

      <PageWrapper>
        {/* ── HERO ── */}
        <HeroSection>
          <ArenaVideo ref={videoRef} autoPlay muted loop playsInline preload="auto" aria-hidden="true">
            <source src="/arena.mp4" type="video/mp4" />
          </ArenaVideo>
          <ArenaOverlay />

          <HeroTitle>{locals.landingHeroTitle}</HeroTitle>

          <HeroSubtitle>{locals.landingHeroSubtitle}</HeroSubtitle>

          <HeroCTAWrap>
            <HeroCTAButton to={routes.Clock}>
              <HeroCTAIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </HeroCTAIcon>
              {locals.launchClock}
              <HeroCTAPulse />
            </HeroCTAButton>
          </HeroCTAWrap>
        </HeroSection>

        {/* ── MODES ── */}
        <ModesSection>
          <SectionTitle>· {locals.landingModesTitle} ·</SectionTitle>
          <ModesGrid>
            {[
              { icon: <IconClock color="#E8761A" />, accent: '#E8761A', title: locals.landingModeClockTitle, desc: locals.landingModeClockDesc, to: routes.Clock },
              { icon: <IconPlayBtn color="#f87171" />, accent: '#f87171', title: locals.landingModeYoutubeTitle, desc: locals.landingModeYoutubeDesc, to: featureFlags.youtube ? routes.YouTube : undefined, badge: featureFlags.youtube ? undefined : locals.comingSoon },
              { icon: <IconLightning color="#818cf8" />, accent: '#818cf8', title: locals.landingModeTrainingTitle, desc: locals.landingModeTrainingDesc, to: featureFlags.reactionTraining ? routes.ReactionTraining : undefined, badge: featureFlags.reactionTraining ? undefined : locals.comingSoon },
            ].map((mode, i) => {
              const disabled = !mode.to
              const inner = (
                <ModeCardInner2 $accent={mode.accent} $disabled={disabled}>
                  <ModeTopBar $accent={mode.accent} $disabled={disabled} />
                  <ModeOrb $accent={mode.accent} $disabled={disabled} />
                  <ModeIconRing $accent={mode.accent} $disabled={disabled}>
                    {mode.icon}
                  </ModeIconRing>
                  <ModeBody>
                    <ModeTitle2>{mode.title}</ModeTitle2>
                    <ModeDesc2>{mode.desc}</ModeDesc2>
                  </ModeBody>
                  <ModeFooter>
                    {mode.to
                      ? <ModeCTA $accent={mode.accent}>{locals.playNow} <ModeCTAArrow $accent={mode.accent}>→</ModeCTAArrow></ModeCTA>
                      : <ModeComingSoon $accent={mode.accent}>{mode.badge}</ModeComingSoon>
                    }
                  </ModeFooter>
                  <ModeShimmer />
                </ModeCardInner2>
              )
              return mode.to ? (
                <ModeCardLink key={mode.title} to={mode.to} $delay={i} $accent={mode.accent}>
                  {inner}
                </ModeCardLink>
              ) : (
                <ModeCardShell key={mode.title} $delay={i}>
                  {inner}
                </ModeCardShell>
              )
            })}
          </ModesGrid>
        </ModesSection>

        {/* ── FEATURES ── */}
        <FeaturesSection>
          <SectionTitle>· {locals.landingFeaturesTitle} ·</SectionTitle>
          <FeaturesGrid>
            {[
              { svg: <IconDevice color="#34d399" />, label: locals.landingFeature1Label, sub: locals.landingFeature1Sub, accent: '#34d399' },
              { svg: <IconTrophy color="#fbbf24" />, label: locals.landingFeature2Label, sub: locals.landingFeature2Sub, accent: '#fbbf24' },
              { svg: <IconGlobe color="#38bdf8" />, label: locals.landingFeature3Label, sub: locals.landingFeature3Sub, accent: '#38bdf8' },
              { svg: <IconRules color="#E8761A" />, label: locals.landingFeature4Label, sub: locals.landingFeature4Sub, accent: '#E8761A' },
            ].map((f, i) => (
              <Feature key={i} $delay={i} $accent={f.accent}>
                <FeatureIconCircle $accent={f.accent}>{f.svg}</FeatureIconCircle>
                <FeatureLabel>{f.label}</FeatureLabel>
                <FeatureSub>{f.sub}</FeatureSub>
                <FeatureBottomLine $accent={f.accent} />
              </Feature>
            ))}
          </FeaturesGrid>
        </FeaturesSection>

        <PageBlurb>{locals.pageBlurb}</PageBlurb>

        <ShareButtons url={currentUrl} title="ShotClock Pro – Free Online Basketball Shot Clock" />
      </PageWrapper>
    </>
  )
}

/* ─── Keyframes ─── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
`

const glowPulse = keyframes`
  0%, 100% { opacity: 0.25; transform: scale(1); }
  50%       { opacity: 0.6;  transform: scale(1.08); }
`

const buzzFlash = keyframes`
  0%, 100% { opacity: 1; }
  25%       { opacity: 0.3; }
  75%       { opacity: 0.3; }
`

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`

const cardIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`

/* ─── Layout ─── */
const PageWrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
`

/* ─── Hero ─── */
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding: 6rem 6vw 4.5rem;
  position: relative;
  overflow: hidden;
  min-height: 605px;
  justify-content: center;
  margin-top: -80px;
  padding-top: calc(6rem + 80px);

  @media (max-width: 768px) {
    padding: calc(3.5rem + 80px) 1.5rem 3rem;
    min-height: 505px;
  }
`



const HeroTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin: 0;
  max-width: 720px;
  position: relative;
  z-index: 2;
  color: #fff;
  text-shadow: 0 2px 24px rgba(0,0,0,0.5);
  background: linear-gradient(135deg, #fff 20%, #E8761A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeUp} 0.55s ease-out 0.05s both;
`

const HeroSubtitle = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.88);
  margin: 0;
  max-width: 540px;
  position: relative;
  z-index: 2;
  animation: ${fadeUp} 0.55s ease-out 0.35s both;
`

const HeroCTAs = styled.div`
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeUp} 0.55s ease-out 0.45s both;
`

const ctaPulseRing = keyframes`
  0%   { transform: scale(1);    opacity: 0.6; }
  70%  { transform: scale(1.55); opacity: 0; }
  100% { transform: scale(1.55); opacity: 0; }
`

const HeroCTAWrap = styled.div`
  animation: ${fadeUp} 0.55s ease-out 0.5s both;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
`

const HeroCTAPulse = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 2px solid #E8761A;
  animation: ${ctaPulseRing} 2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  pointer-events: none;
`

const HeroCTAIcon = styled.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.28s ease;
`

const HeroCTAButton = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.9rem 2.2rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #E8761A, #f59e0b);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-decoration: none;
  box-shadow:
    0 0 0 0 #E8761A44,
    0 4px 20px #E8761A44,
    0 8px 40px #E8761A22;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow:
      0 0 0 0 #E8761A44,
      0 6px 28px #E8761A66,
      0 12px 48px #E8761A33;
  }

  &:hover ${HeroCTAIcon} {
    transform: rotate(15deg);
  }

  @media (max-width: 550px) {
    font-size: 0.95rem;
    padding: 0.8rem 1.8rem;
  }
`

const arenaGlowAnim = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50%       { opacity: 0.9;  transform: scale(1.08); }
`

const arenaArrowBounce = keyframes`
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(5px); }
`

const ArenaButton = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(232, 118, 26, 0.45);
  }

  &:hover span:last-child {
    animation: ${arenaArrowBounce} 0.6s ease-in-out infinite;
  }
`

const ArenaButtonGlow = styled.div`
  position: absolute;
  inset: -2px;
  border-radius: 18px;
  background: conic-gradient(
    from 0deg,
    #ffd700, #E8761A, #ff4444, #818cf8, #ffd700
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;

  ${ArenaButton}:hover & {
    opacity: 0.7;
    animation: ${arenaGlowAnim} 2s ease-in-out infinite;
  }
`

const ArenaButtonContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: linear-gradient(135deg, #1a0e00, #2d1a00);
  color: #ffd700;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 1.15rem;
  padding: 0.9rem 2.2rem;
  border-radius: 15px;
  letter-spacing: 0.01em;
  border: 1.5px solid rgba(232, 118, 26, 0.4);
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.8rem 1.6rem;
  }
`

const ArenaArrow = styled.span`
  display: inline-block;
  font-size: 1.1rem;
`

/* ─── Hero Clock Visual ─── */
const HeroVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeUp} 0.6s ease-out 0.2s both;
`

const ClockOuter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ClockGlow = styled.div<{ $buzzing: boolean }>`
  position: absolute;
  inset: -10px;
  border-radius: 28px;
  background: ${props => props.$buzzing
    ? 'radial-gradient(ellipse at center, rgba(255,60,60,0.4), transparent 70%)'
    : `radial-gradient(ellipse at center, ${props.theme.accent}44, transparent 70%)`
  };
  animation: ${props => props.$buzzing ? buzzFlash : glowPulse} ${props => props.$buzzing ? '0.3s' : '3s'} ease-in-out infinite;
  pointer-events: none;
  transition: background 0.3s ease;
`

const ClockInner = styled.div`
  background: ${props => props.theme.cardBackground};
  border: 2px solid ${props => props.theme.accent}44;
  border-radius: 10px;
  padding: 0.45rem 0.9rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ClockLabel = styled.span``

const ClockDigits = styled.div<{ $buzzing: boolean }>`
  font-family: 'DSEG14ClassicRegular', monospace;
  font-size: 1.5rem;
  color: ${props => props.$buzzing ? '#ff4444' : props.theme.accent};
  letter-spacing: 0.05em;
  line-height: 1;
  text-shadow: 0 0 28px ${props => props.$buzzing ? 'rgba(255,68,68,0.5)' : `${props.theme.accent}55`};
  transition: color 0.15s ease, text-shadow 0.15s ease;
  animation: ${props => props.$buzzing
    ? css`${buzzFlash} 0.3s ease-in-out infinite`
    : 'none'
  };
`

/* ─── Modes Section ─── */
const ModesSection = styled.section`
  padding: 5.5rem 6vw 3.5rem;
  background: ${props => props.theme.pageCard || props.theme.cardBackground};

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 2.5rem;
  }
`

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.accent};
  margin: 0 0 1.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 1;
`

const ModesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  max-width: 1060px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`

const cardEntrance = (delay: number) => css`
  animation: ${cardIn} 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.08 + delay * 0.1}s both;
`

const shimmerSweep = keyframes`
  0%   { left: -80%; }
  100% { left: 120%; }
`

const orbPulse = keyframes`
  0%, 100% { transform: scale(0.9); opacity: 0.4; }
  50%       { transform: scale(1.1); opacity: 0.7; }
`

const emojiFloat = keyframes`
  0%, 100% { transform: translateY(0px) scale(1); }
  50%       { transform: translateY(-6px) scale(1.05); }
`

const ModeCardLink = styled(Link)<{ $delay: number; $accent: string }>`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 22px;
  height: 100%;
  ${props => cardEntrance(props.$delay)}

  &:hover > div {
    border-color: ${props => props.$accent}55;
    transform: translateY(-7px);
    box-shadow:
      0 2px 4px ${props => props.$accent}0a,
      0 8px 24px ${props => props.$accent}18,
      0 24px 64px ${props => props.$accent}14;
  }
  &:hover > div > span:first-child { transform: scaleX(1); opacity: 1; }
  &:hover > div > div:first-of-type { opacity: 1; transform: scale(1.15); }
  &:hover > div > div:nth-of-type(2) {
    box-shadow: 0 0 0 5px ${props => props.$accent}20, 0 0 28px ${props => props.$accent}30;
  }
  &:hover > div > div:nth-of-type(2) > span {
    animation: ${emojiFloat} 2s ease-in-out infinite;
  }
  &:hover > div > div:last-of-type > div > span:last-child { transform: translateX(5px); }
  &:hover > div > div:last-child { animation: ${shimmerSweep} 0.65s ease forwards; }
`

const ModeCardShell = styled.div<{ $delay: number }>`
  display: flex;
  flex-direction: column;
  border-radius: 22px;
  height: 100%;
  ${props => cardEntrance(props.$delay)}
  cursor: default;
`

const ModeCardInner2 = styled.div<{ $accent: string; $disabled: boolean }>`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.$disabled ? props.theme.cardBorder : `${props.$accent}25`};
  border-radius: 22px;
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.38s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.38s ease,
    box-shadow 0.38s ease;
  opacity: ${props => props.$disabled ? 0.47 : 1};
`

const ModeTopBar = styled.span<{ $accent: string; $disabled: boolean }>`
  display: block;
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 22px 22px 0 0;
  background: linear-gradient(90deg, transparent, ${props => props.$accent}, transparent);
  transform: scaleX(${props => props.$disabled ? 0 : 0.45});
  opacity: ${props => props.$disabled ? 0 : 0.7};
  transform-origin: center;
  transition: transform 0.38s ease, opacity 0.38s ease;
`

const ModeOrb = styled.div<{ $accent: string; $disabled: boolean }>`
  position: absolute;
  top: -30px; right: -30px;
  width: 160px; height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.$accent}28 0%, transparent 70%);
  opacity: ${props => props.$disabled ? 0 : 0.55};
  animation: ${props => props.$disabled ? 'none' : css`${orbPulse} 4s ease-in-out infinite`};
  pointer-events: none;
  transition: opacity 0.38s ease, transform 0.38s ease;
`

const ModeIconRing = styled.div<{ $accent: string; $disabled: boolean }>`
  width: 64px; height: 64px;
  border-radius: 18px;
  background: ${props => props.$disabled
    ? props.theme.cardBorder
    : `linear-gradient(135deg, ${props.$accent}22, ${props.$accent}0a)`};
  border: 1px solid ${props => props.$disabled ? 'transparent' : `${props.$accent}30`};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.38s ease;
  position: relative;
  z-index: 1;
`

const ModeBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`

const ModeTitle2 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
  color: ${props => props.theme.titleColor};
  letter-spacing: -0.2px;
  line-height: 1.25;
`

const ModeDesc2 = styled.p`
  font-size: 0.875rem;
  line-height: 1.65;
  color: ${props => props.theme.cardText};
  margin: 0;
`

const ModeFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 0.25rem;
`

const ModeCTA = styled.div<{ $accent: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${props => props.$accent};
`

const ModeCTAArrow = styled.span<{ $accent: string }>`
  display: inline-block;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  color: ${props => props.$accent};
`

const ModeComingSoon = styled.span<{ $accent: string }>`
  background: ${props => props.$accent}14;
  color: ${props => props.$accent};
  border: 1px solid ${props => props.$accent}28;
  border-radius: 7px;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: 0.22rem 0.55rem;
  text-transform: uppercase;
  white-space: nowrap;
`

const ModeShimmer = styled.div`
  position: absolute;
  top: -50%;
  width: 45px;
  height: 200%;
  background: linear-gradient(
    105deg,
    transparent 0%,
    rgba(255,255,255,0.07) 40%,
    rgba(255,255,255,0.13) 50%,
    rgba(255,255,255,0.07) 60%,
    transparent 100%
  );
  transform: skewX(-15deg);
  pointer-events: none;
  z-index: 2;
  left: -80%;
`


/* ─── Features Strip ─── */
const FeaturesSection = styled.section`
  padding: 2rem 6vw 3.5rem;
  background: ${props => props.theme.mainBackgroundColor};

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 2.5rem;
  }
`

const PageBlurb = styled.p`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 2rem;
  padding: 0 1.5rem;
  font-size: 0.85rem;
  line-height: 1.7;
  color: ${props => props.theme.subtleText};
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.4rem;
  max-width: 1060px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`

const Feature = styled.div<{ $delay: number; $accent: string }>`
  ${props => cardEntrance(props.$delay)}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.85rem;
  padding: 1.75rem 1.25rem 2rem;
  border-radius: 18px;
  border: 1px solid ${props => props.theme.cardBorder};
  background: ${props => props.theme.cardBackground};
  position: relative;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: ${props => `${props.$accent}45`};
    transform: translateY(-4px);
    box-shadow: 0 8px 28px ${props => props.$accent}18;
  }

  &:hover > div:first-child {
    box-shadow: 0 0 0 6px ${props => props.$accent}15, 0 0 24px ${props => props.$accent}22;
  }

  &:hover > div:first-child svg {
    animation: ${emojiFloat} 2s ease-in-out infinite;
  }

  &:hover > div:last-child {
    transform: scaleX(1);
    opacity: 1;
  }
`

const FeatureIconCircle = styled.div<{ $accent: string }>`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.$accent}1e, ${props => props.$accent}0a);
  border: 1.5px solid ${props => props.$accent}30;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease;
  flex-shrink: 0;
`

const FeatureLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  color: ${props => props.theme.titleColor};
  letter-spacing: -0.1px;
`

const FeatureSub = styled.div`
  font-size: 0.82rem;
  color: ${props => props.theme.cardText};
  line-height: 1.6;
`

const FeatureBottomLine = styled.div<{ $accent: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2.5px;
  background: linear-gradient(90deg, transparent, ${props => props.$accent}, transparent);
  transform: scaleX(0);
  transform-origin: center;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  border-radius: 0 0 18px 18px;
`

export default LandingPage
