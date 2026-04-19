export type KeyBindings = {
  horn: string
  startStop: string
  reset14: string
  reset24: string
  clear: string
  incrementSecond: string
  decrementSecond: string
}

export const DEFAULT_KEY_BINDINGS: KeyBindings = {
  horn: 'q',
  startStop: 'a',
  reset14: 'd',
  reset24: 'g',
  clear: 't',
  incrementSecond: 'ArrowUp',
  decrementSecond: 'ArrowDown',
}

export type ActionKey = keyof KeyBindings

export const ACTION_LABELS: Record<ActionKey, string> = {
  horn: 'Horn',
  startStop: 'Start / Stop',
  reset14: 'Reset 14s',
  reset24: 'Reset 24s',
  clear: 'Clear Display',
  incrementSecond: '+1 Second',
  decrementSecond: '−1 Second',
}

export function formatKey(key: string): string {
  switch (key) {
    case 'ArrowUp':    return '↑'
    case 'ArrowDown':  return '↓'
    case 'ArrowLeft':  return '←'
    case 'ArrowRight': return '→'
    case ' ':          return 'Spc'
    case 'Backspace':  return '⌫'
    case 'Enter':      return '↵'
    case 'Delete':     return 'Del'
    case 'Escape':     return 'Esc'
    default:           return key.length === 1 ? key.toUpperCase() : key
  }
}
