## Step 5 — Let the type clean up: std::unique_ptr

Go back to `tracer.cpp`. Your heap Tracer works, but correctness depends on remembering `delete` on every path out of
the function — including early `return`s and exceptions.

C++'s answer is **RAII** — *Resource Acquisition Is Initialisation*: tie a resource to an object whose destructor
releases it. `std::unique_ptr` is RAII for heap objects:

```cpp
#include <memory>

std::unique_ptr<Tracer> h = std::make_unique<Tracer>("heap");   // owns the heap Tracer
std::cout << h->name << '\n';                                   // use it like a pointer
// no delete: when h's lifetime ends, its destructor deletes the Tracer
```

A `unique_ptr` is the *single owner* of its object. It can't be copied (two owners would both delete), only *moved*.

**Your task:** replace your `new`/`delete` with `std::make_unique`. Then look at where `destroy heap` now appears in the
output: after `main ends`, and before `destroy c` — because `h` is a local declared after `c`, it dies first.

> Modern C++ guideline: **no naked `new` and `delete`** in application code. Use values, standard containers, and
> `std::make_unique`. In the next lesson you'll find out why — by writing the container yourself.
