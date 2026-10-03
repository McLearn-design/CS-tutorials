## Step 2 — The smallest program

Every C++ program needs exactly one function named `main`. When the operating system starts your program,
`main` is where execution begins.

```cpp
int main()
{
    return 0;
}
```

Read it piece by piece:

| Code | Meaning |
|------|---------|
| `int` | `main` gives back an integer when it finishes — the **exit code** |
| `main` | the function's name; the OS looks for exactly this name |
| `()` | the parameter list — empty, `main` takes no input here |
| `{ … }` | the function **body**: the statements that run |
| `return 0;` | finish, handing `0` back to the OS. `0` means *success* |
| `;` | ends a statement. Python uses line breaks; C++ uses semicolons |

**Your task:** type this program into `hello.cpp` yourself — don't paste it. Typing is how the shape of the
language gets into your fingers. Then press **Check**: C++ Studio will compile it with your real compiler and run it.

> **Try this:** after it passes, run `echo $?` (macOS/Linux) or `echo $LASTEXITCODE` (PowerShell) right after running the
> program in a terminal, and you will see the `0` you returned. Change it to `return 7;` and look again.
