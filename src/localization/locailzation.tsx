import { LocalizationType } from '../localization/types'

type AppLocalizationType = {
  [key: string]: LocalizationType
}

const AppLocalization: AppLocalizationType = {
  en: {
    title: 'Basketball shot clock practice',
    subtitle: 'Practice your 24 shot clock operation skills',
    startLabel: 'Start',
    stopLabel: 'Stop',
    removeDisplayLabel: 'Clear',
    resetButtonText: 'Reset',
    possessionLabel: 'Poss.',
    // Navigation
    home: 'Home',
    instructions: 'Instructions',
    fibaResources: 'FIBA Resources',
    about: 'About',
    // About Page
    aboutTitle: 'About ShotClock Pro',
    aboutContent: [
      'ShotClock Pro is a professional basketball shot clock training application designed to help referees, scorekeepers, and basketball enthusiasts master the art of shot clock operation.',
      'Our mission is to provide a comprehensive training platform that combines the simplicity of basic shot clock operation with advanced scenario-based training for professional development.',
      "Whether you're a beginner learning the basics or a professional looking to enhance your skills, ShotClock Pro offers the tools and resources you need to excel in basketball game management.",
    ],
    aboutDescription:
      'Join us on the journey to becoming a professional shot clock expert',
    featureCards: [
      {
        title: 'Professional Training',
        text: 'Master the art of shot clock operation with our comprehensive training platform.',
      },
      {
        title: 'Real-time Practice',
        text: 'Simulate real game scenarios and sharpen your reaction time under pressure.',
      },
      {
        title: 'FIBA Resources',
        text: 'Access official FIBA rules and guidelines to stay up to date with international standards.',
      },
    ],
    // Instructions Page
    instructionsTitle: 'Shot Clock Instructions',
    instructionsDescription:
      'Learn the basic and advanced rules of basketball shot clock operation',
    basicControls: 'Basic Controls',
    gameSituations: 'Game Situations',
    importantRules: 'Important Rules',
    instructionsSections: [
      {
        title: 'Basic Controls',
        steps: [
          'Press "Start" to begin the shot clock countdown',
          'Press "Stop" to pause the clock at any time',
          'Use "Reset 24s" to reset to a full 24-second possession',
          'Use "Reset 14s" to reset to 14 seconds after an offensive rebound',
        ],
      },
      {
        title: 'Time Correction',
        steps: [
          'Use the + button to add one second to the current time',
          'Use the − button to subtract one second from the current time',
          'Corrections can only be made while the clock is stopped',
        ],
      },
      {
        title: 'Display & Buzzer',
        steps: [
          'Press "Clear" to hide the time display — useful for blind-clock drills',
          'Press "Clear" again to restore the display',
          'The clock turns red when 4 seconds or fewer remain',
          'The buzzer sounds automatically when the clock reaches zero',
        ],
      },
    ],
    proTipsTitle: 'Pro Tips',
    tips: [
      'Keep your eyes on the game — never stare at the clock',
      'Practice 14-second resets quickly; a delayed reset can affect game flow',
      'Study FIBA rules on when the 14-second reset applies (offensive rebound situations)',
    ],
    // FIBA Resources Page
    fibaResourcesTitle: 'FIBA Resources',
    officialRules: 'Official Rules',
    refereeEducation: 'Referee Education',
    technicalOfficials: 'Technical Officials',
    videoResources: 'Video Resources',
    fibaResourcesDescription:
      'Access official FIBA resources and guidelines to enhance your shot clock operation skills and stay up-to-date with the latest basketball rules and regulations.',
    fibaResourcesCards: {
      rules: {
        title: 'Official FIBA Rules',
        description:
          'Access the complete set of FIBA basketball rules and regulations',
      },
      shotClock: {
        title: 'Shot Clock Guidelines',
        description:
          'Detailed guidelines for shot clock operation in FIBA competitions',
      },
      training: {
        title: 'Training Materials',
        description:
          'Official FIBA training resources for officials and operators',
      },
      competition: {
        title: 'Competition Manual',
        description: 'Comprehensive manual for organizing FIBA competitions',
      },
    },
    additionalInfo: {
      title: 'Additional Information',
      worldGoverning:
        "FIBA is the world governing body for basketball, responsible for the sport's international rules and competitions.",
      tournaments:
        'The organization oversees major international tournaments including the FIBA Basketball World Cup and Olympic basketball competitions.',
    },
  },
  it: {
    title: "Practica dell'orologio di pallacanestro",
    subtitle: 'Allena le tue abilità di operatore di 24 secondi',
    startLabel: 'Inizio',
    stopLabel: 'Fermare',
    removeDisplayLabel: 'Schermo',
    resetButtonText: 'Ripristina',
    possessionLabel: 'Poss.',
    // Navigation
    home: 'Casa',
    instructions: 'Istruzioni',
    fibaResources: 'Risorse FIBA',
    about: 'Chi siamo',
    // About Page
    aboutTitle: 'Chi siamo ShotClock Pro',
    aboutContent: [
      "ShotClock Pro è un'applicazione professionale per l'allenamento dell'orologio dei tiri nel basket, progettata per aiutare arbitri, segnapunti e appassionati di basket a padroneggiare l'arte del funzionamento dell'orologio dei tiri.",
      "La nostra missione è fornire una piattaforma di formazione completa che combini la semplicità del funzionamento base dell'orologio dei tiri con una formazione avanzata basata su scenari per lo sviluppo professionale.",
      'Che tu sia un principiante che impara le basi o un professionista che cerca di migliorare le proprie abilità, ShotClock Pro offre gli strumenti e le risorse necessarie per eccellere nella gestione delle partite di basket.',
    ],
    aboutDescription:
      "Unisciti a noi nel percorso per diventare un esperto professionale dell'orologio dei tiri",
    featureCards: [
      {
        title: 'Allenamento Professionale',
        text: "Padroneggia l'arte del funzionamento del cronometro dei tiri con la nostra piattaforma di allenamento completa.",
      },
      {
        title: 'Pratica in Tempo Reale',
        text: 'Simula scenari di gioco reali e affina i tuoi tempi di reazione sotto pressione.',
      },
      {
        title: 'Risorse FIBA',
        text: 'Accedi alle regole ufficiali e alle linee guida FIBA per rimanere aggiornato sugli standard internazionali.',
      },
    ],
    // Instructions Page
    instructionsTitle: 'Istruzioni Orologio Tiri',
    instructionsDescription:
      "Impara le regole base e avanzate del funzionamento dell'orologio dei tiri nel basket",
    basicControls: 'Controlli Base',
    gameSituations: 'Situazioni di Gioco',
    importantRules: 'Regole Importanti',
    instructionsSections: [
      {
        title: 'Comandi di Base',
        steps: [
          'Premi "Inizio" per avviare il conto alla rovescia del cronometro dei tiri',
          'Premi "Fermare" per mettere in pausa il cronometro in qualsiasi momento',
          'Usa "Reset 24s" per ripristinare un possesso completo di 24 secondi',
          'Usa "Reset 14s" per ripristinare a 14 secondi dopo un rimbalzo offensivo',
        ],
      },
      {
        title: 'Correzione del Tempo',
        steps: [
          'Usa il pulsante + per aggiungere un secondo al tempo corrente',
          'Usa il pulsante − per sottrarre un secondo dal tempo corrente',
          'Le correzioni possono essere effettuate solo quando il cronometro è fermo',
        ],
      },
      {
        title: 'Display e Buzzer',
        steps: [
          'Premi "Schermo" per nascondere il display — utile per esercizi con cronometro cieco',
          'Premi "Schermo" di nuovo per ripristinare il display',
          'Il cronometro diventa rosso quando rimangono 4 secondi o meno',
          'Il buzzer suona automaticamente quando il cronometro raggiunge zero',
        ],
      },
    ],
    proTipsTitle: 'Consigli Pro',
    tips: [
      'Mantieni gli occhi sul gioco — non fissare il cronometro',
      'Pratica i reset di 14 secondi rapidamente; un reset ritardato può influire sul gioco',
      'Studia le regole FIBA su quando si applica il reset di 14 secondi',
    ],
    // FIBA Resources Page
    fibaResourcesTitle: 'Risorse FIBA',
    officialRules: 'Regole Ufficiali',
    refereeEducation: 'Formazione Arbitri',
    technicalOfficials: 'Ufficiali Tecnici',
    videoResources: 'Risorse Video',
    fibaResourcesDescription:
      "Accedi alle risorse e alle linee guida ufficiali della FIBA per migliorare le tue competenze nell'operazione del cronometro dei tiri e rimanere aggiornato sulle ultime regole e normative del basket.",
    fibaResourcesCards: {
      rules: {
        title: 'Regole Ufficiali FIBA',
        description:
          'Accesso a tutte le regole e le norme di gioco di basket di FIBA',
      },
      shotClock: {
        title: 'Linee Guida Orologio Tiri',
        description:
          "Linee guida dettagliate per l'operazione dell'orologio dei tiri in competizioni FIBA",
      },
      training: {
        title: 'Materiali di Allenamento',
        description:
          'Risorse di Allenamento Ufficiali di FIBA per arbitri e operatori',
      },
      competition: {
        title: 'Manuale di Competizione',
        description: 'Manuale completo per organizzare competizioni FIBA',
      },
    },
    additionalInfo: {
      title: 'Informazioni Aggiuntive',
      worldGoverning:
        'FIBA è il corpo governante mondiale per il basket, responsabile delle regole e delle competizioni internazionali del gioco.',
      tournaments:
        "L'organizzazione è responsabile dei tornei internazionali di grande rilievo, inclusi il Mondiale FIBA e le competizioni olimpiche di basket.",
    },
  },
  es: {
    title: 'Práctica de reloj de baloncesto',
    subtitle:
      'Practica tus habilidades de operador de reloj de tiro de 24 segundos',
    startLabel: 'Comienzo',
    stopLabel: 'Detener',
    removeDisplayLabel: 'Mostrar',
    resetButtonText: 'Reiniciar',
    possessionLabel: 'Pos.',
    // Navigation
    home: 'Inicio',
    instructions: 'Instrucciones',
    fibaResources: 'Recursos FIBA',
    about: 'Acerca de',
    // About Page
    aboutTitle: 'Acerca de ShotClock Pro',
    aboutContent: [
      'ShotClock Pro es una aplicación profesional de entrenamiento de reloj de lanzamiento de baloncesto diseñada para ayudar a árbitros, anotadores y entusiastas del baloncesto a dominar el arte de la operación del reloj de lanzamiento.',
      'Nuestra misión es proporcionar una plataforma de entrenamiento integral que combine la simplicidad de la operación básica del reloj de lanzamiento con entrenamiento avanzado basado en escenarios para el desarrollo profesional.',
      'Ya sea que seas un principiante aprendiendo los conceptos básicos o un profesional que busca mejorar sus habilidades, ShotClock Pro ofrece las herramientas y recursos que necesitas para sobresalir en la gestión de juegos de baloncesto.',
    ],
    aboutDescription:
      'Únete a nosotros en el camino para convertirte en un experto profesional del reloj de lanzamiento',
    featureCards: [
      {
        title: 'Entrenamiento Profesional',
        text: 'Domina el arte de la operación del reloj de tiro con nuestra plataforma de entrenamiento integral.',
      },
      {
        title: 'Práctica en Tiempo Real',
        text: 'Simula escenarios de juego reales y agudiza tu tiempo de reacción bajo presión.',
      },
      {
        title: 'Recursos FIBA',
        text: 'Accede a las reglas y directrices oficiales de la FIBA para mantenerte al día con los estándares internacionales.',
      },
    ],
    // Instructions Page
    instructionsTitle: 'Instrucciones del Reloj de Lanzamiento',
    instructionsDescription:
      'Aprende las reglas básicas y avanzadas del funcionamiento del reloj de lanzamiento en baloncesto',
    basicControls: 'Controles Básicos',
    gameSituations: 'Situaciones de Juego',
    importantRules: 'Reglas Importantes',
    instructionsSections: [
      {
        title: 'Controles Básicos',
        steps: [
          'Presiona "Comienzo" para iniciar la cuenta regresiva del reloj de tiro',
          'Presiona "Detener" para pausar el reloj en cualquier momento',
          'Usa "Reset 24s" para reiniciar a una posesión completa de 24 segundos',
          'Usa "Reset 14s" para reiniciar a 14 segundos después de un rebote ofensivo',
        ],
      },
      {
        title: 'Corrección de Tiempo',
        steps: [
          'Usa el botón + para agregar un segundo al tiempo actual',
          'Usa el botón − para restar un segundo del tiempo actual',
          'Las correcciones solo se pueden hacer mientras el reloj está detenido',
        ],
      },
      {
        title: 'Pantalla y Buzzer',
        steps: [
          'Presiona "Mostrar" para ocultar la pantalla — útil para ejercicios con reloj ciego',
          'Presiona "Mostrar" de nuevo para restaurar la pantalla',
          'El reloj se vuelve rojo cuando quedan 4 segundos o menos',
          'El buzzer suena automáticamente cuando el reloj llega a cero',
        ],
      },
    ],
    proTipsTitle: 'Consejos Pro',
    tips: [
      'Mantén los ojos en el juego — nunca mires el reloj fijamente',
      'Practica los reinicios de 14 segundos rápidamente; un reinicio tardío puede afectar el juego',
      'Estudia las reglas FIBA sobre cuándo se aplica el reinicio de 14 segundos',
    ],
    // FIBA Resources Page
    fibaResourcesTitle: 'Recursos FIBA',
    officialRules: 'Reglas Oficiales',
    refereeEducation: 'Educación de Árbitros',
    technicalOfficials: 'Oficiales Técnicos',
    videoResources: 'Recursos de Video',
    fibaResourcesDescription:
      'Accede a los recursos y directrices oficiales de la FIBA para mejorar tus habilidades de operación del reloj de tiro y mantenerte al día con las últimas reglas y regulaciones del baloncesto.',
    fibaResourcesCards: {
      rules: {
        title: 'Reglas Oficiales FIBA',
        description: 'Acceso a todas las reglas y normas de juego de FIBA',
      },
      shotClock: {
        title: 'Líneas de Guía de Reloj de Tiro',
        description:
          'Líneas de guía detalladas para la operación del reloj de tiro en competiciones FIBA',
      },
      training: {
        title: 'Materiales de Entrenamiento',
        description:
          'Recursos de Entrenamiento Oficiales de FIBA para árbitros y operadores',
      },
      competition: {
        title: 'Manual de Competición',
        description: 'Manual completo para organizar competiciones FIBA',
      },
    },
    additionalInfo: {
      title: 'Información Adicional',
      worldGoverning:
        'FIBA es el cuerpo gubernamental mundial para el baloncesto, responsable de las reglas y competiciones internacionales del juego.',
      tournaments:
        'La organización es responsable de los torneos internacionales de gran importancia, incluyendo el Mundial FIBA y las competiciones olímpicas de baloncesto.',
    },
  },
  fr: {
    title: 'Entraînement au chronomètre des tirs',
    subtitle:
      'Pratiquez vos compétences de fonctionnement du chronomètre 24 tirs',
    startLabel: 'Commencer',
    stopLabel: 'Arrêt',
    removeDisplayLabel: 'Clair',
    resetButtonText: 'Réinit.',
    possessionLabel: 'Poss.',
    // Navigation
    home: 'Accueil',
    instructions: 'Instructions',
    fibaResources: 'Ressources FIBA',
    about: 'À propos',
    // About Page
    aboutTitle: 'À propos de ShotClock Pro',
    aboutContent: [
      "ShotClock Pro est une application professionnelle d'entraînement au chronomètre des tirs de basket-ball conçue pour aider les arbitres, les marqueurs et les passionnés de basket-ball à maîtriser l'art du fonctionnement du chronomètre des tirs.",
      "Notre mission est de fournir une plateforme d'entraînement complète qui combine la simplicité du fonctionnement de base du chronomètre des tirs avec un entraînement avancé basé sur des scénarios pour le développement professionnel.",
      'Que vous soyez un débutant qui apprend les bases ou un professionnel qui cherche à améliorer ses compétences, ShotClock Pro offre les outils et les ressources dont vous avez besoin pour exceller dans la gestion des matchs de basket-ball.',
    ],
    aboutDescription:
      'Rejoignez-nous dans le voyage pour devenir un expert professionnel du chronomètre des tirs',
    featureCards: [
      {
        title: 'Entraînement Professionnel',
        text: "Maîtrisez l'art du fonctionnement du chronomètre des tirs avec notre plateforme d'entraînement complète.",
      },
      {
        title: 'Pratique en Temps Réel',
        text: 'Simulez des scénarios de jeu réels et affûtez votre temps de réaction sous pression.',
      },
      {
        title: 'Ressources FIBA',
        text: 'Accédez aux règles et directives officielles de la FIBA pour rester informé des normes internationales.',
      },
    ],
    // Instructions Page
    instructionsTitle: 'Instructions du Chronomètre des Tirs',
    instructionsDescription:
      'Apprenez les règles de base et avancées du fonctionnement du chronomètre des tirs en basketball',
    basicControls: 'Contrôles de Base',
    gameSituations: 'Situations de Jeu',
    importantRules: 'Règles Importantes',
    instructionsSections: [
      {
        title: 'Commandes de Base',
        steps: [
          'Appuyez sur "Commencer" pour démarrer le compte à rebours du chronomètre',
          'Appuyez sur "Arrêt" pour mettre le chronomètre en pause à tout moment',
          'Utilisez "Réinit. 24s" pour réinitialiser à une possession complète de 24 secondes',
          'Utilisez "Réinit. 14s" pour réinitialiser à 14 secondes après un rebond offensif',
        ],
      },
      {
        title: 'Correction du Temps',
        steps: [
          'Utilisez le bouton + pour ajouter une seconde au temps actuel',
          'Utilisez le bouton − pour soustraire une seconde au temps actuel',
          'Les corrections ne peuvent être effectuées que lorsque le chronomètre est arrêté',
        ],
      },
      {
        title: 'Affichage et Buzzer',
        steps: [
          'Appuyez sur "Clair" pour masquer l\'affichage du temps — utile pour les exercices à chronomètre masqué',
          'Appuyez à nouveau sur "Clair" pour restaurer l\'affichage',
          'Le chronomètre devient rouge quand il reste 4 secondes ou moins',
          'Le buzzer retentit automatiquement quand le chronomètre atteint zéro',
        ],
      },
    ],
    proTipsTitle: 'Conseils Pro',
    tips: [
      'Gardez les yeux sur le jeu — ne fixez jamais le chronomètre',
      'Entraînez-vous à effectuer les réinitialisations de 14 secondes rapidement; un retard peut affecter le déroulement du jeu',
      "Étudiez les règles FIBA sur quand s'applique la réinitialisation de 14 secondes",
    ],
    // FIBA Resources Page
    fibaResourcesTitle: 'Ressources FIBA',
    officialRules: 'Règles Officielles',
    refereeEducation: 'Formation des Arbitres',
    technicalOfficials: 'Officiels Techniques',
    videoResources: 'Ressources Vidéo',
    fibaResourcesDescription:
      "Accédez aux ressources et directives officielles de la FIBA pour améliorer vos compétences en matière de fonctionnement du chronomètre des tirs et rester informé des dernières règles et réglementations du basketball.",
    fibaResourcesCards: {
      rules: {
        title: 'Règles Officielles FIBA',
        description:
          'Accès à toutes les règles et réglementations de basket-ball de FIBA',
      },
      shotClock: {
        title: 'Directives du Chronomètre des Tirs',
        description:
          "Directives détaillées pour l'opération du chronomètre des tirs dans les compétitions FIBA",
      },
      training: {
        title: "Matériels d'Entraînement",
        description:
          "Ressources d'Entraînement Officielles de FIBA pour arbitres et opérateurs",
      },
      competition: {
        title: 'Manuel de Compétition',
        description: 'Manuel complet pour organiser des compétitions FIBA',
      },
    },
    additionalInfo: {
      title: 'Informations Supplémentaires',
      worldGoverning:
        'FIBA est le corps gouvernemental mondial pour le basket, responsable des règles et des compétitions internationales du jeu.',
      tournaments:
        "L'organisation est responsable des tournois internationaux de grande importance, y compris le Mondial FIBA et les compétitions olympiques de basket-ball.",
    },
  },
}

export default AppLocalization
