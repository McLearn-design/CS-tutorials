## Step 1 — Run it and watch it fail

Read `inventory.cpp` once — briefly; don't hunt for the bug yet. Then build and run it:

```sh
g++ -std=c++20 -g -Wall -Wextra inventory.cpp -o inventory
./inventory
```

`-g` asks the compiler to include **debug information**: a map from machine code back to your source lines and
variable names. Without it, the debugger can only show you raw addresses.

What happened?
