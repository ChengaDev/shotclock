export type LocalizationType = {
	title: string;
	subtitle: string;
	startLabel: string;
	stopLabel: string;
	removeDisplayLabel: string;
	resetButtonText: string;
	possessionLabel: string;
	// Navigation
	home: string;
	instructions: string;
	fibaResources: string;
	about: string;
	// About Page
	aboutTitle: string;
	aboutContent: string[];
	aboutDescription: string;
	featureCards: Array<{ title: string; text: string }>;
	// Instructions Page
	instructionsTitle: string;
	instructionsDescription: string;
	instructionsSections: Array<{ title: string; steps: string[] }>;
	proTipsTitle: string;
	tips: string[];
	basicControls: string;
	gameSituations: string;
	importantRules: string;
	// FIBA Resources Page
	fibaResourcesTitle: string;
	officialRules: string;
	refereeEducation: string;
	technicalOfficials: string;
	videoResources: string;
	fibaResourcesDescription: string;
	fibaResourcesCards: {
		rules: {
			title: string;
			description: string;
		};
		shotClock: {
			title: string;
			description: string;
		};
		training: {
			title: string;
			description: string;
		};
		competition: {
			title: string;
			description: string;
		};
	};
	additionalInfo: {
		title: string;
		worldGoverning: string;
		tournaments: string;
	};
};
