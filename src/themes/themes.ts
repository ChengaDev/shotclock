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
	mainBackgroundColor: '#f7ab41',
	mainTextColor: '#1D1D1B',
	...CommonStyling,
	colors: Colors,
	mediaQueries: MediaQueries
};

export const darkTheme: ThemeSchema = {
	mainBackgroundColor: '#2C2C2C',
	mainTextColor: Colors.white,
	...CommonStyling,
	colors: Colors,
	mediaQueries: MediaQueries
};
