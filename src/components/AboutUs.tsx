import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import SEO from './SEO'

/* ── Icons ── */
const IconTarget = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
)
const IconZap = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)
const IconBook = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const CARD_ICONS = [<IconTarget />, <IconZap />, <IconBook />]
const CARD_ACCENTS = ['#E8761A', '#818cf8', '#34d399']

/* ── Keyframes ── */
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const AboutUs = () => {
  const { locals } = useLocalization()

  return (
    <Container>
      <SEO
        title={`${locals.aboutTitle} | ShotClock Pro`}
        description={locals.aboutContent[0]}
      />

      <PageHeader>
        <PageTitle>{locals.aboutTitle}</PageTitle>
      </PageHeader>

      <ContentSection>
        {locals.aboutContent.map((paragraph, index) => (
          <Paragraph key={index} $delay={index * 0.1}>{paragraph}</Paragraph>
        ))}
      </ContentSection>

      <Subtitle $delay={0.2}>{locals.aboutDescription}</Subtitle>

      <CardsGrid>
        {locals.featureCards.map((card, index) => (
          <FeatureCard key={index} $accent={CARD_ACCENTS[index]} $delay={0.1 + index * 0.1}>
            <CardTopBar $accent={CARD_ACCENTS[index]} />
            <IconCircle $accent={CARD_ACCENTS[index]}>
              {CARD_ICONS[index]}
            </IconCircle>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
          </FeatureCard>
        ))}
      </CardsGrid>

      <ContactSection>
        <SectionLabel>· {locals.getInTouch} ·</SectionLabel>
        <ContactText>{locals.getInTouchText}</ContactText>
        <ContactLinks>
          <ContactLink href="https://www.linkedin.com/in/chengazit/" target="_blank" rel="noreferrer noopener">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </ContactLink>
          <ContactLink href="https://github.com/ChengaDev/" target="_blank" rel="noreferrer noopener">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </ContactLink>
          <ContactLink href="https://chengazit.com/" target="_blank" rel="noreferrer noopener">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            chengazit.com
          </ContactLink>
        </ContactLinks>
      </ContactSection>
    </Container>
  )
}

/* ── Styled Components ── */
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
  margin: 0;
  background: linear-gradient(135deg, ${props => props.theme.titleColor} 20%, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const ContentSection = styled.div`
  margin-bottom: 2rem;
`

const Paragraph = styled.p<{ $delay: number }>`
  font-size: 1rem;
  line-height: 1.8;
  color: ${props => props.theme.text};
  margin-bottom: 1.25rem;
  animation: ${slideUp} 0.5s ease-out ${props => props.$delay}s both;
`

const Subtitle = styled.p<{ $delay: number }>`
  text-align: center;
  color: ${props => props.theme.subtleText};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 auto 3rem;
  max-width: 700px;
  animation: ${slideUp} 0.5s ease-out ${props => props.$delay}s both;
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.4rem;
  margin-bottom: 3.5rem;
`

const FeatureCard = styled.div<{ $accent: string; $delay: number }>`
  background: ${props => props.theme.cardBackground};
  border-radius: 22px;
  padding: 2rem;
  border: 1px solid ${props => props.$accent}28;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  animation: ${slideUp} 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${props => props.$delay}s both;

  &:hover {
    transform: translateY(-6px);
    border-color: ${props => props.$accent}55;
    box-shadow: 0 8px 32px ${props => props.$accent}22, 0 2px 8px ${props => props.$accent}11;
  }
`

const CardTopBar = styled.div<{ $accent: string }>`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, ${props => props.$accent}, transparent);
  border-radius: 22px 22px 0 0;
`

const IconCircle = styled.div<{ $accent: string }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${props => props.$accent}18;
  border: 1px solid ${props => props.$accent}30;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$accent};
  margin-bottom: 1.25rem;
`

const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.titleColor};
  margin: 0 0 0.6rem;
`

const CardText = styled.p`
  color: ${props => props.theme.cardText};
  margin: 0;
  line-height: 1.65;
  font-size: 0.925rem;
`

const ContactSection = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.cardBorder};
`

const SectionLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${props => props.theme.accent};
  opacity: 0.75;
  margin: 0 0 0.75rem;
`

const ContactText = styled.p`
  color: ${props => props.theme.subtleText};
  font-size: 0.95rem;
  margin: 0 0 1.5rem;
  line-height: 1.6;
`

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.6rem 1.35rem;
  border-radius: 999px;
  border: 1px solid ${props => props.theme.accent}55;
  color: ${props => props.theme.accent};
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${props => props.theme.accent}14;
    border-color: ${props => props.theme.accent};
  }
`

export default AboutUs
