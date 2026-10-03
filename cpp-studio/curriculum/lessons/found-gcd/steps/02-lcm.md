## Step 2 — Least common multiple: your tests, hidden tests

**Requirement:** add

```cpp
long long lcm(long long a, long long b);
```

returning the least common multiple: the smallest non-negative integer that both `a` and `b` divide. By convention,
`lcm(x, 0) == 0`.

This time **you write the tests**: create `tests/lcm_test.cpp` with at least three tests and add it to `calc_tests`.

When you press Check, C++ Studio also runs a set of **hidden acceptance tests** against your `lcm` — just as a CI server
or a code reviewer would test your work against cases you didn't think of. If they fail, don't reach for the hint first:
ask yourself which inputs your own tests don't cover yet, write a test for each, and see whether it fails.
