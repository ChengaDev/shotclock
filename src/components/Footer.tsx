import styled from 'styled-components'
import DonateButton from './DonateButton'
import LanguageSelector from './LanguageSelector'

const Footer = () => {
  return (
    <Container>
      <LanguageSelector />
      Created by{' '}
      <a
        href="https://linkedin.com/in/chengazit"
        target="_blank"
        rel="noreferrer"
      >
        Chen Gazit
      </a>{' '}
      (ChengaDev) - 2021
      <DonateButton />
    </Container>
  )
}

const Container = styled.div`
  color: ${(props) => props.theme.mainTextColor};
  margin-top: 20px;
  text-align: center;
`

export default Footer
