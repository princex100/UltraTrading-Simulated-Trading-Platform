# Code Writing Guidelines

Follow these coding guidelines throughout the entire project. This project is meant to be interview-friendly, easy to maintain, and easy to explain. Prioritize readability over clever or compact code.

### 1. Readability is the highest priority
Write code that a beginner to intermediate MERN developer can understand. Avoid dense code. Avoid writing multiple operations in one line. Prefer clarity over shortening the code.

### 2. Use simple JavaScript
Use modern JavaScript (ES6+) but avoid advanced patterns that reduce readability.
Avoid unnecessary:
* Chaining
* Nested ternary operators
* Complex destructuring
* Functional programming tricks
* One-line expressions
Write straightforward code.

### 3. Keep functions small
Every function should have one responsibility. Avoid writing controllers with hundreds of lines. Break logic into small helper functions whenever appropriate.

### 4. Use meaningful variable names
Prefer explicit names like `accessToken`, `currentUser`, `stockDetails`. Avoid short variables like `t`, `d`, `obj`, `data`.

### 5. Add spacing between logical blocks
Leave 2–3 blank lines between variable declarations, database queries, condition checks, business logic, and responses. The code should never look compressed.

### 6. Keep condition blocks readable
Instead of combining conditions (e.g., `if (user && user.isVerified)`), break them into separate, explicit early-return `if` blocks.

### 7. Keep database queries readable
Avoid long chained queries in a single line. Break queries across multiple lines or store intermediate results in variables.

### 8. Avoid deeply nested code
Prefer early returns over deeply nested `if` statements.

### 9. Use simple comments
Only add comments for major sections (e.g., `// Register Controller`). Do not comment every line.

### 10. Avoid unnecessary abstraction
Do not create complex design patterns (Repository, Factory, Builder, Adapter, Services, DI) unless specifically requested. Keep architecture simple.

### 11. Keep folder structure shallow
Avoid unnecessary nesting. Stick to standard folders like `controllers/`, `models/`, `routes/`, `middlewares/`, `utils/`.

### 12. React Components
Use simple functional components. Avoid huge components; split them when difficult to read. Use meaningful names.

### 13. Keep JSX readable
Avoid writing everything inside one return statement. Break JSX into logical sections with spacing.

### 14. Keep API controllers simple
Controller flow should consistently follow:
Validate Request -> Database Query -> Business Logic -> Return Response

### 15. Consistent naming
Models: `User`, `Stock`, `Holding`, etc.
Controllers: `user.controller.js`, `stock.controller.js`, etc.
Routes: `user.routes.js`, `stock.routes.js`, etc.

### 16. Write human-like code
Keep implementations straightforward, practical, and production-ready. Avoid unnecessarily clever syntax or excessive optimizations.

### 17. Maintain consistent formatting
Use proper indentation. Leave blank lines between logical sections. Avoid long lines. Prefer vertical readability over horizontal compactness.

### 18. Final Goal
Every file should be easy enough that an interviewer can open it and understand its purpose within a few seconds. Code should be fully functional, clean, readable, easy to debug/explain/maintain. Always prioritize clarity over fewer lines of code.
