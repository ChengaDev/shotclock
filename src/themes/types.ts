type Colors = {
	white: string;
	gray: string;
	red: string;
};

type MediaQueries = {
	mobile: string;
};

export interface ThemeSchema {
	mainBackgroundColor: string;
	mainTextColor: string;
	contentBackground: string;
	adjustIconColor: string;
	defaulButtonBackground: string;
	colors: Colors;
	mediaQueries: MediaQueries;
	text: string;
	titleColor: string;
	primary: string;
	navBackground: string;
	cardBackground: string;
}
