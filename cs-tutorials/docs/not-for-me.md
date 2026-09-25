# Python GUI Tutorial: Build a Manufacturing Data Dashboard

## Learning Objectives

By the end of this tutorial, you'll build a **Manufacturing Production Tracker** - a GUI application that displays production data, calculates metrics, and visualizes daily output. You'll learn Python fundamentals through hands-on practice and understand how GUI applications work under the hood. This knowledge will empower you to read, modify, and extend existing Python scripts in your manufacturing environment. You'll understand variables, data structures, functions, file handling, and GUI programming - all the core skills needed to work with automation scripts.

**Why This Matters for Manufacturing:**
In modern manufacturing, Python scripts automate data collection, report generation, and monitoring systems. Being able to read and modify these scripts means you can customize dashboards, adjust thresholds, add new metrics, or troubleshoot issues without waiting for IT support. This tutorial uses manufacturing scenarios (production counts, defect rates, shift reports) so every concept connects directly to your daily work.

## Tutorial Outline

**Building Block Sections** (Prerequisites - teaching from first principles):

1. **Building Block: Variables and Data Types** (15 min) - Store production counts and part numbers
2. **Building Block: Collections - Lists** (20 min) - Track multiple measurements
3. **Building Block: Collections - Dictionaries** (20 min) - Store structured production data
4. **Building Block: Conditional Logic** (15 min) - Make decisions based on thresholds
5. **Building Block: Loops and Iteration** (20 min) - Process multiple records
6. **Building Block: Functions** (25 min) - Organize reusable code
7. **Building Block: File I/O** (20 min) - Read and write production data
8. **Building Block: String Formatting** (15 min) - Display data professionally

**Main Topic Sections** (Building the GUI Application): 9. **Main Topic: Introduction to GUI Programming** (20 min) - Understanding tkinter 10. **Main Topic: Creating the Window and Widgets** (30 min) - Build the interface 11. **Main Topic: Layout Management** (25 min) - Arrange components 12. **Main Topic: Event Handling** (25 min) - Respond to button clicks 13. **Main Topic: Data Visualization** (30 min) - Display production charts 14. **Main Topic: Integration** (30 min) - Connect all components 15. **Main Topic: Error Handling and Polish** (20 min) - Make it production-ready

**Total Time:** ~5-6 hours (can be split across multiple sessions)

---

## What You Already Need to Know

This tutorial assumes you can:

- Perform basic arithmetic (+, -, \*, /)
- Understand the concept of True and False (boolean logic)
- Have Python installed on your computer (version 3.7 or higher)

We will teach EVERYTHING else from scratch, including what variables are, how programs flow, what functions do, and how GUIs work internally.

---

# Section 1: Building Block - Variables and Data Types

## Goal

Learn how to store and manipulate data in Python using variables. Understand different data types (integers, floats, strings, booleans) and when to use each.

## Why It Matters

Every script stores information - production counts, part IDs, timestamps, defect rates. Variables are containers that hold this information. Understanding data types prevents bugs like trying to do math on text or comparing numbers incorrectly. In manufacturing scripts, you'll see variables tracking everything from machine status to inventory levels.

## Concept Explanation

**What is a Variable?**
A variable is a named container that stores a value. Think of it like a labeled box in a warehouse - you can put something in the box, look at what's inside, or replace it with something new. The label (variable name) stays the same, but the contents can change.

**Python's Core Data Types:**

1. **Integer (int)** - Whole numbers with no decimal point

   - Example: `production_count = 150`
   - Used for: counting items, loop indices, IDs

2. **Float (float)** - Numbers with decimal points

   - Example: `defect_rate = 2.5`
   - Used for: measurements, percentages, temperatures

3. **String (str)** - Text enclosed in quotes (single or double)

   - Example: `part_number = "A-1234"`
   - Used for: names, descriptions, file paths

4. **Boolean (bool)** - True or False values
   - Example: `machine_running = True`
   - Used for: status flags, conditional checks

**Terminology:**

- **Variable name**: The identifier you choose (e.g., `production_count`)
- **Assignment**: Using `=` to store a value in a variable
- **Data type**: The kind of value stored (int, float, str, bool)

**Naming Rules:**

- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Cannot contain spaces (use underscores instead: `part_number` not `part number`)
- Case-sensitive: `Count` and `count` are different variables
- Use descriptive names: `production_count` not `pc`

## Code-Along

Let's create a simple production tracking script. We'll build it line by line.

**Step 1:** Create a new file called `production_basics.py`

**Step 2:** Add these lines to declare variables for a production shift:

```python
# Store the number of parts produced during morning shift
# Integer type - whole number, no decimals needed for counting
parts_produced = 150

# Store the target production goal for the shift
# Integer type - another count
target_production = 200

# Store the defect rate as a percentage (2.3 means 2.3%)
# Float type - decimal number for precise measurements
defect_rate = 2.3

# Store the part number being manufactured
# String type - text enclosed in quotes
part_number = "A-1234"

# Store whether the machine is currently running
# Boolean type - True or False
machine_running = True
```

**Explanation:**

- Line 1-2: Comments explaining what we're storing (comments start with `#` and are ignored by Python)
- Line 3: Creates variable `parts_produced` and assigns value 150
- Line 6: Creates variable `target_production` and assigns value 200
- Line 9: Creates variable `defect_rate` and assigns value 2.3 (note the decimal point makes it a float)
- Line 12: Creates variable `part_number` and assigns the string "A-1234" (quotes make it text)
- Line 15: Creates variable `machine_running` and assigns True (capitalized, no quotes)

Type this code exactly as shown. The comments help you remember what each variable represents.

**Step 3:** Now let's display these variables using the `print()` function:

```python
# Display all our production data
# print() function outputs information to the console/terminal
print("Part Number:", part_number)
print("Parts Produced:", parts_produced)
print("Target Production:", target_production)
print("Defect Rate:", defect_rate, "%")
print("Machine Running:", machine_running)
```

**Explanation:**

- `print()` is a built-in function that displays information
- You can print multiple items separated by commas
- Strings in quotes are displayed as-is
- Variable names without quotes display their values

**🏃 RUN POINT:** Save the file and run it with `python production_basics.py`

**Expected Output:**

```
Part Number: A-1234
Parts Produced: 150
Target Production: 200
Defect Rate: 2.3 %
Machine Running: True
```

**Step 4:** Let's perform calculations with our variables:

```python
# Calculate how many more parts we need to reach target
# Subtraction operation: target minus current production
parts_remaining = target_production - parts_produced

# Calculate what percentage of target we've achieved
# Division gives us a decimal, multiply by 100 to get percentage
completion_percentage = (parts_produced / target_production) * 100

# Display our calculations
print("\nProduction Progress:")  # \n creates a blank line for readability
print("Parts Remaining:", parts_remaining)
print("Completion:", completion_percentage, "%")
```

**Explanation:**

- Line 2: Subtracts `parts_produced` from `target_production`, stores result in new variable
- Line 5-6: Divides parts produced by target, multiplies by 100 for percentage
- Parentheses control order of operations (division happens first)
- Line 9: `\n` is a special character meaning "new line" - creates spacing

**🏃 RUN POINT:** Add this code to your file and run it again.

**Expected Output:**

```
Production Progress:
Parts Remaining: 50
Completion: 75.0 %
```

**Step 5:** Let's explore changing variable values:

```python
# Variables can be updated with new values
# This simulates producing 25 more parts
parts_produced = parts_produced + 25

# Shorter way to write the same thing: += means "add to existing value"
parts_produced += 10  # Now we've produced 10 more (185 total)

# Recalculate with updated value
parts_remaining = target_production - parts_produced
completion_percentage = (parts_produced / target_production) * 100

print("\nAfter Additional Production:")
print("Parts Produced:", parts_produced)
print("Parts Remaining:", parts_remaining)
print("Completion:", completion_percentage, "%")
```

**Explanation:**

- Line 3: Takes current value of `parts_produced`, adds 25, stores result back in `parts_produced`
- Line 6: `+=` is shorthand for "add and assign" - same as line 3 but more concise
- Lines 9-10: Recalculate with updated `parts_produced` value
- Variables are mutable (changeable) - we can update them as our production numbers change

**🏃 RUN POINT:** Run the complete script now.

**Expected Output:**

```
After Additional Production:
Parts Produced: 185
Parts Remaining: 15
Completion: 92.5 %
```

## Checkpoint

**Question:** If you have `defect_count = 5` and `total_parts = 100`, write code to calculate the defect rate as a percentage and store it in a variable called `defect_percentage`. What data type will `defect_percentage` be?

**Answer:**

```python
defect_percentage = (defect_count / total_parts) * 100
```

The data type will be **float** because division in Python 3 always produces a float, even if both numbers are integers. So `defect_percentage` will be 5.0 (a float, not an integer).

## Exercise

Write a script that tracks material inventory:

1. Create variables for current stock (125 units), reorder point (100 units), and reorder quantity (200 units)
2. Print the current inventory status
3. Simulate using 30 units (subtract from current stock)
4. Calculate if reorder is needed (is current stock less than or equal to reorder point?)
5. Print updated inventory and whether reorder is needed

## Stretch Challenge

Create a script that calculates Overall Equipment Effectiveness (OEE):

- Availability: actual runtime / planned runtime (e.g., 420 minutes / 480 minutes)
- Performance: actual output / target output (e.g., 180 parts / 200 parts)
- Quality: good parts / total parts (e.g., 175 good / 180 total)
- OEE = Availability × Performance × Quality (multiply all three)
- Display each metric as a percentage and the final OEE score

**Hint 1:** Start by creating variables for all the input values (actual runtime, planned runtime, actual output, etc.).

**Hint 2:** Calculate each metric separately: `availability = actual_runtime / planned_runtime`, then do the same for performance and quality. Remember to multiply by 100 to get percentages.

**Hint 3:** For OEE, multiply the three decimal values (not percentages): `oee = availability_decimal * performance_decimal * quality_decimal`, then multiply by 100 for the final percentage. Example: if availability is 87.5%, use 0.875 in the calculation.

## Solution

**Exercise Solution:**

```python
# Material Inventory Tracking Script

# Initial inventory data
current_stock = 125  # Units currently in warehouse
reorder_point = 100  # Minimum stock before reordering
reorder_quantity = 200  # How many units to order

# Display initial status
print("=== Inventory Status ===")
print("Current Stock:", current_stock, "units")
print("Reorder Point:", reorder_point, "units")
print("Reorder Quantity:", reorder_quantity, "units")

# Simulate material usage (production consumed 30 units)
units_used = 30
current_stock = current_stock - units_used  # Update stock after usage

# Check if reorder is needed
# This comparison returns True or False
needs_reorder = current_stock <= reorder_point

# Display updated status
print("\n=== After Usage ===")
print("Units Used:", units_used)
print("Current Stock:", current_stock, "units")
print("Needs Reorder:", needs_reorder)

# If we wanted to show what stock would be after reordering
if needs_reorder:
    projected_stock = current_stock + reorder_quantity
    print("Projected Stock After Reorder:", projected_stock, "units")
```

**Key Points:**

- We use the comparison operator `<=` which returns a boolean (True or False)
- The variable `needs_reorder` stores this boolean result
- When `current_stock` (95) is less than or equal to `reorder_point` (100), `needs_reorder` is True

**Stretch Challenge Solution:**

```python
# OEE (Overall Equipment Effectiveness) Calculator

# Input data from a production shift
actual_runtime = 420  # minutes the machine actually ran
planned_runtime = 480  # minutes the machine was scheduled to run (8 hours)
actual_output = 180  # parts actually produced
target_output = 200  # parts we aimed to produce
good_parts = 175  # parts that passed quality check
total_parts = 180  # all parts produced (including defects)

# Calculate each OEE component as a decimal (not percentage yet)
# Availability: what percentage of scheduled time was used productively
availability = actual_runtime / planned_runtime

# Performance: what percentage of target production was achieved
performance = actual_output / target_output

# Quality: what percentage of parts were good (not defective)
quality = good_parts / total_parts

# Calculate overall OEE by multiplying all three factors
# This gives us a decimal (e.g., 0.656 for 65.6%)
oee = availability * performance * quality

# Convert all metrics to percentages for display
availability_percent = availability * 100
performance_percent = performance * 100
quality_percent = quality * 100
oee_percent = oee * 100

# Display results professionally
print("=== OEE Analysis ===")
print("Availability:", availability_percent, "%")
print("Performance:", performance_percent, "%")
print("Quality:", quality_percent, "%")
print("\nOverall Equipment Effectiveness (OEE):", oee_percent, "%")

# Industry context: World-class OEE is 85% or higher
print("\nWorld-Class OEE Target: 85%")
gap_to_target = 85 - oee_percent
print("Gap to Target:", gap_to_target, "%")
```

**Key Points:**

- OEE multiplies three factors together, each representing a different aspect of efficiency
- We keep decimals for calculation (0.875) and only convert to percentages (87.5%) for display
- Order of operations matters: we calculate each component first, then multiply them
- Real manufacturing uses OEE as a key performance indicator (KPI)

## Common Pitfalls

1. **Using quotes around numbers when you want to do math:**

   - ❌ `count = "150"` then `count + 50` → Error! Can't add number to string
   - ✓ `count = 150` then `count + 50` → 200

2. **Forgetting that variable names are case-sensitive:**

   - `Production_Count` and `production_count` are different variables

3. **Trying to use a variable before defining it:**

   - ❌ `print(total)` before `total = 100` → Error! "total is not defined"
   - ✓ Define first: `total = 100`, then `print(total)`

4. **Integer division surprise (Python 2 vs 3):**
   - Python 3: `5 / 2` gives `2.5` (float division)
   - If you want integer division: `5 // 2` gives `2`

**Diagnostic:**

- "NameError: name 'x' is not defined" → You used variable `x` before creating it
- "TypeError: unsupported operand type(s)" → You mixed incompatible types (e.g., adding string to number)
- "SyntaxError: invalid syntax" → Check for typos, missing quotes, or incorrect variable names

## Further Reading

- [Python Official Tutorial - Variables](https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator)
- [Real Python - Variables in Python](https://realpython.com/python-variables/)
- [Python Data Types - W3Schools](https://www.w3schools.com/python/python_datatypes.asp)

---

# Section 2: Building Block - Collections - Lists

## Goal

Learn how to store and work with multiple related values in a single container using lists. Understand how to access, modify, and iterate through list items.

## Why It Matters

In manufacturing, you rarely deal with single values - you have hourly production counts, multiple machine readings, batches of part numbers, or a week's worth of defect rates. Lists let you store all these related values together and process them efficiently. Instead of creating `hour1_count`, `hour2_count`, `hour3_count`... (tedious and unmanageable), you use one list: `hourly_counts = [45, 52, 48, 50, ...]`. This is fundamental to reading log files, processing sensor data, and generating reports.

## Concept Explanation

**What is a List?**
A list is an ordered collection of items stored in a single variable. Think of it like a shelf with numbered positions - each item has a specific spot, and you can reference items by their position number (called an **index**).

**Key Characteristics:**

- **Ordered**: Items stay in the order you put them in
- **Indexed**: Each item has a position number starting at 0 (not 1!)
- **Mutable**: You can change, add, or remove items after creating the list
- **Mixed types allowed**: Can hold integers, floats, strings, even other lists (though usually we keep similar types together)

**Index Numbering (CRITICAL CONCEPT):**
Python uses **zero-based indexing** - the first item is at position 0, not 1.

```
List:    [45,  52,  48,  50,  47]
Index:    0    1    2    3    4
         ^                      ^
       first                  last
```

**Terminology:**

- **Element/Item**: A single value in the list
- **Index**: The position number of an item (starts at 0)
- **Length**: How many items are in the list (use `len()` function)
- **Append**: Add an item to the end of the list
- **Slice**: Get a portion of the list using start:end notation

## Code-Along

Let's track hourly production data for an 8-hour shift.

**Step 1:** Create a new file called `production_lists.py`

**Step 2:** Create a list of hourly production counts:

```python
# Store production count for each hour of an 8-hour shift
# Square brackets [] define a list, commas separate items
hourly_production = [45, 52, 48, 50, 47, 51, 49, 46]

# Display the entire list
print("Hourly Production Counts:", hourly_production)

# Display how many hours of data we have
# len() is a built-in function that returns the length of a list
print("Number of hours tracked:", len(hourly_production))
```

**Explanation:**

- Line 2: Square brackets `[]` create a list, commas separate each value
- Line 3: Variable `hourly_production` now holds all 8 values
- Line 9: `len(hourly_production)` counts how many items are in the list (returns 8)
- We can print the whole list at once or work with individual items

**🏃 RUN POINT:** Save and run this script.

**Expected Output:**

```
Hourly Production Counts: [45, 52, 48, 50, 47, 51, 49, 46]
Number of hours tracked: 8
```

**Step 3:** Access individual items using index numbers:

```python
# Access specific hours using index (remember: counting starts at 0)
# Index 0 gets the FIRST item (hour 1 of the shift)
first_hour = hourly_production[0]

# Index 7 gets the EIGHTH item (hour 8 of the shift)
last_hour = hourly_production[7]

# Index 3 gets the FOURTH item (hour 4 of the shift)
mid_shift = hourly_production[3]

print("\nAccessing Individual Hours:")
print("First hour (index 0):", first_hour)
print("Last hour (index 7):", last_hour)
print("Mid-shift (index 3):", mid_shift)
```

**Explanation:**

- Square brackets with a number `[0]` access that position
- Index 0 = first item, Index 1 = second item, etc.
- For a list of 8 items, valid indices are 0 through 7 (not 1 through 8!)
- `hourly_production[0]` retrieves the value at position 0 (which is 45)

**🏃 RUN POINT:** Add this code and run it.

**Expected Output:**

```
Accessing Individual Hours:
First hour (index 0): 45
Last hour (index 7): 46
Mid-shift (index 3): 50
```

**Step 4:** Use negative indices to count from the end:

```python
# Negative indices count backwards from the end
# Index -1 is the LAST item, -2 is second-to-last, etc.
last_hour_negative = hourly_production[-1]
second_to_last = hourly_production[-2]

print("\nNegative Indexing (counting from end):")
print("Last hour (index -1):", last_hour_negative)
print("Second-to-last (index -2):", second_to_last)
```

**Explanation:**

- Negative indices are a shortcut: `-1` always gets the last item without knowing the list length
- `-2` gets second-to-last, `-3` gets third-to-last, etc.
- This is useful when you don't know the list size but need the most recent data

**🏃 RUN POINT:** Run the updated script.

**Expected Output:**

```
Negative Indexing (counting from end):
Last hour (index -1): 46
Second-to-last (index -2): 49
```

**Step 5:** Modify list items:

```python
# Update a value in the list (discovered a counting error in hour 2)
# Index 1 is the second hour (remember: 0-based indexing)
print("\nBefore correction:", hourly_production)

# Assign new value to index 1
hourly_production[1] = 53  # Changed from 52 to 53

print("After correction:", hourly_production)
```

**Explanation:**

- Lists are **mutable** - we can change values after creation
- Use assignment with index: `list[index] = new_value`
- This modifies the list in-place (the original list is changed)

**🏃 RUN POINT:** Run the script.

**Expected Output:**

```
Before correction: [45, 52, 48, 50, 47, 51, 49, 46]
After correction: [45, 53, 48, 50, 47, 51, 49, 46]
```

**Step 6:** Add new items to the list:

```python
# Add overtime hour data (9th hour)
# append() method adds an item to the END of the list
hourly_production.append(44)

print("\nAfter adding overtime hour:", hourly_production)
print("New length:", len(hourly_production))
```

**Explanation:**

- `.append(value)` is a **method** (function attached to the list object)
- It adds the value to the end of the list
- The list grows dynamically - no need to pre-specify size
- Methods use dot notation: `list_name.method_name(arguments)`

**🏃 RUN POINT:** Run the script.

**Expected Output:**

```
After adding overtime hour: [45, 53, 48, 50, 47, 51, 49, 46, 44]
New length: 9
```

**Step 7:** Perform calculations on lists:

```python
# Calculate total production for the shift
# sum() is a built-in function that adds all numbers in a list
total_production = sum(hourly_production)

# Calculate average production per hour
# Average = total divided by count
average_production = total_production / len(hourly_production)

print("\nShift Statistics:")
print("Total parts produced:", total_production)
print("Average per hour:", average_production)

# Find the best and worst hours
# max() returns the largest value in the list
# min() returns the smallest value in the list
best_hour_count = max(hourly_production)
worst_hour_count = min(hourly_production)

print("Best hour:", best_hour_count, "parts")
print("Worst hour:", worst_hour_count, "parts")
```

**Explanation:**

- `sum(list)` adds all numbers together - works only on lists of numbers
- `max(list)` finds the highest value
- `min(list)` finds the lowest value
- These are built-in functions that process the entire list at once
- We divide sum by length to get the average (mean)

**🏃 RUN POINT:** Run the complete script.

**Expected Output:**

```
Shift Statistics:
Total parts produced: 437
Average per hour: 48.56
Best hour: 53 parts
Worst hour: 44 parts
```

**Step 8:** Slice lists to get portions:

```python
# Slicing: get a sub-list using [start:end]
# start is inclusive, end is exclusive (doesn't include end index)

# Get first 4 hours (indices 0, 1, 2, 3)
first_half = hourly_production[0:4]

# Get last 4 hours (indices 5, 6, 7, 8)
second_half = hourly_production[5:9]

# Shortcut: omit start to begin from index 0
first_three = hourly_production[:3]  # Same as [0:3]

# Shortcut: omit end to go to the end of the list
last_three = hourly_production[6:]  # From index 6 to end

print("\nList Slicing:")
print("First half (0:4):", first_half)
print("Second half (5:9):", second_half)
print("First three (:3):", first_three)
print("Last three (6:):", last_three)
```

**Explanation:**

- Slice notation: `[start:end]` where start is included, end is excluded
- Think "up to but not including end"
- `[0:4]` gets indices 0, 1, 2, 3 (stops before 4)
- `:3` is shorthand for "from beginning up to 3"
- `6:` is shorthand for "from 6 to end"
- Slicing creates a NEW list (doesn't modify the original)

**🏃 RUN POINT:** Run the script.

**Expected Output:**

```
List Slicing:
First half (0:4): [45, 53, 48, 50]
Second half (5:9): [51, 49, 46, 44]
First three (:3): [45, 53, 48]
Last three (6:): [49, 46, 44]
```

**Step 9:** Work with lists of strings (part numbers):

```python
# Lists can hold strings too (or any data type)
# This represents different part types produced today
parts_manufactured = ["A-1234", "B-5678", "A-1234", "C-9012", "B-5678", "A-1234"]

print("\nParts Manufactured Today:")
print(parts_manufactured)

# Count how many times a specific part was made
# count() method returns how many times a value appears
count_a1234 = parts_manufactured.count("A-1234")
count_b5678 = parts_manufactured.count("B-5678")

print("\nPart A-1234 produced:", count_a1234, "times")
print("Part B-5678 produced:", count_b5678, "times")

# Check if a part number is in the list
# 'in' operator returns True or False
has_c9012 = "C-9012" in parts_manufactured
has_d0000 = "D-0000" in parts_manufactured

print("\nInventory Check:")
print("C-9012 produced today:", has_c9012)
print("D-0000 produced today:", has_d0000)
```

**Explanation:**

- Lists can hold any data type - numbers, strings, booleans, even other lists
- `.count(value)` counts occurrences of a specific value
- `value in list` checks if value exists in list (returns True/False)
- This is useful for analyzing production mix and checking inventory

**🏃 RUN POINT:** Run the complete script.

**Expected Output:**

```
Parts Manufactured Today:
['A-1234', 'B-5678', 'A-1234', 'C-9012', 'B-5678', 'A-1234']

Part A-1234 produced: 3 times
Part B-5678 produced: 2 times

Inventory Check:
C-9012 produced today: True
D-0000 produced today: False
```

## Checkpoint

**Question:** Given this list of defect counts per hour: `defects = [2, 0, 1, 0, 3, 1, 0, 2]`

1. What is the total number of defects for the shift?
2. What is the index of the hour with 3 defects?
3. Write code to get the defect counts for the last 3 hours.

**Answer:**

1. Total defects: `sum(defects)` = 9
2. The hour with 3 defects is at index 4 (fifth hour of the shift)
3. Last 3 hours: `defects[-3:]` or `defects[5:]` → `[1, 0, 2]`

```python
defects = [2, 0, 1, 0, 3, 1, 0, 2]
total_defects = sum(defects)
last_three_hours = defects[-3:]  # or defects[5:]
print("Total defects:", total_defects)
print("Last 3 hours:", last_three_hours)
```

## Exercise

Create a temperature monitoring script:

1. Create a list of machine temperatures (in Celsius) for 10 measurements: `[72, 75, 73, 78, 80, 82, 79, 77, 76, 74]`
2. Print the entire list
3. Find and print the highest temperature
4. Find and print the lowest temperature
5. Calculate and print the average temperature
6. Print the first 5 measurements
7. Print the last 5 measurements

## Stretch Challenge

Create a quality control script that analyzes pass/fail data:

1. Create a list with 20 measurements where 1 means "pass" and 0 means "fail": `[1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]`
2. Count how many parts passed (count the 1s)
3. Count how many parts failed (count the 0s)
4. Calculate the pass rate as a percentage
5. Determine if quality standards are met (pass rate must be ≥ 95%)
6. Print a summary report with all this information

## Hints

**Exercise Hints:**

**Hint 1:** Start by creating the list and using `print()` to display it. Then use the built-in functions we learned: `max()`, `min()`, `sum()`, and `len()`.

**Hint 2:** For average, divide `sum(temperatures)` by `len(temperatures)`. For slicing, remember the first 5 is `[:5]` and last 5 is `[-5:]`.

**Hint 3:** Here's the structure:

```python
temperatures = [72, 75, 73, ...]
print("Temperatures:", temperatures)
highest = max(temperatures)
lowest = min(temperatures)
average = sum(temperatures) / len(temperatures)
# ... continue with slicing
```

**Stretch Challenge Hints:**

**Hint 1:** The `.count()` method can count how many times a value appears in a list. Use `results.count(1)` for passes and `results.count(0)` for fails.

**Hint 2:** Pass rate is (passes / total measurements) × 100. Compare this to 95 using the `>=` operator to get a True/False result.

**Hint 3:** Structure:

```python
results = [1, 1, 1, 0, ...]
total = len(results)
passes = results.count(1)
fails = results.count(0)
pass_rate = (passes / total) * 100
meets_standards = pass_rate >= 95
# print everything
```

## Solutions

**Exercise Solution:**

```python
# Temperature Monitoring Script

# Create list of machine temperature readings (Celsius)
temperatures = [72, 75, 73, 78, 80, 82, 79, 77, 76, 74]

# Display all measurements
print("Temperature Readings (°C):", temperatures)

# Find extreme values using built-in functions
highest_temp = max(temperatures)
lowest_temp = min(temperatures)

print("\nTemperature Analysis:")
print("Highest temperature:", highest_temp, "°C")
print("Lowest temperature:", lowest_temp, "°C")

# Calculate average temperature
# sum() adds all values, len() counts how many values
total_temp = sum(temperatures)
count = len(temperatures)
average_temp = total_temp / count

print("Average temperature:", average_temp, "°C")

# Slice to get first and last 5 measurements
first_five = temperatures[:5]  # Index 0 through 4
last_five = temperatures[-5:]  # Last 5 items

print("\nFirst 5 measurements:", first_five)
print("Last 5 measurements:", last_five)
```

**Key Learning Points:**

- `max()`, `min()`, `sum()` process entire list at once
- Average requires two steps: sum and divide
- Slicing with `:` creates new sub-lists
- Negative indices count from the end

**Stretch Challenge Solution:**

```python
# Quality Control Analysis Script

# Pass/fail results (1 = pass, 0 = fail)
# This represents 20 consecutive parts inspected
results = [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]

print("Quality Control Results:")
print("Raw data:", results)
print()

# Count total measurements
total_parts = len(results)

# Count passes and fails using count() method
# count(1) finds all occurrences of 1 (passes)
# count(0) finds all occurrences of 0 (fails)
parts_passed = results.count(1)
parts_failed = results.count(0)

# Calculate pass rate as percentage
# Formula: (passed / total) * 100
pass_rate = (parts_passed / total_parts) * 100

# Check if we meet quality standards (95% or better)
# This comparison returns True or False
TARGET_PASS_RATE = 95  # Constant for clarity
meets_standards = pass_rate >= TARGET_PASS_RATE

# Generate summary report
print("=== Quality Control Report ===")
print("Total parts inspected:", total_parts)
print("Parts passed:", parts_passed)
print("Parts failed:", parts_failed)
print("Pass rate:", pass_rate, "%")
print("Meets quality standards (≥95%):", meets_standards)

# Provide additional context
if meets_standards:
    print("\n✓ Quality standards met - production approved")
else:
    shortfall = TARGET_PASS_RATE - pass_rate
    print("\n✗ Quality standards NOT met")
    print("  Improvement needed:", shortfall, "%")
```

**Key Learning Points:**

- `.count(value)` is perfect for binary (pass/fail, 0/1) analysis
- Comparison operators (`>=`, `<=`, `>`, `<`) return boolean True/False
- Named constants (TARGET_PASS_RATE) make code clearer and easier to modify
- Conditional logic (if/else) provides context - we'll explore this more in Section 4

## Common Pitfalls

1. **Off-by-one errors with indexing:**

   - ❌ For list of 8 items, accessing `list[8]` → Error! Last index is 7, not 8
   - ✓ Valid indices: 0 through `len(list) - 1`
   - Remember: length is 8, but indices are 0-7

2. **Forgetting that slicing end is exclusive:**

   - `list[0:3]` gets indices 0, 1, 2 (NOT 3)
   - To get first 3 items: `list[:3]` not `list[:2]`

3. **Trying to append multiple items incorrectly:**

   - ❌ `list.append(1, 2, 3)` → Error! append takes ONE argument
   - ✓ Use `.extend([1, 2, 3])` or multiple `.append()` calls
   - ✓ `list.append(1)` then `list.append(2)` then `list.append(3)`

4. **Confusing list methods that modify vs. return new lists:**
   - `.append()`, `.sort()`, `.reverse()` modify the original list and return None
   - Slicing `[:]`, `.copy()` create new lists
   - Common mistake: `new_list = old_list.sort()` → `new_list` is None!
   - Correct: `old_list.sort()` then use `old_list`, or use `sorted(old_list)`

**Diagnostics:**

- "IndexError: list index out of range" → You used an index that doesn't exist (too large or negative)
- "TypeError: list indices must be integers" → You used a float or string as index (use `int()` to convert)
- "AttributeError: 'list' object has no attribute 'X'" → Typo in method name or method doesn't exist

## Further Reading

- [Python Lists - Official Docs](https://docs.python.org/3/tutorial/introduction.html#lists)
- [Python List Methods - Real Python](https://realpython.com/python-lists-tuples/)
- [List Slicing in Depth](https://stackoverflow.com/questions/509211/understanding-slice-notation)

---

# Section 3: Building Block - Collections - Dictionaries

## Goal

Learn how to store structured data using key-value pairs with dictionaries. Understand when to use dictionaries vs. lists and how to access and modify dictionary data.

## Why It Matters

Manufacturing data isn't just numbers in a row - it's structured information with labels. A production record has a part number, quantity, operator ID, timestamp, and quality metrics. Dictionaries let you store this labeled data together: `{"part": "A-1234", "quantity": 150, "operator": "J.Smith"}`. This mirrors how databases work and how configuration files (JSON, YAML) are structured. When you read your coworker's scripts that load settings from files or process API data, they're almost certainly using dictionaries.

## Concept Explanation

**What is a Dictionary?**
A dictionary is a collection of **key-value pairs** where each key acts as a label that maps to a value. Think of it like a real dictionary: you look up a word (the key) to find its definition (the value). Or like a filing cabinet: each drawer has a label (key), and inside is the content (value).

**Key Differences from Lists:**

- **Lists**: Ordered, accessed by numeric index (0, 1, 2...)
  - Use when: You have a sequence of similar items
  - Example: `[45, 52, 48]` - hourly counts
- **Dictionaries**: Unordered (until Python 3.7+, now insertion-ordered), accessed by key name
  - Use when: You have labeled/named data fields
  - Example: `{"part": "A-1234", "qty": 150}` - part record

**Dictionary Syntax:**

```python
# Curly braces {} define a dictionary
# key:value pairs separated by commas
production_record = {
    "part_number": "A-1234",
    "quantity": 150,
    "defect_rate": 2.3,
    "operator": "J.Smith"
}
```

**Terminology:**

- **Key**: The identifier/label (must be immutable: string, number, tuple)
- **Value**: The data associated with the key (can be any type)
- **Key-value pair**: One key and its corresponding value
- **Lookup**: Retrieving a value using its key
- **Immutable keys**: Keys cannot be lists or dictionaries themselves (must be unchangeable types)

**Why Keys Must Be Immutable:**
Python uses keys to quickly find values (using a technique called "hashing"). If keys could change, Python couldn't reliably find the values. That's why strings and numbers work as keys, but lists don't.

## Code-Along

Let's create a production tracking system using dictionaries.

**Step 1:** Create a new file called `production_dicts.py`

**Step 2:** Create a dictionary for a single production record:

```python
# Dictionary storing information about one production batch
# Curly braces {} create the dictionary
# "key": value pairs separated by commas
# Keys are strings (in quotes), values can be any type
production_record = {
    "part_number": "A-1234",
    "quantity": 150,
    "defect_count": 3,
    "defect_rate": 2.0,
    "operator": "J.Smith",
    "shift": "Day",
    "machine_id": "M-101"
}

# Display the entire dictionary
print("Production Record:")
print(production_record)
```

**Explanation:**

- Line 2: Curly braces `{}` create a dictionary
- Line 3-9: Each line is a key-value pair
- Keys (`"part_number"`, `"quantity"`, etc.) are strings in quotes
- Values (150, 3, 2.0, "J.Smith") can be different types
- Commas separate each pair
- The dictionary stores all related data in one variable

**🏃 RUN POINT:** Save and run this script.

**Expected Output:**

```
Production Record:
{'part_number': 'A-1234', 'quantity': 150, 'defect_count': 3, 'defect_rate': 2.0, 'operator': 'J.Smith', 'shift': 'Day', 'machine_id': 'M-101'}
```

**Step 3:** Access values using keys:

```python
# Access individual values using square brackets and the key name
# Syntax: dictionary[key] returns the value
part = production_record["part_number"]
qty = production_record["quantity"]
operator = production_record["operator"]

# Display specific fields
print("\nAccessing Individual Fields:")
print("Part Number:", part)
print("Quantity Produced:", qty)
print("Operator:", operator)
```

**Explanation:**

- Square brackets `[key]` retrieve the value for that key
- `production_record["part_number"]` returns `"A-1234"`
- Key names must match exactly (case-sensitive)
- This is like asking: "What's the value for part_number?"

**🏃 RUN POINT:** Add this code and run it.

**Expected Output:**

```
Accessing Individual Fields:
Part Number: A-1234
Quantity Produced: 150
Operator: J.Smith
```

**Step 4:** Modify existing values:

```python
# Update a value in the dictionary
# Use assignment with the key: dict[key] = new_value
print("\nBefore update:", production_record["defect_count"])

# Discovered 2 more defects after inspection
production_record["defect_count"] = 5

# Recalculate defect rate (defects / quantity * 100)
production_record["defect_rate"] = (production_record["defect_count"] / production_record["quantity"]) * 100

print("After update:", production_record["defect_count"])
print("Updated defect rate:", production_record["defect_rate"], "%")
```

**Explanation:**

- Line 4: Assign new value to existing key
- Dictionaries are **mutable** - values can be changed
- Line 8: We can use dictionary values in calculations
- Line 8: Access multiple values from same dictionary in one expression

**🏃 RUN POINT:** Run the updated script.

**Expected Output:**

```
Before update: 3
After update: 5
Updated defect rate: 3.33... %
```

**Step 5:** Add new key-value pairs:

```python
# Add new fields to the dictionary
# Simply assign a value to a new key
production_record["timestamp"] = "2025-10-29 08:00"
production_record["inspector"] = "A.Johnson"
production_record["approved"] = True

# Display updated dictionary
print("\nAfter adding new fields:")
print("Timestamp:", production_record["timestamp"])
print("Inspector:", production_record["inspector"])
print("Approved:", production_record["approved"])
```

**Explanation:**

- Assigning to a new key automatically adds it to the dictionary
- No need to "declare" the key first
- Dictionary grows dynamically as you add fields
- Values can be strings, numbers, booleans, or any type

**🏃 RUN POINT:** Run the script.

**Expected Output:**

```
After adding new fields:
Timestamp: 2025-10-29 08:00
Inspector: A.Johnson
Approved: True
```

**Step 6:** Check if a key exists:

```python
# Use 'in' operator to check if a key exists
# Returns True if key is present, False otherwise
has_timestamp = "timestamp" in production_record
has_temperature = "temperature" in production_record

print("\nKey Existence Check:")
print("Has 'timestamp' key:", has_timestamp)
print("Has 'temperature' key:", has_temperature)

# Safe way to access a key that might not exist
# get() method returns None (or default value) if key doesn't exist
temp = production_record.get("temperature")
temp_with_default = production_record.get("temperature", "Not recorded")

print("\nSafe Access with get():")
print("Temperature (returns None):", temp)
print("Temperature (with default):", temp_with_default)
```

**Explanation:**

- `key in dictionary` checks existence without causing an error
- Direct access `dict[key]` raises error if key doesn't exist
- `.get(key)` returns None if key is missing (doesn't crash)
- `.get(key, default)` returns your default value if key is missing
- Use `.get()` when you're not sure if a key exists

**🏃 RUN POINT:** Run the script.

**Expected Output:**

```
Key Existence Check:
Has 'timestamp' key: True
Has 'temperature' key: False

Safe Access with get():
Temperature (returns None): None
Temperature (with default): Not recorded
```

**Step 7:** Get all keys, values, and pairs:

```python
# Get all keys in the dictionary
# keys() method returns a view of all keys
all_keys = production_record.keys()

# Get all values in the dictionary
# values() method returns a view of all values
all_values = production_record.values()

# Get all key-value pairs
# items() method returns pairs as tuples
all_items = production_record.items()

print("\nDictionary Contents:")
print("All keys:", list(all_keys))
print("\nAll values:", list(all_values))
print("\nFirst 3 items:", list(all_items)[:3])
```

**Explanation:**

- `.keys()` returns all dictionary keys
- `.values()` returns all dictionary values
- `.items()` returns tuples of (key, value) pairs
- We convert to list for cleaner display
- These are useful for looping (we'll learn that in Section 5)

**🏃 RUN POINT:** Run the script.

**Expected Output:**

```
Dictionary Contents:
All keys: ['part_number', 'quantity', 'defect_count', 'defect_rate', 'operator', 'shift', 'machine_id', 'timestamp', 'inspector', 'approved']

All values: ['A-1234', 150, 5, 3.33..., 'J.Smith', 'Day', 'M-101', '2025-10-29 08:00', 'A.Johnson', True]

First 3 items: [('part_number', 'A-1234'), ('quantity', 150), ('defect_count', 5)]
```

**Step 8:** Remove items from dictionary:

```python
# Remove a key-value pair using del keyword
# del removes the key and its value completely
print("\nRemoving 'inspector' field...")
print("Before:", "inspector" in production_record)

del production_record["inspector"]

print("After:", "inspector" in production_record)

# Alternative: pop() removes and returns the value
# Useful when you need the value before deleting
removed_timestamp = production_record.pop("timestamp")
print("\nRemoved timestamp:", removed_timestamp)
print("Timestamp still in dict:", "timestamp" in production_record)
```

**Explanation:**

- `del dict[key]` removes key-value pair permanently
- `.pop(key)` removes the pair AND returns the value
- `.pop(key, default)` won't error if key doesn't exist (returns default)
- Use `del` when you just want to remove
- Use `.pop()` when you need the value before removing

**🏃 RUN POINT:** Run the complete script.

**Expected Output:**

```
Removing 'inspector' field...
Before: True
After: False

Removed timestamp: 2025-10-29 08:00
Timestamp still in dict: False
```

**Step 9:** Create a list of dictionaries (multiple records):

```python
# In real applications, you often have multiple records
# Store them in a list of dictionaries
production_data = [
    {
        "part_number": "A-1234",
        "quantity": 150,
        "defect_count": 5,
        "operator": "J.Smith"
    },
    {
        "part_number": "B-5678",
        "quantity": 200,
        "defect_count": 2,
        "operator": "M.Davis"
    },
    {
        "part_number": "A-1234",
        "quantity": 175,
        "defect_count": 3,
        "operator": "J.Smith"
    }
]

# Access the first record
first_record = production_data[0]
print("\nFirst Production Record:")
print("Part:", first_record["part_number"])
print("Quantity:", first_record["quantity"])

# Access a specific field in the second record
# Two-step access: [index] gets the dictionary, ["key"] gets the value
second_operator = production_data[1]["operator"]
print("\nSecond record operator:", second_operator)

# Count how many records we have
total_records = len(production_data)
print("Total records:", total_records)
```

**Explanation:**

- List of dictionaries is very common for tabular data
- Each list item is a complete dictionary (one record/row)
- Access pattern: `list[index]["key"]`
  - First `[index]` gets the dictionary from the list
  - Then `["key"]` gets the value from that dictionary
- This structure mirrors database tables or CSV files

**🏃 RUN POINT:** Run the complete script.

**Expected Output:**

```
First Production Record:
Part: A-1234
Quantity: 150

Second record operator: M.Davis
Total records: 3
```

**Step 10:** Nested dictionaries (dictionaries inside dictionaries):

```python
# Dictionaries can contain other dictionaries
# Useful for hierarchical data structures
machine_status = {
    "M-101": {
        "status": "running",
        "temperature": 78,
        "speed": 95,
        "last_maintenance": "2025-10-15"
    },
    "M-102": {
        "status": "idle",
        "temperature": 72,
        "speed": 0,
        "last_maintenance": "2025-10-20"
    },
    "M-103": {
        "status": "maintenance",
        "temperature": 65,
        "speed": 0,
        "last_maintenance": "2025-10-29"
    }
}

# Access nested data using multiple bracket operations
# First bracket gets the outer dictionary, second gets inner value
m101_temp = machine_status["M-101"]["temperature"]
m102_status = machine_status["M-102"]["status"]

print("\nMachine Status:")
print("M-101 temperature:", m101_temp, "°C")
print("M-102 status:", m102_status)

# Check how many machines we're tracking
machine_count = len(machine_status)
print("Tracking", machine_count, "machines")
```

**Explanation:**

- Outer dictionary keys are machine IDs (`"M-101"`, `"M-102"`, etc.)
- Each value is itself a dictionary with machine details
- Access pattern: `dict[outer_key][inner_key]`
  - `machine_status["M-101"]` gets the inner dictionary
  - `["temperature"]` then gets the temperature from that inner dict
- This creates a two-level hierarchy: machines → properties

**🏃 RUN POINT:** Run the complete script.

**Expected Output:**

```
Machine Status:
M-101 temperature: 78 °C
M-102 status: idle
Tracking 3 machines
```

## Checkpoint

**Question:** Given this dictionary:

```python
inventory = {
    "screws": 5000,
    "bolts": 3200,
    "washers": 8500,
    "nuts": 4100
}
```

1. How do you access the number of bolts?
2. How do you add a new item "rivets" with quantity 1500?
3. How do you check if "nails" exists in the inventory?
4. What's the difference between `inventory["nails"]` and `inventory.get("nails")` if "nails" doesn't exist?

**Answer:**

1. `bolts_count = inventory["bolts"]` returns 3200
2. `inventory["rivets"] = 1500` adds the new key-value pair
3. `"nails" in inventory` returns False (since nails isn't in the dictionary)
4. `inventory["nails"]` raises a **KeyError** (crashes the program), while `inventory.get("nails")` returns **None** (safe, doesn't crash)

## Exercise

Create a machine monitoring script:

1. Create a dictionary for a machine with these fields:
   - machine_id: "M-205"
   - status: "running"
   - temperature: 82
   - hours_runtime: 156.5
   - last_operator: "T.Wilson"
2. Print the entire dictionary
3. Access and print the machine_id and temperature
4. Update the temperature to 85
5. Add a new field "alert_status" with value False
6. Check if the field "maintenance_due" exists
7. Print the total number of fields in the dictionary

## Stretch Challenge

Create a shift summary report system:

1. Create a list of 3 dictionaries, each representing a shift:
   - Shift 1 (Day): 450 parts, 8 defects, operator "A.Smith"
   - Shift 2 (Evening): 380 parts, 5 defects, operator "B.Jones"
   - Shift 3 (Night): 420 parts, 12 defects, operator "C.Davis"
2. Calculate total parts produced across all shifts
3. Calculate total defects across all shifts
4. Find which shift had the highest defect count
5. Calculate the overall defect rate (total defects / total parts \* 100)
6. Print a formatted summary report with all this information

## Hints

**Exercise Hints:**

**Hint 1:** Start by creating the dictionary with curly braces and key:value pairs. Use `print(machine)` to see the whole thing, and `machine["key"]` to access individual values.

**Hint 2:** To update a value: `machine["temperature"] = 85`. To add a new field: `machine["alert_status"] = False`. To check existence: `"maintenance_due" in machine`.

**Hint 3:** Structure:

```python
machine = {
    "machine_id": "M-205",
    "status": "running",
    # ... other fields
}
print(machine)
temp = machine["temperature"]
machine["temperature"] = 85
machine["alert_status"] = False
# ... etc
```

**Stretch Challenge Hints:**

**Hint 1:** Create a list with three dictionaries. Each dictionary should have keys for "shift", "parts", "defects", and "operator". Use a loop concept we'll learn later, or access each by index: `shifts[0]["parts"]`.

**Hint 2:** To get totals, access each shift and add: `total_parts = shifts[0]["parts"] + shifts[1]["parts"] + shifts[2]["parts"]`. For highest defects, compare the three values.

**Hint 3:** Structure:

```python
shifts = [
    {"shift": "Day", "parts": 450, "defects": 8, "operator": "A.Smith"},
    {"shift": "Evening", "parts": 380, "defects": 5, "operator": "B.Jones"},
    {"shift": "Night", "parts": 420, "defects": 12, "operator": "C.Davis"}
]
total_parts = shifts[0]["parts"] + shifts[1]["parts"] + shifts[2]["parts"]
total_defects = shifts[0]["defects"] + shifts[1]["defects"] + shifts[2]["defects"]
# Use max() with the three defect values
# Calculate rate: (total_defects / total_parts) * 100
```

## Solutions

**Exercise Solution:**

```python
# Machine Monitoring Script

# Create dictionary with machine information
# Keys describe what each value represents
machine = {
    "machine_id": "M-205",
    "status": "running",
    "temperature": 82,
    "hours_runtime": 156.5,
    "last_operator": "T.Wilson"
}

# Display entire dictionary
print("Machine Information:")
print(machine)

# Access specific fields
machine_id = machine["machine_id"]
current_temp = machine["temperature"]

print("\nSpecific Fields:")
print("Machine ID:", machine_id)
print("Current Temperature:", current_temp, "°C")

# Update temperature reading
machine["temperature"] = 85
print("\nUpdated temperature:", machine["temperature"], "°C")

# Add new field for alert tracking
machine["alert_status"] = False
print("Alert status added:", machine["alert_status"])

# Check if maintenance_due field exists
has_maintenance_field = "maintenance_due" in machine
print("\nHas 'maintenance_due' field:", has_maintenance_field)

# Count total fields using len()
# len() on a dictionary counts the number of keys
field_count = len(machine)
print("Total fields in dictionary:", field_count)
```

**Key Learning Points:**

- Dictionary access with `dict[key]` is direct and fast
- Adding new fields is as simple as assigning to a new key
- `in` operator checks key existence without errors
- `len(dict)` counts the number of key-value pairs

**Stretch Challenge Solution:**

```python
# Shift Summary Report System

# Create list of shift records
# Each shift is a dictionary with production data
shifts = [
    {
        "shift": "Day",
        "parts": 450,
        "defects": 8,
        "operator": "A.Smith"
    },
    {
        "shift": "Evening",
        "parts": 380,
        "defects": 5,
        "operator": "B.Jones"
    },
    {
        "shift": "Night",
        "parts": 420,
        "defects": 12,
        "operator": "C.Davis"
    }
]

# Calculate totals by accessing each shift and summing
# Access pattern: shifts[index]["key"] gets value from specific shift
total_parts = shifts[0]["parts"] + shifts[1]["parts"] + shifts[2]["parts"]
total_defects = shifts[0]["defects"] + shifts[1]["defects"] + shifts[2]["defects"]

print("=== Daily Production Summary ===\n")
print("Total Parts Produced:", total_parts)
print("Total Defects:", total_defects)

# Find shift with highest defects
# Extract all defect counts to compare
day_defects = shifts[0]["defects"]
evening_defects = shifts[1]["defects"]
night_defects = shifts[2]["defects"]

# Use max() to find the highest value
highest_defects = max(day_defects, evening_defects, night_defects)

# Determine which shift had this value
if day_defects == highest_defects:
    worst_shift = shifts[0]["shift"]
elif evening_defects == highest_defects:
    worst_shift = shifts[1]["shift"]
else:
    worst_shift = shifts[2]["shift"]

print("\nHighest Defect Count:", highest_defects)
print("Shift with most defects:", worst_shift)

# Calculate overall defect rate
# Formula: (defects / parts) * 100
overall_defect_rate = (total_defects / total_parts) * 100

print("\nOverall Defect Rate:", overall_defect_rate, "%")

# Display individual shift details
print("\n=== Individual Shift Details ===")
print(f"Day Shift - Operator: {shifts[0]['operator']}, Parts: {shifts[0]['parts']}, Defects: {shifts[0]['defects']}")
print(f"Evening Shift - Operator: {shifts[1]['operator']}, Parts: {shifts[1]['parts']}, Defects: {shifts[1]['defects']}")
print(f"Night Shift - Operator: {shifts[2]['operator']}, Parts: {shifts[2]['parts']}, Defects: {shifts[2]['defects']}")
```

**Key Learning Points:**

- Lists of dictionaries model tabular data (like spreadsheet rows)
- Access pattern `list[index]["key"]` gets specific cell value
- Manual summing works but is tedious (we'll learn loops in Section 5)
- Comparing values requires checking each one individually (for now)
- This structure is exactly how JSON data from APIs is organized

**Note:** In Section 5 (Loops), we'll learn how to sum and compare these values automatically without accessing each index manually!

## Common Pitfalls

1. **Using bracket access on non-existent keys:**

   - ❌ `value = dict["missing_key"]` → KeyError! Program crashes
   - ✓ `value = dict.get("missing_key")` → Returns None safely
   - ✓ Check first: `if "key" in dict: value = dict["key"]`

2. **Trying to use mutable types as keys:**

   - ❌ `dict = {[1, 2]: "value"}` → TypeError! Lists can't be keys
   - ✓ `dict = {(1, 2): "value"}` → Tuples work (immutable)
   - ✓ `dict = {"1,2": "value"}` → Strings work (immutable)

3. **Confusing dict["key"] with list[index]:**

   - Dictionary: use key name → `production["quantity"]`
   - List: use numeric index → `hourly_counts[0]`
   - List of dicts: use both → `records[0]["quantity"]`

4. **Forgetting dictionaries were unordered (in old Python):**
   - Python 3.7+: Dictionaries maintain insertion order
   - Earlier versions: Order was unpredictable
   - Don't rely on order if your code might run on old Python versions
   - If order matters, consider using a list of tuples or ordered collections

**Diagnostics:**

- "KeyError: 'key_name'" → Key doesn't exist; use `.get()` or check with `in` first
- "TypeError: unhashable type: 'list'" → Tried to use list as dictionary key; use tuple or string instead
- "AttributeError: 'dict' object has no attribute 'X'" → Method name typo or doesn't exist

## Further Reading

- [Python Dictionaries - Official Docs](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
- [Python Dictionary Methods - Real Python](https://realpython.com/python-dicts/)
- [When to Use Lists vs Dictionaries](https://stackoverflow.com/questions/2294663/when-to-use-dictionaries-vs-lists-in-python)

---
