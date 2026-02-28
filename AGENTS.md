# AGENTS.md

## Cursor Cloud specific instructions

This is a single-page **Angular 19 + NgRx** counter application. There is no backend, database, or external service required.

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm start` (serves at `http://localhost:4200`) |
| Build | `npm run build` |
| Unit tests | `npx ng test --no-watch --browsers=ChromeHeadless` |

### Caveats

- **Unit tests have pre-existing failures**: All 5 spec files fail with `NullInjectorError: No provider for Store!` because the test modules are missing `StoreModule.forRoot()`. The test *infrastructure* (Karma + ChromeHeadless) works correctly; the failures are in the test code itself.
- **No lint script**: There is no ESLint or dedicated lint command configured in `package.json`. The project relies on TypeScript strict mode (`tsconfig.json`) and the Angular compiler for static checks; `npm run build` is the closest equivalent to a lint check.
- **No e2e tests**: The Angular CLI scaffolded `ng e2e` but no e2e framework is installed.
- Chrome/Chromium is pre-installed in the Cloud VM; Karma tests run with `--browsers=ChromeHeadless`.
