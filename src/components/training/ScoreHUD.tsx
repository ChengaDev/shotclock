import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { useLocalization } from '../../contexts/Language/LanguageProvider'
import { Difficulty } from '../../utils/scoring'

interface ScoreHUDProps {
  score: number
  streak: number
  scenarioIndex: number
  totalScenarios: number
  sessionTimeLeftMs: number
  difficulty: Difficulty
}

const ScoreHUD: React.FC<ScoreHUDProps> = ({
  score,
  streak,
  scenarioIndex,
  totalScenarios,
  sessionTimeLeftMs,
  difficulty,
}) => {
  const { locals } = useLocalization()
  const prevScore = useRef(score)

  const scoreSpring = useSpring({
    from: { val: prevScore.current },
    to: { val: score },
    config: { tension: 200, friction: 20 },
  })

  useEffect(() => {
    prevScore.current = score
  }, [score])

  const timeLeftSec = Math.ceil(sessionTimeLeftMs / 1000)
  const isUrgent = timeLeftSec <= 10

  const scenarioText = locals.scenarioOf
    .replace('{0}', String(scenarioIndex + 1))
    .replace('{1}', String(totalScenarios))

  return (
    <HUDBar>
      <HUDItem>
        <HUDLabel>{locals.yourScore}</HUDLabel>
        <HUDValue>
          <animated.span>
            {scoreSpring.val.to(v => Math.round(v))}
          </animated.span>
        </HUDValue>
      </HUDItem>

      {streak >= 3 && (
        <StreakBadge>
          🔥 {locals.streakLabel.replace('{0}', String(streak))}
        </StreakBadge>
      )}

      <HUDCenter>
        <HUDLabel>{scenarioText}</HUDLabel>
        <DifficultyBadge $difficulty={difficulty}>{difficulty}</DifficultyBadge>
      </HUDCenter>

      <HUDItem>
        <HUDLabel>{locals.timeRemaining}</HUDLabel>
        <TimerValue $urgent={isUrgent}>{timeLeftSec}s</TimerValue>
      </HUDItem>
    </HUDBar>
  )
}

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`

const HUDBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (${props => props.theme.mediaQueries.mobile}) {
    padding: 0.6rem 1rem;
  }
`

const HUDItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`

const HUDCenter = styled(HUDItem)`
  flex: 1;
`

const HUDLabel = styled.span`
  font-size: 0.7rem;
  color: ${props => props.theme.subtleText};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
`

const HUDValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.titleColor};
`

const TimerValue = styled.span<{ $urgent: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.$urgent ? '#ff6b6b' : props.theme.titleColor};
  animation: ${props => props.$urgent ? pulse : 'none'} 0.8s ease-in-out infinite;
`

const StreakBadge = styled.div`
  background: linear-gradient(45deg, #ff6b35, #ff9800);
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  white-space: nowrap;
`

const DifficultyBadge = styled.span<{ $difficulty: string }>`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: capitalize;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: ${props =>
    props.$difficulty === 'pro' ? 'rgba(255, 107, 107, 0.15)' :
    props.$difficulty === 'medium' ? 'rgba(255, 152, 0, 0.15)' :
    'rgba(76, 175, 80, 0.15)'
  };
  color: ${props =>
    props.$difficulty === 'pro' ? '#ff6b6b' :
    props.$difficulty === 'medium' ? '#FF9800' :
    '#4CAF50'
  };
`

export default ScoreHUD
