// Provided by the lesson.
#include "studio_test.hpp"

#include "grades.h"

#include <stdexcept>

TEST(average_of_several_scores)
{
    CHECK_NEAR(average({90, 72, 85, 55}), 75.5, 1e-9);
}

TEST(average_of_one_score_is_that_score)
{
    CHECK_NEAR(average({42}), 42.0, 1e-9);
}

TEST(average_is_not_integer_division)
{
    CHECK_NEAR(average({1, 2}), 1.5, 1e-9);
}

TEST(average_of_nothing_throws)
{
    CHECK_THROWS(average({}), std::invalid_argument);
}
