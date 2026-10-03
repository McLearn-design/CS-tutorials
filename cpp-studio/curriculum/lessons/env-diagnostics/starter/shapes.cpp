#include <iomanip>
#include <iostream>

#include "area.h"

int main()
{
    double radius = 5.0;
    std::cout << std::fixed << std::setprecision(2);
    std::cout << "Area of a circle with radius " << std::setprecision(0) << radius << ": "
              << std::setprecision(2) << circle_area(radius) << '\n';
    return 0;
}
