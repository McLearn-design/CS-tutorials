## Step 3 — A command-line word counter

Now use your library from `main.cpp`. Read the input **a line at a time**:

```cpp
std::string line;
while (std::getline(std::cin, line)) {
    // line holds one line, without its '\n'
}
```

`std::cin >> word` would skip all whitespace, including newlines — so you couldn't count lines. `std::getline`
reads everything up to the next newline.

Print:

```text
lines: 2
words: 5
characters: 21
```

for the input

```text
Hello world
C++ is fun
```

Characters are counted per line *without* the newline (11 + 10 = 21). Try it with a real file:
`./build/words < CMakeLists.txt`.
