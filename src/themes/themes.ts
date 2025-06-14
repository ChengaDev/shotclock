import { ThemeSchema } from './types';

const CommonStyling = {
	contentBackground: 'rgba(3, 3, 3, 0.15)',
	adjustIconColor: '#000000',
	defaulButtonBackground: '#fdcd27'
};

const Colors = {
	white: '#fff',
	gray: '#808080',
	red: '#ff0000'
};

const MediaQueries = {
	mobile: '(max-width: 550px)'
};

export const lightTheme: ThemeSchema = {
	titleColor: 'rgba(40,40,40,0.9)',
	mainBackgroundColor: '#f7ab41',
	mainTextColor: '#1D1D1B',
	...CommonStyling,
	colors: Colors,
	mediaQueries: MediaQueries,
	text: '#1D1D1B',
	primary: '#f7ab41',
	navBackground: 'rgba(255, 255, 255, 0.9)',
	cardBackground: 'rgba(255, 255, 255, 0.8)'
};

export const darkTheme: ThemeSchema = {
	titleColor: '#ffd700',
	mainBackgroundColor: '#2C2C2C',
	mainTextColor: Colors.white,
	...CommonStyling,
	colors: Colors,
	mediaQueries: MediaQueries,
	text: Colors.white,
	primary: '#f7ab41',
	navBackground: 'rgba(44, 44, 44, 0.9)',
	cardBackground: 'rgba(44, 44, 44, 0.8)'
};
