# 📚 Refresher‑Based Tutorial: Building an XML → JSON Command‑Line Tool (Simplified Language)

> **Goal** – Use the concepts from **`refresher.md`** (your comprehensive C++ reference) to build a small, functional command‑line program that parses XML, lets the user explore and edit tags, and writes the result to a JSON file.

---

## Table of Contents
1. [Project Layout](#project-layout)
2. [Basic Syntax & Types](#basic-syntax-types)
3. [Control Flow (if / switch / loops)](#control-flow)
4. [Functions – How they are declared and used](#functions)
5. [Strings (`std::string`)](#strings)
6. [Pointers & References – What they are and why we use them](#pointers-references)
7. [Dynamic Memory & RAII – Automatic cleanup](#dynamic-memory)
8. [Classes & Objects (tinyxml2 & nlohmann/json)](#classes-objects)
9. [Operator Overloading (via JSON library)](#operator-overloading)
10. [Templates (nlohmann::json)](#templates)
11. [STL Containers (`vector`, `map`‑like JSON)](#stl-containers)
12. [File I/O (reading XML, writing JSON)](#file-io)
13. [Recursion (tree traversal)](#recursion)
14. [Putting It All Together – Execution Flow](#execution-flow)
15. [Extension Ideas Aligned with the Refresher](#extension-ideas)
16. [Quick Checklist & Next Steps](#checklist)

---

## 1️⃣ Project Layout <a name="project-layout"></a>
```
xml_tool/
├─ main.cpp          ← the only source file (contains all concepts)
├─ xml_sample.xml    ← a tiny XML file for testing
├─ json.hpp          ← nlohmann/json header (downloaded once)
└─ Makefile (optional)
```
All code lives in **`main.cpp`**; the tutorial will walk through each line and map it to a section of **`refresher.md`**.

---

## 2️⃣ Basic Syntax & Types <a name="basic-syntax-types"></a>
From **refresher – Primitive Types**:
```cpp
#include <iostream>   // for printing to the console (std::cout) and reading input (std::cin)
#include <fstream>    // for writing files (std::ofstream)
#include <string>     // the C++ string class (std::string)
#include <vector>     // a dynamic array (std::vector)
#include <cctype>     // functions that check what kind of character you have (isalpha, isdigit, …)
#include "tinyxml2.h" // a small library that reads XML files
#include "json.hpp"   // a header‑only library that creates JSON text

using namespace tinyxml2;          // lets us write `XMLDocument` instead of `tinyxml2::XMLDocument`
using json = nlohmann::json;       // creates a short name `json` for the long type `nlohmann::json`
```
- `#include` statements bring code from other files into our program.
- `using namespace` is a shortcut so we don’t have to write the full name each time.
- `using json = …` creates an alias, a way to give a long type a short nickname.

---

## 3️⃣ Control Flow <a name="control-flow"></a>
### `if` / `else`
```cpp
if (!loadXML(xmlPath, doc)) {
    return 1;                 // stop the program because the XML file could not be read
}
```
If the condition inside the parentheses is **true**, the block inside the braces runs.

### `switch` (menu dispatch)
```cpp
switch (choice) {
    case 1: listTags(doc); break;          // if the user typed 1, list all tags
    case 2: { /* rename logic */ } break;   // if the user typed 2, rename a tag
    case 3: { /* delete logic */ } break;   // if the user typed 3, delete a tag
    case 4: { /* save JSON */ } break;      // if the user typed 4, write JSON to a file
    case 5: return 0;                     // if the user typed 5, exit the program
    default: std::cout << "Invalid option\n"; // any other number is not allowed
}
```
`switch` chooses one of many possible actions based on the value of `choice`.

### Loops (`while` + `for`)
```cpp
while (true) {               // keep showing the menu forever until we break out
    showMenu();
    std::cin >> choice;      // read the number the user typed
    // … handle the choice …
}
```
A `while` loop repeats as long as its condition is true. Inside the loop we use a `for` loop (see later) to walk through collections of XML nodes.

---

## 4️⃣ Functions <a name="functions"></a>
A **function** is a reusable piece of code. The refresher shows the three parts:
1. **Return type** – what the function gives back (`bool`, `void`, `json`, …).
2. **Name** – what we call it (`loadXML`, `collectTags`, …).
3. **Parameters** – values we give the function to work with.

In our program we have:
```cpp
bool loadXML(const std::string& path, XMLDocument& doc);
void collectTags(XMLNode* node, std::vector<std::string>& tags);
bool renameTag(XMLDocument& doc, const std::string& oldName, const std::string& newName);
json xmlToJson(XMLDocument& doc);
```
- `bool` means the function returns **true** or **false**.
- `void` means the function returns **nothing**.
- `const std::string& path` – *read‑only* reference to a string (we won’t change it).
- `XMLDocument& doc` – a reference to a document that **can be changed** inside the function.

### What is a *reference*?
A reference (`&`) is another name for an existing variable. It lets a function work directly with the original object instead of making a copy. Think of it like giving someone a *pointer* to a book so they can write notes inside the same book, not a photocopy.

---

## 5️⃣ Strings (`std::string`) <a name="strings"></a>
```cpp
std::string xmlPath = argv[1];          // the file name the user typed on the command line
std::string oldTag, newTag;            // where we store the names the user types in the menu
std::getline(std::cin, newTag);        // read a whole line (including spaces) from the console
```
`std::string` is a **class** that manages a sequence of characters for us. It knows its own length, can be concatenated, and provides many useful functions (like `empty()`, `size()`, `operator[]`).

---

## 6️⃣ Pointers & References <a name="pointers-references"></a>
### References – the main way we pass big objects
```cpp
bool loadXML(const std::string& path, XMLDocument& doc); // `doc` is a reference
```
When we call `loadXML(xmlPath, doc)`, the function works on the **same** `doc` object that lives in `main`. No copy is made, so changes inside the function are visible after it returns.

### Pointers – used by tinyxml2
```cpp
XMLElement* elem = doc.FirstChildElement(oldName.c_str());
```
`tinyxml2` gives us raw pointers (`XMLElement*`). A pointer holds the **address** of an object. We do **not** delete these pointers ourselves; the library owns the memory and frees it when the `XMLDocument` goes out of scope. This is why we never write `delete elem;` – doing so would crash the program.

---

## 7️⃣ Dynamic Memory & RAII <a name="dynamic-memory"></a>
`XMLDocument` allocates memory on the **heap** for every node in the XML file. When the `XMLDocument` object is destroyed (when `main` finishes), its **destructor** automatically frees all that memory. This pattern is called **RAII – Resource Acquisition Is Initialization** – and it means we don’t have to remember to call `delete` ourselves.

---

## 8️⃣ Classes & Objects <a name="classes-objects"></a>
### tinyxml2 – a third‑party class
```cpp
XMLDocument doc;          // creates an empty document object
XMLElement* root = doc.RootElement(); // asks the document for its root element
```
A **class** bundles data (members) and functions (methods) together. `XMLDocument` and `XMLElement` are classes provided by tinyxml2.

### nlohmann::json – another class (template class)
```cpp
json j;                   // an empty JSON object
j["@id"] = "b1";      // add a key/value pair
j["children"] = children; // add an array of child objects
```
`json` behaves like a map (dictionary) where keys are strings and values can be numbers, strings, arrays, or even other JSON objects.

---

## 9️⃣ Operator Overloading (via JSON library) <a name="operator-overloading"></a>
You don’t write any overloads yourself, but the JSON library defines special versions of common operators so we can write natural‑looking code:
- `j["name"]` – looks like array indexing but actually accesses a JSON field.
- `std::cout << j.dump(4);` – prints the JSON with nice indentation.
- `j = otherJson;` – copies one JSON object into another.
These are examples of **operator overloading**, a feature the refresher covers under *Operator Overloading*.

---

## 🔟 Templates <a name="templates"></a>
`json` is defined as a **template class**:
```cpp
template<class... Args>
class basic_json { … };
```
A template lets a class work with many different data types without writing separate code for each one. When we write `using json = nlohmann::json;` we are creating a concrete instance of that template that can hold any JSON‑compatible value. This matches the refresher’s *Function & Class Templates* section.

---

## 📦 STL Containers <a name="stl-containers"></a>
### `std::vector<std::string>` – list of tag names
```cpp
std::vector<std::string> tags;
collectTags(&doc, tags);
```
A **vector** is a dynamic array that can grow as needed. It stores elements of the same type (`std::string` here).

### `std::vector<json>` – children array when converting to JSON
```cpp
std::vector<json> children;
for (const XMLElement* child = elem->FirstChildElement(); child; child = child->NextSiblingElement()) {
    children.push_back(elementToJson(child));
}
```
We fill the vector with JSON objects representing each child element.

---

## 📁 File I/O <a name="file-io"></a>
### Reading XML (tinyxml2 does it for us)
```cpp
bool loadXML(const std::string& path, XMLDocument& doc) {
    return doc.LoadFile(path.c_str()) == XML_SUCCESS;
}
```
`LoadFile` opens the file, parses the XML, and builds the DOM tree.

### Writing JSON (standard library)
```cpp
std::ofstream out("output.json");
out << j.dump(4);   // write pretty‑printed JSON (4 spaces per indent)
```
`std::ofstream` opens a file for writing. `j.dump(4)` converts the JSON object to a nicely formatted string.

---

## 🔁 Recursion <a name="recursion"></a>
Both **`collectTags`** and **`elementToJson`** call themselves to walk the XML tree. This is the same idea as the factorial example in the refresher:
```cpp
void collectTags(XMLNode* node, std::vector<std::string>& tags) {
    for (XMLElement* elem = node->FirstChildElement(); elem; elem = elem->NextSiblingElement()) {
        tags.push_back(elem->Name());
        collectTags(elem, tags);   // go deeper into the tree
    }
}
```
When a node has no children, the `for` loop ends and the function returns – that is the **base case**.

---

## 🚀 Execution Flow <a name="execution-flow"></a>
1. **Start** – `main` reads the XML file name from the command line and calls `loadXML`.
2. **Menu loop** – repeatedly show the menu, read the user’s choice, and jump to the matching `case`.
3. **List tags** – walks the tree and prints every tag name.
4. **Rename** – asks for an old and a new name, checks the new name with `<cctype>` functions (`isalpha`, `isdigit`, `_`), then creates a new element and deletes the old one.
5. **Delete** – finds the element and removes it from its parent.
6. **Save** – converts the whole DOM to a JSON object (`xmlToJson`) and writes it to `output.json`.
7. **Exit** – returns `0` to the operating system.

All the work is done on the **same** `XMLDocument` object, so changes made by one menu action are visible to the next.

---

## 💡 Extension Ideas Aligned with the Refresher <a name="extension-ideas"></a>
| Refresher Topic | Possible Extension |
|-----------------|-------------------|
| **Pointers** | Write a function that returns a raw `XMLElement*` and manually `delete` it (to see why we normally *don’t* delete tinyxml2 pointers). |
| **Dynamic Memory** | Implement a custom allocator for temporary strings and use it in the rename routine. |
| **Classes** | Wrap the whole tool in a class `XmlTool` with member functions for each menu action. |
| **Operator Overloading** | Overload `operator<<` for a custom pretty‑print of the current XML tree. |
| **Templates** | Write a generic `printContainer(const Container& c)` that works for `vector`, `set`, and `json`. |
| **Recursion** | Add a function that computes the maximum depth of the XML tree. |
| **File I/O** | Add a “Load another XML file” option that re‑initialises `doc`. |
| **STL Containers** | Replace `vector<string>` with `set<string>` to automatically remove duplicate tag names. |
| **Testing** | Write GoogleTest unit tests for `renameTag`, `deleteTag`, and the `<cctype>` validation logic. |

---

## ✅ Quick Checklist & Next Steps <a name="checklist"></a>
- [ ] **Compile** the program (`g++ -std=c++17 -Wall -Wextra -I. main.cpp -ltinyxml2 -o xml_tool`).
- [ ] **Run** it with `./xml_tool xml_sample.xml` and try each menu option.
- [ ] **Test** the rename validation: try a name with a space or `!` and see the error message.
- [ ] **Open** `output.json` after saving – notice how attributes become `@name` and text becomes `#text`.
- [ ] Pick **one** extension from the table and implement it – you’ll reinforce the associated refresher concept.

---

## 🎉 Closing Thoughts
This version of the tutorial uses plain language and concrete examples so that every sentence is easy to understand. Read it side‑by‑side with `main.cpp` and you’ll see exactly how the ideas from **`refresher.md`** become real, working code.

Feel free to ask for any part to be explained further or for help adding an extension!
