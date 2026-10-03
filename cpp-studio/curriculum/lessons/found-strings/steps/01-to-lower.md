## Step 1 — Characters and loops over strings

A `std::string` is a sequence of `char`s. You can loop over it directly with a **range-based for loop**:

```cpp
for (char c : text) {          // c is a copy of each character in turn
    std::cout << c << '\n';
}

for (char& c : text) {         // c *refers to* each character: changing c changes text
    c = '*';
}
```

The `<cctype>` header has character helpers: `std::tolower`, `std::toupper`, `std::isalpha`, `std::isdigit`,
`std::isalnum`, `std::isspace`. They have a historical quirk: pass them an `unsigned char`, or characters outside
plain ASCII can cause undefined behaviour. So the careful spelling is:

```cpp
c = static_cast<char>(std::tolower(static_cast<unsigned char>(c)));
```

`static_cast<T>(x)` is C++'s explicit, searchable way to convert a value to another type.

Look at the declaration in `text.h`:

```cpp
std::string to_lower(const std::string& text);
```

`const std::string&` means "give me *access* to the caller's string, without copying it, and I promise not to change it".
It is the standard way to pass anything bigger than a number into a function. You'll study references properly in the
structs lesson.

**Your task:** implement `to_lower` in `text.cpp` so the tests in `tests/to_lower_test.cpp` pass.
Build and run the tests yourself:

```sh
cmake -S . -B build
cmake --build build
./build/text_tests
```
