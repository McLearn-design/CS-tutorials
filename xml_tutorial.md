# XML → JSON Command‑Line Tutorial

> **Goal** – Build a small C++ command‑line program that:
> 1. Parses an XML file.
> 2. Shows a text‑based menu so the user can explore tags.
> 3. Allows simple modifications (rename a tag, change an attribute, delete a node).
> 4. Writes the resulting structure to a JSON file.
>
> This tutorial walks you through every step, reinforcing the C‑type character‑checking functions you just practiced in `strings.cpp`.

---

## 1️⃣ Prerequisites

- **C++ compiler** (`g++` or `clang++`) – already available on macOS.
- **tinyxml2** – a lightweight XML parser.
- **nlohmann/json** – header‑only JSON library.
- Basic knowledge of `iostream`, loops, and the `<cctype>` functions (`isalpha`, `isdigit`, …) you used in `strings.cpp`.

You can install the libraries via Homebrew (they are header‑only, so we only need the headers):
```bash
brew install tinyxml2
# nlohmann/json is a single header; we will fetch it directly.
curl -L https://github.com/nlohmann/json/releases/download/v3.11.3/json.hpp -o json.hpp
```
Place `json.hpp` in the project folder (next step).

---

## 2️⃣ Project Layout

```
xml_tool/
├─ main.cpp          # our program (see sections below)
├─ xml_sample.xml    # a tiny XML file to experiment with
├─ json.hpp          # nlohmann/json header (downloaded above)
└─ Makefile          # optional, for easy building
```
Create the folder and copy the files there.

---

## 3️⃣ Step‑by‑Step Implementation

### 3.1 `main.cpp` – Boilerplate

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <cctype>          // <-- you already know these!
#include "tinyxml2.h"
#include "json.hpp"

using namespace tinyxml2;
using json = nlohmann::json;

// Helper to print a separator line
void separator() { std::cout << "-----------------------------------\n"; }
```

### 3.2 Load an XML file

```cpp
bool loadXML(const std::string& path, XMLDocument& doc) {
    XMLError e = doc.LoadFile(path.c_str());
    if (e != XML_SUCCESS) {
        std::cerr << "Failed to load " << path << ": " << doc.ErrorStr() << "\n";
        return false;
    }
    return true;
}
```

### 3.3 Walk the DOM and collect tag names

```cpp
void collectTags(XMLNode* node, std::vector<std::string>& tags) {
    for (XMLElement* elem = node->FirstChildElement(); elem; elem = elem->NextSiblingElement()) {
        tags.push_back(elem->Name());
        collectTags(elem, tags); // recurse into children
    }
}
```

### 3.4 Simple text menu

```cpp
void showMenu() {
    std::cout << "\nXML → JSON Tool – Menu\n";
    std::cout << "1) List all tags\n";
    std::cout << "2) Rename a tag\n";
    std::cout << "3) Delete a tag\n";
    std::cout << "4) Save as JSON\n";
    std::cout << "5) Exit\n";
    std::cout << "Choose an option: ";
}
```

### 3.5 Implement the actions

#### List all tags
```cpp
void listTags(XMLDocument& doc) {
    std::vector<std::string> tags;
    collectTags(&doc, tags);
    separator();
    std::cout << "Tags present in the document:\n";
    for (size_t i = 0; i < tags.size(); ++i) {
        std::cout << i+1 << ". " << tags[i] << '\n';
    }
    separator();
}
```

#### Rename a tag (demonstrates `isalpha` validation)
```cpp
bool renameTag(XMLDocument& doc, const std::string& oldName, const std::string& newName) {
    XMLElement* elem = doc.FirstChildElement(oldName.c_str());
    if (!elem) return false; // not found
    // tinyxml2 does not allow renaming directly; we create a new element.
    XMLElement* parent = elem->Parent()->ToElement();
    XMLElement* replacement = doc.NewElement(newName.c_str());
    // copy attributes & children
    for (const XMLAttribute* a = elem->FirstAttribute(); a; a = a->Next()) {
        replacement->SetAttribute(a->Name(), a->Value());
    }
    replacement->DeepClone(doc, elem);
    parent->InsertEndChild(replacement);
    parent->DeleteChild(elem);
    return true;
}
```
We validate the new name with `isalpha`/`isdigit`/`_` before calling `renameTag`.

#### Delete a tag
```cpp
bool deleteTag(XMLDocument& doc, const std::string& name) {
    XMLElement* elem = doc.FirstChildElement(name.c_str());
    if (!elem) return false;
    XMLNode* parent = elem->Parent();
    parent->DeleteChild(elem);
    return true;
}
```

#### Convert XML to JSON (using nlohmann/json)
```cpp
json elementToJson(const XMLElement* elem) {
    json j;
    // attributes
    for (const XMLAttribute* a = elem->FirstAttribute(); a; a = a->Next()) {
        j["@" + std::string(a->Name())] = a->Value();
    }
    // children
    std::vector<json> children;
    for (const XMLElement* child = elem->FirstChildElement(); child; child = child->NextSiblingElement()) {
        children.push_back(elementToJson(child));
    }
    if (!children.empty()) j["children"] = children;
    // text content (if any)
    const char* txt = elem->GetText();
    if (txt) j["#text"] = txt;
    return j;
}

json xmlToJson(XMLDocument& doc) {
    json root;
    XMLElement* rootElem = doc.RootElement();
    if (rootElem) root[rootElem->Name()] = elementToJson(rootElem);
    return root;
}
```

### 3.6 Main loop

```cpp
int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " <xml-file>\n";
        return 1;
    }
    std::string xmlPath = argv[1];
    XMLDocument doc;
    if (!loadXML(xmlPath, doc)) return 1;

    while (true) {
        showMenu();
        int choice; std::cin >> choice;
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // flush newline
        switch (choice) {
            case 1: listTags(doc); break;
            case 2: {
                std::string oldTag, newTag;
                std::cout << "Enter existing tag name: "; std::getline(std::cin, oldTag);
                std::cout << "Enter new tag name (letters/digits/_ only): "; std::getline(std::cin, newTag);
                // validate newTag using <cctype> helpers
                bool ok = !newTag.empty();
                for (char ch : newTag) {
                    if (!(isalpha(ch) || isdigit(ch) || ch == '_')) { ok = false; break; }
                }
                if (!ok) {
                    std::cout << "Invalid tag name – only alphanumerics and '_' allowed.\n";
                } else if (renameTag(doc, oldTag, newTag)) {
                    std::cout << "Tag renamed successfully.\n";
                } else {
                    std::cout << "Tag not found.\n";
                }
                break; }
            case 3: {
                std::string delTag; std::cout << "Tag to delete: "; std::getline(std::cin, delTag);
                if (deleteTag(doc, delTag)) std::cout << "Deleted.\n"; else std::cout << "Not found.\n";
                break; }
            case 4: {
                json j = xmlToJson(doc);
                std::string outPath = "output.json";
                std::ofstream out(outPath);
                out << j.dump(4);
                std::cout << "Saved JSON to " << outPath << "\n";
                break; }
            case 5: return 0;
            default: std::cout << "Invalid option.\n";
        }
    }
}
```

---

## 4️⃣ Build the Project

### Using a simple Makefile (optional)
```makefile
CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -I.
LIBS = -ltinyxml2

all: xml_tool

xml_tool: main.cpp json.hpp
	$(CXX) $(CXXFLAGS) main.cpp -o xml_tool $(LIBS)

clean:
	rm -f xml_tool
```
Run:
```bash
make        # builds ./xml_tool
./xml_tool xml_sample.xml
```

### One‑liner compile (no Makefile)
```bash
g++ -std=c++17 -Wall -Wextra -I. main.cpp -ltinyxml2 -o xml_tool
./xml_tool xml_sample.xml
```

---

## 5️⃣ Walkthrough of the Concepts

| Concept | Where it appears in the tutorial | Why it matters |
|---------|-----------------------------------|----------------|
| `<cctype>` functions (`isalpha`, `isdigit`, `isalnum`, …) | Validation of the new tag name before renaming (see **Rename a tag** section) | Shows practical use of character classification you practiced in `strings.cpp`. |
| XML parsing with **tinyxml2** | `loadXML`, `collectTags`, `elementToJson` | Gives you a real‑world library for navigating hierarchical data. |
| JSON serialization with **nlohmann/json** | `xmlToJson` and the `json` dump | Demonstrates modern header‑only C++ libraries and how to produce machine‑readable output. |
| Command‑line argument handling | `int main(int argc, char* argv[])` | Standard pattern for CLI tools. |
| Text‑based menu loop | `showMenu` + `while(true)` | Shows how to keep a program interactive, similar to many console utilities. |
| File I/O (`std::ofstream`) | Saving JSON | Basic I/O that you’ll use in many projects. |

---

## 6️⃣ Test It Yourself

1. Create a tiny XML file `xml_sample.xml`:
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
2. Build the program (see **Build the Project**).
3. Run `./xml_tool xml_sample.xml`.
4. Try each menu option – list tags, rename `<book>` to `<volume>`, delete `<author>`, and finally save to `output.json`.
5. Open `output.json` to see the hierarchical representation.

---

## 7️⃣ Next Steps & Ideas

- **Add attribute editing** – let the user change attribute values.
- **Support deeper navigation** – present a breadcrumb menu to edit nested nodes.
- **Pretty‑print XML** after modifications (tinyxml2 can write back to a file).
- **Unit tests** using GoogleTest to verify each operation.
- **Package the tool** with CMake for cross‑platform builds.

---

## 8️⃣ Recap

You now have a complete, runnable C++ project that:
- Reinforces the `<cctype>` functions you explored in `strings.cpp`.
- Shows how to parse XML, present a user‑friendly CLI, modify data, and export JSON.
- Gives you a solid foundation for building more sophisticated command‑line utilities.

Happy coding! 🎉
