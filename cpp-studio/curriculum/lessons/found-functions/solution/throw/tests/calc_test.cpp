#include "studio_test.hpp"

#include "calc.h"

#include <stdexcept>

TEST(add_two_positive_numbers)
{
    CHECK_EQ(add(2, 3), 5);
}

TEST(subtract_can_go_negative)
{
    CHECK_EQ(subtract(3, 4), -1);
}

TEST(multiply_by_zero_is_zero)
{
    CHECK_EQ(multiply(12345, 0), 0);
    CHECK_EQ(multiply(3, 4), 12);
}

TEST(divide_gives_fractions)
{
    CHECK_NEAR(divide(3, 4), 0.75, 1e-12);
    CHECK_NEAR(divide(1, 3), 0.333333333333, 1e-9);
}

TEST(divide_by_zero_throws)
{
    CHECK_THROWS(divide(1, 0), std::invalid_argument);
}
