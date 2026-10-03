#include "studio_test.hpp"

#include "text.h"

TEST(palindrome_word)
{
    CHECK(is_palindrome("racecar"));
}

TEST(not_a_palindrome)
{
    CHECK(!is_palindrome("rocket"));
}

TEST(palindrome_with_mixed_case)
{
    CHECK(is_palindrome("Noon"));
}
