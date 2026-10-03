#include "inventory.h"

double total_value(const std::vector<Item>& items)
{
    double total = 0;
    for (const Item& item : items)
        total += item.quantity * item.price;
    return total;
}

void restock(Item& item, int amount)
{
    item.quantity += amount;
}

std::optional<std::size_t> find_index(const std::vector<Item>& items, const std::string& name)
{
    for (std::size_t i = 0; i < items.size(); ++i) {
        if (items[i].name == name)
            return i;
    }
    return std::nullopt;
}
