# Object lifetime: the stack, the heap, and who cleans up

Welcome to Track 2. This is where C++ differs most from Python, Java or JavaScript. In those languages a garbage
collector decides when objects disappear. In C++ **you** decide, and the rules are precise and predictable:

```text
STACK (automatic)                     HEAP (dynamic)
┌──────────────────────────┐          ┌──────────────────────────┐
│ main:  a, c              │          │  Tracer "heap"           │
│ f:     f-local           │  ──────► │  (lives until deleted)   │
└──────────────────────────┘ pointer  └──────────────────────────┘
 objects die at the end of             objects die when someone
 their scope — automatically           destroys them — or never
```

Predictable lifetimes are what make C++ fast and let it manage *any* resource — memory, files, locks, GPU buffers —
with the same mechanism. They are also behind C++'s most notorious bugs: using an object after its lifetime ended.

In this track C++ Studio builds your programs with **AddressSanitizer** and **UndefinedBehaviorSanitizer** —
compiler instrumentation that catches memory errors the instant they happen and reports exactly where.
