#pragma once

#include <vector>

// Mean of the scores. Throws std::invalid_argument if there are none.
double average(const std::vector<int>& scores);

// Middle value of the scores (mean of the two middle values for an even count).
// Throws std::invalid_argument if there are none.
double median(std::vector<int> scores);

// Letter grade for each score: 90+ A, 80+ B, 70+ C, 60+ D, otherwise F.
std::vector<char> letter_grades(const std::vector<int>& scores);

// How many scores are at least `threshold`.
int count_at_least(const std::vector<int>& scores, int threshold);
