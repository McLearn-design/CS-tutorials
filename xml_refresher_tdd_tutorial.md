# 📚 TDD‑Style Tutorial for the XML → JSON Tool

> **Goal** – Learn Test‑Driven Development (TDD) in C++ *while* building the XML → JSON command‑line program. You’ll write tests **first**, watch them fail, then implement the minimal code to make them pass.

---

## 📦 Prerequisites
| Tool | Why you need it |
|------|-----------------|
| **C++ compiler** (`g++`/`clang++`) | To compile the program and the tests. |
| **GoogleTest** (gtest) | The most popular C++ unit‑testing framework. |
| **CMake** (optional but recommended) | Generates build files for both the app and the tests. |
| **tinyxml2** & **nlohmann/json** | Already used by the app – keep them as before. |

### Installing the dependencies (macOS)
```bash
# compiler (already present on macOS)
brew install gcc                     # optional, clang works too

# tinyxml2 (XML parser)
brew install tinyxml2

# GoogleTest – we will build it from source
git clone https://github.com/google/googletest.git
cd googletest
mkdir build && cd build
cmake ..
make -j$(sysctl -n hw.logicalcpu)
sudo cp lib/*.a /usr/local/lib   # copy static libs
sudo cp -R ../googletest/include/gtest /usr/local/include
cd ../../

# nlohmann/json – single‑header library
curl -L https://github.com/nlohmann/json/releases/download/v3.11.3/json.hpp -o json.hpp
```
> **Tip:** If you already have Homebrew’s `googletest` formula you can `brew install googletest` and skip the manual build.

---

## 🛠️ Project Layout (after adding tests)
```
xml_tool/
├─ main.cpp                 ← the production code (the app)
├─ test_main.cpp            ← GoogleTest unit tests (you will write these first)
├─ CMakeLists.txt           ← builds both the app and the tests
├─ xml_sample.xml           ← tiny XML file for manual runs
├─ json.hpp                 ← nlohmann/json header
└─ (optional) googletest/   ← cloned GoogleTest repo (or system‑wide install)
```
---

## 📐 Test‑Driven Development Cycle
1. **Write a failing test** – describe the behavior you want.
2. **Run the test** – it should fail (red).
3. **Write the minimal code** to make the test pass.
4. **Run the test again** – it should now pass (green).
5. **Refactor** the production code if needed, keeping the tests green.
6. **Repeat** for the next piece of functionality.

We’ll go through the most important functions of the tool:
- `loadXML`
- `collectTags`
- `renameTag`
- `deleteTag`
- `xmlToJson`

---

## 🧪 1️⃣ Test `loadXML`
### Desired behavior
- Returns **true** when a valid XML file exists.
- Returns **false** and prints an error when the file does **not** exist.

### Test file (`test_main.cpp` – first test)
```cpp
#include <gtest/gtest.h>
#include "tinyxml2.h"
#include "main.cpp"   // include the production code (or better: separate header)

using namespace tinyxml2;

TEST(LoadXMLTest, LoadsValidFile) {
    XMLDocument doc;
    bool ok = loadXML("xml_sample.xml", doc);
    EXPECT_TRUE(ok);
    // also check that a root element exists
    EXPECT_NE(doc.RootElement(), nullptr);
}

TEST(LoadXMLTest, FailsOnMissingFile) {
    XMLDocument doc;
    bool ok = loadXML("nonexistent.xml", doc);
    EXPECT_FALSE(ok);
}
```
### Run the test (red → fail because `loadXML` isn’t compiled yet)
```bash
mkdir build && cd build
cmake ..
make xml_tool_tests   # target defined in CMakeLists.txt (see later)
./xml_tool_tests
```
You should see **two failing tests** because `loadXML` isn’t linked yet.

### Implement just enough to make them pass
Add the `loadXML` implementation to **`main.cpp`** (the same code we used before). Re‑run the tests – they should now be **green**.

---

## 🧪 2️⃣ Test `collectTags`
### Desired behavior
- Walk the whole DOM and return a `std::vector<std::string>` containing **every tag name** (including duplicates for nested tags).

### Test
```cpp
TEST(CollectTagsTest, ReturnsAllTags) {
    XMLDocument doc;
    ASSERT_TRUE(loadXML("xml_sample.xml", doc));
    std::vector<std::string> tags;
    collectTags(&doc, tags);
    // The sample XML (see xml_sample.xml) contains the tags:
    // catalog, book, title, author, book, title, author
    std::vector<std::string> expected = {
        "catalog", "book", "title", "author",
        "book", "title", "author"
    };
    EXPECT_EQ(tags, expected);
}
```
### Make it pass
Implement `collectTags` exactly as shown in the tutorial (recursive DFS). Run the test – it should now pass.

---

## 🧪 3️⃣ Test `renameTag`
### Desired behavior
- Returns **true** when the old tag exists and the new name is valid.
- Returns **false** when the old tag does **not** exist.
- After a successful rename, the DOM no longer contains the old name **and** contains the new name.

### Test
```cpp
TEST(RenameTagTest, RenamesExistingTag) {
    XMLDocument doc;
    ASSERT_TRUE(loadXML("xml_sample.xml", doc));
    // rename the first <book> to <volume>
    bool ok = renameTag(doc, "book", "volume");
    EXPECT_TRUE(ok);
    // verify the old name is gone (search for first occurrence)
    EXPECT_EQ(doc.FirstChildElement("book"), nullptr);
    // verify the new name exists
    EXPECT_NE(doc.FirstChildElement("volume"), nullptr);
}

TEST(RenameTagTest, FailsWhenTagMissing) {
    XMLDocument doc;
    ASSERT_TRUE(loadXML("xml_sample.xml", doc));
    bool ok = renameTag(doc, "nonexistent", "newtag");
    EXPECT_FALSE(ok);
}
```
### Implement
Copy the `renameTag` function from the tutorial. Run the tests – they should now be green.

---

## 🧪 4️⃣ Test `deleteTag`
### Desired behavior
- Returns **true** when the tag exists and is removed.
- Returns **false** when the tag does not exist.
- After deletion, the tag is no longer present in the DOM.

### Test
```cpp
TEST(DeleteTagTest, DeletesExistingTag) {
    XMLDocument doc;
    ASSERT_TRUE(loadXML("xml_sample.xml", doc));
    bool ok = deleteTag(doc, "author");
    EXPECT_TRUE(ok);
    // there were two <author> elements – after deleting one, at least one should still exist
    XMLElement* first = doc.FirstChildElement("author");
    EXPECT_NE(first, nullptr);
    // delete the second one
    ok = deleteTag(doc, "author");
    EXPECT_TRUE(ok);
    // now no <author> should remain
    EXPECT_EQ(doc.FirstChildElement("author"), nullptr);
}

TEST(DeleteTagTest, FailsWhenTagMissing) {
    XMLDocument doc;
    ASSERT_TRUE(loadXML("xml_sample.xml", doc));
    bool ok = deleteTag(doc, "nonexistent");
    EXPECT_FALSE(ok);
}
```
### Implement
Add the `deleteTag` function (same as tutorial). Run the tests – they should pass.

---

## 🧪 5️⃣ Test `xmlToJson`
### Desired behavior
- Returns a **JSON object** whose top‑level key is the root element name.
- Child elements become a `children` array.
- Attributes are stored with an `@` prefix.
- Text content is stored under `#text`.

### Test (using the sample XML)
```cpp
TEST(XmlToJsonTest, ProducesCorrectStructure) {
    XMLDocument doc;
    ASSERT_TRUE(loadXML("xml_sample.xml", doc));
    json j = xmlToJson(doc);

    // Expected JSON (pretty‑printed for readability)
    std::string expected = R"({
  "catalog": {
    "children": [
      {
        "@id": "b1",
        "children": [
          { "#text": "Learn C++" },
          { "#text": "Jane Doe" }
        ]
      },
      {
        "@id": "b2",
        "children": [
          { "#text": "XML Basics" },
          { "#text": "John Smith" }
        ]
      }
    ]
  }
})";
    // Compare after parsing both strings to JSON objects (order of keys is deterministic in nlohmann::json)
    json expectedJson = json::parse(expected);
    EXPECT_EQ(j, expectedJson);
}
```
> **Note:** The exact JSON layout depends on how you treat attributes vs. text. Adjust the expected string to match your implementation.

### Implement
Add `elementToJson` and `xmlToJson` exactly as in the tutorial. Run the test – it should now be green.

---

## 📁 CMakeLists.txt (build both app and tests)
Create a **`CMakeLists.txt`** in the project root:
```cmake
cmake_minimum_required(VERSION 3.15)
project(XmlTool TDD)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Find tinyxml2 (Homebrew installs a CMake config)
find_package(tinyxml2 REQUIRED)

# -------------------------------------------------
# Production executable
# -------------------------------------------------
add_executable(xml_tool main.cpp)
target_include_directories(xml_tool PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(xml_tool PRIVATE tinyxml2)

# -------------------------------------------------
# GoogleTest – we assume you built/installed it already
# -------------------------------------------------
# If you installed via Homebrew, the package is called GTest
find_package(GTest REQUIRED)
include_directories(${GTEST_INCLUDE_DIRS})

add_executable(xml_tool_tests test_main.cpp)
target_include_directories(xml_tool_tests PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(xml_tool_tests PRIVATE tinyxml2 GTest::gtest GTest::gtest_main)

enable_testing()
add_test(NAME xml_tool_tests COMMAND xml_tool_tests)
```
Now you can build everything with:
```bash
mkdir -p build && cd build
cmake ..
make
./xml_tool_tests   # runs the GoogleTest suite
./xml_tool xml_sample.xml   # runs the actual program
```
---

## 🏁 Full TDD Workflow Recap
1. **Write a test** (e.g., `LoadXMLTest`).
2. **Run** – it fails because the function is missing or incomplete.
3. **Write the minimal implementation** in `main.cpp`.
4. **Run** – the test now passes.
5. **Refactor** (clean up code, extract helpers) **without breaking the test**.
6. **Repeat** for the next feature.

By the end you will have:
- A **fully tested** XML → JSON command‑line tool.
- A **test suite** that guards against regressions when you add new features (e.g., attribute editing, deeper navigation).
- Hands‑on experience with **Test‑Driven Development** in C++.

---

## 📚 Where to Find the Sample XML
Create a tiny file `xml_sample.xml` next to the source files:
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
The tests reference this file, so keep it in the project root.

---

## ✅ Quick Checklist
- [ ] Install **GoogleTest** and **tinyxml2** (see *Prerequisites*). 
- [ ] Create `main.cpp` (production code) **without** the functions yet.
- [ ] Write the **first test** (`LoadXMLTest`) in `test_main.cpp`.
- [ ] Run `cmake && make` – watch the test fail.
- [ ] Implement `loadXML` – re‑run, see it pass.
- [ ] Continue with `collectTags`, `renameTag`, `deleteTag`, `xmlToJson` following the same red‑green‑refactor cycle.
- [ ] When all tests are green, run the actual program (`./xml_tool xml_sample.xml`).

---

## 🎉 You’re Ready!
You now have a **complete TDD workflow** for a real‑world C++ project, and you’ve exercised every major concept from your **`refresher.md`**. Feel free to ask for help on any specific test, for adding new features, or for troubleshooting the build.

Happy testing! 🚀
