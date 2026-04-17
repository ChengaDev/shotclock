import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import SEO from './SEO'
import SeeAlso from './SeeAlso'

/* ── Icons ── */
const IconBookOpen = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)
const IconClock = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const IconAward = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
)
const IconFileText = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
)
const IconGlobe = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)
const IconTrophy = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4" /><path d="M18 9h2a2 2 0 0 0 2-2V5h-4" /><path d="M12 17v4" /><path d="M8 21h8" /><path d="M6 3h12v7a6 6 0 0 1-12 0V3z" fill={`${color}18`} />
  </svg>
)

const RESOURCE_ICONS = [
  (c: string) => <IconBookOpen color={c} />,
  (c: string) => <IconClock color={c} />,
  (c: string) => <IconAward color={c} />,
  (c: string) => <IconFileText color={c} />,
]
const RESOURCE_ACCENTS = ['#E8761A', '#818cf8', '#34d399', '#f87171']

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const FIBAResources = () => {
  const { locals } = useLocalization()

  const resources = [
    { ...locals.fibaResourcesCards.rules,       link: 'https://www.fiba.basketball/rules' },
    { ...locals.fibaResourcesCards.shotClock,   link: 'https://www.fiba.basketball/rules/equipment' },
    { ...locals.fibaResourcesCards.training,    link: 'https://www.fiba.basketball/officials' },
    { ...locals.fibaResourcesCards.competition, link: 'https://www.fiba.basketball/documents' },
  ]

  return (
    <Container>
      <SEO
        title={`${locals.fibaResourcesTitle} | ShotClock Pro`}
        description={locals.fibaResourcesDescription}
      />

      <PageHeader>
        <PageTitle>{locals.fibaResourcesTitle}</PageTitle>
        <PageSubtitle>{locals.fibaResourcesDescription}</PageSubtitle>
      </PageHeader>

      <ResourcesGrid>
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            $accent={RESOURCE_ACCENTS[index]}
            $delay={0.08 + index * 0.08}
          >
            <ResourceTopBar $accent={RESOURCE_ACCENTS[index]} />
            <ResourceIconWrap $accent={RESOURCE_ACCENTS[index]}>
              {RESOURCE_ICONS[index](RESOURCE_ACCENTS[index])}
            </ResourceIconWrap>
            <ResourceContent>
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
            </ResourceContent>
            <ResourceArrow $accent={RESOURCE_ACCENTS[index]}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </ResourceArrow>
          </ResourceCard>
        ))}
      </ResourcesGrid>

      <InfoSection>
        <SectionLabel>· {locals.additionalInfo.title} ·</SectionLabel>
        <InfoGrid>
          <InfoCard $accent="#38bdf8" $delay={0.1}>
            <InfoIconWrap $accent="#38bdf8"><IconGlobe color="#38bdf8" /></InfoIconWrap>
            <InfoText>{locals.additionalInfo.worldGoverning}</InfoText>
          </InfoCard>
          <InfoCard $accent="#fbbf24" $delay={0.2}>
            <InfoIconWrap $accent="#fbbf24"><IconTrophy color="#fbbf24" /></InfoIconWrap>
            <InfoText>{locals.additionalInfo.tournaments}</InfoText>
          </InfoCard>
        </InfoGrid>
      </InfoSection>

      <SeeAlso exclude={['fiba-resources']} />
    </Container>
  )
}

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.5rem 0 2rem;
`

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  animation: ${slideUp} 0.5s ease-out both;
`

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  margin: 0 0 0.5rem;
  background: linear-gradient(135deg, ${props => props.theme.titleColor} 20%, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const PageSubtitle = styled.p`
  color: ${props => props.theme.subtleText};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 680px;
`

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
  gap: 1.4rem;
  margin-bottom: 3.5rem;
`

const ResourceCard = styled.a<{ $accent: string; $delay: number }>`
  background: ${props => props.theme.cardBackground};
  border-radius: 22px;
  padding: 1.75rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  text-decoration: none;
  border: 1px solid ${props => props.$accent}28;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  animation: ${slideUp} 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${props => props.$delay}s both;

  &:hover {
    transform: translateY(-6px);
    border-color: ${props => props.$accent}55;
    box-shadow: 0 8px 32px ${props => props.$accent}22;
  }
`

const ResourceTopBar = styled.div<{ $accent: string }>`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, ${props => props.$accent}, transparent);
  border-radius: 22px 22px 0 0;
  opacity: 0.6;
`

const ResourceIconWrap = styled.div<{ $accent: string }>`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: ${props => props.$accent}18;
  border: 1px solid ${props => props.$accent}30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const ResourceContent = styled.div`
  flex: 1;
  min-width: 0;
`

const ResourceTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.titleColor};
  font-size: 1rem;
  margin: 0 0 0.35rem;
  font-weight: 700;
`

const ResourceDescription = styled.p`
  color: ${props => props.theme.cardText};
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.55;
`

const ResourceArrow = styled.span<{ $accent: string }>`
  color: ${props => props.$accent};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  opacity: 0.7;
  transition: transform 0.28s ease, opacity 0.28s ease;

  ${ResourceCard}:hover & {
    transform: translateX(4px);
    opacity: 1;
  }
`

const InfoSection = styled.div`
  margin-bottom: 2rem;
`

const SectionLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${props => props.theme.accent};
  opacity: 0.75;
  text-align: center;
  margin: 0 0 1.5rem;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.4rem;
`

const InfoCard = styled.div<{ $accent: string; $delay: number }>`
  background: ${props => props.theme.cardBackground};
  border-radius: 22px;
  padding: 1.75rem;
  text-align: center;
  border: 1px solid ${props => props.$accent}28;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  animation: ${slideUp} 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${props => props.$delay}s both;

  &:hover {
    transform: translateY(-6px);
    border-color: ${props => props.$accent}55;
    box-shadow: 0 8px 32px ${props => props.$accent}22;
  }
`

const InfoIconWrap = styled.div<{ $accent: string }>`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: ${props => props.$accent}18;
  border: 1px solid ${props => props.$accent}30;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`

const InfoText = styled.p`
  color: ${props => props.theme.cardText};
  margin: 0;
  line-height: 1.65;
  font-size: 0.925rem;
`

export default FIBAResources
