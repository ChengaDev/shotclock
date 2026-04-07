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
  },
}

export default AppLocalization
