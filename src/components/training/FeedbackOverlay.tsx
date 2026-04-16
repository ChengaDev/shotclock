import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ScenarioResult, Scenario } from '../../data/trainingScenarios'
import { useLocalization } from '../../contexts/Language/LanguageProvider'

interface FeedbackOverlayProps {
  result: ScenarioResult
  scenario: Scenario
  onNext: () => void
  isLastBeforeResults?: boolean
}

const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({
  result,
  scenario,
  onNext,
  isLastBeforeResults,
}) => {
  const { locals } = useLocalization()
  const gradeLabel = locals.gradeLabels[result.grade.toLowerCase().replace('+', 'p') as keyof typeof locals.gradeLabels]
    || locals.gradeLabels[result.grade === 'A+' ? 'ap' : result.grade.toLowerCase() as keyof typeof locals.gradeLabels]

  return (
    <Container>
      <ResultBadge $correct={result.correct}>
        {result.reactionMs === 0 ? locals.timesUp : result.correct ? locals.correctAnswer : locals.wrongAnswer}
      </ResultBadge>

      {result.correct && (
        <StatsRow>
          <Stat>
            <StatLabel>{locals.reactionTime}</StatLabel>
            <StatValue>{result.reactionMs}{locals.milliseconds}</StatValue>
          </Stat>
          <Stat>
            <StatLabel>Grade</StatLabel>
            <GradeValue $grade={result.grade}>{result.grade} — {gradeLabel}</GradeValue>
          </Stat>
          {result.score > 0 && (
            <Stat>
              <PointsEarned>
                {locals.pointsEarned.replace('{0}', String(result.score))}
              </PointsEarned>
            </Stat>
          )}
        </StatsRow>
      )}

      <ExplanationBox>
        <ExplanationLabel>{locals.explanationLabel}</ExplanationLabel>
        <ExplanationText>{scenario.explanation}</ExplanationText>
      </ExplanationBox>

      <NextButton onClick={onNext}>
        {isLastBeforeResults ? 'See Results' : locals.nextScenario} →
      </NextButton>
    </Container>
  )
}

const fadeSlide = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  animation: ${fadeSlide} 0.3s ease-out;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`

const ResultBadge = styled.div<{ $correct: boolean }>`
  font-size: 1.8rem;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.$correct ? '#4CAF50' : '#ff6b6b'};
  text-shadow: 0 2px 8px ${props => props.$correct ? 'rgba(76,175,80,0.3)' : 'rgba(255,107,107,0.3)'};
`

const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`

const StatLabel = styled.span`
  font-size: 0.7rem;
  color: ${props => props.theme.subtleText};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const StatValue = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.titleColor};
`

const gradeColor = (grade: string) => {
  if (grade === 'A+' || grade === 'A') return '#4CAF50'
  if (grade === 'B') return '#8BC34A'
  if (grade === 'C') return '#FF9800'
  if (grade === 'D') return '#FF5722'
  return '#ff6b6b'
}

const GradeValue = styled.span<{ $grade: string }>`
  font-size: 1rem;
  font-weight: 700;
  color: ${props => gradeColor(props.$grade)};
`

const PointsEarned = styled.span`
  font-size: 1.4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffd700, #ff9800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ExplanationBox = styled.div`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  width: 100%;
`

const ExplanationLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${props => props.theme.accent};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`

const ExplanationText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${props => props.theme.cardText};
`

const NextButton = styled.button`
  background: linear-gradient(135deg, #ffd700, #ff9800);
  color: #1a1a1a;
  border: none;
  border-radius: 12px;
  padding: 0.85rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
  }
`

export default FeedbackOverlay
