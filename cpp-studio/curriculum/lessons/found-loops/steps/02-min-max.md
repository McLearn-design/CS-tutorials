## Step 2 — Smallest, largest, average — and nothing at all

Extend the summary:

```text
count: 3
sum: 18
min: 3
max: 10
average: 6
```

Two decisions every programmer has to make here:

1. **What does `min` start as?** If you start it at `0`, the input `3 5 10` reports a minimum of `0`, which never
   appeared. Start from the first value instead.
2. **What if there are no numbers at all?** `sum / count` would be `0.0 / 0` — not a number. Real programs must handle
   the empty case deliberately. Print `no numbers` instead.

Test the edge cases yourself before pressing Check:

```sh
echo "7" | ./stats
echo "" | ./stats
echo "-2.5 4" | ./stats
```

> The habit to build: whenever you write a loop, ask *"what happens with zero items? with one?"*
