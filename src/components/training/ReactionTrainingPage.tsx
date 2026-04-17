import React, { useState } from 'react'
import styled from 'styled-components'
import { Difficulty } from '../../utils/scoring'
import { useLocalization } from '../../contexts/Language/LanguageProvider'
import SEO from '../SEO'
import SeeAlso from '../SeeAlso'
import TrainingLanding from './TrainingLanding'
import TrainingSession from './TrainingSession'

type AppState = 'landing' | 'session'

const ReactionTrainingPage: React.FC = () => {
  const { locals } = useLocalization()
  const [appState, setAppState] = useState<AppState>('landing')
  const [difficulty, setDifficulty] = useState<Difficulty>('medium')

  const handleStart = (d: Difficulty) => {
    setDifficulty(d)
    setAppState('session')
  }

  const handleExit = () => {
    setAppState('landing')
  }

  return (
    <Container>
      <SEO
        title={`${locals.reactionTrainingTitle} | ShotClock Pro`}
        description={locals.reactionTrainingDescription}
      />

      {appState === 'landing' && (
        <>
          <TrainingLanding onStart={handleStart} />
          <SeeAlso exclude={['reaction-training']} />
        </>
      )}

      {appState === 'session' && (
        <TrainingSession difficulty={difficulty} onExit={handleExit} />
      )}
    </Container>
  )
}

const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
`

export default ReactionTrainingPage
