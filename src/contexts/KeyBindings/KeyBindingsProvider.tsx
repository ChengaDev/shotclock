import React, { createContext, useContext, useState } from 'react'
import { KeyBindings } from '../../constants/defaultKeyBindings'
import { keyBindingsService } from '../../services/keyBindingsService'
import KeyboardSettingsModal from '../../components/KeyboardSettingsModal'

type KeyBindingsContextType = {
  keyBindings: KeyBindings
  setKeyBindings: (b: KeyBindings) => void
  openModal: () => void
}

const KeyBindingsContext = createContext<KeyBindingsContextType | null>(null)

export const KeyBindingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [keyBindings, setKeyBindingsState] = useState<KeyBindings>(() => keyBindingsService.load())
  const [modalOpen, setModalOpen] = useState(false)

  const setKeyBindings = (b: KeyBindings) => {
    setKeyBindingsState(b)
  }

  return (
    <KeyBindingsContext.Provider value={{ keyBindings, setKeyBindings, openModal: () => setModalOpen(true) }}>
      {children}
      {modalOpen && (
        <KeyboardSettingsModal
          bindings={keyBindings}
          onClose={() => setModalOpen(false)}
          onSave={(b) => { setKeyBindings(b) }}
        />
      )}
    </KeyBindingsContext.Provider>
  )
}

export function useKeyBindings(): KeyBindingsContextType {
  const ctx = useContext(KeyBindingsContext)
  if (!ctx) throw new Error('useKeyBindings must be used within KeyBindingsProvider')
  return ctx
}
