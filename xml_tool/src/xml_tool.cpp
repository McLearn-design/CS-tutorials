// src/xml_tool.cpp
// =================
// Implementation file for the XML Tool library.
// Contains all function definitions.

#include "xml_tool.h"
#include <iostream>
#include <cctype>

// ============================================================
// loadXML
// ============================================================
// Purpose: Load an XML file into memory
// Parameters:
//   - path: the file path (const reference = read-only, no copy)
//   - doc: the document to load into (reference = we modify it)
// Returns: true if successful, false otherwise
// ============================================================

bool loadXML(const std::string& path, XMLDocument& doc) {
    if (path.empty()) {
        return false;
    }
    
    // c_str() converts std::string to const char* (C-style string)
    // Some libraries like tinyxml2 expect C-style strings
    XMLError result = doc.LoadFile(path.c_str());
    
    if (result != XML_SUCCESS) {
        std::cerr << "Error loading " << path << ": " << doc.ErrorStr() << "\n";
        return false;
    }
    
    return true;
}


// ============================================================
// collectTags
// ============================================================
// Purpose: Walk the XML tree and collect all tag names
// Uses: RECURSION - the function calls itself for children
// Parameters:
//   - node: pointer to current node (can be null)
//   - tags: vector to store names (reference = we modify it)
// ============================================================

void collectTags(XMLNode* node, std::vector<std::string>& tags) {
    if (node == nullptr) {
        return;  // Base case: nothing to process
    }
    
    // Loop through all child elements
    for (XMLElement* elem = node->FirstChildElement(); 
         elem != nullptr; 
         elem = elem->NextSiblingElement()) {
        
        // Add this tag's name to the vector
        tags.push_back(elem->Name());
        
        // Recursively process this element's children
        collectTags(elem, tags);
    }
}


// ============================================================
// findElement
// ============================================================
// Purpose: Search the entire tree for an element by name
// Uses: RECURSION to search all levels
// Returns: Pointer to the element, or nullptr if not found
// ============================================================

XMLElement* findElement(XMLNode* node, const std::string& name) {
    for (XMLElement* elem = node->FirstChildElement(); 
         elem != nullptr; 
         elem = elem->NextSiblingElement()) {
        
        // Check if this is the one we're looking for
        if (std::string(elem->Name()) == name) {
            return elem;
        }
        
        // Search in children
        XMLElement* found = findElement(elem, name);
        if (found != nullptr) {
            return found;
        }
    }
    
    return nullptr;  // Not found
}


// ============================================================
// isValidTagName
// ============================================================
// Purpose: Check if a tag name is valid (letters, digits, underscore)
// Uses: <cctype> functions - isalpha(), isdigit()
// ============================================================

bool isValidTagName(const std::string& name) {
    if (name.empty()) {
        return false;
    }
    
    for (char ch : name) {
        // isalpha: is it a letter (a-z, A-Z)?
        // isdigit: is it a digit (0-9)?
        if (!(isalpha(ch) || isdigit(ch) || ch == '_')) {
            return false;
        }
    }
    
    return true;
}


// ============================================================
// renameTag
// ============================================================
// Purpose: Rename an existing tag to a new name
// Process:
//   1. Find the element
//   2. Create a new element with the new name
//   3. Copy attributes and children
//   4. Replace old with new
// ============================================================

bool renameTag(XMLDocument& doc, const std::string& oldName, const std::string& newName) {
    XMLElement* oldElem = findElement(&doc, oldName);
    if (oldElem == nullptr) {
        return false;
    }
    
    XMLNode* parent = oldElem->Parent();
    if (parent == nullptr) {
        return false;
    }
    
    // Create new element
    XMLElement* newElem = doc.NewElement(newName.c_str());
    
    // Copy all attributes
    for (const XMLAttribute* attr = oldElem->FirstAttribute(); 
         attr != nullptr; 
         attr = attr->Next()) {
        newElem->SetAttribute(attr->Name(), attr->Value());
    }
    
    // Move all children (not copy - they get reparented)
    XMLNode* child = oldElem->FirstChild();
    while (child != nullptr) {
        XMLNode* next = child->NextSibling();
        newElem->InsertEndChild(child);
        child = next;
    }
    
    // Insert new, delete old
    parent->InsertAfterChild(oldElem, newElem);
    parent->DeleteChild(oldElem);
    
    return true;
}


// ============================================================
// deleteTag
// ============================================================
// Purpose: Remove a tag from the document
// ============================================================

bool deleteTag(XMLDocument& doc, const std::string& name) {
    XMLElement* elem = findElement(&doc, name);
    if (elem == nullptr) {
        return false;
    }
    
    XMLNode* parent = elem->Parent();
    if (parent == nullptr) {
        return false;
    }
    
    parent->DeleteChild(elem);
    return true;
}


// ============================================================
// elementToJson
// ============================================================
// Purpose: Convert one XML element to a JSON object
// Uses: RECURSION for nested elements
// JSON format:
//   - Attributes become "@name": "value"
//   - Text becomes "#text": "content"
//   - Children become "children": [...]
// ============================================================

json elementToJson(const XMLElement* elem) {
    json j;
    
    // Add attributes with @ prefix
    for (const XMLAttribute* attr = elem->FirstAttribute(); 
         attr != nullptr; 
         attr = attr->Next()) {
        j["@" + std::string(attr->Name())] = attr->Value();
    }
    
    // Add text content if present
    const char* text = elem->GetText();
    if (text != nullptr) {
        j["#text"] = text;
    }
    
    // Add children array
    std::vector<json> children;
    for (const XMLElement* child = elem->FirstChildElement(); 
         child != nullptr; 
         child = child->NextSiblingElement()) {
        children.push_back(elementToJson(child));  // Recursion
    }
    
    if (!children.empty()) {
        j["children"] = children;
    }
    
    return j;
}


// ============================================================
// xmlToJson
// ============================================================
// Purpose: Convert the entire document to JSON
// ============================================================

json xmlToJson(XMLDocument& doc) {
    json result;
    
    XMLElement* root = doc.RootElement();
    if (root != nullptr) {
        result[root->Name()] = elementToJson(root);
    }
    
    return result;
}


// ============================================================
// showMenu
// ============================================================
// Purpose: Display the interactive menu
// ============================================================

void showMenu() {
    std::cout << "\n";
    std::cout << "╔════════════════════════════════════╗\n";
    std::cout << "║     XML → JSON Tool — Menu         ║\n";
    std::cout << "╠════════════════════════════════════╣\n";
    std::cout << "║  1) List all tags                  ║\n";
    std::cout << "║  2) Rename a tag                   ║\n";
    std::cout << "║  3) Delete a tag                   ║\n";
    std::cout << "║  4) Save as JSON                   ║\n";
    std::cout << "║  5) Exit                           ║\n";
    std::cout << "╚════════════════════════════════════╝\n";
    std::cout << "Choose an option: ";
}
