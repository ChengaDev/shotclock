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
	faq: string;
	// FAQ Page
	faqTitle: string;
	faqDescription: string;
	faqItems: Array<{ question: string; answer: string }>;
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
	// Navigation extras
	play: string;
	clock: string;
	playNow: string;
	playPageTitle: string;
	playPageDescription: string;
	// Clock page
	clockPageTitle: string;
	clockPageDescription: string;
	// Landing page
	launchClock: string;
	comingSoon: string;
	landingHeroTitle: string;
	landingHeroSubtitle: string;
	landingModesTitle: string;
	landingModeClockTitle: string;
	landingModeClockDesc: string;
	landingModeTrainingTitle: string;
	landingModeTrainingDesc: string;
	landingModeYoutubeTitle: string;
	landingModeYoutubeDesc: string;
	landingFeaturesTitle: string;
	landingFeature1Label: string;
	landingFeature1Sub: string;
	landingFeature2Label: string;
	landingFeature2Sub: string;
	landingFeature3Label: string;
	landingFeature3Sub: string;
	landingFeature4Label: string;
	landingFeature4Sub: string;
	// Shared UI
	lightMode: string;
	darkMode: string;
	shareThisPage: string;
	pageBlurb: string;
	quickLinks: string;
	language: string;
	getInTouch: string;
	getInTouchText: string;
	// Reaction Training
	reactionTraining: string;
	reactionTrainingTitle: string;
	reactionTrainingDescription: string;
	startSession: string;
	readyButton: string;
	scenarioOf: string;
	difficulty: string;
	difficultyEasy: string;
	difficultyMedium: string;
	difficultyPro: string;
	startStopLabel: string;
	reset14Label: string;
	reset24Label: string;
	correctAnswer: string;
	wrongAnswer: string;
	timesUp: string;
	reactionTime: string;
	milliseconds: string;
	explanationLabel: string;
	nextScenario: string;
	pointsEarned: string;
	streakLabel: string;
	timeRemaining: string;
	sessionComplete: string;
	yourScore: string;
	scenariosCompleted: string;
	yourGrade: string;
	personalBest: string;
	sessionBreakdown: string;
	restartSession: string;
	hallOfFame: string;
	enterInitials: string;
	submitInitials: string;
	gradeLabels: {
		ap: string;
		a: string;
		b: string;
		c: string;
		d: string;
		f: string;
	};
	// YouTube Free Play
	youtubePageTitle: string;
	youtubePageDescription: string;
	youtubeUrlPlaceholder: string;
	youtubeLoadVideo: string;
	youtubeChangeVideo: string;
	youtubeInvalidUrl: string;
};
