# From a text file to a running program

In Python you run `python script.py` and the interpreter reads your code while it runs.
C++ works differently: **before** your program can run, a *compiler* translates your source code
into machine code for your CPU and writes it into a separate file — an *executable*. You run that file.

```text
hello.cpp ──► preprocessor ──► compiler ──► hello.o ──► linker ──► hello (executable)
 (text)                          (machine code, unlinked)           (runnable)
```

In this lesson you will build that pipeline with your own hands. Nothing here is simulated:
the files you create live in `projects/hello/`, and the compiler is the real one installed on your machine.
