# Project Structure

## Root
- `src/`: Backend source code.
- `frontend/`: React frontend workspace.
- `UI/`: Legacy/Static UI files (to be retired).
- `pom.xml`: Backend build configuration.
- `.planning/`: GSD project planning and codebase map.

## Backend (src/main/java/com/cfs/BMS)
- `config/`: Configuration classes (CORS, OpenAPI).
- `controller/`: REST controllers for Movies, Bookings, etc.
- `service/`: Interface and implementation for business services.
- `repository/`: Spring Data repositories.
- `entity/`: JPA entities mapping to DB tables.
- `dto/`: Request/Response data structures.
- `enums/`: Enumeration types (e.g., SeatType, BookingStatus).

## Frontend (frontend/src)
- `components/`: Reusable UI components.
- `pages/`: Page-level components.
- `services/`: API client services (Axios).
- `assets/`: Static assets (images, fonts).
- `styles/`: Global and modular CSS files.
