#include <iostream>
#include <string>

std::string greeting(std::string name)
{
    return "Hello, " + name + "!";
}

int main()
{
    std::string who = "Ada";
    std::cout << greeting(who) << '\n';
    return 0;
}
