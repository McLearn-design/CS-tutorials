#pragma once

#include <cstddef>

// A resizable array of ints that owns its memory — a small std::vector<int>.
class IntArray {
public:
    IntArray();                            // empty
    explicit IntArray(std::size_t size);   // `size` elements, all zero
    ~IntArray();

    std::size_t size() const;
    std::size_t capacity() const;
    int& operator[](std::size_t index);
    const int& operator[](std::size_t index) const;

    void push_back(int value);

private:
    int* data_;
    std::size_t size_;
    std::size_t capacity_;
};
