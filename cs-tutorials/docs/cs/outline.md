# THE COMPLETE AGILE PDM CURRICULUM

## From Zero to Senior Engineer in 20 Sprints

**Philosophy:** Build working software every sprint. Learn deeply only what you need, when you need it. Refactor constantly. Get stakeholder feedback. Adapt the plan.

**Target:** Compress 20+ years of software engineering wisdom (including CS degree from when computers were simpler and you could understand "the metal") into a practical, hands-on curriculum.

**Structure:**

- **Each sprint = 1-2 weeks** (at 20 hours/week)
- **User Stories** = What stakeholders see (working features)
- **JIT Deep Dives** = What you learn (CS, systems, patterns)
- **TDD Tasks** = Write tests first
- **Refactoring Tasks** = Make it better
- **Demo** = Show stakeholders (you test the app!)

**How to Use:**

1. Complete sprints in order (dependencies matter)
2. **ADD SPRINTS** as needed (stakeholder feedback, new requirements)
3. Each deep dive is a **separate tutorial prompt**
4. Build → Test → Demo → Get Feedback → Adapt

---

## � SPRINT 0: THE LAUNCHPAD

**Goal:** Professional development environment ready

### User Stories

- ✅ As a Dev, I have a professional development environment on Windows
- ✅ As a Dev, I can run Linux commands and understand what they do
- ✅ As a Dev, I have Git configured and understand version control basics

### Learning Tasks (JIT Deep Dives)

**0.1: Systems Deep Dive - How Computers Actually Work**

- The von Neumann architecture (CPU, Memory, I/O)
- Binary and hexadecimal (why computers use base-2)
- Bits, bytes, words, addresses
- The instruction cycle (fetch-decode-execute)
- Registers vs RAM vs Disk (the memory hierarchy)
- **Toy Project:** Build a 4-bit calculator simulator to understand ALU operations

**0.2: OS Deep Dive - What Operating Systems Do**

- Kernel vs user space
- System calls (how programs talk to the OS)
- Processes vs threads
- Virtual memory (why your program thinks it has all the RAM)
- File systems (inodes, directories, permissions)
- **Toy Project:** Write a program that makes system calls directly (open, read, write, close)

**0.3: WSL2 Deep Dive - Virtualization**

- What is a hypervisor? (Type 1 vs Type 2)
- How WSL2 uses Hyper-V
- Linux kernel in Windows
- File system translation (/mnt/c)
- Performance implications
- **Setup Task:** Install WSL2, understand what's happening at each step

**0.4: Linux CLI Deep Dive - The Shell**

- What is a shell? (bash, zsh, etc.)
- Process management (ps, top, kill, jobs, fg, bg)
- File permissions (rwx, chmod, understanding octal)
- Pipes and redirection (|, >, >>, <)
- Environment variables ($PATH, why they matter)
- Text processing (grep, sed, awk basics)
- **Practice Task:** Write bash scripts to automate setup

**0.5: Git Deep Dive (Part 1) - How Git Actually Works**

- Git as a content-addressable filesystem
- Objects: blobs, trees, commits, tags
- The .git directory (what's inside?)
- SHA-1 hashing (why commits have weird IDs)
- Directed Acyclic Graph (DAG) of commits
- **Toy Project:** Build a minimal version control system (store files with SHA hashes)

**0.6: Python Environment Deep Dive**

- How Python finds modules (sys.path, PYTHONPATH)
- Virtual environments (why they exist)
- Site-packages directory
- The import system
- Poetry vs pip (dependency resolution)
- pyproject.toml deep dive
- **Setup Task:** Initialize project with Poetry

**0.7: VS Code Deep Dive - Editor as IDE**

- Language Server Protocol (how IntelliSense works)
- Debugger (breakpoints, call stack, watch variables)
- Extensions architecture
- Settings hierarchy
- Tasks and launch configurations
- **Setup Task:** Configure perfect Python/TypeScript environment

### Deliverables

- ✅ Development environment working
- ✅ Can write and run Python scripts
- ✅ Can make Git commits
- ✅ Understand what's happening "under the hood"

---

## � SPRINT 1: THE WALKING SKELETON

**Goal:** Prove end-to-end connectivity (Backend ↔ Frontend)

### User Stories

- ✅ As a Dev, I can run a backend server that responds to HTTP requests
- ✅ As a Dev, I can run a frontend that displays data from the backend
- ✅ As a Dev, I understand HTTP at a deep level

### Learning Tasks (JIT Deep Dives)

**1.1: Networking Deep Dive (Part 1) - TCP/IP Stack**

- The OSI model (Physical → Application)
- IP addresses and subnets
- TCP vs UDP (connection-oriented vs connectionless)
- The 3-way handshake (SYN, SYN-ACK, ACK)
- Ports and sockets
- **Toy Project:** Build a TCP echo server and client from scratch (using socket library)

**1.2: HTTP Deep Dive - The Web's Protocol**

- HTTP is just text over TCP
- Request structure (method, path, version, headers, body)
- Response structure (status line, headers, body)
- HTTP methods (GET, POST, PUT, DELETE, etc.) - when to use each
- Status codes (2xx, 3xx, 4xx, 5xx) - what they mean
- Headers (Content-Type, Authorization, etc.)
- **Toy Project:** Build a minimal HTTP server that parses raw requests

**1.3: ASGI Deep Dive - Async Web Servers**

- CGI → WSGI → ASGI evolution
- Why async matters for web servers (I/O-bound)
- Uvicorn internals (event loop, request handling)
- **Setup Task:** Run FastAPI "Hello World", understand what's happening

**1.4: React Deep Dive (Part 1) - Components & JSX**

- What is React? (library, not framework)
- Virtual DOM (why it exists)
- JSX (JavaScript XML) - how it compiles to JavaScript
- Components as functions
- Props (passing data down)
- **Setup Task:** Create React app with Vite, understand the build process

**1.5: JavaScript Deep Dive (Part 1) - The Language**

- Event loop (single-threaded async)
- Closures (how they work, why they matter)
- Promises (pending, fulfilled, rejected)
- Async/await (syntactic sugar over promises)
- `this` keyword (the confusing one)
- **Toy Project:** Build a simple promise from scratch

**1.6: CORS Deep Dive - Cross-Origin Security**

- Same-Origin Policy (why browsers block requests)
- CORS headers (Access-Control-Allow-Origin, etc.)
- Preflight requests (OPTIONS)
- Why CORS exists (security)
- **Practice Task:** Fix CORS errors between frontend and backend

### Refactoring Tasks

- None yet (building from scratch)

### Deliverables

- ✅ Backend serves "Hello World" at /api/hello
- ✅ Frontend fetches and displays the message
- ✅ Deep understanding of HTTP, TCP, async, React

### Demo to Stakeholder

Show: "The app works end-to-end! Frontend talks to backend."

---

## � SPRINT 2: TYPE SAFETY & TOOLING

**Goal:** Professional code quality from day one

### User Stories

- ✅ As a Dev, my code is type-safe (catches errors before runtime)
- ✅ As a Dev, my code is automatically formatted and linted
- ✅ As a Dev, I can't commit broken code

### Learning Tasks (JIT Deep Dives)

**2.1: Type Systems Deep Dive - Static vs Dynamic**

- Static typing (compile-time checks)
- Dynamic typing (runtime checks)
- Type inference
- Gradual typing (Python, TypeScript)
- Structural vs nominal typing
- **Comparison:** Python (dynamic) vs TypeScript (static) vs C++ (static, nominal)

**2.2: Python Types Deep Dive**

- Type hints syntax (int, str, List, Dict, Optional, Union)
- Generics (List[str], Dict[str, int])
- Type aliases
- Protocols (structural typing)
- mypy (static type checker)
- Runtime type checking (Pydantic)
- **Practice Task:** Add type hints to all Sprint 1 code

**2.3: Pydantic Deep Dive - Runtime Validation**

- BaseModel (what it does)
- Validation (automatic type conversion and checking)
- Serialization (model to dict/JSON)
- Field validators
- **Practice Task:** Create Pydantic models for API requests/responses

**2.4: TypeScript Deep Dive (Part 1) - The Basics**

- TypeScript as "JavaScript + types"
- The compilation process (TS → JS)
- Basic types (string, number, boolean, any, unknown, never)
- Interfaces vs types (when to use each)
- Union types (string | number)
- Type guards (typeof, instanceof)
- **Practice Task:** Convert React components to TypeScript

**2.5: Linters & Formatters Deep Dive**

- What is linting? (static analysis)
- What is formatting? (consistent style)
- Why separate tools? (different purposes)
- Ruff (fast Python linter in Rust)
- Black (opinionated Python formatter)
- ESLint (JavaScript/TypeScript linter)
- Prettier (JavaScript/TypeScript formatter)
- **Setup Task:** Configure all tools, integrate with VS Code

**2.6: Git Hooks Deep Dive - Pre-commit**

- Git hooks (what they are)
- Pre-commit framework
- Running checks before commit
- **Setup Task:** Install pre-commit, configure to run linters/formatters

### Refactoring Tasks

- **Refactor Sprint 1:** Add types to all code
- **Refactor Sprint 1:** Add Pydantic models
- **Refactor Sprint 1:** Convert React to TypeScript

### Deliverables

- ✅ All code is type-safe
- ✅ Pre-commit hooks prevent bad commits
- ✅ Professional tooling setup

### Demo to Stakeholder

Show: "The code is now type-safe. Watch how the editor catches errors!"

---

## � SPRINT 3: TEST-DRIVEN DEVELOPMENT

**Goal:** Write tests BEFORE code (TDD mindset)

### User Stories

- ✅ As a Dev, I write failing tests first
- ✅ As a Dev, I write minimal code to pass tests
- ✅ As a Dev, I refactor with confidence (tests prove it still works)

### Learning Tasks (JIT Deep Dives)

**3.1: Testing Philosophy Deep Dive**

- Why test? (confidence, documentation, design)
- Test pyramid (unit → integration → E2E)
- TDD cycle (Red → Green → Refactor)
- When NOT to test (diminishing returns)
- Test coverage (what it means, what it doesn't)

**3.2: pytest Deep Dive (Part 1) - Basics**

- Test discovery (how pytest finds tests)
- Assertions (assert statement)
- Test structure (Arrange-Act-Assert)
- Running tests (pytest command)
- **Practice Task:** Write first unit test

**3.3: pytest Deep Dive (Part 2) - Fixtures**

- What are fixtures? (test setup/teardown)
- Fixture scopes (function, class, module, session)
- Fixture dependencies
- Temporary directories (tmp_path fixture)
- **Practice Task:** Create database fixture

**3.4: TDD Kata - The Bowling Game**

- **JIT CS (OOP) Deep Dive:** Classes, objects, methods (as we build the game)
- Red: Write failing test
- Green: Write minimal code to pass
- Refactor: Improve code while keeping tests green
- **Complete Project:** Build bowling game scorer using pure TDD

**3.5: Mocking Deep Dive**

- What is mocking? (test doubles)
- Mock vs Stub vs Fake vs Spy (differences)
- When to mock (external dependencies)
- When NOT to mock (over-mocking is bad)
- pytest-mock (monkeypatch, mocker)
- **Practice Task:** Mock a database call

### Refactoring Tasks

- **Refactor Sprint 1-2:** Add tests for existing code
- **Identify:** Where tests would have caught bugs

### Deliverables

- ✅ TDD workflow mastered
- ✅ Tests for all existing code
- ✅ Bowling game (or similar kata) completed

### Demo to Stakeholder

Show: "Here's how TDD works. Watch me break the code and the tests catch it!"

---

## � SPRINT 4: DATABASE & REGISTRATION

**Goal:** Users can register (persist data)

### User Stories

- ✅ As a User, I can register with username/email/password
- ✅ As a Dev, user data is stored in a database
- ✅ As a Dev, all database code is tested

### Learning Tasks (JIT Deep Dives)

**4.1: TDD Task - Write Failing Test**

- Write integration test for POST /api/register
- Test should fail (endpoint doesn't exist yet)

**4.2: Relational Databases Deep Dive - Theory**

- Why relational? (ACID properties)
- Tables, rows, columns
- Primary keys, foreign keys
- Relationships (one-to-one, one-to-many, many-to-many)
- Normalization (1NF, 2NF, 3NF) - why it matters
- **Toy Project:** Design a database schema on paper for PDM system

**4.3: SQL Deep Dive (Part 1) - The Language**

- DDL (CREATE, ALTER, DROP)
- DML (INSERT, UPDATE, DELETE, SELECT)
- Constraints (NOT NULL, UNIQUE, CHECK, FK)
- Indexes (what they are, when to use)
- **Practice Task:** Write SQL to create users table

**4.4: Database Internals Deep Dive - How Databases Work**

- Storage: pages/blocks on disk
- B-trees (why databases use them, not binary trees)
- Query execution (parser → planner → executor)
- EXPLAIN ANALYZE (understanding query plans)
- **Toy Project:** Build a minimal B-tree in Python

**4.5: Docker Deep Dive - Containerization**

- What is a container? (vs VM)
- Namespaces and cgroups (Linux kernel features)
- Dockerfile (instructions to build image)
- Images vs containers
- docker-compose (multi-container apps)
- **Setup Task:** Run PostgreSQL in Docker

**4.6: ORM Deep Dive - SQLAlchemy 2.0**

- ORM vs raw SQL (pros and cons)
- Models (mapping classes to tables)
- Sessions (database connections)
- Async sessions (SQLAlchemy + asyncpg)
- **Setup Task:** Define User model

**4.7: Database Migrations Deep Dive - Alembic**

- Why migrations? (version control for database)
- Auto-generate vs manual migrations
- Upgrade vs downgrade
- **Setup Task:** Generate first migration (users table)

**4.8: SQL Injection Deep Dive - Security**

- How SQL injection works
- Why it's dangerous (xkcd: "Little Bobby Tables")
- Parameterized queries (the solution)
- **Practice Task:** Show SQL injection attack, then fix it

### Implementation Tasks

- Implement POST /api/register endpoint
- Store user in database
- Make the test pass (Green!)

### Refactoring Tasks

- Extract validation logic
- Create User service class
- Improve error messages

### Deliverables

- ✅ Registration endpoint working
- ✅ Users stored in PostgreSQL
- ✅ Full test coverage

### Demo to Stakeholder

Show: "Users can now register! Data persists even if we restart the server."

---

## � SPRINT 5: SECURE PASSWORDS

**Goal:** Never store plain text passwords

### User Stories

- ✅ As a Dev, passwords are cryptographically hashed
- ✅ As a Dev, I understand WHY plain text is catastrophic
- ✅ As a Security Auditor, the app follows best practices

### Learning Tasks (JIT Deep Dives)

**5.1: TDD Task - Update Test**

- Test should verify password in DB is NOT plain text
- Test should fail (we're storing plain text now)

**5.2: Cryptography Deep Dive (Part 1) - Hashing**

- Hash functions (one-way, deterministic)
- Avalanche effect (tiny change → completely different hash)
- Collision resistance
- Common algorithms (MD5, SHA-256, SHA-3)
- **Toy Project:** Implement a simple hash function (understand properties)

**5.3: Password Security Deep Dive**

- Why hashing alone isn't enough (rainbow tables)
- Salt (random data added before hashing)
- Pepper (secret data added before hashing)
- Key stretching (bcrypt, argon2) - deliberately slow
- **Toy Project:** Build naive password hasher, break it, then improve it

**5.4: bcrypt Deep Dive - Production Password Hashing**

- How bcrypt works (Blowfish cipher)
- Cost factor (computationally expensive by design)
- passlib library (Python wrapper)
- **Implementation:** Integrate bcrypt into registration

### Implementation Tasks

- Hash passwords before storing
- Update registration endpoint
- Make the test pass

### Refactoring Tasks

- Extract password hashing to utility function
- Add password strength validation

### Deliverables

- ✅ Passwords securely hashed
- ✅ Understanding of cryptography basics

### Demo to Stakeholder

Show: "Passwords are now secure. Even if the database leaks, attackers can't get the passwords."

---

## � SPRINT 6: LOGIN & JWT TOKENS

**Goal:** Users can log in and get a token

### User Stories

- ✅ As a User, I can log in with my credentials
- ✅ As a User, I receive a token after login
- ✅ As a Dev, I understand authentication deeply

### Learning Tasks (JIT Deep Dives)

**6.1: TDD Task - Login Tests**

- Test POST /api/login with valid credentials (should return token)
- Test with invalid credentials (should return 401)
- Test with non-existent user (should return 404)
- All tests should fail (endpoint doesn't exist)

**6.2: Authentication Deep Dive (Part 1) - Naive Approach**

- Stateful authentication (session in memory)
- Why it doesn't scale (server restart, load balancing)
- **Toy Project:** Build stateful auth (random token in dict), observe problems

**6.3: Authentication Deep Dive (Part 2) - JWT**

- Stateless authentication
- JWT structure: header.payload.signature
- Base64 encoding (not encryption!)
- HMAC-SHA256 (signature algorithm)
- Claims (iss, sub, exp, iat)
- **Toy Project:** Build minimal JWT encoder/decoder from scratch

**6.4: Cryptography Deep Dive (Part 2) - Digital Signatures**

- Symmetric vs asymmetric cryptography
- Public/private key pairs
- How signatures prove authenticity
- Why JWT signature prevents tampering

**6.5: JWT Production Deep Dive - python-jose**

- Using production JWT library
- HS256 vs RS256 (symmetric vs asymmetric)
- Token expiration (exp claim)
- Refresh tokens (long-lived tokens)
- **Implementation:** Integrate JWT into login endpoint

**6.6: FastAPI Security Deep Dive - Dependency Injection**

- OAuth2PasswordBearer (FastAPI security scheme)
- Dependencies (get_current_user)
- Protected routes (require authentication)
- **Implementation:** Create auth dependency

### Implementation Tasks

- Implement POST /api/login
- Return JWT on successful login
- Create dependency to verify JWT
- Make all tests pass

### Refactoring Tasks

- Extract JWT logic to auth service
- Create authentication utilities
- Add token expiration handling

### Deliverables

- ✅ Login endpoint working
- ✅ JWT authentication implemented
- ✅ Protected routes require valid token

### Demo to Stakeholder

Show: "Users can now log in! The token lets them access protected features."

---

## � SPRINT 7: FRONTEND AUTH UI

**Goal:** Users can actually register and login from UI

### User Stories

- ✅ As a User, I see a Login form
- ✅ As a User, I see a Register form
- ✅ As a User, I'm redirected to dashboard after login
- ✅ As a User, I stay logged in after page refresh

### Learning Tasks (JIT Deep Dives)

**7.1: React Routing Deep Dive - react-router**

- Client-side routing (SPA)
- BrowserRouter vs HashRouter
- Routes and Route components
- useNavigate hook
- Protected routes
- **Implementation:** Set up routing (/login, /register, /dashboard)

**7.2: React Forms Deep Dive - react-hook-form**

- Controlled vs uncontrolled inputs
- Form validation
- Why react-hook-form? (performance, less re-renders)
- Integration with validation libraries
- **Implementation:** Build login/register forms

**7.3: TypeScript Deep Dive (Part 2) - Advanced Types**

- Generics (React components with generic props)
- Type inference
- Conditional types
- Mapped types
- **Practice Task:** Type all form components properly

**7.4: Validation Deep Dive - Zod**

- Runtime schema validation
- TypeScript type inference from schemas
- Error messages
- **Implementation:** Create Zod schemas for login/register

**7.5: React State Deep Dive - Client vs Server State**

- **CRITICAL CONCEPT:** What lives where?
- Client state: UI state, form inputs, modals
- Server state: User data, posts, files
- Why mixing them is bad
- **Practice Task:** Identify client vs server state in our app

**7.6: State Management Deep Dive - Zustand**

- Why Zustand? (simple, no boilerplate)
- Creating stores
- Using stores in components
- Persisting state (localStorage)
- **Implementation:** Store JWT in Zustand

**7.7: Server State Deep Dive - TanStack Query**

- Why TanStack Query? (caching, synchronization, refetching)
- Queries vs mutations
- Query keys
- Invalidation
- **Implementation:** Use TanStack Query for login mutation

**7.8: HTTP Client Deep Dive - Axios**

- Creating API client
- Interceptors (adding JWT to headers)
- Error handling
- **Implementation:** Configure Axios with interceptors

### Implementation Tasks

- Build Login and Register UI components
- Implement form validation
- Connect forms to backend APIs
- Handle JWT storage and refresh

### Refactoring Tasks

- Extract form components (reusable)
- Create custom hooks (useAuth)
- Improve error messages

### Deliverables

- ✅ Full authentication flow (register → login → dashboard)
- ✅ Persistent login (survives refresh)
- ✅ Professional UI with validation

### Demo to Stakeholder

Show: "The UI is now complete! Users can register, login, and stay logged in."

---

## � SPRINT 8: RBAC & PERMISSIONS

**Goal:** Different users have different permissions

### User Stories

- ✅ As an Admin, I can manage all projects
- ✅ As a User, I can only manage my own projects
- ✅ As a Viewer, I can only read projects

### Learning Tasks (JIT Deep Dives)

**8.1: Authorization Deep Dive - AuthN vs AuthZ**

- Authentication (who are you?)
- Authorization (what can you do?)
- Common mistakes (confusing the two)

**8.2: RBAC Deep Dive - Role-Based Access Control**

- Roles vs permissions
- Role hierarchy
- Database design for RBAC
- **Design Task:** Model roles and permissions for PDM

**8.3: OOP Deep Dive (Part 1) - Inheritance**

- Classes and inheritance
- Base classes and derived classes
- `super()` keyword
- When to use inheritance vs composition
- **Toy Project:** Build vehicle hierarchy (Vehicle → Car, Truck)

**8.4: OOP Deep Dive (Part 2) - Polymorphism**

- Method overriding
- Duck typing (Python)
- Abstract base classes
- **Practice Task:** Create abstract User class, derive Admin, Regular

**8.5: Design Patterns Deep Dive (Part 1) - Strategy Pattern**

- Defining the pattern
- When to use it
- Implementation in Python
- **Application:** Different permission strategies per role

### Implementation Tasks

- Add roles to User model
- Create permission checking logic
- Protect endpoints based on role
- Add role-based UI elements

### Refactoring Tasks

- **Major Refactor:** Extract permission logic to strategy classes
- Use composition over inheritance where appropriate

### Deliverables

- ✅ RBAC system working
- ✅ Different users see different features
- ✅ Understanding of OOP and design patterns

### Demo to Stakeholder

Show: "Different user types now have different permissions!"

---

## � SPRINT 9: PROJECTS & GIT REPOS

**Goal:** Users can create projects (each backed by Git)

### User Stories

- ✅ As a User, I can create a project
- ✅ As a User, I can see my projects
- ✅ As a Dev, each project has a Git repository

### Learning Tasks (JIT Deep Dives)

**9.1: TDD Task - Project Tests**

- Test POST /api/projects (create)
- Test GET /api/projects (list)
- Test GET /api/projects/{id} (get one)

**9.2: Git Deep Dive (Part 2) - Git Operations**

- git init (what actually happens?)
- git add (staging area)
- git commit (creating commit objects)
- .git directory structure
- **Practice Task:** Create Git repo programmatically

**9.3: GitPython Deep Dive - Python Git Library**

- Repo class
- Creating repos
- Making commits
- Reading commit history
- **Implementation:** Initialize Git repo per project

**9.4: Database Relationships Deep Dive**

- Foreign keys (one-to-many)
- SQLAlchemy relationships
- Lazy loading vs eager loading
- Cascade operations
- **Implementation:** Link projects to users

**9.5: Design Patterns Deep Dive (Part 2) - Repository Pattern**

- Separating data access from business logic
- Repository as abstraction over database
- Benefits (testability, flexibility)
- **Refactor:** Extract database queries to repository classes

### Implementation Tasks

- Create Project model
- Implement CRUD endpoints
- Initialize Git repo on project creation
- Build project list UI

### Refactoring Tasks

- **Major Refactor:** Introduce repository pattern
- Extract business logic to service layer
- Improve separation of concerns

### Deliverables

- ✅ Project management working
- ✅ Git repos created automatically
- ✅ Clean architecture (controller → service → repository)

### Demo to Stakeholder

Show: "Users can now create projects! Each one is version-controlled with Git."

---

## � SPRINT 10: OOP DEEP DIVE - ADVANCED CONCEPTS

**Goal:** Master Python OOP before complexity increases

### User Stories

- (This sprint is focused on deep learning, not features)

### Learning Tasks (JIT Deep Dives)

**10.1: Classes Deep Dive - The Fundamentals**

- What is a class? (blueprint for objects)
- Instances (objects)
- `__init__` (constructor)
- `self` (what it really is)
- Instance variables vs class variables
- **Toy Project:** Build a BankAccount class from scratch

**10.2: Methods Deep Dive - Types of Methods**

- Instance methods (regular methods)
- Class methods (@classmethod)
- Static methods (@staticmethod)
- When to use each
- **Practice Task:** Add factory methods to User class

**10.3: Magic Methods Deep Dive - Dunder Methods**

- `__str__` and `__repr__`
- `__eq__`, `__lt__`, `__gt__` (comparisons)
- `__len__`, `__getitem__` (making classes behave like containers)
- `__enter__`, `__exit__` (context managers)
- **Practice Task:** Make Project class comparable and printable

**10.4: Inheritance Deep Dive - The Mechanics**

- Base classes and derived classes
- `super()` in depth
- Multiple inheritance
- Method Resolution Order (MRO)
- Diamond problem
- **Toy Project:** Build class hierarchy with multiple inheritance, understand MRO

**10.5: Composition vs Inheritance Deep Dive**

- "Favor composition over inheritance" - why?
- When inheritance is appropriate
- When composition is better
- **Refactor:** Review our code, identify places to use composition

**10.6: Abstract Base Classes Deep Dive**

- abc module
- @abstractmethod
- Why abstract classes? (enforcing contracts)
- **Practice Task:** Create abstract PermissionChecker class

**10.7: Properties and Descriptors Deep Dive**

- @property decorator
- Getters, setters, deleters
- Why use properties? (encapsulation, validation)
- Descriptors (advanced)
- **Practice Task:** Add validated properties to models

**10.8: Dataclasses Deep Dive**

- @dataclass decorator
- Automatic `__init__`, `__repr__`, etc.
- When to use dataclasses vs regular classes
- **Practice Task:** Convert simple classes to dataclasses

### Refactoring Tasks

- **Major Refactor:** Apply OOP concepts throughout codebase
- Add properties, improve class design
- Use abstract base classes for interfaces

### Deliverables

- ✅ Deep understanding of Python OOP
- ✅ Codebase uses OOP idioms correctly
- ✅ Better separation of concerns

### Demo to Stakeholder

(Internal sprint - no demo, but show improved code quality)

---

## � SPRINT 11: ASYNC DEEP DIVE - CONCURRENCY MASTERY

**Goal:** Master async/await before file uploads

### User Stories

- (Learning-focused sprint)

### Learning Tasks (JIT Deep Dives)

**11.1: Concurrency Deep Dive (Part 1) - Concepts**

- Concurrency vs parallelism
- Blocking vs non-blocking
- I/O-bound vs CPU-bound
- **Examples:** Show blocking code killing performance

**11.2: Async Deep Dive (Part 1) - Event Loop**

- The event loop (asyncio)
- Coroutines (async def)
- await (yielding control)
- **Toy Project:** Build minimal event loop from scratch (understand how it works)

**11.3: Async Deep Dive (Part 2) - asyncio Patterns**

- Creating tasks (asyncio.create_task)
- Gathering results (asyncio.gather)
- Timeouts (asyncio.wait_for)
- Semaphores (limiting concurrency)
- **Practice Task:** Concurrent API calls

**11.4: Threading Deep Dive - When to Use Threads**

- GIL (Global Interpreter Lock)
- Why Python threading is "limited"
- When threading helps (I/O-bound with blocking libraries)
- **Practice Task:** Compare threading vs async performance

**11.5: Async Database Deep Dive - SQLAlchemy Async**

- AsyncSession
- Async queries
- Connection pooling in async context
- **Refactor:** Convert all database operations to async

### Refactoring Tasks

- **Major Refactor:** Make entire backend fully async
- Update all endpoints to async def
- Use async database sessions everywhere

### Deliverables

- ✅ Full async backend
- ✅ Understanding of concurrency models
- ✅ Performance improvement (measure it!)

### Demo to Stakeholder

Show: "The backend is now fully async. Watch how it handles 100 concurrent requests!"

---

## � SPRINT 12: FILE UPLOAD - THE CORE FEATURE

**Goal:** Users can upload CAM files

### User Stories

- ✅ As a User, I can upload a G-code file to a project
- ✅ As a Dev, file uploads are secure and validated
- ✅ As a Dev, each upload creates a Git commit

### Learning Tasks (JIT Deep Dives)

**12.1: TDD Task - File Upload Tests**

- Test POST /api/projects/{id}/files with file
- Test validation (file type, size)
- Test Git commit is created
- Test database record is created

**12.2: File I/O Deep Dive - How Files Work**

- File descriptors (OS concept)
- Opening, reading, writing, closing
- Buffering
- Memory-mapped files
- **Practice Task:** Read a large file efficiently

**12.3: Async File I/O Deep Dive - aiofiles**

- Why async file I/O?
- aiofiles library
- Streaming large files
- **Practice Task:** Async file reading

**12.4: File Upload Deep Dive - Multipart Forms**

- multipart/form-data (how it works)
- Boundaries (separating parts)
- FastAPI UploadFile
- **Practice Task:** Parse multipart form manually

**12.5: File Validation Deep Dive - Security**

- File type validation (magic bytes, not extensions)
- Size limits
- Path traversal attacks (../../../etc/passwd)
- **Practice Task:** Show path traversal attack, then prevent it

**12.6: G-code Deep Dive - CAM File Format**

- What is G-code?
- Common commands (G01, M03, etc.)
- Parsing G-code
- **Practice Task:** Write basic G-code parser

**12.7: Transactions Deep Dive - Atomicity**

- What if Git commit succeeds but DB write fails?
- What if DB write succeeds but Git commit fails?
- Two-phase commit
- Rollback strategies
- **Implementation:** Ensure atomicity

### Implementation Tasks

- Implement file upload endpoint
- Validate files
- Store files in Git
- Store metadata in database
- Build upload UI (react-dropzone)

### Refactoring Tasks

- Extract file validation logic
- Create file service
- Add progress indicators
- Error handling

### Deliverables

- ✅ File upload working
- ✅ Files in Git (version controlled)
- ✅ Metadata in database
- ✅ Secure validation

### Demo to Stakeholder

Show: "Users can now upload G-code files! They're automatically version controlled."

---

## � SPRINT 13: FILE HISTORY & CHECKOUT

**Goal:** Users can view file history and download versions

### User Stories

- ✅ As a User, I can see all files in a project
- ✅ As a User, I can see the commit history of a file
- ✅ As a User, I can download any version of a file

### Learning Tasks (JIT Deep Dives)

**13.1: Git Deep Dive (Part 3) - Reading History**

- git log (understanding the output)
- git show (viewing commits)
- git checkout (detached HEAD state)
- **Practice Task:** Parse Git log programmatically

**13.2: GitPython Deep Dive (Part 2) - Advanced Operations**

- Iterating commits (repo.iter_commits)
- Reading blobs (file contents at specific commit)
- Commit objects (author, date, message)
- **Implementation:** Build history API

**13.3: Data Structures Deep Dive (Part 1) - Trees**

- Tree data structure
- Binary trees vs general trees
- Tree traversal (pre-order, in-order, post-order)
- Git's tree objects
- **Toy Project:** Implement binary tree with traversals

**13.4: Data Structures Deep Dive (Part 2) - Graphs**

- Graph data structure
- Directed vs undirected
- Directed Acyclic Graph (DAG)
- Git's commit graph
- **Toy Project:** Implement graph with DFS/BFS

**13.5: Streaming Deep Dive - Sending Files**

- StreamingResponse (FastAPI)
- Chunked transfer encoding
- Memory efficiency
- **Implementation:** Stream file downloads

### Implementation Tasks

- Implement GET /api/files (list)
- Implement GET /api/files/{id}/history
- Implement GET /api/files/{id}/download?version=...
- Build file list and history UI

### Refactoring Tasks

- Extract Git operations to service
- Cache file history (it rarely changes)

### Deliverables

- ✅ File browsing
- ✅ History viewing
- ✅ Version download
- ✅ Understanding of Git internals and data structures

### Demo to Stakeholder

Show: "Users can now browse files and see their full history! They can download any version."

---

## � SPRINT 14: SEARCH & PERFORMANCE

**Goal:** Fast search, even with 10,000+ files

### User Stories

- ✅ As a User, I can search for files by name
- ✅ As a User, search is fast (< 100ms)
- ✅ As a Dev, I understand performance optimization

### Learning Tasks (JIT Deep Dives)

**14.1: Algorithm Analysis Deep Dive - Big O**

- Time complexity (O(1), O(n), O(log n), O(n²))
- Space complexity
- Best, average, worst case
- **Practice Task:** Analyze complexity of our code

**14.2: Database Indexing Deep Dive - B-Trees Revisited**

- How indexes work
- B-tree vs B+ tree
- Index on single column
- Composite indexes
- When indexes help (and when they don't)
- **Practice Task:** Add indexes, measure performance

**14.3: Full-Text Search Deep Dive - PostgreSQL**

- tsvector and tsquery
- Ranking results
- GIN indexes
- **Implementation:** Add full-text search

**14.4: Caching Deep Dive (Part 1) - Strategies**

- Why cache? (speed vs space tradeoff)
- Cache invalidation (hardest problem in CS)
- Cache-aside pattern
- Write-through vs write-back
- **Design Task:** Design caching strategy for PDM

**14.5: Redis Deep Dive - In-Memory Database**

- What is Redis?
- Data structures (strings, hashes, lists, sets, sorted sets)
- Persistence options
- **Setup Task:** Add Redis to docker-compose

**14.6: Caching Deep Dive (Part 2) - Implementation**

- Cache file metadata
- Cache user data
- Cache search results
- TTL (time to live)
- **Implementation:** Add Redis caching

**14.7: Profiling Deep Dive - Finding Bottlenecks**

- cProfile (Python profiler)
- Flame graphs
- Memory profiling (tracemalloc)
- **Practice Task:** Profile the application, find slow spots

### Implementation Tasks

- Add search endpoint
- Implement indexing
- Add caching layer
- Optimize slow queries

### Refactoring Tasks

- **Performance Refactor:** Optimize hot paths
- Add database indexes
- Implement caching

### Deliverables

- ✅ Fast search (<100ms)
- ✅ Caching layer
- ✅ Understanding of performance optimization

### Demo to Stakeholder

Show: "Search is now instant, even with thousands of files!"

---

## � SPRINT 15: DIFF & COMPARISON

**Goal:** Users can compare file versions

### User Stories

- ✅ As a User, I can select two versions and see differences
- ✅ As a User, differences are highlighted clearly

### Learning Tasks (JIT Deep Dives)

**15.1: String Algorithms Deep Dive - Edit Distance**

- Levenshtein distance
- Dynamic programming
- **Toy Project:** Implement edit distance algorithm

**15.2: Diff Algorithm Deep Dive - Myers & LCS**

- Longest Common Subsequence (LCS)
- Myers diff algorithm
- Patience diff
- **Toy Project:** Implement simple diff algorithm

**15.3: Git Deep Dive (Part 4) - Diff Operations**

- git diff (what it does)
- Unified diff format
- Side-by-side diff
- **Practice Task:** Use GitPython to generate diffs

### Implementation Tasks

- Implement diff endpoint
- Build diff viewer UI (react-diff-viewer)

### Deliverables

- ✅ Diff viewing
- ✅ Understanding of diff algorithms

### Demo to Stakeholder

Show: "Users can now compare any two versions of a file!"

---

## � SPRINT 16: C++ PERFORMANCE - G-CODE PARSER

**Goal:** Parse G-code in C++ for performance

### User Stories

- ✅ As a Dev, large G-code files are parsed quickly
- ✅ As a Dev, I understand when to use C++

### Learning Tasks (JIT Deep Dives)

**16.1: Performance Deep Dive - When to Optimize**

- Premature optimization (root of all evil)
- Profiling first (measure, don't guess)
- 80/20 rule (optimize hot paths)
- **Practice Task:** Profile G-code parsing

**16.2: C++ Deep Dive (Part 1) - The Language**

- Compiled vs interpreted
- C++ basics (syntax, variables, functions)
- Memory management (stack vs heap)
- Pointers and references
- **Toy Project:** Hello World in C++

**16.3: C++ Deep Dive (Part 2) - OOP in C++**

- Classes in C++
- Constructors and destructors
- RAII (Resource Acquisition Is Initialization)
- **Practice Task:** Build simple C++ class

**16.4: C++ Deep Dive (Part 3) - STL**

- Standard Template Library
- vector, string, map
- Algorithms
- **Practice Task:** Use STL containers

**16.5: Python/C++ Interop Deep Dive - pybind11**

- Binding C++ to Python
- Passing data between languages
- Performance considerations
- **Implementation:** Build C++ G-code parser, bind to Python

### Implementation Tasks

- Write G-code parser in C++
- Bind with pybind11
- Integrate into file upload
- Benchmark performance

### Deliverables

- ✅ Fast C++ parser
- ✅ Python binding
- ✅ 10x performance improvement (measure it!)

### Demo to Stakeholder

Show: "G-code parsing is now 10x faster using C++!"

---

## � SPRINT 17: FILE LOCKING - CONCURRENCY IN ACTION

**Goal:** Prevent concurrent edits

### User Stories

- ✅ As a User, I can "check out" a file (lock it)
- ✅ As a User, I can "check in" a file (unlock it)
- ✅ As a User, I see who has a file locked

### Learning Tasks (JIT Deep Dives)

**17.1: Concurrency Deep Dive (Part 2) - Race Conditions**

- What is a race condition?
- Critical sections
- **Demonstration:** Create a race condition, observe the bug

**17.2: Locks Deep Dive - Synchronization**

- Mutexes (mutual exclusion)
- Database-level locks (SELECT FOR UPDATE)
- Optimistic vs pessimistic locking
- Deadlocks (and how to avoid them)
- **Practice Task:** Implement locking correctly

**17.3: State Machine Deep Dive - Modeling State**

- What is a state machine?
- States and transitions
- File states: Available ↔ Locked
- Using enums for states
- **Design Task:** Model file locking as state machine

### Implementation Tasks

- Add lock/unlock endpoints
- Implement database locking
- Build UI for locking

### Deliverables

- ✅ File locking working
- ✅ No race conditions
- ✅ Understanding of concurrency

### Demo to Stakeholder

Show: "Files can now be locked for editing! No more conflicts."

---

## � SPRINT 18: ⚠️ STAKEHOLDER FEEDBACK - REAL-TIME UPDATES

**Goal:** Respond to stakeholder request for real-time features

### User Stories (New Requirements!)

- ✅ As a User, if someone locks a file I'm viewing, I see it immediately
- ✅ As a User, I don't need to refresh to see updates

### Learning Tasks (JIT Deep Dives)

**18.1: WebSockets Deep Dive - Full-Duplex Communication**

- HTTP limitations (request/response)
- WebSocket protocol
- Persistent connections
- **Toy Project:** Build simple WebSocket server

**18.2: FastAPI WebSockets Deep Dive**

- WebSocket endpoints in FastAPI
- Connection management
- Broadcasting messages
- **Implementation:** Add WebSocket support

**18.3: Pub/Sub Deep Dive - Redis Publish/Subscribe**

- Pub/Sub pattern
- Redis channels
- Broadcasting to multiple servers
- **Implementation:** Use Redis pub/sub for broadcasting

**18.4: React WebSockets Deep Dive**

- useWebSocket hook
- Reconnection logic
- **Implementation:** Connect frontend to WebSocket

### Implementation Tasks

- Add WebSocket endpoint
- Implement Redis pub/sub
- Broadcast lock events
- Update frontend in real-time

### Deliverables

- ✅ Real-time updates working
- ✅ No page refresh needed

### Demo to Stakeholder

Show: "Real-time updates! Watch this second browser update automatically."

---

## � SPRINT 19: COMPREHENSIVE TESTING

**Goal:** 80%+ test coverage, all critical paths tested

### User Stories

- ✅ As a Dev, I'm confident the app works
- ✅ As a Dev, regressions are caught automatically

### Learning Tasks (JIT Deep Dives)

**19.1: Testing Deep Dive - Integration Tests**

- Testing API endpoints
- TestClient (FastAPI)
- Database fixtures
- **Practice Task:** Write integration tests for all endpoints

**19.2: Testing Deep Dive - Frontend Testing**

- React Testing Library
- Testing user interactions
- Mocking API calls (MSW)
- **Practice Task:** Test all React components

**19.3: Testing Deep Dive - E2E Testing**

- Playwright (browser automation)
- Testing full user flows
- **Practice Task:** Write E2E tests for registration → upload flow

**19.4: Testing Deep Dive - Coverage Analysis**

- What coverage means
- Branch coverage
- What coverage doesn't mean
- **Practice Task:** Achieve 80% coverage

### Implementation Tasks

- Write missing tests
- Fix flaky tests
- Add E2E tests

### Deliverables

- ✅ 80%+ test coverage
- ✅ CI runs all tests
- ✅ Confidence in code quality

### Demo to Stakeholder

Show: "We now have comprehensive tests. Here's our coverage report!"

---

## � SPRINT 20: PRODUCTION DEPLOYMENT

**Goal:** Ship to production

### User Stories

- ✅ As a Dev, the app runs in production
- ✅ As a Dev, deployments are automated
- ✅ As a Dev, I can monitor the app

### Learning Tasks (JIT Deep Dives)

**20.1: Docker Deep Dive (Part 2) - Production Images**

- Multi-stage builds
- Minimizing image size
- Security scanning
- **Practice Task:** Optimize Dockerfiles

**20.2: Docker Compose Deep Dive - Production Setup**

- Separating dev and prod configs
- Secrets management
- Restart policies
- **Implementation:** Production docker-compose

**20.3: Nginx Deep Dive - Reverse Proxy**

- What is a reverse proxy?
- Load balancing
- SSL termination
- **Setup Task:** Configure Nginx

**20.4: SSL/TLS Deep Dive - HTTPS**

- How HTTPS works
- Certificates (Let's Encrypt)
- Certificate renewal
- **Setup Task:** Configure SSL

**20.5: CI/CD Deep Dive - GitLab CI**

- Pipeline stages (build → test → deploy)
- Runners
- Environments
- **Implementation:** Full CI/CD pipeline

**20.6: Logging Deep Dive - Structured Logs**

- Why structured logging?
- structlog (Python)
- Log levels
- **Implementation:** Add logging

**20.7: Monitoring Deep Dive - Observability**

- Metrics (Prometheus)
- Visualization (Grafana)
- Alerting
- **Setup Task:** Basic monitoring

**20.8: Error Tracking Deep Dive - Sentry**

- Error aggregation
- Source maps
- Release tracking
- **Setup Task:** Integrate Sentry

### Implementation Tasks

- Build production Docker images
- Set up CI/CD
- Configure monitoring
- Deploy to production

### Deliverables

- ✅ Production deployment
- ✅ Automated CI/CD
- ✅ Monitoring and logging

### Demo to Stakeholder

Show: "The app is now live in production! Here's the monitoring dashboard."

---

## � SPRINT 21+: FUTURE FEATURES (EXTENSIBLE)

**This is where YOU add sprints based on:**

- Stakeholder feedback
- New requirements
- Performance issues
- New technologies to learn

**Potential Future Sprints:**

### Sprint 21: Bill of Materials (BOM)

- Tree structures in database
- Recursive queries
- Graph algorithms

### Sprint 22: Change Management

- Approval workflows
- State machines
- Notification system

### Sprint 23: DNC Machine Communication

- Serial communication (pyserial)
- Protocols (Modbus, OPC UA)
- Hardware interfacing

### Sprint 24: ERP Integration

- Webhooks
- Message queues (Celery, RabbitMQ)
- API design for integration

### Sprint 25: Advanced Git Features

- Branches and merging
- Conflict resolution
- Git strategies

### Sprint 26: Microservices Refactor

- Breaking monolith
- Service communication
- Distributed systems

### Sprint 27: Advanced Frontend

- Code splitting
- Lazy loading
- Performance optimization

### Sprint 28: Security Hardening

- OWASP Top 10 deep dive
- Penetration testing
- Security audit

### Sprint 29: Scalability

- Horizontal scaling
- Database sharding
- CDN integration

### Sprint 30: Advanced Algorithms

- More data structures
- Algorithm optimization
- Competitive programming

---

## LEARNING TOPICS INDEX

**Complete list of all deep dives covered:**

### Computer Science Fundamentals

- Computer architecture (von Neumann, CPU, memory hierarchy)
- Binary, hexadecimal, bits, bytes
- Operating systems (kernel, processes, virtual memory)
- Algorithms (sorting, searching, graphs, trees)
- Data structures (arrays, linked lists, trees, graphs, hash tables)
- Complexity analysis (Big O)
- Concurrency (threads, async, locks)

### Systems Programming

- File systems (inodes, permissions)
- System calls
- Networking (TCP/IP, HTTP, WebSockets)
- Databases (SQL, indexing, transactions)
- Caching strategies
- Performance profiling

### Python Language

- Type hints and mypy
- OOP (classes, inheritance, MRO, magic methods)
- Decorators
- Generators
- Context managers
- Async/await
- C++ integration (pybind11)

### TypeScript/JavaScript

- JavaScript fundamentals (closures, promises, async/await)
- TypeScript type system
- React (hooks, state management, performance)

### Software Engineering

- SOLID principles
- Design patterns (Strategy, Repository, Factory, etc.)
- TDD and testing strategies
- Clean code principles
- Code review
- Documentation

### Security

- Cryptography (hashing, signatures)
- Password security
- JWT authentication
- SQL injection
- XSS, CSRF

### DevOps

- Docker (containers, images, compose)
- CI/CD (GitLab CI)
- Monitoring (Prometheus, Grafana)
- Logging (structured logs)
- Deployment strategies

### Databases

- SQL (DDL, DML)
- Database internals (B-trees, query execution)
- PostgreSQL specifics (JSONB, full-text search)
- ORMs (SQLAlchemy)
- Migrations (Alembic)

### Web Development

- HTTP protocol
- REST API design
- WebSockets
- CORS
- Forms and validation

### Version Control

- Git internals (blobs, trees, commits, DAG)
- GitPython
- Branching strategies

---

## HOW TO EXTEND THIS CURRICULUM

**When stakeholder says: "We need feature X"**

1. **Create new sprint:**

   - Sprint N: Feature X
   - User stories
   - JIT deep dives (what do you need to learn?)
   - Implementation tasks
   - Refactoring tasks

2. **Identify learning gaps:**

   - What CS concepts are needed?
   - What technologies are needed?
   - What patterns should be applied?

3. **Insert deep dives:**

   - Add "JIT Deep Dive" sections
   - Build toy projects to understand
   - Then implement in the real app

4. **Demo and iterate:**
   - Show stakeholder
   - Get feedback
   - Add more sprints as needed

**Example: If stakeholder says "We need mobile app"**

Sprint N: Mobile App

- JIT Deep Dive: React Native
- JIT Deep Dive: Mobile APIs
- JIT Deep Dive: Responsive design
- Implementation: Build mobile UI
- Integration: Connect to existing backend

---

## FINAL NOTES

**This curriculum is:**

- ✅ Agile (adapt to feedback)
- ✅ JIT learning (learn when needed)
- ✅ Comprehensive (20+ years of knowledge)
- ✅ Hands-on (build real software)
- ✅ Deep (understand "the metal")
- ✅ Extensible (add sprints easily)
- ✅ Professional (industry patterns)

**You will learn:**

- How computers work at the lowest level
- How operating systems work
- How networks work
- How databases work
- How to write professional software
- How to think like a senior engineer

**Estimated time:**

- 20 sprints × 1-2 weeks = 20-40 weeks
- At 20 hours/week = 400-800 hours total
- This is realistic for learning 20 years of knowledge

**Remember:**

- Learn deeply, not fast
- Build working software every sprint
- Get feedback and adapt
- Refactor constantly
- Test everything
- Understand the "why"

**Now generate tutorial prompts sprint by sprint!**
