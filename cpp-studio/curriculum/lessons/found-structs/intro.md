# Structs, references and const: an inventory

`int`, `double` and `std::string` only go so far. Real programs model *things*: an inventory item has a name, a
quantity and a price that belong together. In C++ you define your own types for that.

This lesson also tackles the single biggest difference between C++ and Python: **C++ copies values by default.**
In Python, `b = a` makes two names for the same object. In C++, `Item b = a;` makes a second, independent Item.
That's often exactly what you want — and occasionally a bug. You'll meet both.

The project is `projects/inventory/`, set up like the previous lessons: a library (`inventory.h/.cpp`), a program
(`main.cpp`), and tests in `tests/`.
