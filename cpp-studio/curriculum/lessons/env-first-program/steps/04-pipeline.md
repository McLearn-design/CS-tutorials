## Step 4 — Run the compiler yourself, one stage at a time

So far C++ Studio has compiled for you. Now do it yourself in a real terminal, one stage at a time.
Open a terminal in `projects/hello/` and run:

**1. Preprocess only** (`-E`): expand `#include`s and macros, then stop.

```sh
g++ -std=c++20 -E hello.cpp -o hello.ii
```

**2. Compile only** (`-c`): turn the source into machine code — an **object file** — without linking.

```sh
g++ -std=c++20 -c hello.cpp -o hello.o
```

**3. Link**: combine object files with the libraries they use (here, the C++ standard library that implements
`std::cout`) into an executable.

```sh
g++ hello.o -o hello
```

**4. Run it**:

```sh
./hello
```

```text
hello.cpp ─(-E)─► hello.ii ─(-c)─► hello.o ─(link)─► hello
```

Normally a single `g++ hello.cpp -o hello` does all of this in one go, but the stages are still there —
and when something goes wrong, knowing *which* stage complained tells you where to look.

Open `hello.ii` in the editor and scroll. You'll need what you see for the next question.

| Toolchain | Preprocess | Compile | Link |
|-----------|-----------|---------|------|
| GCC | `g++ -E` | `g++ -c` | `g++ x.o -o x` |
| Clang | `clang++ -E` | `clang++ -c` | `clang++ x.o -o x` |
| MSVC (Developer PowerShell) | `cl /P hello.cpp` (→ `hello.i`) | `cl /c /EHsc hello.cpp` (→ `hello.obj`) | `link hello.obj` |

> On Windows with MSVC, the file names differ (`hello.i`, `hello.obj`, `hello.exe`). Create the expected files with the
> GCC/Clang names if you are using MSVC, or install clang — C++ Studio's checks look for `hello.ii` and `hello.o`.
