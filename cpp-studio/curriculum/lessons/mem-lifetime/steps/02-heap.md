## Step 2 — Objects you destroy yourself

Some objects must outlive the scope that creates them — for example, a game object created inside a function but
used for the rest of the game. They go on the **heap**:

```cpp
Tracer* h = new Tracer("heap");    // allocate memory, then construct a Tracer in it
std::cout << h->name << '\n';      // -> reaches members through a pointer
delete h;                          // destroy the Tracer, then release the memory
```

`new` returns a **pointer** — the address of the new object. The object lives until someone calls `delete` on that
address. Nothing does it automatically.

**Your task:** in `main`, after `c` is created, create a heap Tracer named `heap`, print `using heap` via the pointer,
and `delete` it just before `main ends` is printed.

> **Experiment:** remove the `delete` and run with C++ Studio's Check. On Linux, LeakSanitizer reports the leak.
> The destructor never runs — so a Tracer that, say, closed a file would leave it open forever.
