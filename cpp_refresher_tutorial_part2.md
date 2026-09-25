# 📘 C++ Refresher Tutorial — Part 2
## Operator Overloading, Templates, and Pointers

*This continues from Part 1*

---

## Chapter 6: Operator Overloading

### The Concept

In C++, operators like `+`, `-`, `[]`, and `<<` are actually function calls in disguise.

When you write:
```cpp
int a = 2 + 3;
```

The compiler translates this to something like:
```cpp
int a = operator+(2, 3);
```

For your own classes, you can define what these operators do. This is called **operator overloading**.

### Why Would You Want This?

Our `MyVector` has `at(index)` to access elements:

```cpp
int value = vec.at(0);
```

But that's clunky. We want:

```cpp
int value = vec[0];  // Much cleaner
```

To make `[]` work on `MyVector`, we "overload" the `[]` operator.

### Understanding References First

Before we implement `operator[]`, we need to understand **references**.

A reference is an alias – another name for an existing variable:

```cpp
int x = 10;
int& ref = x;  // ref IS x, not a copy

ref = 20;      // This changes x to 20
std::cout << x;  // Prints 20
```

The `&` after the type means "reference to."

**Why do we need this for operator[]?**

Consider:
```cpp
vec[0] = 42;  // We want to modify the element
```

If `operator[]` returns a copy of the element, modifying it doesn't affect the vector. By returning a **reference**, we're giving direct access to the element in the array.

### The Test

Add to `test_myvector.cpp`:

```cpp
TEST(MyVectorTest, CanUseSquareBrackets) {
    MyVector vec;
    vec.push_back(10);
    vec.push_back(20);
    
    EXPECT_EQ(vec[0], 10);
    EXPECT_EQ(vec[1], 20);
}

TEST(MyVectorTest, CanModifyWithSquareBrackets) {
    MyVector vec;
    vec.push_back(0);
    
    vec[0] = 999;
    
    EXPECT_EQ(vec[0], 999);
}
```

**RED**: Won't compile – `operator[]` doesn't exist.

### The Implementation

Add to `MyVector` class:

```cpp
int& operator[](int index) {
    return m_data[index];
}
```

Let's understand every part:

- `int&`: Returns a **reference** to an integer, not a copy
- `operator[]`: The function name for the `[]` operator
- `(int index)`: Takes the index between the brackets
- `return m_data[index]`: Returns a reference to that element

**What would happen if we returned `int` instead of `int&`?**

```cpp
int operator[](int index) {  // Returns a copy
    return m_data[index];
}
```

Then `vec[0] = 999` would:
1. Get a copy of the element
2. Assign 999 to the copy
3. Throw away the copy

The actual vector element wouldn't change! By returning `int&`, we return the actual element, and modifications stick.

### Const Version

We also need a version for when the vector itself is const:

```cpp
const int& operator[](int index) const {
    return m_data[index];
}
```

The first `const` means the returned reference can't be modified.
The second `const` (after the parentheses) means this method can be called on const vectors.

Why do we need both versions? Consider:

```cpp
void print_first(const MyVector& vec) {
    std::cout << vec[0];  // Need const version here
}
```

If we only had the non-const version, this wouldn't compile.

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

- Operators are function calls you can define for your classes
- `int& operator[]` returns a reference, allowing modification
- `const int& operator[] const` is for const objects
- References are aliases, not copies
- Returning by reference gives direct access to data

---

## Chapter 7: Templates

### The Problem

Our `MyVector` only stores `int`. What if we want to store `double`, or `std::string`, or any type?

We could copy the class and change `int` to `double`:

```cpp
class MyVectorDouble {
    double* m_data;
    // ... exactly the same logic ...
};
```

But that's terrible. We'd have duplicated code for every type.

### The Solution: Templates

A **template** is a blueprint that works with any type:

```cpp
template<typename T>
class MyVector {
    T* m_data;  // T is whatever type you specify
    // ...
};
```

When you use it:
```cpp
MyVector<int> ints;       // T becomes int
MyVector<double> doubles;  // T becomes double
MyVector<std::string> strings;  // T becomes std::string
```

The compiler generates a separate class for each type you use.

### How Templates Work

Think of `T` as a placeholder:

```cpp
template<typename T>
T add(T a, T b) {
    return a + b;
}
```

When you call `add(2, 3)`, the compiler sees `int` and generates:
```cpp
int add(int a, int b) {
    return a + b;
}
```

When you call `add(2.5, 3.7)`, it generates:
```cpp
double add(double a, double b) {
    return a + b;
}
```

### Converting MyVector to a Template

The entire class must be in the header file. Templates are generated at compile time, and the compiler needs to see the full implementation.

Replace `myvector.h`:

```cpp
#ifndef MYVECTOR_H
#define MYVECTOR_H

template<typename T>
class MyVector {
public:
    MyVector() {
        m_capacity = 4;
        m_size = 0;
        m_data = new T[m_capacity];  // Array of T, not int
    }
    
    ~MyVector() {
        delete[] m_data;
    }
    
    void push_back(const T& value) {
        if (m_size >= m_capacity) {
            resize();
        }
        m_data[m_size] = value;
        m_size++;
    }
    
    T& operator[](int index) {
        return m_data[index];
    }
    
    const T& operator[](int index) const {
        return m_data[index];
    }
    
    int size() const {
        return m_size;
    }

private:
    T* m_data;
    int m_size;
    int m_capacity;
    
    void resize() {
        int new_capacity = m_capacity * 2;
        T* new_data = new T[new_capacity];
        
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

Changes from before:
- Added `template<typename T>` before the class
- Changed `int*` to `T*`
- Changed `int` returns to `T` returns (or `T&`)
- Changed `const int&` parameters to `const T&`

### Why `const T&` for parameters?

```cpp
void push_back(const T& value)
```

If T is `std::string` (a large object), passing by value makes a copy. By using `const T&`, we pass by reference (fast) and promise not to modify it.

For small types like `int`, this isn't necessary, but it doesn't hurt. For large types, it's a significant performance improvement.

### Update the Tests

```cpp
#include <gtest/gtest.h>
#include "myvector.h"
#include <string>

TEST(MyVectorTest, WorksWithIntegers) {
    MyVector<int> vec;
    vec.push_back(10);
    vec.push_back(20);
    
    EXPECT_EQ(vec[0], 10);
    EXPECT_EQ(vec.size(), 2);
}

TEST(MyVectorTest, WorksWithDoubles) {
    MyVector<double> vec;
    vec.push_back(3.14);
    vec.push_back(2.71);
    
    EXPECT_DOUBLE_EQ(vec[0], 3.14);
}

TEST(MyVectorTest, WorksWithStrings) {
    MyVector<std::string> vec;
    vec.push_back("hello");
    vec.push_back("world");
    
    EXPECT_EQ(vec[0], "hello");
    EXPECT_EQ(vec[1], "world");
}
```

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

- Templates let you write code that works with any type
- `template<typename T>` declares T as a type placeholder
- `MyVector<int>` tells the compiler "T is int for this instance"
- Template code must be in header files
- `const T&` is efficient for passing any type

---

## Chapter 8: Pointers In Depth

Now we'll build a LinkedList. This requires deep understanding of pointers.

### What is a Pointer?

A pointer is a variable that holds a memory address.

Every variable lives somewhere in memory. That "somewhere" is an address – a number like `0x7fff1234`.

```cpp
int x = 42;
```

Somewhere in memory:
```
Address: 0x7fff5678
┌────────┐
│   42   │  ← This is x
└────────┘
```

A pointer stores that address:

```cpp
int* p = &x;  // p holds the address of x
```

```
Address: 0x7fff9999        Address: 0x7fff5678
┌──────────────┐           ┌────────┐
│  0x7fff5678  │  ──────►  │   42   │
└──────────────┘           └────────┘
      p                         x
```

### The Operators

`&` (address-of): Gets the address of a variable
```cpp
int x = 42;
int* p = &x;  // p now holds x's address
```

`*` (dereference): Accesses the value at an address
```cpp
int value = *p;  // Gets the value at p's address, which is 42
*p = 100;        // Changes the value at p's address (changes x to 100)
```

### Practice It

```cpp
#include <iostream>

int main() {
    int x = 10;
    int* p = &x;
    
    std::cout << "x is: " << x << "\n";           // 10
    std::cout << "Address of x: " << &x << "\n";   // Some hex number
    std::cout << "p contains: " << p << "\n";      // Same hex number
    std::cout << "Value at p: " << *p << "\n";     // 10
    
    *p = 20;
    
    std::cout << "After *p = 20, x is: " << x << "\n";  // 20
}
```

### Why Do Pointers Matter for LinkedList?

An array stores elements in contiguous (sequential) memory:
```
[10][20][30][40]
```

A linked list stores elements scattered in memory, connected by pointers:
```
┌────┬────┐     ┌────┬────┐     ┌────┬────┐
│ 10 │  ●─┼────►│ 20 │  ●─┼────►│ 30 │null│
└────┴────┘     └────┴────┘     └────┴────┘
  Node 1          Node 2          Node 3
```

Each node has:
- `data`: The value stored
- `next`: Pointer to the next node

The last node's `next` is `nullptr` (points to nothing).

### The Arrow Operator (`->`)

When you have a pointer to a struct/class, you access members with `->`:

```cpp
struct Node {
    int data;
    Node* next;
};

Node* p = new Node();
p->data = 10;       // Same as (*p).data = 10
p->next = nullptr;  // Same as (*p).next = nullptr
```

`->` is shorthand for "dereference and access member."

### nullptr

`nullptr` is a special value meaning "points to nothing." Always check for it before dereferencing:

```cpp
if (p != nullptr) {
    std::cout << *p;  // Safe
}

if (p == nullptr) {
    std::cout << "p points to nothing";
}
```

Dereferencing `nullptr` causes a crash (segmentation fault).

### What You Now Understand

- A pointer stores a memory address
- `&` gets an address, `*` accesses the value at an address
- `->` accesses members through a pointer
- `nullptr` means "points to nothing"
- LinkedLists use pointers to connect nodes scattered in memory

---

## Chapter 9: Building LinkedList

### Create the Project

```bash
mkdir -p linkedlist
cd linkedlist
```

### The Node Structure

First, we need a `Node`:

```cpp
struct Node {
    int data;
    Node* next;
    
    Node(int value) : data(value), next(nullptr) {}
};
```

Let's understand the constructor:

```cpp
Node(int value) : data(value), next(nullptr) {}
```

The `: data(value), next(nullptr)` is an **initializer list**. It initializes member variables directly, rather than assigning after default construction. This is more efficient for complex types.

It's equivalent to:
```cpp
Node(int value) {
    data = value;
    next = nullptr;
}
```

But the initializer list version is preferred.

### The Test

Create `test_linkedlist.cpp`:

```cpp
#include <gtest/gtest.h>
#include "linkedlist.h"

TEST(LinkedListTest, StartsEmpty) {
    LinkedList list;
    
    EXPECT_EQ(list.size(), 0);
    EXPECT_TRUE(list.isEmpty());
}

TEST(LinkedListTest, CanInsertFront) {
    LinkedList list;
    
    list.insertFront(10);
    list.insertFront(20);
    
    EXPECT_EQ(list.size(), 2);
    EXPECT_EQ(list.front(), 20);  // Most recent insert
}
```

### The Implementation

Create `linkedlist.h`:

```cpp
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

struct Node {
    int data;
    Node* next;
    
    Node(int value) : data(value), next(nullptr) {}
};

class LinkedList {
public:
    LinkedList() : m_head(nullptr), m_size(0) {}
    
    ~LinkedList() {
        Node* current = m_head;
        while (current != nullptr) {
            Node* next = current->next;
            delete current;
            current = next;
        }
    }
```

Let's understand the destructor:

```cpp
~LinkedList() {
    Node* current = m_head;
    while (current != nullptr) {
        Node* next = current->next;  // Save next before deleting
        delete current;               // Free this node
        current = next;                // Move to next
    }
}
```

Each node was created with `new`, so each must be `delete`d. We traverse the list, deleting each node. We save `next` before deleting because after `delete`, the memory is gone.

```cpp
    void insertFront(int value) {
        Node* newNode = new Node(value);
        newNode->next = m_head;
        m_head = newNode;
        m_size++;
    }
```

Step by step:
1. Create a new node on the heap
2. Point its `next` to the current head
3. Make the new node the head
4. Increment size

Visually:
```
Before: head → [10] → [20] → nullptr

Insert 30:
Step 1: newNode → [30]
Step 2: newNode → [30] → [10] → [20] → nullptr
                    ↑
Step 3: head ───────┘

After: head → [30] → [10] → [20] → nullptr
```

```cpp
    int front() const {
        if (m_head == nullptr) {
            throw std::runtime_error("List is empty");
        }
        return m_head->data;
    }
    
    int size() const {
        return m_size;
    }
    
    bool isEmpty() const {
        return m_size == 0;
    }

private:
    Node* m_head;
    int m_size;
};

#endif
```

### Compile and Test

```bash
g++ -std=c++17 test_linkedlist.cpp \
    -lgtest -lgtest_main -pthread \
    -I/opt/homebrew/include -L/opt/homebrew/lib \
    -o test_linkedlist
./test_linkedlist
```

### Adding More Operations

**Test for insertBack:**

```cpp
TEST(LinkedListTest, CanInsertBack) {
    LinkedList list;
    
    list.insertBack(1);
    list.insertBack(2);
    list.insertBack(3);
    
    EXPECT_EQ(list.front(), 1);  // First in is still at front
}
```

**Implementation:**

```cpp
void insertBack(int value) {
    Node* newNode = new Node(value);
    
    if (m_head == nullptr) {
        m_head = newNode;
    } else {
        Node* current = m_head;
        while (current->next != nullptr) {
            current = current->next;
        }
        current->next = newNode;
    }
    m_size++;
}
```

Understanding the traversal:
```cpp
while (current->next != nullptr) {
    current = current->next;
}
```

This loop moves `current` forward until it points to the last node (whose `next` is `nullptr`).

### What You Now Understand

- Nodes are created with `new` and freed with `delete`
- `insertFront` creates a new head
- `insertBack` traverses to the end and appends
- The destructor must delete every node to avoid leaks
- Initializer lists (`: data(value)`) initialize member variables

---

## Chapter 10: Recursion

### What is Recursion?

A function that calls itself to solve smaller versions of the same problem.

Every recursive function needs:
1. **Base case**: When to stop recursing
2. **Recursive case**: How to break down the problem

### Classic Example: Factorial

```cpp
int factorial(int n) {
    if (n <= 1) {        // Base case
        return 1;
    }
    return n * factorial(n - 1);  // Recursive case
}
```

How does `factorial(4)` work?
```
factorial(4)
  = 4 * factorial(3)
  = 4 * (3 * factorial(2))
  = 4 * (3 * (2 * factorial(1)))
  = 4 * (3 * (2 * 1))  ← Base case triggered
  = 4 * (3 * 2)
  = 4 * 6
  = 24
```

### Reversing a LinkedList Recursively

Add the test:

```cpp
TEST(LinkedListTest, CanReverse) {
    LinkedList list;
    list.insertBack(1);
    list.insertBack(2);
    list.insertBack(3);
    
    list.reverse();
    
    EXPECT_EQ(list.front(), 3);
}
```

**Iterative solution (three-pointer technique):**

```cpp
void reverse() {
    Node* prev = nullptr;
    Node* current = m_head;
    
    while (current != nullptr) {
        Node* next = current->next;  // Save next
        current->next = prev;         // Reverse the link
        prev = current;               // Move prev forward
        current = next;               // Move current forward
    }
    
    m_head = prev;
}
```

Tracing through `1 → 2 → 3`:
```
Initial: prev=null, current→1

Step 1: save next→2, 1→null, prev→1, current→2
        null ← 1    2 → 3

Step 2: save next→3, 2→1, prev→2, current→3
        null ← 1 ← 2    3

Step 3: save next=null, 3→2, prev→3, current=null
        null ← 1 ← 2 ← 3

Loop ends. m_head = prev = 3
Result: 3 → 2 → 1 → null
```

**Recursive solution:**

```cpp
void reverseRecursive() {
    m_head = reverseHelper(m_head);
}

private:
Node* reverseHelper(Node* node) {
    // Base case: empty or single node
    if (node == nullptr || node->next == nullptr) {
        return node;
    }
    
    // Recurse to the end
    Node* newHead = reverseHelper(node->next);
    
    // Reverse the link for this node
    node->next->next = node;
    node->next = nullptr;
    
    return newHead;
}
```

This is trickier. Let's trace `1 → 2 → 3`:

```
reverseHelper(1)
  reverseHelper(2)
    reverseHelper(3)
      Base case: 3.next is null, return 3
    
    newHead = 3
    2.next.next = 2  → means 3.next = 2 → now 3→2
    2.next = nullptr → now 2→null
    return 3
  
  newHead = 3
  1.next.next = 1  → means 2.next = 1 → now 2→1
  1.next = nullptr → now 1→null
  return 3

Result: m_head = 3, and 3→2→1→null
```

### What You Now Understand

- Recursion solves problems by solving smaller versions
- Base case stops recursion
- Recursive case breaks down the problem
- Reversing a list means changing where each node points
- Both iterative and recursive approaches work

---

## Summary of Part 2

You've learned:

1. **Operator overloading**: Make `[]` work on your class
2. **References**: `int&` is an alias, enables modification
3. **Templates**: Write code that works with any type
4. **Pointers**: Variables holding memory addresses
5. **LinkedList**: Nodes connected by pointers
6. **Recursion**: Functions calling themselves

Continue to Part 3 for strings, the calculator project, and file I/O.
