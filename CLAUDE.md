# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Run dev server
npm run build    # Production build
npm test         # Run tests (interactive)
npm test -- --watchAll=false  # Run tests once
```

## Architecture

This is a Create React App project using TypeScript, styled-components, React Router v6, and react-spring for animations.

**Key patterns:**

- **Theming**: `ThemeProvider` (styled-components) wraps the entire app. Two themes defined in `src/themes/themes.ts` (`lightTheme`/`darkTheme`). Theme type in `src/themes/types.ts`. All styled components access theme via `props.theme`.
- **Localization**: Custom context-based i18n (not i18next despite it being installed). `LanguageProvider` in `src/contexts/Language/LanguageProvider.tsx` provides `useLocalization()` hook. All translations live in `src/localization/locailzation.tsx` (note the typo). Supported languages: `en`, `he`, `it`, `es`, `fr`. Adding a language requires entries in both `src/constants/LanguageCodes.tsx` and `src/localization/locailzation.tsx`.
- **Routing**: Routes defined inline in `src/App.tsx`. Route paths as constants in `src/AppRoutes.tsx`.
- **Shot clock logic**: All timer state lives in `src/components/ShotClock.tsx`. Uses refs (`secondsRef`, `isTickingRef`, `intervalRef`) alongside state to avoid stale closure issues in `setInterval`. Reset positions: 24s (`BackCountPosition`) and 14s (`FrontCountPosition`) defined in `src/Constants.ts`.
- **Layout**: `Navigation` (fixed top, 80px height) → `PageWrapper` (margin-top: 80px) → `MainContent` → page component → `Footer`. `ShareButtons` is rendered on each page.

**Page structure**: Home (`/`) renders `ShotClockPage` → `ShotClock` + `Controls` + `Correction`. Content pages (`/about`, `/instructions`, `/fiba-resources`) render inside a `ContentCard` wrapper in `App.tsx`.

**Planned future mode**: An "Advanced mode" for scenario-based training with response-time measurement is planned but not yet implemented. Keep this in mind when making architectural decisions — avoid patterns that would make adding this mode harder.

**Mobile breakpoint**: `(max-width: 550px)` via `theme.mediaQueries.mobile`.

**Buzzer audio**: Loaded from an external S3 URL in `ShotClock.tsx`.
