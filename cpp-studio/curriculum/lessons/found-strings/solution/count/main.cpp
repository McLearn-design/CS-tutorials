#include <iostream>
#include <string>

#include "text.h"

int main()
{
    std::size_t lines = 0;
    std::size_t words = 0;
    std::size_t characters = 0;
    std::string line;
    while (std::getline(std::cin, line)) {
        ++lines;
        characters += line.size();
        words += split_words(line).size();
    }
    std::cout << "lines: " << lines << '\n';
    std::cout << "words: " << words << '\n';
    std::cout << "characters: " << characters << '\n';
    return 0;
}
