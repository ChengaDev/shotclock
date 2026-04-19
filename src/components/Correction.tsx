import styled from 'styled-components'
import { formatKey } from '../constants/defaultKeyBindings'

type CorrectionProps = {
  decrementSecond: () => void
  incrementSecond: () => void
  keyLabels?: {
    increment?: string
    decrement?: string
  }
}

const Correction = (props: CorrectionProps) => {
  const kl = props.keyLabels ?? {}
  return (
    <Container>
      <AdjustButton onClick={props.decrementSecond} aria-label="Subtract one second">
        −
        {kl.decrement && <KeyHint>{formatKey(kl.decrement)}</KeyHint>}
      </AdjustButton>
      <CorrectionSign>C</CorrectionSign>
      <AdjustButton onClick={props.incrementSecond} aria-label="Add one second">
        +
        {kl.increment && <KeyHint>{formatKey(kl.increment)}</KeyHint>}
      </AdjustButton>
    </Container>
  )
}

const Container = styled.div`
  border: 4px solid ${(props) => props.theme.colors.white};
  border-radius: 40px;
  width: 220px;
  height: 40px;
  background-color: #fdcd27;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media ${(props) => props.theme.mediaQueries.mobile} {
    margin-bottom: 30px;
    margin-top: 30px;
    width: 200px;
  }
`

const AdjustButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: ${(props) => props.theme.adjustIconColor};
  font-size: 26px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.08s ease;

  &:active {
    transform: scale(0.8) translateY(2px);
  }
`

const KeyHint = styled.span`
  display: block;
  font-size: 0.55em;
  font-family: 'Courier New', monospace;
  opacity: 0.6;
  margin-top: 1px;
  line-height: 1;
`

const CorrectionSign = styled.span`
  font-size: 18px;
  font-weight: bold;
  user-select: none;
  width: 52px;
  height: 40px;
  margin: -4px 0;
  border-radius: 40px;
  border: 4px solid ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export default Correction
