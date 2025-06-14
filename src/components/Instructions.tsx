import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocalization } from '../contexts/Language/LanguageProvider'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Instructions = () => {
  const { locals } = useLocalization()

  const instructions = [
    {
      title: 'Basic Operation',
      steps: [
        'Press the "Start" button to begin the shot clock',
        'Use the "Reset" button to reset the clock to 24 seconds',
        'Press "Stop" to pause the clock when needed'
      ]
    },
    {
      title: 'Advanced Features',
      steps: [
        'Use the "24/14" button to switch between shot clock durations',
        'The "Display" button toggles the display mode',
        'Use the "Buzzer" button to test the sound system'
      ]
    },
    {
      title: 'Training Mode',
      steps: [
        'Select different scenarios from the training menu',
        'Practice with realistic game situations',
        'Review your performance and improve your timing'
      ]
    }
  ]

  return (
    <Container>
      <AnimatedTitle>{locals.instructions}</AnimatedTitle>

      <Description>{locals.instructionsDescription}</Description>

      <InstructionsGrid>
        {instructions.map((section, index) => (
          <InstructionCard key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <CardHeader>
              <CardNumber>{index + 1}</CardNumber>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <StepList>
              {section.steps.map((step, stepIndex) => (
                <StepItem key={stepIndex}>
                  <StepNumber>{stepIndex + 1}</StepNumber>
                  <StepText>{step}</StepText>
                </StepItem>
              ))}
            </StepList>
          </InstructionCard>
        ))}
      </InstructionsGrid>

      <TipsSection>
        <AnimatedTitle>Pro Tips</AnimatedTitle>
        <TipsGrid>
          <TipCard style={{ animationDelay: '0.6s' }}>
            <TipIcon>🎯</TipIcon>
            <TipText>Always keep your eyes on the game while operating the shot clock</TipText>
          </TipCard>
          <TipCard style={{ animationDelay: '0.8s' }}>
            <TipIcon>⚡</TipIcon>
            <TipText>Practice with different game scenarios to improve your reaction time</TipText>
          </TipCard>
          <TipCard style={{ animationDelay: '1s' }}>
            <TipIcon>📚</TipIcon>
            <TipText>Familiarize yourself with FIBA rules for shot clock operation</TipText>
          </TipCard>
        </TipsGrid>
      </TipsSection>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const AnimatedTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.titleColor};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const TipsTitle = styled.h2`
  color: ${props => props.theme.titleColor};
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.5px;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.6s;
  opacity: 0;
  animation-fill-mode: forwards;
`

const Description = styled.p`
  text-align: center;
  color: ${props => props.theme.text};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
`

const InstructionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const InstructionCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 215, 0, 0.3);
    background: rgba(0, 0, 0, 0.7);
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`

const CardNumber = styled.div`
  background: linear-gradient(45deg, #ffd700, #ff6b6b);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
`

const CardTitle = styled.h3`
  color: #ffd700;
  font-size: 1.3rem;
  margin: 0;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));
`

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const StepItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

const StepNumber = styled.div`
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
`

const StepText = styled.p`
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`

const TipsSection = styled.div`
  margin-top: 4rem;
`

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const TipCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 215, 0, 0.3);
    background: rgba(0, 0, 0, 0.7);
  }
`

const TipIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const TipText = styled.p`
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`

export default Instructions 