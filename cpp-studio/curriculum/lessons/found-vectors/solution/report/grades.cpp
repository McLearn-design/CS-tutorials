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

std::vector<char> letter_grades(const std::vector<int>& scores)
{
    std::vector<char> grades;
    grades.reserve(scores.size());
    for (int s : scores) {
        if (s >= 90)
            grades.push_back('A');
        else if (s >= 80)
            grades.push_back('B');
        else if (s >= 70)
            grades.push_back('C');
        else if (s >= 60)
            grades.push_back('D');
        else
            grades.push_back('F');
    }
    return grades;
}

int count_at_least(const std::vector<int>& scores, int threshold)
{
    return static_cast<int>(std::count_if(scores.begin(), scores.end(), [threshold](int s) { return s >= threshold; }));
}
