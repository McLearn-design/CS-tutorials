## Step 2 — The bug that copies

A teammate has added a `restock` function to the project — the lesson replaced `inventory.h` and `inventory.cpp` with
their version (it includes the same `Item` and `total_value` you wrote). There's also a test for it.

Run the tests. `restock_increases_the_quantity` fails:

```text
CHECK_EQ(nuts.quantity, 100) failed
    left:  80
    right: 100
```

`restock` clearly adds `amount` to the quantity. So why didn't `nuts` change?

**Investigate before you fix.** Debug the test program (or add a temporary `std::cout` inside `restock`) and watch
`item.quantity` *inside* the function, and `nuts.quantity` *after* it returns.

### What's happening

```cpp
void restock(Item item, int amount)     // item is a COPY of the caller's object
```

Parameters are initialised by copying the arguments. `restock` dutifully updates its own copy, which is then destroyed
when the function returns. The caller's `nuts` was never touched.

To work on the caller's object, take a **reference**:

```cpp
void restock(Item& item, int amount)    // item IS the caller's object, under another name
```

A reference is an alias: no copy is made, and changes go straight to the original.

**Your task:** fix `restock` (header and `.cpp`) so the test passes.
