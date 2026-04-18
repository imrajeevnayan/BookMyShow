# Coding Conventions

## Backend
- **Dependency Injection:** Use `@RequiredArgsConstructor` with `private final` fields.
- **API Responses:** Return `ResponseEntity<T>` from controller methods.
- **Naming:** 
  - Packages: `com.cfs.BMS.<sublayer>`
  - Classes: PascalCase (e.g., `UserController`)
  - Methods: camelCase (e.g., `getAllUsers`)
- **BO/DTO:** Use DTOs for data transfer, map to entities in services.
- **Documentation:** Use SpringDoc (Swagger) annotations in controllers.

## Frontend
- **Components:** Functional components with TypeScript interfaces for props.
- **Hooks:** Use `useEffect` for data fetching, custom hooks for shared logic.
- **Styling:** Modular CSS or centralized variables in `index.css`.
- **API Calls:** Unified Axios instance with base URL configuration.
