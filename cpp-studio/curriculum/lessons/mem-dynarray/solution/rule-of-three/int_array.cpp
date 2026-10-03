#include "int_array.h"

IntArray::IntArray() : data_(nullptr), size_(0), capacity_(0)
{
}

IntArray::IntArray(std::size_t size) : data_(new int[size]()), size_(size), capacity_(size)
{
}

IntArray::IntArray(const IntArray& other)
    : data_(other.capacity_ ? new int[other.capacity_] : nullptr), size_(other.size_), capacity_(other.capacity_)
{
    for (std::size_t i = 0; i < size_; ++i)
        data_[i] = other.data_[i];
}

IntArray& IntArray::operator=(const IntArray& other)
{
    if (this == &other)
        return *this;
    IntArray copy(other);            // copy first: if that throws, *this is untouched
    delete[] data_;
    data_ = copy.data_;
    size_ = copy.size_;
    capacity_ = copy.capacity_;
    copy.data_ = nullptr;            // copy no longer owns the buffer
    return *this;
}

IntArray::~IntArray()
{
    delete[] data_;
}

std::size_t IntArray::size() const
{
    return size_;
}

std::size_t IntArray::capacity() const
{
    return capacity_;
}

int& IntArray::operator[](std::size_t index)
{
    return data_[index];
}

const int& IntArray::operator[](std::size_t index) const
{
    return data_[index];
}

void IntArray::push_back(int value)
{
    if (size_ == capacity_) {
        const std::size_t new_capacity = capacity_ == 0 ? 4 : capacity_ * 2;
        int* bigger = new int[new_capacity];
        for (std::size_t i = 0; i < size_; ++i)
            bigger[i] = data_[i];
        delete[] data_;
        data_ = bigger;
        capacity_ = new_capacity;
    }
    data_[size_] = value;
    ++size_;
}
