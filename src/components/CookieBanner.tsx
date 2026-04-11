import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'cookie_consent'

function updateGoogleConsent(value: 'granted' | 'denied') {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: value,
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    })
  }
}

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as 'granted' | 'denied' | null
    if (stored === 'granted' || stored === 'denied') {
      // Re-apply saved choice on every page load so Consent Mode is always in sync
      updateGoogleConsent(stored)
      setConsent(stored)
    } else {
      // No prior choice — show banner
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'granted')
    updateGoogleConsent('granted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'denied')
    updateGoogleConsent('denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <Banner role="dialog" aria-label="Cookie consent">
      <Text>
        We use cookies for analytics and advertising. See our{' '}
        <PolicyLink to="/privacy-policy">Privacy Policy</PolicyLink>.
      </Text>
      <Buttons>
        <DeclineButton onClick={handleDecline}>Essential only</DeclineButton>
        <AcceptButton onClick={handleAccept}>Accept all</AcceptButton>
      </Buttons>
    </Banner>
  )
}

const slideUp = keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`

const Banner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 15, 0.97);
  border-top: 1px solid rgba(255, 215, 0, 0.25);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  animation: ${slideUp} 0.35s ease-out;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.25rem;
  }
`

const Text = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  line-height: 1.5;
  flex: 1;
`

const PolicyLink = styled(Link)`
  color: #ffd700;
  text-decoration: underline;
  &:hover {
    color: #ffe566;
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`

const BaseButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
`

const DeclineButton = styled(BaseButton)`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.65);
  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.9);
  }
`

const AcceptButton = styled(BaseButton)`
  background: #ffd700;
  color: #111;
  &:hover {
    background: #ffe566;
  }
`

export default CookieBanner
