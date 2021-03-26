import { LocalizationType } from '../localization/types';

type AppLocalizationType = {
	[key: string]: LocalizationType;
};

const AppLocalization: AppLocalizationType = {
	he: {
		title: 'ניהול שעון זריקות בכדורסל',
		subtitle: 'התאמן על יכולות תפעול שעון זריקות בכדורסל',
		startLabel: 'התחל',
		stopLabel: 'עצור',
		removeDisplayLabel: 'תצוגה'
	},
	en: {
		title: 'Basketball shot clock practice',
		subtitle: 'Practice your 24 shot clock operation skills',
		startLabel: 'START',
		stopLabel: 'STOP',
		removeDisplayLabel: 'Clear'
	},
	it: {
		title: "Practica dell'orologio di pallacanestro",
		subtitle: 'Allena le tue abilità di operatore di 24 secondi',
		startLabel: 'Inizio',
		stopLabel: 'Fermare',
		removeDisplayLabel: 'Schermo'
	},
	es: {
		title: 'Práctica de reloj de baloncesto',
		subtitle: 'Practica tus habilidades de operador de reloj de tiro de 24 segundos',
		startLabel: 'Comienzo',
		stopLabel: 'Detener',
		removeDisplayLabel: 'Mostrar'
	}
};

export default AppLocalization;
