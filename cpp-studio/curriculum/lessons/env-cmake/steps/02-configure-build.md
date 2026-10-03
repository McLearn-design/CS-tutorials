## Step 2 — Configure, then build

Now drive CMake yourself. In a terminal in `projects/hello/`:

```sh
cmake -S . -B build      # 1. configure
cmake --build build      # 2. build
./build/hello            # 3. run   (Windows: .\build\Debug\hello.exe)
```

**Configure** reads `CMakeLists.txt`, finds your compiler, and writes a build system into `build/`.
**Build** runs that build system — which runs the compiler and linker you already know.

This is an **out-of-source build**: every generated file goes into `build/`, and your source folder stays clean.
Delete `build/` any time; it can always be regenerated.

Look inside `build/` — you'll find `CMakeCache.txt` (the settings CMake detected, including your compiler's path)
and, if you're curious, run `cmake --build build --verbose` to see the exact compiler commands.
