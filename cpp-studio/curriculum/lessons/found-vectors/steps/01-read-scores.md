## Step 1 — A list that grows

```cpp
#include <vector>

std::vector<int> scores;        // an empty vector of ints
scores.push_back(90);           // append → {90}
scores.push_back(72);           // → {90, 72}
scores.size();                  // 2
scores[0];                      // 90 — indices start at 0
scores.empty();                 // false
```

The `<int>` says what the vector holds. Every element has the same type, and the compiler checks it.

**Your task:** in `main.cpp`, read scores until input ends, storing them in a vector. Then print:

```text
count: 3
scores: 90 72 85
```

```sh
cmake -S . -B build && cmake --build build && echo "90 72 85" | ./build/grades
```
