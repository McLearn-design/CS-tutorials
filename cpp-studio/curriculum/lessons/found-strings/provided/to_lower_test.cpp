// Provided by the lesson.
#include "studio_test.hpp"

#include "text.h"

TEST(to_lower_changes_capitals)
{
    CHECK_EQ(to_lower("Hello World"), std::string("hello world"));
}

TEST(to_lower_leaves_other_characters_alone)
{
    CHECK_EQ(to_lower("C++ 20!"), std::string("c++ 20!"));
}

TEST(to_lower_of_empty_string_is_empty)
{
    CHECK_EQ(to_lower(""), std::string(""));
}

TEST(to_lower_does_not_modify_its_argument)
{
    const std::string original = "ABC";
    to_lower(original);
    CHECK_EQ(original, std::string("ABC"));
}
