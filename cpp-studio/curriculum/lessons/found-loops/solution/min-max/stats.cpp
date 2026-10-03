#include <iostream>

int main()
{
    int count = 0;
    double sum = 0;
    double min = 0;
    double max = 0;
    double value = 0;
    while (std::cin >> value) {
        if (count == 0 || value < min)
            min = value;
        if (count == 0 || value > max)
            max = value;
        ++count;
        sum += value;
    }

    if (count == 0) {
        std::cout << "no numbers\n";
        return 0;
    }
    std::cout << "count: " << count << '\n';
    std::cout << "sum: " << sum << '\n';
    std::cout << "min: " << min << '\n';
    std::cout << "max: " << max << '\n';
    std::cout << "average: " << sum / count << '\n';
    return 0;
}
