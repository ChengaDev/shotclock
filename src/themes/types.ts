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
	// Semantic tokens used across content cards
	accent: string;       // interactive highlights: chevrons, arrows, link borders
	cardBorder: string;   // card border colour
	cardText: string;     // body text inside cards
	subtleText: string;   // low-emphasis text (labels, captions)
	pageCard: string;     // outer ContentCard wrapper background
}
