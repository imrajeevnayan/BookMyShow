# Concerns

## Technical Debt
- **Missing Tests:** The project has zero test coverage, which increases the risk of regressions during frontend integration.
- **Legacy UI:** The `UI/` folder contains static HTML/JS that may contain business logic or patterns that need to be migrated or discarded.

## Security
- **Auth Implementation:** While `UserController` has registration/login, there's no visible Spring Security filter chain configuration or JWT logic in the `config` package. Password hashing needs verification.

## Architecture
- **Missing Domain Constraints:** Need to ensure that business rules (like booking seats already taken) are robustly handled in the service layer.
- **API Performance:** Ensure that deep-linking (e.g., fetching shows for a theater for a specific movie) is optimized.
