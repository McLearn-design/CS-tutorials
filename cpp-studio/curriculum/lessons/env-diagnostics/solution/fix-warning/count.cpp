#include <iostream>
#include <vector>

int main()
{
    std::vector<int> scores { 90, 72, 85 };
    int total = 0;
    for (int score : scores)
        total += score;
    std::cout << "Total: " << total << '\n';
    return 0;
}
