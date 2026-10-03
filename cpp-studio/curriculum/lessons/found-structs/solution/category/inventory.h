#pragma once

#include <optional>
#include <string>
#include <vector>

enum class Category { Tool, Part, Consumable };

struct Item {
    std::string name;
    int quantity = 0;
    double price = 0.0;
    Category category = Category::Part;
};

double total_value(const std::vector<Item>& items);

// Adds `amount` to the item's quantity.
void restock(Item& item, int amount);

// Position of the item called `name`, or std::nullopt if there is none.
std::optional<std::size_t> find_index(const std::vector<Item>& items, const std::string& name);

// Total quantity of all items in `category`.
int count_in(const std::vector<Item>& items, Category category);

std::string to_string(Category category);
