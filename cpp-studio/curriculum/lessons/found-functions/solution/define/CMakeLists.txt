cmake_minimum_required(VERSION 3.20)
project(calculator LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(calculator main.cpp calc.cpp)

if(MSVC)
    target_compile_options(calculator PRIVATE /W4)
else()
    target_compile_options(calculator PRIVATE -Wall -Wextra -Wpedantic)
endif()
