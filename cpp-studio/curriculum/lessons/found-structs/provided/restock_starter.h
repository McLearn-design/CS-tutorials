#pragma once

#include <string>
#include <vector>

struct Item {
    std::string name;
    int quantity = 0;
    double price = 0.0;
};

double total_value(const std::vector<Item>& items);

// Adds `amount` to the item's quantity.
void restock(Item item, int amount);
