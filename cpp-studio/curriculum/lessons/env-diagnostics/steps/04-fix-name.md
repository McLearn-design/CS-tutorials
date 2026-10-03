## Step 4 — Make it build and run

Fix the name. The program should now build without errors **or warnings** and print:

```text
Hello, Ada!
```

Notice `"Hello, " + name + "!"` — adding a `std::string` and a string literal produces a new `std::string`.
That works because `name` is a `std::string`. (`"Hello, " + "!"` on its own would *not* compile — two raw
string literals can't be added. You'll learn why in the memory track.)
