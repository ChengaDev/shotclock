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
          console.log('hebrew')
          changeLocale(LanguageCodes.Hebrew)
        }}
      >
        <Flag height="20" code="IL" />
      </FlagContainer>
      <FlagContainer
        onClick={() => {
          console.log('italian')
          changeLocale(LanguageCodes.Italian)
        }}
      >
        <Flag height="20" code="ITA" />
      </FlagContainer>
      <FlagContainer
        onClick={() => {
          console.log('spanish')
          changeLocale(LanguageCodes.Spanish)
        }}
      >
        <Flag height="20" code="ES" />
      </FlagContainer>
      <FlagContainer
        onClick={() => {
          console.log('spanish')
          changeLocale(LanguageCodes.English)
        }}
      >
        <Flag height="20" code="US" />
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
