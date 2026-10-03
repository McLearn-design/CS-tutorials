# Build your own dynamic array

You've used `std::vector` and `std::string` — classes that manage heap memory so you don't have to. This lesson
removes the magic: you'll write `IntArray`, a small `std::vector<int>`, yourself.

```text
IntArray object (on the stack)          heap buffer
┌────────────────────────┐             ┌────┬────┬────┬────┬────┬────┬────┬────┐
│ data_     ─────────────┼───────────► │ 4  │ 8  │ 15 │ 16 │    │    │    │    │
│ size_     = 4          │             └────┴────┴────┴────┴────┴────┴────┴────┘
│ capacity_ = 8          │               ◄──── size ────►
└────────────────────────┘               ◄────────── capacity ──────────►
```

Along the way you'll write your first real **class**: data that's `private`, and member functions that are the only way
to touch it. The class's job is to keep its **invariants** — `size_ <= capacity_`, `data_` points at a buffer of
`capacity_` ints that this object alone owns — true at all times.

Every test here runs under AddressSanitizer. Memory mistakes won't hide.
