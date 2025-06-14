import LanguageSelector from '../components/LanguageSelector'
import ShotClock from '../components/ShotClock'
import { createGlobalStyle } from 'styled-components'
import background from '../assets/Group8.svg'
import styled from 'styled-components'

const ShotClockPage = () => {
  return (
    <PageContainer>
      <GlobalStyle />
      <ShotClock />
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
    padding-bottom: 1rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: calc(100vh - 60px - 60px); // Subtract header and footer height
    padding: 1rem;
  }
`

export default ShotClockPage
