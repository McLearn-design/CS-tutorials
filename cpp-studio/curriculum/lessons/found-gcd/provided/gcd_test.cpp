// Provided by the lesson. Do not edit these tests — make them pass.
#include "studio_test.hpp"

#include "calc.h"

TEST(gcd_of_two_positive_numbers)
{
    CHECK_EQ(gcd(12, 18), 6);
    CHECK_EQ(gcd(18, 12), 6);
}

TEST(gcd_of_coprime_numbers_is_one)
{
    CHECK_EQ(gcd(17, 5), 1);
}

TEST(gcd_with_zero)
{
    CHECK_EQ(gcd(0, 7), 7);
    CHECK_EQ(gcd(7, 0), 7);
    CHECK_EQ(gcd(0, 0), 0);
}

TEST(gcd_is_never_negative)
{
    CHECK_EQ(gcd(-12, 18), 6);
    CHECK_EQ(gcd(12, -18), 6);
    CHECK_EQ(gcd(-12, -18), 6);
}

TEST(gcd_is_fast_for_large_numbers)
{
    // A loop that subtracts or counts down one at a time would take years here.
    CHECK_EQ(gcd(1, 1'000'000'000'000'000'000LL), 1);
    CHECK_EQ(gcd(2'000'000'014LL, 3'000'000'021LL), 1'000'000'007LL);
}
