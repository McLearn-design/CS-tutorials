#include <iostream>

#include "inventory.h"

int main()
{
    std::vector<Item> items {
        {"bolts", 120, 0.25, Category::Part},
        {"wrench", 2, 12.0, Category::Tool},
        {"oil", 5, 3.0, Category::Consumable},
    };
    for (const Item& item : items)
        std::cout << item.name << " (" << to_string(item.category) << "): " << item.quantity << '\n';
    std::cout << "total value: " << total_value(items) << '\n';
    return 0;
}
