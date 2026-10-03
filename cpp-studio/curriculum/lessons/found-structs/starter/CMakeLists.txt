cmake_minimum_required(VERSION 3.20)
project(inventory LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(inventory main.cpp inventory.cpp)

# Every file in tests/ ending in _test.cpp becomes part of the test program.
# CONFIGURE_DEPENDS makes CMake re-check the folder on each build, so new test files are picked up.
file(GLOB TEST_SOURCES CONFIGURE_DEPENDS tests/*_test.cpp)
add_executable(inventory_tests tests/test_main.cpp ${TEST_SOURCES} inventory.cpp)
target_include_directories(inventory_tests PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})

enable_testing()
add_test(NAME inventory_tests COMMAND inventory_tests)

foreach(target inventory inventory_tests)
    if(MSVC)
        target_compile_options(${target} PRIVATE /W4)
    else()
        target_compile_options(${target} PRIVATE -Wall -Wextra -Wpedantic)
    endif()
endforeach()
