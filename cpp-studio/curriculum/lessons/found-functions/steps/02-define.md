## Step 2 — Define it, use it

1. Create `calc.cpp`: include `"calc.h"` and define the four functions.
2. Change `main.cpp` to `#include "calc.h"` and call your functions instead of using `+ - * /` directly.
3. Add `calc.cpp` to the `calculator` target in `CMakeLists.txt`.

The calculator must behave exactly as before — same inputs, same outputs. Changing the structure of code without
changing its behaviour is called **refactoring**. Right now you're verifying that by hand (and C++ Studio is checking
for you). By the end of this lesson, your own tests will do it.

> Why does `calc.cpp` include its own header? So the compiler checks that the definitions match the declarations.
> Remove the include, change one parameter to `int`, and see which tool notices — and when.
