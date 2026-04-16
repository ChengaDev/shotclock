import { Grade } from '../data/trainingScenarios'
import { Difficulty } from '../utils/scoring'

export type HallOfFameEntry = {
  initials: string    // 3 chars, uppercase
  score: number
  grade: Grade
  difficulty: Difficulty
  date: string        // ISO date string
}

const HOF_KEY = 'sc_hof'
const MAX_ENTRIES = 10

function readAll(): HallOfFameEntry[] {
  try {
    const raw = localStorage.getItem(HOF_KEY)
    if (!raw) return []
    return JSON.parse(raw) as HallOfFameEntry[]
  } catch {
    return []
  }
}

function writeAll(entries: HallOfFameEntry[]): void {
  localStorage.setItem(HOF_KEY, JSON.stringify(entries))
}

export const hallOfFameService = {
  getAll(): HallOfFameEntry[] {
    return readAll().sort((a, b) => b.score - a.score)
  },

  isTopScore(score: number): boolean {
    if (score <= 0) return false
    const entries = readAll()
    if (entries.length < MAX_ENTRIES) return true
    const sorted = [...entries].sort((a, b) => b.score - a.score)
    return score > sorted[MAX_ENTRIES - 1].score
  },

  addEntry(entry: HallOfFameEntry): void {
    const entries = readAll()
    entries.push(entry)
    entries.sort((a, b) => b.score - a.score)
    const trimmed = entries.slice(0, MAX_ENTRIES)
    writeAll(trimmed)
  },

  getPersonalBest(): number {
    const entries = readAll()
    if (entries.length === 0) return 0
    return Math.max(...entries.map(e => e.score))
  },
}
