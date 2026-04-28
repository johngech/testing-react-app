# Agent Instructions for Testing React App

## Setup
- Install dependencies: `bun install` (preferred) or `npm install`
- Create `.env.local` with Auth0 credentials:
  ```
  AUTH0_DOMAIN=your-auth0-domain.auth0.com
  AUTH0_CLIENT_ID=your-client-id
  ```
- The app requires two servers:
  - JSON Server (mock API): `bun run server` (runs on :3000)
  - Vite Dev Server: `bun run dev` (runs on :5173)
- Start both concurrently: `bun run start`
- If port 3000 is in use, update port in `json-server.json` and `src/main.tsx`

## Development
- Dev server: `bun run dev` (Vite on :5173)
- Lint: `bun run lint` (ESLint with strict warnings-as-errors)
- Test: `bun run test` (Vitest, passes with no tests)
- Test UI: `bun run test:ui`
- Preview: `bun run preview`
- Build: `bun run build` (Vite build)
- JSON Server: `bun run server` (:3000)

## Important Notes
- API base URL is hardcoded to `http://localhost:3000` in `src/main.tsx`
- JSON Server watches `src/data/db.json` for mock data
- Auth0 configuration required for authentication features
- Uses Bun for scripts but compatible with npm via script delegation
- Language support via context (English/Spanish) in `src/providers/language/`
- Redux Toolkit store configured in `src/store/`
- React Query provider in `src/providers/ReactQueryProvider.tsx`
- Entry point: `src/main.tsx`, routes defined in `src/routes.tsx`
- Key libraries: Auth0, Tailwind, RadixUI, React Query, Redux Toolkit, React Hook Form

## File Structure Highlights
- Components: `src/components/`
- Pages: `src/pages/`
- Admin pages: `src/pages/admin/`
- Providers/contexts: `src/providers/`
- Hooks: `src/hooks/`
- Store slices: `src/store/`
- Validation schemas: `src/validationSchemas/`
- Language data: `src/providers/language/data/`