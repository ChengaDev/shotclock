import { useEffect, useRef } from 'react'
import { KeyBindings } from '../constants/defaultKeyBindings'

type Handlers = {
  onHorn: () => void
  onStartStop: () => void
  onReset14: () => void
  onReset24: () => void
  onClear: () => void
  onIncrementSecond: () => void
  onDecrementSecond: () => void
}

const normalizeKey = (k: string) => k.length === 1 ? k.toLowerCase() : k

export function useKeyboardShortcuts(bindings: KeyBindings, handlers: Handlers) {
  // Use refs so the event listener never goes stale without re-attaching
  const bindingsRef = useRef(bindings)
  bindingsRef.current = bindings

  const handlersRef = useRef(handlers)
  handlersRef.current = handlers

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when typing in inputs
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) return

      // Ignore modifier combos
      if (e.metaKey || e.ctrlKey || e.altKey) return

      const pressed = normalizeKey(e.key)
      const b = bindingsRef.current
      const h = handlersRef.current

      if (b.horn             && pressed === normalizeKey(b.horn))            { e.preventDefault(); h.onHorn() }
      else if (b.startStop   && pressed === normalizeKey(b.startStop))       { e.preventDefault(); h.onStartStop() }
      else if (b.reset14     && pressed === normalizeKey(b.reset14))         { e.preventDefault(); h.onReset14() }
      else if (b.reset24     && pressed === normalizeKey(b.reset24))         { e.preventDefault(); h.onReset24() }
      else if (b.clear       && pressed === normalizeKey(b.clear))           { e.preventDefault(); h.onClear() }
      else if (b.incrementSecond && pressed === normalizeKey(b.incrementSecond)) { e.preventDefault(); h.onIncrementSecond() }
      else if (b.decrementSecond && pressed === normalizeKey(b.decrementSecond)) { e.preventDefault(); h.onDecrementSecond() }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, []) // empty — refs stay fresh without re-attaching
}
