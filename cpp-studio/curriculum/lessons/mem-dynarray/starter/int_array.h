#pragma once

#include <cstddef>

// A resizable array of ints that owns its memory — a small std::vector<int>.
class IntArray {
public:
    explicit IntArray(std::size_t size);   // `size` elements, all zero
    ~IntArray();

    std::size_t size() const;
    int& operator[](std::size_t index);
    const int& operator[](std::size_t index) const;

private:
    int* data_;
    std::size_t size_;
};
