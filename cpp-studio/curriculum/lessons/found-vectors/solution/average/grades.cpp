#include "grades.h"

#include <algorithm>
#include <numeric>
#include <stdexcept>

double average(const std::vector<int>& scores)
{
    if (scores.empty())
        throw std::invalid_argument("average of no scores");
    const double total = std::accumulate(scores.begin(), scores.end(), 0.0);
    return total / static_cast<double>(scores.size());
}
