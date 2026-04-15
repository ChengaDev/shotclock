import ShotClock from '../components/ShotClock'
import { createGlobalStyle } from 'styled-components'
import background from '../assets/Group8.svg'
import styled from 'styled-components'
import SEO from './SEO'
import { useLocalization } from '../contexts/Language/LanguageProvider'

const ShotClockPage = () => {
  const { locals } = useLocalization()

  return (
    <PageContainer>
      <SEO
        title={locals.title}
        description={locals.pageBlurb}
      />
      <GlobalStyle />
      <ShotClock />
      <PageBlurb>{locals.pageBlurb}</PageBlurb>
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
