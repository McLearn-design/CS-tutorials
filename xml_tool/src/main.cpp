// src/main.cpp
// =============
// The main entry point for the XML Tool application.
// This file contains the main() function and the menu logic.

#include "xml_tool.h"
#include <iostream>
#include <fstream>
#include <limits>

int main(int argc, char* argv[]) {
    // ========================================================
    // COMMAND LINE ARGUMENTS
    // ========================================================
    // argc = argument count (number of arguments)
    // argv = argument values (array of strings)
    // argv[0] is always the program name
    // argv[1] is the first user argument (the XML file path)
    // ========================================================
    
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " <xml-file>\n";
        std::cerr << "Example: " << argv[0] << " data/sample.xml\n";
        return 1;
    }
    
    // Load the XML file
    std::string xmlPath = argv[1];
    XMLDocument doc;
    
    if (!loadXML(xmlPath, doc)) {
        return 1;
    }
    
    std::cout << "✅ Loaded: " << xmlPath << "\n";
    
    // ========================================================
    // MAIN LOOP
    // ========================================================
    // while(true) creates an infinite loop.
    // We exit when the user chooses option 5.
    // ========================================================
    
    while (true) {
        showMenu();
        
        int choice;
        std::cin >> choice;
        
        // Clear the input buffer (get rid of the newline character)
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        
        // ====================================================
        // SWITCH STATEMENT
        // ====================================================
        // switch checks the value of 'choice' and jumps to
        // the matching case. 'break' exits the switch.
        // 'default' runs if no case matches.
        // ====================================================
        
        switch (choice) {
            case 1: {
                // List all tags
                std::vector<std::string> tags;
                collectTags(&doc, tags);
                
                std::cout << "\nTags in document:\n";
                for (size_t i = 0; i < tags.size(); ++i) {
                    std::cout << "  " << i + 1 << ". " << tags[i] << "\n";
                }
                break;
            }
            
            case 2: {
                // Rename a tag
                std::string oldName, newName;
                
                std::cout << "Enter current tag name: ";
                std::getline(std::cin, oldName);
                
                std::cout << "Enter new tag name: ";
                std::getline(std::cin, newName);
                
                // Validate the new name
                if (!isValidTagName(newName)) {
                    std::cout << "❌ Invalid tag name. Use only letters, digits, and underscore.\n";
                    break;
                }
                
                if (renameTag(doc, oldName, newName)) {
                    std::cout << "✅ Renamed '" << oldName << "' to '" << newName << "'\n";
                } else {
                    std::cout << "❌ Tag '" << oldName << "' not found.\n";
                }
                break;
            }
            
            case 3: {
                // Delete a tag
                std::string name;
                std::cout << "Enter tag name to delete: ";
                std::getline(std::cin, name);
                
                if (deleteTag(doc, name)) {
                    std::cout << "✅ Deleted '" << name << "'\n";
                } else {
                    std::cout << "❌ Tag '" << name << "' not found.\n";
                }
                break;
            }
            
            case 4: {
                // Save as JSON
                json j = xmlToJson(doc);
                
                std::ofstream out("output.json");
                out << j.dump(4);  // Pretty print with 4-space indent
                out.close();
                
                std::cout << "✅ Saved to output.json\n";
                break;
            }
            
            case 5: {
                // Exit
                std::cout << "Goodbye!\n";
                return 0;
            }
            
            default: {
                std::cout << "Invalid option. Please choose 1-5.\n";
            }
        }
    }
    
    return 0;
}
