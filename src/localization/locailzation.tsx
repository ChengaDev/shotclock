import { LocalizationType } from '../localization/types'

type AppLocalizationType = {
  [key: string]: LocalizationType
}

const AppLocalization: AppLocalizationType = {
  en: {
    title: 'Free Online Basketball Shot Clock',
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
    faq: 'FAQ',
    // FAQ Page
    faqTitle: 'Frequently Asked Questions',
    faqDescription: 'Everything you need to know about basketball shot clock rules and how to use ShotClock Pro.',
    faqItems: [
      {
        question: 'What is the shot clock rule in FIBA basketball?',
        answer: 'Under FIBA rules, the offensive team must attempt a shot that hits the ring or enters the basket within 24 seconds of gaining possession. If they fail to do so, the referee calls a shot clock violation and possession is awarded to the opposing team.',
      },
      {
        question: 'When does the shot clock reset to 14 seconds instead of 24?',
        answer: 'The shot clock resets to 14 seconds — not 24 — when the offensive team recovers a rebound off the backboard or ring after their own shot attempt. This applies whether the ball stays in the frontcourt or returns to the backcourt. FIBA introduced this rule to reward offensive rebounding and speed up the game.',
      },
      {
        question: 'What constitutes a valid shot attempt to satisfy the shot clock?',
        answer: 'The ball must visibly touch the ring (rim) or enter the basket. A shot that only hits the backboard without touching the ring does not satisfy the shot clock requirement. An airball that misses everything also does not stop the shot clock.',
      },
      {
        question: 'What happens when the shot clock expires?',
        answer: 'The shot clock buzzer sounds and the referee signals a shot clock violation. Possession is awarded to the defensive team for a throw-in. The only exception is if the ball is already in the air at the moment the buzzer sounds and subsequently hits the ring or enters the basket — in that case the basket counts and no violation is called.',
      },
      {
        question: 'When does the shot clock start at the beginning of a possession?',
        answer: 'The shot clock starts as soon as a player gains control of a live ball. For a throw-in, the shot clock starts the moment the ball is legally touched by any player on the court.',
      },
      {
        question: 'Does the shot clock reset when the defense commits a foul?',
        answer: 'Not always. If the offensive team retains possession after a defensive foul via a throw-in in the frontcourt, the shot clock continues from where it stopped — unless fewer than 14 seconds remain, in which case it resets to 14 seconds. If the throw-in is from the backcourt, the shot clock resets to a full 24 seconds.',
      },
      {
        question: 'What happens to the shot clock when the ball goes out of bounds?',
        answer: 'The shot clock stops with the game clock. If the defensive team last touched the ball, the offensive team retains possession and the shot clock resumes from where it stopped (resetting to 14 if fewer than 14 seconds remain). If the offensive team caused the ball to go out, the defense receives the ball with a new 24-second shot clock.',
      },
      {
        question: 'What happens to the shot clock after a jump ball?',
        answer: 'After a jump ball that results in a controlled possession, the shot clock resets to a full 24 seconds for the team gaining possession.',
      },
      {
        question: 'Is the shot clock running during free throws?',
        answer: 'No. The shot clock is stopped and the display is blanked during all free throw attempts. After the last free throw in a sequence, if the shooting team gets an offensive rebound off the missed attempt (which touched the rim), the 14-second reset rule applies.',
      },
      {
        question: 'What if there is less time on the game clock than the shot clock reset value?',
        answer: 'When the remaining game clock time is less than the applicable shot clock reset (14 or 24 seconds), the shot clock display is switched off. No shot clock violation can occur because the end of the period itself limits the possession.',
      },
      {
        question: 'How is a shot clock violation signalled by officials?',
        answer: 'The shot clock operator sounds the buzzer when the clock reaches zero. The referee then signals a shot clock violation by pointing one arm toward the basket the offending team was attacking and rotating the other arm overhead to indicate a turnover.',
      },
      {
        question: 'What is the difference between the shot clock and the game clock in FIBA?',
        answer: 'The game clock tracks the time remaining in each quarter — 10 minutes per quarter in FIBA. The shot clock limits any single offensive possession to 24 seconds. Both run simultaneously during live play, and a single quarter can contain many individual possessions each subject to their own shot clock.',
      },
      {
        question: 'How long are FIBA quarters compared to the NBA?',
        answer: 'FIBA quarters are 10 minutes each (4 quarters = 40 minutes of regulation). The NBA uses 12-minute quarters (48 minutes total). Both leagues use a 24-second shot clock for new possessions. FIBA introduced the 14-second offensive rebound reset rule, which the NBA subsequently adopted.',
      },
      {
        question: 'Can a team deliberately delay throwing in the ball to run time off the shot clock?',
        answer: 'No. On a throw-in, the shot clock starts as soon as the ball is touched by a player on the court, but the referee can call an 8-second backcourt violation or unsportsmanlike conduct if a team unreasonably delays putting the ball in play. The throw-in itself must be completed within 5 seconds.',
      },
    ],
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
    // Navigation extras
    play: 'Play',
    clock: 'Clock',
    playNow: 'Play Now',
    playPageTitle: 'Choose Your Mode',
    playPageDescription: 'Pick how you want to experience basketball. Every mode puts you in the action.',
    // Clock page
    clockPageTitle: 'Basketball Shot Clock – 24 & 14 Second Timer',
    clockPageDescription: 'Free online basketball shot clock. Start, stop, and reset with the real 24-second and 14-second FIBA rules. Works on any device — no installation needed.',
    // Landing page
    launchClock: 'Launch Clock',
    comingSoon: 'Coming Soon',
    landingHeroTitle: 'Every Second Counts in Basketball',
    landingHeroSubtitle: 'Feel the pressure of the 24-second clock — just like the pros. Perfect for fans, coaches, and referees who want to experience the game from a whole new angle.',
    landingModesTitle: "Let's Dribble",
    landingModeClockTitle: 'Shot Clock Operation',
    landingModeClockDesc: 'Feel the pressure every team faces — 24 seconds to shoot. Best experienced alongside a live game on TV or a YouTube video. Operate the clock just like a real NBA or FIBA game and hear the buzzer when time runs out.',
    landingModeTrainingTitle: 'Reaction Training',
    landingModeTrainingDesc: 'React to real basketball events — rebounds, fouls, violations — and see how fast you can respond. Earn a score and compete for the Hall of Fame.',
    landingModeYoutubeTitle: 'YouTube Free Play',
    landingModeYoutubeDesc: 'Load any YouTube basketball game as a reference and practice operating the 24-second shot clock in real time.',
    landingFeaturesTitle: 'How It Works',
    landingFeature1Label: 'Instant Access',
    landingFeature1Sub: 'No download, no install. Open your browser and you\'re in the game.',
    landingFeature2Label: 'Sideline to Bleachers',
    landingFeature2Sub: 'Built for referees, coaches, and fans who live and breathe basketball.',
    landingFeature3Label: 'Speak Basketball',
    landingFeature3Sub: 'The game is universal — play in English, Italian, Spanish, French, or Greek.',
    landingFeature4Label: 'Rules You Can Trust',
    landingFeature4Sub: 'Every reset follows official FIBA standards — 24s to shoot, 14s on the offensive glass.',
    // Shared UI
    lightMode: 'light',
    darkMode: 'dark',
    shareThisPage: 'Share this page:',
    pageBlurb: 'ShotClock Pro is a free online basketball shot clock you can use directly in your browser. Start the 24-second countdown, apply the 14-second reset after an offensive rebound, and hear the buzzer when time runs out — just like a real game.',
    quickLinks: 'Quick Links',
    language: 'Language',
    getInTouch: 'Get in Touch',
    getInTouchText: 'Questions, feedback, or just want to say hi? Reach out through any of the channels below.',
    // Reaction Training
    reactionTraining: 'Reaction Training',
    reactionTrainingTitle: 'Reaction Time Training',
    reactionTrainingDescription: 'Test your shot clock operator reflexes. React to basketball events as fast as possible and earn points for speed and accuracy.',
    startSession: 'Start Training Session',
    readyButton: "I'm Ready",
    scenarioOf: 'Scenario {0} of {1}',
    difficulty: 'Difficulty',
    difficultyEasy: 'Easy (5s)',
    difficultyMedium: 'Medium (3s)',
    difficultyPro: 'Pro (2s)',
    startStopLabel: 'Start / Stop',
    reset14Label: 'Reset 14s',
    reset24Label: 'Reset 24s',
    correctAnswer: 'Correct!',
    wrongAnswer: 'Wrong!',
    timesUp: "Time's up!",
    reactionTime: 'Reaction time',
    milliseconds: 'ms',
    explanationLabel: 'Why?',
    nextScenario: 'Next Scenario',
    pointsEarned: '+{0} pts',
    streakLabel: '{0} in a row!',
    timeRemaining: 'Time remaining',
    sessionComplete: 'Session Complete!',
    yourScore: 'Your Score',
    scenariosCompleted: '{0} scenarios attempted',
    yourGrade: 'Your Grade',
    personalBest: 'Personal Best!',
    sessionBreakdown: 'Session Breakdown',
    restartSession: 'Try Again',
    hallOfFame: 'Hall of Fame',
    enterInitials: 'You made the Hall of Fame! Enter your initials:',
    submitInitials: 'Submit',
    gradeLabels: {
      ap: 'Lightning Fast',
      a: 'Excellent',
      b: 'Good',
      c: 'Average',
      d: 'Slow',
      f: 'Missed',
    },
    // YouTube Free Play
    youtubePageTitle: 'YouTube Basketball Free Play',
    youtubePageDescription: 'Load any YouTube basketball game as a reference and practice operating a real 24-second FIBA shot clock in sync — free, no installation needed. Your recent games are saved for quick access.',
    youtubeUrlPlaceholder: 'Paste a YouTube URL...',
    youtubeLoadVideo: 'Load',
    youtubeChangeVideo: 'Change Video',
    youtubeInvalidUrl: 'Please paste a valid YouTube URL',
    youtubeBlurb: 'Load any YouTube basketball game as a reference and practice operating the 24-second shot clock in real time. Start and stop the clock on possessions, reset to 14 seconds after offensive rebounds, and hear the buzzer when time expires — just like a real FIBA or NBA game. Great for referees in training, coaches reviewing film, and anyone who wants to sharpen their shot clock timing against real game footage.',
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
    faq: 'FAQ',
    // FAQ Page
    faqTitle: 'Domande Frequenti',
    faqDescription: 'Tutto quello che devi sapere sulle regole del cronometro dei tiri e su come usare ShotClock Pro.',
    faqItems: [
      {
        question: 'Qual è la regola del cronometro dei tiri nel basket FIBA?',
        answer: 'Secondo le regole FIBA, la squadra in attacco deve tentare un tiro che tocchi il ferro o entri a canestro entro 24 secondi dal momento in cui acquisisce il possesso. Se non lo fa, l\'arbitro sancisce una violazione del cronometro e il possesso passa agli avversari.',
      },
      {
        question: 'Quando il cronometro si azzera a 14 secondi invece di 24?',
        answer: 'Il cronometro si azzera a 14 secondi — non 24 — quando la squadra in attacco recupera il rimbalzo dopo il proprio tentativo di tiro (sul tabellone o sul ferro). Questa regola si applica sia se la palla rimane nel semicampo offensivo sia se torna nel semicampo difensivo. La FIBA ha introdotto questa norma per premiare il rimbalzo offensivo e velocizzare il gioco.',
      },
      {
        question: 'Cos\'è considerato un tentativo di tiro valido ai fini del cronometro?',
        answer: 'La palla deve toccare visibilmente il ferro (canestro) o entrare nel cesto. Un tiro che colpisce solo il tabellone senza toccare il ferro non soddisfa il requisito del cronometro. Anche un airball che non tocca nulla non ferma il cronometro.',
      },
      {
        question: 'Cosa succede quando il cronometro dei tiri scade?',
        answer: 'Il buzzer suona e l\'arbitro segnala una violazione del cronometro. Il possesso viene assegnato alla squadra in difesa per una rimessa. L\'unica eccezione è se la palla è già in volo nel momento in cui il buzzer suona e successivamente tocca il ferro o entra a canestro — in quel caso il canestro è valido e non viene sanzionata alcuna violazione.',
      },
      {
        question: 'Da quando parte il cronometro all\'inizio di un possesso?',
        answer: 'Il cronometro parte non appena un giocatore acquisisce il controllo di una palla viva. In caso di rimessa laterale, il cronometro parte nel momento in cui la palla viene toccata legalmente da qualsiasi giocatore in campo.',
      },
      {
        question: 'Il cronometro si azzera quando la difesa commette un fallo?',
        answer: 'Non sempre. Se la squadra in attacco mantiene il possesso dopo un fallo difensivo tramite una rimessa nel semicampo offensivo, il cronometro riprende da dove si era fermato — a meno che non rimangano meno di 14 secondi, nel qual caso si azzera a 14. Se la rimessa avviene dal semicampo difensivo, il cronometro riparte da 24 secondi.',
      },
      {
        question: 'Cosa succede al cronometro quando la palla esce dal campo?',
        answer: 'Il cronometro si ferma insieme al cronometro di gara. Se l\'ultima squadra a toccare la palla prima che uscisse era quella in difesa, la squadra in attacco mantiene il possesso e il cronometro riprende da dove si era fermato (azzerandosi a 14 se mancano meno di 14 secondi). Se a causare l\'uscita è stata la squadra in attacco, la difesa riceve il possesso con un nuovo cronometro da 24 secondi.',
      },
      {
        question: 'Cosa succede al cronometro dopo una palla a due?',
        answer: 'Dopo una palla a due in cui una squadra guadagna il controllo del pallone, il cronometro dei tiri riparte da 24 secondi per quella squadra.',
      },
      {
        question: 'Il cronometro gira durante i tiri liberi?',
        answer: 'No. Il cronometro è fermo e il display è spento durante tutti i tentativi di tiro libero. Dopo l\'ultimo tiro libero di una serie, se la squadra che tira recupera il rimbalzo del tiro mancato (che abbia toccato il ferro), si applica la regola del reset a 14 secondi.',
      },
      {
        question: 'Cosa succede se il tempo rimanente del quarto è inferiore al valore di reset del cronometro?',
        answer: 'Quando il tempo rimasto nel quarto è inferiore al valore di reset applicabile (14 o 24 secondi), il display del cronometro viene spento. Non è possibile commettere una violazione del cronometro perché il termine del quarto stesso limita il possesso.',
      },
      {
        question: 'Come viene segnalata una violazione del cronometro dagli ufficiali?',
        answer: 'L\'operatore del cronometro fa suonare il buzzer quando il conteggio raggiunge zero. L\'arbitro segnala poi la violazione indicando con un braccio il canestro verso cui stava attaccando la squadra in violazione e ruotando l\'altro braccio sopra la testa per indicare il cambio di possesso.',
      },
      {
        question: 'Qual è la differenza tra il cronometro dei tiri e il cronometro di gara nella FIBA?',
        answer: 'Il cronometro di gara misura il tempo rimanente in ogni quarto — 10 minuti a quarto nel basket FIBA. Il cronometro dei tiri limita ogni singolo possesso offensivo a 24 secondi. Entrambi scorrono contemporaneamente durante il gioco attivo, e in un singolo quarto possono svolgersi numerosi possessi, ciascuno soggetto al proprio cronometro.',
      },
      {
        question: 'Quanto durano i quarti FIBA rispetto all\'NBA?',
        answer: 'I quarti FIBA durano 10 minuti ciascuno (4 quarti = 40 minuti di tempo regolamentare). L\'NBA usa quarti da 12 minuti (48 minuti totali). Entrambe le leghe usano un cronometro da 24 secondi per i nuovi possessi. La FIBA ha introdotto il reset a 14 secondi dopo rimbalzo offensivo, regola poi adottata anche dall\'NBA.',
      },
      {
        question: 'Una squadra può deliberatamente ritardare la rimessa per far scorrere il cronometro degli avversari?',
        answer: 'No. In caso di rimessa, il cronometro parte nel momento in cui la palla viene toccata da un giocatore in campo. Tuttavia, il giocatore che effettua la rimessa deve farlo entro 5 secondi, e l\'arbitro può sanzionare comportamenti antisportivi se una squadra ritarda irragionevolmente la messa in gioco.',
      },
    ],
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
    // Navigation extras
    play: 'Gioca',
    clock: 'Cronometro',
    playNow: 'Gioca Ora',
    playPageTitle: 'Scegli la Modalità',
    playPageDescription: 'Scegli come vuoi vivere il basket. Ogni modalità ti mette in azione.',
    // Clock page
    clockPageTitle: 'Cronometro Basket – Timer 24 e 14 Secondi',
    clockPageDescription: 'Cronometro di basket online gratuito. Avvia, ferma e reimposta con le regole FIBA dei 24 e 14 secondi. Funziona su qualsiasi dispositivo.',
    // Landing page
    launchClock: 'Avvia Cronometro',
    comingSoon: 'Presto Disponibile',
    landingHeroTitle: 'Nel Basket Ogni Secondo È Decisivo',
    landingHeroSubtitle: 'Senti la pressione del cronometro da 24 secondi — proprio come i pro. Perfetto per tifosi, allenatori e arbitri che vogliono vivere il gioco da una prospettiva completamente nuova.',
    landingModesTitle: 'Dai, Dribbliamo',
    landingModeClockTitle: 'Gestione del Cronometro',
    landingModeClockDesc: 'Senti la pressione che vive ogni squadra: 24 secondi per tirare. Ideale da usare insieme a una partita in TV o un video YouTube. Gestisci il cronometro come in una vera partita NBA o FIBA e ascolta il buzzer allo scadere.',
    landingModeTrainingTitle: 'Allenamento Riflessi',
    landingModeTrainingDesc: 'Reagisci a rimbalzi, falli e violazioni come in una partita reale. Scopri quanto sei veloce e scala la classifica della Hall of Fame.',
    landingModeYoutubeTitle: 'Free Play YouTube',
    landingModeYoutubeDesc: 'Carica qualsiasi partita YouTube come riferimento e allenati a gestire il cronometro da 24 secondi in tempo reale.',
    landingFeaturesTitle: 'Come Funziona',
    landingFeature1Label: 'Accesso Immediato',
    landingFeature1Sub: 'Nessun download, nessuna installazione. Apri il browser e sei già in campo.',
    landingFeature2Label: 'Dal Parquet agli Spalti',
    landingFeature2Sub: 'Pensato per arbitri, allenatori e tifosi che vivono e respirano pallacanestro.',
    landingFeature3Label: 'Parla Basket',
    landingFeature3Sub: 'Il gioco è universale — gioca in italiano, inglese, spagnolo, francese o greco.',
    landingFeature4Label: 'Regole Ufficiali',
    landingFeature4Sub: 'Ogni reset segue gli standard ufficiali FIBA — 24s per tirare, 14s sul rimbalzo offensivo.',
    // Shared UI
    lightMode: 'chiaro',
    darkMode: 'scuro',
    shareThisPage: 'Condividi questa pagina:',
    pageBlurb: 'ShotClock Pro è un cronometro di pallacanestro online gratuito che puoi usare direttamente nel browser. Avvia il conto alla rovescia di 24 secondi, applica il reset di 14 secondi dopo un rimbalzo offensivo e senti il buzzer quando il tempo scade — proprio come in una partita vera.',
    quickLinks: 'Link Rapidi',
    language: 'Lingua',
    getInTouch: 'Contattaci',
    getInTouchText: 'Domande, feedback o vuoi semplicemente salutare? Contattaci attraverso uno dei canali qui sotto.',
    // Reaction Training
    reactionTraining: 'Allenamento Riflessi',
    reactionTrainingTitle: 'Allenamento al Tempo di Reazione',
    reactionTrainingDescription: "Metti alla prova i tuoi riflessi da operatore del cronometro. Reagisci agli eventi di pallacanestro il più velocemente possibile e guadagna punti per velocità e precisione.",
    startSession: 'Inizia Sessione di Allenamento',
    readyButton: 'Sono Pronto',
    scenarioOf: 'Scenario {0} di {1}',
    difficulty: 'Difficoltà',
    difficultyEasy: 'Facile (5s)',
    difficultyMedium: 'Medio (3s)',
    difficultyPro: 'Pro (2s)',
    startStopLabel: 'Start / Stop',
    reset14Label: 'Reset 14s',
    reset24Label: 'Reset 24s',
    correctAnswer: 'Corretto!',
    wrongAnswer: 'Sbagliato!',
    timesUp: 'Tempo scaduto!',
    reactionTime: 'Tempo di reazione',
    milliseconds: 'ms',
    explanationLabel: 'Perché?',
    nextScenario: 'Prossimo Scenario',
    pointsEarned: '+{0} punti',
    streakLabel: '{0} di fila!',
    timeRemaining: 'Tempo rimanente',
    sessionComplete: 'Sessione Completata!',
    yourScore: 'Il tuo punteggio',
    scenariosCompleted: '{0} scenari tentati',
    yourGrade: 'Il tuo voto',
    personalBest: 'Record Personale!',
    sessionBreakdown: 'Riepilogo Sessione',
    restartSession: 'Riprova',
    hallOfFame: 'Hall of Fame',
    enterInitials: 'Sei entrato nella Hall of Fame! Inserisci le tue iniziali:',
    submitInitials: 'Invia',
    gradeLabels: {
      ap: 'Fulmineo',
      a: 'Eccellente',
      b: 'Buono',
      c: 'Nella media',
      d: 'Lento',
      f: 'Mancato',
    },
    youtubePageTitle: 'YouTube Free Play',
    youtubePageDescription: 'Incolla un link YouTube di una partita di basket e gestisci il cronometro in tempo reale.',
    youtubeUrlPlaceholder: 'Incolla un URL YouTube...',
    youtubeLoadVideo: 'Carica',
    youtubeChangeVideo: 'Cambia video',
    youtubeInvalidUrl: 'Inserisci un URL YouTube valido',
    youtubeBlurb: 'Incolla qualsiasi link YouTube di una partita di basket e gestisci il cronometro da 24 secondi in tempo reale. Avvia e ferma il cronometro sulle possessi, resetta a 14 secondi dopo i rimbalzi offensivi e ascolta il buzzer allo scadere del tempo — proprio come in una vera partita FIBA o NBA.',
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
    faq: 'FAQ',
    // FAQ Page
    faqTitle: 'Preguntas Frecuentes',
    faqDescription: 'Todo lo que necesitas saber sobre las reglas del reloj de tiro y cómo usar ShotClock Pro.',
    faqItems: [
      {
        question: 'Cuál es la regla del reloj de tiro en el baloncesto FIBA?',
        answer: 'Según las reglas FIBA, el equipo en ataque debe intentar un tiro que toque el aro o entre a canasta dentro de los 24 segundos siguientes a obtener la posesión. Si no lo hace, el árbitro señala una violación del reloj de tiro y la posesión pasa al equipo contrario.',
      },
      {
        question: 'Cuándo se reinicia el reloj a 14 segundos en lugar de 24?',
        answer: 'El reloj se reinicia a 14 segundos — no a 24 — cuando el equipo en ataque recupera el rebote de su propio intento de tiro (en el tablero o en el aro). Esta regla se aplica tanto si el balón permanece en el campo ofensivo como si regresa al campo defensivo. La FIBA introdujo esta norma para recompensar el rebote ofensivo y agilizar el juego.',
      },
      {
        question: 'Qué se considera un intento de tiro válido a efectos del reloj de tiro?',
        answer: 'El balón debe tocar visiblemente el aro o entrar a canasta. Un tiro que solo golpea el tablero sin tocar el aro no satisface el requisito del reloj de tiro. Un airball que no toca nada tampoco detiene el reloj.',
      },
      {
        question: 'Qué ocurre cuando expira el reloj de tiro?',
        answer: 'Suena el buzzer del reloj de tiro y el árbitro señala una violación. La posesión se otorga al equipo defensor mediante un saque de banda. La única excepción es si el balón ya está en el aire en el momento en que suena el buzzer y luego toca el aro o entra a canasta — en ese caso el enceste es válido y no se sanciona ninguna violación.',
      },
      {
        question: 'Cuándo comienza el reloj de tiro al inicio de una posesión?',
        answer: 'El reloj de tiro comienza en el momento en que un jugador obtiene el control de un balón vivo. En un saque de banda, el reloj comienza cuando el balón es tocado legalmente por cualquier jugador en la cancha.',
      },
      {
        question: 'Se reinicia el reloj de tiro cuando la defensa comete una falta?',
        answer: 'No siempre. Si el equipo en ataque conserva la posesión tras una falta defensiva mediante un saque de banda en el campo ofensivo, el reloj continúa desde donde se detuvo — salvo que queden menos de 14 segundos, en cuyo caso se reinicia a 14. Si el saque se realiza desde el campo defensivo, el reloj se reinicia a 24 segundos.',
      },
      {
        question: 'Qué ocurre con el reloj de tiro cuando el balón sale fuera?',
        answer: 'El reloj de tiro se detiene junto con el cronómetro de juego. Si el último equipo en tocar el balón antes de que saliera fue el defensor, el equipo atacante conserva la posesión y el reloj reanuda desde donde se detuvo (reiniciándose a 14 si quedan menos de 14 segundos). Si fue el equipo atacante el que causó la salida, la defensa recibe el balón con un nuevo reloj de 24 segundos.',
      },
      {
        question: 'Qué ocurre con el reloj de tiro tras una pelota al salto?',
        answer: 'Tras una pelota al salto en la que un equipo logra el control del balón, el reloj de tiro se reinicia a 24 segundos para ese equipo.',
      },
      {
        question: 'Sigue corriendo el reloj de tiro durante los tiros libres?',
        answer: 'No. El reloj de tiro se detiene y el display se apaga durante todos los intentos de tiro libre. Tras el último tiro libre de una serie, si el equipo que lanza recoge el rebote del tiro fallado (que haya tocado el aro), se aplica la regla del reinicio a 14 segundos.',
      },
      {
        question: 'Qué ocurre si el tiempo restante del período es menor que el valor de reinicio del reloj?',
        answer: 'Cuando el tiempo restante en el período es menor que el valor de reinicio aplicable (14 o 24 segundos), el display del reloj de tiro se apaga. No es posible cometer una violación del reloj porque el final del período ya limita la posesión.',
      },
      {
        question: 'Cómo señalan los árbitros una violación del reloj de tiro?',
        answer: 'El operador del reloj hace sonar el buzzer al llegar a cero. El árbitro señala entonces la violación apuntando con un brazo hacia la canasta que atacaba el equipo infractor y girando el otro brazo sobre la cabeza para indicar el cambio de posesión.',
      },
      {
        question: 'Cuál es la diferencia entre el reloj de tiro y el cronómetro de juego en la FIBA?',
        answer: 'El cronómetro de juego mide el tiempo restante en cada período — 10 minutos por período en la FIBA. El reloj de tiro limita cada posesión ofensiva a 24 segundos. Ambos funcionan simultáneamente durante el juego activo, y en un solo período puede haber numerosas posesiones, cada una sujeta a su propio reloj de tiro.',
      },
      {
        question: 'Cuánto duran los períodos FIBA en comparación con la NBA?',
        answer: 'Los períodos FIBA duran 10 minutos cada uno (4 períodos = 40 minutos de tiempo reglamentario). La NBA utiliza períodos de 12 minutos (48 minutos en total). Ambas ligas aplican un reloj de tiro de 24 segundos para nuevas posesiones. La FIBA introdujo el reinicio a 14 segundos tras rebote ofensivo, regla que la NBA adoptó posteriormente.',
      },
      {
        question: 'Puede un equipo retrasar deliberadamente el saque para consumir tiempo del reloj rival?',
        answer: 'No. En un saque de banda, el reloj de tiro comienza cuando el balón es tocado por un jugador en la cancha. Además, el jugador que realiza el saque dispone de 5 segundos para hacerlo, y el árbitro puede sancionar una conducta antideportiva si un equipo demora injustificadamente la puesta en juego.',
      },
    ],
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
    // Navigation extras
    play: 'Jugar',
    clock: 'Reloj',
    playNow: 'Jugar Ahora',
    playPageTitle: 'Elige tu Modo',
    playPageDescription: 'Elige cómo quieres vivir el baloncesto. Cada modo te pone en la acción.',
    // Clock page
    clockPageTitle: 'Reloj de Posesión – Temporizador 24 y 14 Segundos',
    clockPageDescription: 'Reloj de posesión de baloncesto online gratuito. Inicia, para y reinicia con las reglas FIBA de 24 y 14 segundos. Funciona en cualquier dispositivo.',
    // Landing page
    launchClock: 'Iniciar Reloj',
    comingSoon: 'Próximamente',
    landingHeroTitle: 'En Baloncesto Cada Segundo Importa',
    landingHeroSubtitle: 'Siente la presión del reloj de 24 segundos — igual que los pros. Ideal para aficionados, entrenadores y árbitros que quieren vivir el juego desde un ángulo totalmente nuevo.',
    landingModesTitle: 'Vamos a Driblar',
    landingModeClockTitle: 'Manejo del Reloj',
    landingModeClockDesc: 'Siente la presión que vive cada equipo: 24 segundos para tirar. Ideal para usar junto a un partido en TV o un video de YouTube. Opera el reloj como en un partido real de la NBA o FIBA y escucha el buzzer cuando se acaba el tiempo.',
    landingModeTrainingTitle: 'Entrenamiento de Reflejos',
    landingModeTrainingDesc: 'Reacciona a rebotes, faltas y violaciones como en un partido real. Descubre qué tan rápido eres y compite por el Salón de la Fama.',
    landingModeYoutubeTitle: 'Free Play YouTube',
    landingModeYoutubeDesc: 'Carga cualquier partido de YouTube como referencia y practica operar el reloj de posesión de 24 segundos en tiempo real.',
    landingFeaturesTitle: 'Cómo Funciona',
    landingFeature1Label: 'Acceso Inmediato',
    landingFeature1Sub: 'Sin descarga, sin instalación. Abre el navegador y estás en el juego.',
    landingFeature2Label: 'De la Cancha a las Gradas',
    landingFeature2Sub: 'Diseñado para árbitros, entrenadores y fans que viven y respiran baloncesto.',
    landingFeature3Label: 'Habla Baloncesto',
    landingFeature3Sub: 'El juego es universal — juega en español, inglés, italiano, francés o griego.',
    landingFeature4Label: 'Reglas de Confianza',
    landingFeature4Sub: 'Cada reinicio sigue los estándares oficiales FIBA — 24s para tirar, 14s tras rebote ofensivo.',
    // Shared UI
    lightMode: 'claro',
    darkMode: 'oscuro',
    shareThisPage: 'Comparte esta página:',
    pageBlurb: 'ShotClock Pro es un reloj de tiro de baloncesto en línea gratuito que puedes usar directamente en tu navegador. Inicia la cuenta regresiva de 24 segundos, aplica el reinicio de 14 segundos tras un rebote ofensivo y escucha el buzzer cuando se acabe el tiempo — igual que en un partido real.',
    quickLinks: 'Enlaces Rápidos',
    language: 'Idioma',
    getInTouch: 'Contáctanos',
    getInTouchText: '¿Preguntas, comentarios o simplemente quieres saludar? Contáctanos a través de cualquiera de los canales a continuación.',
    // Reaction Training
    reactionTraining: 'Entrenamiento de Reflejos',
    reactionTrainingTitle: 'Entrenamiento de Tiempo de Reacción',
    reactionTrainingDescription: 'Pon a prueba tus reflejos como operador del reloj de posesión. Reacciona a los eventos de baloncesto lo más rápido posible y gana puntos por velocidad y precisión.',
    startSession: 'Iniciar Sesión de Entrenamiento',
    readyButton: 'Estoy Listo',
    scenarioOf: 'Escenario {0} de {1}',
    difficulty: 'Dificultad',
    difficultyEasy: 'Fácil (5s)',
    difficultyMedium: 'Medio (3s)',
    difficultyPro: 'Pro (2s)',
    startStopLabel: 'Inicio / Parar',
    reset14Label: 'Reset 14s',
    reset24Label: 'Reset 24s',
    correctAnswer: '¡Correcto!',
    wrongAnswer: '¡Incorrecto!',
    timesUp: '¡Tiempo agotado!',
    reactionTime: 'Tiempo de reacción',
    milliseconds: 'ms',
    explanationLabel: '¿Por qué?',
    nextScenario: 'Siguiente Escenario',
    pointsEarned: '+{0} pts',
    streakLabel: '¡{0} seguidos!',
    timeRemaining: 'Tiempo restante',
    sessionComplete: '¡Sesión Completada!',
    yourScore: 'Tu Puntuación',
    scenariosCompleted: '{0} escenarios intentados',
    yourGrade: 'Tu Calificación',
    personalBest: '¡Récord Personal!',
    sessionBreakdown: 'Resumen de la Sesión',
    restartSession: 'Intentar de Nuevo',
    hallOfFame: 'Salón de la Fama',
    enterInitials: '¡Entraste al Salón de la Fama! Introduce tus iniciales:',
    submitInitials: 'Enviar',
    gradeLabels: {
      ap: 'Rapidísimo',
      a: 'Excelente',
      b: 'Bueno',
      c: 'Promedio',
      d: 'Lento',
      f: 'Fallado',
    },
    youtubePageTitle: 'YouTube Free Play',
    youtubePageDescription: 'Pega un enlace de YouTube de un partido de baloncesto y opera el reloj en tiempo real.',
    youtubeUrlPlaceholder: 'Pega una URL de YouTube...',
    youtubeLoadVideo: 'Cargar',
    youtubeChangeVideo: 'Cambiar video',
    youtubeInvalidUrl: 'Por favor pega una URL de YouTube válida',
    youtubeBlurb: 'Pega cualquier enlace de YouTube de un partido de baloncesto y opera el reloj de posesión de 24 segundos en tiempo real. Inicia y detén el reloj en cada posesión, reinicia a 14 segundos tras rebotes ofensivos y escucha el buzzer al expirar — igual que en un partido real de FIBA o NBA.',
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
    faq: 'FAQ',
    // FAQ Page
    faqTitle: 'Questions Fréquentes',
    faqDescription: 'Tout ce que vous devez savoir sur les règles du chronomètre des tirs et comment utiliser ShotClock Pro.',
    faqItems: [
      {
        question: 'Quelle est la règle du chronomètre des tirs dans le basketball FIBA ?',
        answer: "Selon les règles FIBA, l'équipe en attaque doit tenter un tir touchant l'anneau ou entrant dans le panier dans les 24 secondes suivant l'obtention de la possession. En cas d'échec, l'arbitre siffle une violation du chronomètre et la possession est accordée à l'équipe adverse.",
      },
      {
        question: 'Quand le chronomètre se réinitialise-t-il à 14 secondes plutôt qu\'à 24 ?',
        answer: "Le chronomètre se réinitialise à 14 secondes — et non à 24 — lorsque l'équipe en attaque récupère le rebond de sa propre tentative de tir (sur le panneau ou l'anneau). Cette règle s'applique que le ballon reste dans le demi-terrain offensif ou revienne en demi-terrain défensif. La FIBA a introduit cette règle pour récompenser le rebond offensif et accélérer le jeu.",
      },
      {
        question: "Qu'est-ce qu'une tentative de tir valable au regard du chronomètre ?",
        answer: "Le ballon doit toucher visiblement l'anneau (le cercle) ou entrer dans le panier. Un tir ne touchant que le panneau sans toucher l'anneau ne satisfait pas à l'exigence du chronomètre. Un airball qui ne touche rien n'arrête pas non plus le chronomètre.",
      },
      {
        question: "Que se passe-t-il lorsque le chronomètre des tirs expire ?",
        answer: "Le buzzer du chronomètre retentit et l'arbitre signale une violation. La possession est accordée à l'équipe en défense via une remise en jeu. La seule exception est si le ballon est déjà en l'air au moment où le buzzer sonne et qu'il touche ensuite l'anneau ou entre dans le panier — dans ce cas le panier est valable et aucune violation n'est sifflée.",
      },
      {
        question: "Quand le chronomètre commence-t-il au début d'une possession ?",
        answer: "Le chronomètre démarre dès qu'un joueur prend le contrôle d'un ballon vivant. Pour une remise en jeu, il démarre au moment où le ballon est légalement touché par n'importe quel joueur sur le terrain.",
      },
      {
        question: "Le chronomètre se réinitialise-t-il lorsque la défense commet une faute ?",
        answer: "Pas toujours. Si l'équipe en attaque conserve la possession après une faute défensive via une remise en jeu en demi-terrain offensif, le chronomètre reprend là où il s'était arrêté — sauf s'il reste moins de 14 secondes, auquel cas il se réinitialise à 14. Si la remise en jeu a lieu depuis le demi-terrain défensif, le chronomètre repart à 24 secondes.",
      },
      {
        question: "Que se passe-t-il avec le chronomètre lorsque le ballon sort des limites ?",
        answer: "Le chronomètre s'arrête en même temps que le chronomètre de jeu. Si la dernière équipe à avoir touché le ballon avant la sortie était l'équipe en défense, l'équipe en attaque conserve la possession et le chronomètre reprend là où il s'était arrêté (se réinitialisant à 14 s'il reste moins de 14 secondes). Si c'est l'équipe en attaque qui a causé la sortie, la défense reçoit le ballon avec un nouveau chronomètre de 24 secondes.",
      },
      {
        question: "Que se passe-t-il avec le chronomètre après une entre-deux ?",
        answer: "Après un entre-deux dont une équipe prend le contrôle, le chronomètre repart à 24 secondes pour cette équipe.",
      },
      {
        question: "Le chronomètre tourne-t-il pendant les lancers francs ?",
        answer: "Non. Le chronomètre est arrêté et l'affichage est éteint pendant tous les lancers francs. Après le dernier lancer franc d'une série, si l'équipe qui a tiré récupère le rebond du lancer manqué (ayant touché l'anneau), la règle du reset à 14 secondes s'applique.",
      },
      {
        question: "Que se passe-t-il si le temps restant de la période est inférieur à la valeur de réinitialisation du chronomètre ?",
        answer: "Lorsque le temps restant dans la période est inférieur à la valeur de réinitialisation applicable (14 ou 24 secondes), l'affichage du chronomètre des tirs s'éteint. Aucune violation du chronomètre n'est possible car la fin de la période limite elle-même la possession.",
      },
      {
        question: "Comment les arbitres signalent-ils une violation du chronomètre des tirs ?",
        answer: "L'opérateur du chronomètre fait retentir le buzzer quand le compte atteint zéro. L'arbitre signale ensuite la violation en pointant un bras vers le panier que l'équipe fautive attaquait et en faisant tourner l'autre bras au-dessus de la tête pour indiquer le changement de possession.",
      },
      {
        question: "Quelle est la différence entre le chronomètre des tirs et le chronomètre de jeu en FIBA ?",
        answer: "Le chronomètre de jeu mesure le temps restant dans chaque quart-temps — 10 minutes par quart-temps en FIBA. Le chronomètre des tirs limite chaque possession offensive à 24 secondes. Les deux fonctionnent simultanément pendant le jeu actif, et un seul quart-temps peut contenir de nombreuses possessions, chacune soumise à son propre chronomètre.",
      },
      {
        question: "Quelle est la durée des quarts-temps FIBA par rapport à la NBA ?",
        answer: "Les quarts-temps FIBA durent 10 minutes chacun (4 quarts-temps = 40 minutes de temps réglementaire). La NBA utilise des quarts-temps de 12 minutes (48 minutes au total). Les deux ligues appliquent un chronomètre des tirs de 24 secondes pour les nouvelles possessions. La FIBA a introduit la règle du reset à 14 secondes après un rebond offensif, règle que la NBA a ensuite adoptée.",
      },
      {
        question: "Une équipe peut-elle délibérément retarder la remise en jeu pour faire couler le chronomètre adverse ?",
        answer: "Non. Lors d'une remise en jeu, le chronomètre des tirs démarre dès que le ballon est touché par un joueur sur le terrain. De plus, le joueur qui effectue la remise dispose de 5 secondes pour le faire, et l'arbitre peut sanctionner un comportement antisportif si une équipe retarde injustement la mise en jeu.",
      },
    ],
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
    // Navigation extras
    play: 'Jouer',
    clock: 'Chronomètre',
    playNow: 'Jouer Maintenant',
    playPageTitle: 'Choisissez Votre Mode',
    playPageDescription: 'Choisissez comment vous voulez vivre le basketball. Chaque mode vous plonge dans l\'action.',
    // Clock page
    clockPageTitle: 'Chronomètre Basket – Minuterie 24 et 14 Secondes',
    clockPageDescription: 'Chronomètre de basket en ligne gratuit. Démarrez, arrêtez et réinitialisez selon les règles FIBA des 24 et 14 secondes. Fonctionne sur tous les appareils.',
    // Landing page
    launchClock: 'Lancer le Chronomètre',
    comingSoon: 'Bientôt Disponible',
    landingHeroTitle: 'Au Basketball, Chaque Seconde Compte',
    landingHeroSubtitle: 'Ressentez la pression du chronomètre 24 secondes — comme les pros. Idéal pour les fans, entraîneurs et arbitres qui veulent vivre le jeu sous un angle totalement nouveau.',
    landingModesTitle: 'On Dribble ?',
    landingModeClockTitle: 'Gestion du Chronomètre',
    landingModeClockDesc: 'Ressentez la pression que vit chaque équipe : 24 secondes pour tirer. Idéal à utiliser avec un match en direct à la TV ou une vidéo YouTube. Opérez le chronomètre comme dans un vrai match NBA ou FIBA et entendez le buzzer quand le temps s\'écoule.',
    landingModeTrainingTitle: 'Entraînement Réflexes',
    landingModeTrainingDesc: "Réagissez aux rebonds, fautes et violations comme dans un vrai match. Découvrez votre vitesse de réaction et grimpez dans le Hall of Fame.",
    landingModeYoutubeTitle: 'Free Play YouTube',
    landingModeYoutubeDesc: "Chargez n'importe quel match YouTube comme référence et entraînez-vous à opérer le chronomètre de 24 secondes en temps réel.",
    landingFeaturesTitle: 'Comment Ça Marche',
    landingFeature1Label: 'Accès Instantané',
    landingFeature1Sub: 'Pas de téléchargement, pas d\'installation. Ouvrez le navigateur et entrez dans le jeu.',
    landingFeature2Label: 'Du Parquet aux Gradins',
    landingFeature2Sub: 'Conçu pour les arbitres, les entraîneurs et les fans qui vivent et respirent le basketball.',
    landingFeature3Label: 'Parlez Basketball',
    landingFeature3Sub: 'Le jeu est universel — jouez en français, anglais, italien, espagnol ou grec.',
    landingFeature4Label: 'Règles Officielles',
    landingFeature4Sub: 'Chaque remise à zéro suit les standards officiels FIBA — 24s pour tirer, 14s sur le rebond offensif.',
    // Shared UI
    lightMode: 'clair',
    darkMode: 'sombre',
    shareThisPage: 'Partager cette page :',
    pageBlurb: 'ShotClock Pro est un chronomètre de basketball en ligne gratuit que vous pouvez utiliser directement dans votre navigateur. Démarrez le compte à rebours de 24 secondes, appliquez la réinitialisation de 14 secondes après un rebond offensif et entendez le buzzer quand le temps est écoulé — exactement comme dans un vrai match.',
    quickLinks: 'Liens Rapides',
    language: 'Langue',
    getInTouch: 'Nous Contacter',
    getInTouchText: "Questions, retours, ou juste envie de dire bonjour ? Contactez-nous via l'un des canaux ci-dessous.",
    // Reaction Training
    reactionTraining: "Entraînement Réflexes",
    reactionTrainingTitle: "Entraînement au Temps de Réaction",
    reactionTrainingDescription: "Testez vos réflexes d'opérateur de chronomètre. Réagissez aux événements du basketball aussi vite que possible et gagnez des points pour la vitesse et la précision.",
    startSession: "Démarrer la Session d'Entraînement",
    readyButton: 'Je suis Prêt',
    scenarioOf: 'Scénario {0} sur {1}',
    difficulty: 'Difficulté',
    difficultyEasy: 'Facile (5s)',
    difficultyMedium: 'Moyen (3s)',
    difficultyPro: 'Pro (2s)',
    startStopLabel: 'Démarrer / Arrêter',
    reset14Label: 'Reset 14s',
    reset24Label: 'Reset 24s',
    correctAnswer: 'Correct !',
    wrongAnswer: 'Incorrect !',
    timesUp: 'Temps écoulé !',
    reactionTime: 'Temps de réaction',
    milliseconds: 'ms',
    explanationLabel: 'Pourquoi ?',
    nextScenario: 'Scénario Suivant',
    pointsEarned: '+{0} pts',
    streakLabel: '{0} de suite !',
    timeRemaining: 'Temps restant',
    sessionComplete: 'Session Terminée !',
    yourScore: 'Votre Score',
    scenariosCompleted: '{0} scénarios tentés',
    yourGrade: 'Votre Note',
    personalBest: 'Record Personnel !',
    sessionBreakdown: 'Récapitulatif de Session',
    restartSession: 'Réessayer',
    hallOfFame: 'Hall of Fame',
    enterInitials: 'Vous êtes dans le Hall of Fame ! Entrez vos initiales :',
    submitInitials: 'Valider',
    gradeLabels: {
      ap: 'Éclair',
      a: 'Excellent',
      b: 'Bien',
      c: 'Moyen',
      d: 'Lent',
      f: 'Manqué',
    },
    youtubePageTitle: 'YouTube Free Play',
    youtubePageDescription: 'Collez un lien YouTube d\'un match de basket et opérez le chronomètre en temps réel.',
    youtubeUrlPlaceholder: 'Coller une URL YouTube...',
    youtubeLoadVideo: 'Charger',
    youtubeChangeVideo: 'Changer de vidéo',
    youtubeInvalidUrl: 'Veuillez coller une URL YouTube valide',
    youtubeBlurb: 'Collez n\'importe quel lien YouTube d\'un match de basket et opérez le chronomètre de 24 secondes en temps réel. Démarrez et arrêtez le chronomètre sur chaque possession, réinitialisez à 14 secondes après les rebonds offensifs et entendez le buzzer à l\'expiration — exactement comme dans un vrai match FIBA ou NBA.',
  },
  el: {
    title: 'Δωρεάν Διαδικτυακό Χρονόμετρο Κατοχής Μπάσκετ',
    subtitle: 'Εξασκηθείτε στις δεξιότητες χειρισμού του χρονομέτρου 24 δευτερολέπτων',
    startLabel: 'Έναρξη',
    stopLabel: 'Διακοπή',
    removeDisplayLabel: 'Οθόνη',
    resetButtonText: 'Επαναφορά',
    possessionLabel: 'Κατ.',
    // Navigation
    home: 'Αρχική',
    instructions: 'Οδηγίες',
    fibaResources: 'Πόροι FIBA',
    about: 'Σχετικά',
    faq: 'FAQ',
    // FAQ Page
    faqTitle: 'Συχνές Ερωτήσεις',
    faqDescription: 'Όλα όσα χρειάζεστε να γνωρίζετε για τους κανονισμούς του χρονομέτρου κατοχής και τον τρόπο χρήσης του ShotClock Pro.',
    faqItems: [
      {
        question: 'Ποιος είναι ο κανονισμός του χρονομέτρου κατοχής στο μπάσκετ FIBA;',
        answer: 'Σύμφωνα με τους κανονισμούς FIBA, η επιτιθέμενη ομάδα πρέπει να επιχειρήσει βολή που να αγγίξει το στεφάνι ή να μπει στο καλάθι εντός 24 δευτερολέπτων από την απόκτηση της κατοχής. Εάν δεν το πράξει, ο διαιτητής κηρύσσει παράβαση χρονομέτρου και η κατοχή παραχωρείται στην αντίπαλη ομάδα.',
      },
      {
        question: 'Πότε το χρονόμετρο επαναφέρεται στα 14 δευτερόλεπτα αντί για 24;',
        answer: 'Το χρονόμετρο επαναφέρεται στα 14 δευτερόλεπτα — όχι στα 24 — όταν η επιτιθέμενη ομάδα ανακτά ριμπάουντ από τον πίνακα ή το στεφάνι μετά από δική της απόπειρα βολής. Αυτό ισχύει ανεξάρτητα από το αν η μπάλα παραμένει στο μπροστινό ημίγηπεδο ή επιστρέφει στο πίσω. Η FIBA εισήγαγε αυτόν τον κανονισμό για να ανταμείψει το επιθετικό ριμπάουντ και να επιταχύνει τον ρυθμό του αγώνα.',
      },
      {
        question: 'Τι θεωρείται έγκυρη απόπειρα βολής για την ικανοποίηση του χρονομέτρου;',
        answer: 'Η μπάλα πρέπει να αγγίξει ορατά το στεφάνι (τον κρίκο) ή να μπει στο καλάθι. Μια βολή που χτυπά μόνο τον πίνακα χωρίς να αγγίξει το στεφάνι δεν ικανοποιεί την απαίτηση του χρονομέτρου. Ένα airball που δεν αγγίζει τίποτε επίσης δεν σταματά το χρονόμετρο.',
      },
      {
        question: 'Τι συμβαίνει όταν λήγει το χρονόμετρο κατοχής;',
        answer: 'Ακούγεται το buzzer του χρονομέτρου και ο διαιτητής σηματοδοτεί παράβαση. Η κατοχή παραχωρείται στην αμυνόμενη ομάδα με εκτός ορίων βολή. Η μοναδική εξαίρεση είναι αν η μπάλα βρίσκεται ήδη στον αέρα τη στιγμή που ακούγεται το buzzer και στη συνέχεια αγγίξει το στεφάνι ή μπει στο καλάθι — σε αυτήν την περίπτωση το καλάθι μετράει και δεν κηρύσσεται παράβαση.',
      },
      {
        question: 'Πότε ξεκινά το χρονόμετρο στην αρχή μιας κατοχής;',
        answer: 'Το χρονόμετρο ξεκινά μόλις ένας παίκτης αποκτήσει τον έλεγχο μιας ζωντανής μπάλας. Για εκτός ορίων βολή, το χρονόμετρο ξεκινά τη στιγμή που η μπάλα αγγίζει νόμιμα οποιονδήποτε παίκτη στο γήπεδο.',
      },
      {
        question: 'Επαναφέρεται το χρονόμετρο όταν η άμυνα διαπράξει φάουλ;',
        answer: 'Όχι πάντα. Αν η επιτιθέμενη ομάδα διατηρήσει την κατοχή μετά από αμυντικό φάουλ με εκτός ορίων βολή στο μπροστινό ημίγηπεδο, το χρονόμετρο συνεχίζει από εκεί που σταμάτησε — εκτός αν απομένουν λιγότερα από 14 δευτερόλεπτα, οπότε επαναφέρεται στα 14. Αν η εκτός ορίων γίνει από το πίσω ημίγηπεδο, το χρονόμετρο επαναφέρεται στα πλήρη 24 δευτερόλεπτα.',
      },
      {
        question: 'Τι συμβαίνει στο χρονόμετρο όταν η μπάλα βγει εκτός ορίων;',
        answer: 'Το χρονόμετρο σταματά μαζί με το ρολόι αγώνα. Αν η αμυνόμενη ομάδα άγγιξε τελευταία τη μπάλα, η επιτιθέμενη ομάδα διατηρεί την κατοχή και το χρονόμετρο συνεχίζει από εκεί που σταμάτησε (επαναφέρεται στα 14 αν απομένουν λιγότερα από 14 δευτερόλεπτα). Αν η επιτιθέμενη ομάδα προκάλεσε την εξέλιξη εκτός ορίων, η άμυνα λαμβάνει τη μπάλα με νέο χρονόμετρο 24 δευτερολέπτων.',
      },
      {
        question: 'Τι συμβαίνει στο χρονόμετρο μετά από αμφίβολη μπάλα (jump ball);',
        answer: 'Μετά από αμφίβολη μπάλα που καταλήγει σε ελεγχόμενη κατοχή, το χρονόμετρο επαναφέρεται στα πλήρη 24 δευτερόλεπτα για την ομάδα που αποκτά την κατοχή.',
      },
      {
        question: 'Λειτουργεί το χρονόμετρο κατά τη διάρκεια των ελεύθερων βολών;',
        answer: 'Όχι. Το χρονόμετρο σταματά και η οθόνη σβήνει κατά τη διάρκεια όλων των ελεύθερων βολών. Μετά την τελευταία ελεύθερη βολή μιας σειράς, αν η ομάδα που εκτελεί αποκτήσει επιθετικό ριμπάουντ από την αστοχία (που άγγιξε το στεφάνι), εφαρμόζεται ο κανονισμός επαναφοράς των 14 δευτερολέπτων.',
      },
      {
        question: 'Τι γίνεται αν ο υπόλοιπος χρόνος αγώνα είναι μικρότερος από την τιμή επαναφοράς του χρονομέτρου;',
        answer: 'Όταν ο απομένων χρόνος αγώνα είναι μικρότερος από την εφαρμοστέα τιμή επαναφοράς (14 ή 24 δευτερόλεπτα), η οθόνη του χρονομέτρου κατοχής σβήνει. Δεν μπορεί να διαπραχθεί παράβαση χρονομέτρου διότι το τέλος της περιόδου από μόνο του περιορίζει την κατοχή.',
      },
      {
        question: 'Πώς σηματοδοτείται παράβαση χρονομέτρου από τους διαιτητές;',
        answer: 'Ο χειριστής του χρονομέτρου ηχεί το buzzer όταν το ρολόι φτάσει στο μηδέν. Στη συνέχεια ο διαιτητής σηματοδοτεί παράβαση χρονομέτρου δείχνοντας με το ένα χέρι προς το καλάθι που επιτιθόταν η ομάδα που παρέβη τον κανονισμό και περιστρέφοντας το άλλο χέρι πάνω από το κεφάλι για να δηλώσει αλλαγή κατοχής.',
      },
      {
        question: 'Ποια είναι η διαφορά μεταξύ του χρονομέτρου κατοχής και του ρολογιού αγώνα στη FIBA;',
        answer: 'Το ρολόι αγώνα παρακολουθεί τον εναπομείναντα χρόνο σε κάθε περίοδο — 10 λεπτά ανά περίοδο στη FIBA. Το χρονόμετρο κατοχής περιορίζει κάθε μεμονωμένη επιθετική κατοχή στα 24 δευτερόλεπτα. Και τα δύο τρέχουν ταυτόχρονα κατά τη διάρκεια του αγώνα, και σε μία περίοδο μπορεί να πραγματοποιηθούν πολλές κατοχές, καθεμία υποκείμενη στο δικό της χρονόμετρο.',
      },
      {
        question: 'Πόσο διαρκούν οι περίοδοι FIBA σε σύγκριση με το NBA;',
        answer: 'Οι περίοδοι FIBA διαρκούν 10 λεπτά η καθεμία (4 περίοδοι = 40 λεπτά κανονικού χρόνου). Το NBA χρησιμοποιεί περιόδους 12 λεπτών (48 λεπτά συνολικά). Και τα δύο πρωταθλήματα εφαρμόζουν χρονόμετρο κατοχής 24 δευτερολέπτων για νέες κατοχές. Η FIBA εισήγαγε τον κανονισμό επαναφοράς στα 14 δευτερόλεπτα μετά από επιθετικό ριμπάουντ, τον οποίο το NBA υιοθέτησε αργότερα.',
      },
      {
        question: 'Μπορεί μια ομάδα να καθυστερεί σκόπιμα την εκτός ορίων βολή για να εξαντλήσει χρόνο από το χρονόμετρο;',
        answer: 'Όχι. Σε εκτός ορίων βολή, το χρονόμετρο ξεκινά μόλις η μπάλα αγγίξει παίκτη στο γήπεδο, αλλά ο διαιτητής μπορεί να κηρύξει παράβαση 8 δευτερολέπτων πίσω ημιγηπέδου ή αντιαθλητική συμπεριφορά αν μια ομάδα καθυστερεί αδικαιολόγητα να θέσει τη μπάλα σε παιχνίδι. Η ίδια η εκτός ορίων βολή πρέπει να ολοκληρωθεί εντός 5 δευτερολέπτων.',
      },
    ],
    // About Page
    aboutTitle: 'Σχετικά με το ShotClock Pro',
    aboutContent: [
      'Το ShotClock Pro είναι μια επαγγελματική εφαρμογή εξάσκησης χρονομέτρου μπάσκετ, σχεδιασμένη για να βοηθά διαιτητές, χρονομέτρες και λάτρεις του μπάσκετ να κατακτήσουν την τέχνη του χειρισμού του χρονομέτρου κατοχής.',
      'Αποστολή μας είναι να παρέχουμε μια ολοκληρωμένη πλατφόρμα εξάσκησης που συνδυάζει την απλότητα της βασικής λειτουργίας χρονομέτρου με προηγμένη εκπαίδευση βασισμένη σε σενάρια για επαγγελματική ανάπτυξη.',
      'Είτε είστε αρχάριος που μαθαίνει τα βασικά είτε επαγγελματίας που επιθυμεί να βελτιώσει τις δεξιότητές του, το ShotClock Pro προσφέρει τα εργαλεία και τους πόρους που χρειάζεστε για να διαπρέψετε στη διαχείριση αγώνων μπάσκετ.',
    ],
    aboutDescription:
      'Ελάτε μαζί μας στο ταξίδι για να γίνετε επαγγελματίας ειδικός στο χρονόμετρο κατοχής',
    featureCards: [
      {
        title: 'Επαγγελματική Εκπαίδευση',
        text: 'Κατακτήστε την τέχνη του χειρισμού του χρονομέτρου κατοχής με την ολοκληρωμένη πλατφόρμα εκπαίδευσής μας.',
      },
      {
        title: 'Εξάσκηση σε Πραγματικό Χρόνο',
        text: 'Προσομοιώστε πραγματικά σενάρια αγώνα και οξύνετε τον χρόνο αντίδρασής σας υπό πίεση.',
      },
      {
        title: 'Πόροι FIBA',
        text: 'Αποκτήστε πρόσβαση στους επίσημους κανονισμούς και οδηγίες της FIBA για να παραμένετε ενημερωμένοι με τα διεθνή πρότυπα.',
      },
    ],
    // Instructions Page
    instructionsTitle: 'Οδηγίες Χρονομέτρου Κατοχής',
    instructionsDescription:
      'Μάθετε τους βασικούς και προχωρημένους κανονισμούς χειρισμού του χρονομέτρου κατοχής στο μπάσκετ',
    basicControls: 'Βασικοί Έλεγχοι',
    gameSituations: 'Καταστάσεις Αγώνα',
    importantRules: 'Σημαντικοί Κανονισμοί',
    instructionsSections: [
      {
        title: 'Βασικοί Έλεγχοι',
        steps: [
          'Πατήστε "Έναρξη" για να ξεκινήσει η αντίστροφη μέτρηση του χρονομέτρου',
          'Πατήστε "Διακοπή" για να σταματήσετε το χρονόμετρο ανά πάσα στιγμή',
          'Χρησιμοποιήστε "Reset 24s" για επαναφορά σε πλήρη κατοχή 24 δευτερολέπτων',
          'Χρησιμοποιήστε "Reset 14s" για επαναφορά στα 14 δευτερόλεπτα μετά από επιθετικό ριμπάουντ',
        ],
      },
      {
        title: 'Διόρθωση Χρόνου',
        steps: [
          'Χρησιμοποιήστε το κουμπί + για να προσθέσετε ένα δευτερόλεπτο στον τρέχοντα χρόνο',
          'Χρησιμοποιήστε το κουμπί − για να αφαιρέσετε ένα δευτερόλεπτο από τον τρέχοντα χρόνο',
          'Οι διορθώσεις μπορούν να γίνουν μόνο όταν το χρονόμετρο είναι σταματημένο',
        ],
      },
      {
        title: 'Οθόνη και Buzzer',
        steps: [
          'Πατήστε "Οθόνη" για να αποκρύψετε την ένδειξη χρόνου — χρήσιμο για ασκήσεις τυφλού χρονομέτρου',
          'Πατήστε "Οθόνη" ξανά για να επαναφέρετε την οθόνη',
          'Το χρονόμετρο γίνεται κόκκινο όταν απομένουν 4 δευτερόλεπτα ή λιγότερο',
          'Το buzzer ηχεί αυτόματα όταν το χρονόμετρο φτάσει στο μηδέν',
        ],
      },
    ],
    proTipsTitle: 'Επαγγελματικές Συμβουλές',
    tips: [
      'Κρατάτε τα μάτια σας στον αγώνα — μην κοιτάτε ποτέ επίμονα το χρονόμετρο',
      'Εξασκηθείτε στις επαναφορές των 14 δευτερολέπτων γρήγορα· μια καθυστερημένη επαναφορά μπορεί να επηρεάσει τη ροή του αγώνα',
      'Μελετήστε τους κανονισμούς FIBA σχετικά με το πότε ισχύει η επαναφορά των 14 δευτερολέπτων (καταστάσεις επιθετικού ριμπάουντ)',
    ],
    // FIBA Resources Page
    fibaResourcesTitle: 'Πόροι FIBA',
    officialRules: 'Επίσημοι Κανονισμοί',
    refereeEducation: 'Εκπαίδευση Διαιτητών',
    technicalOfficials: 'Τεχνικοί Αξιωματούχοι',
    videoResources: 'Βιντεοθήκη',
    fibaResourcesDescription:
      'Αποκτήστε πρόσβαση στους επίσημους πόρους και οδηγίες της FIBA για να βελτιώσετε τις δεξιότητές σας στο χειρισμό χρονομέτρου και να παραμένετε ενημερωμένοι με τους τελευταίους κανονισμούς μπάσκετ.',
    fibaResourcesCards: {
      rules: {
        title: 'Επίσημοι Κανονισμοί FIBA',
        description:
          'Πρόσβαση στο πλήρες σύνολο κανονισμών και διατάξεων μπάσκετ της FIBA',
      },
      shotClock: {
        title: 'Οδηγίες Χρονομέτρου Κατοχής',
        description:
          'Λεπτομερείς οδηγίες για τη λειτουργία του χρονομέτρου κατοχής σε διοργανώσεις FIBA',
      },
      training: {
        title: 'Εκπαιδευτικό Υλικό',
        description:
          'Επίσημοι εκπαιδευτικοί πόροι FIBA για διαιτητές και χειριστές',
      },
      competition: {
        title: 'Εγχειρίδιο Διοργανώσεων',
        description: 'Πλήρες εγχειρίδιο για την οργάνωση διοργανώσεων FIBA',
      },
    },
    additionalInfo: {
      title: 'Πρόσθετες Πληροφορίες',
      worldGoverning:
        'Η FIBA είναι ο παγκόσμιος διοικητικός φορέας για το μπάσκετ, υπεύθυνος για τους διεθνείς κανονισμούς και τις διοργανώσεις του αθλήματος.',
      tournaments:
        'Ο οργανισμός εποπτεύει μεγάλες διεθνείς διοργανώσεις, συμπεριλαμβανομένων του Παγκοσμίου Κυπέλλου FIBA και των Ολυμπιακών αγώνων μπάσκετ.',
    },
    // Navigation extras
    play: 'Παίξε',
    clock: 'Χρονόμετρο',
    playNow: 'Παίξε Τώρα',
    playPageTitle: 'Επίλεξε Τρόπο Λειτουργίας',
    playPageDescription: 'Επίλεξε πώς θέλεις να βιώσεις το μπάσκετ. Κάθε τρόπος σε βάζει στη δράση.',
    // Clock page
    clockPageTitle: 'Χρονόμετρο Μπάσκετ – Αντίστροφη Μέτρηση 24 και 14 Δευτερολέπτων',
    clockPageDescription: 'Δωρεάν διαδικτυακό χρονόμετρο κατοχής μπάσκετ. Ξεκινήστε, σταματήστε και επαναφέρετε σύμφωνα με τους κανόνες FIBA. Λειτουργεί σε κάθε συσκευή.',
    // Landing page
    launchClock: 'Εκκίνηση Χρονομέτρου',
    comingSoon: 'Σύντομα',
    landingHeroTitle: 'Στο Μπάσκετ Κάθε Δευτερόλεπτο Μετράει',
    landingHeroSubtitle: 'Νιώστε την πίεση του χρονομέτρου των 24 δευτερολέπτων — όπως οι επαγγελματίες. Ιδανικό για φίλους του μπάσκετ, προπονητές και διαιτητές που θέλουν να βιώσουν το παιχνίδι από μια εντελώς νέα οπτική.',
    landingModesTitle: 'Ας Ντριμπλάρουμε',
    landingModeClockTitle: 'Χειρισμός Χρονομέτρου',
    landingModeClockDesc: 'Νιώστε την πίεση που βιώνει κάθε ομάδα: 24 δευτερόλεπτα για σουτ. Ιδανικό για χρήση παράλληλα με ζωντανό αγώνα στην TV ή βίντεο YouTube. Χειριστείτε το χρονόμετρο όπως σε πραγματικό αγώνα NBA ή FIBA και ακούστε το buzzer.',
    landingModeTrainingTitle: 'Εκπαίδευση Αντανακλαστικών',
    landingModeTrainingDesc: 'Αντιδράστε σε ριμπάουντ, φάουλ και παραβάσεις όπως σε πραγματικό αγώνα. Ανακαλύψτε πόσο γρήγοροι είστε και ανεβείτε στη Λίστα Θρύλων.',
    landingModeYoutubeTitle: 'Free Play YouTube',
    landingModeYoutubeDesc: 'Φορτώστε οποιονδήποτε αγώνα YouTube ως αναφορά και εξασκηθείτε στη χειροκίνητη λειτουργία του χρονομέτρου 24 δευτερολέπτων σε πραγματικό χρόνο.',
    landingFeaturesTitle: 'Πώς Λειτουργεί',
    landingFeature1Label: 'Άμεση Πρόσβαση',
    landingFeature1Sub: 'Χωρίς λήψη, χωρίς εγκατάσταση. Ανοίξτε τον περιηγητή και είστε στο παιχνίδι.',
    landingFeature2Label: 'Από το Παρκέ στις Κερκίδες',
    landingFeature2Sub: 'Σχεδιασμένο για διαιτητές, προπονητές και φίλαθλους που ζουν και αναπνέουν μπάσκετ.',
    landingFeature3Label: 'Μιλάς Μπάσκετ',
    landingFeature3Sub: 'Το παιχνίδι είναι παγκόσμιο — παίξτε στα ελληνικά, αγγλικά, ιταλικά, ισπανικά ή γαλλικά.',
    landingFeature4Label: 'Κανόνες που Εμπιστεύεστε',
    landingFeature4Sub: 'Κάθε επαναφορά ακολουθεί τα επίσημα πρότυπα FIBA — 24δ για σουτ, 14δ στο επιθετικό ριμπάουντ.',
    // Shared UI
    lightMode: 'φωτεινό',
    darkMode: 'σκοτεινό',
    shareThisPage: 'Μοιραστείτε αυτή τη σελίδα:',
    pageBlurb: 'Το ShotClock Pro είναι ένα δωρεάν διαδικτυακό χρονόμετρο κατοχής μπάσκετ που μπορείτε να χρησιμοποιήσετε απευθείας από τον browser σας. Ξεκινήστε την αντίστροφη μέτρηση 24 δευτερολέπτων, εφαρμόστε την επαναφορά 14 δευτερολέπτων μετά από επιθετικό ριμπάουντ και ακούστε το buzzer όταν ο χρόνος εξαντληθεί — ακριβώς όπως σε έναν πραγματικό αγώνα.',
    quickLinks: 'Γρήγοροι Σύνδεσμοι',
    language: 'Γλώσσα',
    getInTouch: 'Επικοινωνία',
    getInTouchText: 'Ερωτήσεις, σχόλια ή θέλετε απλώς να χαιρετήσετε; Επικοινωνήστε μαζί μας μέσω οποιουδήποτε από τα παρακάτω κανάλια.',
    // Reaction Training
    reactionTraining: 'Εκπαίδευση Αντανακλαστικών',
    reactionTrainingTitle: 'Εκπαίδευση Χρόνου Αντίδρασης',
    reactionTrainingDescription: 'Δοκιμάστε τα αντανακλαστικά σας ως χειριστής χρονομέτρου. Αντιδράστε σε συμβάντα μπάσκετ όσο πιο γρήγορα γίνεται και κερδίστε πόντους για ταχύτητα και ακρίβεια.',
    startSession: 'Έναρξη Συνεδρίας Εκπαίδευσης',
    readyButton: 'Είμαι Έτοιμος',
    scenarioOf: 'Σενάριο {0} από {1}',
    difficulty: 'Δυσκολία',
    difficultyEasy: 'Εύκολο (5s)',
    difficultyMedium: 'Μεσαίο (3s)',
    difficultyPro: 'Pro (2s)',
    startStopLabel: 'Έναρξη / Διακοπή',
    reset14Label: 'Επαναφορά 14s',
    reset24Label: 'Επαναφορά 24s',
    correctAnswer: 'Σωστό!',
    wrongAnswer: 'Λάθος!',
    timesUp: 'Ο χρόνος τελείωσε!',
    reactionTime: 'Χρόνος αντίδρασης',
    milliseconds: 'ms',
    explanationLabel: 'Γιατί;',
    nextScenario: 'Επόμενο Σενάριο',
    pointsEarned: '+{0} πόντοι',
    streakLabel: '{0} στη σειρά!',
    timeRemaining: 'Υπολειπόμενος χρόνος',
    sessionComplete: 'Η Συνεδρία Ολοκληρώθηκε!',
    yourScore: 'Η Βαθμολογία σας',
    scenariosCompleted: '{0} σενάρια δοκιμάστηκαν',
    yourGrade: 'Ο Βαθμός σας',
    personalBest: 'Προσωπικό Ρεκόρ!',
    sessionBreakdown: 'Ανάλυση Συνεδρίας',
    restartSession: 'Δοκιμάστε Ξανά',
    hallOfFame: 'Λίστα Θρύλων',
    enterInitials: 'Μπήκατε στη Λίστα Θρύλων! Εισάγετε τα αρχικά σας:',
    submitInitials: 'Υποβολή',
    gradeLabels: {
      ap: 'Αστραπή',
      a: 'Άριστα',
      b: 'Καλά',
      c: 'Μέτρια',
      d: 'Αργά',
      f: 'Χάθηκε',
    },
    youtubePageTitle: 'YouTube Free Play',
    youtubePageDescription: 'Επικολλήστε έναν σύνδεσμο YouTube αγώνα μπάσκετ και χειριστείτε το χρονόμετρο σε πραγματικό χρόνο.',
    youtubeUrlPlaceholder: 'Επικολλήστε URL YouTube...',
    youtubeLoadVideo: 'Φόρτωση',
    youtubeChangeVideo: 'Αλλαγή βίντεο',
    youtubeInvalidUrl: 'Παρακαλώ επικολλήστε έγκυρο URL YouTube',
    youtubeBlurb: 'Επικολλήστε οποιονδήποτε σύνδεσμο YouTube αγώνα μπάσκετ και χειριστείτε το χρονόμετρο κατοχής 24 δευτερολέπτων σε πραγματικό χρόνο. Εκκινήστε και σταματήστε το χρονόμετρο ανά κατοχή, επαναφέρετε στα 14 δευτερόλεπτα μετά από επιθετικά ριμπάουντ και ακούστε το buzzer όταν λήξει ο χρόνος — ακριβώς όπως σε πραγματικό αγώνα FIBA ή NBA.',
  },
}

export default AppLocalization
