# Agent Instructions for Testing React App

## Setup

- Install dependencies: `bun install` (preferred) or `npm install`
- Create `.env.local` with Auth0 credentials (see README for setup):
  ```
  AUTH0_DOMAIN=your-auth0-domain.auth0.com
  AUTH0_CLIENT_ID=your-client-id
  ```
- JSON Server watches `src/data/db.json` for mock API data on port 3000
- API base URL is hardcoded to `http://localhost:3000` in `src/main.tsx`

## Development

- Start both servers concurrently: `bun run start`
  - JSON Server (mock API): `:3000`
  - Vite Dev Server: `:5173`
- If port 3000 is in use, update port in `json-server.json` and `src/main.tsx`
- Dev server only: `bun run dev` (Vite on :5173)
- JSON Server only: `bun run server` (:3000)

## Code Quality

- Lint: `bun run lint` (ESLint with strict warnings-as-errors)

## Testing

- Unit tests: `bun run test` (Vitest, passes with no tests)
- Test UI: `bun run test:ui`
- Run single test: `bun run test -- testName.test.tsx`

## Build & Preview

- Build: `bun run build` (Vite build)
- Preview: `bun run preview`

## Architecture

- Auth0 configuration required for authentication features
- Language support via context (English/Spanish) in `src/providers/language/`
- Redux Toolkit store configured in `src/store/`
- React Query provider in `src/providers/ReactQueryProvider.tsx`
- Entry point: `src/main.tsx`, routes defined in `src/routes.tsx`
- Key libraries: Auth0, Tailwind, RadixUI, React Query, Redux Toolkit, React Hook Form
