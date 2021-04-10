type Colors = {
	white: string;
	gray: string;
	red: string;
};

type MediaQueries = {
	mobile: string;
};

export type ThemeSchema = {
	mainBackgroundColor: string;
	contentBackground: string;
	mainTextColor: string;
	adjustIconColor: string;
	defaulButtonBackground: string;
	colors: Colors;
	mediaQueries: MediaQueries;
};
