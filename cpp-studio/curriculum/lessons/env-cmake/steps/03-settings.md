## Step 3 — Language standard and warnings

Two settings every C++ project should make explicit:

```cmake
cmake_minimum_required(VERSION 3.20)
project(hello LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(hello hello.cpp)

if(MSVC)
    target_compile_options(hello PRIVATE /W4)
else()
    target_compile_options(hello PRIVATE -Wall -Wextra -Wpedantic)
endif()
```

- **The standard.** C++ has versions: C++11, 14, 17, 20, 23. Without this, you get whatever your compiler
  defaults to — which differs between machines. `REQUIRED ON` makes configuration fail loudly if the compiler is too old.
- **Warnings.** Different compilers spell warning flags differently. The `if(MSVC)` is your first taste of
  writing *cross-platform* builds. `PRIVATE` means "for building this target only, not for anything that links to it".

Update your `CMakeLists.txt` and press **Check** (the build must have no warnings).

> When you change `CMakeLists.txt`, `cmake --build build` notices and re-runs the configure step automatically.
