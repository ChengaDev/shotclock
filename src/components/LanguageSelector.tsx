import styled from 'styled-components'
import Flag from 'react-world-flags'
import LanguageCodes from '../constants/LanguageCodes'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLocalization } from '../contexts/Language/LanguageProvider'

const LanguageSelector = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { languageCode } = useLocalization()

  const handleLanguageChange = (newLang: string) => {
    // Use languageCode from context (always correct) rather than useParams,
    // which returns {} when this component is rendered outside a matched route.
    const pagePath = languageCode === 'en'
      ? location.pathname
      : (location.pathname.slice(`/${languageCode}`.length) || '/')

    if (newLang === 'en') {
      navigate(pagePath)
    } else {
      navigate(`/${newLang}${pagePath === '/' ? '' : pagePath}`)
    }
  }

  return (
    <Container>
      <FlagContainer onClick={() => handleLanguageChange(LanguageCodes.Italian)} aria-label="Switch to Italian">
        <Flag height="15" width="22" code="ITA" />
      </FlagContainer>
      <FlagContainer onClick={() => handleLanguageChange(LanguageCodes.Spanish)} aria-label="Switch to Spanish">
        <Flag height="15" width="22" code="ES" />
      </FlagContainer>
      <FlagContainer onClick={() => handleLanguageChange(LanguageCodes.French)} aria-label="Switch to French">
        <Flag height="15" width="22" code="FR" />
      </FlagContainer>
      <FlagContainer onClick={() => handleLanguageChange(LanguageCodes.Greek)} aria-label="Switch to Greek">
        <Flag height="15" width="22" code="GR" />
      </FlagContainer>
      <FlagContainer onClick={() => handleLanguageChange(LanguageCodes.English)} aria-label="Switch to English">
        <Flag height="15" width="22" code="US" />
      </FlagContainer>
    </Container>
  )
}

const Container = styled.div`
  font-size: 15px;
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`

const FlagContainer = styled.div`
  padding: 7px;
  cursor: pointer;
`

export default LanguageSelector
