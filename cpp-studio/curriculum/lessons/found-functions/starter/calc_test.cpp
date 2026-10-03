#include "studio_test.hpp"

#include "calc.h"

TEST(add_two_positive_numbers)
{
    CHECK_EQ(add(2, 3), 5);
}
