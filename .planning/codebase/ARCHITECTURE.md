# Architecture

## System Overview
The project is a full-stack Movie Booking Application (BookMyShow Clone) consisting of a Spring Boot backend and a React frontend.

## Backend Architecture
- **Layered Pattern:**
  - `controller`: REST API endpoints handling HTTP requests.
  - `service`: Business logic layer.
  - `repository`: Data access layer using Spring Data JPA.
  - `entity`: Database models.
  - `dto`: Data Transfer Objects for API requests/responses.
- **Security:** Spring Security placeholders detected.
- **Persistence:** Relational database (PostgreSQL) with JPA/Hibernate.

## Frontend Architecture
- **Component-Based:** React with Functional Components and Hooks.
- **Routing:** React Router for client-side navigation.
- **State Management:** React Context API or local state (to be determined).
- **Styling:** Modular CSS for premium aesthetics.

## Data Flow
1. User interacts with UI components.
2. Frontend makes asynchronous API calls using Axios.
3. Backend service processes business logic, interacting with the DB.
4. Response sent back as JSON to be rendered in the UI.
