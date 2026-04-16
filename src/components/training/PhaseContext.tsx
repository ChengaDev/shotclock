import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Scenario } from '../../data/trainingScenarios'
import { useLocalization } from '../../contexts/Language/LanguageProvider'

interface PhaseContextProps {
  scenario: Scenario
  onReady: () => void
}

const PhaseContext: React.FC<PhaseContextProps> = ({ scenario, onReady }) => {
  const { locals } = useLocalization()

  return (
    <Container>
      <ScenarioLabel>Read the scenario carefully</ScenarioLabel>
      <DescriptionCard>
        <Description>{scenario.description}</Description>
      </DescriptionCard>
      <ReadyButton onClick={onReady}>
        {locals.readyButton} →
      </ReadyButton>
    </Container>
  )
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  animation: ${fadeIn} 0.35s ease-out;
`

const ScenarioLabel = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.subtleText};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`

const DescriptionCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 16px;
  padding: 2rem;
  max-width: 680px;
  width: 100%;
`

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${props => props.theme.text};
  margin: 0;
`

const ReadyButton = styled.button`
  background: linear-gradient(135deg, #ffd700, #ff9800);
  color: #1a1a1a;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

export default PhaseContext
