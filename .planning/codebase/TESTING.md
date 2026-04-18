# Testing

## Current State
- No automated tests detected (missing `src/test` directory).

## Strategy (Proposed)
- **Unit Testing:** Implement JUnit 5 + Mockito for service layer logic.
- **Integration Testing:** Use `@SpringBootTest` with Testcontainers for repository and controller layers.
- **Frontend Testing:** Vitest + React Testing Library for components.
- **End-to-End:** Potential use of Playwright or Cypress for critical booking flows.
