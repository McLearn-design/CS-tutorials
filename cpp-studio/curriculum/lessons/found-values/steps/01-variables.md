## Step 1 — Variables have types

In Python, a name can refer to anything: `x = 5` and later `x = "five"`. In C++ every variable has a **type**
fixed at compile time, and the compiler uses it to decide how much memory the variable needs and which operations are allowed.

```cpp
double price = 7.5;     // a floating-point number
int count = 3;          // a whole number
```

| Type | Holds | Example |
|------|-------|---------|
| `int` | whole numbers (typically 32-bit: about ±2.1 billion) | `42`, `-7` |
| `double` | floating-point numbers (about 15-16 significant digits) | `7.5`, `-0.001` |
| `bool` | `true` or `false` | `true` |
| `char` | a single character | `'x'` (single quotes!) |
| `std::string` | text (needs `<string>`) | `"hello"` (double quotes) |

**Always initialise** variables when you declare them. `int x;` inside a function holds whatever bytes happened to
be in memory — reading it is undefined behaviour.

**Your task:** in `main.cpp`, declare two `double` variables with the values `7.5` and `2.5`, and print their sum so the
program outputs exactly:

```text
7.5 + 2.5 = 10
```

Print the *variables*, not the literal text — the next step will feed in different numbers.
