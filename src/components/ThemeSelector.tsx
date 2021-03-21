import styled from 'styled-components';
import Themes from '../constants/Themes';

type ThemeSelcetorProps = {
	setTheme: (newTheme: string) => void;
};

const ThemeSelector = (props: ThemeSelcetorProps) => {
	const useLightTheme = () => {
		props.setTheme(Themes.Light);
	};
	const useDarkTheme = () => {
		props.setTheme(Themes.Dark);
	};

	return (
		<Container>
			<ThemeItem onClick={useLightTheme}>Light</ThemeItem>|<ThemeItem onClick={useDarkTheme}>Dark</ThemeItem>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	margin-bottom: 20px;
	justify-content: center;
	margin-top: 15px;
	color: ${(props) => props.theme.mainTextColor};
`;

const ThemeItem = styled.div`
	font-size: 14px;
	margin-right: 10px;
	margin-left: 10px;
	cursor: pointer;
	line-height: 22px;
`;

export default ThemeSelector;
