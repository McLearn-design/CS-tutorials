#include "studio_test.hpp"

#include "int_array.h"

#include <stdexcept>

TEST(at_returns_element)
{
    IntArray a(1);
    a.at(0) = 3;
    CHECK_EQ(a.at(0), 3);
}

TEST(at_past_the_end_throws)
{
    IntArray a(1);
    CHECK_THROWS(a.at(1), std::out_of_range);
}

TEST(pop_back_shrinks)
{
    IntArray a(2);
    a.pop_back();
    CHECK_EQ(a.size(), 1u);
}
