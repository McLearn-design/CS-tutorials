// Provided by the lesson.
#include "studio_test.hpp"

#include "inventory.h"

#include <optional>

TEST(find_index_finds_an_item_by_name)
{
    const std::vector<Item> items {{"bolts", 120, 0.25}, {"nuts", 80, 0.10}};
    const std::optional<std::size_t> i = find_index(items, "nuts");
    CHECK(i.has_value());
    CHECK_EQ(*i, 1u);
}

TEST(find_index_reports_missing_items)
{
    const std::vector<Item> items {{"bolts", 120, 0.25}};
    CHECK(!find_index(items, "screws").has_value());
    CHECK(!find_index({}, "bolts").has_value());
}
