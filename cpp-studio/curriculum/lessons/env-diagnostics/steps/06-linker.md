## Step 6 — When the compiler is happy but the build still fails

Three new files have appeared:

- `area.h` — a **header** that *declares* `circle_area`.
- `shapes.cpp` — includes `area.h` and calls `circle_area(radius)`.
- `area.cpp` — supposed to *define* `circle_area`… but look inside.

Compile each file separately, then link:

```sh
g++ -std=c++20 -c shapes.cpp area.cpp
g++ shapes.o area.o -o shapes
```

Both compile steps succeed. The link step fails. Read the message — and notice **who** wrote it
(`/usr/bin/ld`, `ld`, or `LINK` on Windows).
