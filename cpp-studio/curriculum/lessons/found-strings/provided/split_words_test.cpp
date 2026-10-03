// Provided by the lesson.
#include "studio_test.hpp"

#include "text.h"

TEST(split_words_on_spaces_and_punctuation)
{
    const std::vector<std::string> words = split_words("Hello, world!");
    CHECK_EQ(words.size(), 2u);
    CHECK_EQ(words[0], std::string("Hello"));
    CHECK_EQ(words[1], std::string("world"));
}

TEST(split_words_ignores_repeated_separators)
{
    const std::vector<std::string> words = split_words("  one   two\tthree\n");
    CHECK_EQ(words.size(), 3u);
    CHECK_EQ(words[2], std::string("three"));
}

TEST(split_words_of_empty_text_is_empty)
{
    CHECK(split_words("").empty());
    CHECK(split_words(" ,.; ").empty());
}

TEST(split_words_keeps_digits)
{
    const std::vector<std::string> words = split_words("C++20 has 3 new things");
    CHECK_EQ(words.size(), 6u);
    CHECK_EQ(words[1], std::string("20"));
}
