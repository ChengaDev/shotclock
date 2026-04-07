import ShotClock from '../components/ShotClock'
import { createGlobalStyle } from 'styled-components'
import background from '../assets/Group8.svg'
import styled from 'styled-components'
import SEO from './SEO'

const ShotClockPage = () => {
  return (
    <PageContainer>
      <SEO
        title="ShotClock Pro – Free Online Basketball Shot Clock"
        description="Free online basketball shot clock — start, stop, and reset in seconds. Practice on any device, no installation needed."
      />
      <GlobalStyle />
      <ShotClock />
      <PageBlurb>
        ShotClock Pro is a free online basketball shot clock you can use directly in your browser.
        Start the 24-second countdown, apply the 14-second reset after an offensive rebound,
        and hear the buzzer when time runs out — just like a real game.
      </PageBlurb>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  position: relative;
  min-height: 80vh;
  width: 100%;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
  ${PageContainer} {
    padding-top: 20px;
    background: transparent url(${background}) 0% 0% no-repeat padding-box;
    background-size: cover;
    background-color: ${(props) => props.theme.mainBackgroundColor};
  }
  
  @media (min-width: 1200px) {
    margin-top: 5%;
    margin-bottom: 5%;
  }
`


const PageBlurb = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem;
  padding: 0 1.5rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${props => props.theme.subtleText};
`

export default ShotClockPage
