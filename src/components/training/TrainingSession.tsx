import React, { useState, useRef, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { scenarios as allScenarios, CorrectAction, ScenarioResult } from '../../data/trainingScenarios'
import { Difficulty, TIMEOUT_MS, gradeReaction, computeScenarioScore } from '../../utils/scoring'
import { hallOfFameService } from '../../services/hallOfFameService'
import ScoreHUD from './ScoreHUD'
import PhaseContext from './PhaseContext'
import PhaseFlash from './PhaseFlash'
import FeedbackOverlay from './FeedbackOverlay'
import SessionResults from './SessionResults'

type Phase = 'context' | 'flash' | 'feedback'

interface TrainingSessionProps {
  difficulty: Difficulty
  onExit: () => void
}

function fisherYates<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const SESSION_MS = 60_000

const TrainingSession: React.FC<TrainingSessionProps> = ({ difficulty, onExit }) => {
  const shuffledRef = useRef<typeof allScenarios>(fisherYates(allScenarios))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('context')
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [results, setResults] = useState<ScenarioResult[]>([])
  const [lastResult, setLastResult] = useState<ScenarioResult | null>(null)
  const [hintAction, setHintAction] = useState<CorrectAction | null>(null)
  const [sessionTimeLeftMs, setSessionTimeLeftMs] = useState(SESSION_MS)
  const [sessionEnded, setSessionEnded] = useState(false)
  const sessionTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const personalBestRef = useRef(hallOfFameService.getPersonalBest())

  // 1-minute session countdown
  useEffect(() => {
    const TICK = 100
    sessionTimerRef.current = setInterval(() => {
      setSessionTimeLeftMs(prev => {
        const next = prev - TICK
        if (next <= 0) {
          if (sessionTimerRef.current) clearInterval(sessionTimerRef.current)
          setSessionEnded(true)
          return 0
        }
        return next
      })
    }, TICK)

    return () => {
      if (sessionTimerRef.current) clearInterval(sessionTimerRef.current)
    }
  }, [])

  const scenario = shuffledRef.current[currentIndex % shuffledRef.current.length]

  const advanceScenario = () => {
    const nextIdx = currentIndex + 1
    if (nextIdx >= shuffledRef.current.length) {
      shuffledRef.current = fisherYates(allScenarios)
    }
    setCurrentIndex(nextIdx)
    setPhase('context')
    setHintAction(null)
    setLastResult(null)
  }

  const handleReady = () => {
    setPhase('flash')
    setHintAction(null)
  }

  const handleAnswer = (action: CorrectAction, reactionMs: number) => {
    const correct = action === scenario.correctAction
    const grade = correct ? gradeReaction(reactionMs, TIMEOUT_MS[difficulty]) : 'F'
    const newStreak = correct ? streak + 1 : 0
    const scenarioScore = correct
      ? computeScenarioScore(grade, reactionMs, difficulty, streak)
      : 0

    if (!correct) {
      setHintAction(scenario.correctAction)
    }

    const result: ScenarioResult = {
      scenarioId: scenario.id,
      correct,
      reactionMs,
      grade,
      score: scenarioScore,
    }

    setResults(prev => [...prev, result])
    setLastResult(result)
    setScore(prev => prev + scenarioScore)
    setStreak(newStreak)
    setPhase('feedback')
  }

  const handleTimeout = () => {
    const result: ScenarioResult = {
      scenarioId: scenario.id,
      correct: false,
      reactionMs: 0,
      grade: 'F',
      score: 0,
    }
    setResults(prev => [...prev, result])
    setLastResult(result)
    setStreak(0)
    setPhase('feedback')
  }

  if (sessionEnded || (phase === 'feedback' && sessionTimeLeftMs <= 0)) {
    return (
      <SessionResults
        results={results}
        score={score}
        difficulty={difficulty}
        personalBestBefore={personalBestRef.current}
        onRestart={onExit}
      />
    )
  }

  return (
    <Wrapper>
      <ScoreHUD
        score={score}
        streak={streak}
        scenarioIndex={currentIndex}
        totalScenarios={allScenarios.length}
        sessionTimeLeftMs={sessionTimeLeftMs}
        difficulty={difficulty}
      />

      {phase === 'context' && (
        <PhaseContext scenario={scenario} onReady={handleReady} />
      )}

      {phase === 'flash' && (
        <PhaseFlash
          scenario={scenario}
          difficulty={difficulty}
          hintAction={hintAction}
          onAnswer={handleAnswer}
          onTimeout={handleTimeout}
        />
      )}

      {phase === 'feedback' && lastResult && (
        <FeedbackOverlay
          result={lastResult}
          scenario={scenario}
          onNext={advanceScenario}
          isLastBeforeResults={sessionTimeLeftMs <= 0}
        />
      )}

      <ExitButton onClick={onExit}>✕ Exit</ExitButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
`

const ExitButton = styled.button`
  align-self: flex-end;
  background: none;
  border: 1px solid ${props => props.theme.cardBorder};
  color: ${props => props.theme.subtleText};
  border-radius: 8px;
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ff6b6b;
    color: #ff6b6b;
  }
`

export default TrainingSession
