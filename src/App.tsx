import { createGlobalStyle, ThemeProvider } from 'styled-components';

import LanguageSelector from './components/LanguageSelector';
import ShotClock from './components/ShotClock';
import Footer from './components/Footer';

import LanguageProvider from './contexts/Language/LanguageProvider';

import { lightTheme, darkTheme } from './themes/themes';

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyle />
				<LanguageProvider>
					<LanguageSelector />
					<ShotClock />
					<Footer />
				</LanguageProvider>
			</ThemeProvider>
		</div>
	);
}

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.mainBackgroundColor};
	}
`;

export default App;
