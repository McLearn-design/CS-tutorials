## Step 3 — A use after free

A new file, `dangling.cpp`, compiles without warnings. Build it **with AddressSanitizer** and run it:

```sh
g++ -std=c++20 -g -fsanitize=address,undefined dangling.cpp -o dangling && ./dangling
```

(Press **Check** to get C++ Studio's summary of the report.)

```text
ERROR: AddressSanitizer: heap-use-after-free ...
    #1 ... in main dangling.cpp:22          ← where freed memory was used
freed by thread T0 here:
    #1 ... in print_and_cleanup(...) dangling.cpp:15   ← where it was freed
previously allocated by thread T0 here:
    #1 ... in make_greeting(...) dangling.cpp:7        ← where it was created
```

The report tells the whole story: allocated in `make_greeting`, freed in `print_and_cleanup`, used afterwards in
`main`. Without the sanitizer this program might print the right length, print garbage, or crash — differently on
different machines. That's **undefined behaviour**, and it's why sanitizers belong in every C++ developer's toolbox.

**Your task:** fix it — not by moving the `delete`, but by removing the need for one. A `std::string` already manages
its own memory; return it **by value**. The program must print:

```text
Hello, Ada!
Length: 11
```
