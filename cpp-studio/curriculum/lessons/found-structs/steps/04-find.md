## Step 4 — Maybe there's an answer: std::optional

In the debugger lesson, `find_item` returned `nullptr` for "not found" — and the caller forgot to check and crashed.
Modern C++ has a type that makes "there might be no value" explicit:

```cpp
#include <optional>

std::optional<std::size_t> find_index(const std::vector<Item>& items, const std::string& name);

auto i = find_index(stock, "nuts");
if (i) {                                // or i.has_value()
    std::cout << stock[*i].quantity;    // *i gets the value out
}
```

An `optional<T>` either holds a `T` or holds nothing (`std::nullopt`). The type itself tells callers they must check.

**Your task:** declare and implement `find_index` so `tests/find_test.cpp` passes. Return the position of the first
item with that name, or `std::nullopt`.
