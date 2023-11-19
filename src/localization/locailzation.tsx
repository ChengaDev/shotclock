import { LocalizationType } from '../localization/types'

type AppLocalizationType = {
  [key: string]: LocalizationType
}

const AppLocalization: AppLocalizationType = {
  he: {
    title: 'ניהול שעון זריקות בכדורסל',
    subtitle: 'התאמן על יכולות תפעול שעון זריקות בכדורסל',
    startLabel: 'התחל',
    stopLabel: 'עצור',
    removeDisplayLabel: 'תצוגה',
    resetButtonText: 'איפוס',
  },
  en: {
    title: 'Basketball shot clock practice',
    subtitle: 'Practice your 24 shot clock operation skills',
    startLabel: 'Start',
    stopLabel: 'Stop',
    removeDisplayLabel: 'Clear',
    resetButtonText: 'Reset',
  },
  it: {
    title: "Practica dell'orologio di pallacanestro",
    subtitle: 'Allena le tue abilità di operatore di 24 secondi',
    startLabel: 'Inizio',
    stopLabel: 'Fermare',
    removeDisplayLabel: 'Schermo',
    resetButtonText: 'Ripristina',
  },
  es: {
    title: 'Práctica de reloj de baloncesto',
    subtitle:
      'Practica tus habilidades de operador de reloj de tiro de 24 segundos',
    startLabel: 'Comienzo',
    stopLabel: 'Detener',
    removeDisplayLabel: 'Mostrar',
    resetButtonText: 'Reiniciar',
  },
  fr: {
    title: 'Entraînement au chronomètre des tirs',
    subtitle:
      'Pratiquez vos compétences de fonctionnement du chronomètre 24 tirs',
    startLabel: 'Commencer',
    stopLabel: 'Arrêt',
    removeDisplayLabel: 'Clair',
    resetButtonText: 'Réinitialiser',
  },
}

export default AppLocalization
