import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const spinRing = keyframes`
  to { transform: rotate(360deg); }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 18px 4px #E8761A44, 0 0 40px 8px #E8761A22; }
  50%       { box-shadow: 0 0 28px 8px #E8761A66, 0 0 60px 16px #E8761A33; }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  background: ${props => props.theme.mainBackgroundColor};
  animation: ${fadeIn} 0.15s ease both;
  gap: 1.25rem;
`

/* Outer spinning arc — two dashed segments like a basketball hoop ring */
const RingOuter = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SpinArc = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3.5px solid transparent;
  border-top-color: #E8761A;
  border-right-color: #E8761A;
  animation: ${spinRing} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`

const SpinArcSlow = styled.div`
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-bottom-color: #E8761A88;
  border-left-color: #E8761A88;
  animation: ${spinRing} 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse;
`

/* Inner display — DSEG14 digit */
const ClockFace = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  background: ${props => props.theme.cardBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${glowPulse} 1.2s ease-in-out infinite;
  position: relative;
  z-index: 1;
`

const DigitWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`

const DigitGhost = styled.span`
  font-family: 'DSEG14ClassicRegular', monospace;
  font-size: 2.2rem;
  color: #E8761A;
  opacity: 0.25;
  letter-spacing: -1px;
  user-select: none;
`

const Digit = styled.span`
  font-family: 'DSEG14ClassicRegular', monospace;
  font-size: 2.2rem;
  color: #E8761A;
  text-shadow: 0 0 12px #E8761A99;
  line-height: 1;
  letter-spacing: -1px;
  user-select: none;
  position: absolute;
`

const Label = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${props => props.theme.subtleText};
  margin: 0;
`

const BasketballLoader: React.FC = () => {
  const [count, setCount] = useState(24)

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => (c <= 1 ? 24 : c - 1))
    }, 130) // 24→0 in ~3s
    return () => clearInterval(id)
  }, [])

  return (
    <Wrapper>
      <RingOuter>
        <SpinArc />
        <SpinArcSlow />
        <ClockFace>
          <DigitWrap>
            <DigitGhost>88</DigitGhost>
            <Digit>{String(count).padStart(2, '0')}</Digit>
          </DigitWrap>
        </ClockFace>
      </RingOuter>
      <Label>Loading…</Label>
    </Wrapper>
  )
}

export default BasketballLoader
