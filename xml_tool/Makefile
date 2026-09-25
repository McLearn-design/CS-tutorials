# Makefile for XML Tool
# =====================
# This file tells 'make' how to build the project.

# Compiler settings
CXX = g++

# Include paths (Homebrew on Apple Silicon and Intel)
INCLUDES = -I include -I . \
           -I /opt/homebrew/include \
           -I /usr/local/include

# Library paths
LIB_PATHS = -L /opt/homebrew/lib \
            -L /usr/local/lib

CXXFLAGS = -std=c++17 -Wall -Wextra $(INCLUDES)

# Libraries to link
LIBS = $(LIB_PATHS) -ltinyxml2

# Directories
SRC_DIR = src
TEST_DIR = tests
BUILD_DIR = build

# Source files
SOURCES = $(SRC_DIR)/xml_tool.cpp
MAIN = $(SRC_DIR)/main.cpp
TEST_SOURCES = $(TEST_DIR)/test_xml_tool.cpp

# Targets
APP = xml_tool
TESTS = run_tests

# ============================================================
# BUILD THE APPLICATION
# ============================================================
# Usage: make
# ============================================================

$(APP): $(SOURCES) $(MAIN)
	$(CXX) $(CXXFLAGS) $(SOURCES) $(MAIN) $(LIBS) -o $(APP)
	@echo "✅ Built $(APP)"
	@echo "Run with: ./$(APP) data/sample.xml"

# ============================================================
# BUILD AND RUN TESTS
# ============================================================
# Usage: make test
# ============================================================

test: $(SOURCES) $(TEST_SOURCES)
	$(CXX) $(CXXFLAGS) $(SOURCES) $(TEST_SOURCES) $(LIBS) $(LIB_PATHS) -lgtest -lgtest_main -pthread -o $(TESTS)
	@echo "✅ Built tests"
	@echo "Running tests..."
	@echo ""
	./$(TESTS)

# ============================================================
# CLEAN UP
# ============================================================
# Usage: make clean
# ============================================================

clean:
	rm -f $(APP) $(TESTS) output.json
	@echo "✅ Cleaned up"

# ============================================================
# HELP
# ============================================================

help:
	@echo "Available commands:"
	@echo "  make        - Build the application"
	@echo "  make test   - Build and run tests"
	@echo "  make clean  - Remove built files"
	@echo "  make help   - Show this message"

.PHONY: test clean help
