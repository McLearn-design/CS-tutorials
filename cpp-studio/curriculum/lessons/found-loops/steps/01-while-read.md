## Step 1 — Read until the input runs out

You don't know in advance how many numbers the user will type. So read in a loop **until input ends**:

```cpp
double value = 0;
while (std::cin >> value) {
    // use value
}
```

The expression `std::cin >> value` does two things: it tries to read a number, and it *evaluates to* the stream, which
converts to `true` if the read succeeded and `false` if it failed — because the input ended or because the next thing
wasn't a number.

Input "ends" when:
- a file or pipe runs out: `echo "3 5 10" | ./stats`
- you type it at the keyboard and press **Ctrl+D** (macOS/Linux) or **Ctrl+Z then Enter** (Windows).

**Your task:** in `stats.cpp`, count the numbers and add them up. Print:

```text
count: 3
sum: 18
```

for the input `3 5 10`.

`++count` adds one to `count`; `sum += value` is shorthand for `sum = sum + value`.
