# Building with CMake

Typing `g++ hello.cpp -o hello` is fine for one file. Real projects have hundreds of files, libraries,
tests, different compilers on different operating systems, debug and release builds… Nobody types those
commands by hand. A **build system** does.

**CMake** is the de-facto standard build system generator for C++. You describe *what* to build in
`CMakeLists.txt`; CMake generates the actual build commands for whatever tools your machine has
(Make, Ninja, Visual Studio, Xcode).

This lesson continues your **hello** project from the first lesson. (If you skipped it, a working
`hello.cpp` has been placed there for you.)
