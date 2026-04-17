# ShotClock Pro — Free Online Basketball Shot Clock

**Live at [24shotclock.com](https://www.24shotclock.com)**

A professional-grade basketball shot clock simulator built for referees, coaches, and fans who want to practice officiating or follow a live game. Fully compliant with FIBA rules.

---

## Features

- **24s / 14s resets** — one-tap resets per FIBA rules (backcourt possession → 24s, offensive rebound / frontcourt control → 14s)
- **Start / Stop** — single tap to freeze or resume the clock
- **Correction mode** — increment or decrement seconds to match the referee's monitor review decision
- **Clear** — blank the display during free throws and between periods
- **Arena video hero** — immersive basketball court background on the home screen
- **Basketball loader** — DSEG14 digital-font countdown animation on every page transition
- **Light & Dark themes** — persisted per device
- **Fully responsive** — optimised for phones (portrait and landscape), tablets, and desktop
- **5 languages** — English, Italian, Spanish, French, Greek (auto-routed per URL prefix)
- **SEO optimised** — structured data (WebSite, WebApplication, FAQPage, HowTo), Open Graph, Twitter cards, canonical URLs

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, feature overview, and mode cards |
| `/clock` | The shot clock — full controls |
| `/play` | Quick-launch page that goes straight to the clock |
| `/instructions` | Step-by-step operating guide with pro tips |
| `/fiba-resources` | Links to official FIBA rulebooks and documents |
| `/faq` | Frequently asked questions |
| `/about` | About the project and the developer |

Non-English routes are prefixed: `/it/`, `/es/`, `/fr/`, `/el/`.

---

## How to Use

The best way to practice is to broadcast a game on TV or YouTube and operate the shot clock in real time alongside the referees.

1. **Throw-in / new possession** → Reset 24s, then Start
2. **Offensive rebound** → Reset 14s (clock keeps running)
3. **Defensive foul in backcourt** → Stop, Reset 24s
4. **Defensive foul in frontcourt with ≥14s remaining** → Stop, leave as is
5. **Defensive foul in frontcourt with <14s remaining** → Stop, Reset 14s
6. **Free throws** → Clear display; after last FT made, Reset 24s
7. **Referee monitor review** → Use Correction to adjust seconds

---

## Tech Stack

| | |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | styled-components |
| Routing | React Router v6 |
| Animations | react-spring |
| Hosting | AWS Amplify + CloudFront |
| Font | DSEG14 (digital clock), Poppins (UI) |

---

## Local Development

```bash
npm install
npm start          # dev server at localhost:3000
npm run build      # production build
npm test           # interactive test runner
npm test -- --watchAll=false  # single test run
```

---

## Rules Reference

- [FIBA Official Basketball Rules](https://www.fiba.basketball/rules)
- [Shot Clock Equipment Rules](https://www.fiba.basketball/rules/equipment)

---

Built by [Chen Gazit](https://chengazit.com)
