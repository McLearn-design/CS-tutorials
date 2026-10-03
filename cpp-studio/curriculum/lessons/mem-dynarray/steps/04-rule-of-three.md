## Step 4 — The rule of three

> If a class needs a hand-written **destructor**, it almost certainly needs a hand-written **copy constructor** and
> **copy assignment operator** too. — the *rule of three*

Your destructor frees a resource, so copies must get their *own* resource:

```cpp
IntArray(const IntArray& other);              // build a new object as a copy of other
IntArray& operator=(const IntArray& other);   // turn an existing object into a copy of other
```

The copy constructor is straightforward: allocate, copy elements, copy the counts.

Assignment is trickier, because the target already owns a buffer:

```cpp
IntArray& IntArray::operator=(const IntArray& other)
{
    if (this == &other)       // a = a; must not free the buffer it's about to copy from
        return *this;
    // 1. make the copy first (if allocation throws, *this is still intact)
    // 2. release our old buffer
    // 3. take over the copy's buffer
    return *this;
}
```

**Your task:** add both to the class so all the tests pass with no sanitizer errors.

> In modern C++ you'll usually follow the *rule of zero* instead: build classes out of members that already manage
> themselves (`std::vector`, `std::unique_ptr`, `std::string`), and write none of these five special functions.
> Writing them once, here, is how you understand what those types do for you. (The other two of the "five" —
> move constructor and move assignment — come in the language track.)
