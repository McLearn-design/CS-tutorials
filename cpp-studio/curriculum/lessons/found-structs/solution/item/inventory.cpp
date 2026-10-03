#include "inventory.h"

double total_value(const std::vector<Item>& items)
{
    double total = 0;
    for (const Item& item : items)
        total += item.quantity * item.price;
    return total;
}
