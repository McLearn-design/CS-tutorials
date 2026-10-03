#include <iostream>

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

    double result = 0;
    switch (op) {
    case '+': result = add(a, b); break;
    case '-': result = subtract(a, b); break;
    case '*': result = multiply(a, b); break;
    case '/':
        if (b == 0) {
            std::cout << "Error: division by zero\n";
            return 0;
        }
        result = divide(a, b);
        break;
    default:
        std::cout << "Unknown operator: " << op << '\n';
        return 0;
    }
    std::cout << a << ' ' << op << ' ' << b << " = " << result << '\n';
    return 0;
}
