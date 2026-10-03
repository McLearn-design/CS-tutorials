# std::vector and algorithms: a grade book

So far your programs processed each number the moment they read it. Many problems need *all* the data first — you
can't find a median until you've seen every score. You need a container.

`std::vector` is the container you will use more than every other one combined: a contiguous, growable array that
manages its own memory. In this lesson you'll build a grade book in `projects/gradebook/` and meet the standard
library's **algorithms** — tested, optimised functions like `std::sort` that work on any sequence.
