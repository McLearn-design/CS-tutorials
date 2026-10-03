# Text: building a word counter

Most real programs deal with text: names, commands, files, network messages. This lesson builds `words`, a small cousin
of the Unix `wc` tool, plus a tested library of text functions.

The project is set up for you in `projects/words/`:

- `text.h` declares three functions — the library's **interface**.
- `text.cpp` is where you implement them.
- `CMakeLists.txt` builds the `words` program **and** a `text_tests` program from every `tests/*_test.cpp` file.

Each step adds a test file describing a function. You make the tests pass. That's how a lot of professional work feels:
the specification arrives as tests.
