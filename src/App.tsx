import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import LanguageSelector from './components/LanguageSelector';
import ShotClock from './components/ShotClock';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';

import LanguageProvider from './contexts/Language/LanguageProvider';

import { lightTheme, darkTheme } from './themes/themes';

import Themes from './constants/Themes';

function App() {
	const [selectedTheme, setSelectedTheme] = useState<string>(Themes.Light);

	const currentTheme = selectedTheme === Themes.Light ? lightTheme : darkTheme;

	return (
		<div className='App'>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyle />
				<LanguageProvider>
					<LanguageSelector />
					<ShotClock />
					<Footer />
					<ThemeSelector setTheme={setSelectedTheme} />
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
