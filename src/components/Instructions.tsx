import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import SEO from './SEO'
import SeeAlso from './SeeAlso'

/* ── Tip icons ── */
const IconTarget = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
)
const IconZap = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={`${color}22`} />
  </svg>
)
const IconBook = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const TIP_ICONS = [
  (c: string) => <IconTarget color={c} />,
  (c: string) => <IconZap color={c} />,
  (c: string) => <IconBook color={c} />,
]
const TIP_ACCENTS = ['#E8761A', '#818cf8', '#34d399']

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Instructions = () => {
  const { locals } = useLocalization()

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Operate an Online Basketball Shot Clock",
    "description": "Step-by-step guide to using a basketball shot clock online, including 24-second and 14-second resets per FIBA rules.",
    "step": locals.instructionsSections.map((section) => ({
      "@type": "HowToSection",
      "name": section.title,
      "itemListElement": section.steps.map((step, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "text": step,
      })),
    })),
  }

  return (
    <Container>
      <SEO
        title={`${locals.instructionsTitle} | ShotClock Pro`}
        description={locals.instructionsDescription}
        schema={howToSchema}
      />

      <PageHeader>
        <PageTitle>{locals.instructionsTitle}</PageTitle>
        <PageSubtitle>{locals.instructionsDescription}</PageSubtitle>
      </PageHeader>

      <InstructionsGrid>
        {locals.instructionsSections.map((section, index) => (
          <InstructionCard key={index} $delay={0.08 + index * 0.1}>
            <CardNumber $index={index}>{index + 1}</CardNumber>
            <CardTitle>{section.title}</CardTitle>
            <StepList>
              {section.steps.map((step, stepIndex) => (
                <StepItem key={stepIndex}>
                  <StepDot />
                  <StepText>{step}</StepText>
                </StepItem>
              ))}
            </StepList>
          </InstructionCard>
        ))}
      </InstructionsGrid>

      <TipsSection>
        <SectionLabel>· {locals.proTipsTitle} ·</SectionLabel>
        <TipsGrid>
          {locals.tips.map((tip, index) => (
            <TipCard key={index} $accent={TIP_ACCENTS[index]} $delay={0.1 + index * 0.1}>
              <TipIconWrap $accent={TIP_ACCENTS[index]}>
                {TIP_ICONS[index](TIP_ACCENTS[index])}
              </TipIconWrap>
              <TipText>{tip}</TipText>
            </TipCard>
          ))}
        </TipsGrid>
      </TipsSection>

      <SeeAlso exclude={['instructions']} />
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

const InstructionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.4rem;
  margin-bottom: 3.5rem;
`

const InstructionCard = styled.div<{ $delay: number }>`
  background: ${props => props.theme.cardBackground};
  border-radius: 22px;
  padding: 2rem;
  border: 1px solid ${props => props.theme.cardBorder};
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  animation: ${slideUp} 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${props => props.$delay}s both;

  &:hover {
    transform: translateY(-6px);
    border-color: ${props => props.theme.accent}44;
    box-shadow: 0 8px 32px ${props => props.theme.accent}18;
  }
`

const CardNumber = styled.div<{ $index: number }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #E8761A, #f59e0b);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`

const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.titleColor};
  font-size: 1.1rem;
  margin: 0 0 1.25rem;
  font-weight: 700;
`

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`

const StepItem = styled.div`
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
`

const StepDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.theme.accent};
  flex-shrink: 0;
  margin-top: 6px;
  opacity: 0.7;
`

const StepText = styled.p`
  color: ${props => props.theme.cardText};
  margin: 0;
  line-height: 1.65;
  font-size: 0.925rem;
`

const TipsSection = styled.div`
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

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.4rem;
`

const TipCard = styled.div<{ $accent: string; $delay: number }>`
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

const TipIconWrap = styled.div<{ $accent: string }>`
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

const TipText = styled.p`
  color: ${props => props.theme.cardText};
  margin: 0;
  line-height: 1.65;
  font-size: 0.925rem;
`

export default Instructions
