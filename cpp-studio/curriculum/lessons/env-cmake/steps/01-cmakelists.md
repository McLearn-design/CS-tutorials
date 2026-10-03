## Step 1 — Write a CMakeLists.txt

Create `CMakeLists.txt` (exact capitalisation) in `projects/hello/`:

```cmake
cmake_minimum_required(VERSION 3.20)
project(hello LANGUAGES CXX)

add_executable(hello hello.cpp)
```

| Line | Meaning |
|------|---------|
| `cmake_minimum_required` | the oldest CMake this file is written for; enables that version's behaviour |
| `project` | names the project and the languages it uses |
| `add_executable(hello hello.cpp)` | defines a **target** called `hello`: an executable built from `hello.cpp` |

**Targets** are the central idea in modern CMake. Everything — source files, include directories,
compiler flags, libraries — is attached to a target.

Press **Check**. C++ Studio runs CMake for you this time.
