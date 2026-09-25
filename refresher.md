# C++ Reference Guide for Data Structures & Algorithms

## Table of Contents

1. [Basic Syntax & Types](#basic-syntax--types)
2. [Control Flow](#control-flow)
3. [Functions](#functions)
4. [Arrays & Strings](#arrays--strings)
5. [Pointers & References](#pointers--references)
6. [Dynamic Memory](#dynamic-memory)
7. [Classes & Objects](#classes--objects)
8. [Operator Overloading](#operator-overloading)
9. [Templates](#templates)
10. [STL Containers](#stl-containers)
11. [Recursion](#recursion)
12. [File I/O](#file-io)
13. [Common Patterns](#common-patterns)

---

## Basic Syntax & Types

### Primitive Types

```cpp
int x = 42;           // integers
double pi = 3.14159;  // floating point
float f = 3.14f;      // single precision (note the 'f')
char c = 'A';         // single character
bool flag = true;     // true or false
```

### Variables

```cpp
int a, b, c;          // declare multiple
int x = 5;            // declare and initialize
const int MAX = 100;  // constant, cannot change
```

### Operators

```cpp
// Arithmetic: +, -, *, /, % (modulo)
int result = 10 % 3;  // result is 1

// Comparison: ==, !=, <, >, <=, >=
// Logical: && (and), || (or), ! (not)
// Increment/Decrement: ++, --
i++;   // post-increment (use then increment)
++i;   // pre-increment (increment then use)
```

---

## Control Flow

### If-Else

```cpp
if (x > 10) {
    // do something
} else if (x > 0) {
    // do something else
} else {
    // default case
}

// Ternary operator
int max = (a > b) ? a : b;
```

### Switch

```cpp
switch (choice) {
    case 1:
        cout << "One";
        break;  // don't forget break!
    case 2:
        cout << "Two";
        break;
    default:
        cout << "Other";
}
```

### Loops

```cpp
// For loop
for (int i = 0; i < 10; i++) {
    cout << i << " ";
}

// While loop
while (condition) {
    // code
}

// Do-while (runs at least once)
do {
    // code
} while (condition);

// Loop control
break;     // exit loop
continue;  // skip to next iteration
```

---

## Functions

### Basic Functions

```cpp
// Declaration (prototype)
int add(int a, int b);

// Definition
int add(int a, int b) {
    return a + b;
}

// Void function (no return)
void printMessage() {
    cout << "Hello!" << endl;
}
```

### Pass by Value vs Reference

```cpp
// Pass by value (copies the variable)
void increment(int x) {
    x++;  // only changes local copy
}

// Pass by reference (modifies original)
void increment(int& x) {
    x++;  // changes the original variable
}

// Pass by const reference (read-only, no copy)
void display(const vector<int>& v) {
    // Can read v but cannot modify it
}
```

### Function Overloading

```cpp
int max(int a, int b) { return (a > b) ? a : b; }
double max(double a, double b) { return (a > b) ? a : b; }
// Same name, different parameters
```

### Default Parameters

```cpp
void printN(int n, char c = '*') {
    for (int i = 0; i < n; i++) cout << c;
}

printN(5);       // uses default '*'
printN(5, '#');  // uses '#'
```

---

## Arrays & Strings

### C-Style Arrays

```cpp
int arr[5];              // declare array of 5 ints
int arr[5] = {1,2,3,4,5}; // initialize
int arr[] = {1,2,3};     // size inferred (3)

// Access elements
arr[0] = 10;  // first element
arr[4] = 50;  // last element (for size 5)

// Size
int size = sizeof(arr) / sizeof(arr[0]);
```

### 2D Arrays

```cpp
int matrix[3][4];  // 3 rows, 4 columns

// Initialize
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

// Access
matrix[0][1] = 99;  // row 0, column 1
```

### Strings

```cpp
#include <string>
using std::string;

string s = "Hello";
string s2("World");

// Common operations
s.length();        // or s.size()
s.empty();         // returns true if empty
s[0];              // access character (no bounds check)
s.at(0);           // access with bounds check
s.substr(0, 3);    // substring starting at 0, length 3
s.find("llo");     // returns position or string::npos
s + " World";      // concatenation
s.append(" World"); // append

// Iteration
for (char c : s) {
    cout << c;
}
```

### C-Strings (char arrays)

```cpp
char str[20] = "Hello";
strlen(str);       // length
strcpy(str, "Hi"); // copy
strcat(str, "!");  // concatenate
strcmp(s1, s2);    // compare (0 if equal)
```

---

## Pointers & References

### Pointers Basics

```cpp
int x = 42;
int* ptr = &x;    // ptr stores address of x
int value = *ptr; // dereference: get value at address

// Pointer arithmetic
int arr[5] = {1,2,3,4,5};
int* p = arr;     // points to first element
p++;              // now points to second element
*p = 99;          // arr[1] is now 99

// Null pointer
int* p = nullptr; // modern C++ (C++11)
int* p = NULL;    // older style
```

### References

```cpp
int x = 10;
int& ref = x;  // ref is an alias for x
ref = 20;      // x is now 20

// References must be initialized and cannot be null
// References cannot be reassigned to refer to something else
```

### Pointers vs References

```cpp
// Pointer: can be null, can be reassigned, needs dereferencing
int* ptr = &x;
*ptr = 5;

// Reference: cannot be null, cannot be reassigned, no dereferencing
int& ref = x;
ref = 5;
```

### Common Pointer Pitfalls

```cpp
int* ptr;         // UNINITIALIZED - dangerous!
*ptr = 5;         // UNDEFINED BEHAVIOR

int* ptr = nullptr; // GOOD - explicitly null
if (ptr != nullptr) {
    *ptr = 5;
}

// Dangling pointer
int* ptr = new int(5);
delete ptr;
*ptr = 10;  // WRONG - ptr points to freed memory
ptr = nullptr; // GOOD - set to null after delete
```

---

## Dynamic Memory

### New and Delete

```cpp
// Single variable
int* p = new int;      // allocate
*p = 42;               // use
delete p;              // free memory
p = nullptr;           // good practice

// With initialization
int* p = new int(42);

// Arrays
int* arr = new int[10]; // allocate array
arr[0] = 1;             // use
delete[] arr;           // free array (note the [])
arr = nullptr;
```

### Memory Leaks

```cpp
// LEAK - memory never freed
void bad() {
    int* p = new int(5);
    return;  // memory leaked!
}

// CORRECT
void good() {
    int* p = new int(5);
    // ... use p ...
    delete p;
}
```

### Stack vs Heap

```cpp
void example() {
    int x = 5;           // STACK - automatic cleanup
    int* p = new int(5); // HEAP - manual cleanup needed

    delete p;
    // x automatically destroyed when function ends
}
```

---

## Classes & Objects

### Basic Class

```cpp
class Rectangle {
private:
    int width;
    int height;

public:
    // Constructor
    Rectangle(int w, int h) : width(w), height(h) {}

    // Default constructor
    Rectangle() : width(0), height(0) {}

    // Member functions
    int area() const {  // const means doesn't modify object
        return width * height;
    }

    void setWidth(int w) {
        width = w;
    }

    int getWidth() const {
        return width;
    }
};

// Usage
Rectangle r1(10, 5);
cout << r1.area();  // 50
```

### Constructor Initialization List

```cpp
class Point {
    int x, y;
public:
    // Preferred way - more efficient
    Point(int a, int b) : x(a), y(b) {}

    // Works but less efficient
    Point(int a, int b) {
        x = a;
        y = b;
    }
};
```

### The Big Three (Rule of Three)

```cpp
class IntArray {
private:
    int* data;
    int size;

public:
    // Constructor
    IntArray(int s) : size(s) {
        data = new int[size];
    }

    // Destructor
    ~IntArray() {
        delete[] data;
    }

    // Copy Constructor
    IntArray(const IntArray& other) : size(other.size) {
        data = new int[size];
        for (int i = 0; i < size; i++) {
            data[i] = other.data[i];
        }
    }

    // Copy Assignment Operator
    IntArray& operator=(const IntArray& other) {
        if (this != &other) {  // check self-assignment
            delete[] data;     // clean up old data
            size = other.size;
            data = new int[size];
            for (int i = 0; i < size; i++) {
                data[i] = other.data[i];
            }
        }
        return *this;
    }
};
```

### Structs

```cpp
// Struct - like a class but members are public by default
struct Node {
    int data;
    Node* next;

    Node(int val) : data(val), next(nullptr) {}
};

// Common in DSA for simple data holders
Node* head = new Node(5);
```

### Static Members

```cpp
class Counter {
private:
    static int count;  // shared by all instances
public:
    Counter() { count++; }
    static int getCount() { return count; }
};

// Must define static member outside class
int Counter::count = 0;

// Usage
cout << Counter::getCount();  // access without object
```

---

## Operator Overloading

### Common Operators

```cpp
class Complex {
    double real, imag;
public:
    Complex(double r, double i) : real(r), imag(i) {}

    // Addition
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    // Comparison
    bool operator==(const Complex& other) const {
        return real == other.real && imag == other.imag;
    }

    // Array subscript
    double& operator[](int index) {
        return (index == 0) ? real : imag;
    }
};
```

### Output Operator (must be friend or non-member)

```cpp
class Point {
    int x, y;
public:
    Point(int a, int b) : x(a), y(b) {}

    friend ostream& operator<<(ostream& os, const Point& p) {
        os << "(" << p.x << ", " << p.y << ")";
        return os;
    }
};

// Usage
Point p(3, 4);
cout << p;  // outputs: (3, 4)
```

---

## Templates

### Function Templates

```cpp
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Usage
int m1 = max(5, 10);           // T is int
double m2 = max(3.14, 2.71);   // T is double
```

### Class Templates

```cpp
template <typename T>
class Stack {
private:
    T* arr;
    int top;
    int capacity;

public:
    Stack(int size) : capacity(size), top(-1) {
        arr = new T[capacity];
    }

    ~Stack() {
        delete[] arr;
    }

    void push(T value) {
        if (top < capacity - 1) {
            arr[++top] = value;
        }
    }

    T pop() {
        if (top >= 0) {
            return arr[top--];
        }
        throw runtime_error("Stack empty");
    }
};

// Usage
Stack<int> intStack(10);
Stack<string> stringStack(20);
```

---

## STL Containers

### Vector (covered earlier, but key points)

```cpp
#include <vector>
vector<int> v = {1, 2, 3};
v.push_back(4);
v.pop_back();
v.size();
v[0];  // or v.at(0)
```

### Stack

```cpp
#include <stack>
stack<int> s;
s.push(10);
s.push(20);
int top = s.top();  // 20
s.pop();            // removes 20
s.empty();
s.size();
```

### Queue

```cpp
#include <queue>
queue<int> q;
q.push(10);
q.push(20);
int front = q.front();  // 10
int back = q.back();    // 20
q.pop();                // removes 10
```

### Priority Queue (Heap)

```cpp
#include <queue>
priority_queue<int> pq;  // max heap by default
pq.push(10);
pq.push(30);
pq.push(20);
int top = pq.top();  // 30 (largest)
pq.pop();

// Min heap
priority_queue<int, vector<int>, greater<int>> minHeap;
```

### Set (Ordered, Unique)

```cpp
#include <set>
set<int> s;
s.insert(5);
s.insert(2);
s.insert(5);  // duplicate, not added
s.erase(2);
s.count(5);   // 1 if exists, 0 otherwise
s.size();

// Iteration (sorted order)
for (int x : s) {
    cout << x << " ";
}
```

### Map (Key-Value Pairs)

```cpp
#include <map>
map<string, int> ages;
ages["Alice"] = 25;
ages["Bob"] = 30;

// Access
int age = ages["Alice"];

// Check if key exists
if (ages.count("Charlie")) {
    // exists
}

// Iteration
for (auto& pair : ages) {
    cout << pair.first << ": " << pair.second << endl;
}
```

### Unordered Set/Map (Hash-based)

```cpp
#include <unordered_set>
#include <unordered_map>

unordered_set<int> us;  // O(1) average insert/search
unordered_map<string, int> um;  // O(1) average

// Same operations as set/map but unordered and faster
```

### Pair

```cpp
#include <utility>
pair<int, string> p(1, "one");
cout << p.first << " " << p.second;

// Make pair
auto p2 = make_pair(2, "two");
```

---

## Recursion

### Basic Pattern

```cpp
returnType function(parameters) {
    // Base case - stops recursion
    if (baseCondition) {
        return baseValue;
    }

    // Recursive case
    return someOperation(function(modifiedParameters));
}
```

### Examples

```cpp
// Factorial
int factorial(int n) {
    if (n <= 1) return 1;           // base case
    return n * factorial(n - 1);    // recursive case
}

// Fibonacci
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

// Sum of array
int sum(int arr[], int n) {
    if (n == 0) return 0;
    return arr[n-1] + sum(arr, n-1);
}

// Binary search (recursive)
int binarySearch(int arr[], int low, int high, int target) {
    if (low > high) return -1;  // not found

    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return binarySearch(arr, low, mid-1, target);
    return binarySearch(arr, mid+1, high, target);
}
```

### Recursion Tips

- Always have a base case
- Make sure recursive calls move toward the base case
- Be aware of stack overflow for deep recursion
- Consider iterative solutions for efficiency

---

## File I/O

### Reading from File

```cpp
#include <fstream>
#include <string>

// Read text file
ifstream inFile("data.txt");
if (!inFile) {
    cout << "Error opening file";
    return;
}

string line;
while (getline(inFile, line)) {
    cout << line << endl;
}
inFile.close();

// Read numbers
ifstream inFile("numbers.txt");
int num;
while (inFile >> num) {
    cout << num << " ";
}
```

### Writing to File

```cpp
ofstream outFile("output.txt");
if (!outFile) {
    cout << "Error creating file";
    return;
}

outFile << "Hello World" << endl;
outFile << 42 << " " << 3.14 << endl;
outFile.close();
```

### Read and Write

```cpp
fstream file("data.txt", ios::in | ios::out);
```

---

## Common Patterns

### Swap

```cpp
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// Or use std::swap
#include <algorithm>
swap(a, b);
```

### Find Min/Max in Array

```cpp
int findMin(int arr[], int n) {
    int min = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}
```

### Reverse Array

```cpp
void reverse(int arr[], int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}
```

### Check if Sorted

```cpp
bool isSorted(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i+1]) return false;
    }
    return true;
}
```

### Two Pointers Pattern

```cpp
// Find pair that sums to target (sorted array)
bool hasPairSum(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}
```

---

## Quick Reference: Common Headers

```cpp
#include <iostream>     // cin, cout, cerr
#include <vector>       // vector
#include <string>       // string
#include <algorithm>    // sort, swap, min, max, reverse
#include <stack>        // stack
#include <queue>        // queue, priority_queue
#include <set>          // set
#include <map>          // map
#include <unordered_set>
#include <unordered_map>
#include <utility>      // pair
#include <cmath>        // abs, pow, sqrt
#include <climits>      // INT_MAX, INT_MIN
#include <fstream>      // file I/O
```

---

## Tips for DSA Success

1. **Practice pointer arithmetic** - draw memory diagrams
2. **Always check bounds** - especially with arrays
3. **Initialize variables** - uninitialized values cause bugs
4. **Free what you allocate** - every `new` needs a `delete`
5. **Use const correctness** - mark read-only params as const
6. **Test edge cases** - empty inputs, single elements, etc.
7. **Draw pictures** - especially for linked structures and trees
8. **Think about time/space complexity** as you code
