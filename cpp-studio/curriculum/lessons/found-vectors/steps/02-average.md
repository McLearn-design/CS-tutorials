## Step 2 — Average, with an algorithm

You could write the sum loop yourself — you did in the loops lesson. But the standard library already has it:

```cpp
#include <numeric>

double total = std::accumulate(scores.begin(), scores.end(), 0.0);
```

`scores.begin()` and `scores.end()` are **iterators**: positions in the sequence. Algorithms take a *range* — begin up to
(but not including) end, the same half-open convention as `for (i = 0; i < n; ++i)`. That lets one `std::accumulate` work
on vectors, arrays, lists, and anything else with iterators.

The third argument is the starting value, and its type is the type of the result. Pass `0` and you'd get an `int`
sum; pass `0.0` and you get a `double`.

**Your task:** implement `average` in `grades.cpp`. The new tests in `tests/average_test.cpp` define the behaviour,
including throwing `std::invalid_argument` for an empty vector.
