## Step 3 — Copying goes wrong

The test file has grown. The new tests **copy** arrays:

```cpp
IntArray b = a;     // copy constructor
b = a;              // copy assignment
```

You never wrote either of those, yet the code compiles: when you don't write them, the compiler generates them,
copying each member one by one.

Run the tests (Check on the next step, or build in the terminal with the command from step 1). Read the failure
*and* the AddressSanitizer report, then answer.
