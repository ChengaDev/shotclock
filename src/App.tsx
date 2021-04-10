import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import background from './assets/Group8.svg';
import Footer from './components/Footer';
import ShotClockPage from './components/ShotClockPage';

import LanguageProvider from './contexts/Language/LanguageProvider';
import Navigation from './components/Navigation';

import { lightTheme, darkTheme } from './themes/themes';

import Themes from './constants/Themes';
import Routes from './AppRoutes';

import './assets/fonts/dseg14/dseg14.css';

function App() {
	const [selectedTheme, setSelectedTheme] = useState<string>(Themes.Light);

	const currentTheme = selectedTheme === Themes.Light ? lightTheme : darkTheme;

	return (
		<div className='App'>
			<Router>
				<ThemeProvider theme={currentTheme}>
					<Navigation currentTheme={selectedTheme} />
					<Content>
						<GlobalStyle />
						<LanguageProvider>
							<Switch>
								<Route exact path={Routes.Home}>
									<ShotClockPage selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
								</Route>
								<Route exact path={Routes.App}></Route>
							</Switch>
						</LanguageProvider>
					</Content>
					<Footer />
				</ThemeProvider>
			</Router>
		</div>
	);
}

const Content = styled.div`
	max-width: 700px;
	margin: 0 auto;
	background-color: ${(props) => props.theme.contentBackground};
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
