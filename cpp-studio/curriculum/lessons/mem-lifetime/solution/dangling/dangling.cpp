#include <iostream>
#include <string>

// Builds a greeting and returns it by value: the caller owns the result.
std::string make_greeting(const std::string& name)
{
    return "Hello, " + name + "!";
}

void print(const std::string& text)
{
    std::cout << text << '\n';
}

int main()
{
    std::string greeting = make_greeting("Ada");
    print(greeting);
    std::cout << "Length: " << greeting.size() << '\n';
    return 0;
}
