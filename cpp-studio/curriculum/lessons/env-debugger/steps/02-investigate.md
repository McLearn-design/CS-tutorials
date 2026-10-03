## Step 2 — Stop the program and look inside

### In VS Code

1. Press **Debug** in the C++ Studio lesson panel. C++ Studio builds the program with `-g` and starts it under the
   debugger (requires the Microsoft C/C++ or CodeLLDB extension).
2. The program runs until it crashes, and the debugger **stops on the exact line**. The editor highlights it.
3. Look at the **Variables** panel: what is `name`? What is `item`?
4. Look at the **Call Stack** panel: `main` is at the top (on some platforms there are library frames above it).

Now do it the deliberate way: click in the gutter left of the `Item* item = find_item(...)` line to set a
**breakpoint** (a red dot), and start debugging again. The program pauses *before* that line runs. Use:

| Button | Key | What it does |
|--------|-----|--------------|
| Continue | F5 | run until the next breakpoint |
| Step Over | F10 | run this line, stop at the next one |
| Step Into | F11 | go *inside* the function being called |
| Step Out | ⇧F11 | finish this function, return to the caller |

Step **into** `find_item` for "screws" and watch the loop compare each item's name. Watch it fall out of the loop
and `return nullptr`.

### In a terminal (gdb or lldb)

```text
$ gdb ./inventory                $ lldb ./inventory
(gdb) run                        (lldb) run
   ... SIGSEGV ...                  ... EXC_BAD_ACCESS ...
(gdb) backtrace                  (lldb) bt
(gdb) print name                 (lldb) frame variable name
(gdb) print item                 (lldb) frame variable item
(gdb) break inventory.cpp:26     (lldb) b inventory.cpp:26
(gdb) run                        (lldb) run
(gdb) next / step / continue     (lldb) next / step / continue
```

Answer the question using what you **observed**, not what you guess.
