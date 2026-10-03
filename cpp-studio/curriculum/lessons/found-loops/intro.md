# Loops: summarising a stream of numbers

Programs earn their keep by doing something many times. In this lesson you'll build `stats`, a small tool that reads
any amount of numbers and summarises them — like a tiny version of what spreadsheet software does with a column.

You'll meet C++'s two workhorse loops:

```cpp
while (condition) {            // repeat as long as condition is true
    // ...
}

for (int i = 0; i < n; ++i) {  // initialise; condition; step
    // ...
}
```

This lesson starts a new project, `projects/stats/`, built directly with the compiler (no CMake needed for a one-file tool).
