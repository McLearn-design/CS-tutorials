## Step 3 — Choosing a parameter type

Four ways to hand an `Item` to a function:

```cpp
void a(Item item);          // copy
void b(Item& item);         // alias — may modify the caller's item
void c(const Item& item);   // alias — may only read it
void d(Item* item);         // address — may be null; use *item / item->member
```
