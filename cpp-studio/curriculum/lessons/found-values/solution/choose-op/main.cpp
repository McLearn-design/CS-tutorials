#include <iostream>

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
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/':
        if (b == 0) {
            std::cout << "Error: division by zero\n";
            return 0;
        }
        result = a / b;
        break;
    default:
        std::cout << "Unknown operator: " << op << '\n';
        return 0;
    }
    std::cout << a << ' ' << op << ' ' << b << " = " << result << '\n';
    return 0;
}
