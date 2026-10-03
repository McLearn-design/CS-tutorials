## Step 1 — Your own type

A `struct` groups named values — **members** — into one type:

```cpp
struct Item {
    std::string name;
    int quantity = 0;      // default member initialiser: used if no value is given
    double price = 0.0;
};                         // ← this semicolon is required
```

Create and use one:

```cpp
Item bolts {"bolts", 120, 0.25};   // aggregate initialisation, in member order
Item empty;                        // name "", quantity 0, price 0.0
bolts.quantity += 10;              // access members with .
std::vector<Item> stock {bolts, {"nuts", 80, 0.10}};
```

**Your task:** in `inventory.h`, define `Item` and declare

```cpp
double total_value(const std::vector<Item>& items);   // sum of quantity × price
```

then implement it in `inventory.cpp`. The tests in `tests/item_test.cpp` must pass.
