## Step 1 — Greatest common divisor

**Requirement:** add a function

```cpp
long long gcd(long long a, long long b);
```

that returns the greatest common divisor of `a` and `b` — the largest non-negative integer that divides both.

The lesson has added **`tests/gcd_test.cpp`**. Read the tests: they *are* the specification, including the edge cases
(zero, negative numbers) and a performance requirement. Add the file to your `calc_tests` target and make every test pass.

`long long` is an integer type of at least 64 bits (about ±9.2 × 10¹⁸), for when `int` is too small.

> No more step-by-step instructions. Use the tests, the compiler, the debugger and the Hint button.
