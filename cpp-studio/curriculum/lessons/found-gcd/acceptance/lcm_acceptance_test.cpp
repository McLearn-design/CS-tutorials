// Hidden acceptance tests for lcm, run by C++ Studio (like a CI server would).
#include "studio_test.hpp"

#include "calc.h"

TEST(acceptance_lcm_basic)
{
    CHECK_EQ(lcm(4, 6), 12);
    CHECK_EQ(lcm(6, 4), 12);
    CHECK_EQ(lcm(7, 5), 35);
    CHECK_EQ(lcm(12, 12), 12);
}

TEST(acceptance_lcm_with_zero)
{
    CHECK_EQ(lcm(0, 5), 0);
    CHECK_EQ(lcm(5, 0), 0);
    CHECK_EQ(lcm(0, 0), 0);
}

TEST(acceptance_lcm_is_never_negative)
{
    CHECK_EQ(lcm(-4, 6), 12);
    CHECK_EQ(lcm(4, -6), 12);
}

TEST(acceptance_lcm_avoids_needless_overflow)
{
    // a * b would overflow long long here, but the answer fits comfortably.
    const long long big = 3'000'000'000'000'000'000LL;
    CHECK_EQ(lcm(big, big), big);
    CHECK_EQ(lcm(big, 2), big);
}
