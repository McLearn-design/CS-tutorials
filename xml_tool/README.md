# 📘 XML Tool: A C++ TDD Tutorial

> **What this is:** A complete, properly structured C++ project that teaches you Test-Driven Development while refreshing your C++ skills from `refresher.md`.

---

## 📁 Project Structure

```
xml_tool/
├── include/
│   └── xml_tool.h          ← Header file (function declarations)
├── src/
│   ├── xml_tool.cpp        ← Implementation (function definitions)  
│   └── main.cpp            ← Application entry point (main function)
├── tests/
│   └── test_xml_tool.cpp   ← Unit tests (GoogleTest)
├── data/
│   └── sample.xml          ← Sample data for testing
├── json.hpp                ← JSON library (single header)
├── Makefile                ← Build commands
└── README.md               ← This file (tutorial)
```

**Why this structure?**
- `include/` — Headers declare WHAT functions exist
- `src/` — Source files define HOW functions work
- `tests/` — Tests verify functions work correctly
- `data/` — Sample files for testing
- `Makefile` — Automates building

---

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
# Install tinyxml2 (XML parser)
brew install tinyxml2

# Install GoogleTest (testing framework)
brew install googletest
```

### Step 2: Build and Test

```bash
cd ~/CS-tutorials/xml_tool

# Run tests first (TDD style!)
make test

# Build the application
make

# Run the application
./xml_tool data/sample.xml
```

---

## 📚 The Tutorial

Read this file while looking at the code files. Each section explains a file.

---

# Part 1: The Header File

**File:** `include/xml_tool.h`

## What is a Header File?

A header file (`.h`) declares functions without implementing them. It's like a menu at a restaurant — it tells you what's available, but not how it's made.

```cpp
// Declaration (in .h file)
bool loadXML(const std::string& path, XMLDocument& doc);
```

The compiler needs to know functions exist before you use them. Headers solve this.

## Header Guards

```cpp
#ifndef XML_TOOL_H
#define XML_TOOL_H
// ... content ...
#endif
```

This prevents the file from being included twice (which would cause errors).

## Reading the Declarations

Look at `xml_tool.h`. Each line tells you:

| Declaration | Returns | Parameters |
|-------------|---------|------------|
| `bool loadXML(...)` | true/false | path (string), doc (document) |
| `void collectTags(...)` | nothing | node (pointer), tags (vector) |
| `XMLElement* findElement(...)` | pointer to element | node, name |
| `bool renameTag(...)` | true/false | doc, oldName, newName |
| `bool deleteTag(...)` | true/false | doc, name |
| `bool isValidTagName(...)` | true/false | name |
| `json elementToJson(...)` | JSON object | element |
| `json xmlToJson(...)` | JSON object | document |
| `void showMenu()` | nothing | nothing |

---

# Part 2: The Implementation File

**File:** `src/xml_tool.cpp`

## What Goes Here?

This file contains the actual code for each function. It `#include`s the header:

```cpp
#include "xml_tool.h"
```

## Understanding Each Function

### loadXML — Loading Files

```cpp
bool loadXML(const std::string& path, XMLDocument& doc) {
    if (path.empty()) {
        return false;
    }
    
    XMLError result = doc.LoadFile(path.c_str());
    
    if (result != XML_SUCCESS) {
        std::cerr << "Error loading " << path << ": " << doc.ErrorStr() << "\n";
        return false;
    }
    
    return true;
}
```

**C++ Concepts Used:**
| Concept | Example | From refresher.md |
|---------|---------|-------------------|
| References | `const std::string& path` | Pointers & References |
| Boolean returns | `return true;` | Basic Syntax |
| If statements | `if (path.empty())` | Control Flow |
| Method calls | `doc.LoadFile(...)` | Classes & Objects |

**What is `const std::string& path`?**
- `std::string` — a string (text) type
- `&` — reference (don't copy, use the original)
- `const` — promise not to modify it

### collectTags — Recursion

```cpp
void collectTags(XMLNode* node, std::vector<std::string>& tags) {
    if (node == nullptr) {
        return;  // Base case
    }
    
    for (XMLElement* elem = node->FirstChildElement(); 
         elem != nullptr; 
         elem = elem->NextSiblingElement()) {
        tags.push_back(elem->Name());
        collectTags(elem, tags);  // ← Recursion!
    }
}
```

**C++ Concepts Used:**
| Concept | Example | From refresher.md |
|---------|---------|-------------------|
| Pointers | `XMLNode* node` | Pointers & References |
| Vectors | `std::vector<std::string>& tags` | STL Containers |
| Recursion | `collectTags(elem, tags)` | Recursion |
| For loops | `for (... ; ... ; ...)` | Control Flow |

**What is recursion?**
A function that calls itself. It needs:
1. A **base case** — when to stop (`if (node == nullptr)`)
2. A **recursive case** — call itself with simpler data (`collectTags(elem, tags)`)

### isValidTagName — Character Checking

```cpp
bool isValidTagName(const std::string& name) {
    if (name.empty()) {
        return false;
    }
    
    for (char ch : name) {
        if (!(isalpha(ch) || isdigit(ch) || ch == '_')) {
            return false;
        }
    }
    
    return true;
}
```

**C++ Concepts Used:**
| Concept | Example | From refresher.md |
|---------|---------|-------------------|
| Range-based for | `for (char ch : name)` | Control Flow |
| `<cctype>` functions | `isalpha()`, `isdigit()` | Functions |
| Logical operators | `||`, `&&`, `!` | Control Flow |

### renameTag — Modifying the DOM

This function shows how to:
1. Find an element
2. Create a new element
3. Copy attributes
4. Move children
5. Replace old with new

Study the code in `src/xml_tool.cpp` — each step is commented.

### elementToJson — Building JSON

```cpp
json elementToJson(const XMLElement* elem) {
    json j;
    
    // Add attributes
    for (const XMLAttribute* attr = elem->FirstAttribute(); 
         attr != nullptr; 
         attr = attr->Next()) {
        j["@" + std::string(attr->Name())] = attr->Value();
    }
    
    // Add text
    const char* text = elem->GetText();
    if (text != nullptr) {
        j["#text"] = text;
    }
    
    // Add children (recursion)
    std::vector<json> children;
    for (const XMLElement* child = elem->FirstChildElement(); ...) {
        children.push_back(elementToJson(child));  // ← Recursion
    }
    
    if (!children.empty()) {
        j["children"] = children;
    }
    
    return j;
}
```

**C++ Concepts Used:**
| Concept | Example | From refresher.md |
|---------|---------|-------------------|
| Operator overloading | `j["key"] = value` | Operator Overloading |
| Templates | `std::vector<json>` | Templates |
| String concatenation | `"@" + std::string(...)` | Strings |

---

# Part 3: The Main File

**File:** `src/main.cpp`

## Command-Line Arguments

```cpp
int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " <xml-file>\n";
        return 1;
    }
    
    std::string xmlPath = argv[1];
    // ...
}
```

- `argc` = argument count (how many arguments)
- `argv` = argument values (the actual arguments)
- `argv[0]` = program name
- `argv[1]` = first user argument

## The Menu Loop

```cpp
while (true) {
    showMenu();
    int choice;
    std::cin >> choice;
    
    switch (choice) {
        case 1: /* list tags */ break;
        case 2: /* rename */ break;
        // ...
    }
}
```

**C++ Concepts Used:**
| Concept | Example | From refresher.md |
|---------|---------|-------------------|
| While loops | `while (true)` | Control Flow |
| Switch statements | `switch (choice)` | Control Flow |
| I/O streams | `std::cin >> choice` | File I/O |

---

# Part 4: The Tests

**File:** `tests/test_xml_tool.cpp`

## What is a Unit Test?

A unit test checks that ONE function works correctly:

```cpp
TEST(LoadXMLTest, LoadsValidFile) {
    XMLDocument doc;
    bool success = loadXML("data/sample.xml", doc);
    
    EXPECT_TRUE(success);
    EXPECT_NE(doc.RootElement(), nullptr);
}
```

## GoogleTest Syntax

```cpp
TEST(TestSuiteName, TestName) {
    // Arrange: set up data
    // Act: call the function
    // Assert: check the result
}
```

## Common Assertions

| Assertion | Meaning |
|-----------|---------|
| `EXPECT_TRUE(x)` | x should be true |
| `EXPECT_FALSE(x)` | x should be false |
| `EXPECT_EQ(a, b)` | a should equal b |
| `EXPECT_NE(a, b)` | a should NOT equal b |
| `EXPECT_STREQ(a, b)` | C-strings should be equal |
| `ASSERT_*` | same as EXPECT, but stops test if it fails |

## How Tests Map to Functions

| Function | Test Suite |
|----------|-----------|
| `loadXML` | `LoadXMLTest` |
| `collectTags` | `CollectTagsTest` |
| `findElement` | `FindElementTest` |
| `isValidTagName` | `IsValidTagNameTest` |
| `renameTag` | `RenameTagTest` |
| `deleteTag` | `DeleteTagTest` |
| `xmlToJson` | `XmlToJsonTest` |

---

# Part 5: Refresher Concept Mapping

Here's how this project covers concepts from `refresher.md`:

| Refresher Topic | Where You'll See It |
|-----------------|---------------------|
| **Basic Syntax** | All files — variables, types, operators |
| **Control Flow** | `main.cpp` — if, switch, while, for |
| **Functions** | `xml_tool.cpp` — all functions |
| **Arrays/Strings** | `xml_tool.cpp` — `std::string`, `std::vector` |
| **Pointers** | `xml_tool.cpp` — `XMLElement*`, `XMLNode*` |
| **References** | Function parameters — `const std::string&` |
| **Classes** | Using `XMLDocument`, `json` |
| **STL Containers** | `std::vector<std::string>` for tags |
| **Recursion** | `collectTags`, `elementToJson`, `findElement` |
| **File I/O** | `loadXML`, saving JSON with `std::ofstream` |

---

# Part 6: Your Workflow

## Step 1: Run the Tests

```bash
make test
```

All tests should pass. This proves the code works.

## Step 2: Run the Application

```bash
make
./xml_tool data/sample.xml
```

Try each menu option. See how the code you read actually works.

## Step 3: Make a Change

Try modifying a function. For example, change `isValidTagName` to also reject names starting with a number.

Before changing, write a test:

```cpp
TEST(IsValidTagNameTest, RejectsNamesStartingWithDigit) {
    EXPECT_FALSE(isValidTagName("123abc"));
}
```

Run `make test` — it will fail. Now implement the fix. Run `make test` again — it should pass.

**This is TDD: test first, then implement.**

## Step 4: Study Each File

Read through each file in order:
1. `include/xml_tool.h` — understand the interface
2. `src/xml_tool.cpp` — understand the implementation
3. `tests/test_xml_tool.cpp` — understand how to verify
4. `src/main.cpp` — understand how it all connects

---

# Part 7: Common Commands

| Command | What it does |
|---------|--------------|
| `make` | Build the application |
| `make test` | Build and run tests |
| `make clean` | Delete built files |
| `./xml_tool data/sample.xml` | Run the app |

---

# Part 8: If Something Breaks

**Compiler error?**
- Check include statements
- Check function signatures match between `.h` and `.cpp`
- Make sure you're in the `xml_tool` directory

**Test fails?**
- Read the error message carefully
- Check the expected vs actual values
- Look at the specific test that failed

**Linker error (undefined reference)?**
- Make sure `-ltinyxml2` and `-lgtest` are in the compile command
- Run `brew install tinyxml2 googletest` if not installed

---

## ✅ You're Ready

You now have a clean, properly structured C++ project with tests. Use it to refresh your C++ before your term starts.

When you want to practice:
1. Pick a function
2. Read the tests for it
3. Read the implementation
4. Try modifying it
5. Write a new test for your change
6. Run `make test`

Good luck with your courses! 🎓
