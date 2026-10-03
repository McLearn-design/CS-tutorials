#pragma once

#include <string>
#include <vector>

// Returns a copy of text with every letter in lower case.
std::string to_lower(const std::string& text);

// Splits text into words. A word is a run of letters and digits; everything else separates words.
std::vector<std::string> split_words(const std::string& text);

// True if text reads the same backwards, ignoring case and anything that isn't a letter or digit.
bool is_palindrome(const std::string& text);
