## Step 5 — Challenge: the full report

Implement the last two functions declared in `grades.h`, then make the program print a full report:

```text
$ echo "90 72 85 55" | ./build/grades
count: 4
average: 75.5
median: 78.5
grades: A C B F
passed: 3
```

- `letter_grades`: 90 and above `A`, 80+ `B`, 70+ `C`, 60+ `D`, otherwise `F`.
- `count_at_least(scores, threshold)`: how many scores are `>= threshold`. "passed" counts scores of at least 60.
- No scores at all → print `no scores`.

Try writing `count_at_least` with `std::count_if` and a **lambda** — a small unnamed function written inline:

```cpp
auto is_high = [](int s) { return s >= 90; };              // a lambda
std::count_if(v.begin(), v.end(), is_high);

[threshold](int s) { return s >= threshold; }              // captures threshold from the enclosing function
```

Hidden acceptance tests check both functions at the grade boundaries. Add your own tests in `tests/` if you like —
any `*_test.cpp` file is picked up automatically.
