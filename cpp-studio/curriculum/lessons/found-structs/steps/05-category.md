## Step 5 — Challenge: categories

Every item now needs a category: tool, part or consumable.

1. Define an **enum class** in `inventory.h`:

   ```cpp
   enum class Category { Tool, Part, Consumable };
   ```

   An `enum class` is a type with a fixed set of named values. You write `Category::Tool`; it doesn't silently convert
   to `int`, and it can't be confused with another enum.

2. Add `Category category = Category::Part;` as the **last** member of `Item`, so existing code like
   `{"bolts", 120, 0.25}` still compiles.
3. Declare and implement:
   - `int count_in(const std::vector<Item>& items, Category category)` — total *quantity* in that category.
   - `std::string to_string(Category category)` — `"tool"`, `"part"` or `"consumable"`.
4. Write `main.cpp` to build this inventory and print it:

```text
bolts (part): 120
wrench (tool): 2
oil (consumable): 5
total value: 69
```

Hidden tests check `count_in`, `to_string` and the default category.

> Tip: compile with warnings and leave a `case` out of your `switch` — the compiler tells you which enumerator you
> forgot. That's a big reason to prefer `switch` over `if` chains for enums.
