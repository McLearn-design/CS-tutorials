## Step 2 — Growing: size, capacity and push_back

A fixed size isn't very useful. `push_back` must make room when the buffer is full — but C++ arrays can't grow in
place. You must:

1. allocate a **new, bigger** buffer,
2. copy the existing elements across,
3. `delete[]` the old buffer,
4. point `data_` at the new one.

That's expensive, so don't do it on every `push_back`. Keep two numbers: `size_` (elements in use) and `capacity_`
(elements allocated). Only reallocate when `size_ == capacity_`, and then **double** the capacity. Doubling means a
million push_backs trigger only about 20 reallocations — the *amortised* cost per push_back is constant. One test
checks for this.

**Your task:** update the class (header *and* `.cpp`):

```cpp
IntArray();                        // empty: data_ = nullptr, size 0, capacity 0
std::size_t capacity() const;
void push_back(int value);
// and a new member:  std::size_t capacity_;  — initialise it in every constructor!
```

> If you forget to initialise `capacity_` in a constructor, it holds garbage — UndefinedBehaviorSanitizer may not
> notice, but your tests probably will.
