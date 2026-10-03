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
