// Hidden acceptance tests for at() and pop_back().
#include "studio_test.hpp"

#include "int_array.h"

#include <stdexcept>

TEST(acceptance_at_reads_and_writes_valid_indices)
{
    IntArray a(3);
    a.at(0) = 5;
    a.at(2) = 7;
    CHECK_EQ(a.at(0), 5);
    CHECK_EQ(a[2], 7);
    const IntArray& c = a;
    CHECK_EQ(c.at(2), 7);
}

TEST(acceptance_at_rejects_out_of_range_indices)
{
    IntArray a(3);
    CHECK_THROWS(a.at(3), std::out_of_range);
    CHECK_THROWS(a.at(1000), std::out_of_range);
    IntArray empty;
    CHECK_THROWS(empty.at(0), std::out_of_range);
    const IntArray& c = a;
    CHECK_THROWS(c.at(3), std::out_of_range);
}

TEST(acceptance_pop_back_removes_the_last_element)
{
    IntArray a;
    a.push_back(1);
    a.push_back(2);
    a.pop_back();
    CHECK_EQ(a.size(), 1u);
    CHECK_EQ(a[0], 1);
    a.push_back(3);
    CHECK_EQ(a[1], 3);
}

TEST(acceptance_pop_back_on_empty_throws)
{
    IntArray a;
    CHECK_THROWS(a.pop_back(), std::out_of_range);
    a.push_back(1);
    a.pop_back();
    CHECK_THROWS(a.pop_back(), std::out_of_range);
}
