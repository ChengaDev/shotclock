import LanguageSelector from '../components/LanguageSelector'
import ShotClock from '../components/ShotClock'
import ThemeSelector from '../components/ThemeSelector'
import { createGlobalStyle } from 'styled-components'
import background from '../assets/Group8.svg'

type ShotClockPageProps = {
  selectedTheme: string
  setSelectedTheme: any
}

const ShotClockPage = (props: ShotClockPageProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeSelector
        theme={props.selectedTheme}
        setTheme={props.setSelectedTheme}
      />
      <ShotClock />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
	body {
		background: transparent url(${background}) 0% 0% no-repeat padding-box;
		background-size: cover;
		background-color: ${(props) => props.theme.mainBackgroundColor};
	}

	@media (min-width: 1200px) {
		margin-top: 5%;
		margin-bottom: 5%;
	}
`

export default ShotClockPage
