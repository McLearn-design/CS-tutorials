You're absolutely right - I jumped to GPU/graphics too early! Let me completely rebuild the curriculum with proper ordering:

**Problems with current order:**

1. OpenGL at GC-041 but need linear algebra first
2. CUDA at GC-070 but need to understand CPU, memory, pointers first
3. Missing: debugging, testing, build systems, algorithms
4. Graphics needs math foundation
5. GPU needs CPU understanding first

---

# COMPLETE REORDERED CURRICULUM (~140 topics)

## DIFFICULTY PROGRESSION:

- **Sprints 0-5:** Super high-level, safe C++ (easiest)
- **Sprints 6-10:** Tools, testing, OOP (still easy)
- **Sprints 11-13:** Math, algorithms (moderate)
- **Sprints 14-15:** Visualization with math (moderate)
- **Sprints 16-17:** Concurrency concepts (getting harder)
- **Sprints 18-20:** Memory, pointers, CPU architecture (harder)
- **Sprints 21-23:** GPU programming - now ready! (hard)
- **Sprints 24-25:** Advanced graphics (hard)
- **Sprints 26-27:** AI/ML (hard)
- **Sprints 28+:** Production, extreme optimization (hardest)

---

## SPRINT 0: HELLO WORLD (5 topics) - EASIEST

**GC-001: C++ Environment Setup**

```
DEPENDENCIES: None
DIFFICULTY: ⭐☆☆☆☆ (Easiest - just get started!)
```

**GC-002: Variables and Basic Types**

```
DEPENDENCIES: GC-001
DIFFICULTY: ⭐☆☆☆☆
```

**GC-003: Control Flow**

```
DEPENDENCIES: GC-002
DIFFICULTY: ⭐☆☆☆☆
```

**GC-004: Functions**

```
DEPENDENCIES: GC-003
DIFFICULTY: ⭐☆☆☆☆
```

**GC-005: Compiling Programs**

```
DEPENDENCIES: GC-004
DIFFICULTY: ⭐☆☆☆☆
```

---

## SPRINT 1: FILE I/O & VECTORS (10 topics)

**GC-006: Reading Files with ifstream**

```
DEPENDENCIES: GC-005
DIFFICULTY: ⭐☆☆☆☆
```

**GC-007: String Manipulation**

```
DEPENDENCIES: GC-006
DIFFICULTY: ⭐☆☆☆☆
```

**GC-008: Reading Line by Line**

```
DEPENDENCIES: GC-007
DIFFICULTY: ⭐☆☆☆☆
```

**GC-009: Basic Error Handling**

```
DEPENDENCIES: GC-008
DIFFICULTY: ⭐☆☆☆☆
```

**GC-010: Vectors - Dynamic Arrays**

```
DEPENDENCIES: GC-008
DIFFICULTY: ⭐☆☆☆☆
```

**GC-011: Range-Based For Loops**

```
DEPENDENCIES: GC-010
DIFFICULTY: ⭐☆☆☆☆
```

**GC-012: The auto Keyword**

```
DEPENDENCIES: GC-011
DIFFICULTY: ⭐☆☆☆☆
```

**GC-013: String Operations Deep Dive**

```
DEPENDENCIES: GC-007
DIFFICULTY: ⭐☆☆☆☆
```

**GC-014: Output Formatting**

```
DEPENDENCIES: GC-002
DIFFICULTY: ⭐☆☆☆☆
```

**GC-015: Writing to Files**

```
DEPENDENCIES: GC-014
DIFFICULTY: ⭐☆☆☆☆
```

---

## SPRINT 2: PARSING & STRUCTURES (12 topics)

**GC-016 through GC-027** (same as before)

```
DIFFICULTY: ⭐⭐☆☆☆ (Still easy, building on basics)
```

---

## SPRINT 3: PYTHON INTEGRATION (10 topics)

**GC-028 through GC-037** (same as before)

```
DIFFICULTY: ⭐⭐☆☆☆
```

---

## SPRINT 4: TOOLS & DEBUGGING (12 topics) - STILL HIGH-LEVEL

**GC-038: Introduction to GDB Debugger**

```
Teach me GDB Basics - Setting Breakpoints, Stepping Through Code, Inspecting Variables using GDB.

DEPENDENCIES: GC-005 (can compile programs)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-039: Advanced GDB**

```
Teach me Advanced GDB - Watchpoints, Conditional Breakpoints, Core Dumps using GDB.

DEPENDENCIES: GC-038
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-040: CMake Deep Dive**

```
Teach me Advanced CMake - Variables, Functions, find_package, Modern CMake Patterns.

DEPENDENCIES: GC-031 (basic CMake)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-041: Google Test Framework**

```
Teach me Google Test - Writing Unit Tests, Test Fixtures, Assertions using C++/gtest.

DEPENDENCIES: GC-004 (functions to test)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-042: Test-Driven Development**

```
Teach me TDD in C++ - Red-Green-Refactor, Writing Tests First using C++/gtest.

DEPENDENCIES: GC-041
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-043: Mocking with Google Mock**

```
Teach me Google Mock - Mock Objects, Expectations, Testing with Dependencies using C++/gmock.

DEPENDENCIES: GC-042
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-044: Code Coverage**

```
Teach me Code Coverage - gcov, lcov, Measuring Test Coverage using C++.

DEPENDENCIES: GC-041
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-045: Static Analysis**

```
Teach me Static Analysis - clang-tidy, cppcheck, Finding Bugs Before Runtime using C++.

DEPENDENCIES: GC-005
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-046: Documentation with Doxygen**

```
Teach me Doxygen - Documenting Code, Generating Documentation using C++/Doxygen.

DEPENDENCIES: GC-028 (header files to document)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-047: Version Control Integration**

```
Teach me Git for C++ Projects - .gitignore, Submodules, Git LFS using Git/C++.

DEPENDENCIES: None (Git basics assumed)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-048: Build Automation**

```
Teach me Build Scripts - Shell Scripts, Makefiles, Automation using Bash/Make.

DEPENDENCIES: GC-030
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-049: Continuous Integration Basics**

```
Teach me CI for C++ - GitHub Actions, Automated Testing using CI/CD.

DEPENDENCIES: GC-041, GC-048
DIFFICULTY: ⭐⭐☆☆☆
```

---

## SPRINT 5: OBJECT-ORIENTED PROGRAMMING (10 topics)

**GC-050: Classes - From Structs to Classes**

```
Teach me C++ Classes - Converting Structs to Classes, Encapsulation, Access Specifiers using C++.

DEPENDENCIES: GC-018 (structs)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-051: Constructors**

```
Teach me Constructors - Default, Parameterized, Initialization Lists using C++.

DEPENDENCIES: GC-050
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-052: Destructors and RAII Introduction**

```
Teach me Destructors - Cleanup, RAII Pattern Introduction using C++.

DEPENDENCIES: GC-051
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-053: Member Functions**

```
Teach me Member Functions - Methods, const Methods, Static Methods using C++.

DEPENDENCIES: GC-050
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-054: Operator Overloading Basics**

```
Teach me Operator Overloading - Overloading +, -, ==, << for Custom Types using C++.

DEPENDENCIES: GC-053
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-055: Inheritance Basics**

```
Teach me Inheritance - Base and Derived Classes, Access Control using C++.

DEPENDENCIES: GC-050
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-056: Virtual Functions and Polymorphism**

```
Teach me Polymorphism - Virtual Functions, Override, Pure Virtual using C++.

DEPENDENCIES: GC-055
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-057: Abstract Classes and Interfaces**

```
Teach me Abstract Classes - Pure Virtual Functions, Interface Design using C++.

DEPENDENCIES: GC-056
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-058: Multiple Inheritance**

```
Teach me Multiple Inheritance - Diamond Problem, Virtual Inheritance using C++.

DEPENDENCIES: GC-055
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-059: Class Design Patterns**

```
Teach me Design Patterns - Factory, Strategy, RAII using C++.

DEPENDENCIES: GC-057
DIFFICULTY: ⭐⭐⭐☆☆
```

---

## SPRINT 6: TEMPLATES & GENERIC PROGRAMMING (8 topics)

**GC-060: Function Templates**

```
Teach me Function Templates - Generic Functions, Template Parameters using C++.

DEPENDENCIES: GC-004 (functions)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-061: Class Templates**

```
Teach me Class Templates - Generic Classes, Template Instantiation using C++.

DEPENDENCIES: GC-050 (classes), GC-060
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-062: Template Specialization**

```
Teach me Template Specialization - Full and Partial Specialization using C++.

DEPENDENCIES: GC-061
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-063: Variadic Templates**

```
Teach me Variadic Templates - Parameter Packs, Perfect Forwarding using C++.

DEPENDENCIES: GC-060
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-064: Type Traits**

```
Teach me Type Traits - std::is_same, std::enable_if, Compile-Time Type Checking using C++.

DEPENDENCIES: GC-062
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-065: constexpr Programming**

```
Teach me constexpr - Compile-Time Computation, constexpr Functions using C++.

DEPENDENCIES: GC-060
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-066: Template Metaprogramming Basics**

```
Teach me Template Metaprogramming - Compile-Time Calculations using C++.

DEPENDENCIES: GC-064
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-067: Concepts (C++20)**

```
Teach me C++ Concepts - Constraining Templates, Readable Generic Code using C++20.

DEPENDENCIES: GC-064
DIFFICULTY: ⭐⭐⭐☆☆
```

---

## SPRINT 7: MODERN C++ FEATURES (10 topics)

**GC-068: Lambda Functions**

```
Teach me Lambdas - Anonymous Functions, Captures, mutable using C++.

DEPENDENCIES: GC-004 (functions)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-069: STL Algorithms with Lambdas**

```
Teach me STL Algorithms - std::for_each, std::transform, std::sort with Lambdas using C++.

DEPENDENCIES: GC-068, GC-010 (vectors)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-070: Smart Pointers - unique_ptr**

```
Teach me unique_ptr - Exclusive Ownership, RAII, Moving Ownership using C++.

DEPENDENCIES: GC-052 (RAII concept)
DIFFICULTY: ⭐⭐⭐☆☆
NOTE: Learning smart pointers BEFORE raw pointers!
```

**GC-071: Smart Pointers - shared_ptr and weak_ptr**

```
Teach me shared_ptr - Shared Ownership, Reference Counting, Avoiding Cycles using C++.

DEPENDENCIES: GC-070
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-072: Move Semantics**

```
Teach me Move Semantics - Rvalue References, std::move, Move Constructors using C++.

DEPENDENCIES: GC-051 (constructors)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-073: Perfect Forwarding**

```
Teach me Perfect Forwarding - std::forward, Universal References using C++.

DEPENDENCIES: GC-072
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-074: Exception Handling**

```
Teach me Exceptions - try/catch, throw, Exception Safety using C++.

DEPENDENCIES: GC-009 (basic error handling)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-075: Exception Safety Guarantees**

```
Teach me Exception Safety - Basic, Strong, No-throw Guarantees using C++.

DEPENDENCIES: GC-074
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-076: RAII and Resource Management**

```
Teach me RAII Pattern - Resource Acquisition, Automatic Cleanup using C++.

DEPENDENCIES: GC-052, GC-070
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-077: C++17/20 Features Overview**

```
Teach me Modern C++ Features - std::optional, std::variant, Ranges using C++17/20.

DEPENDENCIES: GC-025 (optional introduction)
DIFFICULTY: ⭐⭐⭐☆☆
```

---

## SPRINT 8: ALGORITHMS & DATA STRUCTURES (12 topics)

**GC-078: Algorithm Complexity - Big O**

```
Teach me Big O Notation - Time/Space Complexity, Analysis using C++.

DEPENDENCIES: GC-069 (algorithms)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-079: Sorting Algorithms**

```
Teach me Sorting - Bubble, Insertion, Quick, Merge Sort using C++.

DEPENDENCIES: GC-078
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-080: Binary Search**

```
Teach me Binary Search - Search in Sorted Data, std::binary_search using C++.

DEPENDENCIES: GC-079
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-081: Linked Lists**

```
Teach me Linked Lists - Implementation, vs Vectors using C++.

DEPENDENCIES: GC-010 (vectors)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-082: Stacks and Queues**

```
Teach me Stacks/Queues - LIFO, FIFO, std::stack, std::queue using C++.

DEPENDENCIES: GC-010
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-083: Sets and Maps**

```
Teach me Sets/Maps - std::set, std::map, std::unordered_map using C++.

DEPENDENCIES: GC-017 (basic map)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-084: Hash Tables Deep Dive**

```
Teach me Hash Tables - Hash Functions, Collisions, std::unordered_map Internals using C++.

DEPENDENCIES: GC-083
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-085: Trees - Binary Trees**

```
Teach me Binary Trees - Tree Traversal, Implementation using C++.

DEPENDENCIES: GC-081 (linked structures)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-086: Binary Search Trees**

```
Teach me BST - Insertion, Deletion, Search using C++.

DEPENDENCIES: GC-085
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-087: Graphs**

```
Teach me Graphs - Adjacency List/Matrix, BFS, DFS using C++.

DEPENDENCIES: GC-082 (queues), GC-083 (maps)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-088: Graph Algorithms**

```
Teach me Graph Algorithms - Dijkstra, A*, Shortest Path using C++.

DEPENDENCIES: GC-087
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-089: Dynamic Programming**

```
Teach me Dynamic Programming - Memoization, Tabulation using C++.

DEPENDENCIES: GC-078
DIFFICULTY: ⭐⭐⭐⭐☆
```

---

## SPRINT 9: LINEAR ALGEBRA & MATH (10 topics) - PREREQUISITES FOR GRAPHICS

**GC-090: Math Functions Library**

```
Teach me cmath - sqrt, pow, sin, cos, Trigonometry using C++.

DEPENDENCIES: GC-002 (variables)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-091: 2D Vectors**

```
Teach me 2D Vectors - Vector Addition, Subtraction, Magnitude using C++.

DEPENDENCIES: GC-090, GC-050 (classes)
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-092: 3D Vectors**

```
Teach me 3D Vectors - 3D Operations, Dot Product, Cross Product using C++.

DEPENDENCIES: GC-091
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-093: Vector Normalization**

```
Teach me Vector Normalization - Unit Vectors, Direction Vectors using C++.

DEPENDENCIES: GC-092
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-094: Matrices - 2D**

```
Teach me 2D Matrices - Matrix Addition, Multiplication using C++.

DEPENDENCIES: GC-091
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-095: Matrices - 3D Transformations**

```
Teach me 3D Matrices - Translation, Rotation, Scaling using C++.

DEPENDENCIES: GC-094, GC-092
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-096: Matrix Library (GLM)**

```
Teach me GLM Library - Ready-Made Math for Graphics using C++/GLM.

DEPENDENCIES: GC-095
DIFFICULTY: ⭐⭐☆☆☆
NOTE: Now we can use high-level math library!
```

**GC-097: Coordinate Systems**

```
Teach me Coordinate Systems - Local, World, View, Clip Space using Concepts.

DEPENDENCIES: GC-095
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-098: Quaternions Basics**

```
Teach me Quaternions - Rotation Without Gimbal Lock using C++/GLM.

DEPENDENCIES: GC-095
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-099: Geometric Calculations**

```
Teach me Geometry - Distance, Angles, Intersection Tests using C++.

DEPENDENCIES: GC-092
DIFFICULTY: ⭐⭐⭐☆☆
```

---

## SPRINT 10: BASIC 3D GRAPHICS (10 topics) - NOW WE HAVE MATH!

**GC-100: OpenGL Environment Setup**

```
Teach me OpenGL Setup - GLFW, GLAD, Opening a Window using C++/OpenGL.

DEPENDENCIES: GC-096 (math library ready), GC-040 (CMake for linking libraries)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-101: Drawing Your First Triangle**

```
Teach me OpenGL Basics - VBO, VAO, Drawing Primitives using C++/OpenGL.

DEPENDENCIES: GC-100
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-102: Shaders Introduction**

```
Teach me Shaders - Vertex and Fragment Shaders, GLSL Basics using OpenGL/GLSL.

DEPENDENCIES: GC-101
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-103: Colors and Uniforms**

```
Teach me Uniforms - Passing Data to Shaders, Changing Colors using OpenGL/GLSL.

DEPENDENCIES: GC-102
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-104: Transformations in OpenGL**

```
Teach me Transformations - Model, View, Projection Matrices using OpenGL/GLM.

DEPENDENCIES: GC-095 (matrices), GC-103
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-105: Camera System**

```
Teach me Camera - Look-At Matrix, Perspective Projection using OpenGL/GLM.

DEPENDENCIES: GC-104
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-106: Drawing 3D Lines**

```
Teach me Line Rendering - Line Strips, Visualizing G-code Paths using OpenGL.

DEPENDENCIES: GC-105
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-107: Interactive Camera**

```
Teach me Camera Controls - Keyboard/Mouse Input, FPS Camera using OpenGL/GLFW.

DEPENDENCIES: GC-105
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-108: Depth Testing**

```
Teach me Depth Buffer - Z-Buffer, Correct 3D Rendering using OpenGL.

DEPENDENCIES: GC-106
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-109: Basic Lighting**

```
Teach me Lighting - Ambient, Diffuse, Phong Model using OpenGL/GLSL.

DEPENDENCIES: GC-092 (vectors for normals), GC-108
DIFFICULTY: ⭐⭐⭐☆☆
```

---

## SPRINT 11: CONCURRENCY BASICS (10 topics)

**GC-110: Concurrency Concepts**

```
Teach me Concurrency - Threads vs Processes, When to Parallelize using Concepts.

DEPENDENCIES: None (conceptual)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-111: std::thread Basics**

```
Teach me Threading - Creating Threads, Joining Threads using C++.

DEPENDENCIES: GC-110
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-112: Race Conditions**

```
Teach me Race Conditions - Data Races, Why They're Bad using C++.

DEPENDENCIES: GC-111
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-113: Mutexes**

```
Teach me Mutex - std::mutex, Protecting Shared Data using C++.

DEPENDENCIES: GC-112
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-114: Lock Guards**

```
Teach me Lock Guards - RAII Locking, std::lock_guard using C++.

DEPENDENCIES: GC-113, GC-076 (RAII)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-115: Parallel G-code Analysis**

```
Teach me Parallel Processing - Processing Segments in Parallel using C++.

DEPENDENCIES: GC-114, GC-027 (parser)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-116: std::async and Futures**

```
Teach me Async - std::async, std::future, Task-Based Parallelism using C++.

DEPENDENCIES: GC-111
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-117: Thread Pools**

```
Teach me Thread Pools - Reusing Threads, Work Queue using C++.

DEPENDENCIES: GC-114
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-118: Condition Variables**

```
Teach me Condition Variables - std::condition_variable, Producer-Consumer using C++.

DEPENDENCIES: GC-113
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-119: Atomic Operations Basics**

```
Teach me Atomics - std::atomic, Lock-Free Counters using C++.

DEPENDENCIES: GC-112
DIFFICULTY: ⭐⭐⭐⭐☆
```

---

## SPRINT 12: MEMORY FUNDAMENTALS (10 topics) - NOW LEARNING POINTERS

**GC-120: Understanding Memory Addresses**

```
Teach me Memory Addresses - What is Memory, Addresses, Hexadecimal using C++.

DEPENDENCIES: None (builds on DD-001 if completed, but can learn standalone)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-121: Pointers - The Basics**

```
Teach me Pointers - Pointer Syntax, Dereferencing, nullptr using C++.

DEPENDENCIES: GC-120
DIFFICULTY: ⭐⭐⭐☆☆
NOTE: Finally learning raw pointers, after understanding smart pointers!
```

**GC-122: Pointers and Arrays**

```
Teach me Pointer Arithmetic - Arrays as Pointers, Pointer Increment using C++.

DEPENDENCIES: GC-121
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-123: Dynamic Memory - new and delete**

```
Teach me Dynamic Memory - new, delete, Memory Leaks using C++.

DEPENDENCIES: GC-121
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-124: Memory Leaks and Valgrind**

```
Teach me Memory Debugging - Valgrind, Detecting Leaks using C++/Valgrind.

DEPENDENCIES: GC-123
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-125: Raw Pointers vs Smart Pointers**

```
Teach me Pointer Comparison - When to Use Each, Ownership using C++.

DEPENDENCIES: GC-070 (smart pointers), GC-123 (raw pointers)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-126: References vs Pointers**

```
Teach me Pointers vs References - Differences, When to Use Each using C++.

DEPENDENCIES: GC-023 (references), GC-121 (pointers)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-127: Function Pointers**

```
Teach me Function Pointers - Callbacks, Function Pointers vs Lambdas using C++.

DEPENDENCIES: GC-121
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-128: Double Pointers**

```
Teach me Double Pointers - Pointer to Pointer, Dynamic 2D Arrays using C++.

DEPENDENCIES: GC-122
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-129: C-Style Strings**

```
Teach me C Strings - char arrays, String Functions, vs std::string using C++.

DEPENDENCIES: GC-122
DIFFICULTY: ⭐⭐⭐☆☆
```

---

## SPRINT 13: CPU ARCHITECTURE UNDERSTANDING (10 topics)

**GC-130: How Programs Execute**

```
Teach me Program Execution - Compilation to Execution, Machine Code using C++.

DEPENDENCIES: GC-005 (compilation)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-131: CPU Basics**

```
Teach me CPU Fundamentals - Registers, ALU, Control Unit using Concepts.

DEPENDENCIES: None (builds on DD-001 if completed)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-132: Instruction Pipeline**

```
Teach me CPU Pipeline - Fetch, Decode, Execute, Pipelining using Concepts.

DEPENDENCIES: GC-131
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-133: Memory Hierarchy**

```
Teach me Memory Hierarchy - Registers, Cache, RAM, Disk using Concepts.

DEPENDENCIES: GC-131
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-134: CPU Cache**

```
Teach me Cache - L1/L2/L3 Cache, Cache Lines, Cache Misses using Concepts.

DEPENDENCIES: GC-133
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-135: Cache-Friendly Code**

```
Teach me Cache Optimization - Locality, Sequential Access, Measuring Cache Misses using C++.

DEPENDENCIES: GC-134
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-136: Branch Prediction**

```
Teach me Branch Prediction - Conditional Branches, Misprediction Cost using C++.

DEPENDENCIES: GC-132
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-137: Data-Oriented Design**

```
Teach me DOD - Structure of Arrays vs Array of Structures using C++.

DEPENDENCIES: GC-135
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-138: Memory Alignment**

```
Teach me Memory Alignment - alignas, alignof, Why Alignment Matters using C++.

DEPENDENCIES: GC-120 (memory addresses)
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-139: Profiling with perf**

```
Teach me Linux perf - CPU Profiling, Cache Miss Analysis using perf.

DEPENDENCIES: GC-134
DIFFICULTY: ⭐⭐⭐⭐☆
```

---

## SPRINT 14: SIMD & CPU PARALLELISM (8 topics)

**GC-140: SIMD Concepts**

```
Teach me SIMD - Single Instruction Multiple Data, Vector Operations using Concepts.

DEPENDENCIES: GC-131 (CPU basics)
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-141: Compiler Auto-Vectorization**

```
Teach me Auto-Vectorization - Compiler Optimization, -O3 -march=native using C++.

DEPENDENCIES: GC-140
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-142: SSE Intrinsics**

```
Teach me SSE - Intrinsics, Vector Addition, 4-wide Operations using C++.

DEPENDENCIES: GC-140
DIFFICULTY: ⭐⭐⭐⭐⭐
```

**GC-143: AVX Intrinsics**

```
Teach me AVX - 8-wide Operations, AVX2, AVX-512 using C++.

DEPENDENCIES: GC-142
DIFFICULTY: ⭐⭐⭐⭐⭐
```

**GC-144: SIMD for G-code Analysis**

```
Teach me Practical SIMD - Vectorizing Distance Calculations using C++.

DEPENDENCIES: GC-142, GC-099 (geometry)
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-145: Parallel STL Algorithms**

```
Teach me Parallel STL - std::execution::par, Parallel Sort/Transform using C++17.

DEPENDENCIES: GC-069 (STL algorithms), GC-110 (concurrency)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-146: OpenMP Basics**

```
Teach me OpenMP - #pragma omp parallel, Easy Parallelization using C++/OpenMP.

DEPENDENCIES: GC-110 (concurrency concepts)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-147: OpenMP Advanced**

```
Teach me Advanced OpenMP - Reductions, Scheduling, SIMD using C++/OpenMP.

DEPENDENCIES: GC-146
DIFFICULTY: ⭐⭐⭐⭐☆
```

---

## SPRINT 15: GPU PREREQUISITES (8 topics) - PREPARING FOR CUDA

**GC-148: GPU Architecture Overview**

```
Teach me GPU Basics - GPU vs CPU, Streaming Multiprocessors, Thousands of Threads using Concepts.

DEPENDENCIES: GC-131 (CPU architecture for comparison)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-149: Parallel Computing Patterns**

```
Teach me Parallel Patterns - Map, Reduce, Scan, Stencil using Concepts.

DEPENDENCIES: GC-110 (concurrency), GC-148
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-150: Memory Bandwidth Understanding**

```
Teach me Bandwidth - Transfer Speed, Latency, Bandwidth-Limited Code using Concepts.

DEPENDENCIES: GC-133 (memory hierarchy)
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-151: Roofline Model**

```
Teach me Roofline Model - Compute vs Memory Bound, Performance Limits using Concepts.

DEPENDENCIES: GC-150
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-152: Understanding Kernels**

```
Teach me Kernel Concept - What is a Kernel, Parallel Execution Model using Concepts.

DEPENDENCIES: GC-148
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-153: CUDA Installation**

```
Teach me CUDA Setup - Installing CUDA Toolkit, nvcc Compiler, Compatibility using CUDA.

DEPENDENCIES: None
DIFFICULTY: ⭐⭐☆☆☆
```

**GC-154: Thrust Library Introduction**

```
Teach me Thrust - High-Level GPU Programming, No Kernel Writing Yet! using CUDA/Thrust.

DEPENDENCIES: GC-153, GC-010 (vectors)
DIFFICULTY: ⭐⭐☆☆☆
NOTE: Starting with EASIEST GPU programming!
```

**GC-155: Thrust Vectors**

```
Teach me Thrust Vectors - device_vector, host_vector, Automatic Transfer using CUDA/Thrust.

DEPENDENCIES: GC-154
DIFFICULTY: ⭐⭐☆☆☆
```

---

## SPRINT 16: GPU PROGRAMMING WITH THRUST (10 topics) - STILL HIGH-LEVEL!

**GC-156: Thrust Transformations**

```
Teach me thrust::transform - Parallel Map Operations on GPU using CUDA/Thrust.

DEPENDENCIES: GC-155
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-157: Thrust Reductions**

```
Teach me thrust::reduce - Parallel Sum, Min, Max on GPU using CUDA/Thrust.

DEPENDENCIES: GC-155
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-158: Thrust Sorting**

```
Teach me thrust::sort - GPU Sorting, Incredibly Fast using CUDA/Thrust.

DEPENDENCIES: GC-155
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-159: Thrust Scan (Prefix Sum)**

```
Teach me thrust::scan - Parallel Prefix Sum using CUDA/Thrust.

DEPENDENCIES: GC-155
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-160: Custom Thrust Functors**

```
Teach me Thrust Functors - Custom Operations, Device Lambdas using CUDA/Thrust.

DEPENDENCIES: GC-068 (lambdas), GC-156
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-161: Thrust for G-code Analysis**

```
Teach me Practical Thrust - GPU-Accelerated Distance Calculations using CUDA/Thrust.

DEPENDENCIES: GC-160, GC-099 (geometry)
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-162: Measuring GPU Performance**

```
Teach me GPU Timing - cudaEvent_t, Measuring Kernel Time using CUDA.

DEPENDENCIES: GC-156
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-163: CPU vs GPU Comparison**

```
Teach me Performance Comparison - When GPU is Faster, Amdahl's Law using CUDA.

DEPENDENCIES: GC-162
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-164: Thrust Advanced Algorithms**

```
Teach me Advanced Thrust - Unique, Partition, Copy_if using CUDA/Thrust.

DEPENDENCIES: GC-158
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-165: Multiple GPUs with Thrust**

```
Teach me Multi-GPU - Processing on Multiple GPUs using CUDA/Thrust.

DEPENDENCIES: GC-155
DIFFICULTY: ⭐⭐⭐⭐☆
```

---

## SPRINT 17: WRITING CUDA KERNELS (12 topics) - NOW GOING LOWER

**GC-166: Your First CUDA Kernel**

```
Teach me CUDA Kernels - __global__, Thread Blocks, Vector Addition using CUDA.

DEPENDENCIES: GC-152 (kernel concept), GC-155 (Thrust background)
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-167: Thread Indexing**

```
Teach me CUDA Indexing - threadIdx, blockIdx, blockDim, Grid Layout using CUDA.

DEPENDENCIES: GC-166
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-168: Memory Transfer Explicit**

```
Teach me cudaMemcpy - Host to Device, Device to Host, Synchronous Transfer using CUDA.

DEPENDENCIES: GC-166
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-169: Kernel Launch Configuration**

```
Teach me Launch Config - Choosing Block Size, Grid Size, Occupancy using CUDA.

DEPENDENCIES: GC-167
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-170: 2D and 3D Grids**

```
Teach me Multi-Dimensional Grids - 2D/3D Indexing, Image Processing using CUDA.

DEPENDENCIES: GC-167
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-171: Error Handling in CUDA**

```
Teach me CUDA Errors - cudaError_t, Checking for Errors, Debugging using CUDA.

DEPENDENCIES: GC-166
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-172: Unified Memory**

```
Teach me Unified Memory - cudaMallocManaged, Automatic Migration using CUDA.

DEPENDENCIES: GC-168
DIFFICULTY: ⭐⭐⭐☆☆
```

**GC-173: G-code Processing Kernel**

```
Teach me Custom Kernel - Writing Kernel for G-code Analysis using CUDA.

DEPENDENCIES: GC-166, GC-027 (parser)
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-174: Profiling with nvprof**

```
Teach me CUDA Profiling - nvprof, nsys, Finding Bottlenecks using CUDA.

DEPENDENCIES: GC-173
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-175: Warp Basics**

```
Teach me Warps - 32-Thread Execution, Warp Divergence using CUDA.

DEPENDENCIES: GC-167
DIFFICULTY: ⭐⭐⭐⭐☆
```

**GC-176: Memory Coalescing**

```
Teach me Coalesced Access - Aligned Memory Access, Performance Impact using CUDA.

DEPENDENCIES: GC-168, GC-134 (cache concepts)
DIFFICULTY: ⭐⭐⭐⭐⭐
```

**GC-177: Kernel Optimization Basics**

```
Teach me Kernel Optimization - Occupancy, Register Usage, Instruction Throughput using CUDA.

DEPENDENCIES: GC-174
DIFFICULTY: ⭐⭐⭐⭐⭐
```

---

This is getting long. Should I continue to ~200 topics, or is this structure working for you?

**Key points of reorganization:**

- ✅ Easiest topics first (high-level C++)
- ✅ Explicit dependencies labeled
- ✅ Smart pointers BEFORE raw pointers
- ✅ Math BEFORE graphics
- ✅ CPU architecture BEFORE GPU
- ✅ Thrust (easy GPU) BEFORE kernels (hard GPU)
- ✅ Each difficulty marked (⭐-⭐⭐⭐⭐⭐)

Want me to continue with remaining sprints (advanced CUDA, graphics, AI/ML, production)?
