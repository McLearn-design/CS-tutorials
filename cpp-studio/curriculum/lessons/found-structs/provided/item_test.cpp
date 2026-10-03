// Provided by the lesson.
#include "studio_test.hpp"

#include "inventory.h"

TEST(item_holds_its_fields)
{
    Item bolts {"bolts", 120, 0.25};
    CHECK_EQ(bolts.name, std::string("bolts"));
    CHECK_EQ(bolts.quantity, 120);
    CHECK_NEAR(bolts.price, 0.25, 1e-12);
}

TEST(item_fields_default_to_zero)
{
    Item nothing;
    CHECK_EQ(nothing.quantity, 0);
    CHECK_NEAR(nothing.price, 0.0, 1e-12);
    CHECK(nothing.name.empty());
}

TEST(total_value_adds_quantity_times_price)
{
    const std::vector<Item> items {{"bolts", 120, 0.25}, {"nuts", 80, 0.10}};
    CHECK_NEAR(total_value(items), 38.0, 1e-9);
}

TEST(total_value_of_empty_inventory_is_zero)
{
    CHECK_NEAR(total_value({}), 0.0, 1e-12);
}
