# Phase 1 Plan: Foundation & Discovery

## Objective
Establish the frontend foundation and implement the discovery experience (Home Page).

## Execution Strategy
- **Parallelization:** Enable Parallel
- **Wave 1:** Plan 1.1 (Foundations)
- **Wave 2:** Plan 1.2, 1.3 (Discovery UI & Grid)
- **Wave 3:** Plan 1.4 (API Bridge)

## Plans

### Plan 1.1: Foundations
*Assigned to: Agent A*
- **Task:** Set up CSS variables, theme, and common components (Navbar, Footer, Button).
- **Files:** `frontend/src/index.css`, `frontend/src/components/Navbar.tsx`, etc.
- **Verification:** Navbar is responsive and matches "premium" design.

### Plan 1.2: Discovery UI
*Assigned to: Agent B*
- **Task:** Create a rotating hero carousel for featured movies and a search bar.
- **Files:** `frontend/src/components/Hero.tsx`, `frontend/src/components/SearchBar.tsx`.
- **Verification:** Carousel transitions are smooth. Search bar is interactive.

### Plan 1.3: Movie Grid
*Assigned to: Agent C*
- **Task:** Design high-quality movie cards showing posters, rating, and language. Render placeholders for now.
- **Files:** `frontend/src/components/MovieCard.tsx`, `frontend/src/components/MovieGrid.tsx`.
- **Verification:** Cards look premium and are responsive.

### Plan 1.4: API Bridge
*Assigned to: Agent D*
- **Task:** Configure Axios, create API services for Movies and Cities. Connect Home page to backend.
- **Files:** `frontend/src/services/api.ts`, `frontend/src/pages/Home.tsx`.
- **Verification:** Movies are fetched and displayed from the Spring Boot backend.
