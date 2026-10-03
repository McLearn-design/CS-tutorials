// Hidden acceptance tests for letter_grades and count_at_least.
#include "studio_test.hpp"

#include "grades.h"

#include <vector>

TEST(acceptance_letter_grade_boundaries)
{
    const std::vector<char> g = letter_grades({100, 90, 89, 80, 79, 70, 69, 60, 59, 0});
    const std::vector<char> want {'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'F', 'F'};
    CHECK_EQ(g.size(), want.size());
    for (std::size_t i = 0; i < want.size(); ++i)
        CHECK_EQ(g[i], want[i]);
}

TEST(acceptance_letter_grades_of_nothing)
{
    CHECK(letter_grades({}).empty());
}

TEST(acceptance_count_at_least)
{
    CHECK_EQ(count_at_least({90, 72, 85, 55}, 80), 2);
    CHECK_EQ(count_at_least({90, 72, 85, 55}, 0), 4);
    CHECK_EQ(count_at_least({90, 72, 85, 55}, 91), 0);
    CHECK_EQ(count_at_least({}, 50), 0);
    CHECK_EQ(count_at_least({50, 50}, 50), 2);
}
