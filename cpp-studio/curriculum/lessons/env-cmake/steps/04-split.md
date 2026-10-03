## Step 4 — More than one file

Real programs are split into many files. Move the greeting text into its own function in its own files.

**`greeting.h`** — the *interface*: what other files may call.

```cpp
#pragma once

#include <string>

std::string greeting();
```

**`greeting.cpp`** — the *implementation*.

```cpp
#include "greeting.h"

std::string greeting()
{
    return "Hello C++";
}
```

Then change `hello.cpp` to `#include "greeting.h"` and print `greeting()` instead of the literal text
(keep your second line), and tell CMake about the new file.

New ideas:

- `#pragma once` stops a header from being pasted twice into the same translation unit.
- `#include "…"` (quotes) searches next to the current file first — use it for your own headers;
  `<…>` is for the standard library and other installed libraries.
- `std::string` is a real type you can return from functions, unlike Python's `str`
  it has a fixed type known at compile time.

> **Break it on purpose:** before adding `greeting.cpp` to `add_executable`, build once.
> Which tool fails, and what does it say? You've seen this error before.
