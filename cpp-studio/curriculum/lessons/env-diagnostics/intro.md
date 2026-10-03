# Reading what the compiler tells you

Beginners often experience compiler errors as the computer saying *no*. Professionals read them as the
computer saying *exactly where to look*. The compiler checks your whole program before it ever runs —
every error it catches is a bug that never reaches a user.

In this lesson you'll be handed broken code on purpose. Your job is not just to fix it, but to understand
**which tool** is complaining (preprocessor, compiler or linker) and **what it is actually saying**.

Two habits to build right now:

1. **Fix the first error first.** One mistake can confuse the compiler into reporting many more.
2. **Read the location.** `greet.cpp:6:34` means *file `greet.cpp`, line 6, column 34*.
