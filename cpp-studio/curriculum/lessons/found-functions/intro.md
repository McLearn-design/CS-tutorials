# Functions, headers and your first unit tests

Your calculator works — you checked it by hand, by typing inputs and reading outputs. That doesn't scale:
every time you change something, you'd have to re-check *everything*. Professional software has
**automated tests**: small programs that call your code and verify the results, run in seconds, every time.

To test code, it must be *callable* from somewhere other than `main`. So first you'll move the arithmetic into
**functions** with a clean **interface** in a header. Testable code and well-structured code turn out to be the same thing.

(If you skipped the previous lesson's challenge, a working `main.cpp` has been placed in your project.)
