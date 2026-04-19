import ShotClock from '../components/ShotClock'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import SEO from './SEO'
import { useLocalization } from '../contexts/Language/LanguageProvider'

const ShotClockPage = () => {
  const { locals } = useLocalization()

  return (
    <PageContainer>
      <SEO
        title={`${locals.clockPageTitle} | ShotClock Pro`}
        description={locals.clockPageDescription}
      />
      <GlobalStyle />
      <LandscapeBanner>
        <RotateIcon />
        Rotate to landscape for the best experience
      </LandscapeBanner>
      <DesktopBanner>
        <MobileIcon />
        For the best shot clock experience, open this page on your mobile device in landscape mode
      </DesktopBanner>
      <PageTitle>Shot Clock Panel</PageTitle>
      <LandscapeScaler>
        <ShotClock />
      </LandscapeScaler>
      <PageBlurb>{locals.pageBlurb}</PageBlurb>
    </PageContainer>
  )
}

const RotateIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22h6" />
  </svg>
)

const MobileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
)

const PageContainer = styled.div`
  position: relative;
  min-height: 80vh;
  width: 100%;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
  ${PageContainer} {
    padding-top: 50px;
    background-color: ${(props) => props.theme.mainBackgroundColor};
  }

  @media (min-width: 1025px) {
    ${PageContainer} {
      padding-top: 80px;
    }
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    ${PageContainer} {
      padding-top: 75px;
    }
  }

  @media (min-width: 1200px) {
    margin-top: 5%;
    margin-bottom: 5%;
  }
`


const LandscapeBanner = styled.div`
  display: none;

  @media (max-width: 1024px) and (orientation: portrait) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 999;
    background: ${props => props.theme.defaulButtonBackground};
    color: #111;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 8px 16px;
    text-align: center;
    box-sizing: border-box;
  }
`

const DesktopBanner = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 999;
    background: ${props => props.theme.defaulButtonBackground};
    color: #111;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 10px 16px;
    text-align: center;
    box-sizing: border-box;
  }
`

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 700;
  text-align: center;
  margin: -20px 0 30px;
  font-weight: 500;
  background: linear-gradient(135deg, ${props => props.theme.titleColor} 20%, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const LandscapeScaler = styled.div`
  @media (orientation: landscape) and (max-height: 500px) {
    zoom: 0.75;
  }
`

const PageBlurb = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 6rem auto 2rem;
  padding: 0 1.5rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${props => props.theme.subtleText};
`

export default ShotClockPage
