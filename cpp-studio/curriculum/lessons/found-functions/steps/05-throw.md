## Step 5 — Red, green: a test drives a change

Right now `divide(1, 0)` returns `inf`, and `main` has to remember to check for zero *before* calling it.
Any other code that calls `divide` must remember too. Better: make `divide` itself refuse bad input by
**throwing an exception**.

Do it test-first — the rhythm of **test-driven development**:

1. 🔴 **Red.** Write a test that describes the behaviour you want, and watch it **fail**:

   ```cpp
   #include <stdexcept>

   TEST(divide_by_zero_throws)
   {
       CHECK_THROWS(divide(1, 0), std::invalid_argument);
   }
   ```

   Run the tests. Seeing it fail proves the test can actually detect the problem.

2. 🟢 **Green.** Make `divide` throw:

   ```cpp
   if (b == 0)
       throw std::invalid_argument("division by zero");
   ```

   Run the tests again. All green.

3. 🔵 **Refactor.** Now `main` doesn't need its own zero check. Remove it, and instead **catch** the exception:

   ```cpp
   try {
       // ... the switch ...
   } catch (const std::invalid_argument& e) {
       std::cout << "Error: " << e.what() << '\n';
   }
   ```

`throw` stops the function immediately and unwinds up the call stack until a matching `catch` is found. If nothing
catches it, the program terminates — try it: comment out the `catch` and divide by zero.

The calculator must still print `Error: division by zero` for `1 / 0`, and all your tests must pass.
