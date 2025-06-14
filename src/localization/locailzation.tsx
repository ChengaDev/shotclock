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
    // Navigation
    home: 'בית',
    instructions: 'הוראות',
    fibaResources: 'משאבי פיב"א',
    about: 'אודות',
    // About Page
    aboutTitle: 'אודות ShotClock Pro',
    aboutContent: [
      'ShotClock Pro הוא אפליקציית אימון מקצועית לניהול שעון זריקות בכדורסל, המיועדת לעזור לשופטים, רשמים וחובבי כדורסל לשלוט באמנות תפעול שעון הזריקות.',
      'המשימה שלנו היא לספק פלטפורמת אימון מקיפה המשלבת את הפשטות של תפעול שעון זריקות בסיסי עם אימון מתקדם מבוסס תרחישים להתפתחות מקצועית.',
      'בין אם אתה מתחיל הלומד את הבסיס או מקצוען המחפש לשפר את כישוריו, ShotClock Pro מציע את הכלים והמשאבים הדרושים לך להצטיין בניהול משחקי כדורסל.',
    ],
    aboutDescription: 'הצטרף אלינו בדרך להפוך למומחה שעון זריקות מקצועי',
    // Instructions Page
    instructionsTitle: 'הוראות שעון זריקות',
    instructionsDescription:
      'למד את הכללים הבסיסיים והמתקדמים של תפעול שעון הזריקות בכדורסל',
    basicControls: 'בקרות בסיסיות',
    gameSituations: 'מצבי משחק',
    importantRules: 'חוקים חשובים',
    // FIBA Resources Page
    fibaResourcesTitle: 'משאבי פיב"א',
    officialRules: 'חוקים רשמיים',
    refereeEducation: 'הכשרת שופטים',
    technicalOfficials: 'פקידים טכניים',
    videoResources: 'משאבי וידאו',
    fibaResourcesDescription:
      'גש למשאבים והנחיות רשמיים של פיב"א כדי לשפר את מיומנויות תפעול שעון הזריקות שלך ולהישאר מעודכן בחוקי הכדורסל והתקנות העדכניים.',
    fibaResourcesCards: {
      rules: {
        title: 'חוקי פיב"א רשמיים',
        description: 'גישה למערכת המלאה של חוקי ותקנות הכדורסל של פיב"א',
      },
      shotClock: {
        title: 'הנחיות שעון זריקות',
        description: 'הנחיות מפורטות לתפעול שעון זריקות בתחרויות פיב"א',
      },
      training: {
        title: 'חומרי הדרכה',
        description: 'משאבי הדרכה רשמיים של פיב"א לשופטים ומפעילים',
      },
      competition: {
        title: 'מדריך תחרויות',
        description: 'מדריך מקיף לארגון תחרויות פיב"א',
      },
    },
    additionalInfo: {
      title: 'מידע נוסף',
      worldGoverning:
        'פיב"א היא הגוף העולמי המנהל את הכדורסל, האחראי על חוקי ותחרויות הספורט הבינלאומיים.',
      tournaments:
        'הארגון מפקח על טורנירים בינלאומיים גדולים כולל גביע העולם בכדורסל של פיב"א ותחרויות כדורסל אולימפיות.',
    },
  },
  en: {
    title: 'Basketball shot clock practice',
    subtitle: 'Practice your 24 shot clock operation skills',
    startLabel: 'Start',
    stopLabel: 'Stop',
    removeDisplayLabel: 'Clear',
    resetButtonText: 'Reset',
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
    // Instructions Page
    instructionsTitle: 'Shot Clock Instructions',
    instructionsDescription:
      'Learn the basic and advanced rules of basketball shot clock operation',
    basicControls: 'Basic Controls',
    gameSituations: 'Game Situations',
    importantRules: 'Important Rules',
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
    // Instructions Page
    instructionsTitle: 'Istruzioni Orologio Tiri',
    instructionsDescription:
      "Impara le regole base e avanzate del funzionamento dell'orologio dei tiri nel basket",
    basicControls: 'Controlli Base',
    gameSituations: 'Situazioni di Gioco',
    importantRules: 'Regole Importanti',
    // FIBA Resources Page
    fibaResourcesTitle: 'Risorse FIBA',
    officialRules: 'Regole Ufficiali',
    refereeEducation: 'Formazione Arbitri',
    technicalOfficials: 'Ufficiali Tecnici',
    videoResources: 'Risorse Video',
    fibaResourcesDescription:
      'Access official FIBA resources and guidelines to enhance your shot clock operation skills and stay up-to-date with the latest basketball rules and regulations.',
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
    // Instructions Page
    instructionsTitle: 'Instrucciones del Reloj de Lanzamiento',
    instructionsDescription:
      'Aprende las reglas básicas y avanzadas del funcionamiento del reloj de lanzamiento en baloncesto',
    basicControls: 'Controles Básicos',
    gameSituations: 'Situaciones de Juego',
    importantRules: 'Reglas Importantes',
    // FIBA Resources Page
    fibaResourcesTitle: 'Recursos FIBA',
    officialRules: 'Reglas Oficiales',
    refereeEducation: 'Educación de Árbitros',
    technicalOfficials: 'Oficiales Técnicos',
    videoResources: 'Recursos de Video',
    fibaResourcesDescription:
      'Access official FIBA resources and guidelines to enhance your shot clock operation skills and stay up-to-date with the latest basketball rules and regulations.',
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
    resetButtonText: 'Réinitialiser',
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
    // Instructions Page
    instructionsTitle: 'Instructions du Chronomètre des Tirs',
    instructionsDescription:
      'Apprenez les règles de base et avancées du fonctionnement du chronomètre des tirs en basketball',
    basicControls: 'Contrôles de Base',
    gameSituations: 'Situations de Jeu',
    importantRules: 'Règles Importantes',
    // FIBA Resources Page
    fibaResourcesTitle: 'Ressources FIBA',
    officialRules: 'Règles Officielles',
    refereeEducation: 'Formation des Arbitres',
    technicalOfficials: 'Officiels Techniques',
    videoResources: 'Ressources Vidéo',
    fibaResourcesDescription:
      'Access official FIBA resources and guidelines to enhance your shot clock operation skills and stay up-to-date with the latest basketball rules and regulations.',
    fibaResourcesCards: {
      rules: {
        title: 'Règles Officielles FIBA',
        description:
          'Accès à toutes les règles et réglementations de basket-ball de FIBA',
      },
      shotClock: {
        title: 'Lignes Directrices Orologio Tiri',
        description:
          "Lignes directrices détaillées pour l'opération de l'orologio dei tiri in compétitions FIBA",
      },
      training: {
        title: "Matériaux d'Entraînement",
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
