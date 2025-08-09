# ConnectVerse – Immediate To‑Do Plan

This checklist tracks the fastest path to an MVP with quality gates.

## 0) Product & Scope (today)

- [ ] Define MVP personas and top 3 user stories
- [ ] Write acceptance criteria for each story
- [ ] Name core MVP features (Auth, Profile, Connect, Search) and descoped items

## 1) Architecture & Stack (confirm defaults or adjust)

- [x] Confirm stack:
  - Frontend: Next.js (React + TypeScript, Tailwind)
  - Backend: Node.js + NestJS (TypeScript)
  - DB: PostgreSQL + Prisma ORM
  - Auth: NextAuth (OAuth/email), JWT sessions
  - Monorepo: npm workspaces (apps/web, apps/api, packages/\*)
- [x] Decide on API style: REST (chosen for simplicity and immediate productivity)
- [x] Decide on real-time needs: Deferred for MVP, will add scoped WebSocket for notifications later

## 2) Repo & Dev Environment

- [x] Create GitHub repo, add README
- [ ] Add LICENSE, CONTRIBUTING
- [x] Initialize npm workspaces (apps/, packages/)
- [x] VS Code setup: .vscode/extensions.json, settings.json, launch.json, tasks.json
- [x] Secrets: .env.example created
- [x] Docker: docker-compose.yml for Postgres
- [x] Database connection established

## 3) Quality Gates

- [x] TypeScript strict enabled for web and API
- [ ] ESLint + Prettier (base configs present, need customization)
- [ ] Husky + lint-staged (format, lint, typecheck pre-commit)
- [ ] Unit tests: API tests with Jest, E2E tests
- [ ] GitHub Actions: lint, typecheck, test, build on PR

## 4) Data Design

- [x] Draft ERD for MVP: User, Profile, Connection, Skills, Endorsements
- [x] Implement Prisma schema, migrations, seed script
- [ ] Seed test data for local dev

## 5) Auth

- [ ] Auth.js setup (Google/GitHub/email magic link – pick 1–2)
- [ ] Session strategy (JWT), secure cookies
- [ ] Protect server routes and UI pages, add middleware/guards

## 6) API (NestJS)

- [x] Health check endpoint
- [x] Prisma service and module setup for database access
- [ ] Auth endpoints if needed (or delegate to NextAuth)
- [ ] Profile: CRUD (self), view others (public fields)
- [ ] Connections: request, accept/decline, list
- [ ] Users: search (name/handle), pagination
- [ ] Error handling, logging (pino), validation (zod/class-validator)

## 7) Web UI (Next.js)

- [x] Scaffold basic homepage with API connection test
- [x] API health check integration
- [ ] Layout, theme, design system (Tailwind + basic UI primitives)
- [ ] Data fetching hooks, optimistic updates where safe
- [ ] Empty states, loading, error boundaries
- [ ] Pages: /auth/signin, /profile, /connections, /search

## 8) Observability & Ops

- [ ] Structured logs, error reporter (Sentry or equivalent)
- [ ] Basic metrics (optional), analytics (privacy-safe)
- [ ] ENV config per environment

## 9) Deployment

- [ ] Hosting: Vercel (web), Render/Fly/railway (API), Neon/Supabase (DB)
- [ ] CI deploy pipelines, secrets in provider
- [ ] Staging environment with seeded data
- [ ] Migrations on deploy

## 10) Project Management

- [ ] GitHub Project board: Backlog, In‑Progress, Review, Done
- [ ] Milestones:
  - M0 Dev Env + CI
  - M1 Auth + Profile
  - M2 Connections + Search
  - M3 Polish + Deploy

## 11) Constraints – Portfolio Technology Diversity

To maximize breadth and demonstrate versatility:

- Aim to avoid reusing identical tech stacks across projects where possible.
- Prioritize variety in programming languages, frameworks, and cloud platforms.
- For upcoming projects, target:
  - Frontend: JavaScript/TypeScript with React (Next.js)
  - Backend: Node.js (NestJS)
- Where feasible, vary cloud providers and backend languages to prevent excessive repetition in the portfolio.

## Next Immediate Tasks

1. ~~Set up Prisma with PostgreSQL in the API project~~ ✅ DONE
2. ~~Create data models (User, Profile, Connection)~~ ✅ DONE
3. ~~Implement API health check endpoint and API test from frontend~~ ✅ DONE
4. Add NextAuth authentication with at least one provider
5. Implement basic Profile module with CRUD operations
6. Add Connection request functionality
7. Create seed data for testing## Progress Update (August 9, 2025)

### Completed Items:

- ✅ Repository setup with monorepo structure
- ✅ Next.js frontend and NestJS backend scaffolding
- ✅ PostgreSQL database running in Docker
- ✅ Prisma ORM setup with complete data models
- ✅ Initial database migration created and applied
- ✅ API health check endpoint implemented
- ✅ Frontend-backend connection test working
- ✅ README updated to reflect current technology stack

### Current Status:

- 📊 **Architecture & Stack**: 100% complete
- 📊 **Repo & Dev Environment**: 83% complete
- 📊 **Quality Gates**: 20% complete
- 📊 **Data Design**: 67% complete
- 📊 **API (NestJS)**: 17% complete
- 📊 **Web UI (Next.js)**: 40% complete

### Next Focus Areas:

1. Authentication with NextAuth.js
2. Basic Profile module implementation
3. Connection management functionality
4. Unit testing setup

## Open Questions

- [x] Monorepo vs polyrepo? → Monorepo with npm workspaces
- [x] tRPC vs REST? → REST for MVP speed
- [x] Real-time chat in MVP? → Deferred, will add notifications first via WebSockets
- [ ] Any compliance or PII constraints?
