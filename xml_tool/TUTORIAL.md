# 📘 Build Your Own XML → JSON Tool
## A Step-by-Step C++ Tutorial with TDD

> **What this is:** A hands-on tutorial where YOU build a C++ project from scratch. You'll type every line, understand every concept, and write tests along the way.
>
> **Time:** 2-3 hours (or spread across multiple sessions)
>
> **Prerequisites:** Basic C++ knowledge (variables, functions, loops). No testing experience needed.

---

# How This Tutorial Works

1. **You create empty files**
2. **You type the code** (don't copy-paste – typing helps you learn)
3. **Each section explains what the code does**
4. **You compile and run after each major step**

The `solution/` folder contains completed files if you get stuck.

---

# Setup

## Step 0: Create Your Project Folder

Open your terminal and run:

```bash
mkdir -p ~/CS-tutorials/xml_tool_build
cd ~/CS-tutorials/xml_tool_build
```

You'll build everything inside `xml_tool_build`. The existing `xml_tool` folder is your reference.

---

# Chapter 1: Your First Test (No Libraries)

Before using any testing framework, let's understand what a test actually IS.

## 1.1 Create the File

```bash
touch chapter1.cpp
```

Open `chapter1.cpp` in your editor.

## 1.2 Type This Code

```cpp
#include <iostream>

// A simple function to test
int add(int a, int b) {
    return a + b;
}

// A test is just code that checks if something works
void test_add() {
    int result = add(2, 3);
    
    if (result == 5) {
        std::cout << "PASS: add(2, 3) = 5\n";
    } else {
        std::cout << "FAIL: add(2, 3) = " << result << " (expected 5)\n";
    }
}

int main() {
    std::cout << "Running tests...\n";
    test_add();
    return 0;
}
```

## 1.3 Compile and Run

```bash
g++ -std=c++17 chapter1.cpp -o chapter1
./chapter1
```

You should see:
```
Running tests...
PASS: add(2, 3) = 5
```

## 1.4 What You Learned

- **A test is an `if` statement** that checks if a function returns the expected value
- **Compile first:** `g++ file.cpp -o outputname`
- **Then run:** `./outputname`

## 1.5 Break It On Purpose

Change `add` to return `a * b` instead. Recompile and run. See the FAIL message? That's what tests are for – they catch bugs.

**Change it back to `a + b` before continuing.**

---

# Chapter 2: Using GoogleTest

Writing `if` statements for every test gets tedious. GoogleTest makes it cleaner.

## 2.1 Check If GoogleTest Is Installed

```bash
ls /opt/homebrew/include/gtest/gtest.h 2>/dev/null || ls /usr/local/include/gtest/gtest.h 2>/dev/null
```

If you see a file path, it's installed. If not, install it yourself when ready:
```bash
brew install googletest
```

## 2.2 Create the File

```bash
touch chapter2.cpp
```

## 2.3 Type This Code

```cpp
#include <gtest/gtest.h>

int add(int a, int b) {
    return a + b;
}

TEST(AddTest, BasicAddition) {
    EXPECT_EQ(add(2, 3), 5);
}

TEST(AddTest, NegativeNumbers) {
    EXPECT_EQ(add(-1, 1), 0);
}

TEST(AddTest, Zeros) {
    EXPECT_EQ(add(0, 0), 0);
}
```

## 2.4 Compile and Run

```bash
g++ -std=c++17 chapter2.cpp -lgtest -lgtest_main -pthread \
    -I/opt/homebrew/include -L/opt/homebrew/lib -o chapter2
./chapter2
```

You should see colored output with `[  PASSED  ]`.

## 2.5 What You Learned

- `TEST(SuiteName, TestName)` defines a test
- `EXPECT_EQ(actual, expected)` checks equality
- GoogleTest provides `main()` for you (via `-lgtest_main`)

---

# Chapter 3: Create the Project Structure

Now we'll set up a real project.

## 3.1 Create the Directories

```bash
mkdir -p include src tests data
```

Your structure will be:
```
xml_tool_build/
├── include/    ← header files (.h)
├── src/        ← source files (.cpp)
├── tests/      ← test files
└── data/       ← test data (XML files)
```

## 3.2 Create a Sample XML File

```bash
touch data/sample.xml
```

Open `data/sample.xml` and type:

```xml
<?xml version="1.0"?>
<catalog>
    <book id="b1">
        <title>Learn C++</title>
        <author>Jane Doe</author>
    </book>
    <book id="b2">
        <title>XML Basics</title>
        <author>John Smith</author>
    </book>
</catalog>
```

---

# Chapter 4: The Header File

Header files declare functions – they tell the compiler "these functions exist."

## 4.1 Create the File

```bash
touch include/xml_tool.h
```

## 4.2 Type This Code

```cpp
#ifndef XML_TOOL_H
#define XML_TOOL_H

#include <string>
#include <vector>
#include "tinyxml2.h"

using namespace tinyxml2;

// Load an XML file into memory
bool loadXML(const std::string& path, XMLDocument& doc);

// Collect all tag names from the document
void collectTags(XMLNode* node, std::vector<std::string>& tags);

// Check if a tag name is valid
bool isValidTagName(const std::string& name);

#endif
```

## 4.3 What Each Part Means

**Header Guards:**
```cpp
#ifndef XML_TOOL_H   // "if XML_TOOL_H is not defined..."
#define XML_TOOL_H   // "...define it now"
// ...content...
#endif               // "end of the if"
```
This prevents the file from being included twice.

**Includes:**
```cpp
#include <string>     // for std::string
#include <vector>     // for std::vector
#include "tinyxml2.h" // for XMLDocument, XMLNode, etc.
```

**Function Declarations:**
```cpp
bool loadXML(const std::string& path, XMLDocument& doc);
```
This tells the compiler: "A function named `loadXML` exists. It takes a string and a document, and returns a bool."

---

# Chapter 5: Implement loadXML (TDD Style)

Now we use Test-Driven Development: write the test first, then the implementation.

## 5.1 Write the Test First

Create `tests/test_load.cpp`:

```cpp
#include <gtest/gtest.h>
#include "xml_tool.h"

TEST(LoadXMLTest, LoadsValidFile) {
    XMLDocument doc;
    bool success = loadXML("data/sample.xml", doc);
    
    EXPECT_TRUE(success);
    EXPECT_NE(doc.RootElement(), nullptr);
}

TEST(LoadXMLTest, FailsOnMissingFile) {
    XMLDocument doc;
    bool success = loadXML("nonexistent.xml", doc);
    
    EXPECT_FALSE(success);
}
```

## 5.2 Try to Compile (It Will Fail)

```bash
g++ -std=c++17 tests/test_load.cpp -I include -I /opt/homebrew/include \
    -lgtest -lgtest_main -ltinyxml2 -L /opt/homebrew/lib -pthread -o test_load
```

You'll get an error like: "undefined reference to loadXML"

**This is the RED phase of TDD** – the test exists but the code doesn't yet.

## 5.3 Implement the Function

Create `src/xml_tool.cpp`:

```cpp
#include "xml_tool.h"
#include <iostream>

bool loadXML(const std::string& path, XMLDocument& doc) {
    if (path.empty()) {
        return false;
    }
    
    XMLError result = doc.LoadFile(path.c_str());
    
    if (result != XML_SUCCESS) {
        std::cerr << "Error: " << doc.ErrorStr() << "\n";
        return false;
    }
    
    return true;
}
```

## 5.4 Compile and Run Tests

```bash
g++ -std=c++17 src/xml_tool.cpp tests/test_load.cpp \
    -I include -I /opt/homebrew/include \
    -L /opt/homebrew/lib -ltinyxml2 -lgtest -lgtest_main -pthread \
    -o test_load

./test_load
```

**This is the GREEN phase** – tests pass!

## 5.5 What You Learned

| Concept | Example |
|---------|---------|
| **const reference** | `const std::string& path` – read-only, no copy |
| **reference** | `XMLDocument& doc` – modifiable, no copy |
| **c_str()** | Converts `std::string` to C-style `const char*` |

---

# Chapter 6: Implement collectTags (Recursion)

## 6.1 Add to the Header

Open `include/xml_tool.h` and make sure `collectTags` is declared (it should be from Chapter 4).

## 6.2 Write the Test

Add to `tests/test_load.cpp` (or create a new test file):

```cpp
TEST(CollectTagsTest, FindsAllTags) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    std::vector<std::string> tags;
    collectTags(&doc, tags);
    
    // sample.xml has: catalog, book, title, author, book, title, author = 7 tags
    EXPECT_EQ(tags.size(), 7);
}
```

## 6.3 Try to Compile (Fails – RED)

It will fail because `collectTags` isn't implemented.

## 6.4 Implement the Function

Add to `src/xml_tool.cpp`:

```cpp
void collectTags(XMLNode* node, std::vector<std::string>& tags) {
    if (node == nullptr) {
        return;  // Base case: nothing to do
    }
    
    // Loop through all child elements
    for (XMLElement* elem = node->FirstChildElement();
         elem != nullptr;
         elem = elem->NextSiblingElement()) {
        
        // Add this element's name
        tags.push_back(elem->Name());
        
        // Recurse into children
        collectTags(elem, tags);
    }
}
```

## 6.5 Recompile and Run (GREEN)

```bash
g++ -std=c++17 src/xml_tool.cpp tests/test_load.cpp \
    -I include -I /opt/homebrew/include \
    -L /opt/homebrew/lib -ltinyxml2 -lgtest -lgtest_main -pthread \
    -o test_load

./test_load
```

## 6.6 What You Learned

| Concept | Example |
|---------|---------|
| **Recursion** | `collectTags` calls itself for children |
| **Base case** | `if (node == nullptr) return;` stops recursion |
| **Pointers** | `XMLNode*` and `XMLElement*` are memory addresses |
| **Vectors** | `tags.push_back(...)` adds to the list |

---

# Chapter 7: Validate Tag Names (Using \<cctype\>)

## 7.1 Write the Test First

```cpp
TEST(IsValidTagNameTest, AcceptsLettersAndDigits) {
    EXPECT_TRUE(isValidTagName("book"));
    EXPECT_TRUE(isValidTagName("Book123"));
    EXPECT_TRUE(isValidTagName("my_tag"));
}

TEST(IsValidTagNameTest, RejectsInvalidChars) {
    EXPECT_FALSE(isValidTagName(""));
    EXPECT_FALSE(isValidTagName("hello world"));
    EXPECT_FALSE(isValidTagName("tag!"));
}
```

## 7.2 Implement (src/xml_tool.cpp)

```cpp
#include <cctype>  // Add this at the top

bool isValidTagName(const std::string& name) {
    if (name.empty()) {
        return false;
    }
    
    for (char ch : name) {
        // isalpha: is it a letter?
        // isdigit: is it a digit?
        if (!(isalpha(ch) || isdigit(ch) || ch == '_')) {
            return false;
        }
    }
    
    return true;
}
```

## 7.3 Recompile and Run

Tests should pass.

## 7.4 What You Learned

| Concept | Example |
|---------|---------|
| **Range-based for** | `for (char ch : name)` |
| **cctype functions** | `isalpha(ch)`, `isdigit(ch)` |
| **Logical OR** | `\|\|` combines conditions |

---

# Continue Building...

You now have the pattern:

1. **Write a test** (RED – it fails)
2. **Write the minimum code** to make it pass (GREEN)
3. **Refactor** if needed
4. **Repeat**

## What's Left to Build

Check the completed files in `~/CS-tutorials/xml_tool/` to see the full implementations of:

- `renameTag()` – rename an element
- `deleteTag()` – remove an element
- `elementToJson()` – convert XML to JSON
- `main()` – the menu interface

Each one follows the same TDD pattern.

---

# Quick Reference

## Compile Commands

**Single file:**
```bash
g++ -std=c++17 file.cpp -o output
```

**With GoogleTest:**
```bash
g++ -std=c++17 file.cpp -lgtest -lgtest_main -pthread -o test
```

**With tinyxml2:**
```bash
g++ -std=c++17 file.cpp -ltinyxml2 -o output
```

**Full project:**
```bash
g++ -std=c++17 src/xml_tool.cpp src/main.cpp \
    -I include -I /opt/homebrew/include \
    -L /opt/homebrew/lib -ltinyxml2 -o xml_tool
```

## C++ Concepts Covered

| Concept | Chapter |
|---------|---------|
| Functions | 1, 4, 5 |
| If statements | 1 |
| References | 5, 6 |
| Pointers | 6 |
| Vectors | 6 |
| Recursion | 6 |
| cctype | 7 |
| Header files | 4 |

---

# You're Done When...

- [ ] All tests pass
- [ ] You can run `./xml_tool data/sample.xml`
- [ ] You understand every line you typed

Good luck! 🎓
