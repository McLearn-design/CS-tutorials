## Step 2 — Splitting text into words

`split_words` returns a `std::vector<std::string>` — a growable list of strings. You'll study `std::vector` properly
in the next lesson; for now you need three things:

```cpp
std::vector<std::string> words;   // empty list
words.push_back("hello");         // append
words.size();                     // how many
```

A new test file has appeared: `tests/split_words_test.cpp`. CMake picks it up automatically (look at the
`file(GLOB ...)` line in `CMakeLists.txt`).

**The rule:** a word is a run of letters and digits (`std::isalnum`). Everything else — spaces, punctuation,
tabs, newlines — separates words. So `"Hello, world!"` is `{"Hello", "world"}` and `"C++20"` is `{"C", "20"}`.

Think through the edge cases the tests check *before* running them: empty text, text that is only punctuation,
and a word right at the very end.
