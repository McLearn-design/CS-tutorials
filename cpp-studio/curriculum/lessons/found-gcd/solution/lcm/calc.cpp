#include "calc.h"

#include <stdexcept>

double add(double a, double b)
{
    return a + b;
}

double subtract(double a, double b)
{
    return a - b;
}

double multiply(double a, double b)
{
    return a * b;
}

double divide(double a, double b)
{
    if (b == 0)
        throw std::invalid_argument("division by zero");
    return a / b;
}

long long gcd(long long a, long long b)
{
    // Euclid's algorithm: gcd(a, b) == gcd(b, a % b), and gcd(a, 0) == a.
    a = a < 0 ? -a : a;
    b = b < 0 ? -b : b;
    while (b != 0) {
        long long remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

long long lcm(long long a, long long b)
{
    if (a == 0 || b == 0)
        return 0;
    a = a < 0 ? -a : a;
    b = b < 0 ? -b : b;
    // Divide before multiplying so the intermediate value never exceeds the result.
    return a / gcd(a, b) * b;
}
