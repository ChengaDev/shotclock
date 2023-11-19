import styled from 'styled-components'
import Flag from 'react-world-flags'
import { useLocalization } from '../contexts/Language/LanguageProvider'
import LanguageCodes from '../constants/LanguageCodes'

const LanguageSelector = () => {
  const { changeLocale } = useLocalization()

  return (
    <Container>
      <FlagContainer
        onClick={() => {
          changeLocale(LanguageCodes.Italian)
        }}
      >
        <Flag height="15" code="ITA" />
      </FlagContainer>
      <FlagContainer
        onClick={() => {
          changeLocale(LanguageCodes.Spanish)
        }}
      >
        <Flag height="15" code="ES" />
      </FlagContainer>
      <FlagContainer
        onClick={() => {
          changeLocale(LanguageCodes.Hebrew)
        }}
      >
        <Flag height="15" code="IL" />
      </FlagContainer>
      <FlagContainer
        onClick={() => {
          changeLocale(LanguageCodes.French)
        }}
      >
        <Flag height="15" code="FR" />
      </FlagContainer>
      <FlagContainer
        onClick={() => {
          changeLocale(LanguageCodes.English)
        }}
      >
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
