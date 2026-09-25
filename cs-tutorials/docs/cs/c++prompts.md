Perfect! Let me create the FINAL, BEST ordering with topics interspersed intelligently. I'll generate ALL prompts from GC-001 to ~200 with:

- Complex topics broken into small pieces
- Dependencies clearly marked
- Math/theory interspersed with practical/fun stuff
- No long boring stretches

---

# COMPLETE C++ CURRICULUM - FINAL ORDERING (~200 TOPICS)

## SPRINT 0: HELLO WORLD (5 topics) ✅ YOU'VE STARTED THIS

### GC-001: C++ Environment Setup

```
Teach me C++ Environment Setup - Installing g++ or clang, First Compilation, Hello World using C++.

PROJECT CONTEXT:
- Step: GC-001 of 200 (FIRST STEP)
- Sprint: Sprint 0 - Hello World
- Parallel track: Top-down C++ (do when burnt out on DD-XXX)
- Understands: Basic programming concepts
- Current project state: Empty folder
- Goal: Just make something compile and run!

DEPENDENCIES COMPLETED:
- None (starting fresh)

WHAT TO BUILD:
After learning environment:
- Install g++ (Linux/Mac) or MinGW (Windows)
- Create hello.cpp
- Write "Hello, G-code!" program
- Compile: g++ hello.cpp -o hello
- Run: ./hello
- IT WORKS!

NOTE: Stay super high-level. Just get something running!

Start with Section 1 identifying all prerequisites and building blocks needed.
```

---

### GC-002: Variables and Basic Types ✅ YOU'RE HERE

````
Teach me C++ Variables - int, double, string, bool, Variable Declaration using C++.

PROJECT CONTEXT:
- Step: GC-002 of 200
- Sprint: Sprint 0 - Hello World
- Completed: GC-001 (can compile)
- Understands: Hello World works
- Current project state: hello.cpp exists
- Goal: Store data in variables

DEPENDENCIES COMPLETED:
- GC-001: Environment - can compile C++

WHAT TO BUILD:
After learning variables:
- Create variables for G-code command types
- Store numbers (coordinates, feedrate)
- Store text (command names)
- Print variables
- Calculate simple expressions

EXAMPLE:
```cpp
string command = "G0";
double x = 10.5;
double y = 20.3;
cout << command << " X" << x << " Y" << y << endl;
```

NOTE: Using std::string (high-level!), no char\* yet!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-003: Control Flow

````

Teach me C++ Control Flow - if/else, while loops, for loops, Logical operators using C++.

PROJECT CONTEXT:

- Step: GC-003 of 200
- Sprint: Sprint 0 - Hello World
- Completed: GC-001, GC-002
- Understands: Variables, types
- Current project state: Can store data
- Goal: Make decisions and repeat actions

DEPENDENCIES COMPLETED:

- GC-002: Variables - have data to control

WHAT TO BUILD:
After learning control flow:

- Check if command is "G0" or "G1"
- Loop through numbers 0-10
- Skip certain values with continue
- Exit loop early with break
- Nested loops

EXAMPLE:

```cpp
if (command == "G0") {
    cout << "Rapid move!" << endl;
} else if (command == "G1") {
    cout << "Feed move!" << endl;
}
```

NOTE: Just basic control flow!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-004: Functions

````

Teach me C++ Functions - Function Declaration, Parameters, Return Values, Function Calls using C++.

PROJECT CONTEXT:

- Step: GC-004 of 200
- Sprint: Sprint 0 - Hello World
- Completed: GC-001, GC-002, GC-003
- Understands: Variables, control flow
- Current project state: All code in main()
- Goal: Organize code into reusable functions

DEPENDENCIES COMPLETED:

- GC-003: Control flow - code to organize

WHAT TO BUILD:
After learning functions:

- Function to check if rapid move: bool isRapid(string cmd)
- Function to calculate distance: double distance(double x1, double y1, double x2, double y2)
- Function to print command: void printCommand(string cmd, double x, double y)
- Call functions from main()

EXAMPLE:

```cpp
bool isRapid(string command) {
    return command == "G0";
}

int main() {
    if (isRapid("G0")) {
        cout << "Rapid!" << endl;
    }
}
```

NOTE: Breaking code into functions!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-005: Compiling Programs

````

Teach me C++ Compilation - g++ Compiler Flags, -o Output File, Basic Compilation Errors using g++.

PROJECT CONTEXT:

- Step: GC-005 of 200 (LAST OF SPRINT 0)
- Sprint: Sprint 0 - Hello World
- Completed: GC-001 through GC-004
- Understands: Basic C++ syntax
- Current project state: main.cpp with functions
- Goal: Understand compilation better

DEPENDENCIES COMPLETED:

- GC-001: Environment - basic compilation
- GC-004: Functions - more complex code

WHAT TO BUILD:
After learning compilation:

- Use g++ flags: -Wall (warnings), -std=c++17
- Fix compilation errors
- Understand error messages
- Create simple Makefile

MAKEFILE:

```makefile
program: main.cpp
	g++ -std=c++17 -Wall main.cpp -o gcode_reader
```

NOTE: Just enough to be productive!

NEXT SPRINT: Sprint 1 - File Reading & Vectors

Start with Section 1 identifying all prerequisites and building blocks needed.

````

### GC-006: Reading Files with ifstream

````
Teach me C++ File Input - ifstream, Opening Files, Checking if Open Failed using C++.

PROJECT CONTEXT:
- Step: GC-006 of 200 (FIRST STEP OF SPRINT 1)
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-005 (Sprint 0 complete)
- Understands: Basic C++, functions
- Current project state: Can write programs, no file I/O
- Goal: Read G-code from actual file!

DEPENDENCIES COMPLETED:
- GC-005: Compilation - can build programs

WHAT TO BUILD:
After learning file input:
- Create sample.gcode file
- Open file with ifstream
- Check if file opened successfully
- Read entire file
- Print to screen

SAMPLE G-CODE:
```

G0 X10 Y20
G1 Z5 F100
M01

```

EXAMPLE:
```cpp
#include <fstream>
ifstream file("sample.gcode");
if (!file) {
    cout << "Error opening file!" << endl;
}
```

NOTE: Using ifstream (high-level, safe)!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-007: String Manipulation

````

Teach me C++ Strings - std::string, String Operations (length, substr, find, concatenation) using C++.

PROJECT CONTEXT:

- Step: GC-007 of 200
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-006
- Understands: File input, basic strings
- Current project state: Can read file
- Goal: Manipulate G-code text

DEPENDENCIES COMPLETED:

- GC-002: Variables - basic string usage
- GC-006: File input - have strings to manipulate

WHAT TO BUILD:
After learning strings:

- Get length of G-code line
- Extract substring (first 2 chars)
- Find position of 'X' in line
- Concatenate strings
- Compare strings

EXAMPLE:

```cpp
string line = "G0 X10 Y20";
cout << "Length: " << line.length() << endl;
cout << "Command: " << line.substr(0, 2) << endl;
size_t pos = line.find('X');
```

NOTE: std::string handles memory - safe and easy!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-008: Reading Line by Line

````

Teach me Line-by-Line Reading - getline Function, Reading Until EOF using C++.

PROJECT CONTEXT:

- Step: GC-008 of 200
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-007
- Understands: File input, strings
- Current project state: Can read whole file
- Goal: Process G-code line by line

DEPENDENCIES COMPLETED:

- GC-006: File input - reading files
- GC-007: Strings - storing lines

WHAT TO BUILD:
After learning getline:

- Read file line by line
- Process each line individually
- Skip empty lines
- Count total lines
- Print with line numbers

EXAMPLE:

```cpp
string line;
int lineNumber = 1;
while (getline(file, line)) {
    cout << lineNumber << ": " << line << endl;
    lineNumber++;
}
```

NOTE: How you actually process G-code!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-009: Basic Error Handling

````

Teach me Error Handling - Checking Conditions, Error Messages, Graceful Failure using C++.

PROJECT CONTEXT:

- Step: GC-009 of 200
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-008
- Understands: File reading, line processing
- Current project state: Program crashes on bad input
- Goal: Handle errors gracefully

DEPENDENCIES COMPLETED:

- GC-006: File input - errors to handle
- GC-003: Control flow - if/else for checking

WHAT TO BUILD:
After learning error handling:

- Check if file exists
- Validate G-code format
- Print helpful error messages
- Don't crash on bad input
- Return error codes

EXAMPLE:

```cpp
if (!file) {
    cerr << "Error: Could not open sample.gcode" << endl;
    return 1;
}

if (line.empty()) {
    cerr << "Warning: Empty line at " << lineNumber << endl;
    continue;
}
```

NOTE: Basic error handling - no exceptions yet!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-010: Vectors - Dynamic Arrays

````

Teach me C++ Vectors - std::vector, push_back, size, Accessing Elements using C++.

PROJECT CONTEXT:

- Step: GC-010 of 200
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-009
- Understands: File reading, error handling
- Current project state: Processing lines one at a time
- Goal: Store ALL lines in memory

DEPENDENCIES COMPLETED:

- GC-008: Line reading - have data to store

WHAT TO BUILD:
After learning vectors:

- Create vector<string> to store lines
- Add lines with push_back()
- Access lines with [index]
- Get size with .size()
- Print all stored lines

EXAMPLE:

```cpp
vector<string> lines;
string line;
while (getline(file, line)) {
    lines.push_back(line);
}
cout << "Read " << lines.size() << " lines" << endl;
```

NOTE: vector is dynamic - grows automatically!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-011: Range-Based For Loops

````

Teach me Range-Based For Loops - Iterating Over Containers, Modern C++ Syntax using C++.

PROJECT CONTEXT:

- Step: GC-011 of 200
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-010
- Understands: Vectors, traditional loops
- Current project state: Using index-based loops
- Goal: Cleaner iteration

DEPENDENCIES COMPLETED:

- GC-010: Vectors - containers to iterate
- GC-003: Control flow - basic for loops

WHAT TO BUILD:
After learning range-based loops:

- Iterate over vector of lines
- Process each line cleanly
- Compare to index-based loops
- Understand when to use each

BEFORE:

```cpp
for (size_t i = 0; i < lines.size(); i++) {
    cout << lines[i] << endl;
}
```

AFTER:

```cpp
for (const string& line : lines) {
    cout << line << endl;
}
```

NOTE: Modern C++ is more readable!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-012: The auto Keyword

````

Teach me auto Keyword - Type Deduction, When to Use auto, Readability using C++.

PROJECT CONTEXT:

- Step: GC-012 of 200
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-011
- Understands: Types, vectors, loops
- Current project state: Writing out full types
- Goal: Let compiler deduce types

DEPENDENCIES COMPLETED:

- GC-002: Variables - understanding types
- GC-011: Range loops - common use case

WHAT TO BUILD:
After learning auto:

- Use auto in range-based loops
- Use auto for complex types
- Understand when NOT to use auto
- Balance readability vs brevity

EXAMPLE:

```cpp
// Instead of:
for (const string& line : lines)

// Can write:
for (const auto& line : lines)

// For complex types:
auto file = ifstream("sample.gcode");
```

NOTE: auto makes code cleaner!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-013: String Operations Deep Dive

````

Teach me Advanced String Operations - Trimming Whitespace, Splitting Strings, Character Testing using C++.

PROJECT CONTEXT:

- Step: GC-013 of 200
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-012
- Understands: Basic strings, file reading
- Current project state: Raw lines with whitespace
- Goal: Clean and prepare strings

DEPENDENCIES COMPLETED:

- GC-007: Strings - basic operations
- GC-008: Line reading - have strings to clean

WHAT TO BUILD:
After learning string operations:

- Trim leading/trailing whitespace
- Check if character is digit/letter
- Convert to uppercase/lowercase
- Remove comments (after semicolon)

EXAMPLE:

```cpp
// Trim whitespace
line.erase(0, line.find_first_not_of(" \t"));
line.erase(line.find_last_not_of(" \t") + 1);

// Remove comments
size_t pos = line.find(';');
if (pos != string::npos) {
    line = line.substr(0, pos);
}
```

NOTE: Real G-code preprocessing!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-014: Output Formatting

````

Teach me Output Formatting - cout Manipulators, setw, setprecision, Fixed/Scientific Notation using C++.

PROJECT CONTEXT:

- Step: GC-014 of 200
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-013
- Understands: Basic output with cout
- Current project state: Ugly, unformatted output
- Goal: Pretty-print G-code analysis

DEPENDENCIES COMPLETED:

- GC-002: Variables - have data to format

WHAT TO BUILD:
After learning formatting:

- Align columns with setw()
- Format decimals with setprecision()
- Create formatted reports
- Table-like output

EXAMPLE:

```cpp
#include <iomanip>
cout << setw(10) << "Command" << setw(10) << "X" << setw(10) << "Y" << endl;
cout << setw(10) << "G0" << setw(10) << fixed << setprecision(2) << 10.5 << setw(10) << 20.3 << endl;
```

OUTPUT:

```
   Command         X         Y
        G0     10.50     20.30
```

NOTE: Professional-looking output!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-015: Writing to Files

````

Teach me File Output - ofstream, Writing Text to Files, Creating Output Files using C++.

PROJECT CONTEXT:

- Step: GC-015 of 200 (LAST OF SPRINT 1)
- Sprint: Sprint 1 - File Reading
- Completed: GC-001 through GC-014
- Understands: Reading files, formatting
- Current project state: Can read and display G-code
- Goal: Write analysis results to file

DEPENDENCIES COMPLETED:

- GC-006: File input - similar to output
- GC-014: Formatting - format output file

WHAT TO BUILD:
After learning file output:

- Create ofstream
- Write formatted data to file
- Close file properly
- Generate analysis report

EXAMPLE:

```cpp
ofstream outFile("analysis.txt");
outFile << "G-code Analysis Report" << endl;
outFile << "Total lines: " << lines.size() << endl;
outFile.close();
```

DELIVERABLE: Can read G-code files and generate reports!

NEXT SPRINT: Sprint 2 - Parsing & First Math!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

## SPRINT 2: PARSING & FIRST MATH! (14 topics - mixing parsing with easy math)

### GC-016: Splitting Strings with istringstream

````

Teach me String Splitting - istringstream, Extracting Tokens, Stream Operations using C++.

PROJECT CONTEXT:

- Step: GC-016 of 200 (FIRST OF SPRINT 2)
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-015 (Sprint 1 complete)
- Understands: File I/O, strings, vectors
- Current project state: Reading whole lines
- Goal: Break "G0 X10 Y20" into tokens

DEPENDENCIES COMPLETED:

- GC-007: Strings - string operations
- GC-010: Vectors - storing tokens

WHAT TO BUILD:
After learning istringstream:

- Split G-code line into tokens
- Store tokens in vector<string>
- Handle multiple spaces
- Print each token

EXAMPLE:

```cpp
string line = "G0 X10 Y20";
istringstream iss(line);
string token;
vector<string> tokens;
while (iss >> token) {
    tokens.push_back(token);
}
// tokens = ["G0", "X10", "Y20"]
```

NOTE: High-level tokenization!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-017: Basic Math - Distance in 2D

````

Teach me 2D Distance - Pythagorean Theorem, sqrt Function, Distance Between Points using C++ and cmath.

PROJECT CONTEXT:

- Step: GC-017 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-016
- Understands: Variables, functions
- Current project state: Parsing tokens
- Goal: Calculate distance for G-code moves! (FIRST MATH - PRACTICAL!)

DEPENDENCIES COMPLETED:

- GC-004: Functions - creating math functions
- GC-002: Variables - storing coordinates

WHAT TO BUILD:
After learning distance:

- Include <cmath> library
- Use sqrt() function
- Calculate distance between two 2D points
- Apply to G-code coordinates

EXAMPLE:

```cpp
#include <cmath>

double distance2D(double x1, double y1, double x2, double y2) {
    double dx = x2 - x1;  // Difference in X
    double dy = y2 - y1;  // Difference in Y
    return sqrt(dx*dx + dy*dy);  // Pythagorean theorem!
}

// Usage:
double dist = distance2D(0, 0, 10, 20);  // From origin to (10,20)
cout << "Distance: " << dist << "mm" << endl;
```

NOTE: This is USEFUL math - calculating toolpath length!

Start with Section 1 identifying all prerequisites and building blocks needed.

````

---

### GC-018: Maps - Key-Value Pairs

````

Teach me C++ Maps - std::map, Inserting Pairs, Accessing by Key, Checking if Key Exists using C++.

PROJECT CONTEXT:

- Step: GC-018 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-017
- Understands: Vectors, tokenization
- Current project state: Can split tokens
- Goal: Store parameters (X:10, Y:20, Z:5)

DEPENDENCIES COMPLETED:

- GC-010: Vectors - another container type

WHAT TO BUILD:
After learning maps:

- Store axis values: map<char, double>
- Insert with params['X'] = 10
- Check if key exists
- Iterate over map

EXAMPLE:

```cpp
map<char, double> params;
params['X'] = 10.5;
params['Y'] = 20.3;

if (params.find('Z') != params.end()) {
    cout << "Z = " << params['Z'] << endl;
}
````

NOTE: Like Python dict - high-level and safe!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-019: Structs - Custom Types

```

Teach me C++ Structs - Defining Structures, Member Variables, Accessing Members using C++.

PROJECT CONTEXT:

- Step: GC-019 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-018
- Understands: Built-in types, variables
- Current project state: Data scattered
- Goal: Group related data together

DEPENDENCIES COMPLETED:

- GC-002: Variables - understanding types
- GC-018: Maps - complex data structures

WHAT TO BUILD:
After learning structs:

- Define GCodeCommand struct
- Include command type, parameters
- Create struct instances
- Access members with dot notation

EXAMPLE:

```cpp
struct GCodeCommand {
    string type;              // "G0", "G1", etc.
    map<char, double> params; // X, Y, Z values
};

GCodeCommand cmd;
cmd.type = "G0";
cmd.params['X'] = 10;
```

NOTE: First step toward organizing data!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-020: Parsing Tokens into Commands

```

Teach me Token Parsing - Extracting Command Type, Parsing Parameters, Building Structured Data using C++.

PROJECT CONTEXT:

- Step: GC-020 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-019
- Understands: Tokenization, structs, maps
- Current project state: Have tokens, have struct
- Goal: Convert ["G0", "X10", "Y20"] into GCodeCommand

DEPENDENCIES COMPLETED:

- GC-016: Tokenization - have tokens
- GC-019: Structs - have structure to fill

WHAT TO BUILD:
After learning parsing:

- Identify command token (G, M codes)
- Parse parameter tokens (X10 → 'X', 10.0)
- Fill GCodeCommand struct
- Handle parsing errors

EXAMPLE:

```cpp
GCodeCommand parseCommand(const vector<string>& tokens) {
    GCodeCommand cmd;
    cmd.type = tokens[0];  // "G0"

    for (size_t i = 1; i < tokens.size(); i++) {
        char axis = tokens[i][0];           // 'X'
        double value = stod(tokens[i].substr(1));  // 10.0
        cmd.params[axis] = value;
    }
    return cmd;
}
```

NOTE: Real G-code parsing!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-021: 3D Distance - Extending to Z

```

Teach me 3D Distance - Adding Z Coordinate, 3D Pythagorean Theorem using C++ and cmath.

PROJECT CONTEXT:

- Step: GC-021 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-020
- Understands: 2D distance, parsing
- Current project state: Can parse X, Y, Z coordinates
- Goal: Calculate 3D toolpath distance!

DEPENDENCIES COMPLETED:

- GC-017: 2D distance - extending to 3D
- GC-020: Parsing - have 3D coordinates

WHAT TO BUILD:
After learning 3D distance:

- Extend distance function to 3D
- Handle optional Z parameter
- Calculate total toolpath length

EXAMPLE:

```cpp
double distance3D(double x1, double y1, double z1,
                  double x2, double y2, double z2) {
    double dx = x2 - x1;
    double dy = y2 - y1;
    double dz = z2 - z1;
    return sqrt(dx*dx + dy*dy + dz*dz);  // 3D Pythagorean!
}

// Calculate toolpath from one move to next:
double pathLength = distance3D(0, 0, 0, 10, 20, 5);
```

NOTE: Now calculating REAL machining distances!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-022: Enums for Command Types

```

Teach me C++ Enums - Defining Enums, Named Constants, Switch Statements with Enums using C++.

PROJECT CONTEXT:

- Step: GC-022 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-021
- Understands: Strings for command types
- Current project state: Using strings like "G0", "G1"
- Goal: Type-safe command representation

DEPENDENCIES COMPLETED:

- GC-019: Structs - custom types
- GC-003: Control flow - switch statements

WHAT TO BUILD:
After learning enums:

- Define CommandType enum
- Convert string to enum
- Use switch with enum
- Understand enum advantages

EXAMPLE:

```cpp
enum class CommandType {
    RAPID,          // G0
    LINEAR,         // G1
    CW_ARC,         // G2
    CCW_ARC,        // G3
    PROGRAM_STOP    // M01
};

CommandType parseType(const string& str) {
    if (str == "G0") return CommandType::RAPID;
    if (str == "G1") return CommandType::LINEAR;
    // ...
}
```

NOTE: Type-safe and clearer!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-023: Vector of Structs

```

Teach me Vectors of Custom Types - Storing Structs in Vectors, Iteration, Building Data Structures using C++.

PROJECT CONTEXT:

- Step: GC-023 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-022
- Understands: Vectors, structs
- Current project state: Can parse single command
- Goal: Store ALL parsed commands

DEPENDENCIES COMPLETED:

- GC-010: Vectors - dynamic arrays
- GC-019: Structs - custom types

WHAT TO BUILD:
After learning vector of structs:

- Create vector<GCodeCommand>
- Parse all lines into commands
- Store in vector
- Iterate and print all commands

EXAMPLE:

```cpp
vector<GCodeCommand> commands;

for (const auto& line : lines) {
    auto tokens = tokenize(line);
    GCodeCommand cmd = parseCommand(tokens);
    commands.push_back(cmd);
}

for (const auto& cmd : commands) {
    cout << cmd.type << endl;
}
```

NOTE: Building complete data structure!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-024: Calculating Total Distance

```

Teach me Accumulation - Summing Values, Accumulator Pattern, Total Toolpath Length using C++.

PROJECT CONTEXT:

- Step: GC-024 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-023
- Understands: 3D distance, vectors of commands
- Current project state: Have all parsed commands
- Goal: Calculate TOTAL machining distance! (PRACTICAL MATH!)

DEPENDENCIES COMPLETED:

- GC-021: 3D distance - distance function
- GC-023: Vector of commands - data to process

WHAT TO BUILD:
After learning accumulation:

- Track current position
- Calculate distance for each move
- Sum up total distance
- Report total toolpath length

EXAMPLE:

```cpp
double totalDistance = 0.0;
double currentX = 0, currentY = 0, currentZ = 0;

for (const auto& cmd : commands) {
    if (cmd.type == "G1") {  // Linear move
        double nextX = cmd.params['X'];
        double nextY = cmd.params['Y'];
        double nextZ = cmd.params['Z'];

        double dist = distance3D(currentX, currentY, currentZ,
                                 nextX, nextY, nextZ);
        totalDistance += dist;  // Accumulate!

        currentX = nextX;
        currentY = nextY;
        currentZ = nextZ;
    }
}

cout << "Total toolpath: " << totalDistance << "mm" << endl;
```

NOTE: Real CNC analysis - how long is the toolpath!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-025: Functions Returning Structs

```

Teach me Returning Structs - Functions that Return Custom Types, Return Value Optimization using C++.

PROJECT CONTEXT:

- Step: GC-025 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-024
- Understands: Functions, structs
- Current project state: Functions return basic types
- Goal: Clean function design

DEPENDENCIES COMPLETED:

- GC-004: Functions - function basics
- GC-019: Structs - return type

WHAT TO BUILD:
After learning return structs:

- Write parseCommand() properly
- Return GCodeCommand from function
- Understand return value optimization
- Clean function signatures

EXAMPLE:

```cpp
GCodeCommand parseCommand(const string& line) {
    GCodeCommand cmd;
    // Parse line into cmd
    return cmd;  // Returned efficiently!
}

// Usage:
GCodeCommand cmd = parseCommand("G0 X10");
```

NOTE: Modern C++ optimizes this automatically!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-026: Pass by Reference

```

Teach me Pass by Reference - Reference Parameters, const References, Avoiding Copies using C++.

PROJECT CONTEXT:

- Step: GC-026 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-025
- Understands: Functions, passing parameters
- Current project state: Copying data everywhere
- Goal: Efficient parameter passing

DEPENDENCIES COMPLETED:

- GC-004: Functions - parameter passing
- GC-025: Returning structs - understanding copies

WHAT TO BUILD:
After learning references:

- Pass large objects by const reference
- Modify objects with non-const reference
- Understand copy vs reference
- Measure performance difference

BEFORE (copies):

```cpp
void printCommand(GCodeCommand cmd) {  // COPIES cmd!
    cout << cmd.type << endl;
}
```

AFTER (reference):

```cpp
void printCommand(const GCodeCommand& cmd) {  // Reference!
    cout << cmd.type << endl;
}
```

NOTE: First step toward efficiency!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-027: Machining Time Estimation

```

Teach me Time Estimation - Feedrate, Time = Distance / Speed, Machining Time Calculation using C++.

PROJECT CONTEXT:

- Step: GC-027 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-026
- Understands: Distance calculation, parsing
- Current project state: Can calculate distance
- Goal: Estimate how long machining takes! (MORE PRACTICAL MATH!)

DEPENDENCIES COMPLETED:

- GC-024: Total distance - have distance
- GC-020: Parsing - can extract feedrate (F parameter)

WHAT TO BUILD:
After learning time estimation:

- Extract feedrate from G-code (F parameter)
- Calculate time = distance / feedrate
- Sum up total machining time
- Report estimated time

EXAMPLE:

```cpp
double totalTime = 0.0;  // seconds
double currentFeedrate = 100.0;  // mm/min

for (const auto& cmd : commands) {
    // Update feedrate if specified
    if (cmd.params.find('F') != cmd.params.end()) {
        currentFeedrate = cmd.params.at('F');
    }

    if (cmd.type == "G1") {
        double dist = calculateMoveDistance(cmd);
        double timeMinutes = dist / currentFeedrate;
        double timeSeconds = timeMinutes * 60;
        totalTime += timeSeconds;
    }
}

cout << "Estimated time: " << totalTime / 60 << " minutes" << endl;
```

NOTE: Real CNC analysis - how long will this part take!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-028: Multi-Function Organization

```

Teach me Code Organization - Breaking Code into Multiple Functions, Function Design, Single Responsibility using C++.

PROJECT CONTEXT:

- Step: GC-028 of 200
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-027
- Understands: Functions, parsing, math
- Current project state: Large functions doing too much
- Goal: Clean, organized code

DEPENDENCIES COMPLETED:

- GC-004: Functions - function basics

WHAT TO BUILD:
After learning organization:

- Split large functions into smaller ones
- Each function does ONE thing
- Clear function names
- Organized main()

EXAMPLE:

```cpp
// Instead of one giant function:
vector<GCodeCommand> parseFile(const string& filename) {
    auto lines = readLines(filename);      // One job
    auto cleaned = cleanLines(lines);      // One job
    auto commands = parseCommands(cleaned); // One job
    return commands;
}
```

NOTE: Professional code organization!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-029: State Tracking

```

Teach me State Management - Tracking Modal State, State Variables, State Machines Basics using C++.

PROJECT CONTEXT:

- Step: GC-029 of 200 (LAST OF SPRINT 2)
- Sprint: Sprint 2 - Parsing & First Math
- Completed: GC-001 through GC-028
- Understands: Variables, structs, parsing
- Current project state: Parsing individual commands
- Goal: Track modal state (G0 persists until changed)

DEPENDENCIES COMPLETED:

- GC-019: Structs - state representation
- GC-003: Control flow - state transitions

WHAT TO BUILD:
After learning state tracking:

- Track current motion mode (G0, G1)
- Apply modal state to commands without explicit code
- Update state when G-code changes mode
- Understand modal commands

EXAMPLE:

```cpp
struct MachineState {
    CommandType motionMode = CommandType::RAPID;
    double feedRate = 0;
};

MachineState state;
// Line: "G0 X10"
state.motionMode = CommandType::RAPID;
// Line: "Y20" (no G-code, uses current mode)
// Still in RAPID mode!
```

NOTE: Real G-code semantics!

DELIVERABLE: Complete G-code parser with distance and time analysis!

NEXT SPRINT: Sprint 3 - Python Integration

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 3: PYTHON INTEGRATION (10 topics)

### GC-030: Separating Header and Implementation Files

```

Teach me Header Files - .h vs .cpp Files, Declarations vs Definitions, Why Separate using C++.

PROJECT CONTEXT:

- Step: GC-030 of 200 (FIRST OF SPRINT 3)
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-029 (Sprint 2 complete)
- Understands: Functions, structs, parsing
- Current project state: Everything in main.cpp
- Goal: Organize code into modules (needed for library!)

DEPENDENCIES COMPLETED:

- GC-004: Functions - have code to organize
- GC-019: Structs - have types to declare

WHAT TO BUILD:
After learning headers:

- Create parser.h with declarations
- Create parser.cpp with implementations
- Understand forward declarations
- See why this enables reuse

parser.h:

```cpp
#ifndef PARSER_H
#define PARSER_H

#include <string>
#include <map>

struct GCodeCommand {
    std::string type;
    std::map<char, double> params;
};

GCodeCommand parseCommand(const std::string& line);

#endif
```

parser.cpp:

```cpp
#include "parser.h"

GCodeCommand parseCommand(const std::string& line) {
    // Implementation
}
```

NOTE: THE key C++ concept - header/impl split!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-031: Header Guards

```

Teach me Header Guards - #ifndef/#define/#endif, #pragma once, Preventing Multiple Inclusion using C++.

PROJECT CONTEXT:

- Step: GC-031 of 200
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-030
- Understands: Header files
- Current project state: Have .h files
- Goal: Prevent compilation errors

DEPENDENCIES COMPLETED:

- GC-030: Headers - have headers to protect

WHAT TO BUILD:
After learning header guards:

- Add guards to all .h files
- Understand why needed
- Compare #ifndef vs #pragma once
- Fix multiple definition errors

EXAMPLE:

```cpp
#ifndef PARSER_H
#define PARSER_H

// Header contents

#endif  // PARSER_H
```

OR:

```cpp
#pragma once

// Header contents
```

NOTE: Prevents weird compilation errors!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-032: Compiling Multiple Files

```

Teach me Multi-File Compilation - Compiling Multiple .cpp Files, Linking, Build Order using g++.

PROJECT CONTEXT:

- Step: GC-032 of 200
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-031
- Understands: Single-file compilation
- Current project state: Have multiple .cpp files
- Goal: Compile entire project

DEPENDENCIES COMPLETED:

- GC-005: Compilation - single file
- GC-030: Headers - multiple files

WHAT TO BUILD:
After learning multi-file compilation:

- Compile all .cpp files together
- Understand object files (.o)
- Link into executable
- Write better Makefile

COMMAND:

```bash
g++ -c parser.cpp -o parser.o
g++ -c main.cpp -o main.o
g++ parser.o main.o -o gcode_parser
```

MAKEFILE:

```makefile
gcode_parser: main.o parser.o
	g++ main.o parser.o -o gcode_parser

main.o: main.cpp parser.h
	g++ -c main.cpp

parser.o: parser.cpp parser.h
	g++ -c parser.cpp
```

NOTE: Understanding compilation and linking!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-033: Introduction to CMake

```

Teach me CMake Basics - What is CMake, Why Use Build Systems, CMakeLists.txt Basics using CMake.

PROJECT CONTEXT:

- Step: GC-033 of 200
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-032
- Understands: Manual compilation
- Current project state: Complex Makefile
- Goal: Modern build system (needed for Python!)

DEPENDENCIES COMPLETED:

- GC-032: Multi-file compilation - understand build process

WHAT TO BUILD:
After learning CMake:

- Create simple CMakeLists.txt
- Build with cmake
- Understand out-of-source builds
- Compare to Makefile

CMakeLists.txt:

```cmake
cmake_minimum_required(VERSION 3.10)
project(GCodeParser)

add_executable(gcode_parser main.cpp parser.cpp)
```

BUILD:

```bash
mkdir build
cd build
cmake ..
make
```

NOTE: Industry standard build system!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-034: CMake for Libraries

```

Teach me Building Libraries with CMake - add_library, Shared vs Static Libraries using CMake.

PROJECT CONTEXT:

- Step: GC-034 of 200
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-033
- Understands: CMake basics
- Current project state: Build executable only
- Goal: Build as library (for Python!)

DEPENDENCIES COMPLETED:

- GC-033: CMake basics - CMakeLists.txt

WHAT TO BUILD:
After learning libraries:

- Create library target
- Build shared library (.so or .dll)
- Build executable that uses library
- Understand library vs executable

CMakeLists.txt:

```cmake
# Build library
add_library(gcode_lib SHARED parser.cpp)

# Build executable using library
add_executable(gcode_parser main.cpp)
target_link_libraries(gcode_parser gcode_lib)
```

OUTPUT:

- libgcode_lib.so (library for Python!)
- gcode_parser (executable)

NOTE: Now we can use our C++ from Python!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-035: Installing pybind11

```

Teach me pybind11 Setup - What is pybind11, Installing with pip, CMake Integration using Python/C++.

PROJECT CONTEXT:

- Step: GC-035 of 200
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-034
- Understands: C++ library building
- Current project state: Have C++ library
- Goal: Set up Python binding tools

DEPENDENCIES COMPLETED:

- GC-034: Libraries - have library to bind
- Python knowledge - you already know Python!

WHAT TO BUILD:
After learning pybind11 setup:

- Install pybind11: pip install pybind11
- Add pybind11 to CMakeLists.txt
- Understand binding concept
- Ready to write bindings

CMakeLists.txt additions:

```cmake
find_package(pybind11 REQUIRED)

pybind11_add_module(gcode_parser_py bindings.cpp parser.cpp)
```

NOTE: Bridge between C++ and Python!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-036: Basic pybind11 Bindings

```

Teach me pybind11 Bindings Basics - PYBIND11_MODULE, Exposing Functions, py::arg using C++/pybind11.

PROJECT CONTEXT:

- Step: GC-036 of 200
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-035
- Understands: C++ functions, pybind11 setup
- Current project state: pybind11 installed
- Goal: Expose ONE function to Python!

DEPENDENCIES COMPLETED:

- GC-035: pybind11 setup - have tools
- GC-004: Functions - have functions to expose

WHAT TO BUILD:
After learning basic bindings:

- Create bindings.cpp
- Expose simple function
- Build Python module
- Call from Python!

bindings.cpp:

```cpp
#include <pybind11/pybind11.h>
#include "parser.h"

namespace py = pybind11;

PYBIND11_MODULE(gcode_parser, m) {
    m.def("parse_line", &parseCommand, "Parse a G-code line");
}
```

PYTHON USAGE:

```python
import gcode_parser
cmd = gcode_parser.parse_line("G0 X10 Y20")
```

NOTE: Your C++ code, callable from Python!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-037: Binding Structs as Python Classes

```

Teach me Binding Classes - py::class\_, def_readwrite, Exposing Structs using pybind11.

PROJECT CONTEXT:

- Step: GC-037 of 200
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-036
- Understands: Basic bindings, structs
- Current project state: Can call functions from Python
- Goal: Expose GCodeCommand struct

DEPENDENCIES COMPLETED:

- GC-036: Basic bindings - pybind11 basics
- GC-019: Structs - have struct to expose

WHAT TO BUILD:
After learning class bindings:

- Bind GCodeCommand struct
- Expose member variables
- Access from Python as class
- Pythonic API

bindings.cpp:

```cpp
py::class_<GCodeCommand>(m, "GCodeCommand")
    .def_readwrite("type", &GCodeCommand::type)
    .def_readwrite("params", &GCodeCommand::params);
```

PYTHON USAGE:

```python
cmd = gcode_parser.parse_line("G0 X10")
print(cmd.type)        # "G0"
print(cmd.params['X']) # 10.0
```

NOTE: C++ struct becomes Python class!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-038: Binding STL Containers

```

Teach me Binding STL Types - py::bind_vector, py::bind_map, Automatic Conversion using pybind11.

PROJECT CONTEXT:

- Step: GC-038 of 200
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-037
- Understands: Binding basics, containers
- Current project state: Can't pass vectors/maps to Python
- Goal: Full container support

DEPENDENCIES COMPLETED:

- GC-037: Class bindings - binding types
- GC-010: Vectors - container to bind
- GC-018: Maps - container to bind

WHAT TO BUILD:
After learning STL bindings:

- Include pybind11/stl.h
- Automatic vector/map conversion
- Return vector from C++ to Python
- Pass list from Python to C++

bindings.cpp:

```cpp
#include <pybind11/stl.h>

m.def("parse_file", &parseFile, "Parse entire file");
// Returns vector<GCodeCommand> → Python list automatically!
```

PYTHON USAGE:

```python
commands = gcode_parser.parse_file("sample.gcode")
for cmd in commands:  # Python list!
    print(cmd.type)
```

NOTE: Seamless C++/Python integration!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-039: Complete Python Module

```

Teach me Building Complete Python Modules - Full API Design, Documentation, Python Package using pybind11/CMake.

PROJECT CONTEXT:

- Step: GC-039 of 200 (LAST OF SPRINT 3)
- Sprint: Sprint 3 - Python Integration
- Completed: GC-001 through GC-038
- Understands: All binding concepts
- Current project state: Individual bindings work
- Goal: Complete, usable Python module!

DEPENDENCIES COMPLETED:

- All previous Sprint 3 topics

WHAT TO BUILD:
After learning complete modules:

- Expose full parser API
- Add docstrings
- Build installable Python package
- Test from Python!

bindings.cpp:

```cpp
PYBIND11_MODULE(gcode_parser, m) {
    m.doc() = "G-code parser and analyzer";

    py::class_<GCodeCommand>(m, "GCodeCommand")
        .def_readwrite("type", &GCodeCommand::type)
        .def_readwrite("params", &GCodeCommand::params);

    m.def("parse_line", &parseCommand, "Parse single G-code line");
    m.def("parse_file", &parseFile, "Parse entire G-code file");
    m.def("calculate_distance", &calculateTotalDistance, "Calculate total toolpath distance");
    m.def("estimate_time", &estimateMachiningTime, "Estimate machining time");
}
```

PYTHON USAGE:

```python
import gcode_parser

# Parse file
commands = gcode_parser.parse_file("part.gcode")

# Analyze
distance = gcode_parser.calculate_distance(commands)
time = gcode_parser.estimate_time(commands)

print(f"Toolpath: {distance}mm")
print(f"Time: {time/60:.1f} minutes")
```

DELIVERABLE: Working Python module using your C++ code!

NOW YOU CAN:

- Write fast C++ code
- Use it from Python!
- Toy around with both!

NEXT SPRINT: Sprint 4 - Tools, Debugging & Classes

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 4: TOOLS, DEBUGGING & OOP START (12 topics)

### GC-040: Introduction to GDB Debugger

```

Teach me GDB Basics - Setting Breakpoints, Stepping Through Code, Inspecting Variables using GDB and C++.

PROJECT CONTEXT:

- Step: GC-040 of 200 (FIRST OF SPRINT 4)
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-039 (have Python integration!)
- Understands: C++, parsing, Python bindings
- Current project state: Working parser, no debugging tools
- Goal: Debug C++ code effectively

DEPENDENCIES COMPLETED:

- GC-005: Compilation - can compile programs to debug

WHAT TO BUILD:
After learning GDB:

- Compile with debug symbols: g++ -g
- Set breakpoints
- Step through execution
- Inspect variables
- Find bugs

EXAMPLE:

```bash
g++ -g main.cpp parser.cpp -o gcode_parser
gdb ./gcode_parser
(gdb) break main
(gdb) run
(gdb) next
(gdb) print line
```

NOTE: Essential C++ development skill!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-041: Advanced GDB Features

```

Teach me Advanced GDB - Watchpoints, Conditional Breakpoints, Backtrace, Core Dumps using GDB and C++.

PROJECT CONTEXT:

- Step: GC-041 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-040
- Understands: Basic GDB
- Current project state: Can debug with breakpoints
- Goal: Advanced debugging techniques

DEPENDENCIES COMPLETED:

- GC-040: GDB basics

WHAT TO BUILD:
After learning advanced GDB:

- Watch variable changes
- Conditional breakpoints
- Examine call stack
- Analyze crashes

EXAMPLE:

```gdb
(gdb) watch line_number
(gdb) break parseCommand if line.empty()
(gdb) backtrace
```

NOTE: Debug like a pro!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-042: Google Test Framework

```

Teach me Google Test - Writing Unit Tests, Test Fixtures, Assertions, Running Tests using C++ and Google Test.

PROJECT CONTEXT:

- Step: GC-042 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-041
- Understands: C++ functions, debugging
- Current project state: Parser works but no tests
- Goal: Automated testing!

DEPENDENCIES COMPLETED:

- GC-004: Functions - have code to test
- GC-029: Parser - have functionality to test

WHAT TO BUILD:
After learning Google Test:

- Install Google Test
- Write first unit test
- Test parseCommand
- Run all tests

EXAMPLE:

```cpp
#include <gtest/gtest.h>
#include "parser.h"

TEST(ParserTest, ParsesG0Command) {
    auto cmd = parseCommand("G0 X10 Y20");
    EXPECT_EQ(cmd.type, "G0");
    EXPECT_EQ(cmd.params['X'], 10.0);
}
```

CMakeLists.txt:

```cmake
find_package(GTest REQUIRED)
add_executable(tests test_parser.cpp)
target_link_libraries(tests gcode_lib GTest::GTest GTest::Main)
```

NOTE: Tests prevent bugs!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-043: Test-Driven Development

```

Teach me TDD - Red-Green-Refactor Cycle, Writing Tests First using C++ and Google Test.

PROJECT CONTEXT:

- Step: GC-043 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-042
- Understands: Google Test
- Current project state: Have some tests
- Goal: TDD mindset

DEPENDENCIES COMPLETED:

- GC-042: Google Test - testing framework

WHAT TO BUILD:
After learning TDD:

- Write failing test FIRST (Red)
- Write minimal code to pass (Green)
- Refactor while tests stay green
- Add feedrate validation with TDD

TDD CYCLE:

```cpp
// 1. RED - Write failing test
TEST(ValidatorTest, RejectsFeedrateTooHigh) {
    EXPECT_FALSE(isValidFeedrate(10000));
}

// 2. GREEN - Write minimal code
bool isValidFeedrate(double f) {
    return f <= 5000;
}

// 3. REFACTOR - Improve
bool isValidFeedrate(double f) {
    const double MAX_FEEDRATE = 5000.0;
    return f > 0 && f <= MAX_FEEDRATE;
}
```

NOTE: TDD makes better code!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-044: Classes - From Structs to Classes

```

Teach me C++ Classes - Converting Structs to Classes, Encapsulation, Access Specifiers using C++.

PROJECT CONTEXT:

- Step: GC-044 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-043
- Understands: Structs, functions
- Current project state: Using structs
- Goal: Object-oriented design

DEPENDENCIES COMPLETED:

- GC-019: Structs - foundation for classes

WHAT TO BUILD:
After learning classes:

- Convert GCodeCommand to class
- Add private members
- Add public methods
- Encapsulation

EXAMPLE:

```cpp
class GCodeCommand {
private:
    std::string type_;
    std::map<char, double> params_;

public:
    // Constructor
    GCodeCommand(const std::string& type) : type_(type) {}

    // Getters
    std::string getType() const { return type_; }

    // Methods
    void setParam(char axis, double value) {
        params_[axis] = value;
    }

    double getParam(char axis) const {
        return params_.at(axis);
    }
};
```

NOTE: First step toward OOP!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-045: Constructors

```

Teach me Constructors - Default, Parameterized, Initialization Lists using C++.

PROJECT CONTEXT:

- Step: GC-045 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-044
- Understands: Classes
- Current project state: Basic classes
- Goal: Proper object initialization

DEPENDENCIES COMPLETED:

- GC-044: Classes - have classes to construct

WHAT TO BUILD:
After learning constructors:

- Default constructor
- Parameterized constructor
- Initialization lists
- Constructor delegation

EXAMPLE:

```cpp
class GCodeCommand {
public:
    // Default constructor
    GCodeCommand() : type_("G0") {}

    // Parameterized constructor
    GCodeCommand(const std::string& type) : type_(type) {}

    // Constructor with multiple params
    GCodeCommand(const std::string& type, double x, double y)
        : type_(type) {
        params_['X'] = x;
        params_['Y'] = y;
    }
};

// Usage:
GCodeCommand cmd1;                    // Default
GCodeCommand cmd2("G1");              // Parameterized
GCodeCommand cmd3("G0", 10.0, 20.0);  // Multiple params
```

NOTE: Initialize objects properly!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-046: Member Functions and Methods

```

Teach me Member Functions - Methods, const Methods, Static Methods using C++.

PROJECT CONTEXT:

- Step: GC-046 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-045
- Understands: Classes, constructors
- Current project state: Basic class structure
- Goal: Add behavior to classes

DEPENDENCIES COMPLETED:

- GC-044: Classes - have classes
- GC-045: Constructors - object creation

WHAT TO BUILD:
After learning member functions:

- Instance methods
- const methods (don't modify object)
- Static methods
- Method chaining

EXAMPLE:

```cpp
class GCodeCommand {
public:
    // Instance method
    void setParam(char axis, double value) {
        params_[axis] = value;
    }

    // const method (read-only)
    double getParam(char axis) const {
        return params_.at(axis);
    }

    // Method chaining
    GCodeCommand& addParam(char axis, double value) {
        params_[axis] = value;
        return *this;
    }

    // Static method
    static bool isRapid(const std::string& type) {
        return type == "G0";
    }
};

// Usage:
cmd.addParam('X', 10).addParam('Y', 20);  // Chaining!
```

NOTE: Adding behavior to objects!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-047: GCodeParser Class Design

```

Teach me Class Design - Creating GCodeParser Class, API Design, Encapsulating Functionality using C++.

PROJECT CONTEXT:

- Step: GC-047 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-046
- Understands: Classes, methods
- Current project state: Free functions for parsing
- Goal: Object-oriented parser design

DEPENDENCIES COMPLETED:

- GC-044: Classes - OOP concepts
- GC-029: Parsing - functionality to encapsulate

WHAT TO BUILD:
After learning class design:

- Create GCodeParser class
- Encapsulate parsing logic
- Clean API design
- State management in class

EXAMPLE:

```cpp
class GCodeParser {
private:
    std::string filename_;
    std::vector<GCodeCommand> commands_;

public:
    GCodeParser(const std::string& filename) : filename_(filename) {}

    void parse() {
        // Parsing logic
    }

    const std::vector<GCodeCommand>& getCommands() const {
        return commands_;
    }

    double calculateTotalDistance() const {
        // Distance calculation
    }

    double estimateTime() const {
        // Time estimation
    }
};

// Usage:
GCodeParser parser("part.gcode");
parser.parse();
std::cout << "Distance: " << parser.calculateTotalDistance() << "mm\n";
```

NOTE: Professional API design!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-048: Code Coverage

```

Teach me Code Coverage - gcov, lcov, Measuring Test Coverage using C++ and coverage tools.

PROJECT CONTEXT:

- Step: GC-048 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-047
- Understands: Testing, Google Test
- Current project state: Have tests, don't know coverage
- Goal: Measure how much code is tested

DEPENDENCIES COMPLETED:

- GC-042: Google Test - have tests

WHAT TO BUILD:
After learning coverage:

- Compile with coverage flags
- Run tests to collect data
- Generate coverage report
- Find untested code

COMMANDS:

```bash
# Compile with coverage
g++ -g --coverage parser.cpp test_parser.cpp -o tests

# Run tests
./tests

# Generate report
lcov --capture --directory . --output-file coverage.info
genhtml coverage.info --output-directory coverage_html

# View
firefox coverage_html/index.html
```

GOAL: 80%+ coverage!

NOTE: Know what you're NOT testing!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-049: Static Analysis with clang-tidy

```

Teach me Static Analysis - clang-tidy, Finding Bugs Before Compilation using C++ and clang-tidy.

PROJECT CONTEXT:

- Step: GC-049 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-048
- Understands: Compilation, code quality
- Current project state: Code works but might have issues
- Goal: Find potential bugs automatically

DEPENDENCIES COMPLETED:

- GC-005: Compilation - understanding compilation

WHAT TO BUILD:
After learning static analysis:

- Run clang-tidy on code
- Fix warnings
- Configure .clang-tidy file
- Integrate with CMake

EXAMPLE:

```bash
clang-tidy parser.cpp -- -std=c++17
```

.clang-tidy:

```yaml
Checks: "-*,modernize-*,performance-*,bugprone-*"
```

CMakeLists.txt:

```cmake
set(CMAKE_CXX_CLANG_TIDY clang-tidy)
```

NOTE: Catch bugs before runtime!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-050: Documentation with Doxygen

```

Teach me Doxygen - Documenting Code, Generating Documentation using C++ and Doxygen.

PROJECT CONTEXT:

- Step: GC-050 of 200
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-049
- Understands: Headers, functions, classes
- Current project state: Code lacks documentation
- Goal: Professional API documentation

DEPENDENCIES COMPLETED:

- GC-030: Header files - code to document
- GC-044: Classes - more to document

WHAT TO BUILD:
After learning Doxygen:

- Write Doxygen comments
- Configure Doxyfile
- Generate HTML documentation

EXAMPLE:

```cpp
/**
 * @brief Parse a G-code command line
 *
 * @param line The G-code line (e.g., "G0 X10 Y20")
 * @return GCodeCommand struct with parsed data
 * @throws std::invalid_argument if malformed
 */
GCodeCommand parseCommand(const std::string& line);
```

GENERATE:

```bash
doxygen Doxyfile
firefox html/index.html
```

NOTE: Good docs are essential!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-051: CMake Deep Dive

```

Teach me Advanced CMake - Variables, Functions, find_package, Modern CMake using CMake.

PROJECT CONTEXT:

- Step: GC-051 of 200 (LAST OF SPRINT 4)
- Sprint: Sprint 4 - Tools & Debugging
- Completed: GC-001 through GC-050
- Understands: Basic CMake
- Current project state: Simple CMakeLists.txt
- Goal: Professional CMake setup

DEPENDENCIES COMPLETED:

- GC-033: CMake basics
- GC-034: CMake libraries

WHAT TO BUILD:
After learning advanced CMake:

- Use variables
- Create functions
- Find external libraries
- Target-based design

EXAMPLE:

```cmake
cmake_minimum_required(VERSION 3.15)
project(GCodeParser VERSION 1.0)

# Variables
set(CMAKE_CXX_STANDARD 17)

# Find packages
find_package(pybind11 REQUIRED)
find_package(GTest REQUIRED)

# Library target
add_library(gcode_lib SHARED parser.cpp)
target_include_directories(gcode_lib PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})

# Python module
pybind11_add_module(gcode_parser bindings.cpp)
target_link_libraries(gcode_parser PRIVATE gcode_lib)

# Tests
add_executable(tests test_parser.cpp)
target_link_libraries(tests gcode_lib GTest::GTest GTest::Main)
```

NOTE: Industry-standard build mastery!

DELIVERABLE: Professional C++ development environment with tools, tests, docs!

NEXT SPRINT: Sprint 5 - More Math & Visualization Start

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---



## SPRINT 5: MORE MATH & ALGORITHMS (12 topics - mixing practical math with CS fundamentals)

### GC-052: Vectors - 2D Math Class

```

Teach me 2D Vector Math - Creating Vector2D Class, Addition, Subtraction, Magnitude using C++.

PROJECT CONTEXT:

- Step: GC-052 of 200 (FIRST OF SPRINT 5)
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-051
- Understands: Classes, 2D distance
- Current project state: Calculating distance with separate x,y
- Goal: Proper vector class for math

DEPENDENCIES COMPLETED:

- GC-017: 2D distance - vector concepts
- GC-044: Classes - can create math classes

WHAT TO BUILD:
After learning Vector2D:

- Create Vector2D class
- Overload + and - operators
- Calculate magnitude (length)
- Use for G-code coordinates

EXAMPLE:

```cpp
class Vector2D {
public:
    double x, y;

    Vector2D(double x = 0, double y = 0) : x(x), y(y) {}

    Vector2D operator+(const Vector2D& other) const {
        return Vector2D(x + other.x, y + other.y);
    }

    Vector2D operator-(const Vector2D& other) const {
        return Vector2D(x - other.x, y - other.y);
    }

    double magnitude() const {
        return sqrt(x*x + y*y);
    }
};

// Usage:
Vector2D start(0, 0);
Vector2D end(10, 20);
Vector2D diff = end - start;
double distance = diff.magnitude();
```

NOTE: Clean math with operator overloading!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-053: Operator Overloading

```

Teach me Operator Overloading - Overloading +, -, \*, ==, << for Custom Types using C++.

PROJECT CONTEXT:

- Step: GC-053 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-052
- Understands: Classes, Vector2D
- Current project state: Basic operator overloading in Vector2D
- Goal: Complete operator set for math classes

DEPENDENCIES COMPLETED:

- GC-052: Vector2D - started operator overloading

WHAT TO BUILD:
After learning operator overloading:

- Scalar multiplication (Vector \* double)
- Dot product
- Equality comparison
- Stream output (<<)

EXAMPLE:

```cpp
class Vector2D {
public:
    // Scalar multiplication
    Vector2D operator*(double scalar) const {
        return Vector2D(x * scalar, y * scalar);
    }

    // Dot product
    double dot(const Vector2D& other) const {
        return x * other.x + y * other.y;
    }

    // Equality
    bool operator==(const Vector2D& other) const {
        return x == other.x && y == other.y;
    }

    // Stream output
    friend std::ostream& operator<<(std::ostream& os, const Vector2D& v) {
        os << "(" << v.x << ", " << v.y << ")";
        return os;
    }
};

// Usage:
Vector2D v(1, 2);
Vector2D v2 = v * 3;  // (3, 6)
std::cout << v2;      // Prints: (3, 6)
```

NOTE: Making custom types behave like built-in types!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-054: Algorithm Complexity - Big O

```

Teach me Big O Notation - Time/Space Complexity, Analyzing Algorithms using C++ and CS fundamentals.

PROJECT CONTEXT:

- Step: GC-054 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-053
- Understands: Loops, functions
- Current project state: Writing algorithms without understanding efficiency
- Goal: Understand algorithm performance

DEPENDENCIES COMPLETED:

- GC-003: Control flow - loops to analyze

WHAT TO BUILD:
After learning Big O:

- Understand O(1), O(n), O(n²)
- Analyze loop complexity
- Compare different approaches
- Apply to G-code parsing

EXAMPLES:

```cpp
// O(1) - Constant time
double getParam(char axis) {
    return params[axis];  // Direct access
}

// O(n) - Linear time
int countCommands(const vector<GCodeCommand>& cmds) {
    return cmds.size();  // Must traverse once
}

// O(n) - Linear search
bool hasCommand(const vector<GCodeCommand>& cmds, const string& type) {
    for (const auto& cmd : cmds) {
        if (cmd.type == type) return true;
    }
    return false;  // Worst case: check all
}

// O(n²) - Nested loops (BAD!)
void findDuplicates(const vector<GCodeCommand>& cmds) {
    for (size_t i = 0; i < cmds.size(); i++) {
        for (size_t j = i+1; j < cmds.size(); j++) {
            // Check if cmds[i] == cmds[j]
        }
    }
}
```

NOTE: Understanding why code is fast or slow!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-055: Vector3D - Extending to 3D

```

Teach me 3D Vector Math - Creating Vector3D Class, Cross Product, 3D Operations using C++.

PROJECT CONTEXT:

- Step: GC-055 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-054
- Understands: Vector2D, operator overloading
- Current project state: Only 2D vectors
- Goal: Full 3D math for G-code

DEPENDENCIES COMPLETED:

- GC-052: Vector2D - extending to 3D
- GC-021: 3D distance - 3D concepts

WHAT TO BUILD:
After learning Vector3D:

- Create Vector3D class
- All 2D operations plus Z
- Cross product (important for 3D!)
- Normal calculation

EXAMPLE:

```cpp
class Vector3D {
public:
    double x, y, z;

    Vector3D(double x = 0, double y = 0, double z = 0)
        : x(x), y(y), z(z) {}

    Vector3D operator+(const Vector3D& other) const {
        return Vector3D(x + other.x, y + other.y, z + other.z);
    }

    double magnitude() const {
        return sqrt(x*x + y*y + z*z);
    }

    // Cross product (perpendicular vector)
    Vector3D cross(const Vector3D& other) const {
        return Vector3D(
            y * other.z - z * other.y,
            z * other.x - x * other.z,
            x * other.y - y * other.x
        );
    }

    // Normalize (unit vector)
    Vector3D normalized() const {
        double mag = magnitude();
        return Vector3D(x/mag, y/mag, z/mag);
    }
};
```

NOTE: Essential for 3D graphics and CNC!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-056: Sorting Algorithms

```

Teach me Sorting - Bubble Sort, Insertion Sort, Quick Sort, std::sort using C++.

PROJECT CONTEXT:

- Step: GC-056 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-055
- Understands: Big O, loops, vectors
- Current project state: Unsorted data
- Goal: Sort G-code commands by different criteria

DEPENDENCIES COMPLETED:

- GC-054: Big O - understanding complexity
- GC-010: Vectors - data to sort

WHAT TO BUILD:
After learning sorting:

- Implement bubble sort (O(n²))
- Implement quick sort (O(n log n))
- Use std::sort (fast!)
- Sort commands by distance, time, etc.

EXAMPLE:

```cpp
// Bubble sort (teaching only - don't use in practice!)
void bubbleSort(vector<double>& arr) {
    for (size_t i = 0; i < arr.size(); i++) {
        for (size_t j = 0; j < arr.size() - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}

// In practice, use std::sort!
vector<GCodeCommand> commands;
sort(commands.begin(), commands.end(),
     [](const GCodeCommand& a, const GCodeCommand& b) {
         return a.getDistance() < b.getDistance();
     });
```

NOTE: Understanding sorting, but use std::sort!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-057: Lambda Functions

```

Teach me Lambda Functions - Anonymous Functions, Captures, mutable using C++.

PROJECT CONTEXT:

- Step: GC-057 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-056
- Understands: Functions, sorting
- Current project state: Using function pointers
- Goal: Clean, inline functions

DEPENDENCIES COMPLETED:

- GC-004: Functions - understanding functions

WHAT TO BUILD:
After learning lambdas:

- Basic lambda syntax
- Capture by value and reference
- Use with std::sort, std::for_each
- Lambda as parameter

EXAMPLE:

```cpp
// Basic lambda
auto add = [](int a, int b) { return a + b; };
cout << add(5, 3);  // 8

// Capture by value
int threshold = 100;
auto isFast = [threshold](const GCodeCommand& cmd) {
    return cmd.getFeedrate() > threshold;
};

// Capture by reference
int count = 0;
for_each(commands.begin(), commands.end(),
         [&count](const GCodeCommand& cmd) {
             if (cmd.type == "G1") count++;
         });

// With std::sort
sort(commands.begin(), commands.end(),
     [](const GCodeCommand& a, const GCodeCommand& b) {
         return a.params['X'] < b.params['X'];
     });
```

NOTE: Modern C++ - cleaner code!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-058: STL Algorithms

```

Teach me STL Algorithms - std::for_each, std::transform, std::find_if, std::accumulate using C++.

PROJECT CONTEXT:

- Step: GC-058 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-057
- Understands: Vectors, lambdas
- Current project state: Writing manual loops
- Goal: Use STL algorithms for cleaner code

DEPENDENCIES COMPLETED:

- GC-010: Vectors - containers to process
- GC-057: Lambdas - function objects for algorithms

WHAT TO BUILD:
After learning STL algorithms:

- Use for_each instead of manual loops
- Transform data with transform
- Find elements with find_if
- Sum with accumulate

EXAMPLE:

```cpp
#include <algorithm>
#include <numeric>

vector<GCodeCommand> commands;

// for_each - process each element
for_each(commands.begin(), commands.end(),
         [](const GCodeCommand& cmd) {
             cout << cmd.type << endl;
         });

// transform - convert one container to another
vector<double> distances;
transform(commands.begin(), commands.end(),
          back_inserter(distances),
          [](const GCodeCommand& cmd) {
              return cmd.getDistance();
          });

// find_if - find first match
auto rapid = find_if(commands.begin(), commands.end(),
                     [](const GCodeCommand& cmd) {
                         return cmd.type == "G0";
                     });

// accumulate - sum up
double totalDist = accumulate(distances.begin(), distances.end(), 0.0);
```

NOTE: Expressive, functional-style C++!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-059: Binary Search

```

Teach me Binary Search - Search in Sorted Data, O(log n) Complexity, std::binary_search using C++.

PROJECT CONTEXT:

- Step: GC-059 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-058
- Understands: Sorting, Big O
- Current project state: Linear search O(n)
- Goal: Fast search in sorted data

DEPENDENCIES COMPLETED:

- GC-056: Sorting - need sorted data
- GC-054: Big O - understanding efficiency

WHAT TO BUILD:
After learning binary search:

- Implement binary search manually
- Use std::binary_search
- Understand why it's O(log n)
- Search for commands by parameter

EXAMPLE:

```cpp
// Manual binary search
bool binarySearch(const vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return true;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

// Using STL
vector<double> sortedFeedrates = {10, 50, 100, 200, 500};
bool found = binary_search(sortedFeedrates.begin(),
                           sortedFeedrates.end(),
                           100);
```

COMPARISON:

- Linear search: O(n) - check all elements
- Binary search: O(log n) - halve search space each time
- 1,000,000 elements: Linear = 1M checks, Binary = 20 checks!

NOTE: Massive speedup on sorted data!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-060: Sets and Maps Deep Dive

```

Teach me std::set and std::map - Ordered Containers, std::unordered_map, Hash Tables using C++.

PROJECT CONTEXT:

- Step: GC-060 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-059
- Understands: Maps basics, sorting
- Current project state: Basic map usage
- Goal: Understand different container types

DEPENDENCIES COMPLETED:

- GC-018: Maps - basic map usage
- GC-056: Sorting - understand ordering

WHAT TO BUILD:
After learning sets/maps:

- Use std::set for unique commands
- Understand map vs unordered_map
- Choose right container
- Performance comparison

EXAMPLE:

```cpp
// std::set - unique, sorted
set<string> uniqueCommands;
for (const auto& cmd : commands) {
    uniqueCommands.insert(cmd.type);
}
// Now have: {"G0", "G1", "G2", "M01"} - sorted!

// std::map - sorted by key
map<string, int> commandCounts;
for (const auto& cmd : commands) {
    commandCounts[cmd.type]++;
}

// std::unordered_map - faster, unsorted
unordered_map<string, int> fastCounts;  // O(1) lookup!
for (const auto& cmd : commands) {
    fastCounts[cmd.type]++;
}
```

WHEN TO USE:

- vector: Ordered, allows duplicates, fast iteration
- set: Unique elements, sorted
- map: Key-value, sorted by key
- unordered_map: Key-value, fastest lookup

NOTE: Choosing the right container matters!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-061: Angles and Trigonometry

```

Teach me Trigonometry - sin, cos, tan, Radians vs Degrees, Angles in 2D using C++ and cmath.

PROJECT CONTEXT:

- Step: GC-061 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-060
- Understands: 2D/3D vectors, distance
- Current project state: Can't calculate angles
- Goal: Angle calculations for arcs and rotations

DEPENDENCIES COMPLETED:

- GC-052: Vector2D - vector math
- GC-017: 2D distance - basic math

WHAT TO BUILD:
After learning trigonometry:

- Convert degrees ↔ radians
- Calculate angle between vectors
- Use sin/cos for circular motion
- Understand G2/G3 arc commands

EXAMPLE:

```cpp
#include <cmath>

const double PI = 3.14159265358979323846;

// Degrees to radians
double degToRad(double degrees) {
    return degrees * PI / 180.0;
}

// Radians to degrees
double radToDeg(double radians) {
    return radians * 180.0 / PI;
}

// Angle between two vectors
double angleBetween(const Vector2D& v1, const Vector2D& v2) {
    double dot = v1.x * v2.x + v1.y * v2.y;
    double mag1 = v1.magnitude();
    double mag2 = v2.magnitude();
    double cosAngle = dot / (mag1 * mag2);
    return acos(cosAngle);  // Result in radians
}

// Point on circle
Vector2D pointOnCircle(double centerX, double centerY,
                       double radius, double angleRad) {
    return Vector2D(
        centerX + radius * cos(angleRad),
        centerY + radius * sin(angleRad)
    );
}
```

NOTE: Essential for G2/G3 arc commands!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-062: Arc Calculations for G2/G3

```

Teach me Arc Math - Circular Interpolation, G2/G3 Commands, Arc Length using C++ and trigonometry.

PROJECT CONTEXT:

- Step: GC-062 of 200
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-061
- Understands: Trigonometry, vectors
- Current project state: Only handle linear moves
- Goal: Calculate arc paths for G2/G3!

DEPENDENCIES COMPLETED:

- GC-061: Trigonometry - angle calculations
- GC-055: Vector3D - 3D positions

WHAT TO BUILD:
After learning arc calculations:

- Parse G2 (clockwise arc) and G3 (counter-clockwise)
- Extract I, J arc center offsets
- Calculate arc radius
- Calculate arc length
- Sample points along arc

EXAMPLE:

```cpp
struct Arc {
    Vector3D start;
    Vector3D end;
    Vector3D center;  // From I, J, K offsets
    double radius;
    bool clockwise;  // G2 = true, G3 = false

    double calculateLength() const {
        // Angle swept by arc
        Vector2D toStart(start.x - center.x, start.y - center.y);
        Vector2D toEnd(end.x - center.x, end.y - center.y);

        double angle = angleBetween(toStart, toEnd);

        // Arc length = radius * angle
        return radius * angle;
    }

    vector<Vector3D> samplePoints(int numSamples) const {
        vector<Vector3D> points;
        // Generate points along arc
        // Useful for visualization!
        return points;
    }
};

// Parse G2: "G2 X10 Y20 I5 J0"
// I,J = offset from current position to arc center
```

NOTE: Now you can handle ALL G-code move types!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-063: Inheritance Basics

```

Teach me Inheritance - Base and Derived Classes, Protected Members, Extending Functionality using C++.

PROJECT CONTEXT:

- Step: GC-063 of 200 (LAST OF SPRINT 5)
- Sprint: Sprint 5 - More Math & Algorithms
- Completed: GC-001 through GC-062
- Understands: Classes, methods
- Current project state: Separate classes for each command type
- Goal: Class hierarchy for commands

DEPENDENCIES COMPLETED:

- GC-044: Classes - foundation

WHAT TO BUILD:
After learning inheritance:

- Create base GCodeCommand class
- Derive LinearMove, ArcMove classes
- Override virtual methods
- Polymorphism introduction

EXAMPLE:

```cpp
// Base class
class GCodeCommand {
protected:
    std::string type_;
    Vector3D start_, end_;

public:
    GCodeCommand(const std::string& type) : type_(type) {}
    virtual ~GCodeCommand() = default;

    // Virtual method - can be overridden
    virtual double calculateLength() const = 0;  // Pure virtual

    std::string getType() const { return type_; }
};

// Derived class
class LinearMove : public GCodeCommand {
public:
    LinearMove() : GCodeCommand("G1") {}

    double calculateLength() const override {
        return (end_ - start_).magnitude();
    }
};

class ArcMove : public GCodeCommand {
private:
    Vector3D center_;
    double radius_;

public:
    ArcMove() : GCodeCommand("G2") {}

    double calculateLength() const override {
        // Arc length calculation
        double angle = calculateAngle();
        return radius_ * angle;
    }
};

// Usage:
vector<unique_ptr<GCodeCommand>> commands;
commands.push_back(make_unique<LinearMove>());
commands.push_back(make_unique<ArcMove>());

for (const auto& cmd : commands) {
    cout << cmd->calculateLength() << endl;  // Polymorphism!
}
```

NOTE: OOP for complex systems!

DELIVERABLE: Complete math library for G-code analysis!

NEXT SPRINT: Sprint 6 - First OpenGL & Visualization

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 6: FIRST OPENGL VISUALIZATION (10 topics)

### GC-064: OpenGL Environment Setup

```

Teach me OpenGL Setup - GLFW, GLAD, Opening a Window using C++ and OpenGL.

PROJECT CONTEXT:

- Step: GC-064 of 200 (FIRST OF SPRINT 6)
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-063
- Understands: C++, vectors, math
- Current project state: Text-only output
- Goal: VISUALIZE G-code toolpaths! (EXCITING!)

DEPENDENCIES COMPLETED:

- GC-052: Vector2D/3D - have math foundation
- GC-033: CMake - will need for OpenGL libraries

WHAT TO BUILD:
After learning OpenGL setup:

- Install GLFW and GLAD
- Open first window
- Clear screen with color
- Window stays open until closed

CMakeLists.txt:

```cmake
find_package(glfw3 REQUIRED)
add_executable(viewer viewer.cpp)
target_link_libraries(viewer glfw GL)
```

EXAMPLE:

```cpp
#include <GLFW/glfw3.h>

int main() {
    // Initialize GLFW
    glfwInit();

    // Create window
    GLFWwindow* window = glfwCreateWindow(800, 600, "G-code Viewer", NULL, NULL);
    glfwMakeContextCurrent(window);

    // Main loop
    while (!glfwWindowShouldClose(window)) {
        glClearColor(0.1f, 0.1f, 0.1f, 1.0f);  // Dark gray
        glClear(GL_COLOR_BUFFER_BIT);

        glfwSwapBuffers(window);
        glfwPollEvents();
    }

    glfwTerminate();
    return 0;
}
```

NOTE: First step toward visualization!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-065: Drawing Your First Triangle

```

Teach me OpenGL Basics - Vertices, VBO, VAO, Drawing Primitives using OpenGL.

PROJECT CONTEXT:

- Step: GC-065 of 200
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-064
- Understands: OpenGL window
- Current project state: Empty window
- Goal: Draw something!

DEPENDENCIES COMPLETED:

- GC-064: OpenGL setup - have window

WHAT TO BUILD:
After learning OpenGL drawing:

- Define triangle vertices
- Create Vertex Buffer Object (VBO)
- Create Vertex Array Object (VAO)
- Draw triangle!

EXAMPLE:

```cpp
// Triangle vertices (x, y, z)
float vertices[] = {
    -0.5f, -0.5f, 0.0f,  // Bottom left
     0.5f, -0.5f, 0.0f,  // Bottom right
     0.0f,  0.5f, 0.0f   // Top
};

// Create VBO
unsigned int VBO;
glGenBuffers(1, &VBO);
glBindBuffer(GL_ARRAY_BUFFER, VBO);
glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

// Create VAO
unsigned int VAO;
glGenVertexArrays(1, &VAO);
glBindVertexArray(VAO);
glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
glEnableVertexAttribArray(0);

// Draw
glDrawArrays(GL_TRIANGLES, 0, 3);
```

NOTE: First graphics on screen!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-066: Shaders Introduction

```

Teach me Shaders - Vertex Shader, Fragment Shader, GLSL Basics using OpenGL and GLSL.

PROJECT CONTEXT:

- Step: GC-066 of 200
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-065
- Understands: Drawing triangle
- Current project state: Triangle with no color control
- Goal: Control colors and transformations

DEPENDENCIES COMPLETED:

- GC-065: Drawing basics - have geometry

WHAT TO BUILD:
After learning shaders:

- Write vertex shader (GLSL)
- Write fragment shader (GLSL)
- Compile and link shaders
- Use shader program

VERTEX SHADER (vertex.glsl):

```glsl
#version 330 core
layout (location = 0) in vec3 aPos;

void main() {
    gl_Position = vec4(aPos, 1.0);
}
```

FRAGMENT SHADER (fragment.glsl):

```glsl
#version 330 core
out vec4 FragColor;

void main() {
    FragColor = vec4(1.0, 0.5, 0.2, 1.0);  // Orange color
}
```

C++ CODE:

```cpp
// Compile shaders
unsigned int vertexShader = glCreateShader(GL_VERTEX_SHADER);
glShaderSource(vertexShader, 1, &vertexShaderSource, NULL);
glCompileShader(vertexShader);

unsigned int fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
glShaderSource(fragmentShader, 1, &fragmentShaderSource, NULL);
glCompileShader(fragmentShader);

// Link program
unsigned int shaderProgram = glCreateProgram();
glAttachShader(shaderProgram, vertexShader);
glAttachShader(shaderProgram, fragmentShader);
glLinkProgram(shaderProgram);

// Use
glUseProgram(shaderProgram);
```

NOTE: Shaders run on GPU!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-067: Drawing Lines for Toolpaths

```

Teach me Line Rendering - GL_LINES, Line Strips, Visualizing G-code using OpenGL.

PROJECT CONTEXT:

- Step: GC-067 of 200
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-066
- Understands: OpenGL drawing, shaders
- Current project state: Can draw triangles
- Goal: Draw G-code toolpaths!

DEPENDENCIES COMPLETED:

- GC-065: Drawing primitives - can draw
- GC-029: Parser - have G-code commands to visualize

WHAT TO BUILD:
After learning line rendering:

- Draw lines with GL_LINES
- Draw connected paths with GL_LINE_STRIP
- Convert G-code to line vertices
- See your toolpath!

EXAMPLE:

```cpp
// Convert G-code commands to vertices
vector<float> vertices;
for (const auto& cmd : commands) {
    vertices.push_back(cmd.end.x);
    vertices.push_back(cmd.end.y);
    vertices.push_back(cmd.end.z);
}

// Upload to GPU
glBufferData(GL_ARRAY_BUFFER,
             vertices.size() * sizeof(float),
             vertices.data(),
             GL_STATIC_DRAW);

// Draw as connected line strip
glDrawArrays(GL_LINE_STRIP, 0, vertices.size() / 3);
```

RESULT: See your G-code toolpath visualized!

NOTE: Practical visualization!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-068: Colors and Uniforms

```

Teach me Uniforms - Passing Data to Shaders, Changing Colors, Dynamic Updates using OpenGL and GLSL.

PROJECT CONTEXT:

- Step: GC-068 of 200
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-067
- Understands: Shaders, line rendering
- Current project state: All lines same color
- Goal: Different colors for rapid vs feed moves!

DEPENDENCIES COMPLETED:

- GC-066: Shaders - shader programming
- GC-067: Line rendering - lines to color

WHAT TO BUILD:
After learning uniforms:

- Pass color to shader
- Different colors for G0 (rapid) vs G1 (feed)
- Change colors dynamically

FRAGMENT SHADER:

```glsl
#version 330 core
out vec4 FragColor;
uniform vec4 lineColor;  // Uniform variable!

void main() {
    FragColor = lineColor;
}
```

C++ CODE:

```cpp
// Get uniform location
int colorLocation = glGetUniformLocation(shaderProgram, "lineColor");

// Draw rapid moves (G0) in blue
glUniform4f(colorLocation, 0.0f, 0.5f, 1.0f, 1.0f);  // Blue
glDrawArrays(GL_LINE_STRIP, 0, rapidMoveCount);

// Draw feed moves (G1) in green
glUniform4f(colorLocation, 0.0f, 1.0f, 0.0f, 1.0f);  // Green
glDrawArrays(GL_LINE_STRIP, rapidMoveCount, feedMoveCount);
```

NOTE: Now you can distinguish move types visually!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-069: Matrix Math - 2D Transformations

```

Teach me 2D Matrix Transformations - Translation, Rotation, Scaling Matrices using C++ and linear algebra.

PROJECT CONTEXT:

- Step: GC-069 of 200
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-068
- Understands: 2D vectors, basic math
- Current project state: Fixed view of toolpath
- Goal: Transform view (pan, zoom, rotate)

DEPENDENCIES COMPLETED:

- GC-052: Vector2D - vector math
- GC-053: Operator overloading - math operations

WHAT TO BUILD:
After learning 2D matrices:

- Create Mat3 class (3x3 for 2D)
- Translation matrix
- Rotation matrix
- Scaling matrix
- Combine transformations

EXAMPLE:

```cpp
class Mat3 {
public:
    float m[9];  // 3x3 matrix

    // Identity matrix
    static Mat3 identity() {
        Mat3 result;
        result.m[0] = 1; result.m[1] = 0; result.m[2] = 0;
        result.m[3] = 0; result.m[4] = 1; result.m[5] = 0;
        result.m[6] = 0; result.m[7] = 0; result.m[8] = 1;
        return result;
    }

    // Translation
    static Mat3 translate(float x, float y) {
        Mat3 result = identity();
        result.m[2] = x;  // Translate X
        result.m[5] = y;  // Translate Y
        return result;
    }

    // Scaling
    static Mat3 scale(float sx, float sy) {
        Mat3 result = identity();
        result.m[0] = sx;  // Scale X
        result.m[4] = sy;  // Scale Y
        return result;
    }

    // Rotation (angle in radians)
    static Mat3 rotate(float angle) {
        Mat3 result = identity();
        float c = cos(angle);
        float s = sin(angle);
        result.m[0] = c;  result.m[1] = -s;
        result.m[3] = s;  result.m[4] = c;
        return result;
    }

    // Matrix multiplication
    Mat3 operator*(const Mat3& other) const {
        // Matrix multiply implementation
    }
};

// Usage:
Mat3 transform = Mat3::translate(10, 5) *
                 Mat3::rotate(PI/4) *
                 Mat3::scale(2, 2);
```

NOTE: Math foundation for graphics!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-070: 3D Transformations and Matrices

```

Teach me 3D Matrix Transformations - 4x4 Matrices, Homogeneous Coordinates, 3D Transforms using C++ and linear algebra.

PROJECT CONTEXT:

- Step: GC-070 of 200
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-069
- Understands: 2D matrices
- Current project state: Only 2D transformations
- Goal: Full 3D manipulation!

DEPENDENCIES COMPLETED:

- GC-069: 2D matrices - extending to 3D
- GC-055: Vector3D - 3D coordinates

WHAT TO BUILD:
After learning 3D matrices:

- Create Mat4 class (4x4)
- 3D translation, rotation, scaling
- Understand homogeneous coordinates
- Transform 3D toolpaths

EXAMPLE:

```cpp
class Mat4 {
public:
    float m[16];  // 4x4 matrix (column-major)

    static Mat4 identity() {
        Mat4 result;
        // Set diagonal to 1, rest to 0
        return result;
    }

    static Mat4 translate(float x, float y, float z) {
        Mat4 result = identity();
        result.m[12] = x;
        result.m[13] = y;
        result.m[14] = z;
        return result;
    }

    static Mat4 rotateX(float angle) {
        Mat4 result = identity();
        float c = cos(angle);
        float s = sin(angle);
        result.m[5] = c;   result.m[6] = -s;
        result.m[9] = s;   result.m[10] = c;
        return result;
    }

    static Mat4 rotateY(float angle) {
        // Similar for Y axis
    }

    static Mat4 rotateZ(float angle) {
        // Similar for Z axis
    }

    static Mat4 scale(float sx, float sy, float sz) {
        Mat4 result = identity();
        result.m[0] = sx;
        result.m[5] = sy;
        result.m[10] = sz;
        return result;
    }
};
```

NOTE: Essential for 3D graphics!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-071: Camera and View Matrix

```

Teach me Camera Systems - View Matrix, Look-At, Positioning Camera using OpenGL and linear algebra.

PROJECT CONTEXT:

- Step: GC-071 of 200
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-070
- Understands: 3D matrices
- Current project state: Fixed view
- Goal: Move camera around toolpath!

DEPENDENCIES COMPLETED:

- GC-070: 3D matrices - transformations
- GC-055: Vector3D - camera position/direction

WHAT TO BUILD:
After learning camera:

- Create view matrix (look-at)
- Position camera in world
- Point camera at toolpath
- Move camera with keyboard

EXAMPLE:

```cpp
Mat4 lookAt(const Vector3D& eye,
            const Vector3D& target,
            const Vector3D& up) {
    Vector3D forward = (target - eye).normalized();
    Vector3D right = forward.cross(up).normalized();
    Vector3D newUp = right.cross(forward);

    Mat4 result = Mat4::identity();
    // Fill in view matrix
    // Transforms world to camera space
    return result;
}

// Usage:
Vector3D cameraPos(0, 0, 100);    // Camera position
Vector3D lookAtPos(0, 0, 0);       // Looking at origin
Vector3D upDir(0, 1, 0);           // Y is up

Mat4 view = lookAt(cameraPos, lookAtPos, upDir);

// Send to shader
glUniformMatrix4fv(viewLocation, 1, GL_FALSE, view.m);
```

NOTE: Now you can orbit around your toolpath!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-072: Projection Matrix

```

Teach me Projection - Perspective vs Orthographic, Projection Matrix, Field of View using OpenGL and linear algebra.

PROJECT CONTEXT:

- Step: GC-072 of 200
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-071
- Understands: View matrix
- Current project state: No depth perception
- Goal: Realistic 3D view!

DEPENDENCIES COMPLETED:

- GC-071: Camera - view transformation
- GC-070: 3D matrices - matrix math

WHAT TO BUILD:
After learning projection:

- Create perspective projection
- Create orthographic projection
- Understand near/far planes
- FOV (field of view)

EXAMPLE:

```cpp
Mat4 perspective(float fov, float aspect, float near, float far) {
    float tanHalfFov = tan(fov / 2.0f);

    Mat4 result = Mat4::identity();
    result.m[0] = 1.0f / (aspect * tanHalfFov);
    result.m[5] = 1.0f / tanHalfFov;
    result.m[10] = -(far + near) / (far - near);
    result.m[11] = -1.0f;
    result.m[14] = -(2.0f * far * near) / (far - near);
    result.m[15] = 0.0f;
    return result;
}

Mat4 orthographic(float left, float right,
                  float bottom, float top,
                  float near, float far) {
    Mat4 result = Mat4::identity();
    result.m[0] = 2.0f / (right - left);
    result.m[5] = 2.0f / (top - bottom);
    result.m[10] = -2.0f / (far - near);
    result.m[12] = -(right + left) / (right - left);
    result.m[13] = -(top + bottom) / (top - bottom);
    result.m[14] = -(far + near) / (far - near);
    return result;
}

// Usage:
Mat4 projection = perspective(45.0f * PI/180.0f,  // 45° FOV
                             800.0f / 600.0f,      // Aspect ratio
                             0.1f,                 // Near plane
                             1000.0f);             // Far plane
```

NOTE: Now objects farther away look smaller!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-073: Complete 3D G-code Viewer

```

Teach me Building Complete Visualization - MVP Matrix, Interactive Controls, Complete Viewer using OpenGL and C++.

PROJECT CONTEXT:

- Step: GC-073 of 200 (LAST OF SPRINT 6)
- Sprint: Sprint 6 - First OpenGL
- Completed: GC-001 through GC-072
- Understands: All OpenGL basics
- Current project state: Have all pieces
- Goal: Complete interactive G-code viewer!

DEPENDENCIES COMPLETED:

- All Sprint 6 topics

WHAT TO BUILD:
After learning complete visualization:

- Combine Model-View-Projection (MVP)
- Add keyboard/mouse controls
- Pan, rotate, zoom
- Different colors for different move types

COMPLETE VIEWER:

```cpp
class GCodeViewer {
private:
    GLFWwindow* window_;
    vector<GCodeCommand> commands_;

    Vector3D cameraPos_;
    float cameraDistance_;
    float cameraAngleX_, cameraAngleY_;

public:
    void render() {
        // Model matrix (world position)
        Mat4 model = Mat4::identity();

        // View matrix (camera)
        Mat4 view = lookAt(cameraPos_, Vector3D(0,0,0), Vector3D(0,1,0));

        // Projection matrix
        Mat4 projection = perspective(45.0f, aspectRatio, 0.1f, 1000.0f);

        // Combined MVP
        Mat4 mvp = projection * view * model;

        // Send to shader
        glUniformMatrix4fv(mvpLocation, 1, GL_FALSE, mvp.m);

        // Draw toolpath
        drawToolpath();
    }

    void handleInput() {
        // W/S: zoom
        // A/D: rotate Y
        // Q/E: rotate X
        // Arrow keys: pan
    }
};
```

VERTEX SHADER:

```glsl
#version 330 core
layout (location = 0) in vec3 aPos;
uniform mat4 mvp;

void main() {
    gl_Position = mvp * vec4(aPos, 1.0);
}
```

DELIVERABLE: Complete interactive 3D G-code visualizer!

- Parse G-code
- Visualize toolpaths in 3D
- Interactive camera controls
- Color-coded move types

NEXT SPRINT: Sprint 7 - Smart Pointers & Modern C++

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 7: MODERN C++ & SMART POINTERS (10 topics)

### GC-074: Smart Pointers - unique_ptr

```

Teach me unique_ptr - Exclusive Ownership, RAII, Moving Ownership, Memory Safety using C++.

PROJECT CONTEXT:

- Step: GC-074 of 200 (FIRST OF SPRINT 7)
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-073 (have 3D viewer!)
- Understands: Classes, constructors, destructors
- Current project state: No dynamic memory yet
- Goal: Safe memory management BEFORE learning raw pointers!

DEPENDENCIES COMPLETED:

- GC-045: Constructors - object creation
- GC-063: Inheritance - polymorphism use case

WHAT TO BUILD:
After learning unique_ptr:

- Create unique_ptr for objects
- Automatic cleanup
- Move semantics with unique_ptr
- Store polymorphic commands

EXAMPLE:

```cpp
#include <memory>

// Instead of raw pointers (DON'T DO THIS YET):
// GCodeCommand* cmd = new GCodeCommand();  // Manual delete needed!

// Use unique_ptr (SAFE):
unique_ptr<GCodeCommand> cmd = make_unique<GCodeCommand>("G0");
// Automatically deleted when out of scope!

// Vector of unique_ptr for polymorphism
vector<unique_ptr<GCodeCommand>> commands;
commands.push_back(make_unique<LinearMove>());
commands.push_back(make_unique<ArcMove>());

// Can't copy unique_ptr, must move
unique_ptr<GCodeCommand> cmd2 = std::move(cmd);  // Ownership transferred

// Use through pointer
cout << cmd2->getType() << endl;
```

WHY LEARN THIS FIRST:

- Smart pointers are SAFER than raw pointers
- Learn good habits first
- Will understand raw pointers better later

NOTE: Modern C++ - safe memory management!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-075: Smart Pointers - shared_ptr and weak_ptr

```

Teach me shared_ptr - Shared Ownership, Reference Counting, Circular References, weak_ptr using C++.

PROJECT CONTEXT:

- Step: GC-075 of 200
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-074
- Understands: unique_ptr, exclusive ownership
- Current project state: Only exclusive ownership
- Goal: Multiple owners for shared data

DEPENDENCIES COMPLETED:

- GC-074: unique_ptr - smart pointer basics

WHAT TO BUILD:
After learning shared_ptr:

- Multiple owners with shared_ptr
- Reference counting
- Avoid circular references with weak_ptr
- Share parsed data between modules

EXAMPLE:

```cpp
// shared_ptr - multiple owners
shared_ptr<GCodeParser> parser = make_shared<GCodeParser>("part.gcode");

// Both viewer and analyzer share same parser
GCodeViewer viewer(parser);    // Reference count = 2
GCodeAnalyzer analyzer(parser); // Reference count = 3

// When all go out of scope, automatically deleted

// Circular reference problem (BAD):
struct Node {
    shared_ptr<Node> next;  // If next points back, never deleted!
};

// Solution with weak_ptr:
struct Node {
    shared_ptr<Node> next;
    weak_ptr<Node> prev;  // Doesn't increase reference count
};

// Converting weak_ptr to shared_ptr
weak_ptr<GCodeCommand> weak = cmd;
if (auto strong = weak.lock()) {  // Get shared_ptr if still valid
    cout << strong->getType() << endl;
}
```

WHEN TO USE:

- unique_ptr: Single owner (95% of cases)
- shared_ptr: Multiple owners need access
- weak_ptr: Break circular references

NOTE: Reference counting overhead - use wisely!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-076: Move Semantics

```

Teach me Move Semantics - Rvalue References, std::move, Move Constructors, Perfect Forwarding Intro using C++.

PROJECT CONTEXT:

- Step: GC-076 of 200
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-075
- Understands: Copying objects, unique_ptr
- Current project state: Expensive copies
- Goal: Efficient resource transfer

DEPENDENCIES COMPLETED:

- GC-045: Constructors - extending to move constructors
- GC-074: unique_ptr - uses move semantics

WHAT TO BUILD:
After learning move semantics:

- Move constructor
- Move assignment operator
- std::move usage
- Return value optimization

EXAMPLE:

```cpp
class GCodeParser {
private:
    vector<GCodeCommand> commands_;
    string filename_;

public:
    // Copy constructor (expensive)
    GCodeParser(const GCodeParser& other)
        : commands_(other.commands_),  // Deep copy!
          filename_(other.filename_) {
        cout << "Copying parser (expensive!)" << endl;
    }

    // Move constructor (cheap)
    GCodeParser(GCodeParser&& other) noexcept
        : commands_(std::move(other.commands_)),  // Just move pointers
          filename_(std::move(other.filename_)) {
        cout << "Moving parser (cheap!)" << endl;
    }

    // Move assignment
    GCodeParser& operator=(GCodeParser&& other) noexcept {
        commands_ = std::move(other.commands_);
        filename_ = std::move(other.filename_);
        return *this;
    }
};

// Usage:
GCodeParser parser1("file.gcode");
GCodeParser parser2 = std::move(parser1);  // Move, not copy!
// parser1 is now in "moved-from" state (still valid but empty)

// Return value optimization
GCodeParser createParser() {
    GCodeParser p("file.gcode");
    return p;  // Move, not copy (automatic!)
}
```

NOTE: Major C++11 feature - massive performance improvement!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-077: Exception Handling

```

Teach me Exception Handling - try/catch, throw, Exception Types, Exception Safety using C++.

PROJECT CONTEXT:

- Step: GC-077 of 200
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-076
- Understands: Error handling with return codes
- Current project state: Manual error checking
- Goal: Robust error handling

DEPENDENCIES COMPLETED:

- GC-009: Basic error handling - extending to exceptions

WHAT TO BUILD:
After learning exceptions:

- Throw exceptions
- Catch exceptions
- Standard exception types
- Exception-safe code with RAII

EXAMPLE:

```cpp
#include <stdexcept>

class GCodeParser {
public:
    void parse(const string& filename) {
        ifstream file(filename);
        if (!file) {
            throw runtime_error("Could not open file: " + filename);
        }

        string line;
        int lineNum = 0;
        while (getline(file, line)) {
            lineNum++;
            try {
                auto cmd = parseCommand(line);
                commands_.push_back(cmd);
            } catch (const invalid_argument& e) {
                // Re-throw with more context
                throw runtime_error("Parse error at line " +
                                  to_string(lineNum) + ": " + e.what());
            }
        }
    }
};

// Usage:
try {
    GCodeParser parser;
    parser.parse("part.gcode");
} catch (const runtime_error& e) {
    cerr << "Error: " << e.what() << endl;
} catch (const exception& e) {
    cerr << "Unknown error: " << e.what() << endl;
}

// Exception-safe with RAII:
void processFile(const string& filename) {
    unique_ptr<GCodeParser> parser = make_unique<GCodeParser>();
    parser->parse(filename);  // If throws, parser still cleaned up!
}
```

EXCEPTION SAFETY LEVELS:

- No-throw: Never throws
- Strong: Either succeeds or no effect
- Basic: Valid state, but changed
- No guarantee: May leak resources (BAD)

NOTE: Modern error handling!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-078: RAII Pattern Deep Dive

```

Teach me RAII - Resource Acquisition Is Initialization, Automatic Cleanup, Resource Management using C++.

PROJECT CONTEXT:

- Step: GC-078 of 200
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-077
- Understands: Constructors, destructors, smart pointers
- Current project state: Using RAII without knowing it
- Goal: Understand THE core C++ pattern

DEPENDENCIES COMPLETED:

- GC-045: Constructors - resource acquisition
- GC-074: Smart pointers - RAII examples
- GC-077: Exceptions - why RAII matters

WHAT TO BUILD:
After learning RAII:

- File handle wrapper
- Lock guard implementation
- Custom RAII classes
- Understand why C++ is different

EXAMPLE:

```cpp
// Bad - Manual resource management
void badExample() {
    FILE* file = fopen("data.txt", "r");
    // ... use file ...
    if (error) {
        return;  // LEAK! Forgot to close
    }
    fclose(file);  // Must remember
}

// Good - RAII
class FileHandle {
private:
    FILE* file_;

public:
    FileHandle(const string& filename) {
        file_ = fopen(filename.c_str(), "r");
        if (!file_) throw runtime_error("Can't open file");
    }

    ~FileHandle() {
        if (file_) fclose(file_);  // Automatic cleanup!
    }

    // Prevent copying
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;

    FILE* get() { return file_; }
};

// Usage:
void goodExample() {
    FileHandle file("data.txt");  // Opens in constructor
    // ... use file.get() ...
    if (error) {
        return;  // File automatically closed by destructor!
    }
}  // File closed here too

// Custom lock guard
class MutexLock {
private:
    mutex& mtx_;
public:
    MutexLock(mutex& m) : mtx_(m) { mtx_.lock(); }
    ~MutexLock() { mtx_.unlock(); }  // Automatic unlock
};
```

RAII PRINCIPLE:

- Acquire resource in constructor
- Release resource in destructor
- Automatic cleanup via destructors
- Exception-safe

NOTE: THE defining pattern of modern C++!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-079: Templates - Function Templates

```

Teach me Function Templates - Generic Functions, Template Parameters, Type Deduction using C++.

PROJECT CONTEXT:

- Step: GC-079 of 200
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-078
- Understands: Functions, types
- Current project state: Duplicate functions for different types
- Goal: Generic programming!

DEPENDENCIES COMPLETED:

- GC-004: Functions - extending to templates
- GC-012: auto - type deduction concepts

WHAT TO BUILD:
After learning function templates:

- Write generic max function
- Type deduction
- Template specialization intro
- Generic distance function

EXAMPLE:

```cpp
// Without templates (BAD - duplication):
int max_int(int a, int b) { return a > b ? a : b; }
double max_double(double a, double b) { return a > b ? a : b; }

// With template (GOOD - generic):
template<typename T>
T max(T a, T b) {
    return a > b ? a : b;
}

// Usage:
int i = max(5, 10);           // T = int
double d = max(3.14, 2.71);   // T = double
string s = max("abc", "xyz"); // T = string

// More complex example - generic print
template<typename T>
void print(const vector<T>& vec) {
    for (const auto& item : vec) {
        cout << item << " ";
    }
    cout << endl;
}

// Usage:
vector<int> numbers = {1, 2, 3};
print(numbers);  // Works!

vector<string> words = {"hello", "world"};
print(words);  // Also works!

// Generic distance
template<typename Vec>
double distance(const Vec& a, const Vec& b) {
    return (b - a).magnitude();
}

// Works with Vector2D, Vector3D, or any type with - and magnitude()!
```

NOTE: Write once, use for any type!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-080: Templates - Class Templates

```

Teach me Class Templates - Generic Classes, Template Instantiation, Container Classes using C++.

PROJECT CONTEXT:

- Step: GC-080 of 200
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-079
- Understands: Function templates, classes
- Current project state: Function templates only
- Goal: Generic classes

DEPENDENCIES COMPLETED:

- GC-079: Function templates - template basics
- GC-044: Classes - classes to make generic

WHAT TO BUILD:
After learning class templates:

- Generic container class
- Template class instantiation
- Understand how vector<T> works
- Create generic Buffer class

EXAMPLE:

```cpp
// Generic buffer class
template<typename T>
class Buffer {
private:
    T* data_;
    size_t size_;

public:
    Buffer(size_t size) : size_(size) {
        data_ = new T[size];
    }

    ~Buffer() {
        delete[] data_;
    }

    T& operator[](size_t index) {
        return data_[index];
    }

    size_t size() const { return size_; }
};

// Usage:
Buffer<int> intBuffer(100);      // T = int
intBuffer[0] = 42;

Buffer<double> doubleBuffer(50); // T = double
doubleBuffer[0] = 3.14;

Buffer<Vector3D> vectorBuffer(10); // T = Vector3D
vectorBuffer[0] = Vector3D(1, 2, 3);

// Generic pair class
template<typename T1, typename T2>
class Pair {
public:
    T1 first;
    T2 second;

    Pair(const T1& f, const T2& s) : first(f), second(s) {}
};

// Usage:
Pair<string, int> nameAge("Alice", 30);
Pair<double, double> coordinates(10.5, 20.3);
```

NOTE: How vector<T>, map<K,V> work internally!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-081: std::optional - Handling Optional Values

```

Teach me std::optional - Representing Optional Data, has_value, value_or using C++17.

PROJECT CONTEXT:

- Step: GC-081 of 200
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-080
- Understands: Templates, types
- Current project state: Using magic values (-1, "", nullptr) for "no value"
- Goal: Type-safe optional values

DEPENDENCIES COMPLETED:

- GC-080: Class templates - optional is a template

WHAT TO BUILD:
After learning optional:

- Return optional from functions
- Check if value exists
- Get value or default
- Use in G-code parsing

EXAMPLE:

```cpp
#include <optional>

class GCodeCommand {
public:
    string type;
    map<char, double> params;

    // Z coordinate might not exist
    optional<double> getZ() const {
        auto it = params.find('Z');
        if (it != params.end()) {
            return it->second;  // Has value
        }
        return nullopt;  // No value
    }
};

// Usage:
GCodeCommand cmd;
cmd.params['X'] = 10;
cmd.params['Y'] = 20;
// No Z!

optional<double> z = cmd.getZ();
if (z.has_value()) {
    cout << "Z = " << z.value() << endl;
} else {
    cout << "No Z coordinate" << endl;
}

// Or more concisely:
double zValue = cmd.getZ().value_or(0.0);  // Default to 0 if not present

// Better than:
// double z = -999.0;  // Magic value (BAD!)
// if (z != -999.0) { ... }

// Function returning optional
optional<GCodeCommand> findCommand(const vector<GCodeCommand>& cmds,
                                   const string& type) {
    for (const auto& cmd : cmds) {
        if (cmd.type == type) {
            return cmd;  // Found it
        }
    }
    return nullopt;  // Not found
}
```

NOTE: Type-safe "maybe" values!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-082: std::variant and std::visit

```

Teach me std::variant - Type-Safe Unions, std::visit, Sum Types using C++17.

PROJECT CONTEXT:

- Step: GC-082 of 200
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-081
- Understands: Templates, optional
- Current project state: Inheritance for variants
- Goal: Alternative to inheritance

DEPENDENCIES COMPLETED:

- GC-081: optional - modern C++ types
- GC-063: Inheritance - alternative approach

WHAT TO BUILD:
After learning variant:

- Store one of several types
- Type-safe union
- Visit variant with lambda
- G-code parameter types

EXAMPLE:

```cpp
#include <variant>

// Parameter can be double, string, or int
using GCodeParam = variant<double, string, int>;

class GCodeCommand {
public:
    string type;
    map<char, GCodeParam> params;
};

// Usage:
GCodeCommand cmd;
cmd.params['X'] = 10.5;      // double
cmd.params['T'] = "tool1";   // string
cmd.params['S'] = 1000;      // int

// Get value
double x = get<double>(cmd.params['X']);

// Check type
if (holds_alternative<double>(cmd.params['X'])) {
    cout << "X is a double" << endl;
}

// Visit with lambda
visit([](auto&& value) {
    cout << "Value: " << value << endl;
}, cmd.params['X']);

// More complex visitor
struct ParamPrinter {
    void operator()(double d) { cout << "Double: " << d << endl; }
    void operator()(const string& s) { cout << "String: " << s << endl; }
    void operator()(int i) { cout << "Int: " << i << endl; }
};

visit(ParamPrinter{}, cmd.params['X']);
```

VARIANT VS INHERITANCE:

- variant: Value semantics, all types known
- Inheritance: Reference semantics, open for extension

NOTE: Functional programming in C++!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-083: Ranges and Views (C++20 Preview)

```

Teach me C++20 Ranges - Range Adaptors, Views, Lazy Evaluation using C++20.

PROJECT CONTEXT:

- Step: GC-083 of 200 (LAST OF SPRINT 7)
- Sprint: Sprint 7 - Modern C++ & Smart Pointers
- Completed: GC-001 through GC-082
- Understands: STL algorithms, lambdas
- Current project state: Manual iteration and filtering
- Goal: Modern, composable data processing

DEPENDENCIES COMPLETED:

- GC-058: STL algorithms - extending with ranges
- GC-057: Lambdas - predicates for ranges

WHAT TO BUILD:
After learning ranges:

- Use range views
- Compose transformations
- Lazy evaluation
- Pipeline data processing

EXAMPLE:

```cpp
#include <ranges>
namespace views = std::ranges::views;

vector<GCodeCommand> commands;

// Old way (verbose):
vector<GCodeCommand> rapidMoves;
for (const auto& cmd : commands) {
    if (cmd.type == "G0") {
        rapidMoves.push_back(cmd);
    }
}

// New way with ranges (concise):
auto rapidMoves = commands
    | views::filter([](const auto& cmd) { return cmd.type == "G0"; });

// Compose multiple operations
auto result = commands
    | views::filter([](const auto& cmd) { return cmd.type == "G1"; })
    | views::transform([](const auto& cmd) { return cmd.getDistance(); })
    | views::take(10);  // First 10

// Lazy evaluation - nothing computed until accessed
for (double dist : result) {
    cout << dist << endl;
}

// More complex pipeline
auto longRapidMoves = commands
    | views::filter([](const auto& cmd) {
        return cmd.type == "G0" && cmd.getDistance() > 100;
      })
    | views::transform([](const auto& cmd) {
        return Pair{cmd.getDistance(), cmd.end};
      });
```

NOTE: Modern, functional C++ programming!

DELIVERABLE: Complete modern C++ skillset!

- Smart pointers (no memory leaks!)
- Move semantics (fast!)
- Exceptions (robust!)
- RAII (safe!)
- Templates (generic!)
- Modern types (optional, variant)
- Ranges (expressive!)

NEXT SPRINT: Sprint 8 - Threading & Concurrency

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 8: THREADING & CONCURRENCY (12 topics)

### GC-084: Concurrency Concepts

```

Teach me Concurrency Fundamentals - Threads vs Processes, Parallelism, When to Use Concurrency using Concepts.

PROJECT CONTEXT:

- Step: GC-084 of 200 (FIRST OF SPRINT 8)
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-083
- Understands: Sequential programming
- Current project state: Single-threaded
- Goal: Understand parallel execution

DEPENDENCIES COMPLETED:

- None (conceptual foundation)

WHAT TO BUILD:
After learning concepts:

- Understand threads vs processes
- When parallelism helps
- Amdahl's Law
- Apply to G-code processing

CONCEPTS:

```
THREAD VS PROCESS:
- Process: Separate memory space, heavy
- Thread: Shared memory, lighter

WHEN TO USE PARALLELISM:
- Independent tasks (e.g., analyze multiple files)
- Large data processing (e.g., calculate distance for all segments)
- I/O operations (e.g., load file while rendering)

AMDAHL'S LAW:
If 50% of code can be parallelized:
- 2 cores: 1.33x speedup
- 4 cores: 1.60x speedup
- 8 cores: 1.78x speedup
Sequential parts limit speedup!

G-CODE EXAMPLE:
Sequential: Parse → Analyze → Render (slow)
Parallel:
  Thread 1: Parse file
  Thread 2: Calculate distances (as parsed)
  Thread 3: Render (as calculated)
```

NOTE: Understanding before coding!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-085: std::thread Basics

```

Teach me std::thread - Creating Threads, Joining Threads, Thread Functions using C++.

PROJECT CONTEXT:

- Step: GC-085 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-084
- Understands: Concurrency concepts
- Current project state: Single-threaded
- Goal: Run code in parallel!

DEPENDENCIES COMPLETED:

- GC-084: Concurrency concepts - understand threads

WHAT TO BUILD:
After learning std::thread:

- Create thread
- Join thread
- Pass arguments to thread
- Thread with lambda

EXAMPLE:

```cpp
#include <thread>
#include <iostream>

// Function to run in thread
void processSegment(int start, int end) {
    cout << "Processing " << start << " to " << end << endl;
    // ... do work ...
}

int main() {
    // Create thread
    thread t1(processSegment, 0, 100);
    thread t2(processSegment, 100, 200);

    // Main thread continues here
    cout << "Started threads" << endl;

    // Wait for threads to finish
    t1.join();
    t2.join();

    cout << "All threads done" << endl;

    // Thread with lambda
    thread t3([](const string& msg) {
        cout << "Lambda: " << msg << endl;
    }, "Hello from thread!");
    t3.join();

    return 0;
}
```

IMPORTANT:

- ALWAYS join() or detach() threads
- Forgetting join() crashes program!

NOTE: First parallel code!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-086: Race Conditions

```

Teach me Race Conditions - Data Races, Why They're Dangerous, Debugging Race Conditions using C++.

PROJECT CONTEXT:

- Step: GC-086 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-085
- Understands: Creating threads
- Current project state: Threads work but unreliable
- Goal: Understand threading bugs

DEPENDENCIES COMPLETED:

- GC-085: std::thread - creating threads

WHAT TO BUILD:
After learning race conditions:

- See race condition bug
- Understand non-determinism
- Use ThreadSanitizer
- Prepare for mutexes

EXAMPLE (BUGGY):

```cpp
#include <thread>
#include <vector>

int totalDistance = 0;  // SHARED STATE - DANGER!

void calculateSegment(const vector<GCodeCommand>& cmds, int start, int end) {
    int sum = 0;
    for (int i = start; i < end; i++) {
        sum += cmds[i].getDistance();
    }

    // RACE CONDITION! Multiple threads writing to same variable!
    totalDistance += sum;  // BUG!
}

int main() {
    vector<GCodeCommand> commands(1000);

    thread t1(calculateSegment, ref(commands), 0, 500);
    thread t2(calculateSegment, ref(commands), 500, 1000);

    t1.join();
    t2.join();

    cout << totalDistance << endl;  // Different result each run!
}
```

WHAT'S WRONG:

1. Thread 1 reads totalDistance = 0
2. Thread 2 reads totalDistance = 0 (same time!)
3. Thread 1 writes totalDistance = 500
4. Thread 2 writes totalDistance = 500 (overwrites!)
5. Result: 500, should be 1000!

DETECTING:

```bash
g++ -g -fsanitize=thread program.cpp
./a.out  # ThreadSanitizer will report race!
```

NOTE: Concurrency is HARD - be careful!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-087: Mutexes

```

Teach me Mutexes - std::mutex, Locking, Critical Sections, Thread Synchronization using C++.

PROJECT CONTEXT:

- Step: GC-087 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-086
- Understands: Race conditions
- Current project state: Buggy concurrent code
- Goal: Fix race conditions!

DEPENDENCIES COMPLETED:

- GC-086: Race conditions - problem to solve

WHAT TO BUILD:
After learning mutexes:

- Use std::mutex
- Lock and unlock
- Critical sections
- Fix race condition

EXAMPLE:

```cpp
#include <mutex>

mutex mtx;  // Protects totalDistance
int totalDistance = 0;

void calculateSegment(const vector<GCodeCommand>& cmds, int start, int end) {
    int sum = 0;
    for (int i = start; i < end; i++) {
        sum += cmds[i].getDistance();
    }

    // FIXED: Lock before accessing shared state
    mtx.lock();
    totalDistance += sum;  // Critical section - only one thread at a time
    mtx.unlock();
}

// Better with RAII (exception-safe):
void calculateSegmentSafe(const vector<GCodeCommand>& cmds, int start, int end) {
    int sum = 0;
    for (int i = start; i < end; i++) {
        sum += cmds[i].getDistance();
    }

    {
        lock_guard<mutex> lock(mtx);  // Locks on construction
        totalDistance += sum;
    }  // Unlocks on destruction - automatic!
}
```

IMPORTANT:

- Keep critical sections small
- Don't lock in loops (slow!)
- Always use RAII (lock_guard) instead of manual lock/unlock

NOTE: Now concurrent code is correct!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-088: Parallel G-code Analysis

```

Teach me Practical Parallelism - Dividing Work, Thread Pool Pattern, Parallel Data Processing using C++.

PROJECT CONTEXT:

- Step: GC-088 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-087
- Understands: Threads, mutexes
- Current project state: Can write concurrent code
- Goal: Speed up G-code analysis!

DEPENDENCIES COMPLETED:

- GC-087: Mutexes - safe concurrency
- GC-024: Total distance - task to parallelize

WHAT TO BUILD:
After learning practical parallelism:

- Divide commands into chunks
- Process chunks in parallel
- Combine results safely
- Measure speedup

EXAMPLE:

```cpp
#include <thread>
#include <vector>
#include <mutex>

class ParallelAnalyzer {
private:
    vector<GCodeCommand> commands_;
    mutex resultMutex_;
    double totalDistance_ = 0;

    void analyzeChunk(size_t start, size_t end) {
        double localSum = 0;  // Thread-local (no locking needed)

        for (size_t i = start; i < end; i++) {
            localSum += commands_[i].getDistance();
        }

        // Only lock when updating shared result
        lock_guard<mutex> lock(resultMutex_);
        totalDistance_ += localSum;
    }

public:
    void analyze(unsigned int numThreads = 4) {
        vector<thread> threads;
        size_t chunkSize = commands_.size() / numThreads;

        // Create threads
        for (unsigned int i = 0; i < numThreads; i++) {
            size_t start = i * chunkSize;
            size_t end = (i == numThreads - 1) ?
                         commands_.size() : (i + 1) * chunkSize;

            threads.emplace_back(&ParallelAnalyzer::analyzeChunk,
                               this, start, end);
        }

        // Wait for all threads
        for (auto& t : threads) {
            t.join();
        }
    }

    double getTotalDistance() const { return totalDistance_; }
};

// Usage:
ParallelAnalyzer analyzer;
analyzer.loadCommands("part.gcode");
analyzer.analyze(4);  // Use 4 threads
cout << "Total: " << analyzer.getTotalDistance() << "mm" << endl;
```

SPEEDUP:

- 1 thread: 1000ms
- 2 threads: 550ms (1.8x speedup)
- 4 threads: 300ms (3.3x speedup)
- 8 threads: 250ms (4.0x speedup, diminishing returns)

NOTE: Real performance improvement!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-089: std::async and Futures

```

Teach me std::async - Asynchronous Tasks, std::future, Task-Based Parallelism using C++.

PROJECT CONTEXT:

- Step: GC-089 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-088
- Understands: Manual thread management
- Current project state: Manual thread creation
- Goal: Easier async programming!

DEPENDENCIES COMPLETED:

- GC-085: std::thread - manual threads

WHAT TO BUILD:
After learning async:

- Launch async tasks
- Get results with future
- Compare to manual threads
- Handle exceptions in threads

EXAMPLE:

```cpp
#include <future>

// Function that returns a value
double analyzeFile(const string& filename) {
    GCodeParser parser(filename);
    parser.parse();
    return parser.calculateTotalDistance();
}

int main() {
    // Launch async task (easier than std::thread!)
    future<double> result = async(launch::async, analyzeFile, "part.gcode");

    // Do other work while task runs
    cout << "Processing..." << endl;

    // Get result (blocks until ready)
    double distance = result.get();
    cout << "Distance: " << distance << "mm" << endl;

    // Multiple async tasks
    vector<future<double>> futures;
    vector<string> files = {"part1.gcode", "part2.gcode", "part3.gcode"};

    for (const auto& file : files) {
        futures.push_back(async(launch::async, analyzeFile, file));
    }

    // Collect results
    double totalDistance = 0;
    for (auto& f : futures) {
        totalDistance += f.get();
    }

    // Exception handling
    future<double> result2 = async(launch::async, []() -> double {
        throw runtime_error("Parse error!");
        return 0.0;
    });

    try {
        double val = result2.get();  // Exception propagated here
    } catch (const exception& e) {
        cout << "Error: " << e.what() << endl;
    }
}
```

ASYNC VS THREAD:

- async: Returns value, handles exceptions, simpler
- thread: No return value, manual exception handling, more control

NOTE: Modern C++ concurrency!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-090: Atomic Operations

```

Teach me Atomics - std::atomic, Lock-Free Programming, Memory Ordering Basics using C++.

PROJECT CONTEXT:

- Step: GC-090 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-089
- Understands: Mutexes, locking
- Current project state: Using mutexes for simple counters
- Goal: Lock-free operations

DEPENDENCIES COMPLETED:

- GC-087: Mutexes - alternative to mutexes

WHAT TO BUILD:
After learning atomics:

- atomic<int> for counters
- Compare-and-swap
- When to use atomics vs mutexes
- Progress counter

EXAMPLE:

```cpp
#include <atomic>

// Bad (with mutex):
mutex mtx;
int counter = 0;

void incrementSlow() {
    lock_guard<mutex> lock(mtx);
    counter++;  // Expensive lock!
}

// Good (with atomic):
atomic<int> atomicCounter{0};

void incrementFast() {
    atomicCounter++;  // Lock-free! Much faster!
}

// Practical example - progress counter
class ProgressTracker {
private:
    atomic<size_t> processed_{0};
    size_t total_;

public:
    ProgressTracker(size_t total) : total_(total) {}

    void increment() {
        processed_++;
    }

    double getProgress() const {
        return (double)processed_.load() / total_ * 100.0;
    }
};

// Usage in threads:
ProgressTracker progress(commands.size());

void processCommands(const vector<GCodeCommand>& cmds,
                    size_t start, size_t end,
                    ProgressTracker& progress) {
    for (size_t i = start; i < end; i++) {
        // Process command
        progress.increment();  // Thread-safe, fast!
    }
}

// Compare-and-swap
atomic<int> value{0};
int expected = 0;
int desired = 42;
if (value.compare_exchange_strong(expected, desired)) {
    cout << "Swapped!" << endl;
} else {
    cout << "Already changed to " << expected << endl;
}
```

WHEN TO USE:

- Atomics: Simple types (int, bool, pointer), no complex operations
- Mutex: Complex data, multiple operations, critical sections

NOTE: Fast lock-free operations!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-091: Condition Variables

```

Teach me Condition Variables - std::condition_variable, Wait/Notify, Producer-Consumer Pattern using C++.

PROJECT CONTEXT:

- Step: GC-091 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-090
- Understands: Mutexes, atomics
- Current project state: Threads run independently
- Goal: Thread coordination and communication

DEPENDENCIES COMPLETED:

- GC-087: Mutexes - used with condition variables

WHAT TO BUILD:
After learning condition variables:

- Wait for condition
- Notify threads
- Producer-consumer pattern
- Parse in one thread, process in another

EXAMPLE:

```cpp
#include <condition_variable>
#include <queue>

class GCodeQueue {
private:
    queue<GCodeCommand> queue_;
    mutex mtx_;
    condition_variable cv_;
    bool done_ = false;

public:
    // Producer (parser thread)
    void push(const GCodeCommand& cmd) {
        {
            lock_guard<mutex> lock(mtx_);
            queue_.push(cmd);
        }
        cv_.notify_one();  // Wake up consumer
    }

    // Consumer (analyzer thread)
    bool pop(GCodeCommand& cmd) {
        unique_lock<mutex> lock(mtx_);

        // Wait until queue not empty OR done
        cv_.wait(lock, [this]() {
            return !queue_.empty() || done_;
        });

        if (queue_.empty()) {
            return false;  // Done
        }

        cmd = queue_.front();
        queue_.pop();
        return true;
    }

    void setDone() {
        {
            lock_guard<mutex> lock(mtx_);
            done_ = true;
        }
        cv_.notify_all();  // Wake all consumers
    }
};

// Usage:
GCodeQueue queue;

// Parser thread
thread parser([&queue]() {
    for (const auto& line : lines) {
        GCodeCommand cmd = parseCommand(line);
        queue.push(cmd);
    }
    queue.setDone();
});

// Analyzer thread
thread analyzer([&queue]() {
    GCodeCommand cmd;
    while (queue.pop(cmd)) {
        analyzeCommand(cmd);
    }
});

parser.join();
analyzer.join();
```

NOTE: Efficient thread communication!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-092: Thread Pool

```

Teach me Thread Pools - Reusing Threads, Work Queue, Task Scheduling using C++.

PROJECT CONTEXT:

- Step: GC-092 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-091
- Understands: Threads, queues, condition variables
- Current project state: Creating threads for each task
- Goal: Efficient thread reuse

DEPENDENCIES COMPLETED:

- GC-085: std::thread - thread creation
- GC-091: Condition variables - work queue

WHAT TO BUILD:
After learning thread pools:

- Create pool of worker threads
- Submit tasks to pool
- Automatic load balancing
- Process many G-code files efficiently

EXAMPLE:

```cpp
#include <functional>

class ThreadPool {
private:
    vector<thread> workers_;
    queue<function<void()>> tasks_;
    mutex queueMutex_;
    condition_variable cv_;
    bool stop_ = false;

public:
    ThreadPool(size_t numThreads) {
        for (size_t i = 0; i < numThreads; i++) {
            workers_.emplace_back([this]() {
                while (true) {
                    function<void()> task;

                    {
                        unique_lock<mutex> lock(queueMutex_);
                        cv_.wait(lock, [this]() {
                            return stop_ || !tasks_.empty();
                        });

                        if (stop_ && tasks_.empty()) return;

                        task = std::move(tasks_.front());
                        tasks_.pop();
                    }

                    task();  // Execute task
                }
            });
        }
    }

    template<typename F>
    void enqueue(F&& f) {
        {
            lock_guard<mutex> lock(queueMutex_);
            tasks_.emplace(std::forward<F>(f));
        }
        cv_.notify_one();
    }

    ~ThreadPool() {
        {
            lock_guard<mutex> lock(queueMutex_);
            stop_ = true;
        }
        cv_.notify_all();

        for (auto& worker : workers_) {
            worker.join();
        }
    }
};

// Usage:
ThreadPool pool(4);  // 4 worker threads

vector<string> files = {"part1.gcode", "part2.gcode", /* ... 100 files ... */};

for (const auto& file : files) {
    pool.enqueue([file]() {
        GCodeParser parser(file);
        parser.parse();
        cout << file << ": " << parser.getTotalDistance() << "mm" << endl;
    });
}

// Pool automatically distributes work across 4 threads
// Reuses threads (no overhead of creating 100 threads!)
```

NOTE: Production-quality concurrency!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-093: Parallel STL Algorithms

```

Teach me Parallel STL - std::execution::par, Parallel sort/transform, Easy Parallelism using C++17.

PROJECT CONTEXT:

- Step: GC-093 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-092
- Understands: Manual parallelism
- Current project state: Manual thread management
- Goal: Automatic parallelism!

DEPENDENCIES COMPLETED:

- GC-058: STL algorithms - parallel versions
- GC-088: Parallel analysis - doing manually

WHAT TO BUILD:
After learning parallel STL:

- Use execution policies
- Parallel sort
- Parallel transform
- Compare performance

EXAMPLE:

```cpp
#include <execution>
#include <algorithm>

vector<GCodeCommand> commands(10000);

// Sequential (old way)
sort(commands.begin(), commands.end(),
     [](const auto& a, const auto& b) {
         return a.getDistance() < b.getDistance();
     });

// Parallel (new way - just add execution policy!)
sort(execution::par,  // Automatically parallelized!
     commands.begin(), commands.end(),
     [](const auto& a, const auto& b) {
         return a.getDistance() < b.getDistance();
     });

// Parallel transform
vector<double> distances(commands.size());
transform(execution::par,  // Parallel!
          commands.begin(), commands.end(),
          distances.begin(),
          [](const auto& cmd) {
              return cmd.getDistance();
          });

// Parallel for_each
for_each(execution::par,
         commands.begin(), commands.end(),
         [](auto& cmd) {
             cmd.analyze();  // Process in parallel
         });

// Different execution policies:
// execution::seq        - Sequential (default)
// execution::par        - Parallel
// execution::par_unseq  - Parallel + vectorized (fastest)
```

SPEEDUP EXAMPLE:

- Sequential sort (10,000 elements): 50ms
- Parallel sort (10,000 elements): 15ms (3.3x faster!)

NOTE: Easiest way to add parallelism!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-094: Performance Profiling Concurrent Code

```

Teach me Concurrent Profiling - Measuring Speedup, Finding Bottlenecks, Amdahl's Law in Practice using C++ and profiling tools.

PROJECT CONTEXT:

- Step: GC-094 of 200
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-093
- Understands: Parallel programming
- Current project state: Parallel code works
- Goal: Measure and optimize performance

DEPENDENCIES COMPLETED:

- GC-088: Parallel analysis - code to profile
- GC-084: Amdahl's Law - theory to verify

WHAT TO BUILD:
After learning profiling:

- Measure execution time
- Calculate speedup
- Find sequential bottlenecks
- Optimize based on data

EXAMPLE:

```cpp
#include <chrono>

class PerformanceTimer {
private:
    chrono::high_resolution_clock::time_point start_;
    string name_;

public:
    PerformanceTimer(const string& name) : name_(name) {
        start_ = chrono::high_resolution_clock::now();
    }

    ~PerformanceTimer() {
        auto end = chrono::high_resolution_clock::now();
        auto duration = chrono::duration_cast<chrono::milliseconds>(end - start_);
        cout << name_ << ": " << duration.count() << "ms" << endl;
    }
};

// Usage:
void benchmarkAnalysis() {
    GCodeParser parser("large_file.gcode");

    {
        PerformanceTimer timer("Sequential");
        parser.analyzeSequential();
    }
    // Output: Sequential: 1000ms

    {
        PerformanceTimer timer("Parallel (2 threads)");
        parser.analyzeParallel(2);
    }
    // Output: Parallel (2 threads): 550ms
    // Speedup: 1.82x

    {
        PerformanceTimer timer("Parallel (4 threads)");
        parser.analyzeParallel(4);
    }
    // Output: Parallel (4 threads): 300ms
    // Speedup: 3.33x

    {
        PerformanceTimer timer("Parallel (8 threads)");
        parser.analyzeParallel(8);
    }
    // Output: Parallel (8 threads): 250ms
    // Speedup: 4.0x (diminishing returns - Amdahl's Law!)
}

// Finding bottlenecks:
void profilePipeline() {
    PerformanceTimer total("Total");

    {
        PerformanceTimer t("Parsing");
        parser.parse();  // 100ms (10%)
    }

    {
        PerformanceTimer t("Analysis");
        parser.analyze();  // 900ms (90%) - PARALLELIZE THIS!
    }

    // If parallelize analysis with 4 threads:
    // New analysis time: 900ms / 4 = 225ms
    // New total: 100ms + 225ms = 325ms
    // Speedup: 1000ms / 325ms = 3.08x
}
```

NOTE: Measure, don't guess!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-095: Deadlock Prevention

```

Teach me Deadlocks - What is Deadlock, Lock Ordering, std::scoped_lock, Avoiding Deadlocks using C++.

PROJECT CONTEXT:

- Step: GC-095 of 200 (LAST OF SPRINT 8)
- Sprint: Sprint 8 - Threading & Concurrency
- Completed: GC-001 through GC-094
- Understands: Mutexes, locking
- Current project state: Risk of deadlocks
- Goal: Safe multi-lock code

DEPENDENCIES COMPLETED:

- GC-087: Mutexes - locking primitives

WHAT TO BUILD:
After learning deadlock prevention:

- Understand deadlock
- Use lock ordering
- Use std::scoped_lock for multiple mutexes
- Avoid circular dependencies

EXAMPLE:

```cpp
// DEADLOCK EXAMPLE (BAD):
mutex mtx1, mtx2;

void thread1() {
    lock_guard<mutex> lock1(mtx1);  // Lock mtx1
    this_thread::sleep_for(chrono::milliseconds(10));
    lock_guard<mutex> lock2(mtx2);  // Try to lock mtx2 - BLOCKS!
    // Do work
}

void thread2() {
    lock_guard<mutex> lock2(mtx2);  // Lock mtx2
    this_thread::sleep_for(chrono::milliseconds(10));
    lock_guard<mutex> lock1(mtx1);  // Try to lock mtx1 - BLOCKS!
    // Do work
}
// Both threads waiting for each other - DEADLOCK!

// SOLUTION 1: Lock ordering
void thread1Fixed() {
    lock_guard<mutex> lock1(mtx1);  // Always lock in same order
    lock_guard<mutex> lock2(mtx2);
}

void thread2Fixed() {
    lock_guard<mutex> lock1(mtx1);  // Same order!
    lock_guard<mutex> lock2(mtx2);
}

// SOLUTION 2: std::scoped_lock (C++17) - automatically deadlock-free!
void thread1Best() {
    scoped_lock lock(mtx1, mtx2);  // Locks both atomically
    // Do work
}  // Unlocks both

void thread2Best() {
    scoped_lock lock(mtx1, mtx2);  // Order doesn't matter!
    // Do work
}

// Practical example:
class GCodeDatabase {
private:
    mutex commandsMutex_;
    mutex analysisMutex_;
    vector<GCodeCommand> commands_;
    AnalysisResult analysis_;

public:
    void updateBoth() {
        // Lock both mutexes safely
        scoped_lock lock(commandsMutex_, analysisMutex_);

        // Modify both safely
        commands_.push_back(newCommand);
        analysis_.update();
    }
};
```

DEADLOCK CONDITIONS (all must be true):

1. Mutual exclusion
2. Hold and wait
3. No preemption
4. Circular wait

Break any one → no deadlock!

NOTE: Concurrent programming is tricky - be careful!

DELIVERABLE: Complete concurrency skillset!

- Threads
- Mutexes
- Atomics
- Thread pools
- Parallel algorithms
- Performance profiling

NEXT SPRINT: Sprint 9 - Memory & Pointers (Going Lower!)

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

Due to response length limitations, I'll continue generating the remaining ~105 prompts. Should I continue now with Sprint 9 (Memory & Pointers)?
```

## SPRINT 9: MEMORY & POINTERS (12 topics - NOW going lower!)

### GC-096: Understanding Memory Addresses

````
Teach me Memory Addresses - What is Memory, Addresses, Hexadecimal, Address Space using C++ and computer architecture.

PROJECT CONTEXT:
- Step: GC-096 of 200 (FIRST OF SPRINT 9)
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-095 (have smart pointers, concurrency)
- Understands: Variables, smart pointers (high-level)
- Current project state: Don't understand what's under the hood
- Goal: Understand memory fundamentals

DEPENDENCIES COMPLETED:
- GC-002: Variables - understanding data storage
- GC-074: Smart pointers - high-level memory management

WHAT TO BUILD:
After learning memory addresses:
- Print variable addresses
- Understand hexadecimal notation
- See memory layout
- Address arithmetic concepts

EXAMPLE:
```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 42;
    double y = 3.14;
    string s = "Hello";

    // Print addresses (in hexadecimal)
    cout << "Address of x: " << &x << endl;  // e.g., 0x7ffc8b3d4a5c
    cout << "Address of y: " << &y << endl;  // e.g., 0x7ffc8b3d4a60
    cout << "Address of s: " << &s << endl;  // e.g., 0x7ffc8b3d4a70

    // Addresses are just numbers
    cout << "x lives at memory location " << (void*)&x << endl;

    // Size of types
    cout << "int uses " << sizeof(int) << " bytes" << endl;      // 4
    cout << "double uses " << sizeof(double) << " bytes" << endl; // 8
    cout << "string uses " << sizeof(string) << " bytes" << endl; // 32

    // Memory layout visualization:
    // Address      Data
    // 0x...a5c:    42 (int x, 4 bytes)
    // 0x...a60:    3.14 (double y, 8 bytes)
    // 0x...a70:    "Hello" (string s, 32 bytes object + heap data)

    return 0;
}
````

UNDERSTANDING:

- Every variable lives at a memory address
- Addresses are numbers (shown as hexadecimal)
- & operator gets address of variable
- Memory is like a giant array of bytes

NOTE: Foundation for understanding pointers!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-097: Pointers - The Basics

```

Teach me Pointers - Pointer Syntax, Dereferencing, nullptr, Pointer Operations using C++.

PROJECT CONTEXT:

- Step: GC-097 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-096
- Understands: Memory addresses, smart pointers
- Current project state: Understand addresses
- Goal: Learn raw pointers (finally!)

DEPENDENCIES COMPLETED:

- GC-096: Memory addresses - what pointers point to
- GC-074: Smart pointers - learned safe version first

WHAT TO BUILD:
After learning pointers:

- Declare pointers
- Dereference to access value
- nullptr for null pointers
- Pointer reassignment

EXAMPLE:

```cpp
int main() {
    int x = 42;

    // Declare pointer to int
    int* ptr = &x;  // ptr holds address of x

    cout << "x = " << x << endl;           // 42
    cout << "Address of x = " << &x << endl;  // 0x...
    cout << "ptr = " << ptr << endl;       // 0x... (same as &x)
    cout << "*ptr = " << *ptr << endl;     // 42 (dereference)

    // Modify through pointer
    *ptr = 100;  // Changes x!
    cout << "x = " << x << endl;  // 100

    // nullptr (null pointer)
    int* nullPtr = nullptr;  // Points to nothing
    if (nullPtr == nullptr) {
        cout << "Pointer is null" << endl;
    }

    // DANGER: Dereferencing null pointer crashes!
    // *nullPtr = 5;  // CRASH!

    // Pointer to different variable
    int y = 200;
    ptr = &y;  // ptr now points to y
    cout << "*ptr = " << *ptr << endl;  // 200

    return 0;
}
```

POINTER TERMINOLOGY:

- int\* ptr: "ptr is a pointer to int"
- &x: "address of x"
- \*ptr: "value at address ptr" (dereference)

WHY LEARN AFTER SMART POINTERS:

- Now you understand WHY smart pointers are better
- Raw pointers needed for low-level code, C APIs
- Understand what smart pointers do internally

NOTE: With great power comes great responsibility!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-098: Pointers and Arrays

```

Teach me Pointer Arithmetic - Arrays as Pointers, Pointer Increment, Accessing Array Elements using C++.

PROJECT CONTEXT:

- Step: GC-098 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-097
- Understands: Basic pointers
- Current project state: Pointers to single variables
- Goal: Pointers and arrays relationship

DEPENDENCIES COMPLETED:

- GC-097: Pointers - pointer basics
- GC-010: Vectors - safe arrays (now learning unsafe!)

WHAT TO BUILD:
After learning pointer arithmetic:

- Array name is pointer
- Pointer arithmetic
- Iterate array with pointers
- Understand ptr[i] vs \*(ptr+i)

EXAMPLE:

```cpp
int main() {
    int arr[5] = {10, 20, 30, 40, 50};

    // Array name is pointer to first element
    int* ptr = arr;  // Same as: int* ptr = &arr[0];

    cout << "arr[0] = " << arr[0] << endl;    // 10
    cout << "*ptr = " << *ptr << endl;        // 10 (same)

    // Pointer arithmetic
    ptr++;  // Move to next element
    cout << "*ptr = " << *ptr << endl;  // 20 (arr[1])

    ptr += 2;  // Move forward 2 elements
    cout << "*ptr = " << *ptr << endl;  // 40 (arr[3])

    // Access array elements with pointer
    ptr = arr;  // Reset to start
    for (int i = 0; i < 5; i++) {
        cout << "arr[" << i << "] = " << *(ptr + i) << endl;
        // arr[i] is EXACTLY *(ptr + i)!
    }

    // Iterate with pointer increment
    ptr = arr;
    for (int i = 0; i < 5; i++) {
        cout << *ptr << " ";
        ptr++;
    }
    cout << endl;

    // Pointer difference
    int* start = &arr[0];
    int* end = &arr[4];
    cout << "Distance: " << (end - start) << " elements" << endl;  // 4

    return 0;
}
```

IMPORTANT:

- ptr + 1 moves by sizeof(type) bytes, not 1 byte!
- int\* ptr; ptr + 1 moves 4 bytes forward
- double\* ptr; ptr + 1 moves 8 bytes forward

NOTE: Why vectors are safer - no pointer arithmetic errors!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-099: Dynamic Memory - new and delete

```

Teach me Dynamic Memory - new, delete, Memory Leaks, Heap vs Stack using C++.

PROJECT CONTEXT:

- Step: GC-099 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-098
- Understands: Pointers, addresses
- Current project state: Stack allocation only
- Goal: Heap allocation (manual memory management)

DEPENDENCIES COMPLETED:

- GC-097: Pointers - needed for dynamic memory
- GC-074: Smart pointers - now understand what they automate

WHAT TO BUILD:
After learning dynamic memory:

- Allocate with new
- Deallocate with delete
- Understand memory leaks
- Heap vs stack

EXAMPLE:

```cpp
int main() {
    // Stack allocation (automatic)
    int x = 42;  // Destroyed when function returns

    // Heap allocation (manual)
    int* ptr = new int(42);  // Allocate on heap
    cout << *ptr << endl;
    delete ptr;  // MUST manually delete!
    ptr = nullptr;  // Good practice

    // Array allocation
    int* arr = new int[100];  // Array of 100 ints
    arr[0] = 10;
    arr[99] = 20;
    delete[] arr;  // MUST use delete[] for arrays!

    // MEMORY LEAK (BAD!):
    void leak() {
        int* ptr = new int(42);
        // Forgot to delete - LEAK!
    }  // Memory never freed!

    // Objects on heap
    GCodeCommand* cmd = new GCodeCommand("G0");
    cout << cmd->getType() << endl;
    delete cmd;  // Calls destructor, then frees memory

    // Why smart pointers are better:
    {
        unique_ptr<GCodeCommand> cmd = make_unique<GCodeCommand>("G0");
        // Automatic delete - no leak possible!
    }

    return 0;
}
```

STACK VS HEAP:

```
STACK:
- Fast allocation
- Limited size (~1-8 MB)
- Automatic cleanup
- Local variables

HEAP:
- Slower allocation
- Large size (GBs available)
- Manual cleanup (or use smart pointers!)
- Dynamic lifetime
```

WHY LEARN THIS:

- Understanding what smart pointers do
- Working with C APIs
- Low-level optimization
- Debugging memory issues

NOTE: Always prefer smart pointers in modern C++!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-100: Memory Leaks and Valgrind

```

Teach me Memory Debugging - Valgrind, Detecting Leaks, AddressSanitizer using C++ and debugging tools.

PROJECT CONTEXT:

- Step: GC-100 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-099
- Understands: Dynamic memory, leaks
- Current project state: Can create memory leaks
- Goal: Detect and fix leaks!

DEPENDENCIES COMPLETED:

- GC-099: Dynamic memory - creating leaks
- GC-040: GDB - debugging tools

WHAT TO BUILD:
After learning memory debugging:

- Use Valgrind to find leaks
- Use AddressSanitizer
- Fix common memory bugs
- Verify no leaks

EXAMPLE CODE WITH LEAKS:

```cpp
// leak_example.cpp
#include <iostream>
using namespace std;

void leak1() {
    int* ptr = new int(42);
    // Forgot to delete - LEAK!
}

void leak2() {
    int* arr = new int[100];
    // Forgot to delete[] - LEAK!
}

void useAfterFree() {
    int* ptr = new int(42);
    delete ptr;
    cout << *ptr << endl;  // Use after free - BUG!
}

void doubleDelete() {
    int* ptr = new int(42);
    delete ptr;
    delete ptr;  // Double delete - CRASH!
}

int main() {
    leak1();
    leak2();
    return 0;
}
```

DETECTING LEAKS:

```bash
# Compile
g++ -g leak_example.cpp -o leak_test

# Run with Valgrind
valgrind --leak-check=full ./leak_test

# Output shows:
# ==12345== LEAK SUMMARY:
# ==12345==    definitely lost: 404 bytes in 2 blocks
# ==12345==    at leak1() (leak_example.cpp:5)
# ==12345==    at leak2() (leak_example.cpp:10)

# Use AddressSanitizer (faster than Valgrind)
g++ -g -fsanitize=address leak_example.cpp -o leak_test
./leak_test
# Shows leak location immediately!
```

FIXED VERSION:

```cpp
void noLeak1() {
    int* ptr = new int(42);
    delete ptr;  // Fixed!
}

void noLeak2() {
    int* arr = new int[100];
    delete[] arr;  // Fixed!
}

// Even better - use smart pointers:
void bestPractice() {
    auto ptr = make_unique<int>(42);  // No leak possible!
}
```

NOTE: Memory bugs are subtle - use tools to find them!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-101: References vs Pointers

```

Teach me Pointers vs References - Differences, When to Use Each, Null References, Rebinding using C++.

PROJECT CONTEXT:

- Step: GC-101 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-100
- Understands: Pointers, references (from GC-026)
- Current project state: Know both but not differences
- Goal: Understand when to use each

DEPENDENCIES COMPLETED:

- GC-026: Pass by reference - reference basics
- GC-097: Pointers - pointer basics

WHAT TO BUILD:
After learning differences:

- Compare syntax
- Understand rebinding
- Null pointers vs references
- Choose appropriate one

EXAMPLE:

```cpp
int main() {
    int x = 10;
    int y = 20;

    // REFERENCE
    int& ref = x;  // Must initialize
    ref = 5;       // Changes x
    cout << x << endl;  // 5

    // Can't rebind reference
    ref = y;  // This changes x to value of y, doesn't rebind!
    cout << x << endl;  // 20
    cout << y << endl;  // 20 (unchanged)

    // POINTER
    int* ptr = &x;  // Can initialize later
    *ptr = 15;      // Changes x
    cout << x << endl;  // 15

    // Can rebind pointer
    ptr = &y;  // Now points to y
    *ptr = 25;
    cout << y << endl;  // 25

    // NULLABILITY
    // int& ref2;  // ERROR: Must initialize
    int* ptr2 = nullptr;  // OK: Can be null

    // Reference can't be null (sort of - undefined behavior if you try)
    // int& ref3 = *ptr2;  // UNDEFINED BEHAVIOR!

    return 0;
}
```

COMPARISON TABLE:

```
REFERENCE:
- Must be initialized
- Can't be null
- Can't be rebound
- Simpler syntax (*obj → obj)
- Use for: Function parameters, return values

POINTER:
- Can be uninitialized
- Can be null
- Can be rebound
- More complex syntax (*ptr)
- Use for: Optional values, data structures, arrays, C APIs
```

GUIDELINES:

```cpp
// Use reference for:
void printCommand(const GCodeCommand& cmd) {  // Always valid
    cout << cmd.getType() << endl;
}

// Use pointer for:
GCodeCommand* findCommand(const string& type) {
    // May return nullptr if not found
    if (found) return &cmd;
    return nullptr;
}

// Use smart pointer for:
unique_ptr<GCodeCommand> createCommand() {
    return make_unique<GCodeCommand>("G0");  // Ownership transfer
}
```

NOTE: Prefer references when possible, pointers when needed!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-102: Function Pointers

```

Teach me Function Pointers - Callbacks, Function Pointer Syntax, vs Lambdas, std::function using C++.

PROJECT CONTEXT:

- Step: GC-102 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-101
- Understands: Pointers, lambdas
- Current project state: Only data pointers
- Goal: Pointers to functions!

DEPENDENCIES COMPLETED:

- GC-097: Pointers - pointer concepts
- GC-057: Lambdas - alternative to function pointers

WHAT TO BUILD:
After learning function pointers:

- Declare function pointer
- Call through pointer
- Callback pattern
- Compare to lambdas and std::function

EXAMPLE:

```cpp
// Function to point to
double calculateDistance(double x, double y) {
    return sqrt(x*x + y*y);
}

int main() {
    // Function pointer syntax (ugly!)
    double (*funcPtr)(double, double) = calculateDistance;

    // Call through pointer
    double dist = funcPtr(3, 4);  // 5.0
    cout << dist << endl;

    // Callback pattern
    void processCommand(GCodeCommand& cmd,
                       void (*callback)(const GCodeCommand&)) {
        // Do processing
        callback(cmd);  // Call callback
    }

    // Using function pointer as callback
    void printCmd(const GCodeCommand& cmd) {
        cout << cmd.getType() << endl;
    }
    processCommand(cmd, printCmd);

    // BETTER: std::function (type-erased function wrapper)
    #include <functional>

    function<double(double, double)> func = calculateDistance;
    dist = func(3, 4);

    // Works with lambdas too!
    func = [](double x, double y) { return x + y; };
    cout << func(3, 4) << endl;  // 7

    // Even better callback with std::function
    void processCommand2(GCodeCommand& cmd,
                        function<void(const GCodeCommand&)> callback) {
        callback(cmd);
    }

    // Can pass function, lambda, or any callable
    processCommand2(cmd, printCmd);  // Function
    processCommand2(cmd, [](const GCodeCommand& c) {  // Lambda
        cout << "Lambda: " << c.getType() << endl;
    });

    return 0;
}
```

COMPARISON:

```cpp
// Function pointer (C-style, ugly)
void (*callback)(int) = &myFunction;

// std::function (C++, clean)
function<void(int)> callback = myFunction;

// Lambda (C++, most flexible)
auto callback = [](int x) { cout << x; };
```

MODERN C++: Prefer lambdas and std::function!

NOTE: Understanding what happens under the hood of callbacks!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-103: Double Pointers

```

Teach me Double Pointers - Pointer to Pointer, Dynamic 2D Arrays, Understanding \*\* using C++.

PROJECT CONTEXT:

- Step: GC-103 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-102
- Understands: Pointers, arrays
- Current project state: Single-level pointers only
- Goal: Multi-level indirection

DEPENDENCIES COMPLETED:

- GC-097: Pointers - single pointers
- GC-098: Pointer arithmetic - arrays

WHAT TO BUILD:
After learning double pointers:

- Understand pointer to pointer
- Dynamic 2D arrays
- Modify pointer in function
- When double pointers are needed

EXAMPLE:

```cpp
int main() {
    int x = 42;
    int* ptr = &x;      // Pointer to int
    int** ptr2 = &ptr;  // Pointer to pointer to int

    cout << "x = " << x << endl;          // 42
    cout << "*ptr = " << *ptr << endl;    // 42
    cout << "**ptr2 = " << **ptr2 << endl; // 42 (double dereference!)

    // Modify through double pointer
    **ptr2 = 100;
    cout << "x = " << x << endl;  // 100

    // Dynamic 2D array (grid)
    int rows = 3, cols = 4;
    int** grid = new int*[rows];  // Array of pointers
    for (int i = 0; i < rows; i++) {
        grid[i] = new int[cols];  // Each row
    }

    // Use 2D array
    grid[0][0] = 10;
    grid[2][3] = 99;

    // Access
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cout << grid[i][j] << " ";
        }
        cout << endl;
    }

    // MUST delete properly
    for (int i = 0; i < rows; i++) {
        delete[] grid[i];  // Delete each row
    }
    delete[] grid;  // Delete array of pointers

    // Modifying pointer in function (need double pointer)
    void allocate(int** ptr) {
        *ptr = new int(42);  // Modify caller's pointer
    }

    int* p = nullptr;
    allocate(&p);  // Pass address of pointer
    cout << *p << endl;  // 42
    delete p;

    return 0;
}
```

MODERN ALTERNATIVE (SAFER):

```cpp
// Instead of int**, use vector of vectors
vector<vector<int>> grid(3, vector<int>(4));  // 3x4 grid
grid[0][0] = 10;
grid[2][3] = 99;
// No manual memory management!
```

NOTE: Double pointers are tricky - prefer modern alternatives!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-104: C-Style Strings

```

Teach me C Strings - char arrays, String Functions, null Terminator, vs std::string using C++.

PROJECT CONTEXT:

- Step: GC-104 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-103
- Understands: std::string, arrays, pointers
- Current project state: Only using std::string
- Goal: Understand C-style strings (for C APIs)

DEPENDENCIES COMPLETED:

- GC-007: std::string - high-level strings
- GC-098: Pointers and arrays - char arrays

WHAT TO BUILD:
After learning C strings:

- char arrays
- Null terminator
- String functions (strlen, strcpy, etc.)
- Why std::string is better

EXAMPLE:

```cpp
#include <cstring>  // C string functions

int main() {
    // C-style string (char array)
    char str1[20] = "Hello";  // "Hello\0" (null terminator!)

    // String literal
    const char* str2 = "World";  // Pointer to string literal

    // Print
    cout << str1 << endl;  // Hello
    cout << str2 << endl;  // World

    // Length (searches for \0)
    size_t len = strlen(str1);  // 5 (doesn't count \0)

    // Copy
    char dest[20];
    strcpy(dest, str1);  // Copies "Hello\0"

    // Concatenate
    strcat(dest, " ");
    strcat(dest, str2);  // dest = "Hello World\0"

    // Compare
    if (strcmp(str1, "Hello") == 0) {
        cout << "Strings equal" << endl;
    }

    // DANGERS OF C STRINGS:
    char small[5] = "Hi";
    // strcpy(small, "This is too long");  // BUFFER OVERFLOW! CRASH!

    // No bounds checking!
    // small[100] = 'x';  // Out of bounds - undefined behavior!

    // Manual memory management
    char* dynamic = new char[100];
    strcpy(dynamic, "Dynamic string");
    delete[] dynamic;

    // BETTER: std::string
    string s1 = "Hello";
    string s2 = "World";
    string s3 = s1 + " " + s2;  // Easy concatenation
    cout << s3.length() << endl;  // Built-in length
    // No buffer overflows!
    // No manual memory management!

    // Converting between C and C++ strings
    string cppStr = "Hello";
    const char* cStr = cppStr.c_str();  // Get C string
    string backToCpp = string(cStr);    // Back to C++ string

    return 0;
}
```

WHY LEARN C STRINGS:

- Working with C libraries (OpenGL, CUDA, etc.)
- System programming
- Understanding what std::string does internally
- Legacy code

ALWAYS PREFER std::string IN NEW CODE!

NOTE: C strings are error-prone - use std::string!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-105: Const Correctness

```

Teach me Const Correctness - const Pointers, Pointer to const, const Methods, const References using C++.

PROJECT CONTEXT:

- Step: GC-105 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-104
- Understands: Pointers, references, const basics
- Current project state: Inconsistent const usage
- Goal: Professional const usage

DEPENDENCIES COMPLETED:

- GC-097: Pointers - pointer syntax
- GC-026: Pass by reference - const references

WHAT TO BUILD:
After learning const correctness:

- const pointer vs pointer to const
- const methods
- const references
- Read const declarations

EXAMPLE:

```cpp
class GCodeCommand {
private:
    string type_;
    map<char, double> params_;

public:
    // const method - doesn't modify object
    string getType() const {
        return type_;
    }

    double getParam(char axis) const {
        return params_.at(axis);
    }

    // Non-const method - modifies object
    void setType(const string& type) {
        type_ = type;
    }
};

int main() {
    int x = 10;
    int y = 20;

    // CONST POINTER (pointer can't change)
    int* const ptr1 = &x;
    *ptr1 = 15;      // OK: Can modify value
    // ptr1 = &y;    // ERROR: Can't change pointer

    // POINTER TO CONST (value can't change)
    const int* ptr2 = &x;
    // *ptr2 = 15;   // ERROR: Can't modify value
    ptr2 = &y;       // OK: Can change pointer

    // CONST POINTER TO CONST (neither can change)
    const int* const ptr3 = &x;
    // *ptr3 = 15;   // ERROR
    // ptr3 = &y;    // ERROR

    // READING CONST DECLARATIONS:
    // Read right-to-left:
    // int* const       = "const pointer to int"
    // const int*       = "pointer to const int"
    // const int* const = "const pointer to const int"

    // CONST REFERENCES
    void print(const GCodeCommand& cmd) {  // Can't modify cmd
        cout << cmd.getType() << endl;  // OK: const method
        // cmd.setType("G1");           // ERROR: non-const method
    }

    // CONST OBJECTS
    const GCodeCommand cmd("G0");
    cout << cmd.getType() << endl;  // OK: const method
    // cmd.setType("G1");           // ERROR: non-const method

    return 0;
}
```

CONST CORRECTNESS RULES:

1. Mark all methods that don't modify object as const
2. Pass large objects by const reference
3. Return by const reference when safe
4. Use const whenever possible - compiler enforces correctness!

NOTE: const helps catch bugs at compile time!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-106: Memory Layout and Alignment

```

Teach me Memory Alignment - alignas, alignof, Why Alignment Matters, Padding using C++.

PROJECT CONTEXT:

- Step: GC-106 of 200
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-105
- Understands: Memory addresses, structures
- Current project state: Don't understand memory layout
- Goal: Understand struct padding and alignment

DEPENDENCIES COMPLETED:

- GC-096: Memory addresses - address concepts
- GC-019: Structs - struct memory layout

WHAT TO BUILD:
After learning alignment:

- Check alignment with alignof
- Control alignment with alignas
- Understand struct padding
- Optimize struct layout

EXAMPLE:

```cpp
#include <iostream>
using namespace std;

int main() {
    // Alignment of types
    cout << "alignof(char) = " << alignof(char) << endl;      // 1
    cout << "alignof(int) = " << alignof(int) << endl;        // 4
    cout << "alignof(double) = " << alignof(double) << endl;  // 8

    // Struct padding
    struct Unoptimized {
        char a;    // 1 byte
        // 3 bytes padding!
        int b;     // 4 bytes
        char c;    // 1 byte
        // 7 bytes padding!
        double d;  // 8 bytes
    };  // Total: 24 bytes (with padding)

    cout << "sizeof(Unoptimized) = " << sizeof(Unoptimized) << endl;  // 24

    // Optimized struct (reorder members)
    struct Optimized {
        double d;  // 8 bytes (largest first)
        int b;     // 4 bytes
        char a;    // 1 byte
        char c;    // 1 byte
        // 2 bytes padding
    };  // Total: 16 bytes

    cout << "sizeof(Optimized) = " << sizeof(Optimized) << endl;  // 16

    // 33% smaller just by reordering!

    // Control alignment
    struct alignas(64) CacheLine {
        int data[16];
    };  // Aligned to 64-byte cache line

    cout << "alignof(CacheLine) = " << alignof(CacheLine) << endl;  // 64

    // Why alignment matters:
    // 1. Performance: Aligned access is faster
    // 2. SIMD: Requires 16/32-byte alignment
    // 3. Cache: 64-byte alignment for cache optimization

    return 0;
}
```

PRACTICAL APPLICATION:

```cpp
// G-code command optimized
struct GCodeCommand {
    // Order by size (largest first)
    map<char, double> params;  // 48 bytes
    string type;               // 32 bytes
    double distance;           // 8 bytes
    CommandType cmdType;       // 4 bytes (enum)
    char flags;                // 1 byte
    // 3 bytes padding
};  // Minimal padding
```

NOTE: Important for cache performance and SIMD!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-107: Custom Allocators Introduction

```

Teach me Custom Allocators - Memory Pools, Allocation Strategies, std::allocator using C++.

PROJECT CONTEXT:

- Step: GC-107 of 200 (LAST OF SPRINT 9)
- Sprint: Sprint 9 - Memory & Pointers
- Completed: GC-001 through GC-106
- Understands: Dynamic memory, new/delete
- Current project state: Using default allocator
- Goal: Understand allocation strategies

DEPENDENCIES COMPLETED:

- GC-099: Dynamic memory - default allocation
- GC-010: Vectors - containers that use allocators

WHAT TO BUILD:
After learning custom allocators:

- Understand allocator concept
- Simple memory pool
- When custom allocators help
- Use custom allocator with vector

EXAMPLE:

```cpp
#include <memory>
#include <vector>

// Simple memory pool (fixed-size objects)
template<typename T, size_t PoolSize>
class MemoryPool {
private:
    union Node {
        T data;
        Node* next;
    };

    Node pool[PoolSize];
    Node* freeList;

public:
    MemoryPool() {
        // Initialize free list
        freeList = &pool[0];
        for (size_t i = 0; i < PoolSize - 1; i++) {
            pool[i].next = &pool[i + 1];
        }
        pool[PoolSize - 1].next = nullptr;
    }

    T* allocate() {
        if (!freeList) return nullptr;  // Pool exhausted

        Node* node = freeList;
        freeList = freeList->next;
        return &node->data;
    }

    void deallocate(T* ptr) {
        Node* node = reinterpret_cast<Node*>(ptr);
        node->next = freeList;
        freeList = node;
    }
};

// Usage:
MemoryPool<GCodeCommand, 1000> pool;

GCodeCommand* cmd1 = pool.allocate();  // Fast!
GCodeCommand* cmd2 = pool.allocate();  // Fast!

pool.deallocate(cmd1);  // Return to pool
pool.deallocate(cmd2);

// Custom allocator for STL containers
template<typename T>
class PoolAllocator {
public:
    using value_type = T;

    T* allocate(size_t n) {
        return static_cast<T*>(::operator new(n * sizeof(T)));
    }

    void deallocate(T* p, size_t n) {
        ::operator delete(p);
    }
};

// Use with vector
vector<int, PoolAllocator<int>> vec;
vec.push_back(42);
```

WHEN TO USE CUSTOM ALLOCATORS:

- Many small allocations (memory pool faster)
- Real-time systems (predictable allocation)
- Reducing fragmentation
- Special memory regions (GPU, shared memory)

DEFAULT ALLOCATOR IS FINE FOR 99% OF CASES!

NOTE: Advanced optimization - usually not needed!

DELIVERABLE: Complete understanding of memory and pointers!

- Memory addresses
- Raw pointers
- Dynamic memory
- Memory debugging
- Pointer arithmetic
- Double pointers
- C strings
- Const correctness
- Alignment
- Custom allocators

NEXT SPRINT: Sprint 10 - CPU Architecture Deep Dive

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 10: CPU ARCHITECTURE UNDERSTANDING (10 topics)

### GC-108: How Programs Execute

```

Teach me Program Execution - Compilation to Machine Code, CPU Fetch-Decode-Execute, Assembly Preview using C++ and computer architecture.

PROJECT CONTEXT:

- Step: GC-108 of 200 (FIRST OF SPRINT 10)
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-107 (understand memory!)
- Understands: C++ code, compilation
- Current project state: Code works, don't know HOW
- Goal: Understand what CPU actually does

DEPENDENCIES COMPLETED:

- GC-005: Compilation - high-level compilation
- GC-096: Memory addresses - where code lives

WHAT TO BUILD:
After learning program execution:

- Understand compilation stages
- See assembly code
- Understand machine code
- CPU execution cycle

EXAMPLE:

```cpp
// Simple C++ code
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    return result;
}
```

COMPILATION STAGES:

```
C++ Source Code:
    int add(int a, int b) { return a + b; }
    ↓
Preprocessor:
    (expand #include, #define)
    ↓
Compiler:
    mov eax, [rbp+8]   ; Load a
    add eax, [rbp+12]  ; Add b
    ret                ; Return
    ↓
Assembler:
    89 45 F8  ; Machine code (hex)
    03 45 FC
    C3
    ↓
Linker:
    (combine with libraries)
    ↓
Executable Binary
```

VIEW ASSEMBLY:

```bash
# Compile to assembly
g++ -S -O2 program.cpp
cat program.s  # View assembly

# Or use compiler explorer: godbolt.org
```

CPU EXECUTION CYCLE:

```
1. FETCH: Get next instruction from memory
2. DECODE: Figure out what instruction means
3. EXECUTE: Perform operation
4. REPEAT
```

NOTE: Understanding the machine beneath C++!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-109: CPU Basics and Registers

```

Teach me CPU Fundamentals - Registers, ALU, Control Unit, Instruction Set using computer architecture concepts.

PROJECT CONTEXT:

- Step: GC-109 of 200
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-108
- Understands: Program execution
- Current project state: Know programs run on CPU
- Goal: Understand CPU components

DEPENDENCIES COMPLETED:

- GC-108: Program execution - CPU context

WHAT TO BUILD:
After learning CPU basics:

- Understand registers
- ALU operations
- CPU components
- Register usage in C++

CONCEPTS:

```
CPU COMPONENTS:

1. REGISTERS (tiny, fast memory in CPU):
   - RAX, RBX, RCX, RDX: General purpose
   - RSP: Stack pointer
   - RIP: Instruction pointer (program counter)
   - 8-16 registers (x86-64)

2. ALU (Arithmetic Logic Unit):
   - Performs math: +, -, *, /
   - Performs logic: AND, OR, XOR
   - Comparisons: <, >, ==

3. CONTROL UNIT:
   - Fetches instructions
   - Decodes instructions
   - Controls execution

4. CACHE:
   - L1: 32KB, fastest
   - L2: 256KB, fast
   - L3: 8MB, slower
   - RAM: GB, slow
```

ASSEMBLY EXAMPLE:

```asm
; int add(int a, int b) { return a + b; }

add:
    mov eax, [rsp+8]   ; Load a into register
    add eax, [rsp+12]  ; Add b to register
    ret                ; Return (result in eax)
```

C++ CODE USING REGISTERS:

```cpp
// Compiler automatically uses registers
int fastAdd(int a, int b) {
    return a + b;  // Compiler: uses registers eax, ebx
}

// Many local variables
void manyVars() {
    int a = 1, b = 2, c = 3, d = 4;
    // a, b, c, d likely in registers (fast!)
    int sum = a + b + c + d;
}

// Too many variables - spill to stack
void tooManyVars() {
    int vars[100];  // Can't fit all in registers
    // Some in registers, some in RAM (slower)
}
```

WHY THIS MATTERS:

- Understand performance
- Optimize code
- Debug assembly
- Understand compiler output

NOTE: Registers are MUCH faster than RAM!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-110: Instruction Pipeline

```

Teach me CPU Pipeline - Fetch, Decode, Execute, Pipelining, Hazards using computer architecture concepts.

PROJECT CONTEXT:

- Step: GC-110 of 200
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-109
- Understands: CPU components, fetch-decode-execute
- Current project state: Sequential execution model
- Goal: Understand parallel instruction execution

DEPENDENCIES COMPLETED:

- GC-108: Program execution - execution cycle

CONCEPTS:

```
WITHOUT PIPELINING (SLOW):
Instruction 1: [Fetch][Decode][Execute]
Instruction 2:                    [Fetch][Decode][Execute]
Instruction 3:                                      [Fetch][Decode][Execute]
Time: 9 cycles

WITH PIPELINING (FAST):
Instruction 1: [Fetch][Decode][Execute]
Instruction 2:        [Fetch][Decode][Execute]
Instruction 3:               [Fetch][Decode][Execute]
Time: 5 cycles (1.8x faster!)

MODERN CPUs:
- 14+ stage pipelines
- Multiple instructions per cycle (superscalar)
- Out-of-order execution
```

PIPELINE HAZARDS:

```cpp
// DATA HAZARD (dependency)
int x = a + b;  // Instruction 1
int y = x + c;  // Instruction 2 needs result of 1
// CPU stalls or uses forwarding

// CONTROL HAZARD (branch)
if (x > 10) {  // Branch instruction
    // CPU doesn't know which path until x is known
    // Branch prediction helps!
}
```

BRANCH PREDICTION:

```cpp
// PREDICTABLE (good for CPU)
for (int i = 0; i < 1000; i++) {
    // Loop branch always taken
    // CPU predicts correctly every time
}

// UNPREDICTABLE (bad for CPU)
for (int i = 0; i < 1000; i++) {
    if (random() > 0.5) {  // 50/50 random
        // CPU mispredicts ~50% of time
        // Pipeline must flush - SLOW!
    }
}
```

PRACTICAL IMPLICATIONS:

```cpp
// This code is SLOW due to unpredictable branches:
for (const auto& cmd : commands) {
    if (cmd.type == "G0") {  // Unpredictable
        processRapid(cmd);
    } else if (cmd.type == "G1") {
        processLinear(cmd);
    }
}

// This is FASTER (no branches in inner loop):
// 1. Sort by type first
// 2. Process each type in batch
vector<GCodeCommand> rapids, linears;
for (const auto& cmd : commands) {
    if (cmd.type == "G0") rapids.push_back(cmd);
    else linears.push_back(cmd);
}
for (const auto& cmd : rapids) processRapid(cmd);    // Predictable!
for (const auto& cmd : linears) processLinear(cmd);  // Predictable!
```

NOTE: Branch prediction is crucial for performance!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

You're absolutely right - I've been adding more and more code examples, making the prompts longer and more verbose. Looking back at my early prompts (GC-001 through GC-040), they were much cleaner and more concise.

The meta-prompt will generate the full tutorial with examples - I don't need to write ALL the code IN the prompt itself. The prompt should be more like:
- **What** to teach
- **Why** it matters
- **Dependencies**
- **What to build** (brief)

Not a full tutorial itself.

Let me simplify the remaining prompts - back to the clean, concise style from the beginning. Continuing:

---

### GC-111: Memory Hierarchy

```

Teach me Memory Hierarchy - Registers, Cache, RAM, Disk, Access Times using computer architecture concepts.

PROJECT CONTEXT:

- Step: GC-111 of 200
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-110
- Understands: CPU components, registers
- Current project state: Don't understand memory speeds
- Goal: Understand memory hierarchy and performance

DEPENDENCIES COMPLETED:

- GC-109: CPU basics - registers
- GC-096: Memory addresses - memory concepts

WHAT TO BUILD:
After learning memory hierarchy:

- Measure access times for different memory levels
- Understand why cache matters
- See impact of cache misses
- Visualize memory pyramid

NOTE: Understand why some code is 100x faster than other code!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-112: CPU Cache Deep Dive

```

Teach me Cache - L1/L2/L3 Cache, Cache Lines, Cache Misses, Locality using computer architecture.

PROJECT CONTEXT:

- Step: GC-112 of 200
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-111
- Understands: Memory hierarchy
- Current project state: Know cache exists
- Goal: Understand cache behavior

DEPENDENCIES COMPLETED:

- GC-111: Memory hierarchy - cache in context

WHAT TO BUILD:
After learning cache:

- Measure cache hit/miss rates
- Understand cache lines (typically 64 bytes)
- See impact of data layout on cache
- Optimize for cache locality

NOTE: Cache optimization can give 10-100x speedup!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-113: Cache-Friendly Code

```

Teach me Cache Optimization - Sequential Access, Stride, Array of Structs vs Struct of Arrays using C++ and performance.

PROJECT CONTEXT:

- Step: GC-113 of 200
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-112
- Understands: Cache behavior
- Current project state: Cache-unfriendly code
- Goal: Write cache-efficient code!

DEPENDENCIES COMPLETED:

- GC-112: Cache - understanding cache
- GC-137: Data-oriented design (or learning together)

WHAT TO BUILD:
After learning cache-friendly code:

- Compare AoS vs SoA performance for G-code
- Sequential vs random access benchmarks
- Optimize command processing for cache
- Measure speedup

NOTE: Real performance improvement from understanding hardware!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-114: Branch Prediction Deep Dive

```

Teach me Branch Prediction - How It Works, Predictable vs Unpredictable, Branch Misprediction Cost using C++.

PROJECT CONTEXT:

- Step: GC-114 of 200
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-113
- Understands: CPU pipeline from GC-110
- Current project state: Unpredictable branches
- Goal: Write branch-friendly code

DEPENDENCIES COMPLETED:

- GC-110: Pipeline - branch hazards

WHAT TO BUILD:
After learning branch prediction:

- Measure branch misprediction penalty
- Sort data to make branches predictable
- Remove branches with branchless code
- Benchmark improvements

NOTE: Eliminate unpredictable branches for speed!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-115: Data-Oriented Design

```

Teach me Data-Oriented Design - Structure of Arrays (SoA), Array of Structures (AoS), Hot/Cold Data Splitting using C++.

PROJECT CONTEXT:

- Step: GC-115 of 200
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-114
- Understands: Cache optimization
- Current project state: Object-oriented layout
- Goal: Data-oriented layout for performance

DEPENDENCIES COMPLETED:

- GC-113: Cache-friendly code - layout matters
- GC-044: Classes - OOP to compare against

WHAT TO BUILD:
After learning DOD:

- Convert GCodeCommand to SoA layout
- Separate hot data (accessed often) from cold
- Benchmark AoS vs SoA
- Process 1M commands efficiently

NOTE: How game engines and databases achieve performance!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-116: Profiling with perf

```

Teach me Linux perf - CPU Profiling, Cache Miss Analysis, Branch Prediction Stats using perf tools.

PROJECT CONTEXT:

- Step: GC-116 of 200
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-115
- Understands: CPU architecture concepts
- Current project state: Guessing at bottlenecks
- Goal: Measure actual CPU behavior!

DEPENDENCIES COMPLETED:

- GC-094: Concurrent profiling - timing
- GC-112: Cache - metrics to measure

WHAT TO BUILD:
After learning perf:

- Profile G-code parser with perf
- Measure cache miss rate
- Find hot functions
- Measure branch misprediction rate
- Fix bottlenecks

NOTE: Measure, don't guess!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-117: Compiler Optimizations

```

Teach me Compiler Optimization - Optimization Levels (-O0, -O2, -O3), What Compiler Does, Optimization Flags using g++ and clang.

PROJECT CONTEXT:

- Step: GC-117 of 200 (LAST OF SPRINT 10)
- Sprint: Sprint 10 - CPU Architecture
- Completed: GC-001 through GC-116
- Understands: CPU behavior, performance
- Current project state: Using default compilation
- Goal: Let compiler optimize!

DEPENDENCIES COMPLETED:

- GC-005: Compilation - basic compilation
- GC-108: Program execution - what compiler produces

WHAT TO BUILD:
After learning compiler optimizations:

- Compare -O0 vs -O2 vs -O3 performance
- See assembly differences
- Understand inlining, loop unrolling
- Use -march=native for SIMD
- Measure speedup

DELIVERABLE: Complete understanding of CPU and compilation!

NEXT SPRINT: Sprint 11 - SIMD & CPU Parallelism

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 11: SIMD & VECTORIZATION (8 topics)

### GC-118: SIMD Concepts

```

Teach me SIMD - Single Instruction Multiple Data, Vector Operations, SSE/AVX Introduction using concepts.

PROJECT CONTEXT:

- Step: GC-118 of 200 (FIRST OF SPRINT 11)
- Sprint: Sprint 11 - SIMD & Vectorization
- Completed: GC-001 through GC-117 (understand CPU!)
- Understands: CPU architecture, optimization
- Current project state: Scalar processing only
- Goal: Process multiple data in parallel on CPU

DEPENDENCIES COMPLETED:

- GC-109: CPU basics - extending with SIMD

WHAT TO BUILD:
After learning SIMD:

- Understand SIMD concept (4 adds in one instruction!)
- SSE (128-bit, 4 floats) vs AVX (256-bit, 8 floats)
- When SIMD helps (data parallel operations)
- Visualize parallel processing

NOTE: 4-8x speedup for suitable code!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-119: Compiler Auto-Vectorization

```

Teach me Auto-Vectorization - Compiler Automatic SIMD, -O3 -march=native, Checking Vectorization using g++/clang.

PROJECT CONTEXT:

- Step: GC-119 of 200
- Sprint: Sprint 11 - SIMD
- Completed: GC-001 through GC-118
- Understands: SIMD concepts
- Current project state: Manual scalar code
- Goal: Let compiler vectorize automatically!

DEPENDENCIES COMPLETED:

- GC-117: Compiler optimizations - optimization flags
- GC-118: SIMD concepts - what compiler generates

WHAT TO BUILD:
After learning auto-vectorization:

- Write vectorizable loops
- Check if compiler vectorized (use -fopt-info-vec)
- Remove barriers to vectorization
- Benchmark scalar vs vectorized

NOTE: Easiest way to get SIMD speedup!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-120: SSE Intrinsics

```

Teach me SSE Intrinsics - Manual SIMD with Intrinsics, \_mm_add_ps, 4-wide Operations using C++ and SSE.

PROJECT CONTEXT:

- Step: GC-120 of 200
- Sprint: Sprint 11 - SIMD
- Completed: GC-001 through GC-119
- Understands: Auto-vectorization
- Current project state: Compiler-driven SIMD
- Goal: Manual control over SIMD!

DEPENDENCIES COMPLETED:

- GC-118: SIMD concepts - understanding SIMD
- GC-119: Auto-vectorization - when manual needed

WHAT TO BUILD:
After learning SSE intrinsics:

- Process 4 floats at once with SSE
- Vectorize distance calculations manually
- Handle remainder elements (non-multiple of 4)
- Compare to auto-vectorization

NOTE: Maximum control, but harder to write!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-121: AVX Intrinsics

```

Teach me AVX - 8-wide Operations, AVX2, AVX-512 Introduction using C++ and AVX.

PROJECT CONTEXT:

- Step: GC-121 of 200
- Sprint: Sprint 11 - SIMD
- Completed: GC-001 through GC-120
- Understands: SSE (128-bit SIMD)
- Current project state: 4-wide operations
- Goal: 8-wide operations with AVX!

DEPENDENCIES COMPLETED:

- GC-120: SSE intrinsics - extending to wider SIMD

WHAT TO BUILD:
After learning AVX:

- Process 8 floats/doubles at once
- Port SSE code to AVX
- Use AVX2 for integer operations
- Benchmark SSE vs AVX

NOTE: 2x wider than SSE!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-122: SIMD for G-code Processing

```

Teach me Practical SIMD - Vectorizing Distance Calculations, Coordinate Transformations using C++ and SIMD.

PROJECT CONTEXT:

- Step: GC-122 of 200
- Sprint: Sprint 11 - SIMD
- Completed: GC-001 through GC-121
- Understands: SSE, AVX intrinsics
- Current project state: Know intrinsics, not applied
- Goal: Speed up G-code processing with SIMD!

DEPENDENCIES COMPLETED:

- GC-121: AVX - SIMD tools
- GC-024: Distance calculation - code to vectorize

WHAT TO BUILD:
After learning practical SIMD:

- Vectorize distance calculations (process 8 segments at once)
- Vectorize coordinate transformations
- Handle edge cases (non-multiple of 8)
- Measure real speedup

NOTE: Applying SIMD to real problem!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-123: Parallel STL with SIMD

```

Teach me Parallel + SIMD - std::execution::par_unseq, Combined Parallelism using C++17.

PROJECT CONTEXT:

- Step: GC-123 of 200
- Sprint: Sprint 11 - SIMD
- Completed: GC-001 through GC-122
- Understands: Threading (Sprint 8), SIMD (Sprint 11)
- Current project state: Separate parallel and SIMD
- Goal: Combine both for maximum speed!

DEPENDENCIES COMPLETED:

- GC-093: Parallel STL - parallel algorithms
- GC-119: Auto-vectorization - SIMD

WHAT TO BUILD:
After learning combined parallelism:

- Use execution::par_unseq (parallel + vectorized)
- Process G-code with threads + SIMD
- Measure combined speedup
- Compare to just parallel or just SIMD

NOTE: Thread-level + instruction-level parallelism!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-124: OpenMP Basics

```

Teach me OpenMP - #pragma omp parallel, Easy Parallelization, Loop Parallelism using C++ and OpenMP.

PROJECT CONTEXT:

- Step: GC-124 of 200
- Sprint: Sprint 11 - SIMD
- Completed: GC-001 through GC-123
- Understands: Manual threading (Sprint 8)
- Current project state: std::thread for parallelism
- Goal: Easier parallelism with OpenMP!

DEPENDENCIES COMPLETED:

- GC-088: Parallel analysis - manual approach

WHAT TO BUILD:
After learning OpenMP:

- Parallel for loops with one pragma
- Parallel sections
- Reductions
- Compare to manual std::thread

NOTE: Industry standard for parallel computing!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-125: OpenMP SIMD

```

Teach me OpenMP SIMD - #pragma omp simd, Combined Parallel + SIMD using OpenMP.

PROJECT CONTEXT:

- Step: GC-125 of 200 (LAST OF SPRINT 11)
- Sprint: Sprint 11 - SIMD
- Completed: GC-001 through GC-124
- Understands: OpenMP, SIMD
- Current project state: Separate OpenMP and SIMD
- Goal: Easy combined parallelism!

DEPENDENCIES COMPLETED:

- GC-124: OpenMP basics - OpenMP parallelism
- GC-119: Auto-vectorization - SIMD

WHAT TO BUILD:
After learning OpenMP SIMD:

- Use #pragma omp simd for vectorization
- Combine #pragma omp parallel for simd
- Process G-code with maximum parallelism
- Benchmark all approaches

DELIVERABLE: Complete CPU parallelism toolkit!

- Threading (manual and OpenMP)
- SIMD (auto and manual)
- Combined parallelism
- Real speedups on G-code processing

NEXT SPRINT: Sprint 12 - GPU Foundation (Preparing for CUDA!)

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 12: GPU FOUNDATION (8 topics)

### GC-126: GPU Architecture Overview

```

Teach me GPU Basics - GPU vs CPU, Streaming Multiprocessors, Thousands of Threads using concepts.

PROJECT CONTEXT:

- Step: GC-126 of 200 (FIRST OF SPRINT 12)
- Sprint: Sprint 12 - GPU Foundation
- Completed: GC-001 through GC-125 (CPU mastery!)
- Understands: CPU architecture, SIMD, threading
- Current project state: CPU-only programming
- Goal: Understand GPU architecture

DEPENDENCIES COMPLETED:

- GC-109: CPU basics - for comparison
- GC-084: Concurrency - thread concepts

WHAT TO BUILD:
After learning GPU architecture:

- Compare CPU vs GPU (cores, threads, memory)
- Understand when GPU is faster
- GPU terminology (CUDA cores, SMs, warps)
- G-code use cases for GPU

NOTE: GPUs excel at data-parallel problems!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-127: Parallel Computing Patterns

```

Teach me Parallel Patterns - Map, Reduce, Scan, Stencil, When to Use Each using concepts.

PROJECT CONTEXT:

- Step: GC-127 of 200
- Sprint: Sprint 12 - GPU Foundation
- Completed: GC-001 through GC-126
- Understands: GPU architecture
- Current project state: Understand hardware
- Goal: Understand GPU programming patterns

DEPENDENCIES COMPLETED:

- GC-126: GPU architecture - target hardware

WHAT TO BUILD:
After learning patterns:

- Map pattern (transform each element)
- Reduce pattern (sum all elements)
- Scan pattern (prefix sum)
- Apply patterns to G-code analysis

NOTE: Fundamental patterns for parallel computing!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-128: Memory Bandwidth

```

Teach me Bandwidth - Transfer Speed, Latency, Bandwidth-Limited vs Compute-Limited using concepts.

PROJECT CONTEXT:

- Step: GC-128 of 200
- Sprint: Sprint 12 - GPU Foundation
- Completed: GC-001 through GC-127
- Understands: GPU patterns
- Current project state: Don't understand GPU bottlenecks
- Goal: Understand memory bandwidth

DEPENDENCIES COMPLETED:

- GC-111: Memory hierarchy - memory concepts

WHAT TO BUILD:
After learning bandwidth:

- Calculate memory bandwidth requirements
- Understand PCIe transfer costs
- Compute intensity concept
- Determine if GPU will help

NOTE: Many problems are bandwidth-limited!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-129: Roofline Model

```

Teach me Roofline Model - Compute vs Memory Bound, Performance Limits, Optimizing for Roofline using concepts.

PROJECT CONTEXT:

- Step: GC-129 of 200
- Sprint: Sprint 12 - GPU Foundation
- Completed: GC-001 through GC-128
- Understands: Bandwidth, compute
- Current project state: Don't know performance limits
- Goal: Understand theoretical performance limits

DEPENDENCIES COMPLETED:

- GC-128: Bandwidth - bandwidth concepts

WHAT TO BUILD:
After learning roofline:

- Plot code on roofline model
- Identify if memory or compute bound
- Calculate achievable performance
- Optimize G-code analysis based on roofline

NOTE: Understand what's theoretically possible!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-130: CUDA Installation

```

Teach me CUDA Setup - Installing CUDA Toolkit, nvcc Compiler, Verifying Installation using CUDA.

PROJECT CONTEXT:

- Step: GC-130 of 200
- Sprint: Sprint 12 - GPU Foundation
- Completed: GC-001 through GC-129
- Understands: GPU theory
- Current project state: No GPU tools installed
- Goal: Set up CUDA development environment!

DEPENDENCIES COMPLETED:

- None (practical setup)

WHAT TO BUILD:
After learning CUDA setup:

- Install CUDA Toolkit
- Verify nvcc works
- Check GPU properties
- Compile first CUDA program

NOTE: Finally ready to program GPU!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-131: Thrust Library - Easiest GPU Programming!

```

Teach me Thrust - High-Level GPU Programming, No Kernels Yet, thrust::device_vector using CUDA/Thrust.

PROJECT CONTEXT:

- Step: GC-131 of 200
- Sprint: Sprint 12 - GPU Foundation
- Completed: GC-001 through GC-130
- Understands: GPU concepts, CUDA installed
- Current project state: CUDA ready
- Goal: GPU programming without writing kernels!

DEPENDENCIES COMPLETED:

- GC-130: CUDA installation - have CUDA
- GC-010: Vectors - similar to device_vector

WHAT TO BUILD:
After learning Thrust:

- Use thrust::device_vector (GPU vector)
- Automatic CPU↔GPU transfer
- thrust::transform for map pattern
- Process G-code on GPU easily!

NOTE: Easiest way to use GPU - start here!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-132: Thrust Algorithms

```

Teach me Thrust Algorithms - transform, reduce, sort, scan, Parallel Algorithms on GPU using CUDA/Thrust.

PROJECT CONTEXT:

- Step: GC-132 of 200
- Sprint: Sprint 12 - GPU Foundation
- Completed: GC-001 through GC-131
- Understands: Thrust basics
- Current project state: Basic device_vector
- Goal: All Thrust algorithms!

DEPENDENCIES COMPLETED:

- GC-131: Thrust basics - foundation
- GC-058: STL algorithms - similar interface

WHAT TO BUILD:
After learning Thrust algorithms:

- Transform (map) G-code data
- Reduce (sum) distances
- Sort commands
- Scan (prefix sum)
- Measure GPU speedup

NOTE: All parallel patterns, easy interface!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-133: Thrust for G-code Analysis

```

Teach me Practical Thrust - GPU-Accelerated Distance Calculations, Real Performance Gains using CUDA/Thrust.

PROJECT CONTEXT:

- Step: GC-133 of 200 (LAST OF SPRINT 12)
- Sprint: Sprint 12 - GPU Foundation
- Completed: GC-001 through GC-132
- Understands: All Thrust algorithms
- Current project state: Know Thrust, not applied
- Goal: Real GPU speedup on G-code!

DEPENDENCIES COMPLETED:

- GC-132: Thrust algorithms - GPU tools
- GC-024: Distance calculation - problem to solve

WHAT TO BUILD:
After learning practical Thrust:

- Load G-code to GPU
- Calculate all distances on GPU
- Compare CPU vs GPU performance
- Handle large files (1M+ commands)

DELIVERABLE: Working GPU-accelerated G-code processor!

NEXT SPRINT: Sprint 13 - Writing CUDA Kernels

Start with Section 1 identifying all prerequisites and building blocks needed.

```
## SPRINT 13: WRITING CUDA KERNELS (12 topics)

### GC-134: Your First CUDA Kernel

```

Teach me CUDA Kernels - **global** Functions, Thread Blocks, Vector Addition Kernel using CUDA.

PROJECT CONTEXT:

- Step: GC-134 of 200 (FIRST OF SPRINT 13)
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-133 (Thrust mastery!)
- Understands: GPU programming with Thrust
- Current project state: High-level GPU only
- Goal: Write custom GPU kernels!

DEPENDENCIES COMPLETED:

- GC-131: Thrust - high-level GPU programming
- GC-127: Parallel patterns - kernel concepts

WHAT TO BUILD:
After learning CUDA kernels:

- Write simple **global** function
- Launch kernel with <<<blocks, threads>>>
- Vector addition on GPU
- Understand thread vs Thrust

NOTE: Going lower - direct GPU programming!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-135: Thread Indexing

```

Teach me CUDA Indexing - threadIdx, blockIdx, blockDim, gridDim, Mapping Threads to Data using CUDA.

PROJECT CONTEXT:

- Step: GC-135 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-134
- Understands: Basic kernel launch
- Current project state: Simple kernel
- Goal: Index threads correctly!

DEPENDENCIES COMPLETED:

- GC-134: First kernel - kernel basics

WHAT TO BUILD:
After learning thread indexing:

- Calculate global thread ID
- Map threads to array elements
- Handle out-of-bounds access
- 1D, 2D, and 3D indexing

NOTE: Critical for correct kernel execution!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-136: Memory Transfer CPU↔GPU

```

Teach me cudaMemcpy - Host to Device, Device to Host, Synchronous Transfer, Checking Errors using CUDA.

PROJECT CONTEXT:

- Step: GC-136 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-135
- Understands: Kernels, thread indexing
- Current project state: No data transfer yet
- Goal: Move data between CPU and GPU!

DEPENDENCIES COMPLETED:

- GC-134: First kernel - need data to process
- GC-099: Dynamic memory - similar concepts

WHAT TO BUILD:
After learning cudaMemcpy:

- Allocate device memory with cudaMalloc
- Copy data to GPU
- Launch kernel
- Copy results back to CPU
- Free device memory

NOTE: Manual memory management on GPU!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-137: Kernel Launch Configuration

```

Teach me Launch Configuration - Choosing Block Size, Grid Size, Occupancy, Optimal Configuration using CUDA.

PROJECT CONTEXT:

- Step: GC-137 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-136
- Understands: Launching kernels
- Current project state: Random block/grid sizes
- Goal: Optimal kernel launch parameters!

DEPENDENCIES COMPLETED:

- GC-134: First kernel - kernel launching

WHAT TO BUILD:
After learning launch configuration:

- Calculate optimal block size (typically 256 or 512)
- Calculate grid size from data size
- Understand occupancy
- Benchmark different configurations

NOTE: Configuration affects performance!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-138: 2D and 3D Grids

```

Teach me Multi-Dimensional Grids - 2D/3D Block and Grid Layout, Image Processing, Matrix Operations using CUDA.

PROJECT CONTEXT:

- Step: GC-138 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-137
- Understands: 1D grid launch
- Current project state: Linear indexing only
- Goal: Multi-dimensional data access!

DEPENDENCIES COMPLETED:

- GC-135: Thread indexing - 1D indexing

WHAT TO BUILD:
After learning 2D/3D grids:

- Launch 2D grid for matrix operations
- Calculate row/col from thread indices
- 3D grid for volumetric data
- Apply to G-code coordinate transformations

NOTE: Natural for 2D/3D problems!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-139: Error Handling in CUDA

```

Teach me CUDA Error Handling - cudaError_t, Checking for Errors, Debugging GPU Code using CUDA.

PROJECT CONTEXT:

- Step: GC-139 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-138
- Understands: CUDA basics
- Current project state: No error checking
- Goal: Robust CUDA code!

DEPENDENCIES COMPLETED:

- GC-136: cudaMemcpy - API calls that can fail
- GC-077: Exception handling - error concepts

WHAT TO BUILD:
After learning error handling:

- Check cudaError_t from API calls
- Create error checking macro
- Handle kernel launch failures
- Debug common CUDA errors

NOTE: GPU errors are cryptic - catch them early!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-140: Unified Memory

```

Teach me Unified Memory - cudaMallocManaged, Automatic Migration, Easier Memory Management using CUDA.

PROJECT CONTEXT:

- Step: GC-140 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-139
- Understands: Manual cudaMemcpy
- Current project state: Manual memory transfers
- Goal: Automatic memory management!

DEPENDENCIES COMPLETED:

- GC-136: cudaMemcpy - manual approach

WHAT TO BUILD:
After learning unified memory:

- Use cudaMallocManaged instead of cudaMalloc
- Access from CPU and GPU with same pointer
- Understand page migration
- Compare performance to manual transfer

NOTE: Easier programming, similar performance!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-141: G-code Processing Kernel

```

Teach me Custom Kernels - Writing Kernel for G-code Analysis, Distance Calculation on GPU using CUDA.

PROJECT CONTEXT:

- Step: GC-141 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-140
- Understands: All kernel basics
- Current project state: Generic kernels only
- Goal: Custom G-code kernel!

DEPENDENCIES COMPLETED:

- GC-134: First kernel - kernel writing
- GC-024: Distance calculation - algorithm to implement

WHAT TO BUILD:
After learning custom kernels:

- Write distance calculation kernel
- Process multiple segments in parallel
- Handle G0 vs G1 moves
- Benchmark vs CPU and Thrust

NOTE: Applying GPU to our specific problem!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-142: Profiling with nvprof/nsys

```

Teach me CUDA Profiling - nvprof, nsys (Nsight Systems), Finding Bottlenecks, Kernel Timing using CUDA tools.

PROJECT CONTEXT:

- Step: GC-142 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-141
- Understands: Writing kernels
- Current project state: Don't know GPU bottlenecks
- Goal: Profile and optimize GPU code!

DEPENDENCIES COMPLETED:

- GC-116: perf (CPU profiling) - similar concepts
- GC-141: G-code kernel - code to profile

WHAT TO BUILD:
After learning CUDA profiling:

- Profile with nvprof/nsys
- Identify kernel bottlenecks
- Measure memory transfer overhead
- Find optimization opportunities

NOTE: Measure GPU performance accurately!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-143: Warp Basics

```

Teach me Warps - 32-Thread Execution Units, Warp Divergence, SIMT Model using CUDA.

PROJECT CONTEXT:

- Step: GC-143 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-142
- Understands: Thread execution
- Current project state: Thread-level understanding
- Goal: Warp-level understanding!

DEPENDENCIES COMPLETED:

- GC-135: Thread indexing - thread concepts

WHAT TO BUILD:
After learning warps:

- Understand 32-thread warp execution
- See warp divergence penalty
- Write warp-friendly code
- Minimize divergent branches

NOTE: Fundamental GPU execution unit!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-144: Memory Coalescing

```

Teach me Coalesced Access - Aligned Memory Access, Stride Patterns, Performance Impact using CUDA.

PROJECT CONTEXT:

- Step: GC-144 of 200
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-143
- Understands: GPU memory, warps
- Current project state: Random memory access
- Goal: Efficient memory access patterns!

DEPENDENCIES COMPLETED:

- GC-136: cudaMemcpy - GPU memory
- GC-112: CPU cache - similar concepts

WHAT TO BUILD:
After learning coalescing:

- Access memory sequentially in warp
- Avoid strided access
- Measure coalesced vs uncoalesced performance
- Optimize G-code data layout

NOTE: 10x speedup from proper memory access!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-145: Kernel Optimization Basics

```

Teach me Kernel Optimization - Occupancy, Register Usage, Instruction Throughput, Basic Tuning using CUDA.

PROJECT CONTEXT:

- Step: GC-145 of 200 (LAST OF SPRINT 13)
- Sprint: Sprint 13 - Writing CUDA Kernels
- Completed: GC-001 through GC-144
- Understands: All kernel fundamentals
- Current project state: Working kernels
- Goal: Fast kernels!

DEPENDENCIES COMPLETED:

- GC-142: Profiling - finding bottlenecks
- GC-144: Coalescing - memory optimization

WHAT TO BUILD:
After learning optimization:

- Maximize occupancy
- Reduce register pressure
- Unroll loops
- Optimize G-code kernel for speed

DELIVERABLE: Custom GPU kernels that are fast!

NEXT SPRINT: Sprint 14 - Advanced CUDA Memory

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 14: ADVANCED CUDA MEMORY (10 topics)

### GC-146: CUDA Memory Hierarchy

```

Teach me CUDA Memory Types - Global, Shared, Local, Constant, Texture, Memory Characteristics using CUDA.

PROJECT CONTEXT:

- Step: GC-146 of 200 (FIRST OF SPRINT 14)
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-145 (basic kernels work!)
- Understands: Global memory only
- Current project state: Only using global memory
- Goal: All GPU memory types!

DEPENDENCIES COMPLETED:

- GC-136: cudaMemcpy - global memory
- GC-111: CPU memory hierarchy - similar concepts

WHAT TO BUILD:
After learning memory types:

- Understand memory speeds and sizes
- Choose appropriate memory for data
- Memory access patterns
- Performance characteristics

NOTE: Different memories for different needs!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-147: Shared Memory

```

Teach me Shared Memory - **shared** Variables, Fast Inter-Thread Communication, Tiling using CUDA.

PROJECT CONTEXT:

- Step: GC-147 of 200
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-146
- Understands: Memory types
- Current project state: Global memory only
- Goal: Use fast shared memory!

DEPENDENCIES COMPLETED:

- GC-146: Memory types - shared memory concept

WHAT TO BUILD:
After learning shared memory:

- Declare **shared** arrays
- Load data from global to shared
- Synchronize with \_\_syncthreads()
- Use for reduction operations

NOTE: ~100x faster than global memory!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-148: Shared Memory Bank Conflicts

```

Teach me Bank Conflicts - Memory Banks, Avoiding Conflicts, Padding Arrays using CUDA.

PROJECT CONTEXT:

- Step: GC-148 of 200
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-147
- Understands: Shared memory basics
- Current project state: Slow shared memory access
- Goal: Fast shared memory access!

DEPENDENCIES COMPLETED:

- GC-147: Shared memory - using shared memory

WHAT TO BUILD:
After learning bank conflicts:

- Understand 32 memory banks
- Detect bank conflicts
- Pad arrays to avoid conflicts
- Measure performance improvement

NOTE: Subtle but important for performance!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-149: Tiled Matrix Multiplication

```

Teach me Tiled Matrix Multiply - Using Shared Memory, Performance Optimization, Classic GPU Algorithm using CUDA.

PROJECT CONTEXT:

- Step: GC-149 of 200
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-148
- Understands: Shared memory, bank conflicts
- Current project state: Know techniques
- Goal: Apply to real algorithm!

DEPENDENCIES COMPLETED:

- GC-147: Shared memory - optimization technique
- GC-070: 3D matrices - matrix operations

WHAT TO BUILD:
After learning tiled matmul:

- Implement tiled matrix multiplication
- Use shared memory for tiles
- Compare to naive version
- Apply to coordinate transformations

NOTE: Classic GPU optimization example!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-150: Constant Memory

```

Teach me Constant Memory - **constant**, Read-Only Cache, Broadcasting, Use Cases using CUDA.

PROJECT CONTEXT:

- Step: GC-150 of 200
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-149
- Understands: Global and shared memory
- Current project state: No constant memory
- Goal: Optimize read-only data access!

DEPENDENCIES COMPLETED:

- GC-146: Memory types - constant memory

WHAT TO BUILD:
After learning constant memory:

- Declare **constant** variables
- Use for transformation matrices
- Understand broadcasting
- Measure speedup

NOTE: Fast for read-only data accessed by all threads!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-151: Texture Memory

```

Teach me Texture Memory - Texture Objects, 2D Caching, Spatial Locality, Image Processing using CUDA.

PROJECT CONTEXT:

- Step: GC-151 of 200
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-150
- Understands: Other memory types
- Current project state: No texture memory
- Goal: Optimize 2D/3D data access!

DEPENDENCIES COMPLETED:

- GC-146: Memory types - texture memory

WHAT TO BUILD:
After learning texture memory:

- Create texture objects
- Use for 2D grid data
- Exploit 2D spatial locality
- Apply to visualization data

NOTE: Specialized for 2D/3D access patterns!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-152: Pinned Memory

```

Teach me Pinned Memory - cudaHostAlloc, Faster Transfers, Page-Locked Memory using CUDA.

PROJECT CONTEXT:

- Step: GC-152 of 200
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-151
- Understands: Device memory
- Current project state: Slow CPU↔GPU transfers
- Goal: Faster data transfers!

DEPENDENCIES COMPLETED:

- GC-136: cudaMemcpy - transfers to optimize

WHAT TO BUILD:
After learning pinned memory:

- Allocate pinned (page-locked) memory
- Compare transfer speeds
- Understand when to use
- Balance memory usage

NOTE: ~2x faster transfers!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-153: Asynchronous Transfers

```

Teach me Async Transfers - cudaMemcpyAsync, Overlapping Compute and Transfer, Streams Introduction using CUDA.

PROJECT CONTEXT:

- Step: GC-153 of 200
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-152
- Understands: Synchronous transfers
- Current project state: Waiting for transfers
- Goal: Overlap transfer and compute!

DEPENDENCIES COMPLETED:

- GC-152: Pinned memory - required for async

WHAT TO BUILD:
After learning async transfers:

- Use cudaMemcpyAsync
- Create CUDA streams
- Pipeline data processing
- Hide transfer latency

NOTE: Process while transferring next batch!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-154: CUDA Streams

```

Teach me CUDA Streams - Concurrent Kernel Execution, Stream Priorities, Synchronization using CUDA.

PROJECT CONTEXT:

- Step: GC-154 of 200
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-153
- Understands: Async transfers
- Current project state: Single stream
- Goal: Multiple concurrent operations!

DEPENDENCIES COMPLETED:

- GC-153: Async transfers - streams introduced

WHAT TO BUILD:
After learning streams:

- Create multiple streams
- Launch kernels in different streams
- Synchronize streams
- Process multiple files concurrently

NOTE: Maximize GPU utilization!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-155: Stream Synchronization

```

Teach me Stream Sync - cudaStreamWaitEvent, Dependencies Between Streams, Event-Based Sync using CUDA.

PROJECT CONTEXT:

- Step: GC-155 of 200 (LAST OF SPRINT 14)
- Sprint: Sprint 14 - Advanced CUDA Memory
- Completed: GC-001 through GC-154
- Understands: Multiple streams
- Current project state: Independent streams
- Goal: Coordinate between streams!

DEPENDENCIES COMPLETED:

- GC-154: CUDA streams - multiple streams

WHAT TO BUILD:
After learning stream sync:

- Create CUDA events
- Wait for events between streams
- Build complex pipelines
- Optimize G-code processing pipeline

DELIVERABLE: Advanced memory management and pipelining!

NEXT SPRINT: Sprint 15 - CUDA Optimization Advanced

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 15: CUDA OPTIMIZATION ADVANCED (10 topics)

### GC-156: Parallel Reduction on GPU

```

Teach me GPU Reduction - Tree-Based Reduction, Optimizing with Shared Memory, Fast Sum/Min/Max using CUDA.

PROJECT CONTEXT:

- Step: GC-156 of 200 (FIRST OF SPRINT 15)
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-155
- Understands: Shared memory, synchronization
- Current project state: Can reduce with Thrust
- Goal: Optimized custom reduction!

DEPENDENCIES COMPLETED:

- GC-147: Shared memory - reduction optimization
- GC-132: Thrust reduce - high-level version

WHAT TO BUILD:
After learning GPU reduction:

- Implement tree reduction in shared memory
- Multiple levels of reduction
- Warp-level optimization
- Compare to Thrust performance

NOTE: Fundamental parallel primitive!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-157: Atomic Operations

```

Teach me Atomics - atomicAdd, atomicMin/Max, Race Conditions on GPU, When to Use using CUDA.

PROJECT CONTEXT:

- Step: GC-157 of 200
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-156
- Understands: CPU atomics from GC-090
- Current project state: No GPU atomics
- Goal: Safe concurrent updates on GPU!

DEPENDENCIES COMPLETED:

- GC-090: CPU atomics - atomic concepts

WHAT TO BUILD:
After learning GPU atomics:

- Use atomicAdd for global counter
- Histogram with atomics
- Understand performance cost
- When atomics vs reduction

NOTE: Atomics are slow - avoid when possible!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-158: Avoiding Atomics

```

Teach me Atomic Alternatives - Per-Thread Reduction, Thread-Local Accumulators, Avoiding Contention using CUDA.

PROJECT CONTEXT:

- Step: GC-158 of 200
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-157
- Understands: Atomics and their cost
- Current project state: Using atomics everywhere
- Goal: Fast algorithms without atomics!

DEPENDENCIES COMPLETED:

- GC-157: Atomics - problem to solve
- GC-156: Reduction - alternative approach

WHAT TO BUILD:
After learning atomic alternatives:

- Use per-thread accumulators
- Reduce locally, then globally
- Compare atomic vs reduction performance
- Apply to G-code statistics

NOTE: Orders of magnitude faster!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-159: Warp-Level Primitives

```

Teach me Warp Intrinsics - **shfl, **ballot, Warp Reduce, Cooperative Groups using CUDA.

PROJECT CONTEXT:

- Step: GC-159 of 200
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-158
- Understands: Warps from GC-143
- Current project state: No warp-level programming
- Goal: Fastest possible GPU code!

DEPENDENCIES COMPLETED:

- GC-143: Warp basics - warp understanding

WHAT TO BUILD:
After learning warp intrinsics:

- Use \_\_shfl for warp communication
- Warp-level reduction (no shared memory!)
- Cooperative groups
- Ultra-fast primitives

NOTE: Cutting-edge GPU optimization!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-160: Occupancy Optimization

```

Teach me Occupancy - Maximizing Active Warps, Register Pressure, Block Size Tuning using CUDA.

PROJECT CONTEXT:

- Step: GC-160 of 200
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-159
- Understands: Occupancy concept from GC-145
- Current project state: Low occupancy
- Goal: Maximum GPU utilization!

DEPENDENCIES COMPLETED:

- GC-145: Kernel optimization basics - occupancy introduced

WHAT TO BUILD:
After learning occupancy optimization:

- Calculate occupancy with CUDA tools
- Reduce register usage
- Tune block size
- Balance occupancy vs performance

NOTE: More warps = better GPU utilization!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-161: Dynamic Parallelism

```

Teach me Dynamic Parallelism - Launching Kernels from Kernels, Recursive Algorithms, Use Cases using CUDA.

PROJECT CONTEXT:

- Step: GC-161 of 200
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-160
- Understands: Kernel launching from CPU
- Current project state: CPU launches all kernels
- Goal: GPU launches its own kernels!

DEPENDENCIES COMPLETED:

- GC-134: First kernel - kernel launching

WHAT TO BUILD:
After learning dynamic parallelism:

- Launch child kernels from GPU
- Recursive algorithms on GPU
- Understand overhead
- When dynamic parallelism helps

NOTE: Advanced feature - use sparingly!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-162: cuBLAS Library

```

Teach me cuBLAS - GPU Linear Algebra, Matrix Multiplication, BLAS Operations using CUDA/cuBLAS.

PROJECT CONTEXT:

- Step: GC-162 of 200
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-161
- Understands: Matrix operations
- Current project state: Custom matrix code
- Goal: Use optimized GPU libraries!

DEPENDENCIES COMPLETED:

- GC-149: Tiled matmul - manual implementation
- GC-070: 3D matrices - matrix operations

WHAT TO BUILD:
After learning cuBLAS:

- Use cublasSgemm for matrix multiply
- Vector operations (dot, norms)
- Apply to coordinate transformations
- Compare to custom kernels

NOTE: Highly optimized - hard to beat!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-163: cuFFT Library

```

Teach me cuFFT - Fast Fourier Transform on GPU, Frequency Analysis using CUDA/cuFFT.

PROJECT CONTEXT:

- Step: GC-163 of 200
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-162
- Understands: GPU libraries
- Current project state: No FFT capability
- Goal: Frequency domain analysis!

DEPENDENCIES COMPLETED:

- GC-162: cuBLAS - GPU library usage

WHAT TO BUILD:
After learning cuFFT:

- Compute FFT on GPU
- Analyze G-code movement frequencies
- Filter high-frequency noise
- Smooth toolpaths

NOTE: Signal processing on GPU!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-164: cuRAND Library

```

Teach me cuRAND - Random Number Generation on GPU, Parallel RNG, Monte Carlo using CUDA/cuRAND.

PROJECT CONTEXT:

- Step: GC-164 of 200
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-163
- Understands: GPU libraries
- Current project state: No random numbers on GPU
- Goal: Random generation for simulations!

DEPENDENCIES COMPLETED:

- GC-162: cuBLAS - GPU library pattern

WHAT TO BUILD:
After learning cuRAND:

- Generate random numbers on GPU
- Parallel random number streams
- Monte Carlo simulation
- Stochastic algorithms

NOTE: Essential for simulations!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-165: Multi-GPU Programming

```

Teach me Multi-GPU - cudaSetDevice, Peer Access, Scaling to Multiple GPUs, Data Distribution using CUDA.

PROJECT CONTEXT:

- Step: GC-165 of 200 (LAST OF SPRINT 15)
- Sprint: Sprint 15 - Advanced CUDA Optimization
- Completed: GC-001 through GC-164
- Understands: Single GPU programming
- Current project state: Using one GPU
- Goal: Scale to multiple GPUs!

DEPENDENCIES COMPLETED:

- GC-134: Kernels - single GPU foundation

WHAT TO BUILD:
After learning multi-GPU:

- Detect available GPUs
- Distribute work across GPUs
- Peer-to-peer memory access
- Process multiple G-code files on different GPUs

DELIVERABLE: Complete CUDA mastery!

- Custom optimized kernels
- Advanced memory techniques
- GPU libraries
- Multi-GPU programming

NEXT SPRINT: Sprint 16 - Advanced OpenGL & Visualization

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 16: ADVANCED OPENGL (8 topics)

### GC-166: Advanced Shaders

```

Teach me Advanced Shaders - Geometry Shaders, Tessellation Shaders, Compute Shaders using OpenGL/GLSL.

PROJECT CONTEXT:

- Step: GC-166 of 200 (FIRST OF SPRINT 16)
- Sprint: Sprint 16 - Advanced OpenGL
- Completed: GC-001 through GC-165 (CUDA mastery!)
- Understands: Basic shaders from Sprint 6
- Current project state: Vertex/fragment shaders only
- Goal: All shader types!

DEPENDENCIES COMPLETED:

- GC-066: Shaders introduction - basic shaders

WHAT TO BUILD:
After learning advanced shaders:

- Geometry shader for line thickness
- Tessellation for smooth curves
- Compute shader for GPU processing
- Enhance G-code visualization

NOTE: More control over rendering pipeline!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-167: Instanced Rendering

```

Teach me Instancing - Drawing Multiple Objects Efficiently, Instance Attributes using OpenGL.

PROJECT CONTEXT:

- Step: GC-167 of 200
- Sprint: Sprint 16 - Advanced OpenGL
- Completed: GC-001 through GC-166
- Understands: Drawing basics
- Current project state: Rendering many objects slowly
- Goal: Efficient rendering of many objects!

DEPENDENCIES COMPLETED:

- GC-101: Drawing - basic rendering

WHAT TO BUILD:
After learning instancing:

- Draw 10000+ toolpath segments efficiently
- Instance attributes for per-object data
- Render multiple toolpaths simultaneously
- Massive performance improvement

NOTE: Essential for rendering many objects!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-168: Framebuffers and Render Targets

```

Teach me FBOs - Render to Texture, Offscreen Rendering, Post-Processing using OpenGL.

PROJECT CONTEXT:

- Step: GC-168 of 200
- Sprint: Sprint 16 - Advanced OpenGL
- Completed: GC-001 through GC-167
- Understands: Rendering to screen
- Current project state: Direct screen rendering only
- Goal: Render to texture for effects!

DEPENDENCIES COMPLETED:

- GC-065: Drawing - basic rendering

WHAT TO BUILD:
After learning FBOs:

- Render scene to texture
- Apply post-processing effects
- Multi-pass rendering
- Create depth/normal buffers

NOTE: Foundation for advanced effects!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-169: Shadow Mapping

```

Teach me Shadows - Shadow Maps, Depth Pass, PCF (Percentage Closer Filtering) using OpenGL.

PROJECT CONTEXT:

- Step: GC-169 of 200
- Sprint: Sprint 16 - Advanced OpenGL
- Completed: GC-001 through GC-168
- Understands: FBOs, depth testing
- Current project state: No shadows
- Goal: Realistic shadows!

DEPENDENCIES COMPLETED:

- GC-168: FBOs - render to texture
- GC-108: Depth testing - depth concepts

WHAT TO BUILD:
After learning shadow mapping:

- Render depth from light's view
- Use depth map in main render
- PCF for soft shadows
- Shadow-casted toolpaths

NOTE: Dramatic visual improvement!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-170: Deferred Rendering

```

Teach me Deferred Rendering - G-Buffer, Multiple Render Targets, Many Lights using OpenGL.

PROJECT CONTEXT:

- Step: GC-170 of 200
- Sprint: Sprint 16 - Advanced OpenGL
- Completed: GC-001 through GC-169
- Understands: Forward rendering
- Current project state: Limited lighting
- Goal: Many dynamic lights!

DEPENDENCIES COMPLETED:

- GC-168: FBOs - multiple render targets

WHAT TO BUILD:
After learning deferred rendering:

- Create G-buffer (position, normal, color)
- Lighting pass
- Support 100+ lights
- Visualize machine tool lights

NOTE: Modern rendering technique!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-171: OpenGL Compute Shaders

```

Teach me GL Compute - GPGPU in OpenGL, Compute Pipelines, Integration with Rendering using OpenGL.

PROJECT CONTEXT:

- Step: GC-171 of 200
- Sprint: Sprint 16 - Advanced OpenGL
- Completed: GC-001 through GC-170
- Understands: CUDA compute (Sprint 13-15)
- Current project state: Separate CUDA for compute
- Goal: Compute and render in OpenGL!

DEPENDENCIES COMPLETED:

- GC-141: CUDA kernels - compute concepts
- GC-166: Advanced shaders - compute shaders

WHAT TO BUILD:
After learning GL compute:

- Process G-code in compute shader
- Update vertex buffers from compute
- Tightly integrated compute + render
- Compare to CUDA + OpenGL

NOTE: Alternative to CUDA for graphics apps!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-172: OpenGL-CUDA Interop

```

Teach me GL-CUDA Interop - Sharing Buffers, Zero-Copy Rendering, cudaGraphicsResource using OpenGL/CUDA.

PROJECT CONTEXT:

- Step: GC-172 of 200
- Sprint: Sprint 16 - Advanced OpenGL
- Completed: GC-001 through GC-171
- Understands: OpenGL AND CUDA separately
- Current project state: Copying data between GL and CUDA
- Goal: Zero-copy shared buffers!

DEPENDENCIES COMPLETED:

- GC-073: OpenGL viewer - OpenGL side
- GC-141: CUDA kernels - CUDA side

WHAT TO BUILD:
After learning interop:

- Register OpenGL buffer with CUDA
- Process in CUDA kernel
- Render directly in OpenGL
- No CPU copies!

NOTE: Best of both worlds!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-173: Real-Time G-code Visualization

```

Teach me Complete Visualization - Dynamic Updates, GPU-Accelerated Rendering, Interactive Viewer using OpenGL/CUDA.

PROJECT CONTEXT:

- Step: GC-173 of 200 (LAST OF SPRINT 16)
- Sprint: Sprint 16 - Advanced OpenGL
- Completed: GC-001 through GC-172
- Understands: All OpenGL and CUDA techniques
- Current project state: All pieces separate
- Goal: Complete integrated system!

DEPENDENCIES COMPLETED:

- All Sprint 16 topics
- GC-073: Basic viewer - foundation

WHAT TO BUILD:
After learning complete visualization:

- Real-time G-code updates
- GPU processing of changes
- High-performance rendering
- Interactive 3D viewer with all features

DELIVERABLE: Production-quality G-code visualizer!

- Fast rendering (1M+ segments)
- Real-time updates
- Advanced lighting and shadows
- GPU-accelerated processing

NEXT SPRINT: Sprint 17 - Ray Tracing & OptiX

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 17: RAY TRACING & OPTIX (8 topics)

### GC-174: Ray Tracing Fundamentals

```

Teach me Ray Tracing - Ray-Sphere Intersection, Ray-Triangle Intersection, Basic Ray Tracer using C++.

PROJECT CONTEXT:

- Step: GC-174 of 200 (FIRST OF SPRINT 17)
- Sprint: Sprint 17 - Ray Tracing & OptiX
- Completed: GC-001 through GC-173
- Understands: Rasterization (OpenGL)
- Current project state: Rasterization-based rendering
- Goal: Physically-based rendering!

DEPENDENCIES COMPLETED:

- GC-092: 3D vectors - ray math
- GC-099: Geometry - intersection tests

WHAT TO BUILD:
After learning ray tracing:

- Implement ray-sphere intersection
- Ray-triangle intersection
- Simple CPU ray tracer
- Render G-code toolpath with ray tracing

NOTE: Foundation for photorealistic rendering!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-175: Acceleration Structures - BVH

```

Teach me BVH - Bounding Volume Hierarchy, Fast Ray Tracing, Tree Construction using C++.

PROJECT CONTEXT:

- Step: GC-175 of 200
- Sprint: Sprint 17 - Ray Tracing & OptiX
- Completed: GC-001 through GC-174
- Understands: Basic ray tracing
- Current project state: Slow ray tracing (test every triangle)
- Goal: Fast ray tracing!

DEPENDENCIES COMPLETED:

- GC-174: Ray tracing - algorithm to accelerate
- GC-085: Binary trees - tree structure

WHAT TO BUILD:
After learning BVH:

- Build bounding volume hierarchy
- Traverse BVH for ray queries
- Compare speeds (linear vs BVH)
- 100-1000x speedup!

NOTE: Essential for practical ray tracing!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-176: Materials and Shading

```

Teach me Ray Tracing Materials - Diffuse, Specular, Reflection, Refraction using C++.

PROJECT CONTEXT:

- Step: GC-176 of 200
- Sprint: Sprint 17 - Ray Tracing & OptiX
- Completed: GC-001 through GC-175
- Understands: Ray intersection
- Current project state: Basic geometry only
- Goal: Realistic materials!

DEPENDENCIES COMPLETED:

- GC-174: Ray tracing - rendering foundation

WHAT TO BUILD:
After learning materials:

- Diffuse (matte) materials
- Specular (shiny) materials
- Perfect reflection (mirrors)
- Recursive ray tracing

NOTE: Photorealistic rendering!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-177: NVIDIA OptiX Introduction

```

Teach me OptiX Basics - Ray Tracing Framework, Setup, Architecture using OptiX.

PROJECT CONTEXT:

- Step: GC-177 of 200
- Sprint: Sprint 17 - Ray Tracing & OptiX
- Completed: GC-001 through GC-176
- Understands: CPU ray tracing
- Current project state: Slow CPU ray tracer
- Goal: GPU-accelerated ray tracing!

DEPENDENCIES COMPLETED:

- GC-130: CUDA setup - CUDA installed
- GC-174: Ray tracing - algorithm to accelerate

WHAT TO BUILD:
After learning OptiX:

- Install OptiX
- Understand OptiX architecture
- First OptiX program
- Compare to CPU ray tracer

NOTE: NVIDIA's GPU ray tracing engine!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-178: OptiX Programs

```

Teach me OptiX Programs - Ray Generation, Closest Hit, Miss Programs, Any Hit using OptiX.

PROJECT CONTEXT:

- Step: GC-178 of 200
- Sprint: Sprint 17 - Ray Tracing & OptiX
- Completed: GC-001 through GC-177
- Understands: OptiX basics
- Current project state: Basic OptiX setup
- Goal: Custom ray tracing behavior!

DEPENDENCIES COMPLETED:

- GC-177: OptiX intro - framework setup

WHAT TO BUILD:
After learning OptiX programs:

- Ray generation program (camera)
- Closest hit program (shading)
- Miss program (background)
- Any hit program (shadows)

NOTE: Programming the ray tracing pipeline!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-179: OptiX Acceleration Structures

```

Teach me OptiX AS - Building Acceleration Structures, Hardware RT Cores, OptiX BVH using OptiX.

PROJECT CONTEXT:

- Step: GC-179 of 200
- Sprint: Sprint 17 - Ray Tracing & OptiX
- Completed: GC-001 through GC-178
- Understands: BVH concept, OptiX programs
- Current project state: OptiX programs written
- Goal: Hardware-accelerated traversal!

DEPENDENCIES COMPLETED:

- GC-175: BVH - concept
- GC-178: OptiX programs - programs to run

WHAT TO BUILD:
After learning OptiX AS:

- Build OptiX acceleration structure
- Use RT cores for traversal
- Massive speedup from hardware
- Ray trace G-code toolpaths

NOTE: Hardware ray tracing acceleration!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-180: Path Tracing

```

Teach me Path Tracing - Monte Carlo Integration, Global Illumination, Realistic Lighting using OptiX.

PROJECT CONTEXT:

- Step: GC-180 of 200
- Sprint: Sprint 17 - Ray Tracing & OptiX
- Completed: GC-001 through GC-179
- Understands: Basic ray tracing
- Current project state: Direct lighting only
- Goal: Photorealistic global illumination!

DEPENDENCIES COMPLETED:

- GC-176: Materials - reflection/refraction
- GC-164: cuRAND - random numbers for Monte Carlo

WHAT TO BUILD:
After learning path tracing:

- Implement path tracer
- Multiple bounces
- Global illumination
- Realistic G-code scene rendering

NOTE: Film-quality rendering!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-181: AI Denoising

```

Teach me AI Denoising - OptiX AI Denoiser, Real-Time Path Tracing, Neural Denoising using OptiX.

PROJECT CONTEXT:

- Step: GC-181 of 200 (LAST OF SPRINT 17)
- Sprint: Sprint 17 - Ray Tracing & OptiX
- Completed: GC-001 through GC-180
- Understands: Path tracing
- Current project state: Noisy path traced images
- Goal: Real-time photorealistic rendering!

DEPENDENCIES COMPLETED:

- GC-180: Path tracing - noisy output to denoise

WHAT TO BUILD:
After learning AI denoising:

- Use OptiX denoiser
- 1 sample path tracing + denoise
- Real-time photorealistic rendering
- Production-quality G-code visualization

DELIVERABLE: Complete ray tracing system!

- CPU and GPU ray tracing
- Hardware acceleration
- Photorealistic rendering
- AI denoising

NEXT SPRINT: Sprint 18 - AI/ML with TensorRT

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 18: AI/ML INTEGRATION (10 topics)

### GC-182: Neural Network Basics

```

Teach me Neural Networks - Layers, Activation Functions, Forward Pass, What is Inference using concepts.

PROJECT CONTEXT:

- Step: GC-182 of 200 (FIRST OF SPRINT 18)
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-181
- Understands: Math, matrices, GPU programming
- Current project state: No AI/ML
- Goal: Understand neural networks!

DEPENDENCIES COMPLETED:

- GC-070: 3D matrices - matrix operations
- GC-162: cuBLAS - matrix operations on GPU

WHAT TO BUILD:
After learning neural networks:

- Understand layers, weights, biases
- Forward propagation
- Activation functions (ReLU, sigmoid)
- Inference vs training (only inference for now)

NOTE: Foundation for AI integration!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-183: Convolutional Neural Networks

```

Teach me CNNs - Convolutions, Pooling, Image Recognition, CNN Architecture using concepts.

PROJECT CONTEXT:

- Step: GC-183 of 200
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-182
- Understands: Basic neural networks
- Current project state: Feedforward networks only
- Goal: Understand CNNs for vision!

DEPENDENCIES COMPLETED:

- GC-182: Neural networks - foundation

WHAT TO BUILD:
After learning CNNs:

- Understand convolution operation
- Pooling layers
- CNN architecture
- Apply to G-code visualization analysis

NOTE: Standard for computer vision!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-184: ONNX Model Format

```

Teach me ONNX - Open Neural Network Exchange, Model Interoperability, Loading Models using ONNX.

PROJECT CONTEXT:

- Step: GC-184 of 200
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-183
- Understands: Neural network concepts
- Current project state: No trained models
- Goal: Use pre-trained models!

DEPENDENCIES COMPLETED:

- GC-182: Neural networks - what models represent

WHAT TO BUILD:
After learning ONNX:

- Understand ONNX format
- Export model from PyTorch/TensorFlow to ONNX
- Load ONNX model in C++
- Model zoo for pre-trained models

NOTE: Standard format for model exchange!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-185: TensorRT Introduction

```

Teach me TensorRT Basics - NVIDIA Inference Engine, Optimization, Setup using TensorRT.

PROJECT CONTEXT:

- Step: GC-185 of 200
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-184
- Understands: ONNX models, GPU programming
- Current project state: Have models, no inference
- Goal: Fast GPU inference!

DEPENDENCIES COMPLETED:

- GC-184: ONNX - model format
- GC-130: CUDA - GPU programming

WHAT TO BUILD:
After learning TensorRT:

- Install TensorRT
- Understand optimization process
- Load first model
- Compare to CPU inference

NOTE: Optimized for NVIDIA GPUs!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-186: Building TensorRT Engines

```

Teach me TensorRT Engines - ONNX to TensorRT, Building Engines, Serialization using TensorRT.

PROJECT CONTEXT:

- Step: GC-186 of 200
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-185
- Understands: TensorRT basics
- Current project state: TensorRT installed
- Goal: Optimize models for deployment!

DEPENDENCIES COMPLETED:

- GC-185: TensorRT intro - framework setup

WHAT TO BUILD:
After learning engine building:

- Convert ONNX to TensorRT
- Build optimized engine
- Serialize for deployment
- Load serialized engine

NOTE: One-time optimization, fast runtime!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-187: Running Inference

```

Teach me TensorRT Inference - Input/Output Tensors, Batch Processing, Low-Latency Inference using TensorRT.

PROJECT CONTEXT:

- Step: GC-187 of 200
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-186
- Understands: Building engines
- Current project state: Have optimized engine
- Goal: Run inference on data!

DEPENDENCIES COMPLETED:

- GC-186: Engine building - have engine to run

WHAT TO BUILD:
After learning inference:

- Allocate GPU buffers for input/output
- Copy data to GPU
- Execute inference
- Get results
- Measure latency

NOTE: Production inference pipeline!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-188: Computer Vision for G-code

```

Teach me CV Applications - Defect Detection, Toolpath Verification, Image Analysis using TensorRT.

PROJECT CONTEXT:

- Step: GC-188 of 200
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-187
- Understands: Running inference
- Current project state: Generic inference
- Goal: Apply AI to G-code analysis!

DEPENDENCIES COMPLETED:

- GC-187: Inference - have inference capability

WHAT TO BUILD:
After learning CV applications:

- Detect anomalies in toolpaths
- Classify move types with CNN
- Verify toolpath correctness
- Real-time analysis

NOTE: Practical AI application!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-189: Mixed Precision (FP16)

```

Teach me FP16 Inference - Half Precision, Tensor Cores, Performance Boost using TensorRT.

PROJECT CONTEXT:

- Step: GC-189 of 200
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-188
- Understands: FP32 inference
- Current project state: Full precision only
- Goal: Faster inference with FP16!

DEPENDENCIES COMPLETED:

- GC-187: Inference - baseline to improve

WHAT TO BUILD:
After learning FP16:

- Build engine with FP16 precision
- Use Tensor Cores
- Measure speedup (2-4x faster!)
- Minimal accuracy loss

NOTE: NVIDIA Tensor Cores acceleration!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-190: INT8 Quantization

```

Teach me INT8 Quantization - Reduced Precision, Calibration, Maximum Performance using TensorRT.

PROJECT CONTEXT:

- Step: GC-190 of 200
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-189
- Understands: FP16 inference
- Current project state: FP16 precision
- Goal: Even faster with INT8!

DEPENDENCIES COMPLETED:

- GC-189: FP16 - precision reduction

WHAT TO BUILD:
After learning INT8:

- Calibrate model for INT8
- Build INT8 engine
- Measure speedup (4-8x vs FP32!)
- Verify accuracy

NOTE: Maximum inference speed!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-191: Dynamic Shapes

```

Teach me Dynamic Shapes - Variable Batch Sizes, Flexible Inference, Production Deployment using TensorRT.

PROJECT CONTEXT:

- Step: GC-191 of 200 (LAST OF SPRINT 18)
- Sprint: Sprint 18 - AI/ML Integration
- Completed: GC-001 through GC-190
- Understands: Fixed-shape inference
- Current project state: Fixed batch size
- Goal: Flexible production inference!

DEPENDENCIES COMPLETED:

- GC-187: Inference - fixed shapes

WHAT TO BUILD:
After learning dynamic shapes:

- Build engine with dynamic shapes
- Support variable batch sizes
- Optimize for common shapes
- Production-ready inference

DELIVERABLE: Complete AI/ML integration!

- TensorRT inference
- Optimized models (FP16, INT8)
- Computer vision for G-code
- Production deployment

NEXT SPRINT: Sprint 19 - Production & Deployment (FINAL SPRINT!)

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

## SPRINT 19: PRODUCTION & DEPLOYMENT (9 topics - FINAL SPRINT!)

### GC-192: Docker for GPU Applications

```

Teach me Docker - NVIDIA Container Toolkit, GPU Access in Containers, Portable Deployment using Docker.

PROJECT CONTEXT:

- Step: GC-192 of 200 (FIRST OF FINAL SPRINT!)
- Sprint: Sprint 19 - Production & Deployment
- Completed: GC-001 through GC-191
- Understands: All technical skills
- Current project state: Runs on dev machine only
- Goal: Deploy anywhere!

DEPENDENCIES COMPLETED:

- All technical sprints complete

WHAT TO BUILD:
After learning Docker:

- Create Dockerfile with CUDA
- Build container image
- Run with GPU access
- Deploy G-code analyzer as container

NOTE: Modern deployment standard!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-193: CI/CD for C++ Projects

```

Teach me CI/CD - GitHub Actions, Automated Testing, Build Pipelines using CI/CD.

PROJECT CONTEXT:

- Step: GC-193 of 200
- Sprint: Sprint 19 - Production & Deployment
- Completed: GC-001 through GC-192
- Understands: Testing (Sprint 4)
- Current project state: Manual testing
- Goal: Automated quality assurance!

DEPENDENCIES COMPLETED:

- GC-042: Google Test - have tests
- GC-049: CI basics - foundation

WHAT TO BUILD:
After learning CI/CD:

- GitHub Actions workflow
- Automated build on commit
- Run tests automatically
- Deploy on success

NOTE: Professional development workflow!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-194: Performance Benchmarking Suite

```

Teach me Benchmarking - Google Benchmark, Regression Testing, Performance Tracking using C++.

PROJECT CONTEXT:

- Step: GC-194 of 200
- Sprint: Sprint 19 - Production & Deployment
- Completed: GC-001 through GC-193
- Understands: Profiling (Sprint 10)
- Current project state: Manual performance checks
- Goal: Automated performance testing!

DEPENDENCIES COMPLETED:

- GC-116: perf profiling - measuring performance

WHAT TO BUILD:
After learning benchmarking:

- Google Benchmark suite
- Benchmark critical functions
- Track performance over time
- Catch performance regressions

NOTE: Ensure performance doesn't degrade!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-195: AddressSanitizer and UndefinedBehaviorSanitizer

```

Teach me Sanitizers - ASan, UBSan, Catching Runtime Bugs, Memory Safety using Clang/GCC.

PROJECT CONTEXT:

- Step: GC-195 of 200
- Sprint: Sprint 19 - Production & Deployment
- Completed: GC-001 through GC-194
- Understands: Valgrind (Sprint 9)
- Current project state: Basic memory checking
- Goal: Comprehensive runtime checking!

DEPENDENCIES COMPLETED:

- GC-100: Valgrind - memory debugging

WHAT TO BUILD:
After learning sanitizers:

- Compile with AddressSanitizer
- Compile with UBSanitizer
- Catch buffer overflows, use-after-free
- Find undefined behavior
- Integrate into CI

NOTE: Catch bugs before production!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-196: Cross-Platform Build System

```

Teach me Cross-Platform - Linux, Windows, macOS, Platform Abstractions, Portable Code using CMake.

PROJECT CONTEXT:

- Step: GC-196 of 200
- Sprint: Sprint 19 - Production & Deployment
- Completed: GC-001 through GC-195
- Understands: CMake (Sprint 3)
- Current project state: Linux only
- Goal: Build on all platforms!

DEPENDENCIES COMPLETED:

- GC-051: CMake deep dive - advanced CMake

WHAT TO BUILD:
After learning cross-platform:

- Platform detection in CMake
- Handle platform differences
- Build on Windows, Mac, Linux
- Test on all platforms

NOTE: Maximum user reach!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-197: Packaging and Distribution

```

Teach me Packaging - Creating Libraries, Package Managers (Conan/vcpkg), User Installation using C++.

PROJECT CONTEXT:

- Step: GC-197 of 200
- Sprint: Sprint 19 - Production & Deployment
- Completed: GC-001 through GC-196
- Understands: Building libraries
- Current project state: Source distribution only
- Goal: Easy installation for users!

DEPENDENCIES COMPLETED:

- GC-034: CMake libraries - library creation

WHAT TO BUILD:
After learning packaging:

- Create installable package
- Use Conan or vcpkg
- Generate installers
- Publish to package managers

NOTE: Easy for users to install!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-198: Production Monitoring

```

Teach me Monitoring - Metrics Collection, Logging, Prometheus Integration, Performance Tracking using C++.

PROJECT CONTEXT:

- Step: GC-198 of 200
- Sprint: Sprint 19 - Production & Deployment
- Completed: GC-001 through GC-197
- Understands: Profiling
- Current project state: No production monitoring
- Goal: Monitor deployed applications!

DEPENDENCIES COMPLETED:

- GC-194: Benchmarking - performance metrics

WHAT TO BUILD:
After learning monitoring:

- Add metrics collection
- Structured logging
- Prometheus metrics export
- Monitor G-code processing in production

NOTE: Know what's happening in production!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-199: Documentation and API Design

```

Teach me Production Documentation - User Guides, API Documentation, Examples, Best Practices using Documentation tools.

PROJECT CONTEXT:

- Step: GC-199 of 200
- Sprint: Sprint 19 - Production & Deployment
- Completed: GC-001 through GC-198
- Understands: Doxygen (Sprint 4)
- Current project state: Code documentation only
- Goal: Complete user documentation!

DEPENDENCIES COMPLETED:

- GC-050: Doxygen - API documentation

WHAT TO BUILD:
After learning production docs:

- User guide for G-code analyzer
- API reference
- Tutorial examples
- README with quick start

NOTE: Good docs = successful project!

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

### GC-200: FINAL PROJECT - Complete G-code Analyzer

```

Teach me Integration - Bringing Everything Together, Complete System, Production Ready using All Skills.

PROJECT CONTEXT:

- Step: GC-200 of 200 (FINAL STEP!)
- Sprint: Sprint 19 - Production & Deployment
- Completed: GC-001 through GC-199 (ALL previous topics!)
- Understands: EVERYTHING from 199 topics!
- Current project state: All components built separately
- Goal: COMPLETE PRODUCTION SYSTEM!

DEPENDENCIES COMPLETED:

- EVERYTHING from GC-001 through GC-199

WHAT TO BUILD:
After completing final project:

**COMPLETE G-CODE ANALYZER AND VISUALIZER:**

1. **C++ Parser Library**

   - Parse all G-code commands
   - State machine for modal commands
   - Fast parallel parsing

2. **Python Bindings**

   - Easy Python API with pybind11
   - Access from Python scripts
   - Integration with data analysis

3. **GPU-Accelerated Analysis**

   - CUDA kernels for distance/time calculations
   - Process millions of commands/second
   - TensorRT for AI-based analysis

4. **Real-Time 3D Visualization**

   - OpenGL rendering with advanced shaders
   - OptiX ray tracing for photorealistic view
   - Interactive camera controls

5. **Production Features**

   - Docker deployment
   - CI/CD pipeline
   - Comprehensive tests
   - Complete documentation
   - Cross-platform support

6. **Performance**
   - Multi-threaded CPU processing
   - GPU acceleration where beneficial
   - SIMD optimization
   - Cache-friendly data layout

**DELIVERABLE:**
Production-ready G-code analyzer that:

- Parses and analyzes G-code files
- Calculates toolpath distance and time
- Visualizes in 3D with advanced rendering
- Provides Python API
- Runs on CPU and GPU
- Deploys as container
- Has 80%+ test coverage
- Documented and packaged

**YOU NOW HAVE NVIDIA-LEVEL C++ SKILLS:**
✅ Modern C++ (smart pointers, templates, move semantics)
✅ Systems programming (memory, pointers, CPU architecture)
✅ Concurrency (threading, atomics, lock-free)
✅ SIMD (SSE, AVX, vectorization)
✅ GPU programming (CUDA kernels, optimization)
✅ Computer graphics (OpenGL, shaders, ray tracing)
✅ AI/ML integration (TensorRT, inference)
✅ Production deployment (Docker, CI/CD, monitoring)

**CONGRATULATIONS - YOU'VE MASTERED TOP-DOWN C++!**

Start with Section 1 identifying all prerequisites and building blocks needed.

```

---

# COMPLETE! �

**200 Topics Total:**
- Sprint 0-3: Foundation (37 topics)
- Sprint 4-7: Tools & Modern C++ (35 topics)
- Sprint 8-11: Concurrency & SIMD (42 topics)
- Sprint 12-15: GPU Programming (46 topics)
- Sprint 16-18: Graphics & AI (27 topics)
- Sprint 19: Production (13 topics)

**From zero to NVIDIA-level C++ engineer!**

All prompts maintain the clean format, use the meta-prompt, and build incrementally from high-level to low-level concepts.

Ready to start learning! �
```
