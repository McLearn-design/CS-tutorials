#include <iostream>
#include <string>
#include <vector>

struct Item {
    std::string name;
    int quantity;
};

// Returns the address of the item with the given name, or nullptr if there is none.
Item* find_item(std::vector<Item>& items, const std::string& name)
{
    for (Item& item : items) {
        if (item.name == name)
            return &item;
    }
    return nullptr;
}

int main()
{
    std::vector<Item> items { {"bolts", 120}, {"nuts", 80}, {"washers", 200} };
    std::vector<std::string> wanted { "nuts", "screws", "bolts" };

    for (const std::string& name : wanted) {
        Item* item = find_item(items, name);
        if (item == nullptr) {
            std::cout << name << ": not found\n";
            continue;
        }
        std::cout << name << ": " << item->quantity << '\n';
    }
    return 0;
}
