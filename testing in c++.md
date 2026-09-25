# C++ Testing Guide for DSA - From Python to C++

## Introduction

This guide will show you how to write tests in C++ similar to what you're doing in Python (probably using `unittest` or `pytest`). We'll use simple manual testing first, then introduce a testing framework.

---

## Method 1: Simple Manual Testing (Start Here)

This is the easiest way to test your DSA implementations in C++. Just write test functions and call them from `main()`.

### Basic Pattern

**LinkedList.h**

```cpp
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;
    int length;

public:
    LinkedList();
    ~LinkedList();
    void append(int value);
    void prepend(int value);
    int get(int index);
    int size() const;
    void print() const;
};

#endif
```

**LinkedList.cpp**

```cpp
#include "LinkedList.h"
#include <iostream>
using namespace std;

LinkedList::LinkedList() : head(nullptr), length(0) {}

LinkedList::~LinkedList() {
    Node* current = head;
    while (current != nullptr) {
        Node* temp = current;
        current = current->next;
        delete temp;
    }
}

void LinkedList::append(int value) {
    Node* newNode = new Node(value);
    if (head == nullptr) {
        head = newNode;
    } else {
        Node* current = head;
        while (current->next != nullptr) {
            current = current->next;
        }
        current->next = newNode;
    }
    length++;
}

void LinkedList::prepend(int value) {
    Node* newNode = new Node(value);
    newNode->next = head;
    head = newNode;
    length++;
}

int LinkedList::get(int index) {
    if (index < 0 || index >= length) {
        return -1;  // error value
    }
    Node* current = head;
    for (int i = 0; i < index; i++) {
        current = current->next;
    }
    return current->data;
}

int LinkedList::size() const {
    return length;
}

void LinkedList::print() const {
    Node* current = head;
    cout << "[";
    while (current != nullptr) {
        cout << current->data;
        if (current->next != nullptr) cout << " -> ";
        current = current->next;
    }
    cout << "]" << endl;
}
```

**test.cpp (Your Test File)**

```cpp
#include <iostream>
#include <cassert>
#include "LinkedList.h"

using namespace std;

// Test counter
int tests_passed = 0;
int tests_failed = 0;

// Helper function to check if test passes
void assertTest(bool condition, string testName) {
    if (condition) {
        cout << "✓ PASS: " << testName << endl;
        tests_passed++;
    } else {
        cout << "✗ FAIL: " << testName << endl;
        tests_failed++;
    }
}

// Test functions
void test_append() {
    cout << "\n--- Testing append() ---" << endl;

    LinkedList ll;
    ll.append(1);
    assertTest(ll.size() == 1, "Size after one append");
    assertTest(ll.get(0) == 1, "First element value");

    ll.append(2);
    ll.append(3);
    assertTest(ll.size() == 3, "Size after three appends");
    assertTest(ll.get(1) == 2, "Second element value");
    assertTest(ll.get(2) == 3, "Third element value");
}

void test_prepend() {
    cout << "\n--- Testing prepend() ---" << endl;

    LinkedList ll;
    ll.prepend(1);
    assertTest(ll.size() == 1, "Size after one prepend");
    assertTest(ll.get(0) == 1, "First element after prepend");

    ll.prepend(2);
    assertTest(ll.get(0) == 2, "New head after second prepend");
    assertTest(ll.get(1) == 1, "Old head moved to index 1");
}

void test_get() {
    cout << "\n--- Testing get() ---" << endl;

    LinkedList ll;
    ll.append(10);
    ll.append(20);
    ll.append(30);

    assertTest(ll.get(0) == 10, "Get first element");
    assertTest(ll.get(1) == 20, "Get middle element");
    assertTest(ll.get(2) == 30, "Get last element");
    assertTest(ll.get(5) == -1, "Get invalid index (out of bounds)");
    assertTest(ll.get(-1) == -1, "Get negative index");
}

void test_empty_list() {
    cout << "\n--- Testing empty list ---" << endl;

    LinkedList ll;
    assertTest(ll.size() == 0, "Empty list has size 0");
    assertTest(ll.get(0) == -1, "Get from empty list returns -1");
}

// Run all tests
int main() {
    cout << "========================================" << endl;
    cout << "   RUNNING LINKED LIST TESTS" << endl;
    cout << "========================================" << endl;

    test_append();
    test_prepend();
    test_get();
    test_empty_list();

    cout << "\n========================================" << endl;
    cout << "         TEST SUMMARY" << endl;
    cout << "========================================" << endl;
    cout << "Tests Passed: " << tests_passed << endl;
    cout << "Tests Failed: " << tests_failed << endl;
    cout << "Total Tests:  " << (tests_passed + tests_failed) << endl;

    if (tests_failed == 0) {
        cout << "\n🎉 ALL TESTS PASSED! 🎉" << endl;
    } else {
        cout << "\n❌ SOME TESTS FAILED" << endl;
    }

    return tests_failed;  // Return 0 if all pass, non-zero if any fail
}
```

**To Compile and Run:**

```bash
g++ -o test LinkedList.cpp test.cpp
./test
```

---

## Method 2: Python-Style Testing with Assert Macros

Here's a more Python-like approach with better error messages:

**test_framework.h**

```cpp
#ifndef TEST_FRAMEWORK_H
#define TEST_FRAMEWORK_H

#include <iostream>
#include <string>
#include <sstream>

using namespace std;

// Global test counters
extern int g_tests_passed;
extern int g_tests_failed;

// Assert macros with better error messages
#define ASSERT_EQUAL(actual, expected, message) \
    do { \
        if ((actual) == (expected)) { \
            cout << "  ✓ " << message << endl; \
            g_tests_passed++; \
        } else { \
            cout << "  ✗ " << message << endl; \
            cout << "    Expected: " << (expected) << endl; \
            cout << "    Got:      " << (actual) << endl; \
            g_tests_failed++; \
        } \
    } while(0)

#define ASSERT_TRUE(condition, message) \
    do { \
        if (condition) { \
            cout << "  ✓ " << message << endl; \
            g_tests_passed++; \
        } else { \
            cout << "  ✗ " << message << endl; \
            cout << "    Expected: true" << endl; \
            cout << "    Got:      false" << endl; \
            g_tests_failed++; \
        } \
    } while(0)

#define ASSERT_FALSE(condition, message) \
    do { \
        if (!(condition)) { \
            cout << "  ✓ " << message << endl; \
            g_tests_passed++; \
        } else { \
            cout << "  ✗ " << message << endl; \
            cout << "    Expected: false" << endl; \
            cout << "    Got:      true" << endl; \
            g_tests_failed++; \
        } \
    } while(0)

#define TEST_SUITE(name) \
    cout << "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" << endl; \
    cout << "Test Suite: " << name << endl; \
    cout << "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" << endl;

#define TEST_CASE(name) \
    cout << "\n▸ " << name << endl;

void print_test_summary();

#endif
```

**test_framework.cpp**

```cpp
#include "test_framework.h"

int g_tests_passed = 0;
int g_tests_failed = 0;

void print_test_summary() {
    cout << "\n========================================" << endl;
    cout << "         TEST SUMMARY" << endl;
    cout << "========================================" << endl;
    cout << "Tests Passed: " << g_tests_passed << endl;
    cout << "Tests Failed: " << g_tests_failed << endl;
    cout << "Total Tests:  " << (g_tests_passed + g_tests_failed) << endl;

    if (g_tests_failed == 0) {
        cout << "\n✅ ALL TESTS PASSED! ✅" << endl;
    } else {
        cout << "\n❌ SOME TESTS FAILED ❌" << endl;
    }
}
```

**Example Usage: test_stack.cpp**

```cpp
#include <iostream>
#include "Stack.h"
#include "test_framework.h"

using namespace std;

void test_stack_push_pop() {
    TEST_CASE("Stack Push and Pop");

    Stack s(5);
    s.push(10);
    s.push(20);
    s.push(30);

    ASSERT_EQUAL(s.size(), 3, "Size after 3 pushes");
    ASSERT_EQUAL(s.peek(), 30, "Top element is 30");
    ASSERT_EQUAL(s.pop(), 30, "Pop returns 30");
    ASSERT_EQUAL(s.pop(), 20, "Pop returns 20");
    ASSERT_EQUAL(s.size(), 1, "Size after 2 pops");
}

void test_stack_empty() {
    TEST_CASE("Empty Stack Operations");

    Stack s(5);
    ASSERT_TRUE(s.isEmpty(), "New stack is empty");

    s.push(1);
    ASSERT_FALSE(s.isEmpty(), "Stack not empty after push");

    s.pop();
    ASSERT_TRUE(s.isEmpty(), "Stack empty after popping last element");
}

void test_stack_overflow() {
    TEST_CASE("Stack Overflow");

    Stack s(3);
    s.push(1);
    s.push(2);
    s.push(3);

    ASSERT_EQUAL(s.size(), 3, "Stack at capacity");

    // Try to push to full stack - should throw or handle gracefully
    // Depends on your implementation
}

int main() {
    TEST_SUITE("Stack Tests");

    test_stack_push_pop();
    test_stack_empty();
    test_stack_overflow();

    print_test_summary();

    return g_tests_failed;
}
```

**To Compile:**

```bash
g++ -o test_stack Stack.cpp test_framework.cpp test_stack.cpp
./test_stack
```

---

## Method 3: Using Google Test (Professional Approach)

If you want a real testing framework like `pytest`, use Google Test.

### Installation

**On macOS with Homebrew:**

```bash
brew install googletest
```

**On Linux (Ubuntu/Debian):**

```bash
sudo apt-get install libgtest-dev
cd /usr/src/gtest
sudo cmake CMakeLists.txt
sudo make
sudo cp lib/*.a /usr/lib
```

**On Windows:** Download from GitHub and follow instructions

### Example with Google Test

**test_linkedlist_gtest.cpp**

```cpp
#include <gtest/gtest.h>
#include "LinkedList.h"

// Test fixture - setup code shared across tests
class LinkedListTest : public ::testing::Test {
protected:
    LinkedList* ll;

    // Runs before each test
    void SetUp() override {
        ll = new LinkedList();
    }

    // Runs after each test
    void TearDown() override {
        delete ll;
    }
};

// Tests using the fixture
TEST_F(LinkedListTest, AppendIncreasesSize) {
    ll->append(1);
    EXPECT_EQ(ll->size(), 1);

    ll->append(2);
    EXPECT_EQ(ll->size(), 2);
}

TEST_F(LinkedListTest, AppendStoresCorrectValues) {
    ll->append(10);
    ll->append(20);
    ll->append(30);

    EXPECT_EQ(ll->get(0), 10);
    EXPECT_EQ(ll->get(1), 20);
    EXPECT_EQ(ll->get(2), 30);
}

TEST_F(LinkedListTest, PrependAddsToFront) {
    ll->append(1);
    ll->prepend(2);

    EXPECT_EQ(ll->get(0), 2);
    EXPECT_EQ(ll->get(1), 1);
}

TEST_F(LinkedListTest, EmptyListHasSizeZero) {
    EXPECT_EQ(ll->size(), 0);
}

TEST_F(LinkedListTest, GetInvalidIndexReturnsError) {
    ll->append(1);
    EXPECT_EQ(ll->get(5), -1);
    EXPECT_EQ(ll->get(-1), -1);
}

// Simple test without fixture
TEST(LinkedListSimple, CreateAndDestroy) {
    LinkedList ll;
    EXPECT_EQ(ll.size(), 0);
}

// Main function to run all tests
int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
```

**Compile with Google Test:**

```bash
g++ -std=c++11 LinkedList.cpp test_linkedlist_gtest.cpp -lgtest -lgtest_main -pthread -o test_gtest
./test_gtest
```

**Google Test Assertions:**

```cpp
EXPECT_EQ(a, b)      // a == b
EXPECT_NE(a, b)      // a != b
EXPECT_LT(a, b)      // a < b
EXPECT_LE(a, b)      // a <= b
EXPECT_GT(a, b)      // a > b
EXPECT_GE(a, b)      // a >= b
EXPECT_TRUE(cond)    // condition is true
EXPECT_FALSE(cond)   // condition is false

// ASSERT_* versions stop test if fail
ASSERT_EQ(a, b)      // Stops test if fails
```

---

## Comparison: Python vs C++ Testing

### Python (unittest)

```python
import unittest

class TestLinkedList(unittest.TestCase):
    def setUp(self):
        self.ll = LinkedList()

    def test_append(self):
        self.ll.append(1)
        self.assertEqual(self.ll.size(), 1)
        self.assertEqual(self.ll.get(0), 1)

    def test_prepend(self):
        self.ll.prepend(1)
        self.assertEqual(self.ll.get(0), 1)

if __name__ == '__main__':
    unittest.main()
```

### C++ (Method 2 - Custom Framework)

```cpp
#include "test_framework.h"
#include "LinkedList.h"

void test_append() {
    TEST_CASE("Test Append");
    LinkedList ll;
    ll.append(1);
    ASSERT_EQUAL(ll.size(), 1, "Size is 1");
    ASSERT_EQUAL(ll.get(0), 1, "First element is 1");
}

void test_prepend() {
    TEST_CASE("Test Prepend");
    LinkedList ll;
    ll.prepend(1);
    ASSERT_EQUAL(ll.get(0), 1, "First element is 1");
}

int main() {
    TEST_SUITE("LinkedList Tests");
    test_append();
    test_prepend();
    print_test_summary();
    return g_tests_failed;
}
```

### C++ (Google Test)

```cpp
#include <gtest/gtest.h>
#include "LinkedList.h"

class LinkedListTest : public ::testing::Test {
protected:
    LinkedList ll;
};

TEST_F(LinkedListTest, Append) {
    ll.append(1);
    EXPECT_EQ(ll.size(), 1);
    EXPECT_EQ(ll.get(0), 1);
}

TEST_F(LinkedListTest, Prepend) {
    ll.prepend(1);
    EXPECT_EQ(ll.get(0), 1);
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
```

---

## Recommended Workflow for Your Course

1. **Start with Method 1** (Simple manual testing) - easiest to set up
2. **Upgrade to Method 2** (Custom framework) - more organized, better output
3. **Use Google Test** if your professor requires it or you want professional experience

### Project Structure

```
my_dsa_project/
├── include/
│   ├── LinkedList.h
│   ├── Stack.h
│   └── test_framework.h
├── src/
│   ├── LinkedList.cpp
│   ├── Stack.cpp
│   └── test_framework.cpp
├── tests/
│   ├── test_linkedlist.cpp
│   ├── test_stack.cpp
│   └── test_queue.cpp
└── Makefile
```

### Simple Makefile

```makefile
CXX = g++
CXXFLAGS = -std=c++11 -Wall -I./include

all: test_linkedlist test_stack

test_linkedlist: src/LinkedList.cpp src/test_framework.cpp tests/test_linkedlist.cpp
	$(CXX) $(CXXFLAGS) -o test_linkedlist $^

test_stack: src/Stack.cpp src/test_framework.cpp tests/test_stack.cpp
	$(CXX) $(CXXFLAGS) -o test_stack $^

clean:
	rm -f test_linkedlist test_stack

run_tests: all
	./test_linkedlist
	./test_stack
```

---

## Quick Reference: Common Test Patterns

### Test Edge Cases

```cpp
void test_edge_cases() {
    TEST_CASE("Edge Cases");

    LinkedList ll;

    // Empty list
    ASSERT_EQUAL(ll.size(), 0, "Empty list size");
    ASSERT_EQUAL(ll.get(0), -1, "Get from empty list");

    // Single element
    ll.append(1);
    ASSERT_EQUAL(ll.size(), 1, "Single element size");
    ASSERT_EQUAL(ll.get(0), 1, "Single element value");

    // Boundary indices
    ll.append(2);
    ll.append(3);
    ASSERT_EQUAL(ll.get(-1), -1, "Negative index");
    ASSERT_EQUAL(ll.get(100), -1, "Out of bounds index");
}
```

### Test Multiple Operations

```cpp
void test_multiple_operations() {
    TEST_CASE("Multiple Operations");

    Stack s(10);
    s.push(1);
    s.push(2);
    s.pop();
    s.push(3);

    ASSERT_EQUAL(s.size(), 2, "Size after mixed operations");
    ASSERT_EQUAL(s.peek(), 3, "Top after mixed operations");
}
```

### Test Error Conditions

```cpp
void test_errors() {
    TEST_CASE("Error Handling");

    Stack s(2);
    s.push(1);
    s.push(2);

    // Test overflow - depends on implementation
    try {
        s.push(3);  // Should throw or return false
        ASSERT_TRUE(false, "Should have thrown overflow exception");
    } catch (const exception& e) {
        ASSERT_TRUE(true, "Correctly threw exception");
    }
}
```

---

## Tips for Testing DSA in C++

1. **Test incrementally** - write tests as you implement each method
2. **Test edge cases** - empty structures, single elements, boundaries
3. **Memory testing** - use Valgrind to check for leaks: `valgrind ./test_linkedlist`
4. **Separate test files** - one test file per data structure
5. **Use meaningful test names** - describe what you're testing
6. **Print structures** - implement print() methods for debugging
7. **Keep tests simple** - one concept per test function

Ready for the efficiency/performance testing tutorial next?
