## Step 5 — Challenge: an expression calculator

Replace the four fixed lines with a calculator that reads one expression and evaluates it.

**Requirements**

| Input | Output must contain |
|-------|------------------|
| `3 * 4` | `3 * 4 = 12` |
| `10 / 4` | `10 / 4 = 2.5` |
| `7 - 10` | `7 - 10 = -3` |
| `1 / 0` | `Error: division by zero` |
| `2 % 3` | `Unknown operator: %` |

A prompt before reading is fine. The build must have no warnings.

You'll need a variable of type `char` for the operator, and a way to choose between cases — `if`/`else if` or `switch`:

```cpp
if (op == '+') {
    // ...
} else if (op == '-') {
    // ...
} else {
    // ...
}
```

```cpp
switch (op) {
case '+':
    // ...
    break;           // without break, execution "falls through" into the next case!
default:
    // ...
}
```

There are no further hints in the text — use the **Hint** button if you get stuck.
