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

double median(std::vector<int> scores)
{
    if (scores.empty())
        throw std::invalid_argument("median of no scores");
    std::sort(scores.begin(), scores.end());
    const std::size_t mid = scores.size() / 2;
    if (scores.size() % 2 == 1)
        return scores[mid];
    return (scores[mid - 1] + scores[mid]) / 2.0;
}
