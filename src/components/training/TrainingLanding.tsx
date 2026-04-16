import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Difficulty } from '../../utils/scoring'
import { hallOfFameService } from '../../services/hallOfFameService'
import { useLocalization } from '../../contexts/Language/LanguageProvider'
import HallOfFameTable from './HallOfFameTable'

interface TrainingLandingProps {
  onStart: (difficulty: Difficulty) => void
}

const difficulties: { key: Difficulty; labelKey: 'difficultyEasy' | 'difficultyMedium' | 'difficultyPro'; color: string }[] = [
  { key: 'easy', labelKey: 'difficultyEasy', color: '#4CAF50' },
  { key: 'medium', labelKey: 'difficultyMedium', color: '#FF9800' },
  { key: 'pro', labelKey: 'difficultyPro', color: '#ff6b6b' },
]

const TrainingLanding: React.FC<TrainingLandingProps> = ({ onStart }) => {
  const { locals } = useLocalization()
  const [selected, setSelected] = useState<Difficulty>('medium')
  const hofEntries = hallOfFameService.getAll()

  return (
    <Container>
      <Title>{locals.reactionTrainingTitle}</Title>
      <Description>{locals.reactionTrainingDescription}</Description>

      <SectionLabel>{locals.difficulty}</SectionLabel>
      <DifficultyRow>
        {difficulties.map(d => (
          <DifficultyButton
            key={d.key}
            $color={d.color}
            $active={selected === d.key}
            onClick={() => setSelected(d.key)}
          >
            {locals[d.labelKey]}
          </DifficultyButton>
        ))}
      </DifficultyRow>

      <StartButton onClick={() => onStart(selected)}>
        {locals.startSession}
      </StartButton>

      {hofEntries.length > 0 && (
        <HofWrapper>
          <HofTitle>{locals.hallOfFame}</HofTitle>
          <HallOfFameTable entries={hofEntries} />
        </HofWrapper>
      )}
    </Container>
  )
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  animation: ${fadeIn} 0.4s ease-out;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #ffd700, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const Description = styled.p`
  text-align: center;
  color: ${props => props.theme.text};
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 600px;
  margin: 0;
`

const SectionLabel = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.subtleText};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`

const DifficultyRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`

const DifficultyButton = styled.button<{ $color: string; $active: boolean }>`
  padding: 0.65rem 1.5rem;
  border-radius: 10px;
  border: 2px solid ${props => props.$color};
  background: ${props => props.$active ? props.$color : 'transparent'};
  color: ${props => props.$active ? '#1a1a1a' : props.$color};
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background: ${props => props.$color};
    color: #1a1a1a;
  }
`

const StartButton = styled.button`
  background: linear-gradient(135deg, #ffd700, #ff9800);
  color: #1a1a1a;
  border: none;
  border-radius: 14px;
  padding: 1rem 3rem;
  font-size: 1.15rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.02em;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(255, 215, 0, 0.45);
  }

  &:active {
    transform: translateY(0);
  }
`

const HofWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 16px;
  padding: 1.5rem;
`

const HofTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.theme.accent};
  font-family: 'Poppins', sans-serif;
  margin: 0 0 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export default TrainingLanding
