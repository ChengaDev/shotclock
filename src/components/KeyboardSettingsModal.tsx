import React, { useState, useEffect, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import {
  KeyBindings,
  ActionKey,
  ACTION_LABELS,
  formatKey,
} from '../constants/defaultKeyBindings'
import { keyBindingsService } from '../services/keyBindingsService'

type Props = {
  bindings: KeyBindings
  onClose: () => void
  onSave: (bindings: KeyBindings) => void
}

const BLOCKED_KEYS = [
  'Tab', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6',
  'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
  'Meta', 'Control', 'Alt', 'Shift', 'CapsLock',
]

const ACTION_ORDER: ActionKey[] = [
  'horn', 'startStop', 'reset14', 'reset24', 'clear', 'incrementSecond', 'decrementSecond',
]

const KeyboardSettingsModal: React.FC<Props> = ({ bindings, onClose, onSave }) => {
  const [local, setLocal] = useState<KeyBindings>({ ...bindings })
  const [listening, setListening] = useState<ActionKey | null>(null)

  const handleKeyCapture = useCallback((e: KeyboardEvent) => {
    if (!listening) return
    e.preventDefault()
    e.stopPropagation()

    if (e.key === 'Escape') { setListening(null); return }
    if (BLOCKED_KEYS.includes(e.key)) return
    if (e.metaKey || e.ctrlKey || e.altKey) return

    const normalizeKey = (k: string) => k.length === 1 ? k.toLowerCase() : k
    const newKey = e.key

    // Clear duplicate binding on other actions
    const updated: KeyBindings = { ...local }
    for (const action of ACTION_ORDER) {
      if (action !== listening && normalizeKey(updated[action]) === normalizeKey(newKey)) {
        updated[action] = ''
      }
    }
    updated[listening] = newKey

    setLocal(updated)
    setListening(null)
    keyBindingsService.save(updated)
    onSave(updated)
  }, [listening, local, onSave])

  useEffect(() => {
    if (!listening) return
    window.addEventListener('keydown', handleKeyCapture, true)
    return () => window.removeEventListener('keydown', handleKeyCapture, true)
  }, [listening, handleKeyCapture])

  const handleReset = () => {
    const defaults = keyBindingsService.reset()
    setLocal(defaults)
    onSave(defaults)
  }

  return (
    <Backdrop onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <KeyboardIcon />
          <ModalTitle>Keyboard Shortcuts</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close">✕</CloseButton>
        </ModalHeader>

        <Hint>Click a key badge, then press the new key. Press Esc to cancel.</Hint>

        <ActionList>
          {ACTION_ORDER.map(action => (
            <ActionRow key={action}>
              <ActionLabel>{ACTION_LABELS[action]}</ActionLabel>
              <KeyBadge
                $listening={listening === action}
                $empty={!local[action]}
                onClick={() => setListening(prev => prev === action ? null : action)}
                title="Click to remap"
              >
                {listening === action
                  ? 'press key…'
                  : local[action] ? formatKey(local[action]) : '—'
                }
              </KeyBadge>
            </ActionRow>
          ))}
        </ActionList>

        <ModalFooter>
          <ResetButton onClick={handleReset}>Reset to defaults</ResetButton>
        </ModalFooter>
      </Modal>
    </Backdrop>
  )
}

/* ── Icons ── */
const KeyboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10" />
  </svg>
)

/* ── Animations ── */
const fadeIn = keyframes`from { opacity: 0 } to { opacity: 1 }`
const slideUp = keyframes`from { transform: translateY(16px); opacity: 0 } to { transform: translateY(0); opacity: 1 }`

/* ── Styled components ── */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.15s ease;
`

const Modal = styled.div`
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: ${slideUp} 0.2s ease;

  @media (max-width: 440px) {
    margin: 0 1rem;
  }
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`

const ModalTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
  color: ${props => props.theme.titleColor};
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.subtleText};
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  line-height: 1;
  transition: color 0.15s;

  &:hover { color: ${props => props.theme.text}; }
`

const Hint = styled.p`
  font-size: 0.75rem;
  color: ${props => props.theme.subtleText};
  margin: 0 0 1.25rem;
  line-height: 1.4;
`

const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  background: ${props => props.theme.mainBackgroundColor};
`

const ActionLabel = styled.span`
  font-size: 0.88rem;
  font-weight: 500;
  color: ${props => props.theme.text};
`

const KeyBadge = styled.button<{ $listening: boolean; $empty: boolean }>`
  min-width: 52px;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: ${props => props.$listening ? '0.65rem' : '0.82rem'};
  font-weight: 700;
  font-family: 'Courier New', monospace;
  cursor: pointer;
  transition: all 0.15s;
  border: 2px solid ${props =>
    props.$listening
      ? props.theme.accent
      : props.$empty
        ? props.theme.cardBorder
        : props.theme.cardBorder};
  background: ${props =>
    props.$listening
      ? `${props.theme.accent}18`
      : props.theme.cardBackground};
  color: ${props =>
    props.$listening
      ? props.theme.accent
      : props.$empty
        ? props.theme.subtleText
        : props.theme.text};
  white-space: nowrap;
  text-align: center;

  &:hover:not(:disabled) {
    border-color: ${props => props.theme.accent};
    color: ${props => props.$listening ? props.theme.accent : props.theme.text};
  }
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.cardBorder};
`

const ResetButton = styled.button`
  background: none;
  border: 1.5px solid ${props => props.theme.cardBorder};
  color: ${props => props.theme.subtleText};
  border-radius: 8px;
  padding: 0.4rem 0.9rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${props => props.theme.accent};
    color: ${props => props.theme.text};
  }
`

export default KeyboardSettingsModal
