## Step 7 — Keep the promise

Write the definition of `circle_area` in `area.cpp`. It must match the declaration in `area.h` exactly.

When it's right, the program prints:

```text
Area of a circle with radius 5: 78.54
```

### Declaration vs definition

```cpp
double circle_area(double radius);          // declaration: "this exists"       (area.h)

double circle_area(double radius) { ... }   // definition: "here it is"         (area.cpp)
```

Headers carry declarations so every `.cpp` that includes them can *call* the function.
Exactly one `.cpp` provides the definition. Each `.cpp` is compiled on its own into an object file,
and the linker connects every call to its definition.

> **Experiment:** change the definition to take an `int` instead of a `double` and rebuild. The compiler is
> happy again — but the linker isn't. Why? (Hint: C++ functions can be *overloaded*, so the parameter types
> are part of a function's identity.)
