You're absolutely right - JavaScript must come before React! Let me fix the entire ordering and give you all prompts with dependencies embedded.

---

# COMPLETE CURRICULUM - CORRECTED ORDER WITH DEPENDENCIES

## BLANK TEMPLATE (Use this to create your own prompts)

```
Teach me [TOPIC] using [LANGUAGE(S)].

PROJECT CONTEXT:
- Step: DD-XXX of 145
- Sprint: [Sprint number and name]
- Completed steps: [List relevant completed steps]
- Understands: [Key concepts from completed steps]
- Current project state: [Folder structure, files that exist, capabilities]
- Goal: [What you're trying to achieve with this learning]

DEPENDENCIES COMPLETED:
- [DD-XXX]: [Topic name] - [What was learned]
- [DD-XXX]: [Topic name] - [What was learned]

WHAT TO BUILD:
After learning [concept], create:
- [Specific deliverables]
- [Files/folders to create]
- [Features to implement]

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 0: THE LAUNCHPAD (Environment Setup)

### DD-001: Computer Architecture Fundamentals

```
Teach me Computer Architecture Fundamentals - The von Neumann Architecture, Binary Representation, Memory Hierarchy, and the Instruction Cycle using Python.

PROJECT CONTEXT:
- Step: DD-001 of 145 (FIRST STEP)
- Sprint: Sprint 0 - The Launchpad
- Completed steps: None (starting from scratch)
- Understands: Basic programming (variables, functions, if/else, loops)
- Current project state: Empty agile-pdm-project/ folder
- Goal: Learn foundational computer science concepts

DEPENDENCIES COMPLETED:
- None (foundational topic)

WHAT TO BUILD:
After learning fundamentals, create:
- learning_experiments/computer-architecture/ folder
- Binary conversion tools
- Memory simulator
- Simple 4-bit ALU (Arithmetic Logic Unit)
- Understanding of how computers work at hardware level

NOTE: This is heavy/theoretical. If burnt out, skip and come back later after doing practical topics.

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-002: Operating Systems Fundamentals

```
Teach me Operating System Fundamentals - Kernel vs User Space, System Calls, Processes vs Threads, and Virtual Memory using Python.

PROJECT CONTEXT:
- Step: DD-002 of 145
- Sprint: Sprint 0 - The Launchpad
- Completed steps: DD-001
- Understands: Computer architecture, binary, memory hierarchy, instruction cycle
- Current project state: learning_experiments/computer-architecture/ exists
- Goal: Understand the OS layer between hardware and applications

DEPENDENCIES COMPLETED:
- DD-001: Computer Architecture - von Neumann, binary, memory, CPU operations

WHAT TO BUILD:
After learning OS concepts, create:
- learning_experiments/operating-systems/ folder
- Program making raw system calls
- Process vs thread demonstrations
- Simple process monitor

NOTE: Also heavy/theoretical. Can skip if burnt out.

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-003: WSL2 and Virtualization

```
Teach me Virtualization - Hypervisors, How WSL2 Works, Linux Kernel in Windows using Python (where applicable) and bash.

PROJECT CONTEXT:
- Step: DD-003 of 145
- Sprint: Sprint 0 - The Launchpad
- Completed steps: DD-001, DD-002
- Understands: Hardware architecture, OS concepts, processes, memory management
- Current project state: learning_experiments/ with computer-architecture/ and operating-systems/
- Goal: Set up development environment using WSL2

DEPENDENCIES COMPLETED:
- DD-001: Computer Architecture - hardware fundamentals
- DD-002: Operating Systems - kernel, processes, memory

WHAT TO BUILD:
After learning virtualization:
- Install WSL2 with Ubuntu
- Understand file system translation (/mnt/c)
- learning_experiments/virtualization/ folder
- Test performance differences between Windows and WSL2
- Document setup process

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-004: Linux Command Line Interface

```
Teach me Linux CLI - The Shell, Process Management, File Permissions, Pipes, Redirection, and Text Processing using bash.

PROJECT CONTEXT:
- Step: DD-004 of 145
- Sprint: Sprint 0 - The Launchpad
- Completed steps: DD-001, DD-002, DD-003
- Understands: OS concepts, processes, WSL2 environment
- Current project state: WSL2 Ubuntu installed and working
- Goal: Master command line for development work

DEPENDENCIES COMPLETED:
- DD-002: Operating Systems - processes, file systems
- DD-003: WSL2 - Linux environment setup

WHAT TO BUILD:
After learning CLI:
- learning_experiments/linux-cli/ folder
- Bash scripts for process management
- Scripts demonstrating pipes and text processing
- Automation script for project setup
- Practical command-line skills

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-005: Git Internals

```
Teach me Git Internals - Content-Addressable Storage, Git Objects (blobs, trees, commits), the DAG, and How Git Works using Python.

PROJECT CONTEXT:
- Step: DD-005 of 145
- Sprint: Sprint 0 - The Launchpad
- Completed steps: DD-001, DD-002, DD-003, DD-004
- Understands: File systems, hashing concepts, Linux CLI
- Current project state: WSL2 with CLI mastery, learning_experiments/ folder structure
- Goal: Understand version control deeply

DEPENDENCIES COMPLETED:
- DD-001: Computer Architecture - hashing, addressing
- DD-002: Operating Systems - file systems, inodes
- DD-004: Linux CLI - file operations, shell commands

WHAT TO BUILD:
After learning Git:
- learning_experiments/git-internals/ folder
- Explore .git directory structure
- Build minimal version control system (init, add, commit, log)
- Initialize Git for agile-pdm-project
- Create .gitignore, make first commit

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-006: Python Environment and Package Management

```
Teach me Python Environment Management - Module Discovery (sys.path), Virtual Environments, Import System, Poetry vs pip using Python.

PROJECT CONTEXT:
- Step: DD-006 of 145
- Sprint: Sprint 0 - The Launchpad
- Completed steps: DD-001 through DD-005
- Understands: File systems, paths, shell environment
- Current project state: Project in Git with proper structure
- Goal: Set up proper Python development environment

DEPENDENCIES COMPLETED:
- DD-002: Operating Systems - file systems, environment variables
- DD-004: Linux CLI - PATH, shell configuration
- DD-005: Git - version control basics

WHAT TO BUILD:
After learning Python environments:
- learning_experiments/python-env/ folder
- Experiments with module discovery and imports
- Initialize Poetry for agile-pdm-project
- Create project structure: src/pdm_app/
- Configure pyproject.toml

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-007: VS Code as an IDE

```
Teach me VS Code Configuration - Language Server Protocol, Debugging, Extensions, Settings Hierarchy, and Tasks using Python as example.

PROJECT CONTEXT:
- Step: DD-007 of 145 (FINAL STEP OF SPRINT 0)
- Sprint: Sprint 0 - The Launchpad
- Completed steps: DD-001 through DD-006
- Understands: Development environment, Python modules, Git
- Current project state: agile-pdm-project/src/pdm_app/ with Poetry configured
- Goal: Configure professional IDE for maximum productivity

DEPENDENCIES COMPLETED:
- DD-004: Linux CLI - file operations
- DD-005: Git - version control
- DD-006: Python Environment - virtual environments, Poetry

WHAT TO BUILD:
After learning VS Code:
- learning_experiments/vscode-config/ folder
- .vscode/settings.json for the project
- .vscode/launch.json for debugging
- .vscode/tasks.json for common commands
- Install essential extensions (Python, Pylance, Black, Ruff)

NEXT SPRINT: Sprint 1 - The Walking Skeleton (first backend + frontend connection)

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 1: THE WALKING SKELETON (Backend ↔ Frontend)

### DD-008: TCP/IP Networking Stack

```
Teach me Networking Fundamentals - TCP/IP Stack, OSI Model, IP Addresses, Ports, and Sockets using Python.

PROJECT CONTEXT:
- Step: DD-008 of 145 (FIRST STEP OF SPRINT 1)
- Sprint: Sprint 1 - The Walking Skeleton
- Completed steps: DD-001 through DD-007 (Sprint 0 complete)
- Understands: Binary, addressing, OS concepts, development environment ready
- Current project state: Poetry project with src/pdm_app/, VS Code configured
- Goal: Understand how computers communicate over networks

DEPENDENCIES COMPLETED:
- DD-001: Computer Architecture - binary, addressing concepts
- DD-002: Operating Systems - processes, system calls
- DD-004: Linux CLI - network commands

WHAT TO BUILD:
After learning networking:
- learning_experiments/networking/ folder
- Build TCP echo server and client from scratch
- Understand 3-way handshake
- See network communication in action

NOTE: Heavy theory. Can learn HTTP at surface level (DD-009) and skip this if needed.

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-009: HTTP Protocol

```
Teach me HTTP Protocol - Request/Response Structure, Methods, Status Codes, Headers using Python.

PROJECT CONTEXT:
- Step: DD-009 of 145
- Sprint: Sprint 1 - The Walking Skeleton
- Completed steps: DD-001 through DD-008
- Understands: TCP/IP basics, how networks communicate
- Current project state: Poetry project ready, networking knowledge acquired
- Goal: Understand the web's protocol to build APIs

DEPENDENCIES COMPLETED:
- DD-008: TCP/IP Networking - sockets, connections (can learn HTTP at high level without deep TCP knowledge)

WHAT TO BUILD:
After learning HTTP:
- learning_experiments/http/ folder
- Build minimal HTTP server that parses raw requests
- Understand request/response cycle
- Ready to use FastAPI

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-010: ASGI and Async Web Servers

```
Teach me ASGI - Async Web Servers, Why Async Matters for I/O, Uvicorn Internals using Python.

PROJECT CONTEXT:
- Step: DD-010 of 145
- Sprint: Sprint 1 - The Walking Skeleton
- Completed steps: DD-001 through DD-009
- Understands: HTTP protocol, request/response cycle
- Current project state: Ready to build web applications
- Goal: Understand async web servers before using FastAPI

DEPENDENCIES COMPLETED:
- DD-009: HTTP Protocol - web requests/responses

WHAT TO BUILD:
After learning ASGI:
- learning_experiments/asgi/ folder
- Run FastAPI "Hello World"
- Understand event loop basics
- See async vs sync performance differences

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-011: JavaScript Fundamentals

```
Teach me JavaScript Fundamentals - Event Loop, Closures, Promises, Async/Await, 'this' keyword using JavaScript.

PROJECT CONTEXT:
- Step: DD-011 of 145
- Sprint: Sprint 1 - The Walking Skeleton
- Completed steps: DD-001 through DD-010
- Understands: Programming fundamentals, async concepts from Python
- Current project state: Backend knowledge ready, now learning frontend
- Goal: Learn JavaScript to build React frontend

DEPENDENCIES COMPLETED:
- None for frontend (fresh language, but async understanding from DD-010 helps)

WHAT TO BUILD:
After learning JavaScript:
- learning_experiments/javascript/ folder
- Event loop demonstrations
- Promise examples
- Build simple promise from scratch
- Async/await patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-012: React Fundamentals

```
Teach me React Fundamentals - Components, JSX, Props, Virtual DOM using JavaScript/React.

PROJECT CONTEXT:
- Step: DD-012 of 145
- Sprint: Sprint 1 - The Walking Skeleton
- Completed steps: DD-001 through DD-011
- Understands: JavaScript fundamentals, async/await, closures
- Current project state: Backend ready with FastAPI knowledge, JavaScript learned
- Goal: Build frontend to connect with backend

DEPENDENCIES COMPLETED:
- DD-011: JavaScript Fundamentals - language basics, async, closures

WHAT TO BUILD:
After learning React:
- learning_experiments/react/ folder
- Create React app with Vite
- Build simple components
- Understand JSX compilation
- Component composition patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-013: CORS - Cross-Origin Security

```
Teach me CORS - Same-Origin Policy, CORS Headers, Preflight Requests using Python (FastAPI) and JavaScript.

PROJECT CONTEXT:
- Step: DD-013 of 145 (FINAL STEP OF SPRINT 1)
- Sprint: Sprint 1 - The Walking Skeleton
- Completed steps: DD-001 through DD-012
- Understands: HTTP, FastAPI, React, how frontend and backend communicate
- Current project state: Can build backend API and frontend React app separately
- Goal: Connect frontend to backend (solve CORS errors)

DEPENDENCIES COMPLETED:
- DD-009: HTTP Protocol - headers, requests
- DD-010: ASGI/FastAPI - building APIs
- DD-012: React - making frontend requests

WHAT TO BUILD:
After learning CORS:
- Fix CORS between React frontend and FastAPI backend
- Build first working full-stack feature (Hello World end-to-end)
- Understand browser security

DELIVERABLE: Working "walking skeleton" - frontend fetches from backend successfully

NEXT SPRINT: Sprint 2 - Type Safety & Tooling

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 2: TYPE SAFETY & TOOLING

### DD-014: Type Systems Theory

```
Teach me Type Systems - Static vs Dynamic Typing, Type Inference, Gradual Typing, Structural vs Nominal using Python and TypeScript examples.

PROJECT CONTEXT:
- Step: DD-014 of 145 (FIRST STEP OF SPRINT 2)
- Sprint: Sprint 2 - Type Safety & Tooling
- Completed steps: DD-001 through DD-013 (Sprint 1 complete - have working full-stack app)
- Understands: Python, JavaScript, building web applications
- Current project state: Basic full-stack app (FastAPI + React) working
- Goal: Add type safety to catch errors before runtime

DEPENDENCIES COMPLETED:
- DD-006: Python Environment - Python basics
- DD-011: JavaScript Fundamentals - JS basics

WHAT TO BUILD:
After learning type systems:
- learning_experiments/type-systems/ folder
- Compare typed vs untyped code
- Understand tradeoffs
- Ready to add types to project

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-015: Python Type Hints

```
Teach me Python Type Hints - Type Syntax, Generics, Type Aliases, Protocols, mypy using Python.

PROJECT CONTEXT:
- Step: DD-015 of 145
- Sprint: Sprint 2 - Type Safety & Tooling
- Completed steps: DD-001 through DD-014
- Understands: Type systems concepts, Python programming
- Current project state: FastAPI backend without types
- Goal: Add type hints to Python code

DEPENDENCIES COMPLETED:
- DD-014: Type Systems - understanding of static typing

WHAT TO BUILD:
After learning Python types:
- learning_experiments/python-types/ folder
- Add type hints to previous code examples
- Run mypy to catch type errors
- Understand gradual typing

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-016: Pydantic - Runtime Validation

```
Teach me Pydantic - BaseModel, Validation, Serialization, Field Validators using Python.

PROJECT CONTEXT:
- Step: DD-016 of 145
- Sprint: Sprint 2 - Type Safety & Tooling
- Completed steps: DD-001 through DD-015
- Understands: Python type hints, static typing
- Current project state: FastAPI backend with type hints
- Goal: Add runtime validation for API requests/responses

DEPENDENCIES COMPLETED:
- DD-015: Python Type Hints - type syntax, understanding types

WHAT TO BUILD:
After learning Pydantic:
- learning_experiments/pydantic/ folder
- Create Pydantic models for API
- Validate requests automatically
- Serialize responses

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-017: TypeScript Basics

```
Teach me TypeScript Basics - Type Syntax, Interfaces, Types, Union Types, Type Guards using TypeScript.

PROJECT CONTEXT:
- Step: DD-017 of 145
- Sprint: Sprint 2 - Type Safety & Tooling
- Completed steps: DD-001 through DD-016
- Understands: JavaScript, type systems concepts
- Current project state: React frontend without types
- Goal: Add type safety to frontend

DEPENDENCIES COMPLETED:
- DD-011: JavaScript Fundamentals - JS language
- DD-014: Type Systems - understanding static typing

WHAT TO BUILD:
After learning TypeScript:
- learning_experiments/typescript/ folder
- Convert JavaScript examples to TypeScript
- Convert React components to TypeScript
- Understand compilation process

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-018: Linters and Formatters

```
Teach me Linters and Formatters - Static Analysis, Code Formatting, Ruff, Black, ESLint, Prettier using Python and JavaScript.

PROJECT CONTEXT:
- Step: DD-018 of 145
- Sprint: Sprint 2 - Type Safety & Tooling
- Completed steps: DD-001 through DD-017
- Understands: Python, TypeScript, code quality concepts
- Current project state: Typed backend and frontend
- Goal: Automate code quality checks

DEPENDENCIES COMPLETED:
- DD-007: VS Code - editor configuration
- DD-015: Python Types - type checking
- DD-017: TypeScript - type checking

WHAT TO BUILD:
After learning linting/formatting:
- Configure Ruff and Black for Python
- Configure ESLint and Prettier for TypeScript
- Integrate with VS Code
- Set up consistent code style

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-019: Git Hooks and Pre-commit

```
Teach me Git Hooks - Pre-commit Framework, Running Checks Before Commit using Python and bash.

PROJECT CONTEXT:
- Step: DD-019 of 145 (FINAL STEP OF SPRINT 2)
- Sprint: Sprint 2 - Type Safety & Tooling
- Completed steps: DD-001 through DD-018
- Understands: Git basics, linters, formatters
- Current project state: Typed, linted, formatted code
- Goal: Prevent bad code from being committed

DEPENDENCIES COMPLETED:
- DD-005: Git - version control basics (not internals)
- DD-018: Linters/Formatters - quality tools

WHAT TO BUILD:
After learning Git hooks:
- Install pre-commit framework
- Configure hooks for linters/formatters
- Test that bad code can't be committed
- Professional code quality workflow

DELIVERABLE: Professional development environment with automated quality checks

NEXT SPRINT: Sprint 3 - Test-Driven Development

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 3: TEST-DRIVEN DEVELOPMENT

### DD-020: Testing Philosophy

```
Teach me Testing Philosophy - Why Test, Test Pyramid, TDD Cycle (Red-Green-Refactor), When NOT to Test using language-agnostic concepts.

PROJECT CONTEXT:
- Step: DD-020 of 145 (FIRST STEP OF SPRINT 3)
- Sprint: Sprint 3 - Test-Driven Development
- Completed steps: DD-001 through DD-019 (Sprint 2 complete - have professional tooling)
- Understands: Building applications, code quality
- Current project state: Full-stack app with type safety and quality tools
- Goal: Learn testing mindset before learning testing tools

DEPENDENCIES COMPLETED:
- None (conceptual foundation)

WHAT TO BUILD:
After learning testing philosophy:
- Understand test pyramid (unit → integration → E2E)
- Know when to write tests vs when not to
- Understand TDD cycle
- Ready to learn testing frameworks

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-021: pytest Basics

```
Teach me pytest Basics - Test Discovery, Fixtures, Parametrize, Markers using Python.

PROJECT CONTEXT:
- Step: DD-021 of 145
- Sprint: Sprint 3 - Test-Driven Development
- Completed steps: DD-001 through DD-020
- Understands: Testing philosophy, Python programming
- Current project state: FastAPI backend ready for testing
- Goal: Write unit tests for backend

DEPENDENCIES COMPLETED:
- DD-020: Testing Philosophy - why and when to test
- DD-006: Python basics

WHAT TO BUILD:
After learning pytest:
- learning_experiments/pytest/ folder
- Write unit tests for previous Python code
- Use fixtures for setup/teardown
- Parametrize tests for multiple inputs
- Understand test discovery

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-022: pytest Advanced

```
Teach me pytest Advanced - Mocking, Async Tests, Coverage, pytest-mock using Python.

PROJECT CONTEXT:
- Step: DD-022 of 145
- Sprint: Sprint 3 - Test-Driven Development
- Completed steps: DD-001 through DD-021
- Understands: Basic pytest, testing fundamentals
- Current project state: Backend with basic unit tests
- Goal: Test complex scenarios (async code, external dependencies)

DEPENDENCIES COMPLETED:
- DD-021: pytest Basics - test writing fundamentals
- DD-010: ASGI - async concepts

WHAT TO BUILD:
After learning pytest advanced:
- Test async FastAPI endpoints
- Mock database connections
- Mock external API calls
- Measure test coverage
- Professional testing patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-023: React Testing with Vitest and Testing Library

```
Teach me React Testing - Vitest, React Testing Library, Testing User Interactions using TypeScript/React.

PROJECT CONTEXT:
- Step: DD-023 of 145
- Sprint: Sprint 3 - Test-Driven Development
- Completed steps: DD-001 through DD-022
- Understands: Testing philosophy, React components
- Current project state: React frontend without tests
- Goal: Write tests for React components

DEPENDENCIES COMPLETED:
- DD-020: Testing Philosophy - testing concepts
- DD-012: React - component basics

WHAT TO BUILD:
After learning React testing:
- learning_experiments/react-testing/ folder
- Test React components
- Test user interactions (clicks, form input)
- Mock API calls in frontend tests
- Component testing patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-024: E2E Testing with Playwright

```
Teach me E2E Testing - Browser Automation, Page Object Model, Visual Regression using TypeScript/Playwright.

PROJECT CONTEXT:
- Step: DD-024 of 145
- Sprint: Sprint 3 - Test-Driven Development
- Completed steps: DD-001 through DD-023
- Understands: Unit tests for backend and frontend
- Current project state: Full-stack app with unit tests
- Goal: Test entire application flow

DEPENDENCIES COMPLETED:
- DD-020: Testing Philosophy - test pyramid (E2E at top)
- DD-013: Full-stack app working (CORS solved)

WHAT TO BUILD:
After learning E2E testing:
- learning_experiments/e2e-testing/ folder
- Write E2E tests for full user flows
- Test frontend → backend → frontend
- Understand when to use E2E vs unit tests

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-025: TDD Practice - Full Cycle

```
Teach me TDD in Practice - Red-Green-Refactor Cycle, Writing Tests First using Python and TypeScript.

PROJECT CONTEXT:
- Step: DD-025 of 145
- Sprint: Sprint 3 - Test-Driven Development
- Completed steps: DD-001 through DD-024
- Understands: Testing tools (pytest, Vitest, Playwright)
- Current project state: Testing frameworks set up
- Goal: Practice TDD workflow (test-first development)

DEPENDENCIES COMPLETED:
- DD-020: Testing Philosophy - TDD cycle concept
- DD-021: pytest - Python testing
- DD-023: React Testing - frontend testing

WHAT TO BUILD:
After practicing TDD:
- Build new feature using pure TDD
- Write failing test (RED)
- Write minimal code to pass (GREEN)
- Refactor (clean up code while tests stay green)
- Internalize TDD mindset

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-026: Test Doubles - Mocks, Stubs, Spies

```
Teach me Test Doubles - Dummy, Stub, Spy, Mock, Fake - When to Use Each using Python and TypeScript.

PROJECT CONTEXT:
- Step: DD-026 of 145 (FINAL STEP OF SPRINT 3)
- Sprint: Sprint 3 - Test-Driven Development
- Completed steps: DD-001 through DD-025
- Understands: Testing, mocking basics from pytest
- Current project state: Tests written for backend and frontend
- Goal: Understand different types of test doubles and when to use them

DEPENDENCIES COMPLETED:
- DD-021: pytest Basics - basic testing
- DD-022: pytest Advanced - mocking introduction

WHAT TO BUILD:
After learning test doubles:
- Refactor existing tests to use appropriate test doubles
- Understand when to use each type
- Professional testing patterns

DELIVERABLE: Comprehensive test suite using TDD principles

NEXT SPRINT: Sprint 4 - Database Fundamentals

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 4: DATABASE FUNDAMENTALS

### DD-027: Relational Database Theory

```
Teach me Relational Database Theory - ACID Properties, Normalization (1NF, 2NF, 3NF), When to Denormalize using SQL and diagrams.

PROJECT CONTEXT:
- Step: DD-027 of 145 (FIRST STEP OF SPRINT 4)
- Sprint: Sprint 4 - Database Fundamentals
- Completed steps: DD-001 through DD-026 (Sprint 3 complete - TDD mastery)
- Understands: Building tested applications
- Current project state: Full-stack app with tests, no database yet
- Goal: Learn database design before implementation

DEPENDENCIES COMPLETED:
- None (conceptual foundation, but data structures knowledge from programming helps)

WHAT TO BUILD:
After learning database theory:
- learning_experiments/databases/ folder
- Design normalized schema for PDM system
- Understand relationships (one-to-many, many-to-many)
- ER diagrams

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-028: SQL DDL - Data Definition Language

```
Teach me SQL DDL - CREATE TABLE, Constraints, Primary Keys, Foreign Keys, Indexes using PostgreSQL.

PROJECT CONTEXT:
- Step: DD-028 of 145
- Sprint: Sprint 4 - Database Fundamentals
- Completed steps: DD-001 through DD-027
- Understands: Database theory, normalization
- Current project state: Have designed schema, ready to implement
- Goal: Create database tables

DEPENDENCIES COMPLETED:
- DD-027: Database Theory - schema design, normalization

WHAT TO BUILD:
After learning SQL DDL:
- Install PostgreSQL
- Create database for PDM system
- Write DDL for all tables
- Understand constraints and indexes

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-029: SQL DML - Data Manipulation Language

```
Teach me SQL DML - SELECT, INSERT, UPDATE, DELETE, JOINs, GROUP BY using PostgreSQL.

PROJECT CONTEXT:
- Step: DD-029 of 145
- Sprint: Sprint 4 - Database Fundamentals
- Completed steps: DD-001 through DD-028
- Understands: Database structure, tables created
- Current project state: Database schema exists
- Goal: Query and manipulate data

DEPENDENCIES COMPLETED:
- DD-028: SQL DDL - tables and relationships exist

WHAT TO BUILD:
After learning SQL DML:
- Write queries for PDM use cases
- Practice JOINs across tables
- Aggregate data with GROUP BY
- CRUD operations for all entities

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-030: SQL Advanced - CTEs, Window Functions, Transactions

```
Teach me SQL Advanced - Common Table Expressions, Window Functions, Transactions using PostgreSQL.

PROJECT CONTEXT:
- Step: DD-030 of 145
- Sprint: Sprint 4 - Database Fundamentals
- Completed steps: DD-001 through DD-029
- Understands: Basic SQL queries and JOINs
- Current project state: Can query database
- Goal: Advanced SQL patterns for complex queries

DEPENDENCIES COMPLETED:
- DD-029: SQL DML - basic queries, JOINs

WHAT TO BUILD:
After learning advanced SQL:
- Write complex reports using CTEs
- Use window functions for analytics
- Implement transactions for data consistency
- Advanced query patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-031: PostgreSQL Specifics

```
Teach me PostgreSQL Specifics - JSONB, Arrays, Full-Text Search, Extensions using PostgreSQL.

PROJECT CONTEXT:
- Step: DD-031 of 145
- Sprint: Sprint 4 - Database Fundamentals
- Completed steps: DD-001 through DD-030
- Understands: Standard SQL
- Current project state: Using PostgreSQL
- Goal: Leverage PostgreSQL-specific features

DEPENDENCIES COMPLETED:
- DD-029: SQL DML - SQL fundamentals

WHAT TO BUILD:
After learning PostgreSQL features:
- Use JSONB for flexible data
- Implement full-text search
- Use arrays where appropriate
- Leverage PostgreSQL extensions

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-032: Database Internals - How Databases Work

```
Teach me Database Internals - B-Trees, Query Execution, Query Optimizer, EXPLAIN ANALYZE using PostgreSQL.

PROJECT CONTEXT:
- Step: DD-032 of 145
- Sprint: Sprint 4 - Database Fundamentals
- Completed steps: DD-001 through DD-031
- Understands: SQL and PostgreSQL features
- Current project state: Working with database
- Goal: Understand how databases work internally for optimization

DEPENDENCIES COMPLETED:
- DD-029: SQL - query basics
- DD-073: Binary Trees (helpful but not required - can learn B-trees standalone)

WHAT TO BUILD:
After learning database internals:
- Analyze query performance with EXPLAIN
- Understand index usage
- Optimize slow queries
- Choose appropriate indexes

NOTE: Can skip deep internals and focus on EXPLAIN ANALYZE practically

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-033: SQLAlchemy Core

```
Teach me SQLAlchemy Core - SQL Expression Language, Connection Pooling, Raw SQL vs ORM using Python.

PROJECT CONTEXT:
- Step: DD-033 of 145
- Sprint: Sprint 4 - Database Fundamentals
- Completed steps: DD-001 through DD-032
- Understands: SQL, PostgreSQL, Python
- Current project state: Direct SQL queries working
- Goal: Use Python to interact with database

DEPENDENCIES COMPLETED:
- DD-029: SQL - query fundamentals
- DD-006: Python - language basics

WHAT TO BUILD:
After learning SQLAlchemy Core:
- learning_experiments/sqlalchemy/ folder
- Connect to PostgreSQL from Python
- Write queries using SQLAlchemy expression language
- Understand connection pooling

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-034: SQLAlchemy ORM

```
Teach me SQLAlchemy ORM - Declarative Models, Relationships, Querying, Sessions using Python.

PROJECT CONTEXT:
- Step: DD-034 of 145 (FINAL STEP OF SPRINT 4)
- Sprint: Sprint 4 - Database Fundamentals
- Completed steps: DD-001 through DD-033
- Understands: SQL, SQLAlchemy Core
- Current project state: Can query database from Python
- Goal: Map Python objects to database tables

DEPENDENCIES COMPLETED:
- DD-033: SQLAlchemy Core - database connections from Python
- DD-084: Python OOP (helpful but can learn ORM without deep OOP)

WHAT TO BUILD:
After learning SQLAlchemy ORM:
- Define ORM models for PDM schema
- Set up relationships (one-to-many, many-to-many)
- Query using ORM
- Integrate with FastAPI

DELIVERABLE: Database layer complete for PDM application

NEXT SPRINT: Sprint 5 - CRUD API

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 5: CRUD API

### DD-035: REST API Design Principles

```
Teach me REST API Design - Resources, URIs, HTTP Methods Mapped to CRUD, Status Codes, API Versioning using concepts and examples.

PROJECT CONTEXT:
- Step: DD-035 of 145 (FIRST STEP OF SPRINT 5)
- Sprint: Sprint 5 - CRUD API
- Completed steps: DD-001 through DD-034 (Sprint 4 complete - database ready)
- Understands: HTTP, databases, FastAPI basics
- Current project state: Database models defined, ready to build API
- Goal: Design RESTful API for PDM system

DEPENDENCIES COMPLETED:
- DD-009: HTTP - request/response, methods, status codes
- DD-027: Database Theory - CRUD operations

WHAT TO BUILD:
After learning REST design:
- Design RESTful API for PDM entities
- Plan URI structure (/api/parts, /api/parts/{id})
- Map HTTP methods to CRUD operations
- Plan status codes for different scenarios

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-036: FastAPI Basics - Building CRUD Endpoints

```
Teach me FastAPI Basics - Path Parameters, Query Parameters, Request Bodies (Pydantic), Response Models using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-036 of 145
- Sprint: Sprint 5 - CRUD API
- Completed steps: DD-001 through DD-035
- Understands: REST design, Pydantic, SQLAlchemy ORM
- Current project state: API design complete, database ready
- Goal: Implement CRUD endpoints

DEPENDENCIES COMPLETED:
- DD-010: ASGI - async web servers
- DD-016: Pydantic - validation models
- DD-034: SQLAlchemy ORM - database layer
- DD-035: REST Design - API principles

WHAT TO BUILD:
After learning FastAPI:
- Implement CRUD endpoints for Parts
- GET /api/parts (list)
- GET /api/parts/{id} (detail)
- POST /api/parts (create)
- PUT /api/parts/{id} (update)
- DELETE /api/parts/{id} (delete)

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-037: FastAPI Advanced - Dependency Injection, Background Tasks

```
Teach me FastAPI Advanced - Dependency Injection System, Background Tasks, File Uploads, Custom Responses using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-037 of 145
- Sprint: Sprint 5 - CRUD API
- Completed steps: DD-001 through DD-036
- Understands: Basic FastAPI endpoints
- Current project state: Basic CRUD API working
- Goal: Add advanced FastAPI features

DEPENDENCIES COMPLETED:
- DD-036: FastAPI Basics - endpoint creation

WHAT TO BUILD:
After learning FastAPI advanced:
- Extract database session as dependency
- Add background tasks
- Handle file uploads
- Custom response types
- Reusable dependencies

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-038: API Testing with TestClient

```
Teach me API Testing - FastAPI TestClient, Mocking Database, Testing Error Cases using Python/pytest.

PROJECT CONTEXT:
- Step: DD-038 of 145
- Sprint: Sprint 5 - CRUD API
- Completed steps: DD-001 through DD-037
- Understands: FastAPI, pytest
- Current project state: CRUD API implemented, no tests
- Goal: Test all API endpoints

DEPENDENCIES COMPLETED:
- DD-022: pytest Advanced - mocking
- DD-036: FastAPI Basics - endpoints to test

WHAT TO BUILD:
After learning API testing:
- Test all CRUD endpoints
- Test validation errors (Pydantic)
- Test database errors
- Test authentication (when added)
- Comprehensive API test suite

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-039: OpenAPI and API Documentation

```
Teach me OpenAPI - Auto-Generated Docs, Swagger UI, ReDoc, Customizing Docs using FastAPI.

PROJECT CONTEXT:
- Step: DD-039 of 145 (FINAL STEP OF SPRINT 5)
- Sprint: Sprint 5 - CRUD API
- Completed steps: DD-001 through DD-038
- Understands: REST APIs, FastAPI
- Current project state: Tested CRUD API
- Goal: Document API for frontend developers

DEPENDENCIES COMPLETED:
- DD-036: FastAPI - API implementation

WHAT TO BUILD:
After learning OpenAPI:
- Customize auto-generated docs
- Add descriptions to endpoints
- Add examples to request/response
- Professional API documentation

DELIVERABLE: Complete, tested, documented CRUD API

NEXT SPRINT: Sprint 6 - Async Programming

Start with Section 1 identifying all prerequisites and building blocks needed.
```

You're absolutely right! Continuing with the rest:

---

## SPRINT 6: ASYNC PROGRAMMING (continued)

### DD-040: Concurrency Fundamentals

```
Teach me Concurrency Fundamentals - Concurrency vs Parallelism, CPU-bound vs I/O-bound, Threading, Multiprocessing, Async using Python.

PROJECT CONTEXT:
- Step: DD-040 of 145 (FIRST STEP OF SPRINT 6)
- Sprint: Sprint 6 - Async Programming
- Completed steps: DD-001 through DD-039 (Sprint 5 complete - CRUD API ready)
- Understands: Basic async from FastAPI
- Current project state: Synchronous CRUD API
- Goal: Understand concurrency deeply

DEPENDENCIES COMPLETED:
- DD-002: Operating Systems - processes, threads
- DD-010: ASGI - basic async concepts

WHAT TO BUILD:
After learning concurrency:
- learning_experiments/concurrency/ folder
- Compare threading vs multiprocessing vs asyncio
- Understand when to use each
- Measure performance differences

NOTE: Heavy theory, can learn async practically (DD-041) and skip deep theory

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-041: Python Async Basics

```
Teach me Python Async Basics - Event Loop, Coroutines (async def), await, asyncio.run() using Python.

PROJECT CONTEXT:
- Step: DD-041 of 145
- Sprint: Sprint 6 - Async Programming
- Completed steps: DD-001 through DD-040
- Understands: Basic programming, FastAPI uses async
- Current project state: Using async without understanding it
- Goal: Understand async/await properly

DEPENDENCIES COMPLETED:
- None required (can learn async practically without deep concurrency theory)

WHAT TO BUILD:
After learning Python async:
- learning_experiments/python-async/ folder
- Build async file reader
- Understand event loop
- Write async functions
- Use await properly

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-042: Python Async Advanced

```
Teach me Python Async Advanced - asyncio.gather(), asyncio.create_task(), Timeouts, Error Handling using Python.

PROJECT CONTEXT:
- Step: DD-042 of 145
- Sprint: Sprint 6 - Async Programming
- Completed steps: DD-001 through DD-041
- Understands: Basic async/await
- Current project state: Can write async functions
- Goal: Concurrent async operations

DEPENDENCIES COMPLETED:
- DD-041: Python Async Basics - coroutines, await

WHAT TO BUILD:
After learning async advanced:
- Run multiple async operations concurrently
- Handle timeouts
- Error handling in async code
- Async patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-043: Async Database Access with asyncpg

```
Teach me Async Database Access - Async Drivers, Connection Pooling, Transactions using Python/asyncpg/SQLAlchemy async.

PROJECT CONTEXT:
- Step: DD-043 of 145
- Sprint: Sprint 6 - Async Programming
- Completed steps: DD-001 through DD-042
- Understands: Async Python, SQLAlchemy ORM
- Current project state: Synchronous database access
- Goal: Make database operations async

DEPENDENCIES COMPLETED:
- DD-034: SQLAlchemy ORM - database layer
- DD-041: Python Async - async/await

WHAT TO BUILD:
After learning async database:
- Convert SQLAlchemy to async
- Use async connection pooling
- Async transactions
- Update FastAPI endpoints to use async DB

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-044: JavaScript Async Deep Dive

```
Teach me JavaScript Async Deep Dive - Promise Internals, Promise.all(), Promise.race(), Error Handling using JavaScript.

PROJECT CONTEXT:
- Step: DD-044 of 145
- Sprint: Sprint 6 - Async Programming
- Completed steps: DD-001 through DD-043
- Understands: Basic JavaScript async from DD-011
- Current project state: Using promises without deep understanding
- Goal: Master JavaScript async

DEPENDENCIES COMPLETED:
- DD-011: JavaScript Fundamentals - basic promises

WHAT TO BUILD:
After learning JS async:
- learning_experiments/js-async/ folder
- Build promise from scratch
- Use Promise.all() for concurrent requests
- Error handling patterns
- Async/await vs promises

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-045: React Async Data Fetching

```
Teach me React Async Data Fetching - useEffect, Loading States, Error Handling, Cleanup using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-045 of 145 (FINAL STEP OF SPRINT 6)
- Sprint: Sprint 6 - Async Programming
- Completed steps: DD-001 through DD-044
- Understands: React basics, JavaScript async
- Current project state: Static React frontend
- Goal: Fetch data from API in React

DEPENDENCIES COMPLETED:
- DD-012: React Fundamentals - components, hooks
- DD-044: JavaScript Async - promises, async/await

WHAT TO BUILD:
After learning React async:
- Fetch data from FastAPI backend
- Handle loading states
- Handle errors gracefully
- Cleanup on unmount
- Complete full-stack data flow

DELIVERABLE: Full-stack app with async data flow

NEXT SPRINT: Sprint 7 - State Management

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 7: STATE MANAGEMENT

### DD-046: React State - useState and useReducer

```
Teach me React State - useState, useReducer, State vs Props, Lifting State Up using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-046 of 145 (FIRST STEP OF SPRINT 7)
- Sprint: Sprint 7 - State Management
- Completed steps: DD-001 through DD-045 (Sprint 6 complete - async mastery)
- Understands: React basics, data fetching
- Current project state: Fetching data, no complex state management
- Goal: Manage complex component state

DEPENDENCIES COMPLETED:
- DD-012: React Fundamentals - basic components
- DD-045: React Async - data fetching

WHAT TO BUILD:
After learning React state:
- learning_experiments/react-state/ folder
- Build form with useState
- Build complex state with useReducer
- Lift state up between components
- Understand when to use each

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-047: React Context - Global State

```
Teach me React Context - Context API, Provider Pattern, useContext, Performance using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-047 of 145
- Sprint: Sprint 7 - State Management
- Completed steps: DD-001 through DD-046
- Understands: React state, prop drilling problem
- Current project state: Passing props through many layers
- Goal: Share state globally without prop drilling

DEPENDENCIES COMPLETED:
- DD-046: React State - useState, state management

WHAT TO BUILD:
After learning Context:
- Create auth context (user state)
- Create theme context (light/dark mode)
- Understand when to use Context vs props
- Performance considerations

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-048: React Query - Server State

```
Teach me React Query - Caching, Automatic Refetching, Mutations, Optimistic Updates using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-048 of 145
- Sprint: Sprint 7 - State Management
- Completed steps: DD-001 through DD-047
- Understands: Data fetching, React state
- Current project state: Manual data fetching with useEffect
- Goal: Better server state management

DEPENDENCIES COMPLETED:
- DD-045: React Async - data fetching
- DD-046: React State - state management

WHAT TO BUILD:
After learning React Query:
- Replace useEffect data fetching with React Query
- Implement caching
- Handle mutations (POST, PUT, DELETE)
- Optimistic updates
- Professional data fetching patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-049: Form Handling with React Hook Form

```
Teach me Form Handling - React Hook Form, Validation, Error Messages, Submission using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-049 of 145
- Sprint: Sprint 7 - State Management
- Completed steps: DD-001 through DD-048
- Understands: React state, forms with useState
- Current project state: Manual form state management
- Goal: Professional form handling

DEPENDENCIES COMPLETED:
- DD-046: React State - form state with useState

WHAT TO BUILD:
After learning React Hook Form:
- Build complex forms
- Validation rules
- Error display
- Form submission
- Multi-step forms

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-050: State Management Patterns

```
Teach me State Management Patterns - Flux Architecture, Redux Overview, Zustand, When You Don't Need State Management using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-050 of 145 (FINAL STEP OF SPRINT 7)
- Sprint: Sprint 7 - State Management
- Completed steps: DD-001 through DD-049
- Understands: Context, React Query, forms
- Current project state: Using Context and React Query
- Goal: Understand state management landscape

DEPENDENCIES COMPLETED:
- DD-047: React Context - global state
- DD-048: React Query - server state

WHAT TO BUILD:
After learning state patterns:
- Compare different approaches
- Understand Flux architecture
- Know when to use what
- Avoid over-engineering

DELIVERABLE: Professional state management in React app

NEXT SPRINT: Sprint 8 - Authentication & Authorization

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 8: AUTHENTICATION & AUTHORIZATION

### DD-051: Cryptography - Hashing

```
Teach me Cryptography Hashing - Hash Functions, One-Way Functions, Collisions, bcrypt, SHA-256 using Python.

PROJECT CONTEXT:
- Step: DD-051 of 145 (FIRST STEP OF SPRINT 8)
- Sprint: Sprint 8 - Authentication & Authorization
- Completed steps: DD-001 through DD-050 (Sprint 7 complete - state management mastery)
- Understands: Binary concepts (from DD-001) help but not required
- Current project state: No authentication
- Goal: Understand hashing for password storage

DEPENDENCIES COMPLETED:
- None required (can learn hashing at high level without deep binary knowledge)

WHAT TO BUILD:
After learning hashing:
- learning_experiments/cryptography/ folder
- Hash passwords with bcrypt
- Understand why hashing is one-way
- Compare hash functions
- Understand salts

NOTE: Can skip deep cryptography math, focus on bcrypt usage

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-052: Cryptography - Digital Signatures

```
Teach me Cryptography Signatures - Public Key Cryptography, Digital Signatures, HMAC using Python.

PROJECT CONTEXT:
- Step: DD-052 of 145
- Sprint: Sprint 8 - Authentication & Authorization
- Completed steps: DD-001 through DD-051
- Understands: Hashing
- Current project state: Can hash passwords
- Goal: Understand signing for tokens

DEPENDENCIES COMPLETED:
- DD-051: Hashing - one-way functions

WHAT TO BUILD:
After learning signatures:
- Sign messages with HMAC
- Verify signatures
- Understand public/private keys
- Foundation for JWT

NOTE: Can skip deep crypto, focus on JWT usage

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-053: Password Security

```
Teach me Password Security - Password Hashing (bcrypt), Salts, Password Strength, Common Attacks using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-053 of 145
- Sprint: Sprint 8 - Authentication & Authorization
- Completed steps: DD-001 through DD-052
- Understands: Hashing concepts
- Current project state: Need to store user passwords
- Goal: Secure password storage

DEPENDENCIES COMPLETED:
- DD-051: Hashing - hash functions

WHAT TO BUILD:
After learning password security:
- Hash passwords with bcrypt in FastAPI
- Store hashed passwords in database
- Verify passwords on login
- Password strength validation
- Understand common attacks (rainbow tables, etc.)

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-054: JWT Tokens

```
Teach me JWT - Token Structure, Claims, Signing, Expiration, Refresh Tokens using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-054 of 145
- Sprint: Sprint 8 - Authentication & Authorization
- Completed steps: DD-001 through DD-053
- Understands: Hashing, signatures, password security
- Current project state: Can verify passwords
- Goal: Implement token-based authentication

DEPENDENCIES COMPLETED:
- DD-052: Digital Signatures - signing/verification
- DD-053: Password Security - authentication

WHAT TO BUILD:
After learning JWT:
- Create JWT on login
- Verify JWT on protected endpoints
- Implement refresh tokens
- Handle token expiration
- Stateless authentication

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-055: OAuth2 Framework

```
Teach me OAuth2 - Authorization Code Flow, Access Tokens, Refresh Tokens, Scopes using concepts and FastAPI examples.

PROJECT CONTEXT:
- Step: DD-055 of 145
- Sprint: Sprint 8 - Authentication & Authorization
- Completed steps: DD-001 through DD-054
- Understands: JWT, tokens
- Current project state: JWT authentication working
- Goal: Understand OAuth2 framework

DEPENDENCIES COMPLETED:
- DD-054: JWT - token-based auth

WHAT TO BUILD:
After learning OAuth2:
- Understand OAuth2 flows
- Implement OAuth2 password flow in FastAPI
- Understand scopes
- OAuth2 with JWT

NOTE: Full OAuth2 provider not needed, understand the pattern

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-056: Session Management

```
Teach me Session Management - Cookies, Session Storage, CSRF Protection, SameSite using Python/FastAPI and React.

PROJECT CONTEXT:
- Step: DD-056 of 145
- Sprint: Sprint 8 - Authentication & Authorization
- Completed steps: DD-001 through DD-055
- Understands: JWT, stateless auth
- Current project state: Token-based auth
- Goal: Understand session-based auth alternative

DEPENDENCIES COMPLETED:
- DD-009: HTTP - cookies, headers

WHAT TO BUILD:
After learning sessions:
- Implement session-based auth
- Secure cookies
- CSRF protection
- Compare sessions vs tokens
- When to use each

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-057: RBAC - Role-Based Access Control

```
Teach me RBAC - Users, Roles, Permissions, Authorization Middleware using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-057 of 145 (FINAL STEP OF SPRINT 8)
- Sprint: Sprint 8 - Authentication & Authorization
- Completed steps: DD-001 through DD-056
- Understands: Authentication (JWT)
- Current project state: Can authenticate users
- Goal: Authorization - control what users can do

DEPENDENCIES COMPLETED:
- DD-054: JWT - authentication
- DD-034: SQLAlchemy - database for storing roles

WHAT TO BUILD:
After learning RBAC:
- Create User, Role, Permission models
- Implement role checking middleware
- Protect endpoints by role
- Admin vs regular user
- Complete auth system

DELIVERABLE: Full authentication and authorization system

NEXT SPRINT: Sprint 9 - Frontend Architecture

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 9: FRONTEND ARCHITECTURE

### DD-058: React Project Structure

```
Teach me React Project Structure - Folder Organization, Component Organization, Code Splitting using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-058 of 145 (FIRST STEP OF SPRINT 9)
- Sprint: Sprint 9 - Frontend Architecture
- Completed steps: DD-001 through DD-057 (Sprint 8 complete - auth system ready)
- Understands: React development
- Current project state: React components unorganized
- Goal: Professional frontend structure

DEPENDENCIES COMPLETED:
- DD-012: React Fundamentals - building components

WHAT TO BUILD:
After learning project structure:
- Reorganize frontend folders
- components/, pages/, hooks/, utils/, services/
- Feature-based organization
- Barrel exports
- Scalable structure

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-059: React Patterns - Composition

```
Teach me React Patterns - Component Composition, Render Props, Higher-Order Components, Custom Hooks using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-059 of 145
- Sprint: Sprint 9 - Frontend Architecture
- Completed steps: DD-001 through DD-058
- Understands: React basics
- Current project state: Basic component usage
- Goal: Advanced component patterns

DEPENDENCIES COMPLETED:
- DD-012: React Fundamentals - components
- DD-046: React State - hooks

WHAT TO BUILD:
After learning patterns:
- Extract reusable logic with custom hooks
- Composition patterns
- When to use each pattern
- Avoid prop drilling
- Reusable components

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-060: React Router

```
Teach me React Router - Client-Side Routing, Route Parameters, Nested Routes, Protected Routes using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-060 of 145
- Sprint: Sprint 9 - Frontend Architecture
- Completed steps: DD-001 through DD-059
- Understands: React, authentication
- Current project state: Single-page app, no routing
- Goal: Multi-page application

DEPENDENCIES COMPLETED:
- DD-012: React Fundamentals - components
- DD-057: RBAC - protected routes need auth

WHAT TO BUILD:
After learning React Router:
- Set up routing
- Public vs protected routes
- Route parameters (/parts/:id)
- Nested routes
- Navigation
- 404 pages

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-061: CSS Fundamentals

```
Teach me CSS Fundamentals - Box Model, Flexbox, Grid, Responsive Design using CSS.

PROJECT CONTEXT:
- Step: DD-061 of 145
- Sprint: Sprint 9 - Frontend Architecture
- Completed steps: DD-001 through DD-060
- Understands: HTML basics
- Current project state: Unstyled React app
- Goal: Style the application

DEPENDENCIES COMPLETED:
- None (CSS is independent)

WHAT TO BUILD:
After learning CSS:
- learning_experiments/css/ folder
- Build layouts with Flexbox
- Build layouts with Grid
- Responsive designs
- Understand box model

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-062: Modern CSS - Tailwind and CSS-in-JS

```
Teach me Modern CSS - Tailwind CSS, CSS Modules, Styled Components using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-062 of 145
- Sprint: Sprint 9 - Frontend Architecture
- Completed steps: DD-001 through DD-061
- Understands: CSS fundamentals
- Current project state: Basic CSS styling
- Goal: Modern CSS approach

DEPENDENCIES COMPLETED:
- DD-061: CSS Fundamentals - box model, flexbox, grid

WHAT TO BUILD:
After learning modern CSS:
- Set up Tailwind CSS
- Style React components with Tailwind
- Understand utility-first CSS
- Compare CSS approaches
- Choose approach for project

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-063: TypeScript Advanced Types

```
Teach me TypeScript Advanced Types - Generics, Conditional Types, Mapped Types, Utility Types using TypeScript.

PROJECT CONTEXT:
- Step: DD-063 of 145 (FINAL STEP OF SPRINT 9)
- Sprint: Sprint 9 - Frontend Architecture
- Completed steps: DD-001 through DD-062
- Understands: TypeScript basics
- Current project state: Using basic TypeScript
- Goal: Advanced type safety

DEPENDENCIES COMPLETED:
- DD-017: TypeScript Basics - type syntax

WHAT TO BUILD:
After learning advanced types:
- Use generics for reusable components
- Create utility types
- Type-safe API calls
- Advanced type patterns

DELIVERABLE: Professional frontend architecture

NEXT SPRINT: Sprint 10 - Real-Time Features

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 10: REAL-TIME FEATURES

### DD-064: WebSockets Theory

```
Teach me WebSockets Theory - Full-Duplex Communication, Connection Lifecycle, WebSocket Protocol using Python.

PROJECT CONTEXT:
- Step: DD-064 of 145 (FIRST STEP OF SPRINT 10)
- Sprint: Sprint 10 - Real-Time Features
- Completed steps: DD-001 through DD-063 (Sprint 9 complete - frontend architecture)
- Understands: HTTP, TCP from DD-008 (helps but not required)
- Current project state: Request-response only
- Goal: Real-time communication

DEPENDENCIES COMPLETED:
- DD-009: HTTP - understand HTTP limitations for real-time

WHAT TO BUILD:
After learning WebSockets:
- learning_experiments/websockets/ folder
- Build WebSocket echo server
- Understand connection upgrade from HTTP
- Bidirectional communication

NOTE: Can skip deep protocol, learn practically with FastAPI

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-065: FastAPI WebSockets

```
Teach me FastAPI WebSockets - WebSocket Endpoints, Broadcasting, Connection Management using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-065 of 145
- Sprint: Sprint 10 - Real-Time Features
- Completed steps: DD-001 through DD-064
- Understands: FastAPI, WebSocket concepts
- Current project state: HTTP-only API
- Goal: Add WebSocket endpoints

DEPENDENCIES COMPLETED:
- DD-036: FastAPI Basics - endpoints
- DD-064: WebSockets Theory - WebSocket concepts (or learn practically here)

WHAT TO BUILD:
After learning FastAPI WebSockets:
- Create WebSocket endpoint
- Handle connections
- Broadcast to multiple clients
- Real-time notifications

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-066: React WebSockets

```
Teach me React WebSockets - useWebSocket Hook, Reconnection, Message Handling using React/TypeScript.

PROJECT CONTEXT:
- Step: DD-066 of 145
- Sprint: Sprint 10 - Real-Time Features
- Completed steps: DD-001 through DD-065
- Understands: React, WebSockets backend
- Current project state: WebSocket backend ready
- Goal: Connect frontend to WebSocket

DEPENDENCIES COMPLETED:
- DD-065: FastAPI WebSockets - backend WebSocket endpoint
- DD-046: React State - managing connection state

WHAT TO BUILD:
After learning React WebSockets:
- Connect to WebSocket from React
- Handle messages
- Reconnection logic
- Display real-time updates
- Real-time notifications in UI

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-067: Server-Sent Events (SSE)

```
Teach me Server-Sent Events - SSE vs WebSockets, Event Streams, When to Use SSE using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-067 of 145
- Sprint: Sprint 10 - Real-Time Features
- Completed steps: DD-001 through DD-066
- Understands: WebSockets, HTTP
- Current project state: WebSocket real-time working
- Goal: Alternative to WebSockets for one-way updates

DEPENDENCIES COMPLETED:
- DD-009: HTTP - HTTP protocol
- DD-064: WebSockets - comparison

WHAT TO BUILD:
After learning SSE:
- Create SSE endpoint
- Stream events to client
- Compare SSE vs WebSockets
- When to use each

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-068: Redis Pub/Sub

```
Teach me Redis Pub/Sub - Publish/Subscribe Pattern, Channels, Redis for WebSocket Broadcasting using Python/Redis.

PROJECT CONTEXT:
- Step: DD-068 of 145 (FINAL STEP OF SPRINT 10)
- Sprint: Sprint 10 - Real-Time Features
- Completed steps: DD-001 through DD-067
- Understands: WebSockets, broadcasting
- Current project state: WebSockets work in single server
- Goal: Scale WebSockets across multiple servers

DEPENDENCIES COMPLETED:
- DD-065: FastAPI WebSockets - broadcasting

WHAT TO BUILD:
After learning Redis Pub/Sub:
- Install Redis
- Implement pub/sub pattern
- Use Redis for WebSocket broadcasting
- Scale to multiple servers

DELIVERABLE: Real-time features that scale

NEXT SPRINT: Sprint 11 - Data Structures & Algorithms

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 11: DATA STRUCTURES & ALGORITHMS

### DD-069: Big O Complexity Analysis

```
Teach me Big O Complexity - Time Complexity, Space Complexity, Common Complexities (O(1), O(log n), O(n), O(n²)) using Python.

PROJECT CONTEXT:
- Step: DD-069 of 145 (FIRST STEP OF SPRINT 11)
- Sprint: Sprint 11 - Data Structures & Algorithms
- Completed steps: DD-001 through DD-068 (Sprint 10 complete - real-time features)
- Understands: Basic programming, loops
- Current project state: Building features without analyzing efficiency
- Goal: Analyze algorithm performance

DEPENDENCIES COMPLETED:
- None (conceptual foundation)

WHAT TO BUILD:
After learning Big O:
- learning_experiments/algorithms/ folder
- Measure algorithm performance
- Compare different approaches
- Analyze existing code

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-070: Arrays and Strings

```
Teach me Arrays and Strings - Array Internals, String Manipulation, Common Patterns using Python.

PROJECT CONTEXT:
- Step: DD-070 of 145
- Sprint: Sprint 11 - Data Structures & Algorithms
- Completed steps: DD-001 through DD-069
- Understands: Big O, basic arrays/strings
- Current project state: Using lists without understanding internals
- Goal: Master fundamental data structures

DEPENDENCIES COMPLETED:
- DD-069: Big O - complexity analysis

WHAT TO BUILD:
After learning arrays/strings:
- Array manipulation algorithms
- String processing
- Two-pointer technique
- Sliding window
- Common patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-071: Linked Lists

```
Teach me Linked Lists - Singly Linked, Doubly Linked, Common Operations using Python.

PROJECT CONTEXT:
- Step: DD-071 of 145
- Sprint: Sprint 11 - Data Structures & Algorithms
- Completed steps: DD-001 through DD-070
- Understands: Arrays, pointers concept
- Current project state: Only using arrays
- Goal: Learn dynamic data structure

DEPENDENCIES COMPLETED:
- DD-070: Arrays - comparison to linked lists

WHAT TO BUILD:
After learning linked lists:
- Implement linked list from scratch
- Add, remove, search operations
- Reverse linked list
- Detect cycles
- Compare to arrays

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-072: Stacks and Queues

```
Teach me Stacks and Queues - LIFO, FIFO, Implementations, Use Cases using Python.

PROJECT CONTEXT:
- Step: DD-072 of 145
- Sprint: Sprint 11 - Data Structures & Algorithms
- Completed steps: DD-001 through DD-071
- Understands: Arrays, linked lists
- Current project state: Basic data structures known
- Goal: Learn specialized structures

DEPENDENCIES COMPLETED:
- DD-070: Arrays - can implement with arrays
- DD-071: Linked Lists - can implement with linked lists

WHAT TO BUILD:
After learning stacks/queues:
- Implement stack
- Implement queue
- Real-world use cases
- Expression evaluation
- BFS/DFS foundation

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-073: Binary Trees

```
Teach me Binary Trees - Tree Terminology, Binary Tree Structure, Tree Traversal (In-order, Pre-order, Post-order) using Python.

PROJECT CONTEXT:
- Step: DD-073 of 145
- Sprint: Sprint 11 - Data Structures & Algorithms
- Completed steps: DD-001 through DD-072
- Understands: Recursion from functions, basic data structures
- Current project state: Linear data structures only
- Goal: Learn hierarchical structures

DEPENDENCIES COMPLETED:
- DD-071: Linked Lists - nodes concept

WHAT TO BUILD:
After learning binary trees:
- Implement binary tree
- Tree traversals
- Height, depth calculations
- Basic tree algorithms

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-074: Binary Search Trees

```
Teach me Binary Search Trees - BST Properties, Insert, Search, Delete, Balancing using Python.

PROJECT CONTEXT:
- Step: DD-074 of 145
- Sprint: Sprint 11 - Data Structures & Algorithms
- Completed steps: DD-001 through DD-073
- Understands: Binary trees, recursion
- Current project state: Unordered trees
- Goal: Ordered tree structure for efficient search

DEPENDENCIES COMPLETED:
- DD-073: Binary Trees - tree structure

WHAT TO BUILD:
After learning BST:
- Implement BST
- Insert, search, delete
- Validate BST
- Understand balancing (AVL overview)
- Use cases

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-075: Hash Tables

```
Teach me Hash Tables - Hash Functions, Collision Resolution, Load Factor, Python Dict Internals using Python.

PROJECT CONTEXT:
- Step: DD-075 of 145
- Sprint: Sprint 11 - Data Structures & Algorithms
- Completed steps: DD-001 through DD-074
- Understands: Hashing from DD-051 (helpful but not required)
- Current project state: Using dicts without understanding
- Goal: Understand hash table internals

DEPENDENCIES COMPLETED:
- None required (can learn hashing at high level)

WHAT TO BUILD:
After learning hash tables:
- Implement hash table from scratch
- Hash function design
- Collision resolution (chaining, open addressing)
- Understand Python dicts
- Use cases

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-076: Graphs - Basics

```
Teach me Graphs - Graph Representation (Adjacency List/Matrix), BFS, DFS using Python.

PROJECT CONTEXT:
- Step: DD-076 of 145 (FINAL STEP OF SPRINT 11)
- Sprint: Sprint 11 - Data Structures & Algorithms
- Completed steps: DD-001 through DD-075
- Understands: Trees, queues, stacks
- Current project state: Tree structures only
- Goal: General graph structures

DEPENDENCIES COMPLETED:
- DD-073: Binary Trees - tree concept extends to graphs
- DD-072: Stacks/Queues - used in graph traversal

WHAT TO BUILD:
After learning graphs:
- Implement graph
- Adjacency list vs matrix
- BFS traversal
- DFS traversal
- Use cases (social networks, maps)

DELIVERABLE: Computer science fundamentals mastery

NEXT SPRINT: Sprint 12 - Advanced Algorithms

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 12: ADVANCED ALGORITHMS

### DD-077: Simple Sorting Algorithms

```
Teach me Simple Sorting - Bubble Sort, Selection Sort, Insertion Sort using Python.

PROJECT CONTEXT:
- Step: DD-077 of 145 (FIRST STEP OF SPRINT 12)
- Sprint: Sprint 12 - Advanced Algorithms
- Completed steps: DD-001 through DD-076 (Sprint 11 complete - DS fundamentals)
- Understands: Arrays, Big O
- Current project state: Using built-in sort()
- Goal: Understand sorting algorithms

DEPENDENCIES COMPLETED:
- DD-069: Big O - complexity analysis
- DD-070: Arrays - array manipulation

WHAT TO BUILD:
After learning simple sorting:
- Implement bubble sort
- Implement selection sort
- Implement insertion sort
- Compare performance
- Understand when each is useful

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-078: Efficient Sorting Algorithms

```
Teach me Efficient Sorting - Merge Sort, Quick Sort, Heap Sort using Python.

PROJECT CONTEXT:
- Step: DD-078 of 145
- Sprint: Sprint 12 - Advanced Algorithms
- Completed steps: DD-001 through DD-077
- Understands: Simple sorting, recursion
- Current project state: Slow O(n²) sorts
- Goal: O(n log n) sorting

DEPENDENCIES COMPLETED:
- DD-077: Simple Sorting - comparison
- DD-073: Trees - heap sort uses trees

WHAT TO BUILD:
After learning efficient sorting:
- Implement merge sort
- Implement quick sort
- Implement heap sort
- Understand divide and conquer
- Compare all sorting algorithms

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-079: Searching Algorithms

```
Teach me Searching Algorithms - Linear Search, Binary Search, Interpolation Search using Python.

PROJECT CONTEXT:
- Step: DD-079 of 145
- Sprint: Sprint 12 - Advanced Algorithms
- Completed steps: DD-001 through DD-078
- Understands: Sorted data, Big O
- Current project state: Linear search only
- Goal: Efficient searching

DEPENDENCIES COMPLETED:
- DD-069: Big O - understand O(log n)
- DD-078: Sorting - binary search needs sorted data

WHAT TO BUILD:
After learning searching:
- Implement linear search
- Implement binary search
- Implement interpolation search
- Compare performance
- Understand when to use each

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-080: Dynamic Programming - Memoization

```
Teach me Dynamic Programming Memoization - Overlapping Subproblems, Memoization Pattern using Python.

PROJECT CONTEXT:
- Step: DD-080 of 145
- Sprint: Sprint 12 - Advanced Algorithms
- Completed steps: DD-001 through DD-079
- Understands: Recursion, caching concepts
- Current project state: Inefficient recursive solutions
- Goal: Optimize with memoization

DEPENDENCIES COMPLETED:
- DD-073: Trees - recursion understanding

WHAT TO BUILD:
After learning memoization:
- Fibonacci with memoization
- Understand overlapping subproblems
- Memoization decorator
- Compare to naive recursion
- DP pattern recognition

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-081: Dynamic Programming - Tabulation

```
Teach me Dynamic Programming Tabulation - Bottom-Up Approach, DP Table, Common Patterns using Python.

PROJECT CONTEXT:
- Step: DD-081 of 145
- Sprint: Sprint 12 - Advanced Algorithms
- Completed steps: DD-001 through DD-080
- Understands: Memoization (top-down DP)
- Current project state: Top-down DP only
- Goal: Bottom-up DP

DEPENDENCIES COMPLETED:
- DD-080: Memoization - DP concepts

WHAT TO BUILD:
After learning tabulation:
- Convert memoization solutions to tabulation
- Build DP tables
- Common DP problems
- Compare approaches
- DP mastery

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-082: Graph Algorithms - Advanced

```
Teach me Graph Algorithms - Dijkstra's Algorithm, A* Search, Minimum Spanning Tree using Python.

PROJECT CONTEXT:
- Step: DD-082 of 145 (FINAL STEP OF SPRINT 12)
- Sprint: Sprint 12 - Advanced Algorithms
- Completed steps: DD-001 through DD-081
- Understands: Graphs, BFS/DFS
- Current project state: Basic graph traversal
- Goal: Advanced graph algorithms

DEPENDENCIES COMPLETED:
- DD-076: Graphs - graph structure, BFS/DFS

WHAT TO BUILD:
After learning graph algorithms:
- Implement Dijkstra's shortest path
- Implement A* search
- Minimum spanning tree
- Use cases (maps, routing)

DELIVERABLE: Algorithm mastery

NEXT SPRINT: Sprint 13 - Object-Oriented Programming

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 13: OBJECT-ORIENTED PROGRAMMING

### DD-083: OOP Fundamentals

```
Teach me OOP Fundamentals - Classes, Objects, Encapsulation, Inheritance, Polymorphism using Python.

PROJECT CONTEXT:
- Step: DD-083 of 145 (FIRST STEP OF SPRINT 13)
- Sprint: Sprint 13 - Object-Oriented Programming
- Completed steps: DD-001 through DD-082 (Sprint 12 complete - algorithms)
- Understands: Functions, basic programming
- Current project state: Procedural code
- Goal: Object-oriented design

DEPENDENCIES COMPLETED:
- None (OOP is a paradigm shift, foundational)

WHAT TO BUILD:
After learning OOP:
- learning_experiments/oop/ folder
- Create classes and objects
- Understand encapsulation
- Basic inheritance
- Polymorphism examples

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-084: Python OOP Basics

```
Teach me Python OOP Basics - Class Definition, __init__, Instance vs Class Variables, Methods using Python.

PROJECT CONTEXT:
- Step: DD-084 of 145
- Sprint: Sprint 13 - Object-Oriented Programming
- Completed steps: DD-001 through DD-083
- Understands: OOP concepts
- Current project state: Theoretical OOP knowledge
- Goal: Python-specific OOP

DEPENDENCIES COMPLETED:
- DD-083: OOP Fundamentals - OOP concepts

WHAT TO BUILD:
After learning Python OOP:
- Define classes in Python
- Constructor (__init__)
- Instance methods and variables
- Class methods and variables
- Convert functions to classes

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-085: Python OOP Inheritance

```
Teach me Python OOP Inheritance - Single Inheritance, Multiple Inheritance, MRO (Method Resolution Order), super() using Python.

PROJECT CONTEXT:
- Step: DD-085 of 145
- Sprint: Sprint 13 - Object-Oriented Programming
- Completed steps: DD-001 through DD-084
- Understands: Python classes
- Current project state: Single classes only
- Goal: Class hierarchies

DEPENDENCIES COMPLETED:
- DD-084: Python OOP Basics - class definition

WHAT TO BUILD:
After learning inheritance:
- Build class hierarchies
- Single inheritance
- Multiple inheritance (carefully)
- Understand MRO
- Use super() properly

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-086: Python Magic Methods

```
Teach me Python Magic Methods - __str__, __repr__, __eq__, __lt__, __len__, __getitem__, __enter__, __exit__ using Python.

PROJECT CONTEXT:
- Step: DD-086 of 145
- Sprint: Sprint 13 - Object-Oriented Programming
- Completed steps: DD-001 through DD-085
- Understands: Python classes, inheritance
- Current project state: Basic classes
- Goal: Python-specific class features

DEPENDENCIES COMPLETED:
- DD-084: Python OOP Basics - class methods

WHAT TO BUILD:
After learning magic methods:
- Implement __str__ and __repr__
- Comparison methods (__eq__, __lt__)
- Container protocol (__len__, __getitem__)
- Context manager (__enter__, __exit__)
- Pythonic classes

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-087: SOLID Principles

```
Teach me SOLID Principles - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion using Python.

PROJECT CONTEXT:
- Step: DD-087 of 145
- Sprint: Sprint 13 - Object-Oriented Programming
- Completed steps: DD-001 through DD-086
- Understands: OOP, inheritance
- Current project state: Writing classes without design principles
- Goal: Professional OOP design

DEPENDENCIES COMPLETED:
- DD-083: OOP Fundamentals - OOP concepts
- DD-085: Inheritance - needed for Liskov

WHAT TO BUILD:
After learning SOLID:
- Refactor code to follow SOLID
- Recognize violations
- Design better classes
- Professional patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-088: Composition vs Inheritance

```
Teach me Composition vs Inheritance - When to Use Each, "Favor Composition", Mixins using Python.

PROJECT CONTEXT:
- Step: DD-088 of 145 (FINAL STEP OF SPRINT 13)
- Sprint: Sprint 13 - Object-Oriented Programming
- Completed steps: DD-001 through DD-087
- Understands: Inheritance, SOLID
- Current project state: Over-using inheritance
- Goal: Better design choices

DEPENDENCIES COMPLETED:
- DD-085: Inheritance - understand inheritance
- DD-087: SOLID - design principles

WHAT TO BUILD:
After learning composition:
- Refactor inheritance to composition
- Understand when to use each
- Implement mixins
- Flexible designs

DELIVERABLE: OOP mastery

NEXT SPRINT: Sprint 14 - Design Patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 14: DESIGN PATTERNS

### DD-089: Design Patterns Overview

```
Teach me Design Patterns Overview - Creational, Structural, Behavioral, When to Use Patterns using Python.

PROJECT CONTEXT:
- Step: DD-089 of 145 (FIRST STEP OF SPRINT 14)
- Sprint: Sprint 14 - Design Patterns
- Completed steps: DD-001 through DD-088 (Sprint 13 complete - OOP mastery)
- Understands: OOP, SOLID principles
- Current project state: Good OOP, no patterns
- Goal: Learn design pattern vocabulary

DEPENDENCIES COMPLETED:
- DD-083: OOP Fundamentals - needed for patterns

WHAT TO BUILD:
After learning pattern overview:
- learning_experiments/design-patterns/ folder
- Understand pattern categories
- When to use patterns vs when not to
- Avoid over-engineering

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-090: Factory Pattern

```
Teach me Factory Pattern - Factory Method, Abstract Factory, When to Use using Python.

PROJECT CONTEXT:
- Step: DD-090 of 145
- Sprint: Sprint 14 - Design Patterns
- Completed steps: DD-001 through DD-089
- Understands: OOP, design patterns concept
- Current project state: Creating objects directly
- Goal: Flexible object creation

DEPENDENCIES COMPLETED:
- DD-083: OOP - classes and objects

WHAT TO BUILD:
After learning Factory:
- Implement Factory Method
- Implement Abstract Factory
- Use in PDM for creating different part types
- Understand benefits

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-091: Strategy Pattern

```
Teach me Strategy Pattern - Strategy Interface, Concrete Strategies, Dependency Injection using Python.

PROJECT CONTEXT:
- Step: DD-091 of 145
- Sprint: Sprint 14 - Design Patterns
- Completed steps: DD-001 through DD-090
- Understands: OOP, composition
- Current project state: Large if/else chains
- Goal: Flexible algorithm selection

DEPENDENCIES COMPLETED:
- DD-088: Composition - strategy uses composition

WHAT TO BUILD:
After learning Strategy:
- Implement strategy pattern
- Payment processing strategies
- Sorting strategies
- Use in PDM for different workflows

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-092: Repository Pattern

```
Teach me Repository Pattern - Abstracting Data Access, Unit of Work using Python/SQLAlchemy.

PROJECT CONTEXT:
- Step: DD-092 of 145
- Sprint: Sprint 14 - Design Patterns
- Completed steps: DD-001 through DD-091
- Understands: OOP, databases
- Current project state: Direct database access in endpoints
- Goal: Abstract data layer

DEPENDENCIES COMPLETED:
- DD-034: SQLAlchemy ORM - database layer
- DD-083: OOP - interfaces/abstraction

WHAT TO BUILD:
After learning Repository:
- Implement repository for each entity
- Unit of Work pattern
- Testable data access
- Clean architecture

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-093: Dependency Injection

```
Teach me Dependency Injection - What is DI, Constructor Injection, FastAPI Dependencies using Python.

PROJECT CONTEXT:
- Step: DD-093 of 145
- Sprint: Sprint 14 - Design Patterns
- Completed steps: DD-001 through DD-092
- Understands: OOP, FastAPI
- Current project state: Tight coupling
- Goal: Loose coupling, testability

DEPENDENCIES COMPLETED:
- DD-083: OOP - dependency concepts
- DD-036: FastAPI - FastAPI DI system

WHAT TO BUILD:
After learning DI:
- Implement DI throughout application
- Use FastAPI Depends()
- Testable code
- Flexible architecture

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-094: Observer Pattern

```
Teach me Observer Pattern - Event-Driven Architecture, Pub/Sub using Python.

PROJECT CONTEXT:
- Step: DD-094 of 145
- Sprint: Sprint 14 - Design Patterns
- Completed steps: DD-001 through DD-093
- Understands: OOP, events
- Current project state: Direct coupling between components
- Goal: Decoupled event system

DEPENDENCIES COMPLETED:
- DD-083: OOP - pattern foundation
- DD-068: Redis Pub/Sub - related concept

WHAT TO BUILD:
After learning Observer:
- Implement observer pattern
- Event system for PDM
- Notifications when parts change
- Decoupled components

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-095: Singleton Pattern

```
Teach me Singleton Pattern - When to Use (and Avoid), Thread Safety using Python.

PROJECT CONTEXT:
- Step: DD-095 of 145
- Sprint: Sprint 14 - Design Patterns
- Completed steps: DD-001 through DD-094
- Understands: OOP
- Current project state: Multiple instances of configuration
- Goal: Single instance pattern

DEPENDENCIES COMPLETED:
- DD-083: OOP - classes

WHAT TO BUILD:
After learning Singleton:
- Implement singleton
- Database connection singleton
- Configuration singleton
- Understand when to avoid
- Thread-safe singleton

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-096: Decorator Pattern

```
Teach me Decorator Pattern - Wrapper Pattern, Python Decorators using Python.

PROJECT CONTEXT:
- Step: DD-096 of 145 (FINAL STEP OF SPRINT 14)
- Sprint: Sprint 14 - Design Patterns
- Completed steps: DD-001 through DD-095
- Understands: OOP, Python decorators
- Current project state: Basic decorators
- Goal: Decorator pattern deeply

DEPENDENCIES COMPLETED:
- DD-083: OOP - wrapping objects
- DD-097: Python Decorators (or learn together)

WHAT TO BUILD:
After learning Decorator:
- Implement decorator pattern
- Enhance objects dynamically
- Compare to Python decorators
- Logging decorators
- Authentication decorators

DELIVERABLE: Design pattern mastery

NEXT SPRINT: Sprint 15 - Advanced Python

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 15: ADVANCED PYTHON

### DD-097: Python Decorators

```
Teach me Python Decorators - Function Decorators, Class Decorators, functools.wraps using Python.

PROJECT CONTEXT:
- Step: DD-097 of 145 (FIRST STEP OF SPRINT 15)
- Sprint: Sprint 15 - Advanced Python
- Completed steps: DD-001 through DD-096 (Sprint 14 complete - design patterns)
- Understands: Functions, closures from DD-011
- Current project state: Using basic decorators
- Goal: Master decorator pattern

DEPENDENCIES COMPLETED:
- None (can learn decorators standalone)

WHAT TO BUILD:
After learning decorators:
- learning_experiments/advanced-python/ folder
- Build timing decorator
- Build authentication decorator
- Build retry decorator
- Decorator with arguments
- Class decorators

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-098: Python Generators

```
Teach me Python Generators - yield Keyword, Generator Expressions, Memory Efficiency using Python.

PROJECT CONTEXT:
- Step: DD-098 of 145
- Sprint: Sprint 15 - Advanced Python
- Completed steps: DD-001 through DD-097
- Understands: Functions, iterators
- Current project state: Loading everything into memory
- Goal: Memory-efficient iteration

DEPENDENCIES COMPLETED:
- None (can learn generators standalone)

WHAT TO BUILD:
After learning generators:
- Build data pipeline with generators
- Fibonacci generator
- File processing generator
- Generator expressions
- Compare memory usage

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-099: Python Context Managers

```
Teach me Python Context Managers - with Statement, __enter__ and __exit__, contextlib using Python.

PROJECT CONTEXT:
- Step: DD-099 of 145
- Sprint: Sprint 15 - Advanced Python
- Completed steps: DD-001 through DD-098
- Understands: Resource management
- Current project state: Manual cleanup
- Goal: Automatic resource management

DEPENDENCIES COMPLETED:
- DD-086: Magic Methods - __enter__, __exit__

WHAT TO BUILD:
After learning context managers:
- Build custom context manager
- Database transaction context manager
- File handling context manager
- Using @contextmanager decorator
- Resource cleanup patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-100: Python Iterators

```
Teach me Python Iterators - Iterator Protocol, __iter__ and __next__, itertools using Python.

PROJECT CONTEXT:
- Step: DD-100 of 145
- Sprint: Sprint 15 - Advanced Python
- Completed steps: DD-001 through DD-099
- Understands: Generators
- Current project state: Using built-in iterators
- Goal: Custom iterators

DEPENDENCIES COMPLETED:
- DD-098: Generators - related to iteration

WHAT TO BUILD:
After learning iterators:
- Implement iterator from scratch
- Custom iterable class
- Iterator vs generator
- itertools patterns
- Infinite iterators

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-101: Python Metaclasses

```
Teach me Python Metaclasses - What are Metaclasses, type(), __new__ vs __init__ using Python.

PROJECT CONTEXT:
- Step: DD-101 of 145
- Sprint: Sprint 15 - Advanced Python
- Completed steps: DD-001 through DD-100
- Understands: Deep OOP
- Current project state: Normal classes only
- Goal: Understand metaclasses (rarely needed)

DEPENDENCIES COMPLETED:
- DD-084: Python OOP - deep class understanding

WHAT TO BUILD:
After learning metaclasses:
- Understand when to use (rarely!)
- Build simple metaclass
- Singleton with metaclass
- ORM understanding (SQLAlchemy uses metaclasses)

NOTE: Advanced topic, skip if not interested

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-102: Python Performance Profiling

```
Teach me Python Profiling - cProfile, line_profiler, memory_profiler using Python.

PROJECT CONTEXT:
- Step: DD-102 of 145
- Sprint: Sprint 15 - Advanced Python
- Completed steps: DD-001 through DD-101
- Understands: Python code, Big O
- Current project state: Code without performance measurement
- Goal: Find and fix bottlenecks

DEPENDENCIES COMPLETED:
- DD-069: Big O - performance concepts

WHAT TO BUILD:
After learning profiling:
- Profile PDM application
- Find slow functions
- Optimize bottlenecks
- Memory profiling
- Before/after comparisons

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-103: Python C++ Integration with pybind11

```
Teach me Python C++ Integration - Why Integrate, pybind11 Basics, Passing Data using Python and C++.

PROJECT CONTEXT:
- Step: DD-103 of 145 (FINAL STEP OF SPRINT 15)
- Sprint: Sprint 15 - Advanced Python
- Completed steps: DD-001 through DD-102
- Understands: Python, C++ basics helpful
- Current project state: Pure Python
- Goal: Understand C++ extension option

DEPENDENCIES COMPLETED:
- DD-001: Computer Architecture - understanding compiled vs interpreted (helpful)

WHAT TO BUILD:
After learning pybind11:
- Wrap simple C++ function
- Performance comparison
- Use cases for C++ integration

NOTE: Advanced topic, can skip

DELIVERABLE: Advanced Python mastery

NEXT SPRINT: Sprint 16 - Advanced FastAPI

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 16: ADVANCED FASTAPI

### DD-104: FastAPI Dependencies Advanced

```
Teach me FastAPI Dependencies Advanced - Dependency Injection System, Reusable Dependencies, Classes as Dependencies using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-104 of 145 (FIRST STEP OF SPRINT 16)
- Sprint: Sprint 16 - Advanced FastAPI
- Completed steps: DD-001 through DD-103 (Sprint 15 complete - Python mastery)
- Understands: FastAPI basics, dependency injection
- Current project state: Basic FastAPI usage
- Goal: Advanced FastAPI patterns

DEPENDENCIES COMPLETED:
- DD-037: FastAPI Advanced - basic dependencies
- DD-093: Dependency Injection - DI concepts

WHAT TO BUILD:
After learning dependencies:
- Extract complex dependencies
- Nested dependencies
- Classes as dependencies
- Dependency overrides for testing

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-105: FastAPI Middleware

```
Teach me FastAPI Middleware - Request/Response Cycle, Custom Middleware using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-105 of 145
- Sprint: Sprint 16 - Advanced FastAPI
- Completed steps: DD-001 through DD-104
- Understands: FastAPI, HTTP cycle
- Current project state: No middleware
- Goal: Request/response processing

DEPENDENCIES COMPLETED:
- DD-009: HTTP - request/response cycle
- DD-036: FastAPI Basics - endpoints

WHAT TO BUILD:
After learning middleware:
- Implement logging middleware
- Timing middleware
- CORS middleware understanding
- Custom headers
- Request ID tracking

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-106: FastAPI Background Tasks

```
Teach me FastAPI Background Tasks - Background Tasks, Celery Overview, When to Use Each using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-106 of 145
- Sprint: Sprint 16 - Advanced FastAPI
- Completed steps: DD-001 through DD-105
- Understands: Async, FastAPI
- Current project state: Synchronous operations blocking requests
- Goal: Offload long-running tasks

DEPENDENCIES COMPLETED:
- DD-037: FastAPI Advanced - background tasks introduction
- DD-041: Python Async - async concepts

WHAT TO BUILD:
After learning background tasks:
- Email sending in background
- Report generation
- Compare FastAPI background tasks vs Celery
- When to use each

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-107: FastAPI Error Handling

```
Teach me FastAPI Error Handling - Exception Handlers, HTTPException, Custom Exceptions using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-107 of 145
- Sprint: Sprint 16 - Advanced FastAPI
- Completed steps: DD-001 through DD-106
- Understands: FastAPI, exceptions
- Current project state: Basic error handling
- Goal: Centralized error handling

DEPENDENCIES COMPLETED:
- DD-036: FastAPI Basics - HTTPException

WHAT TO BUILD:
After learning error handling:
- Custom exception handlers
- Consistent error responses
- Logging errors
- User-friendly error messages
- Error handling middleware

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-108: FastAPI Performance Optimization

```
Teach me FastAPI Performance - Connection Pooling, Caching, Profiling using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-108 of 145 (FINAL STEP OF SPRINT 16)
- Sprint: Sprint 16 - Advanced FastAPI
- Completed steps: DD-001 through DD-107
- Understands: FastAPI, profiling
- Current project state: Working API, unknown performance
- Goal: Optimize API performance

DEPENDENCIES COMPLETED:
- DD-102: Python Profiling - performance tools
- DD-043: Async Database - connection pooling

WHAT TO BUILD:
After learning optimization:
- Profile API endpoints
- Optimize database queries
- Add caching
- Connection pooling tuning
- Performance testing

DELIVERABLE: FastAPI mastery

NEXT SPRINT: Sprint 17 - Caching & Performance

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 17: CACHING & PERFORMANCE

### DD-109: Caching Theory

```
Teach me Caching Theory - What is Caching, Cache Invalidation, Cache Strategies (LRU, LFU) using Python.

PROJECT CONTEXT:
- Step: DD-109 of 145 (FIRST STEP OF SPRINT 17)
- Sprint: Sprint 17 - Caching & Performance
- Completed steps: DD-001 through DD-108 (Sprint 16 complete - FastAPI mastery)
- Understands: Performance concepts
- Current project state: No caching
- Goal: Understand caching principles

DEPENDENCIES COMPLETED:
- DD-069: Big O - performance analysis

WHAT TO BUILD:
After learning caching:
- learning_experiments/caching/ folder
- Implement LRU cache from scratch
- Understand cache invalidation problem
- When to cache vs when not to

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-110: Redis Basics

```
Teach me Redis Basics - Key-Value Store, Data Structures (Strings, Lists, Sets, Hashes), Expiration using Python/Redis.

PROJECT CONTEXT:
- Step: DD-110 of 145
- Sprint: Sprint 17 - Caching & Performance
- Completed steps: DD-001 through DD-109
- Understands: Caching concepts, key-value stores
- Current project state: In-memory caching only
- Goal: Distributed caching with Redis

DEPENDENCIES COMPLETED:
- DD-109: Caching Theory - caching concepts

WHAT TO BUILD:
After learning Redis:
- Install Redis
- Basic operations (GET, SET, DEL)
- Data structures (lists, sets, hashes)
- Expiration (TTL)
- Use cases

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-111: Redis Advanced

```
Teach me Redis Advanced - Sorted Sets, Pub/Sub, Transactions, Lua Scripts using Python/Redis.

PROJECT CONTEXT:
- Step: DD-111 of 145
- Sprint: Sprint 17 - Caching & Performance
- Completed steps: DD-001 through DD-110
- Understands: Redis basics
- Current project state: Basic Redis usage
- Goal: Advanced Redis features

DEPENDENCIES COMPLETED:
- DD-110: Redis Basics - basic operations
- DD-068: Redis Pub/Sub - already covered pub/sub

WHAT TO BUILD:
After learning Redis advanced:
- Sorted sets for leaderboards
- Transactions for atomic operations
- Lua scripts for complex operations
- Advanced patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-112: Cache Patterns

```
Teach me Cache Patterns - Cache-Aside, Write-Through, Write-Behind using Python/Redis/FastAPI.

PROJECT CONTEXT:
- Step: DD-112 of 145
- Sprint: Sprint 17 - Caching & Performance
- Completed steps: DD-001 through DD-111
- Understands: Caching, Redis
- Current project state: Redis available, no patterns
- Goal: Professional caching patterns

DEPENDENCIES COMPLETED:
- DD-109: Caching Theory - strategies
- DD-110: Redis - caching backend

WHAT TO BUILD:
After learning cache patterns:
- Implement cache-aside pattern
- Compare caching strategies
- Cache invalidation strategies
- Use in PDM API

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-113: HTTP Caching Headers

```
Teach me HTTP Caching - Cache-Control, ETag, Last-Modified, Conditional Requests using FastAPI.

PROJECT CONTEXT:
- Step: DD-113 of 145
- Sprint: Sprint 17 - Caching & Performance
- Completed steps: DD-001 through DD-112
- Understands: HTTP, server-side caching
- Current project state: Server-side cache only
- Goal: Browser/client-side caching

DEPENDENCIES COMPLETED:
- DD-009: HTTP - headers
- DD-109: Caching - caching concepts

WHAT TO BUILD:
After learning HTTP caching:
- Add Cache-Control headers
- Implement ETags
- Conditional requests (304 Not Modified)
- Reduce bandwidth

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-114: Database Query Optimization

```
Teach me Query Optimization - Indexing Strategies, N+1 Problem, Query Analysis using PostgreSQL/SQLAlchemy.

PROJECT CONTEXT:
- Step: DD-114 of 145 (FINAL STEP OF SPRINT 17)
- Sprint: Sprint 17 - Caching & Performance
- Completed steps: DD-001 through DD-113
- Understands: SQL, databases
- Current project state: Slow database queries
- Goal: Optimize database performance

DEPENDENCIES COMPLETED:
- DD-032: Database Internals - EXPLAIN ANALYZE (helpful)
- DD-034: SQLAlchemy ORM - ORM queries

WHAT TO BUILD:
After learning query optimization:
- Identify N+1 queries
- Add eager loading
- Optimize indexes
- Analyze query plans
- Measure improvements

DELIVERABLE: Performance-optimized application

NEXT SPRINT: Sprint 18 - File Handling

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 18: FILE HANDLING

### DD-115: File Upload Backend

```
Teach me File Upload - Multipart Form Data, File Validation, Storage Strategies using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-115 of 145 (FIRST STEP OF SPRINT 18)
- Sprint: Sprint 18 - File Handling
- Completed steps: DD-001 through DD-114 (Sprint 17 complete - performance optimized)
- Understands: HTTP, FastAPI
- Current project state: No file handling
- Goal: File upload capability

DEPENDENCIES COMPLETED:
- DD-037: FastAPI Advanced - file uploads introduction
- DD-009: HTTP - multipart form data

WHAT TO BUILD:
After learning file upload:
- File upload endpoint
- Validate file type and size
- Save files securely
- Generate unique filenames
- File metadata storage

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-116: File Storage Strategies

```
Teach me File Storage - Local File Storage, S3/Cloud Storage, File Organization using Python.

PROJECT CONTEXT:
- Step: DD-116 of 145
- Sprint: Sprint 18 - File Handling
- Completed steps: DD-001 through DD-115
- Understands: File I/O, file uploads
- Current project state: Files stored locally
- Goal: Scalable file storage

DEPENDENCIES COMPLETED:
- DD-115: File Upload - uploading files

WHAT TO BUILD:
After learning file storage:
- Organize files in directory structure
- Implement S3 storage (or alternative)
- Abstract storage layer
- Compare local vs cloud storage

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-117: File Download

```
Teach me File Download - Streaming Responses, Content-Disposition Header, Range Requests using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-117 of 145
- Sprint: Sprint 18 - File Handling
- Completed steps: DD-001 through DD-116
- Understands: File storage, HTTP
- Current project state: Can upload, can't download
- Goal: File download capability

DEPENDENCIES COMPLETED:
- DD-115: File Upload - file storage
- DD-009: HTTP - headers

WHAT TO BUILD:
After learning file download:
- File download endpoint
- Streaming for large files
- Proper Content-Type headers
- Inline vs attachment
- Resume downloads (Range requests)

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-118: Image Processing with Pillow

```
Teach me Image Processing - Pillow Library, Thumbnails, Resizing, Format Conversion using Python.

PROJECT CONTEXT:
- Step: DD-118 of 145
- Sprint: Sprint 18 - File Handling
- Completed steps: DD-001 through DD-117
- Understands: File handling
- Current project state: Raw file storage
- Goal: Image processing

DEPENDENCIES COMPLETED:
- DD-115: File Upload - receiving images

WHAT TO BUILD:
After learning image processing:
- Generate thumbnails
- Resize images
- Convert formats
- Image optimization
- Use in PDM for part images

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-119: PDF Generation

```
Teach me PDF Generation - ReportLab, Template-Based PDFs using Python.

PROJECT CONTEXT:
- Step: DD-119 of 145
- Sprint: Sprint 18 - File Handling
- Completed steps: DD-001 through DD-118
- Understands: File generation
- Current project state: No PDF capability
- Goal: Generate PDF reports

DEPENDENCIES COMPLETED:
- None (PDF generation standalone)

WHAT TO BUILD:
After learning PDF generation:
- Generate simple PDFs
- Template-based reports
- Tables and formatting
- Use in PDM for part reports

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-120: Excel Processing with openpyxl

```
Teach me Excel Processing - Reading Excel, Writing Excel, Formatting using Python/openpyxl.

PROJECT CONTEXT:
- Step: DD-120 of 145 (FINAL STEP OF SPRINT 18)
- Sprint: Sprint 18 - File Handling
- Completed steps: DD-001 through DD-119
- Understands: File handling
- Current project state: No Excel capability
- Goal: Import/export Excel files

DEPENDENCIES COMPLETED:
- DD-115: File Upload - uploading Excel files

WHAT TO BUILD:
After learning Excel:
- Read Excel files
- Parse data to database
- Export data to Excel
- Formatting and formulas
- Use in PDM for bulk imports

DELIVERABLE: Complete file handling system

NEXT SPRINT: Sprint 19 - Security

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 19: SECURITY

### DD-121: SQL Injection

```
Teach me SQL Injection - What is SQL Injection, How ORMs Prevent It, Parameterized Queries using Python/SQLAlchemy.

PROJECT CONTEXT:
- Step: DD-121 of 145 (FIRST STEP OF SPRINT 19)
- Sprint: Sprint 19 - Security
- Completed steps: DD-001 through DD-120 (Sprint 18 complete - file handling)
- Understands: SQL, databases
- Current project state: Using ORM (safe by default)
- Goal: Understand SQL injection threat

DEPENDENCIES COMPLETED:
- DD-029: SQL - SQL queries
- DD-034: SQLAlchemy - ORM usage

WHAT TO BUILD:
After learning SQL injection:
- Demonstrate SQL injection vulnerability
- Show how ORM prevents it
- Understand parameterized queries
- Security best practices

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-122: XSS - Cross-Site Scripting

```
Teach me XSS - Reflected XSS, Stored XSS, DOM XSS, Prevention using JavaScript/React.

PROJECT CONTEXT:
- Step: DD-122 of 145
- Sprint: Sprint 19 - Security
- Completed steps: DD-001 through DD-121
- Understands: JavaScript, React
- Current project state: Displaying user input
- Goal: Prevent XSS attacks

DEPENDENCIES COMPLETED:
- DD-012: React - component rendering
- DD-011: JavaScript - DOM manipulation

WHAT TO BUILD:
After learning XSS:
- Demonstrate XSS vulnerability
- Understand React's XSS protection
- dangerouslySetInnerHTML (when and why to avoid)
- Content Security Policy
- Input sanitization

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-123: CSRF - Cross-Site Request Forgery

```
Teach me CSRF - What is CSRF, CSRF Tokens, SameSite Cookies using Python/FastAPI and React.

PROJECT CONTEXT:
- Step: DD-123 of 145
- Sprint: Sprint 19 - Security
- Completed steps: DD-001 through DD-122
- Understands: HTTP, cookies, authentication
- Current project state: No CSRF protection
- Goal: Prevent CSRF attacks

DEPENDENCIES COMPLETED:
- DD-056: Session Management - cookies
- DD-009: HTTP - cookies, headers

WHAT TO BUILD:
After learning CSRF:
- Understand CSRF attack
- Implement CSRF tokens
- SameSite cookie attribute
- CSRF protection with JWT

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-124: Security Headers

```
Teach me Security Headers - X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security using FastAPI.

PROJECT CONTEXT:
- Step: DD-124 of 145
- Sprint: Sprint 19 - Security
- Completed steps: DD-001 through DD-123
- Understands: HTTP headers
- Current project state: Missing security headers
- Goal: Comprehensive HTTP security

DEPENDENCIES COMPLETED:
- DD-009: HTTP - headers
- DD-105: FastAPI Middleware - adding headers

WHAT TO BUILD:
After learning security headers:
- Add all security headers
- Understand what each header does
- Content Security Policy
- Security header testing

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-125: Rate Limiting

```
Teach me Rate Limiting - Token Bucket Algorithm, Rate Limiting Strategies, slowapi using Python/FastAPI.

PROJECT CONTEXT:
- Step: DD-125 of 145
- Sprint: Sprint 19 - Security
- Completed steps: DD-001 through DD-124
- Understands: APIs, Redis
- Current project state: No rate limiting
- Goal: Prevent abuse

DEPENDENCIES COMPLETED:
- DD-036: FastAPI - endpoints to protect
- DD-110: Redis - storage for rate limits

WHAT TO BUILD:
After learning rate limiting:
- Implement rate limiting
- Per-user limits
- Per-endpoint limits
- Rate limit headers
- Handle rate limit exceeded

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-126: Input Validation

```
Teach me Input Validation - Validation Strategies, Pydantic Validators, Sanitization using Python/Pydantic.

PROJECT CONTEXT:
- Step: DD-126 of 145
- Sprint: Sprint 19 - Security
- Completed steps: DD-001 through DD-125
- Understands: Pydantic
- Current project state: Basic validation
- Goal: Comprehensive input validation

DEPENDENCIES COMPLETED:
- DD-016: Pydantic - validation basics

WHAT TO BUILD:
After learning validation:
- Custom Pydantic validators
- Field constraints
- Sanitization vs validation
- Validation errors
- Security through validation

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-127: Secrets Management

```
Teach me Secrets Management - Environment Variables, .env Files, Secret Rotation using Python.

PROJECT CONTEXT:
- Step: DD-127 of 145 (FINAL STEP OF SPRINT 19)
- Sprint: Sprint 19 - Security
- Completed steps: DD-001 through DD-126
- Understands: Configuration management
- Current project state: Secrets in code (bad!)
- Goal: Secure secrets management

DEPENDENCIES COMPLETED:
- DD-006: Python Environment - environment variables

WHAT TO BUILD:
After learning secrets management:
- Move secrets to .env
- Never commit secrets
- Environment-specific configs
- Secret rotation strategies
- Production secrets management

DELIVERABLE: Secure application

NEXT SPRINT: Sprint 20 - Deployment

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 20: DEPLOYMENT

### DD-128: Docker Images

```
Teach me Docker Images - What are Containers, Dockerfile, Images vs Containers using Docker.

PROJECT CONTEXT:
- Step: DD-128 of 145 (FIRST STEP OF SPRINT 20)
- Sprint: Sprint 20 - Deployment
- Completed steps: DD-001 through DD-127 (Sprint 19 complete - security hardened)
- Understands: Linux, virtualization from DD-003
- Current project state: Runs on dev machine only
- Goal: Containerize application

DEPENDENCIES COMPLETED:
- DD-003: Virtualization - containers vs VMs
- DD-004: Linux CLI - Linux commands

WHAT TO BUILD:
After learning Docker:
- learning_experiments/docker/ folder
- Write Dockerfile for backend
- Build Docker image
- Run container
- Understand layers

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-129: Docker Compose

```
Teach me Docker Compose - Multi-Container Apps, docker-compose.yml, Networking using Docker Compose.

PROJECT CONTEXT:
- Step: DD-129 of 145
- Sprint: Sprint 20 - Deployment
- Completed steps: DD-001 through DD-128
- Understands: Docker basics
- Current project state: Manual container management
- Goal: Orchestrate multiple containers

DEPENDENCIES COMPLETED:
- DD-128: Docker Images - containers

WHAT TO BUILD:
After learning Docker Compose:
- docker-compose.yml for full stack
- Backend + Frontend + PostgreSQL + Redis
- Container networking
- Volume management
- One-command startup

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-130: Docker Optimization

```
Teach me Docker Optimization - Layer Caching, Multi-Stage Builds, Image Size using Docker.

PROJECT CONTEXT:
- Step: DD-130 of 145
- Sprint: Sprint 20 - Deployment
- Completed steps: DD-001 through DD-129
- Understands: Docker, Dockerfile
- Current project state: Large, slow Docker images
- Goal: Optimize Docker builds

DEPENDENCIES COMPLETED:
- DD-128: Docker Images - Dockerfile

WHAT TO BUILD:
After learning optimization:
- Multi-stage Dockerfile
- Optimize layer order
- Reduce image size
- Faster builds
- Production-ready images

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-131: Nginx Reverse Proxy

```
Teach me Nginx - What is Reverse Proxy, Load Balancing, SSL Termination using Nginx.

PROJECT CONTEXT:
- Step: DD-131 of 145
- Sprint: Sprint 20 - Deployment
- Completed steps: DD-001 through DD-130
- Understands: HTTP, servers
- Current project state: Direct access to backend
- Goal: Reverse proxy for production

DEPENDENCIES COMPLETED:
- DD-009: HTTP - web servers
- DD-129: Docker Compose - can add nginx container

WHAT TO BUILD:
After learning Nginx:
- Configure Nginx as reverse proxy
- Serve frontend static files
- Proxy to backend API
- Add to Docker Compose

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-132: SSL/TLS - HTTPS

```
Teach me SSL/TLS - How HTTPS Works, Certificates, Let's Encrypt using Nginx/certbot.

PROJECT CONTEXT:
- Step: DD-132 of 145
- Sprint: Sprint 20 - Deployment
- Completed steps: DD-001 through DD-131
- Understands: HTTP, cryptography basics
- Current project state: HTTP only (insecure)
- Goal: HTTPS for production

DEPENDENCIES COMPLETED:
- DD-052: Digital Signatures - cryptography concepts (helpful but can learn SSL practically)
- DD-131: Nginx - web server

WHAT TO BUILD:
After learning SSL:
- Understand TLS handshake
- Generate SSL certificate
- Configure Nginx for HTTPS
- Auto-renewal with certbot

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-133: CI/CD with GitLab CI

```
Teach me CI/CD - Pipeline Stages, Runners, Automated Deployment using GitLab CI.

PROJECT CONTEXT:
- Step: DD-133 of 145
- Sprint: Sprint 20 - Deployment
- Completed steps: DD-001 through DD-132
- Understands: Git, Docker, testing
- Current project state: Manual deployment
- Goal: Automated CI/CD pipeline

DEPENDENCIES COMPLETED:
- DD-005: Git - version control
- DD-128: Docker - containerization
- DD-021: pytest - testing (for CI)

WHAT TO BUILD:
After learning CI/CD:
- .gitlab-ci.yml file
- Pipeline: build → test → deploy
- Automated testing on commits
- Deploy on merge to main
- Full automation

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-134: Structured Logging

```
Teach me Structured Logging - Why Structured Logs, structlog, Log Levels using Python.

PROJECT CONTEXT:
- Step: DD-134 of 145
- Sprint: Sprint 20 - Deployment
- Completed steps: DD-001 through DD-133
- Understands: Logging basics
- Current project state: Print statements
- Goal: Production-grade logging

DEPENDENCIES COMPLETED:
- None (logging is standalone)

WHAT TO BUILD:
After learning logging:
- Configure structlog
- Log levels (DEBUG, INFO, WARNING, ERROR)
- Structured log format (JSON)
- Correlation IDs
- Log aggregation ready

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-135: Monitoring and Observability

```
Teach me Monitoring - Metrics (Prometheus), Visualization (Grafana), Alerting using Prometheus/Grafana.

PROJECT CONTEXT:
- Step: DD-135 of 145 (FINAL STEP OF SPRINT 20 AND CORE CURRICULUM)
- Sprint: Sprint 20 - Deployment
- Completed steps: DD-001 through DD-134
- Understands: HTTP, metrics
- Current project state: No visibility into production
- Goal: Monitor application health

DEPENDENCIES COMPLETED:
- DD-009: HTTP - metrics endpoints
- DD-129: Docker Compose - add monitoring containers

WHAT TO BUILD:
After learning monitoring:
- Expose Prometheus metrics
- Set up Prometheus
- Create Grafana dashboards
- Set up alerts
- Production observability

DELIVERABLE: Production-ready deployment with monitoring

NEXT: Sprint 21+ (Extensible based on needs)

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

## SPRINT 21+: EXTENSIBLE FEATURES

### DD-136: Tree Structures and Recursive Queries

```
Teach me Tree Structures - Tree Storage in DB, Recursive Queries, Materialized Path using PostgreSQL/SQLAlchemy.

PROJECT CONTEXT:
- Step: DD-136 of 145
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum (DD-001 through DD-135)
- Understands: Trees from DD-073, SQL
- Current project state: Flat data structures only
- Goal: Hierarchical data (Bill of Materials)

DEPENDENCIES COMPLETED:
- DD-073: Binary Trees - tree concepts
- DD-030: SQL Advanced - recursive CTEs

WHAT TO BUILD:
After learning tree structures:
- Store BOM in database
- Recursive queries for tree traversal
- Materialized path pattern
- Tree operations

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-137: State Machines and Workflows

```
Teach me State Machines - State Machine Pattern, Workflow Engines, Approval Workflows using Python.

PROJECT CONTEXT:
- Step: DD-137 of 145
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum
- Understands: OOP, design patterns
- Current project state: No workflow management
- Goal: Change management workflows

DEPENDENCIES COMPLETED:
- DD-091: Strategy Pattern - state transitions
- DD-083: OOP - state pattern

WHAT TO BUILD:
After learning state machines:
- Implement state machine for part approval
- Workflow engine
- State transitions
- Approval chains

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-138: Serial Communication and Hardware

```
Teach me Serial Communication - RS-232, pyserial, Protocols (Modbus), Hardware Interfacing using Python.

PROJECT CONTEXT:
- Step: DD-138 of 145
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum
- Understands: Binary, protocols
- Current project state: Software only
- Goal: DNC machine communication

DEPENDENCIES COMPLETED:
- DD-001: Binary - understanding hardware communication
- DD-008: Networking - protocol concepts

WHAT TO BUILD:
After learning serial communication:
- Read from serial port
- Implement simple protocol
- CNC machine communication
- Error handling

NOTE: Requires hardware access

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-139: Message Queues and Async Processing

```
Teach me Message Queues - RabbitMQ/Redis Queues, Celery, Background Jobs using Python/Celery.

PROJECT CONTEXT:
- Step: DD-139 of 145
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum
- Understands: Async, Redis
- Current project state: Background tasks only in FastAPI
- Goal: Distributed task queue

DEPENDENCIES COMPLETED:
- DD-041: Python Async - async concepts
- DD-110: Redis - can be used as broker

WHAT TO BUILD:
After learning message queues:
- Set up Celery with Redis
- Distributed task processing
- Task scheduling
- Result backends
- ERP integration patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-140: Git Branching Strategies

```
Teach me Git Branching - Git Flow, Trunk-Based Development, Merge Strategies using Git.

PROJECT CONTEXT:
- Step: DD-140 of 145
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum
- Understands: Git basics
- Current project state: Working on main branch
- Goal: Team collaboration patterns

DEPENDENCIES COMPLETED:
- DD-005: Git - version control basics (not internals needed)

WHAT TO BUILD:
After learning branching:
- Implement Git Flow
- Feature branches
- Release branches
- Hotfix process
- Team workflow

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-141: Microservices Architecture

```
Teach me Microservices - Service Decomposition, API Gateway, Service Discovery using Python/Docker.

PROJECT CONTEXT:
- Step: DD-141 of 145
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum
- Understands: APIs, Docker
- Current project state: Monolithic application
- Goal: Break into microservices

DEPENDENCIES COMPLETED:
- DD-036: FastAPI - building services
- DD-129: Docker Compose - orchestration

WHAT TO BUILD:
After learning microservices:
- Split monolith into services
- API gateway
- Service-to-service communication
- Distributed system patterns

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-142: Code Splitting and Performance

```
Teach me Code Splitting - Lazy Loading, Dynamic Imports, Performance Optimization using React/Vite.

PROJECT CONTEXT:
- Step: DD-142 of 145
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum
- Understands: React, bundling
- Current project state: Large frontend bundle
- Goal: Faster load times

DEPENDENCIES COMPLETED:
- DD-012: React - components
- DD-058: Project Structure - organization

WHAT TO BUILD:
After learning code splitting:
- Implement lazy loading
- Route-based splitting
- Component-based splitting
- Measure performance improvements

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-143: OWASP Top 10 Security Audit

```
Teach me OWASP Top 10 - Security Vulnerabilities, Testing, Mitigation using security tools.

PROJECT CONTEXT:
- Step: DD-143 of 145
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum including Sprint 19 (Security)
- Understands: Common vulnerabilities
- Current project state: Basic security
- Goal: Comprehensive security audit

DEPENDENCIES COMPLETED:
- DD-121 through DD-127: Security fundamentals

WHAT TO BUILD:
After learning OWASP Top 10:
- Audit application against OWASP Top 10
- Penetration testing
- Security scanning tools
- Fix vulnerabilities
- Security documentation

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-144: Horizontal Scaling and Load Balancing

```
Teach me Horizontal Scaling - Load Balancing, Session Affinity, Scaling Strategies using Nginx/Docker.

PROJECT CONTEXT:
- Step: DD-144 of 145
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum
- Understands: Deployment, Nginx
- Current project state: Single server
- Goal: Scale to multiple servers

DEPENDENCIES COMPLETED:
- DD-131: Nginx - reverse proxy, load balancing
- DD-129: Docker - containers

WHAT TO BUILD:
After learning scaling:
- Multiple backend instances
- Load balancer configuration
- Stateless sessions
- Database connection pooling at scale
- Health checks

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### DD-145: Advanced Data Structures

```
Teach me Advanced Data Structures - Tries, Heaps, Bloom Filters, Skip Lists using Python.

PROJECT CONTEXT:
- Step: DD-145 of 145 (FINAL TOPIC)
- Sprint: Sprint 21+ - Extensible
- Completed steps: Core curriculum including Sprint 11 (DS&A)
- Understands: Basic data structures
- Current project state: Standard data structures only
- Goal: Specialized data structures for specific problems

DEPENDENCIES COMPLETED:
- DD-070 through DD-076: Basic data structures

WHAT TO BUILD:
After learning advanced structures:
- Implement trie for autocomplete
- Priority queue with heap
- Bloom filter for set membership
- Skip list as alternative to balanced trees
- Use cases in PDM

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

# END OF CURRICULUM

**Total: 145 Prompts**

- Sprint 0 (Launchpad): 7 prompts
- Sprint 1 (Walking Skeleton): 6 prompts
- Sprint 2 (Type Safety): 6 prompts
- Sprint 3 (TDD): 7 prompts
- Sprint 4 (Database): 8 prompts
- Sprint 5 (CRUD API): 5 prompts
- Sprint 6 (Async): 6 prompts
- Sprint 7 (State Management): 5 prompts
- Sprint 8 (Auth): 7 prompts
- Sprint 9 (Frontend Architecture): 6 prompts
- Sprint 10 (Real-time): 5 prompts
- Sprint 11 (DS&A): 8 prompts
- Sprint 12 (Algorithms): 6 prompts
- Sprint 13 (OOP): 6 prompts
- Sprint 14 (Design Patterns): 8 prompts
- Sprint 15 (Advanced Python): 7 prompts
- Sprint 16 (Advanced FastAPI): 5 prompts
- Sprint 17 (Caching): 6 prompts
- Sprint 18 (File Handling): 6 prompts
- Sprint 19 (Security): 7 prompts
- Sprint 20 (Deployment): 8 prompts
- Sprint 21+ (Extensible): 10 prompts

All prompts include:

- Project context
- Explicit dependencies
- What to build
- Ready to paste with meta-prompt
