## Step 5 — Challenge: palindromes

Implement the last function declared in `text.h`:

```cpp
bool is_palindrome(const std::string& text);
```

It returns `true` if the text reads the same forwards and backwards, **ignoring case and anything that isn't a
letter or digit**. `"A man, a plan, a canal: Panama!"` is a palindrome.

This time **you write the tests**: create `tests/palindrome_test.cpp` with at least three tests. (Copy the shape of
the existing test files.) CMake will pick it up automatically.

When you press Check, hidden acceptance tests also run against your function. Decide for yourself what the
edge cases are — and test them.
