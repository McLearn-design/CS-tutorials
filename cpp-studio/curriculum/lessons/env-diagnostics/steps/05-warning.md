## Step 5 — A warning is a bug report

A new file has appeared: `count.cpp`. It *compiles*. Build and run it yourself:

```sh
g++ -std=c++20 -Wall -Wextra count.cpp -o count && ./count
```

You will see a warning like:

```text
count.cpp:8:23: warning: comparison of integer expressions of different signedness:
'int' and 'std::vector<int>::size_type' [-Wsign-compare]
```

The program may even print a plausible-looking number. That's the danger: the code is **wrong**, and nothing crashed.

Look closely at line 8. The warning is pointing at the right line for two reasons:

1. `scores.size()` is *unsigned* (`std::size_t`); `i` is a signed `int`. Mixing them can silently turn
   negative numbers into enormous positive ones.
2. While you're looking: `i <= scores.size()` visits index 3 of a 3-element vector. Valid indices are 0, 1, 2.
   Reading `scores[3]` is **undefined behaviour** — the program might print garbage, crash, or appear to work.

**Your task:** fix the loop so it builds with **no warnings** and prints `Total: 247`.

> Compilers only warn about some of what's wrong. Later you'll meet sanitizers (`-fsanitize=address`), which
> catch out-of-bounds access at run time, and `clang-tidy`, which catches much more at compile time.
