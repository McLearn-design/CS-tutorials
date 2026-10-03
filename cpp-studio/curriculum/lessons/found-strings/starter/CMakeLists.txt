cmake_minimum_required(VERSION 3.20)
project(words LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(words main.cpp text.cpp)

# Every file in tests/ ending in _test.cpp becomes part of the test program.
# CONFIGURE_DEPENDS makes CMake re-check the folder on each build, so new test files are picked up.
file(GLOB TEST_SOURCES CONFIGURE_DEPENDS tests/*_test.cpp)
add_executable(text_tests tests/test_main.cpp ${TEST_SOURCES} text.cpp)
target_include_directories(text_tests PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})

enable_testing()
add_test(NAME text_tests COMMAND text_tests)

foreach(target words text_tests)
    if(MSVC)
        target_compile_options(${target} PRIVATE /W4)
    else()
        target_compile_options(${target} PRIVATE -Wall -Wextra -Wpedantic)
    endif()
endforeach()
