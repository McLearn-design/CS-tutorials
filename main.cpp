// main.cpp – Complete XML → JSON command‑line tool
// Build with: g++ -std=c++17 -Wall -Wextra -I. main.cpp -ltinyxml2 -o xml_tool

#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <cctype>          // isalpha, isdigit, etc.
#include "tinyxml2.h"
#include "json.hpp"

using namespace tinyxml2;
using json = nlohmann::json;

// ------------------------------------------------------------
// Helper to print a separator line
// ------------------------------------------------------------
void separator() {
    std::cout << "-----------------------------------\n";
}

// ------------------------------------------------------------
// Load an XML file (returns true on success)
// ------------------------------------------------------------
bool loadXML(const std::string& path, XMLDocument& doc) {
    XMLError e = doc.LoadFile(path.c_str());
    if (e != XML_SUCCESS) {
        std::cerr << "Failed to load " << path << ": " << doc.ErrorStr() << "\n";
        return false;
    }
    return true;
}

// ------------------------------------------------------------
// Recursively collect all tag names into a vector
// ------------------------------------------------------------
void collectTags(XMLNode* node, std::vector<std::string>& tags) {
    for (XMLElement* elem = node->FirstChildElement(); elem; elem = elem->NextSiblingElement()) {
        tags.push_back(elem->Name());
        collectTags(elem, tags); // recurse into children
    }
}

// ------------------------------------------------------------
// List all tags (used by menu option 1)
// ------------------------------------------------------------
void listTags(XMLDocument& doc) {
    std::vector<std::string> tags;
    collectTags(&doc, tags);
    separator();
    std::cout << "Tags present in the document:\n";
    for (size_t i = 0; i < tags.size(); ++i) {
        std::cout << i + 1 << ". " << tags[i] << '\n';
    }
    separator();
}

// ------------------------------------------------------------
// Rename a tag (menu option 2)
// ------------------------------------------------------------
bool renameTag(XMLDocument& doc, const std::string& oldName, const std::string& newName) {
    XMLElement* elem = doc.FirstChildElement(oldName.c_str());
    if (!elem) return false; // not found

    XMLNode* parent = elem->Parent();
    XMLElement* replacement = doc.NewElement(newName.c_str());

    // copy attributes
    for (const XMLAttribute* a = elem->FirstAttribute(); a; a = a->Next()) {
        replacement->SetAttribute(a->Name(), a->Value());
    }
    // deep copy children
    replacement->DeepClone(doc, elem);

    parent->InsertEndChild(replacement);
    parent->DeleteChild(elem);
    return true;
}

// ------------------------------------------------------------
// Delete a tag (menu option 3)
// ------------------------------------------------------------
bool deleteTag(XMLDocument& doc, const std::string& name) {
    XMLElement* elem = doc.FirstChildElement(name.c_str());
    if (!elem) return false;
    XMLNode* parent = elem->Parent();
    parent->DeleteChild(elem);
    return true;
}

// ------------------------------------------------------------
// Convert an XML element (and its subtree) to JSON
// ------------------------------------------------------------
json elementToJson(const XMLElement* elem) {
    json j;
    // attributes become "@name"
    for (const XMLAttribute* a = elem->FirstAttribute(); a; a = a->Next()) {
        j["@" + std::string(a->Name())] = a->Value();
    }
    // children become a JSON array under "children"
    std::vector<json> children;
    for (const XMLElement* child = elem->FirstChildElement(); child; child = child->NextSiblingElement()) {
        children.push_back(elementToJson(child));
    }
    if (!children.empty()) j["children"] = children;
    // text content becomes "#text"
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

// ------------------------------------------------------------
// Show the menu to the user
// ------------------------------------------------------------
void showMenu() {
    std::cout << "\nXML → JSON Tool – Menu\n";
    std::cout << "1) List all tags\n";
    std::cout << "2) Rename a tag\n";
    std::cout << "3) Delete a tag\n";
    std::cout << "4) Save as JSON\n";
    std::cout << "5) Exit\n";
    std::cout << "Choose an option: ";
}

// ------------------------------------------------------------
// Main program – entry point
// ------------------------------------------------------------
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
        int choice;
        std::cin >> choice;
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // clear newline

        switch (choice) {
            case 1:
                listTags(doc);
                break;
            case 2: {
                std::string oldTag, newTag;
                std::cout << "Enter existing tag name: ";
                std::getline(std::cin, oldTag);
                std::cout << "Enter new tag name (letters/digits/_ only): ";
                std::getline(std::cin, newTag);
                // validation using <cctype>
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
                break;
            }
            case 3: {
                std::string delTag;
                std::cout << "Tag to delete: ";
                std::getline(std::cin, delTag);
                if (deleteTag(doc, delTag)) {
                    std::cout << "Deleted.\n";
                } else {
                    std::cout << "Tag not found.\n";
                }
                break;
            }
            case 4: {
                json j = xmlToJson(doc);
                std::ofstream out("output.json");
                out << j.dump(4);
                std::cout << "Saved JSON to output.json\n";
                break;
            }
            case 5:
                return 0;
            default:
                std::cout << "Invalid option.\n";
        }
    }
}
