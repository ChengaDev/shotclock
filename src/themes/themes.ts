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
	titleColor: '#3b2a1a',
	mainBackgroundColor: '#f7ab41',
	mainTextColor: '#4d3b28',
	...CommonStyling,
	colors: Colors,
	mediaQueries: MediaQueries,
	text: '#4d3b28',
	primary: '#f7ab41',
	navBackground: 'rgba(255, 255, 255, 0.9)',
	cardBackground: 'rgba(248, 232, 205, 0.78)',
	accent: '#b35c00',
	cardBorder: 'rgba(0, 0, 0, 0.08)',
	cardText: '#4d3b28',
	subtleText: 'rgba(77, 59, 40, 0.55)',
	pageCard: 'rgba(255, 235, 180, 0.55)',
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
