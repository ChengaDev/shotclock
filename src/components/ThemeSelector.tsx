import styled from 'styled-components';
import Themes from '../constants/Themes';

type ThemeSelcetorProps = {
	setTheme: (newTheme: string) => void;
	theme: string;
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
			<ThemeItem isSelected={props.theme === Themes.Light} onClick={useLightTheme}>
				Light
			</ThemeItem>
			|
			<ThemeItem isSelected={props.theme === Themes.Dark} onClick={useDarkTheme}>
				Dark
			</ThemeItem>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	margin-bottom: 20px;
	justify-content: center;
	margin-top: 10px;
	color: ${(props) => props.theme.mainTextColor};
	line-height: 20px;
`;

type ThemeItemProps = {
	isSelected: boolean;
};

const ThemeItem = styled.div<ThemeItemProps>`
	font-size: 15px;
	margin-right: 10px;
	margin-left: 10px;
	cursor: pointer;
	line-height: 22px;

	font-weight: ${(props) => (props.isSelected ? 'bold' : '')};
`;

export default ThemeSelector;
