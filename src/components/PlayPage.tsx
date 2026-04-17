import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import AppRoutes from '../AppRoutes'
import SEO from './SEO'
import featureFlags from '../featureFlags'

/* ── SVG Icons ── */
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

const IconPlay = ({ color }: { color: string }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <polygon points="10 9 16 12 10 15" fill={color} stroke="none" />
  </svg>
)

type Mode = {
  key: string
  icon: React.ReactNode
  accentColor: string
  badge?: string
  to?: string
}

const PlayPage: React.FC = () => {
  const { locals, languageCode } = useLocalization()
  const routes = AppRoutes(languageCode)

  const modes: Mode[] = [
    {
      key: 'clock',
      icon: <IconClock color="#E8761A" />,
      accentColor: '#E8761A',
      to: routes.Clock,
    },
    {
      key: 'training',
      icon: <IconLightning color="#818cf8" />,
      accentColor: '#818cf8',
      to: featureFlags.reactionTraining ? routes.ReactionTraining : undefined,
      badge: featureFlags.reactionTraining ? undefined : locals.comingSoon,
    },
    {
      key: 'youtube',
      icon: <IconPlay color="#f87171" />,
      accentColor: '#f87171',
      badge: locals.comingSoon,
    },
  ]

  const titles: Record<string, string> = {
    clock: locals.landingModeClockTitle,
    training: locals.landingModeTrainingTitle,
    youtube: locals.landingModeYoutubeTitle,
  }

  const descs: Record<string, string> = {
    clock: locals.landingModeClockDesc,
    training: locals.landingModeTrainingDesc,
    youtube: locals.landingModeYoutubeDesc,
  }

  const playSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: locals.playPageTitle,
    description: locals.playPageDescription,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: locals.landingModeClockTitle, description: locals.landingModeClockDesc },
      { '@type': 'ListItem', position: 2, name: locals.landingModeTrainingTitle, description: locals.landingModeTrainingDesc },
      { '@type': 'ListItem', position: 3, name: locals.landingModeYoutubeTitle, description: locals.landingModeYoutubeDesc },
    ],
  }

  return (
    <Wrapper>
      <SEO
        title={`${locals.playPageTitle} | ShotClock Pro`}
        description={locals.playPageDescription}
        schema={playSchema}
      />

      <Header>
        <Eyebrow>🏟 Enter the arena</Eyebrow>
        <PageTitle>{locals.playPageTitle}</PageTitle>
        <PageSub>{locals.playPageDescription}</PageSub>
      </Header>

      <ModesGrid>
        {modes.map((mode, i) => {
          const inner = (
            <CardInner $accent={mode.accentColor} $disabled={!mode.to}>
              {/* Animated top accent bar */}
              <TopBar $accent={mode.accentColor} $disabled={!mode.to} />

              {/* Background glow orb */}
              <OrbGlow $accent={mode.accentColor} $disabled={!mode.to} />

              {/* Icon */}
              <IconArea>
                <IconRing $accent={mode.accentColor} $disabled={!mode.to}>
                  {mode.icon}
                </IconRing>
              </IconArea>

              {/* Content */}
              <CardContent>
                <CardTitle>{titles[mode.key]}</CardTitle>
                <CardDesc>{descs[mode.key]}</CardDesc>
              </CardContent>

              {/* Footer */}
              <CardFooter>
                {mode.to ? (
                  <CTAText $accent={mode.accentColor}>
                    {locals.playNow}
                    <CTAArrow $accent={mode.accentColor}>→</CTAArrow>
                  </CTAText>
                ) : (
                  <Badge $accent={mode.accentColor}>{mode.badge}</Badge>
                )}
              </CardFooter>

              {/* Shimmer overlay */}
              <Shimmer />
            </CardInner>
          )

          return mode.to ? (
            <CardLink key={mode.key} to={mode.to} $delay={i} $accent={mode.accentColor}>
              {inner}
            </CardLink>
          ) : (
            <CardShell key={mode.key} $delay={i}>
              {inner}
            </CardShell>
          )
        })}
      </ModesGrid>
    </Wrapper>
  )
}

/* ── Keyframes ── */
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`

const emojiFloat = keyframes`
  0%, 100% { transform: translateY(0px) scale(1); }
  50%       { transform: translateY(-6px) scale(1.05); }
`

const orbPulse = keyframes`
  0%, 100% { transform: scale(0.9); opacity: 0.4; }
  50%       { transform: scale(1.1); opacity: 0.7; }
`

const topBarGrow = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`

const shimmerSweep = keyframes`
  0%   { left: -80%; }
  100% { left: 120%; }
`

const ringPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 transparent; }
  50%       { box-shadow: 0 0 0 6px transparent; }
`

/* ── Layout ── */
const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  padding: 2.5rem 5vw 3.5rem;
  background: ${props => props.theme.mainBackgroundColor};

  @media (max-width: 768px) {
    padding: 1.75rem 1.25rem 2.5rem;
  }
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.25rem;
  animation: ${slideUp} 0.5s ease-out both;
`

const Eyebrow = styled.p`
  margin: 0 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${props => props.theme.accent};
  opacity: 0.7;
`

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 900;
  margin: 0 0 0.4rem;
  background: linear-gradient(135deg, ${props => props.theme.titleColor} 20%, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const PageSub = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.subtleText};
  margin: 0 auto;
  max-width: 440px;
  line-height: 1.6;
`

/* ── Grid ── */
const ModesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
  max-width: 1060px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
`

const cardEntrance = (delay: number) => css`
  animation: ${slideUp} 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.08 + delay * 0.1}s both;
`

/* ── Card shells ── */
const CardLink = styled(Link)<{ $delay: number; $accent: string }>`
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

  /* Top bar expands from center */
  &:hover > div > span:first-child {
    transform: scaleX(1);
    opacity: 1;
  }

  /* Orb brightens */
  &:hover > div > div:first-of-type {
    opacity: 1;
    transform: scale(1.15);
  }

  /* Emoji ring glows */
  &:hover > div > div:nth-of-type(2) > div {
    box-shadow: 0 0 0 5px ${props => props.$accent}20, 0 0 28px ${props => props.$accent}30;
  }

  /* Emoji floats */
  &:hover > div > div:nth-of-type(2) > div > span {
    animation: ${emojiFloat} 2s ease-in-out infinite;
  }

  /* CTA arrow slides */
  &:hover > div > div:last-of-type > div > span:last-child {
    transform: translateX(5px);
  }

  /* Shimmer plays */
  &:hover > div > div:last-child {
    animation: ${shimmerSweep} 0.65s ease forwards;
  }
`

const CardShell = styled.div<{ $delay: number }>`
  display: flex;
  flex-direction: column;
  border-radius: 22px;
  height: 100%;
  ${props => cardEntrance(props.$delay)}
  cursor: default;
`

/* ── Card body ── */
const CardInner = styled.div<{ $accent: string; $disabled: boolean }>`
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

/* 3px accent line at top — grows from center on hover */
const TopBar = styled.span<{ $accent: string; $disabled: boolean }>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 22px 22px 0 0;
  background: linear-gradient(90deg, transparent, ${props => props.$accent}, transparent);
  transform: scaleX(${props => props.$disabled ? 0 : 0.45});
  opacity: ${props => props.$disabled ? 0 : 0.7};
  transform-origin: center;
  transition: transform 0.38s ease, opacity 0.38s ease;
`

/* Radial orb behind the icon */
const OrbGlow = styled.div<{ $accent: string; $disabled: boolean }>`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.$accent}28 0%, transparent 70%);
  opacity: ${props => props.$disabled ? 0 : 0.55};
  transform: scale(1);
  animation: ${props => props.$disabled ? 'none' : css`${orbPulse} 4s ease-in-out infinite`};
  pointer-events: none;
  transition: opacity 0.38s ease, transform 0.38s ease;
`

/* Icon area */
const IconArea = styled.div`
  display: flex;
  align-items: center;
`

const IconRing = styled.div<{ $accent: string; $disabled: boolean }>`
  width: 64px;
  height: 64px;
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

const EmojiSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`

/* Content */
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`

const CardTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
  color: ${props => props.theme.titleColor};
  letter-spacing: -0.2px;
  line-height: 1.25;
`

const CardDesc = styled.p`
  font-size: 0.875rem;
  line-height: 1.65;
  color: ${props => props.theme.cardText};
  margin: 0;
`

/* Footer row */
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.25rem;
`

const CTAText = styled.div<{ $accent: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${props => props.$accent};
`

const CTAArrow = styled.span<{ $accent: string }>`
  display: inline-block;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  color: ${props => props.$accent};
`

const Badge = styled.span<{ $accent: string }>`
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

/* Shimmer sweep — a white diagonal stripe that flashes across on hover */
const Shimmer = styled.div`
  position: absolute;
  top: -50%;
  width: 45px;
  height: 200%;
  background: linear-gradient(
    105deg,
    transparent 0%,
    rgba(255, 255, 255, 0.07) 40%,
    rgba(255, 255, 255, 0.13) 50%,
    rgba(255, 255, 255, 0.07) 60%,
    transparent 100%
  );
  transform: skewX(-15deg);
  pointer-events: none;
  z-index: 2;
  left: -80%;
`

export default PlayPage
