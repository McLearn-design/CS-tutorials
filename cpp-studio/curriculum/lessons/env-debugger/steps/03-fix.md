## Step 3 — Fix the bug

You now know *exactly* what happens: `find_item` returns `nullptr` when the item doesn't exist, and `main`
uses the result without checking.

Fix `main` so the program prints:

```text
nuts: 80
screws: not found
bolts: 120
```

There's more than one correct way to do this. The check only looks at what your program *does*.

### What to remember

- A crash is not a mystery. Build with `-g`, run under the debugger, read the stopping line, the variables and the call stack.
- Dereferencing (`*p` or `p->member`) a null pointer is **undefined behaviour**. On desktop systems it usually crashes
  immediately — which is the *lucky* outcome.
- Later you'll see designs that make this bug impossible: returning `std::optional<Item&>`-like types,
  references instead of pointers, or throwing exceptions. Each has trade-offs.
