import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { ScenarioResult, Grade } from '../../data/trainingScenarios'
import { Difficulty, computeOverallGrade } from '../../utils/scoring'
import { hallOfFameService } from '../../services/hallOfFameService'
import { useLocalization } from '../../contexts/Language/LanguageProvider'
import HallOfFameTable from './HallOfFameTable'

interface SessionResultsProps {
  results: ScenarioResult[]
  score: number
  difficulty: Difficulty
  personalBestBefore: number
  onRestart: () => void
}

const gradeColor = (grade: string) => {
  if (grade === 'A+' || grade === 'A') return '#4CAF50'
  if (grade === 'B') return '#8BC34A'
  if (grade === 'C') return '#FF9800'
  if (grade === 'D') return '#FF5722'
  return '#ff6b6b'
}

const SessionResults: React.FC<SessionResultsProps> = ({
  results,
  score,
  difficulty,
  personalBestBefore,
  onRestart,
}) => {
  const { locals } = useLocalization()
  const overallGrade = computeOverallGrade(results)
  const isPersonalBest = score > personalBestBefore && score > 0
  const isTopScore = hallOfFameService.isTopScore(score)

  const [initials, setInitials] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [hofEntries, setHofEntries] = useState(() => hallOfFameService.getAll())

  const handleSubmitInitials = () => {
    if (initials.trim().length === 0) return
    const padded = initials.toUpperCase().slice(0, 3).padEnd(3, '_')
    hallOfFameService.addEntry({
      initials: padded,
      score,
      grade: overallGrade,
      difficulty,
      date: new Date().toISOString(),
    })
    setSubmitted(true)
    setHofEntries(hallOfFameService.getAll())
  }

  const correct = results.filter(r => r.correct).length
  const gradeKey = overallGrade === 'A+' ? 'ap' : overallGrade.toLowerCase() as keyof typeof locals.gradeLabels
  const gradeLabel = locals.gradeLabels[gradeKey]

  return (
    <Container>
      <Title>{locals.sessionComplete}</Title>

      {isPersonalBest && (
        <PersonalBestBanner>🏆 {locals.personalBest}</PersonalBestBanner>
      )}

      <StatsGrid>
        <StatCard>
          <StatValue>{score}</StatValue>
          <StatLabel>{locals.yourScore}</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue $color={gradeColor(overallGrade)}>{overallGrade}</StatValue>
          <StatLabel>{locals.yourGrade} — {gradeLabel}</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{correct}/{results.length}</StatValue>
          <StatLabel>{locals.scenariosCompleted.replace('{0}', String(results.length))}</StatLabel>
        </StatCard>
      </StatsGrid>

      {!submitted && isTopScore && score > 0 && (
        <HofPrompt>
          <HofPromptText>{locals.enterInitials}</HofPromptText>
          <InitialsRow>
            <InitialsInput
              value={initials}
              onChange={e => setInitials(e.target.value.toUpperCase().slice(0, 3))}
              maxLength={3}
              placeholder="AAA"
              onKeyDown={e => e.key === 'Enter' && handleSubmitInitials()}
              autoFocus
            />
            <SubmitButton onClick={handleSubmitInitials} disabled={initials.trim().length === 0}>
              {locals.submitInitials}
            </SubmitButton>
          </InitialsRow>
        </HofPrompt>
      )}

      <HofSection>
        <HofTitle>{locals.hallOfFame}</HofTitle>
        <HallOfFameTable entries={hofEntries} highlightScore={submitted ? score : undefined} />
      </HofSection>

      <RestartButton onClick={onRestart}>{locals.restartSession}</RestartButton>
    </Container>
  )
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} 0.5s ease-out;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #ffd700, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0;
`

const PersonalBestBanner = styled.div`
  background: linear-gradient(135deg, #ffd700, #ff9800);
  color: #1a1a1a;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.6rem 2rem;
  border-radius: 24px;
  text-align: center;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
`

const StatValue = styled.div<{ $color?: string }>`
  font-size: 2rem;
  font-weight: 800;
  color: ${props => props.$color || props.theme.titleColor};
  font-family: 'Poppins', sans-serif;
`

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.subtleText};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.25rem;
`

const HofPrompt = styled.div`
  background: ${props => props.theme.cardBackground};
  border: 2px solid ${props => props.theme.accent};
  border-radius: 16px;
  padding: 1.5rem 2rem;
  text-align: center;
  width: 100%;
`

const HofPromptText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.titleColor};
  margin: 0 0 1rem;
`

const InitialsRow = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`

const InitialsInput = styled.input`
  width: 80px;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: 'DSEG14ClassicRegular', monospace;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.2em;
  background: ${props => props.theme.cardBackground};
  color: ${props => props.theme.accent};
  border: 2px solid ${props => props.theme.accent};
  border-radius: 8px;
  text-transform: uppercase;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.accent}44;
  }
`

const SubmitButton = styled.button`
  background: ${props => props.theme.accent};
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${props => props.theme.accent}44;
  }
`

const HofSection = styled.div`
  width: 100%;
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 16px;
  padding: 1.5rem;
`

const HofTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.accent};
  font-family: 'Poppins', sans-serif;
  margin: 0 0 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const RestartButton = styled.button`
  background: transparent;
  color: ${props => props.theme.accent};
  border: 2px solid ${props => props.theme.accent};
  border-radius: 12px;
  padding: 0.8rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background: ${props => props.theme.accent}18;
    transform: translateY(-2px);
  }
`

export default SessionResults
