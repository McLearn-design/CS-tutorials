## Step 3 — Counting iterations

The `for` loop packs three parts into one line:

```cpp
for (int i = 1; i < 10; ++i) {
//   ^ start    ^ keep going while   ^ after each iteration
    std::cout << i << '\n';
}
```

`++i` increments `i`. (You'll also see `i++`; for plain integers they do the same thing here.)

Work out the answer on paper first — then check by compiling the loop in a scratch file.
