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
	titleColor: '#110C05',
	mainBackgroundColor: '#FEF0DB',
	mainTextColor: '#110C05',
	...CommonStyling,
	colors: Colors,
	mediaQueries: MediaQueries,
	text: '#251608',
	primary: '#E8761A',
	navBackground: 'rgba(17, 12, 5, 0.97)',
	cardBackground: '#FFFFFF',
	accent: '#E8761A',
	cardBorder: 'rgba(232, 118, 26, 0.28)',
	cardText: '#3D2810',
	subtleText: 'rgba(17, 12, 5, 0.5)',
	pageCard: 'rgba(255, 248, 238, 0.95)',
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
	cardBackground: '#212121',
	accent: '#ffd700',
	cardBorder: 'rgba(255, 255, 255, 0.08)',
	cardText: 'rgba(255, 255, 255, 0.85)',
	subtleText: 'rgba(255, 255, 255, 0.4)',
	pageCard: 'transparent',
};
