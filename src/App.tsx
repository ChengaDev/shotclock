import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import background from './assets/Group8.svg';

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
			<Content>
				<ThemeProvider theme={currentTheme}>
					<GlobalStyle />
					<LanguageProvider>
						<LanguageSelector />
						<ThemeSelector setTheme={setSelectedTheme} />
						<ShotClock />
					</LanguageProvider>
				</ThemeProvider>
			</Content>
			<Footer />
		</div>
	);
}

const Content = styled.div`
	max-width: 700px;
	margin: 0 auto;
	background-color: rgba(3, 3, 3, 0.15);
	border-radius: 10px;
	padding: 20px;
`;

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
`;

export default App;
