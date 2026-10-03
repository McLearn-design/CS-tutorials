## Step 4 — All four operations

Extend the program to print all four results:

```text
3 + 4 = 7
3 - 4 = -1
3 * 4 = 12
3 / 4 = 0.75
```

Because `a` and `b` are `double`, `/` performs floating-point division. (With `int`s, `3 / 4` would be `0` — you just learned why.)

> **Try it:** what does your program print for input `1 0`? What about `0 0`? You'll get `inf` and `nan` for division.
> Floating-point division by zero is defined to produce these special values; integer division by zero is
> undefined behaviour and usually crashes. The next step fixes this properly.
