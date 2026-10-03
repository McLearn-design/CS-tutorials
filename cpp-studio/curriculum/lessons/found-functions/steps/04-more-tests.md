## Step 4 — Test every function

Write at least one test each for `subtract`, `multiply` and `divide`, so you have at least four tests.

Good tests:

- have **descriptive names** — when one fails, the name should tell you what broke (`subtract_can_go_negative`).
- check **interesting cases**, not just the obvious one: negative results, zero, fractions.
- are **independent** — each one makes sense on its own.

Floating-point arithmetic is not exact (`0.1 + 0.2 != 0.3`). For results that aren't exactly representable, compare with a tolerance:

```cpp
CHECK_NEAR(divide(1, 3), 0.333333, 1e-6);
```
