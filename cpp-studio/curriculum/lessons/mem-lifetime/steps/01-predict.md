## Step 1 — Predict the lifetimes

Open `tracer.cpp`. It defines a `Tracer`: a struct with two special member functions.

- The **constructor** `Tracer(std::string n)` runs when a Tracer is created. (`: name(std::move(n))` initialises the
  member before the body runs.)
- The **destructor** `~Tracer()` runs automatically when a Tracer's lifetime ends. You never call it yourself.

Each one prints a line, so the output is a timeline of object lifetimes.

**Before running it**, read `main` and `f` and write down the order you expect. Then answer — and *then* run it:

```sh
g++ -std=c++20 -Wall -Wextra tracer.cpp -o tracer && ./tracer
```

Notice also `global` — constructed before `main` starts, destroyed after it ends.
