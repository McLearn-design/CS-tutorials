## Step 3 — Say something

A program that does nothing is a good start. Let's make it print.

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello C++\n";
    return 0;
}
```

What is new:

- `#include <iostream>` — a **preprocessor directive**. Before compiling, the preprocessor replaces this line with the
  contents of the `iostream` header, which *declares* `std::cout`. Without it, the compiler has never heard of `std::cout`.
- `std::cout` — the *standard output* stream: text sent to it appears in the terminal. `std::` means it lives in the
  standard library's **namespace**, which keeps its names from colliding with yours.
- `<<` — "send this into the stream". You can chain it: `std::cout << "a" << "b";`
- `"Hello C++\n"` — a string literal. `\n` is a newline character.

**Your task:** make the program print exactly `Hello C++`.

> **Make a mistake on purpose.** Delete the `#include` line and press Check. Read the error the compiler gives you —
> C++ Studio will explain it. Then put the line back. Learning to read errors is half of learning C++.
