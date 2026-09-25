# Define a funciton to print a list of items - this collect and shows our dependencies
# Functions group code for reuse; here, it takes a list (sequence of items) and loops through it
def print_dependencies(deps_list):
    # Loop through each item in the list - 'for' repeats for each element
    for dep in deps_list:
        # Print item - output to console for visibility
        print(dep)


# Example list of dependencies - list hold multiple values, like a shopping list
dependencies = ["Binary basics", "Powers of 2", "Conversions", "Bytes",
                "Memory sim", "Von Neumann", "Hierarchy", "Instruction cycle"]

# Call the function with ourl list = this runs the code inside the function
print_dependencies(dependencies)

# Define a funciton to print binary digits - take a string of 0s and 1s
# We'll use this to visualize binary numbers before conversions


def show_binary(binary_str):
    # Check if input is valid - ensures it's only 0s and 1s
    for digit in binary_str:  # Loop over each charater in the string
        if digit != '0' and digit != '1':  # If not 0 or 1, its invalid
            print("Error, Input must be 0s and 1s only")
            return  # Exit function if invalid
    # Print the binary string - shows the sequence as-is
    print(f"Binary number: {binary_str} len: {len(binary_str)}")


# Test with an example - binary 101 is 5 in decimal (we'll learn why later)
show_binary("101")


# Enhanced function to show binary with positions
def show_binary_with_positions(binary_str):
    # Check validity - same as before to ensure only 0s and 1s
    for digit in binary_str:
        if digit != '0' and digit != '1':
            print('Error: Input must be 0s and 1s only')
            return
    # Loop backwards to label positions - righmost position 0
    position = 0  # Start at rightmost position (2^0 = 1)
    for digit in reversed(binary_str):  # reversed() iterates from end to start
        print(
            f"Bit at position {position} (2^{position}): {digit} {'on' if digit == '1' else 'off'}")
        position += 1  # Move to the next position (leftward)


# Test both functions
show_binary_with_positions("101")


# Define a function to compute 2 rasied ot a power - takes an expoenent (non-negative integer)
def power_of_two(exponent):
    # Check if exponent is negative - we only want non-negative for now
    if exponent < 0:  # Less than 0 means negative
        print("Error: Exponent must be non-negative")
        # Return None (special value meaning "nothing") to indicate error
        return None
    # Initialize result to 1 - this is 2^0
    result = 1
    step = 1  # Track multiplication steps
    # Loop 'exponent' times - each loop multiplies by 2
    for _ in range(exponent):  # _ means we don't use the loop variable
        print(f"Step {step}: {result}*2={result*2}")  # Show before multipyling
        result = result * 2  # Multiply by 2 - doubles the previous value
        step += 1
    # Return the final result - the power of 2
    return result


# Test a few values - shows how powers grow
print(f"2^0 = {power_of_two(0)}")  # Should be 0
print(f"2^1 = {power_of_two(1)}")  # Should be 2
print(f"2^2 = {power_of_two(2)}")  # Should be 4
print(f"2^-1 = {power_of_two(-1)}")  # Should show error


# Test modulo and integer division - understand remainders and quotients
def test_division(number, divisor):
    # Calculate remainder - what's left after dividing as many times as possible
    remainder = number % divisor
    # Calculate quotient - how many times divisor fits wholly
    quotient = number // divisor
    # Print results - shows both parts of division
    print(f"{number} / {divisor} = {quotient} remainder {remainder}")


# Try examples - helps see how division works
test_division(13, 2)  # Should show 6 remainder 1
test_division(7, 3)  # Should show 3 remainder 1


# Convert decimal to binary - takes a non-negative integer
def decimal_to_binary(number):
    # Check if number is negative - we only handle non-negative for now
    if number < 0:
        print("Error: Number must be non-negative")
        return None
    # Handle special case: 0 - binary is just "0"
    if number == 0:
        return "0"
    # Initialize empty string - we'll build binary digits from right to left
    binary = ""
    step = 1  # Track division steps
    temp = number  # Preserve original number for printing
    # While number is not 0 - keep dividing to get bits
    while number > 0:
        # Get remainder (0 or 1) - this is the next binary digit
        bit = number % 2
        print(f"Step {step}: {number} / 2 = {number // 2} remainder {bit}")
        # Add bit to start of string - builds in reverse order
        binary = str(bit) + binary
        # Divide number by 2 - moves to next place value
        number = number // 2
        step += 1
    # Return the binary string - our result
    length = (4-(len(binary) % 4)) % 4
    print(length)
    binary = "0" * length + binary
    print(f"{temp} in binary: 0b{binary}")
    return "0b"+binary


# Test conversion - try small numbers
print(f"5 in binary: {decimal_to_binary(5)}")  # Should be 101
print(f"13 in binary: {decimal_to_binary(13)}")  # Should be 1101
print(f"23 in binary: {decimal_to_binary(23)}")  # Should be


# Convert binary string to decimal - takes a string of 0s and 1s
def binary_to_decimal(binary_str):
    # Check if input is valid - only 0s and 1s
    for digit in binary_str:
        if digit != '0' and digit != '1':
            print("Error: Input must be 0s and 1s only")
            return None  # Exit if invalid
        # Intialize sum - will hold the decimal value
        decimal = 0
        # Loop through digits right-to-left each position is a power of 2
        position = 0  # Rightmost position is 2^0
        for digit in reversed(binary_str):  # Start from right (least significant)
            # Convert digit to integer - '1' becomes 1, '0' becomes 0
            bit_value = int(digit)  # String to integer (e.g., '1' -> 1)
            # If bit is 1, add its place value (2^position) to sum
            if bit_value == 1:
                decimal = decimal + power_of_two(position)  # Use our function
            position += 1  # Move to next position (left)
        # Return the decimal number
        return decimal


# Test conversion - try known values
print(f"Binary 101 = {binary_to_decimal('101')}")  # Should be 5
print(f"Binary 1101 = {binary_to_decimal('1101')}")  # Should be 13

# Dispay a number a an 8-bit byte - takes a decimal number


def number_to_byte(number, bit_length=8):
    # Check if number is valid - must be 0 to 255 for 8 bits
    # Maximum value for 8 bits (2^8 - 1)
    MAX_8BIT_VALUE = power_of_two(bit_length) - 1
    if number < 0 or number > MAX_8BIT_VALUE:
        print(f"Error: Number must be 0 to {MAX_8BIT_VALUE}")
        return None
    # Convert to binary using our function - get binary string
    binary = decimal_to_binary(number)  # Get binary (e.g., "101" for 5)
    # Remove "0b" prefix if present - we just want digits
    if binary.startswith("0b"):  # Check if string starts with "0b"
        binary = binary[2:]  # Slice off the first two characers
    # Pad with leading zeros to make 8 bits - ensures byte length
    padding = "0" * (8 - len(binary))  # Calculate zeros needed
    binary = padding + binary  # Add zeros to front
    # Return the 8-bit binary string
    return binary


# Test with numbers
print(f"5 as byte: {number_to_byte(5)}")  # Should be 00000101
print(f"13 as byte: {number_to_byte(13)}")  # Should be 00001101

# Simulate memory as a list - each element is a byte (0-255)


def create_memory(size):
    # Create a list of 'size' bytes - initailize all to 0
    memory = [0] * size  # List with 'size' zeros (e.g., [0, 0, 0] for size=3)
    # Return the memory list - our simulated RAM

# Write a value to an address - updates memory


def write_memory(memory, address, value):
    # Check if address is valid - must be within memory size
    if address < 0 or address >= len(memory):
        print(f"Error: Address {address} out of range (0 to {len(memory)-1})")
        return False  # Inidcate failure
    # Check if value fits in bytes - must be 0 to 255
    MAX_8BIT_VALUE = 255
    if value < 0 or value > MAX_8BIT_VALUE:
        print(f"Error: Value {value} must be 0 to {MAX_8BIT_VALUE}")
        return False
    # Write value to memory - store at given addresss
    memory[address] = value
    # Show the byte written - use our function for binary
    print(f"Wrote {value} ()")
