## Step 1 — Declare an interface

A **function** packages up a computation behind a name:

```cpp
double add(double a, double b)   // return type, name, parameters
{
    return a + b;                // body
}
```

`a` and `b` are **parameters**: local variables initialised with copies of whatever the caller passes.
`return` hands a value back to the caller.

You'll split each function into a **declaration** (in a header — the interface other files see) and a
**definition** (in a `.cpp` — the implementation), just like `greeting.h` / `greeting.cpp` and `area.h` / `area.cpp` in Track 0.

**Your task:** create `calc.h` declaring four functions, each taking two `double`s and returning a `double`:
`add`, `subtract`, `multiply`, `divide`. Start it with `#pragma once`.
