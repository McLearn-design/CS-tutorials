// Hidden acceptance tests for is_palindrome.
#include "studio_test.hpp"

#include "text.h"

TEST(acceptance_simple_palindromes)
{
    CHECK(is_palindrome("level"));
    CHECK(is_palindrome("abba"));
    CHECK(!is_palindrome("abc"));
}

TEST(acceptance_ignores_case_and_punctuation)
{
    CHECK(is_palindrome("A man, a plan, a canal: Panama!"));
    CHECK(is_palindrome("Was it a car or a cat I saw?"));
    CHECK(!is_palindrome("Hello, world"));
}

TEST(acceptance_edge_cases)
{
    CHECK(is_palindrome(""));
    CHECK(is_palindrome("x"));
    CHECK(is_palindrome("!!"));
    CHECK(!is_palindrome("ab"));
    CHECK(is_palindrome("12321"));
}
