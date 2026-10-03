#include <iostream>

int main()
{
    double a = 0;
    double b = 0;
    std::cout << "Enter two numbers: ";
    std::cin >> a >> b;
    std::cout << a << " + " << b << " = " << a + b << '\n';
    std::cout << a << " - " << b << " = " << a - b << '\n';
    std::cout << a << " * " << b << " = " << a * b << '\n';
    std::cout << a << " / " << b << " = " << a / b << '\n';
    return 0;
}
