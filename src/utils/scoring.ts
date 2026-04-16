import { Grade, ScenarioResult } from '../data/trainingScenarios'

export type Difficulty = 'easy' | 'medium' | 'pro'

export const TIMEOUT_MS: Record<Difficulty, number> = {
  easy: 5000,
  medium: 3000,
  pro: 2000,
}

const DIFFICULTY_MULTIPLIER: Record<Difficulty, number> = {
  easy: 0.8,
  medium: 1.0,
  pro: 1.3,
}

const GRADE_BASE_POINTS: Record<Grade, number> = {
  'A+': 100,
  A: 80,
  B: 60,
  C: 40,
  D: 20,
  F: 0,
}

export function gradeReaction(reactionMs: number, timeoutMs: number): Grade {
  if (reactionMs <= 0) return 'F'
  const ratio = reactionMs / timeoutMs
  if (ratio <= 0.2) return 'A+'
  if (ratio <= 0.35) return 'A'
  if (ratio <= 0.5) return 'B'
  if (ratio <= 0.7) return 'C'
  if (ratio <= 0.9) return 'D'
  return 'F'
}

export function computeScenarioScore(
  grade: Grade,
  reactionMs: number,
  difficulty: Difficulty,
  streakLength: number  // consecutive correct answers before this one
): number {
  const base = GRADE_BASE_POINTS[grade]
  if (base === 0) return 0
  const speedBonus = reactionMs < 300 ? 10 : 0
  const streakBonus = streakLength >= 3 ? 5 : 0
  return Math.round((base + speedBonus + streakBonus) * DIFFICULTY_MULTIPLIER[difficulty])
}

const GRADE_NUMERIC: Record<Grade, number> = {
  'A+': 5,
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0,
}

export function computeOverallGrade(results: ScenarioResult[]): Grade {
  if (results.length === 0) return 'F'
  const avg = results.reduce((s, r) => s + GRADE_NUMERIC[r.grade], 0) / results.length
  if (avg >= 4.5) return 'A+'
  if (avg >= 3.5) return 'A'
  if (avg >= 2.5) return 'B'
  if (avg >= 1.5) return 'C'
  if (avg >= 0.5) return 'D'
  return 'F'
}
