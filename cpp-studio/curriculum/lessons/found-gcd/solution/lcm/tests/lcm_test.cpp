#include "studio_test.hpp"

#include "calc.h"

TEST(lcm_of_small_numbers)
{
    CHECK_EQ(lcm(4, 6), 12);
}

TEST(lcm_with_zero_is_zero)
{
    CHECK_EQ(lcm(0, 9), 0);
}

TEST(lcm_of_negative_numbers_is_positive)
{
    CHECK_EQ(lcm(-3, 5), 15);
}
