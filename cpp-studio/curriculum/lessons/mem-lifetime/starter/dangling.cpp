#include <iostream>
#include <string>

// Builds a greeting on the heap and hands back its address.
std::string* make_greeting(const std::string& name)
{
    std::string* greeting = new std::string("Hello, " + name + "!");
    return greeting;
}

// Prints the text, then tidies up after itself.
void print_and_cleanup(std::string* text)
{
    std::cout << *text << '\n';
    delete text;
}

int main()
{
    std::string* greeting = make_greeting("Ada");
    print_and_cleanup(greeting);
    std::cout << "Length: " << greeting->size() << '\n';
    return 0;
}
