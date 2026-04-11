import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useParams, Outlet, useNavigate } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import LanguageProvider, { useLocalization } from './contexts/Language/LanguageProvider'
import Navigation from './components/Navigation'
import ShareButtons from './components/ShareButtons'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import { lightTheme, darkTheme } from './themes/themes'
import { createGlobalStyle } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Themes from './constants/Themes'

const ShotClockPage = lazy(() => import('./components/ShotClockPage'))
const AboutUs = lazy(() => import('./components/AboutUs'))
const Instructions = lazy(() => import('./components/Instructions'))
const FIBAResources = lazy(() => import('./components/FIBAResources'))
const FAQ = lazy(() => import('./components/FAQ'))
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const NotFound = lazy(() => import('./components/NotFound'))

const NON_ENGLISH_LANGS = ['it', 'es', 'fr']

interface PageContentProps {
  children: React.ReactNode
  title: string
}

const PageContent: React.FC<PageContentProps> = ({ children, title }) => {
  const location = useLocation()
  const currentUrl = window.location.origin + location.pathname

  return (
    <ContentCard>
      {children}
      <ShareButtons url={currentUrl} title={title} />
    </ContentCard>
  )
}

// Layout for English routes — no URL lang prefix
const EnglishLayout = () => {
  const { changeLocale } = useLocalization()
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 800 } })

  useEffect(() => {
    changeLocale('en')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <animated.div style={fadeIn}><Outlet /></animated.div>
}

// Layout for non-English language routes — reads /:lang from URL
// Also handles /en/* by redirecting to the canonical English URL
const LangLayout = () => {
  const { lang } = useParams<{ lang: string }>()
  const { changeLocale } = useLocalization()
  const navigate = useNavigate()
  const location = useLocation()
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 800 } })

  const isValidLang = lang === 'en' || (!!lang && NON_ENGLISH_LANGS.includes(lang))

  useEffect(() => {
    if (!isValidLang) return
    if (lang === 'en') {
      // Redirect /en/* → /* to keep English at canonical URLs
      const pagePath = location.pathname.slice('/en'.length) || '/'
      navigate(pagePath, { replace: true })
    } else if (lang && NON_ENGLISH_LANGS.includes(lang)) {
      changeLocale(lang)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  if (!isValidLang) return <NotFound />

  return <animated.div style={fadeIn}><Outlet /></animated.div>
}

const pageRoutes = (
  <>
    <Route index element={
      <>
        <ShotClockPage />
        <ShareButtons
          url={window.location.href}
          title="Check out this Basketball Shot Clock App!"
          description="A professional basketball shot clock app for referees and players."
        />
      </>
    } />
    <Route path="about" element={
      <PageContent title="About Us - Basketball Shot Clock App">
        <AboutUs />
      </PageContent>
    } />
    <Route path="instructions" element={
      <PageContent title="Instructions - Basketball Shot Clock App">
        <Instructions />
      </PageContent>
    } />
    <Route path="fiba-resources" element={
      <PageContent title="FIBA Resources - Basketball Shot Clock App">
        <FIBAResources />
      </PageContent>
    } />
    <Route path="faq" element={
      <PageContent title="FAQ - Basketball Shot Clock App">
        <FAQ />
      </PageContent>
    } />
    <Route path="privacy-policy" element={
      <PageContent title="Privacy Policy - ShotClock Pro">
        <PrivacyPolicy />
      </PageContent>
    } />
  </>
)

const THEME_KEY = 'sc_theme'

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>(
    () => localStorage.getItem(THEME_KEY) ?? Themes.Dark
  )
  const theme = selectedTheme === Themes.Light ? lightTheme : darkTheme

  const handleSetTheme = (t: string) => {
    localStorage.setItem(THEME_KEY, t)
    setSelectedTheme(t)
  }

  return (
    <ThemeProvider theme={theme}>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <LanguageProvider>
          <GlobalStyle />
          <AppContainer>
            <Navigation currentTheme={selectedTheme} setTheme={handleSetTheme} />
            <PageWrapper>
              <MainContent>
                <Suspense fallback={null}>
                <Routes>
                  {/* English — canonical URLs without lang prefix */}
                  <Route path="/" element={<EnglishLayout />}>
                    {pageRoutes}
                  </Route>

                  {/* Non-English languages + /en/* redirect */}
                  <Route path="/:lang" element={<LangLayout />}>
                    {pageRoutes}
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Routes>
                </Suspense>
              </MainContent>
              <Footer />
            </PageWrapper>
            <CookieBanner />
          </AppContainer>
        </LanguageProvider>
      </Router>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
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

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Bootstrap base reset */
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  ul, ol {
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 2rem;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  hr {
    margin: 1rem 0;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
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
  margin-top: 80px;
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
  background: ${props => props.theme.pageCard};
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.cardBorder};
`

export default App
