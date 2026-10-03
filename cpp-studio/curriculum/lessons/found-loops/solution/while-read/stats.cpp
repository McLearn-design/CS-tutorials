#include <iostream>

int main()
{
    int count = 0;
    double sum = 0;
    double value = 0;
    while (std::cin >> value) {
        ++count;
        sum += value;
    }
    std::cout << "count: " << count << '\n';
    std::cout << "sum: " << sum << '\n';
    return 0;
}
