# 📘 C++ Refresher Tutorial
## Learn by Building: MyVector, LinkedList, and Calculator

---

# Introduction

This tutorial teaches you C++ by building three projects. But unlike typical tutorials that dump code at you, this one explains **why** things work. After completing it, you should be able to:

- Write similar code from scratch without looking at the tutorial
- Expand on these projects with new features
- Apply these concepts to your university assignments

**How this tutorial works:**
1. I explain a concept with plain language
2. I show a small piece of code (usually 3-5 lines)
3. I explain what that code does and why it's written that way
4. You type it and run it
5. Repeat

Let's begin.

---

# Part 1: Understanding Testing

Before we write any "real" code, we need to understand testing. You mentioned you're taking a testing course – this foundation will help.

---

## Chapter 1: What is a Test?

### The Problem Testing Solves

Imagine you write a function that calculates loan interest. You run it, it prints a number, and you think "looks right." Three weeks later, your bank app crashes because the function returns negative interest for certain inputs.

How do you prevent this? You **test** the function with specific inputs and verify the output is correct.

### A Test is Just a Question

At its core, a test asks:

> "When I call this function with these inputs, do I get the output I expect?"

If yes → ✅ Pass  
If no → ❌ Fail

That's it. A test is an `if` statement.

### Your Mental Model

Think of a test like a quality check at a factory:

```
INPUT → [Function] → OUTPUT
                        ↓
                    Does it match
                    what we expected?
                        ↓
                   Yes: PASS ✅
                   No:  FAIL ❌
```

### Let's Build This Understanding

Create a file called `first_test.cpp`. I'll walk you through every line.

**Line 1: Include iostream**

```cpp
#include <iostream>
```

What does this do? It tells the compiler "I want to use input/output functions like `std::cout`." Without this line, the compiler doesn't know what `cout` means.

The `<iostream>` is a **header file** – a file containing declarations of functions and classes you want to use. The angle brackets `< >` mean "look in the standard library locations."

**Lines 3-5: The function we'll test**

```cpp
int add(int a, int b) {
    return a + b;
}
```

Let's break this down piece by piece:

- `int` (first word): This function returns an integer. When you call `add(2, 3)`, you get back the number `5`.

- `add`: The function's name. You choose this. Make it descriptive.

- `(int a, int b)`: The **parameters**. This function takes two integer inputs. When called, `a` receives the first value and `b` receives the second.

- `return a + b;`: This computes the sum and sends it back to whoever called the function.

**Why does `return` matter?**

Without `return`, the function computes `a + b` but throws away the result. `return` is how the function communicates its answer back.

Think of it like asking someone a question:
- Without return: "What's 2 + 3?" → They think "5" but say nothing
- With return: "What's 2 + 3?" → "5"

**Lines 7-15: The test function**

```cpp
void test_add() {
    int result = add(2, 3);
    
    if (result == 5) {
        std::cout << "PASS: add(2, 3) equals 5\n";
    } else {
        std::cout << "FAIL: add(2, 3) returned " << result << "\n";
    }
}
```

Let's understand each part:

- `void`: This function returns nothing. It just does something (prints) but doesn't give back a value.

- `int result = add(2, 3);`: Call the `add` function with inputs 2 and 3, and store what it returns in a variable called `result`.

- `if (result == 5)`: Check if `result` equals 5. The `==` is the equality operator (single `=` is assignment, double `==` is comparison).

- The `std::cout << "..."` lines print text. The `\n` creates a new line.

**This is the pattern every test follows:**

1. **Arrange**: Set up the inputs (here: 2 and 3)
2. **Act**: Call the function (`add(2, 3)`)
3. **Assert**: Check the result (`if (result == 5)`)

This pattern is called **AAA** (Arrange, Act, Assert). Memorize it – you'll use it in every test you ever write.

**Lines 17-20: The main function**

```cpp
int main() {
    test_add();
    return 0;
}
```

Every C++ program starts execution from `main()`. It's the entry point.

- `int main()`: Returns an integer to the operating system
- `test_add();`: Calls our test function
- `return 0;`: Tells the OS "I finished successfully" (0 = success, other numbers = error)

### The Complete File

Now type the complete file:

```cpp
#include <iostream>

int add(int a, int b) {
    return a + b;
}

void test_add() {
    int result = add(2, 3);
    
    if (result == 5) {
        std::cout << "PASS: add(2, 3) equals 5\n";
    } else {
        std::cout << "FAIL: add(2, 3) returned " << result << "\n";
    }
}

int main() {
    test_add();
    return 0;
}
```

### Compile and Run

```bash
g++ -std=c++17 first_test.cpp -o first_test
./first_test
```

What do these commands mean?

- `g++`: The C++ compiler
- `-std=c++17`: Use the C++17 standard (modern C++)
- `first_test.cpp`: Your source file
- `-o first_test`: Name the output executable `first_test`
- `./first_test`: Run the program (`./ ` means "in this directory")

You should see: `PASS: add(2, 3) equals 5`

### Experiment: Break It

Change `add` to return `a * b` instead of `a + b`. Recompile and run. You'll see the FAIL message. This is exactly what tests are for – catching bugs.

**Change it back before continuing.**

### What You Now Understand

- A test checks if a function's output matches expectations
- Tests follow the Arrange-Act-Assert pattern
- Every C++ program starts from `main()`
- `#include` brings in functionality from other files
- Functions have a return type, name, and parameters

---

## Chapter 2: Why Use a Testing Library?

### The Problem with Manual Tests

Our test worked, but imagine having 50 functions to test. You'd write:

```cpp
void test_add() { ... }
void test_subtract() { ... }
void test_multiply() { ... }
// ... 47 more ...

int main() {
    test_add();
    test_subtract();
    test_multiply();
    // ... call all 50 ...
}
```

Problems:
1. Repeating `if (result == expected)` 50 times is tedious
2. You must manually call every test in main()
3. Output is just text – no organization

### GoogleTest Solves This

GoogleTest is a library that:
- Provides cleaner syntax: `EXPECT_EQ(result, 5)` instead of `if (result == 5)`
- Auto-discovers tests (no need to call them manually)
- Gives organized, colored output
- Provides many assertion types

### Installing GoogleTest

**On macOS:**
```bash
brew install googletest
```

**On Ubuntu:**
```bash
sudo apt-get install libgtest-dev
```

### Your First GoogleTest File

Create `gtest_intro.cpp`:

```cpp
#include <gtest/gtest.h>
```

This includes the GoogleTest header. Unlike `<iostream>`, this isn't part of the standard library – it's an external library you installed.

```cpp
int add(int a, int b) {
    return a + b;
}
```

Same function as before.

```cpp
TEST(AddTest, TwoPositiveNumbers) {
    int result = add(2, 3);
    EXPECT_EQ(result, 5);
}
```

Let's break down this new syntax:

- `TEST(AddTest, TwoPositiveNumbers)`: This is a **macro** that defines a test.
  - `AddTest`: The test suite name (a group of related tests)
  - `TwoPositiveNumbers`: This specific test's name
  
- `EXPECT_EQ(result, 5)`: "I expect `result` to equal `5`". If they're not equal, the test fails.

**Why EXPECT instead of ASSERT?**

GoogleTest has two types:
- `EXPECT_*`: If this fails, continue running the test
- `ASSERT_*`: If this fails, stop the test immediately

Use `EXPECT` by default. Use `ASSERT` when continuing would cause a crash (like checking a pointer isn't null before using it).

### More Assertions

```cpp
TEST(AddTest, WithNegatives) {
    EXPECT_EQ(add(-1, -2), -3);
}

TEST(AddTest, WithZero) {
    EXPECT_EQ(add(5, 0), 5);
    EXPECT_EQ(add(0, 0), 0);
}

TEST(AddTest, ResultIsPositive) {
    int result = add(10, 20);
    EXPECT_GT(result, 0);  // Greater Than
}
```

Other useful assertions:
- `EXPECT_TRUE(x)` – x should be true
- `EXPECT_FALSE(x)` – x should be false
- `EXPECT_NE(a, b)` – a should Not Equal b
- `EXPECT_LT(a, b)` – a should be Less Than b
- `EXPECT_LE(a, b)` – a should be Less than or Equal to b

### The Complete File

```cpp
#include <gtest/gtest.h>

int add(int a, int b) {
    return a + b;
}

TEST(AddTest, TwoPositiveNumbers) {
    int result = add(2, 3);
    EXPECT_EQ(result, 5);
}

TEST(AddTest, WithNegatives) {
    EXPECT_EQ(add(-1, -2), -3);
}

TEST(AddTest, WithZero) {
    EXPECT_EQ(add(5, 0), 5);
    EXPECT_EQ(add(0, 0), 0);
}
```

### Compile and Run

```bash
g++ -std=c++17 gtest_intro.cpp \
    -lgtest -lgtest_main -pthread \
    -I/opt/homebrew/include -L/opt/homebrew/lib \
    -o gtest_intro
./gtest_intro
```

New flags explained:
- `-lgtest`: Link the GoogleTest library
- `-lgtest_main`: Use GoogleTest's main() function (so you don't write one)
- `-pthread`: Enable threading (GoogleTest needs this internally)
- `-I/opt/homebrew/include`: Where to find header files
- `-L/opt/homebrew/lib`: Where to find library files

**Note:** On Intel Mac or Linux, replace `/opt/homebrew` with `/usr/local`.

### What You Now Understand

- Testing libraries reduce repetition and improve organization
- `TEST(Suite, Name)` defines a test
- `EXPECT_EQ` checks equality
- GoogleTest provides `main()` via `-lgtest_main`
- The compiler needs flags to find and link libraries

---

## Chapter 3: The TDD Cycle

### What is TDD?

Test-Driven Development means writing the test **before** the code.

This feels backwards at first. "How can I test something that doesn't exist?"

The answer: the test describes what you **want** to exist. It's like writing a shopping list before going to the store – you're describing what should be there when you're done.

### The Cycle

```
┌──────────────────────────────────────────────────┐
│  1. 🔴 RED: Write a test. Run it. It fails.      │
│                                                  │
│  2. 🟢 GREEN: Write minimal code to pass.        │
│                                                  │
│  3. 🔄 REFACTOR: Clean up, keeping tests green.  │
│                                                  │
│  4. Repeat.                                      │
└──────────────────────────────────────────────────┘
```

### Why This Order?

**Writing tests first forces you to:**
- Think about what the function should do before how
- Define the interface (what inputs, what output) clearly
- Avoid over-engineering (you only write code to pass tests)

**Writing code first risks:**
- Writing tests that just confirm what the code does (even if wrong)
- Discovering late that the interface is awkward
- Building features you don't need

### Example: Building `isEven`

Let's say we want a function that returns true if a number is even.

**Step 1: RED – Write the failing test**

```cpp
TEST(IsEvenTest, TwoIsEven) {
    EXPECT_TRUE(isEven(2));
}
```

Compile – it fails! `isEven` doesn't exist. This is the RED phase.

**Step 2: GREEN – Write minimal code**

```cpp
bool isEven(int n) {
    return n % 2 == 0;
}
```

The `%` operator gives the remainder after division. `n % 2` is 0 if n is divisible by 2 (i.e., even).

Compile and run – it passes! GREEN phase.

**Step 3: Add more tests**

```cpp
TEST(IsEvenTest, ThreeIsOdd) {
    EXPECT_FALSE(isEven(3));
}

TEST(IsEvenTest, ZeroIsEven) {
    EXPECT_TRUE(isEven(0));
}

TEST(IsEvenTest, NegativeEven) {
    EXPECT_TRUE(isEven(-4));
}
```

Run – all pass. Our function handles edge cases.

### What You Now Understand

- TDD: Test first, code second
- RED: Test fails because code doesn't exist
- GREEN: Write just enough code to pass
- REFACTOR: Clean up without breaking tests
- Tests define behavior before implementation

---

# Part 2: Building MyVector

Now we apply TDD to build something real: our own version of `std::vector`.

---

## Chapter 4: What is a Class?

### The Concept

A **class** is a blueprint for creating objects. An object bundles:
- **Data** (what it stores)
- **Behavior** (what it can do)

Example: A `BankAccount` class might have:
- Data: `balance`, `accountNumber`
- Behavior: `deposit()`, `withdraw()`, `getBalance()`

You define the class once, then create multiple accounts from it:

```cpp
BankAccount alice;
BankAccount bob;
alice.deposit(100);
```

### Anatomy of a Class

```cpp
class MyClass {
public:
    // Things anyone can use
    
private:
    // Things only the class itself can use
};
```

**public**: Accessible from anywhere. This is the class's "interface" – what users interact with.

**private**: Hidden from the outside. This is "implementation detail" – internal stuff users shouldn't touch.

**Why hide things?**

If users directly access internal data, they might break things. By hiding internals, you can change how the class works without breaking user code.

Example: A car's steering wheel (public) vs engine internals (private). You use the wheel; you don't manually adjust pistons.

### Constructors

A **constructor** is a special function that runs when you create an object:

```cpp
class MyVector {
public:
    MyVector() {
        // This runs when you write: MyVector v;
    }
};
```

The constructor:
- Has the same name as the class
- Has no return type (not even void)
- Initializes the object's data

### Let's Start Building

Create a folder structure:

```bash
mkdir -p myvector
cd myvector
```

Create `test_myvector.cpp`:

```cpp
#include <gtest/gtest.h>
#include "myvector.h"

TEST(MyVectorTest, StartsEmpty) {
    MyVector vec;
    EXPECT_EQ(vec.size(), 0);
}
```

This test says: "A new MyVector should have size 0."

**RED phase**: This won't compile because `MyVector` doesn't exist.

Create `myvector.h`:

```cpp
#ifndef MYVECTOR_H
#define MYVECTOR_H

class MyVector {
public:
    MyVector() {
        m_size = 0;
    }
    
    int size() const {
        return m_size;
    }

private:
    int m_size;
};

#endif
```

Let me explain every piece:

**Header guards:**
```cpp
#ifndef MYVECTOR_H
#define MYVECTOR_H
// ...
#endif
```

If you `#include` the same file twice (accidentally or through chains), you'd get "already defined" errors. Header guards prevent this by checking "if this symbol isn't defined yet, define it and include the content."

**The member variable:**
```cpp
private:
    int m_size;
```

`m_size` is a variable that belongs to each `MyVector` object. The `m_` prefix is a naming convention meaning "member" – it helps distinguish member variables from local variables.

**The constructor:**
```cpp
MyVector() {
    m_size = 0;
}
```

When you write `MyVector vec;`, this runs and sets `m_size` to 0.

**The size function:**
```cpp
int size() const {
    return m_size;
}
```

The `const` at the end means "this function doesn't modify the object." It's a promise to the compiler and to readers. Functions that just return data should be `const`.

### Compile and Test

```bash
g++ -std=c++17 test_myvector.cpp \
    -lgtest -lgtest_main -pthread \
    -I/opt/homebrew/include -L/opt/homebrew/lib \
    -o test_myvector
./test_myvector
```

**GREEN**: The test passes.

### What You Now Understand

- A class bundles data and behavior
- `public` is the interface, `private` hides internals
- Constructors initialize objects
- Member variables (like `m_size`) belong to each object
- `const` methods don't modify the object
- Header guards prevent double-inclusion

---

## Chapter 5: Dynamic Memory

Our vector needs to store elements. Where do we put them?

### Stack vs Heap

**Stack memory:**
- Automatic – the compiler manages it
- Fast
- Limited size
- Variables die when the function ends

```cpp
void example() {
    int x = 5;  // On the stack
}  // x is destroyed here
```

**Heap memory:**
- Manual – you manage it with `new` and `delete`
- Larger
- Lives until you explicitly free it

```cpp
void example() {
    int* p = new int(5);  // 5 is on the heap
    // ...
    delete p;  // You must free it
}
```

### Why Does a Vector Need the Heap?

If we store elements on the stack:
```cpp
int elements[10];  // Fixed size, decided at compile time
```

We can't grow this. What if we need 11 elements?

With the heap, we can allocate any size at runtime:
```cpp
int* elements = new int[100];  // 100 integers
// Later...
delete[] elements;
int* elements = new int[200];  // Now 200 integers
```

### The Test

Add to `test_myvector.cpp`:

```cpp
TEST(MyVectorTest, CanPushBack) {
    MyVector vec;
    vec.push_back(10);
    vec.push_back(20);
    
    EXPECT_EQ(vec.size(), 2);
}

TEST(MyVectorTest, CanAccessElements) {
    MyVector vec;
    vec.push_back(100);
    vec.push_back(200);
    
    EXPECT_EQ(vec.at(0), 100);
    EXPECT_EQ(vec.at(1), 200);
}
```

**RED**: Won't compile – `push_back` and `at` don't exist.

### The Implementation

Update `myvector.h`:

```cpp
#ifndef MYVECTOR_H
#define MYVECTOR_H

class MyVector {
public:
    MyVector() {
        m_capacity = 4;          // Start with space for 4 elements
        m_size = 0;              // Currently storing 0 elements
        m_data = new int[m_capacity];  // Allocate array on heap
    }
    
    ~MyVector() {
        delete[] m_data;  // Free the heap memory
    }
    
    void push_back(int value) {
        if (m_size >= m_capacity) {
            resize();
        }
        m_data[m_size] = value;
        m_size++;
    }
    
    int at(int index) const {
        return m_data[index];
    }
    
    int size() const {
        return m_size;
    }

private:
    int* m_data;      // Pointer to the array on the heap
    int m_size;       // How many elements we have
    int m_capacity;   // How much space is allocated
    
    void resize() {
        int new_capacity = m_capacity * 2;
        int* new_data = new int[new_capacity];
        
        for (int i = 0; i < m_size; i++) {
            new_data[i] = m_data[i];
        }
        
        delete[] m_data;
        m_data = new_data;
        m_capacity = new_capacity;
    }
};

#endif
```

Let me explain the key pieces:

**The destructor:**
```cpp
~MyVector() {
    delete[] m_data;
}
```

The `~` prefix indicates a destructor. It runs when the object is destroyed. We MUST free the memory we allocated, or we have a **memory leak** – memory that's allocated but never freed.

**push_back:**
```cpp
void push_back(int value) {
    if (m_size >= m_capacity) {
        resize();  // Grow if full
    }
    m_data[m_size] = value;  // Store at next empty slot
    m_size++;                 // Update count
}
```

**resize:**
```cpp
void resize() {
    int new_capacity = m_capacity * 2;  // Double the size
    int* new_data = new int[new_capacity];  // Allocate bigger array
    
    for (int i = 0; i < m_size; i++) {
        new_data[i] = m_data[i];  // Copy elements
    }
    
    delete[] m_data;      // Free old array
    m_data = new_data;    // Point to new array
    m_capacity = new_capacity;
}
```

### What is RAII?

You just implemented **RAII** (Resource Acquisition Is Initialization):

- **Acquire** resources (memory) in the constructor
- **Release** resources in the destructor
- When the object goes out of scope, cleanup happens automatically

```cpp
void example() {
    MyVector vec;
    vec.push_back(1);
    vec.push_back(2);
}  // vec's destructor runs here, memory is freed automatically
```

No manual cleanup needed. No memory leaks. This is why C++ destructors are powerful.

### Compile and Test

```bash
g++ -std=c++17 test_myvector.cpp \
    -lgtest -lgtest_main -pthread \
    -I/opt/homebrew/include -L/opt/homebrew/lib \
    -o test_myvector
./test_myvector
```

**GREEN**: All tests pass.

### What You Now Understand

- Stack memory is automatic, heap memory is manual
- `new` allocates on the heap, `delete` frees it
- `new[]` for arrays, `delete[]` for arrays
- Destructors clean up when objects die
- RAII ties resource lifetime to object lifetime
- A vector grows by allocating a new, larger array and copying elements

---

*[Tutorial continues with Chapters 6-14...]*

---

# Summary of Part 1

You've learned:

1. **Testing fundamentals**: A test is code that verifies function behavior
2. **GoogleTest**: Professional testing with `TEST()` and `EXPECT_*()`
3. **TDD cycle**: Red → Green → Refactor
4. **Classes**: Bundling data and behavior
5. **Dynamic memory**: `new`, `delete`, and why vectors need the heap
6. **RAII**: Automatic cleanup via destructors

Each concept builds on the previous. You understand WHY things work, not just WHAT to type.

Continue to Part 2 for operator overloading, templates, and LinkedList.
