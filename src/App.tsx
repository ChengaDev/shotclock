import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import LanguageProvider from './contexts/Language/LanguageProvider'
import Navigation from './components/Navigation'
import ShotClockPage from './components/ShotClockPage'
import AboutUs from './components/AboutUs'
import Instructions from './components/Instructions'
import FIBAResources from './components/FIBAResources'
import ShareButtons from './components/ShareButtons'
import Footer from './components/Footer'
import { lightTheme, darkTheme } from './themes/themes'
import { createGlobalStyle } from 'styled-components'
import './assets/fonts/dseg14/dseg14.css'
import { useSpring, animated } from 'react-spring'
import SEO from './components/SEO'
import Themes from './constants/Themes'

interface PageContentProps {
  children: React.ReactNode;
  title: string;
}

const PageContent: React.FC<PageContentProps> = ({ children, title }) => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;
  
  return (
    <ContentCard>
      {children}
      <ShareButtons url={currentUrl} title={title} />
    </ContentCard>
  );
};

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(Themes.Dark)
  const theme = selectedTheme === Themes.Light ? lightTheme : darkTheme

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 }
  })

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <GlobalStyle />
        <SEO />
        <Router>
          <AppContainer>
            <Navigation currentTheme={selectedTheme} setTheme={setSelectedTheme} />
            <PageWrapper>
              <MainContent>
                <Routes>
                  <Route path="/" element={
                    <animated.div style={fadeIn}>
                      <ShotClockPage />
                      <ShareButtons 
                        url={window.location.href}
                        title="Check out this Basketball Shot Clock App!"
                        description="A professional basketball shot clock app for referees and players."
                      />
                    </animated.div>
                  } />
                  <Route path="/about" element={
                    <animated.div style={fadeIn}>
                      <PageContent title="About Us - Basketball Shot Clock App">
                        <AboutUs />
                      </PageContent>
                    </animated.div>
                  } />
                  <Route path="/instructions" element={
                    <animated.div style={fadeIn}>
                      <PageContent title="Instructions - Basketball Shot Clock App">
                        <Instructions />
                      </PageContent>
                    </animated.div>
                  } />
                  <Route path="/fiba-resources" element={
                    <animated.div style={fadeIn}>
                      <PageContent title="FIBA Resources - Basketball Shot Clock App">
                        <FIBAResources />
                      </PageContent>
                    </animated.div>
                  } />
                </Routes>
              </MainContent>
              <Footer />
            </PageWrapper>
          </AppContainer>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DSEG14ClassicRegular';
    src: url('./assets/fonts/dseg14/DSEG14ClassicRegular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    background: ${props => props.theme.mainBackgroundColor};
  }

  * {
    box-sizing: border-box;
  }
`

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`

const PageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 80px; // Height of the navigation
  min-height: calc(100vh - 80px);
`

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`

const ContentCard = styled.div`
  background: ${props => props.theme.mainBackgroundColor};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  width: 90%;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateY(0);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`

export default App
