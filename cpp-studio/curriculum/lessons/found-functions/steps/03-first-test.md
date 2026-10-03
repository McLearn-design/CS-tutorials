## Step 3 — A test program

Three files have appeared in `tests/`:

- `studio_test.hpp` — a tiny test framework (~120 lines). **Read it.** There's no magic in testing frameworks.
- `test_main.cpp` — the test program's `main`, which runs every registered test.
- `calc_test.cpp` — one test:

```cpp
TEST(add_two_positive_numbers)
{
    CHECK_EQ(add(2, 3), 5);
}
```

A test is a second executable, built from your tests **plus the code under test** (`calc.cpp`) — but *not*
`main.cpp`, because the test program has its own `main`. This is why the logic had to move out of `main.cpp`.

**Your task:** add a test target to `CMakeLists.txt`:

```cmake
add_executable(calc_tests tests/test_main.cpp tests/calc_test.cpp calc.cpp)
target_include_directories(calc_tests PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})

enable_testing()
add_test(NAME calc_tests COMMAND calc_tests)
```

- `target_include_directories` lets files in `tests/` find `calc.h` in the project root with `#include "calc.h"`.
- `enable_testing()` + `add_test` register the program with **CTest**, CMake's test runner. Run all tests with
  `ctest --test-dir build --output-on-failure`.

Also give `calc_tests` the same warning flags as `calculator`. Then build and run:

```sh
cmake --build build
./build/calc_tests
```

```text
[==========] Running 1 tests
[ RUN      ] add_two_positive_numbers
[       OK ] add_two_positive_numbers
[==========] 1 tests ran, 1 passed, 0 failed
```

> **Make it fail on purpose:** change the expected value to `6`. Read the failure message — it tells you the file,
> line, expression, and both values. Then change it back.
