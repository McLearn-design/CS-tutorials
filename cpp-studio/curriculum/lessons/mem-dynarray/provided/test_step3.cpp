// Provided by the lesson — this file is replaced with more tests at each step.
#include "studio_test.hpp"

#include "int_array.h"

TEST(new_array_has_requested_size)
{
    IntArray a(5);
    CHECK_EQ(a.size(), 5u);
}

TEST(new_array_is_zero_filled)
{
    IntArray a(4);
    for (std::size_t i = 0; i < a.size(); ++i)
        CHECK_EQ(a[i], 0);
}

TEST(elements_can_be_written_and_read)
{
    IntArray a(3);
    a[0] = 10;
    a[2] = 30;
    CHECK_EQ(a[0], 10);
    CHECK_EQ(a[1], 0);
    CHECK_EQ(a[2], 30);
}

TEST(const_array_can_be_read)
{
    IntArray a(2);
    a[1] = 7;
    const IntArray& view = a;
    CHECK_EQ(view[1], 7);
}

TEST(many_arrays_come_and_go)
{
    // With AddressSanitizer on Linux, a destructor that forgets delete[] is reported as a leak.
    for (int i = 0; i < 100; ++i) {
        IntArray a(1000);
        a[999] = i;
    }
}

TEST(default_array_is_empty)
{
    IntArray a;
    CHECK_EQ(a.size(), 0u);
}

TEST(push_back_appends)
{
    IntArray a;
    a.push_back(4);
    a.push_back(8);
    CHECK_EQ(a.size(), 2u);
    CHECK_EQ(a[0], 4);
    CHECK_EQ(a[1], 8);
}

TEST(push_back_grows_past_the_initial_size)
{
    IntArray a(2);
    a[0] = 1;
    a[1] = 2;
    a.push_back(3);
    CHECK_EQ(a.size(), 3u);
    CHECK_EQ(a[0], 1);
    CHECK_EQ(a[2], 3);
}

TEST(many_push_backs_keep_every_value)
{
    IntArray a;
    for (int i = 0; i < 10000; ++i)
        a.push_back(i * 3);
    CHECK_EQ(a.size(), 10000u);
    for (std::size_t i = 0; i < a.size(); ++i)
        CHECK_EQ(a[i], static_cast<int>(i) * 3);
}

TEST(capacity_grows_geometrically)
{
    // Growing one element at a time would copy the whole array on every push_back.
    IntArray a;
    int reallocations = 0;
    std::size_t last = a.capacity();
    for (int i = 0; i < 100000; ++i) {
        a.push_back(i);
        if (a.capacity() != last) {
            ++reallocations;
            last = a.capacity();
        }
    }
    CHECK(a.capacity() >= a.size());
    CHECK(reallocations < 40);
}

TEST(copies_are_independent)
{
    IntArray a(3);
    a[0] = 1;
    IntArray b = a;          // copy construction
    b[0] = 99;
    CHECK_EQ(a[0], 1);
    CHECK_EQ(b[0], 99);
    CHECK_EQ(b.size(), 3u);
}

TEST(assignment_copies_and_is_independent)
{
    IntArray a(2);
    a[1] = 5;
    IntArray b(10);
    b = a;                   // copy assignment
    CHECK_EQ(b.size(), 2u);
    CHECK_EQ(b[1], 5);
    b[1] = 6;
    CHECK_EQ(a[1], 5);
}

TEST(self_assignment_is_harmless)
{
    IntArray a(2);
    a[0] = 42;
    IntArray& same = a;
    a = same;
    CHECK_EQ(a[0], 42);
    CHECK_EQ(a.size(), 2u);
}
