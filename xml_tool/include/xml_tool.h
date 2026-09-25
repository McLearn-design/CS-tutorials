// include/xml_tool.h
// ===================
// Header file for the XML Tool library.
// Contains all function declarations and necessary includes.

#ifndef XML_TOOL_H
#define XML_TOOL_H

#include <string>
#include <vector>
#include "tinyxml2.h"
#include "json.hpp"

using namespace tinyxml2;
using json = nlohmann::json;

// ============================================================
// FUNCTION DECLARATIONS
// ============================================================
// These tell the compiler "these functions exist somewhere."
// The actual code is in src/xml_tool.cpp
// ============================================================

// Load an XML file into a document
// Returns true on success, false on failure
bool loadXML(const std::string& path, XMLDocument& doc);

// Collect all tag names from the document into a vector
void collectTags(XMLNode* node, std::vector<std::string>& tags);

// Find an element by name anywhere in the document
XMLElement* findElement(XMLNode* node, const std::string& name);

// Rename a tag (returns true if found and renamed)
bool renameTag(XMLDocument& doc, const std::string& oldName, const std::string& newName);

// Delete a tag (returns true if found and deleted)
bool deleteTag(XMLDocument& doc, const std::string& name);

// Validate that a tag name contains only valid characters
bool isValidTagName(const std::string& name);

// Convert an XML element to JSON
json elementToJson(const XMLElement* elem);

// Convert the entire document to JSON
json xmlToJson(XMLDocument& doc);

// Display the menu
void showMenu();

#endif // XML_TOOL_H
