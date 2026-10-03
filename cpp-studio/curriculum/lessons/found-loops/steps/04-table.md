## Step 4 — Challenge: a multiplication table

Create a **new program**, `table.cpp`, in the same project. It reads one number `n` and prints an `n × n`
multiplication table, numbers separated by single spaces, no trailing spaces:

```text
$ echo 3 | ./table
1 2 3
2 4 6
3 6 9
```

If `n` is missing, zero or negative, print `n must be a positive whole number` and return exit code `1` from `main`.
A non-zero exit code is how command-line programs report failure to whoever ran them.

You'll need a loop *inside* a loop — a **nested loop**. Build it with:

```sh
g++ -std=c++20 -Wall -Wextra table.cpp -o table
```
