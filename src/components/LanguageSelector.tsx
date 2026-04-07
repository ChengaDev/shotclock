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
      <FlagContainer onClick={() => handleLanguageChange(LanguageCodes.Italian)}>
        <Flag height="15" code="ITA" />
      </FlagContainer>
      <FlagContainer onClick={() => handleLanguageChange(LanguageCodes.Spanish)}>
        <Flag height="15" code="ES" />
      </FlagContainer>
      <FlagContainer onClick={() => handleLanguageChange(LanguageCodes.French)}>
        <Flag height="15" code="FR" />
      </FlagContainer>
      <FlagContainer onClick={() => handleLanguageChange(LanguageCodes.English)}>
        <Flag height="15" code="US" />
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
