#include <iostream>
#include <stdexcept>

#include "calc.h"

int main()
{
    double a = 0;
    double b = 0;
    char op = ' ';
    if (!(std::cin >> a >> op >> b)) {
        std::cout << "Error: expected an expression like 3 * 4\n";
        return 1;
    }

    try {
        double result = 0;
        switch (op) {
        case '+': result = add(a, b); break;
        case '-': result = subtract(a, b); break;
        case '*': result = multiply(a, b); break;
        case '/': result = divide(a, b); break;
        default:
            std::cout << "Unknown operator: " << op << '\n';
            return 0;
        }
        std::cout << a << ' ' << op << ' ' << b << " = " << result << '\n';
    } catch (const std::invalid_argument& e) {
        std::cout << "Error: " << e.what() << '\n';
    }
    return 0;
}
