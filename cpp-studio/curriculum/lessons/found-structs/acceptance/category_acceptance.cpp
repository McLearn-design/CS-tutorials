// Hidden acceptance tests for Category, count_in and to_string.
#include "studio_test.hpp"

#include "inventory.h"

TEST(acceptance_item_category_defaults_to_part)
{
    Item i {"bolts", 1, 0.5};
    CHECK(i.category == Category::Part);
}

TEST(acceptance_count_in_counts_units_per_category)
{
    std::vector<Item> items {{"bolts", 120, 0.25}, {"nuts", 80, 0.10}, {"wrench", 2, 12.0}, {"oil", 5, 3.0}};
    items[2].category = Category::Tool;
    items[3].category = Category::Consumable;
    CHECK_EQ(count_in(items, Category::Part), 200);
    CHECK_EQ(count_in(items, Category::Tool), 2);
    CHECK_EQ(count_in(items, Category::Consumable), 5);
    CHECK_EQ(count_in({}, Category::Tool), 0);
}

TEST(acceptance_category_names)
{
    CHECK_EQ(to_string(Category::Tool), std::string("tool"));
    CHECK_EQ(to_string(Category::Part), std::string("part"));
    CHECK_EQ(to_string(Category::Consumable), std::string("consumable"));
}
