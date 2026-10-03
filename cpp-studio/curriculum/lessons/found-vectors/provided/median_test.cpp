// Provided by the lesson.
#include "studio_test.hpp"

#include "grades.h"

#include <stdexcept>
#include <vector>

TEST(median_of_odd_count_is_middle_value)
{
    CHECK_NEAR(median({90, 55, 72}), 72.0, 1e-9);
}

TEST(median_of_even_count_averages_the_middle_two)
{
    CHECK_NEAR(median({90, 72, 85, 55}), 78.5, 1e-9);
}

TEST(median_does_not_reorder_the_callers_scores)
{
    const std::vector<int> scores {3, 1, 2};
    median(scores);
    CHECK_EQ(scores[0], 3);
    CHECK_EQ(scores[1], 1);
}

TEST(median_of_nothing_throws)
{
    CHECK_THROWS(median({}), std::invalid_argument);
}
