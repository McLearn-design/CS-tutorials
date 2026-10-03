#include <iostream>

int main()
{
    int n = 0;
    if (!(std::cin >> n) || n <= 0) {
        std::cout << "n must be a positive whole number\n";
        return 1;
    }
    for (int row = 1; row <= n; ++row) {
        for (int col = 1; col <= n; ++col) {
            if (col > 1)
                std::cout << ' ';
            std::cout << row * col;
        }
        std::cout << '\n';
    }
    return 0;
}
