#include "text.h"

#include <cctype>

std::string to_lower(const std::string& text)
{
    std::string result = text;
    for (char& c : result)
        c = static_cast<char>(std::tolower(static_cast<unsigned char>(c)));
    return result;
}

std::vector<std::string> split_words(const std::string& text)
{
    std::vector<std::string> words;
    std::string current;
    for (char c : text) {
        if (std::isalnum(static_cast<unsigned char>(c))) {
            current += c;
        } else if (!current.empty()) {
            words.push_back(current);
            current.clear();
        }
    }
    if (!current.empty())
        words.push_back(current);
    return words;
}

bool is_palindrome(const std::string& text)
{
    std::string letters;
    for (char c : text) {
        if (std::isalnum(static_cast<unsigned char>(c)))
            letters += static_cast<char>(std::tolower(static_cast<unsigned char>(c)));
    }
    std::size_t i = 0;
    std::size_t j = letters.size();
    while (i + 1 < j) {
        if (letters[i] != letters[j - 1])
            return false;
        ++i;
        --j;
    }
    return true;
}
