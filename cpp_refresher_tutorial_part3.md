# 📘 C++ Refresher Tutorial — Part 3
## Strings, Calculator, and File I/O

*This continues from Part 2*

---

## Chapter 11: Strings in C++

### Two Types of Strings

C++ has inherited two string systems:

**C-style strings (char arrays):**
```cpp
char name[] = "Alice";  // Null-terminated array of characters
```

**C++ strings (std::string):**
```cpp
std::string name = "Alice";  // Modern, safer, easier
```

Use `std::string` for almost everything. C-style strings are error-prone and require manual memory management.

### std::string Basics

```cpp
#include <string>

std::string s = "Hello";

s.length();     // 5 (number of characters)
s.size();       // Same as length()
s[0];           // 'H' (first character)
s[4];           // 'o' (fifth character)
s.empty();      // false
s.clear();      // Makes string empty
```

### Common Operations

**Concatenation (joining strings):**
```cpp
std::string a = "Hello";
std::string b = " World";
std::string c = a + b;  // "Hello World"
```

**Comparison:**
```cpp
std::string x = "apple";
std::string y = "banana";

if (x == y) { ... }  // false
if (x < y)  { ... }  // true (alphabetical comparison)
```

**Substring:**
```cpp
std::string s = "Hello World";
std::string sub = s.substr(0, 5);  // "Hello" (start at 0, length 5)
```

**Find:**
```cpp
std::string s = "Hello World";
size_t pos = s.find("World");  // 6 (position where "World" starts)

if (pos != std::string::npos) {
    // Found it
}
```

`std::string::npos` is a special value meaning "not found."

### Iterating Through a String

```cpp
std::string s = "abc";

// Range-based for loop (recommended)
for (char c : s) {
    std::cout << c << " ";  // a b c
}

// Index-based
for (size_t i = 0; i < s.length(); i++) {
    std::cout << s[i] << " ";
}
```

### Character Classification

The `<cctype>` header provides functions to check character types:

```cpp
#include <cctype>

isalpha('A');   // true (is a letter)
isdigit('5');   // true (is a digit)
isspace(' ');   // true (is whitespace)
isupper('A');   // true (is uppercase)
islower('a');   // true (is lowercase)
toupper('a');   // 'A'
tolower('B');   // 'b'
```

These are essential for parsing input.

### Converting Strings to Numbers

```cpp
std::string numStr = "42";
int num = std::stoi(numStr);   // String TO Integer = 42

std::string piStr = "3.14";
double pi = std::stod(piStr);  // String TO Double = 3.14
```

### What You Now Understand

- `std::string` is safer and easier than C-style strings
- Common operations: `+`, `==`, `substr()`, `find()`
- Range-based `for` is the clean way to iterate
- `<cctype>` has character type checking functions
- `stoi()` and `stod()` convert strings to numbers

---

## Chapter 12: Building the Calculator

Let's build a calculator that evaluates expressions like `3 + 5 * 2`.

### Understanding the Problem

Input: `"3 + 5 * 2"`
Output: `13` (not 16, because `*` has higher precedence than `+`)

We need to:
1. **Tokenize**: Break the string into pieces
2. **Evaluate**: Compute the result, respecting operator precedence

### Step 1: Tokenizing

A **token** is a meaningful unit:
```
"3 + 5 * 2" → ["3", "+", "5", "*", "2"]
```

Create the project:
```bash
mkdir -p calculator
cd calculator
```

Create `test_calculator.cpp`:

```cpp
#include <gtest/gtest.h>
#include "calculator.h"

TEST(TokenizerTest, HandlesSimpleExpression) {
    Tokenizer t;
    std::vector<std::string> tokens = t.tokenize("3 + 5");
    
    ASSERT_EQ(tokens.size(), 3);
    EXPECT_EQ(tokens[0], "3");
    EXPECT_EQ(tokens[1], "+");
    EXPECT_EQ(tokens[2], "5");
}

TEST(TokenizerTest, HandlesMultiDigitNumbers) {
    Tokenizer t;
    std::vector<std::string> tokens = t.tokenize("123 + 456");
    
    EXPECT_EQ(tokens[0], "123");
    EXPECT_EQ(tokens[2], "456");
}

TEST(TokenizerTest, IgnoresWhitespace) {
    Tokenizer t;
    std::vector<std::string> tokens = t.tokenize("1+2");
    
    EXPECT_EQ(tokens.size(), 3);
}
```

Create `calculator.h`:

```cpp
#ifndef CALCULATOR_H
#define CALCULATOR_H

#include <string>
#include <vector>
#include <cctype>

class Tokenizer {
public:
    std::vector<std::string> tokenize(const std::string& expr) {
        std::vector<std::string> tokens;
        std::string number;
        
        for (char c : expr) {
            if (isdigit(c)) {
                // Building a multi-digit number
                number += c;
            } else {
                // End of number, save it if we have one
                if (!number.empty()) {
                    tokens.push_back(number);
                    number.clear();
                }
                
                // Save operator (skip whitespace)
                if (!isspace(c)) {
                    tokens.push_back(std::string(1, c));
                }
            }
        }
        
        // Don't forget the last number
        if (!number.empty()) {
            tokens.push_back(number);
        }
        
        return tokens;
    }
};

#endif
```

Understanding the tokenizer:

```cpp
std::string number;  // Accumulates digits
```

For input `"123 + 45"`:
- See '1': `number = "1"`
- See '2': `number = "12"`
- See '3': `number = "123"`
- See ' ': save "123" to tokens, clear number
- See '+': save "+" to tokens
- See ' ': skip
- See '4': `number = "4"`
- See '5': `number = "45"`
- End: save "45" to tokens

Result: `["123", "+", "45"]`

### Step 2: Evaluating

Now we evaluate the tokens. Here's where it gets interesting.

The challenge is **operator precedence**: `*` and `/` bind tighter than `+` and `-`.

`3 + 5 * 2` = `3 + (5 * 2)` = `3 + 10` = `13`

We'll use two stacks:
- **Value stack**: Numbers waiting to be combined
- **Operator stack**: Operators waiting to be applied

The rule: Before pushing an operator, apply any waiting operators of equal or higher precedence.

```cpp
TEST(CalculatorTest, SimpleAddition) {
    Calculator calc;
    EXPECT_EQ(calc.evaluate("3 + 5"), 8);
}

TEST(CalculatorTest, SimpleMuliplication) {
    Calculator calc;
    EXPECT_EQ(calc.evaluate("3 * 4"), 12);
}

TEST(CalculatorTest, RespectsPrecedence) {
    Calculator calc;
    EXPECT_EQ(calc.evaluate("3 + 5 * 2"), 13);
}

TEST(CalculatorTest, LeftToRightForSamePrecedence) {
    Calculator calc;
    EXPECT_EQ(calc.evaluate("10 - 4 - 2"), 4);  // (10-4)-2, not 10-(4-2)
}
```

Add the Calculator class:

```cpp
#include <stack>

class Calculator {
public:
    int evaluate(const std::string& expr) {
        Tokenizer tokenizer;
        std::vector<std::string> tokens = tokenizer.tokenize(expr);
        
        std::stack<int> values;
        std::stack<char> ops;
        
        for (const std::string& token : tokens) {
            if (isNumber(token)) {
                values.push(std::stoi(token));
            } else {
                char op = token[0];
                
                // Apply waiting operators of >= precedence
                while (!ops.empty() && precedence(ops.top()) >= precedence(op)) {
                    applyTop(values, ops);
                }
                
                ops.push(op);
            }
        }
        
        // Apply remaining operators
        while (!ops.empty()) {
            applyTop(values, ops);
        }
        
        return values.top();
    }

private:
    bool isNumber(const std::string& token) {
        return !token.empty() && isdigit(token[0]);
    }
    
    int precedence(char op) {
        if (op == '+' || op == '-') return 1;
        if (op == '*' || op == '/') return 2;
        return 0;
    }
    
    void applyTop(std::stack<int>& values, std::stack<char>& ops) {
        int b = values.top(); values.pop();
        int a = values.top(); values.pop();
        char op = ops.top(); ops.pop();
        
        int result;
        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = a / b; break;
        }
        
        values.push(result);
    }
};
```

Tracing `3 + 5 * 2`:

```
Token "3": push 3 to values
           values: [3], ops: []

Token "+": precedence(+)=1, stack empty, push +
           values: [3], ops: [+]

Token "5": push 5
           values: [3, 5], ops: [+]

Token "*": precedence(*)=2 > precedence(+)=1, so don't apply, push *
           values: [3, 5], ops: [+, *]

Token "2": push 2
           values: [3, 5, 2], ops: [+, *]

End of tokens. Apply remaining:
  Apply *: pop 2, 5, result 10, push 10
           values: [3, 10], ops: [+]
  Apply +: pop 10, 3, result 13, push 13
           values: [13], ops: []

Result: 13 ✓
```

### What You Now Understand

- Tokenizing breaks input into meaningful pieces
- Stacks help evaluate expressions with precedence
- Higher precedence operators bind first
- `switch` cleanly handles multiple cases

---

## Chapter 13: File Input/Output

### The Basics

C++ uses **streams** for I/O:
- `std::cin` / `std::cout` – console
- `std::ifstream` – input from file
- `std::ofstream` – output to file

Both are in `<fstream>`.

### Reading from a File

```cpp
#include <fstream>
#include <string>

std::ifstream file("input.txt");

if (!file.is_open()) {
    std::cerr << "Could not open file\n";
    return;
}

std::string line;
while (std::getline(file, line)) {
    // Process each line
    std::cout << line << "\n";
}

file.close();
```

`std::getline(file, line)` reads a full line into the string. It returns `false` when there's nothing left to read.

### Writing to a File

```cpp
std::ofstream file("output.txt");

if (!file.is_open()) {
    std::cerr << "Could not create file\n";
    return;
}

file << "Hello, file!\n";
file << "Number: " << 42 << "\n";

file.close();
```

`<<` works just like with `std::cout`.

### Adding File Support to Calculator

```cpp
TEST(CalculatorTest, CanEvaluateFromFile) {
    // Create test file
    std::ofstream out("test_expressions.txt");
    out << "3 + 5\n";
    out << "10 * 2\n";
    out.close();
    
    Calculator calc;
    std::vector<int> results = calc.evaluateFile("test_expressions.txt");
    
    EXPECT_EQ(results[0], 8);
    EXPECT_EQ(results[1], 20);
    
    // Cleanup
    std::remove("test_expressions.txt");
}
```

Add to Calculator class:

```cpp
#include <fstream>

std::vector<int> evaluateFile(const std::string& filename) {
    std::vector<int> results;
    std::ifstream file(filename);
    
    if (!file.is_open()) {
        throw std::runtime_error("Cannot open file: " + filename);
    }
    
    std::string line;
    while (std::getline(file, line)) {
        if (!line.empty()) {
            results.push_back(evaluate(line));
        }
    }
    
    file.close();
    return results;
}
```

### What You Now Understand

- `ifstream` reads from files, `ofstream` writes
- `getline()` reads a line at a time
- Streams work like `cin`/`cout`
- Always check `is_open()` before using a file

---

## Chapter 14: Wrapping Up

### What You Built

1. **MyVector**: A dynamic array with automatic resizing, template support, and operator overloading

2. **LinkedList**: A node-based structure using pointers, with insert, remove, and recursive reverse

3. **Calculator**: Expression evaluation with tokenizing, precedence handling, and file I/O

### Concepts Mastered

| Concept | Where You Used It |
|---------|-------------------|
| **Functions** | Every project |
| **Classes** | MyVector, LinkedList, Calculator |
| **Constructors/Destructors** | Memory management in all projects |
| **Pointers** | LinkedList nodes |
| **References** | operator[], function parameters |
| **Dynamic memory** | new/delete in MyVector and LinkedList |
| **Templates** | MyVector<T> |
| **Operator overloading** | MyVector operator[] |
| **STL containers** | std::vector, std::stack, std::string |
| **Recursion** | LinkedList reverse |
| **File I/O** | Calculator file evaluation |
| **Control flow** | if, while, for, switch throughout |

### TDD Skills

You practiced the red-green-refactor cycle:
1. Write a failing test
2. Write minimal code to pass
3. Refactor while keeping tests green

This skill transfers to any language and any testing framework.

### What's Next?

You're ready to:
- Apply these concepts to your university assignments
- Write tests for your DSA homework
- Expand these projects (add more features)
- Build new projects from scratch

---

## Quick Reference

### Compile Commands

```bash
# Simple file
g++ -std=c++17 file.cpp -o output

# With GoogleTest
g++ -std=c++17 file.cpp \
    -lgtest -lgtest_main -pthread \
    -I/opt/homebrew/include -L/opt/homebrew/lib \
    -o test
```

### GoogleTest Assertions

```cpp
EXPECT_EQ(a, b);      // a == b
EXPECT_NE(a, b);      // a != b
EXPECT_TRUE(x);       // x is true
EXPECT_FALSE(x);      // x is false
EXPECT_LT(a, b);      // a < b
EXPECT_GT(a, b);      // a > b
EXPECT_THROW(expr, ExceptionType);  // expr throws
```

### Memory Management

```cpp
// Single object
int* p = new int(42);
delete p;

// Array
int* arr = new int[10];
delete[] arr;
```

### String Operations

```cpp
s.length()           // Size
s[i]                 // Character at i
s.substr(pos, len)   // Substring
s.find("x")          // Position of "x"
std::stoi(s)         // String to int
```

### File I/O

```cpp
// Read
std::ifstream in("file.txt");
std::getline(in, line);
in.close();

// Write
std::ofstream out("file.txt");
out << data;
out.close();
```

---

# 🎉 Congratulations!

You've completed the C++ Refresher Tutorial. You understand the WHY behind the code, not just the WHAT. You can recreate these projects from scratch and expand on them.

Good luck with your courses!
