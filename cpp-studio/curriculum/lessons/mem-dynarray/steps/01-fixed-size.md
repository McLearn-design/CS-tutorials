## Step 1 — A class that owns memory

Open `int_array.h`. It declares the class; you implement it in `int_array.cpp`.

```cpp
class IntArray {
public:                     // anyone can call these
    explicit IntArray(std::size_t size);
    ~IntArray();
    std::size_t size() const;
    int& operator[](std::size_t index);
    const int& operator[](std::size_t index) const;
private:                    // only IntArray's own member functions can touch these
    int* data_;
    std::size_t size_;
};
```

Things you haven't seen yet:

- **Defining members outside the class** uses the class name as a prefix:
  ```cpp
  std::size_t IntArray::size() const { return size_; }
  ```
- **Constructor initialiser lists** set members before the body runs:
  ```cpp
  IntArray::IntArray(std::size_t size) : data_(new int[size]()), size_(size) {}
  ```
  `new int[size]()` allocates an array of `size` ints, zero-filled because of the `()`.
- **`delete[]`** releases an array from `new[]`. (Plain `delete` on an array is undefined behaviour — ASan reports
  `alloc-dealloc-mismatch`.)
- **`operator[]`** makes `a[i]` work. Returning `int&` lets callers *assign* through it (`a[0] = 10`).
- **`const` member functions** (`size() const`) promise not to modify the object, so they can be called on a
  `const IntArray&`. That's why there are two `operator[]`s.
- **`explicit`** stops `IntArray a = 5;` from silently creating a 5-element array.

**Your task:** implement the constructor, destructor, `size` and both `operator[]`s so the tests pass.
