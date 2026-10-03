#include <iostream>
#include <vector>

#include "grades.h"

int main()
{
    std::vector<int> scores;
    int score = 0;
    while (std::cin >> score)
        scores.push_back(score);

    if (scores.empty()) {
        std::cout << "no scores\n";
        return 0;
    }

    std::cout << "count: " << scores.size() << '\n';
    std::cout << "average: " << average(scores) << '\n';
    std::cout << "median: " << median(scores) << '\n';
    std::cout << "grades:";
    for (char g : letter_grades(scores))
        std::cout << ' ' << g;
    std::cout << '\n';
    std::cout << "passed: " << count_at_least(scores, 60) << '\n';
    return 0;
}
