// Provided by the lesson. Do not change this test — fix restock instead.
#include "studio_test.hpp"

#include "inventory.h"

TEST(restock_increases_the_quantity)
{
    Item nuts {"nuts", 80, 0.10};
    restock(nuts, 20);
    CHECK_EQ(nuts.quantity, 100);
}
