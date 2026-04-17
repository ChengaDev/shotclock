import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Scenario, CorrectAction } from '../../data/trainingScenarios'
import { Difficulty, TIMEOUT_MS } from '../../utils/scoring'
import { useLocalization } from '../../contexts/Language/LanguageProvider'

interface PhaseFlashProps {
  scenario: Scenario
  difficulty: Difficulty
  hintAction: CorrectAction | null
  onAnswer: (action: CorrectAction, reactionMs: number) => void
  onTimeout: () => void
}

const PhaseFlash: React.FC<PhaseFlashProps> = ({
  scenario,
  difficulty,
  hintAction,
  onAnswer,
  onTimeout,
}) => {
  const { locals } = useLocalization()
  const startTimeRef = useRef<number>(performance.now())
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [progress, setProgress] = useState(100)
  const [answered, setAnswered] = useState(false)
  const timeoutMs = TIMEOUT_MS[difficulty]

  // Flash entrance spring
  const flashSpring = useSpring({
    from: { opacity: 0, scale: 0.85 },
    to: { opacity: 1, scale: 1 },
    config: { tension: 280, friction: 18 },
  })

  useEffect(() => {
    startTimeRef.current = performance.now()

    // Countdown bar
    const intervalMs = 50
    const steps = timeoutMs / intervalMs
    let step = 0
    const intervalId = setInterval(() => {
      step++
      setProgress(Math.max(0, 100 - (step / steps) * 100))
    }, intervalMs)

    // Auto-fail
    timeoutRef.current = setTimeout(() => {
      clearInterval(intervalId)
      onTimeout()
    }, timeoutMs)

    return () => {
      clearInterval(intervalId)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAction = (action: CorrectAction) => {
    if (answered) return
    setAnswered(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    const reactionMs = Math.round(performance.now() - startTimeRef.current)
    onAnswer(action, reactionMs)
  }

  const displaySecs = String(scenario.clockDisplaySeconds).padStart(2, '0')

  return (
    <Container role="status" aria-live="assertive">
      <MiniClockWrapper>
        <MiniClockLabel>{scenario.clockIsRunning ? '▶ Running' : '■ Stopped'}</MiniClockLabel>
        <MiniClock>{displaySecs}</MiniClock>
      </MiniClockWrapper>

      <animated.div style={{ ...flashSpring, display: 'flex', justifyContent: 'center' }}>
        <FlashWord $color={scenario.flashColor}>{scenario.flashLabel}</FlashWord>
      </animated.div>

      <CountdownTrack>
        <CountdownBar
          $progress={progress}
          $urgent={progress < 30}
          style={{ width: `${progress}%`, transition: `width ${50}ms linear` }}
        />
      </CountdownTrack>

      <ActionButtons>
        <ActionButton
          $variant="startstop"
          $hint={hintAction === 'startstop'}
          $dimmed={answered && hintAction !== 'startstop'}
          onClick={() => handleAction('startstop')}
          disabled={answered}
        >
          {locals.startStopLabel}
        </ActionButton>
        <ActionButton
          $variant="reset14"
          $hint={hintAction === 'reset14'}
          $dimmed={answered && hintAction !== 'reset14'}
          onClick={() => handleAction('reset14')}
          disabled={answered}
        >
          {locals.reset14Label}
        </ActionButton>
        <ActionButton
          $variant="reset24"
          $hint={hintAction === 'reset24'}
          $dimmed={answered && hintAction !== 'reset24'}
          onClick={() => handleAction('reset24')}
          disabled={answered}
        >
          {locals.reset24Label}
        </ActionButton>
      </ActionButtons>
    </Container>
  )
}

const hintPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(76, 175, 80, 0); }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

const MiniClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`

const MiniClockLabel = styled.span`
  font-size: 0.75rem;
  color: ${props => props.theme.subtleText};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const MiniClock = styled.div`
  font-family: 'DSEG14ClassicRegular', monospace;
  font-size: 4rem;
  color: ${props => props.theme.titleColor};
  background: ${props => props.theme.cardBackground};
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
  border: 2px solid ${props => props.theme.cardBorder};
  letter-spacing: 0.05em;
  min-width: 160px;
  text-align: center;

  @media (${props => props.theme.mediaQueries.mobile}) {
    font-size: 3rem;
    min-width: 120px;
  }
`

const FlashWord = styled.div<{ $color: string }>`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${props => props.$color};
  text-align: center;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 8px ${props => props.$color}66;

  @media (${props => props.theme.mediaQueries.mobile}) {
    font-size: 1.8rem;
  }
`

const CountdownTrack = styled.div`
  width: 100%;
  max-width: 480px;
  height: 6px;
  background: ${props => props.theme.cardBorder};
  border-radius: 3px;
  overflow: hidden;
`

const CountdownBar = styled.div<{ $progress: number; $urgent: boolean }>`
  height: 100%;
  border-radius: 3px;
  background: ${props => props.$urgent ? '#ff6b6b' : '#4CAF50'};
`

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (${props => props.theme.mediaQueries.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`

const variantColors: Record<string, string> = {
  startstop: '#ffd700',
  reset14: '#4CAF50',
  reset24: '#2196F3',
}

const ActionButton = styled.button<{ $variant: string; $hint: boolean; $dimmed: boolean }>`
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  border: 2px solid ${props => variantColors[props.$variant] || props.theme.accent};
  border-radius: 12px;
  cursor: ${props => props.$dimmed ? 'default' : 'pointer'};
  transition: all 0.15s ease;
  min-width: 140px;
  opacity: ${props => props.$dimmed ? 0.3 : 1};
  color: ${props => props.$hint ? '#1a1a1a' : variantColors[props.$variant] || props.theme.accent};
  background: ${props => props.$hint
    ? variantColors[props.$variant] || props.theme.accent
    : 'transparent'};

  ${props => props.$hint && css`
    animation: ${hintPulse} 0.5s ease-in-out 3;
    box-shadow: 0 0 20px ${variantColors[props.$variant] || props.theme.accent}55;
  `}

  &:not(:disabled):hover {
    background: ${props => variantColors[props.$variant] || props.theme.accent};
    color: #1a1a1a;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px ${props => variantColors[props.$variant] || props.theme.accent}55;
  }

  &:active {
    transform: translateY(0);
  }

  @media (${props => props.theme.mediaQueries.mobile}) {
    width: 100%;
    min-width: unset;
    padding: 1rem 1.5rem;
    font-size: 1.05rem;
  }
`

export default PhaseFlash
