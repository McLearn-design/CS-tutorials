#include <iostream>
#include <vector>

#include "grades.h"

int main()
{
    std::vector<int> scores;
    int score = 0;
    while (std::cin >> score)
        scores.push_back(score);

    std::cout << "count: " << scores.size() << '\n';
    std::cout << "scores:";
    for (int s : scores)
        std::cout << ' ' << s;
    std::cout << '\n';
    return 0;
}
