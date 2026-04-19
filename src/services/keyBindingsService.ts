import { KeyBindings, DEFAULT_KEY_BINDINGS } from '../constants/defaultKeyBindings'

const STORAGE_KEY = 'sc_keybindings'

export const keyBindingsService = {
  load(): KeyBindings {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        return { ...DEFAULT_KEY_BINDINGS, ...JSON.parse(saved) }
      }
    } catch {}
    return { ...DEFAULT_KEY_BINDINGS }
  },

  save(bindings: KeyBindings): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bindings))
  },

  reset(): KeyBindings {
    localStorage.removeItem(STORAGE_KEY)
    return { ...DEFAULT_KEY_BINDINGS }
  },
}
