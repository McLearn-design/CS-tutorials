## Step 2 — Reading input

`std::cout` is the output stream. `std::cin` is the **input** stream, and `>>` reads from it into a variable:

```cpp
double a = 0;
double b = 0;
std::cout << "Enter two numbers: ";
std::cin >> a >> b;
```

`>>` skips whitespace (spaces, tabs, newlines), then reads characters for as long as they make sense for the
variable's type. The **type of the variable decides how the input is parsed** — reading into a `double` accepts `1.5`,
reading into an `int` would stop at the `.`.

**Your task:** read two numbers and print their sum, for example (the prompt is optional):

```text
Enter two numbers: 3 4
3 + 4 = 7
```

Test it yourself in the terminal: `./build/calculator`, or pipe input in with `echo "3 4" | ./build/calculator`.
C++ Studio checks it with more than one input.
