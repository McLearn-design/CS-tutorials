## Step 3 — Median: sorting a copy

The median is the middle value once the scores are sorted:

```cpp
#include <algorithm>

std::sort(scores.begin(), scores.end());    // ascending, in place
```

Look at the declaration of `median` in `grades.h` — notice that it takes its parameter **by value**:

```cpp
double median(std::vector<int> scores);
```

so `median` works on its own copy. Implement it to pass `tests/median_test.cpp`. One test checks that the caller's
vector is left unchanged.

`std::sort` is O(n log n): sorting a million scores takes about 20 million comparisons, not a trillion. Choosing a good
algorithm matters far more than micro-optimising code — you'll measure this yourself in the data-structures track.
