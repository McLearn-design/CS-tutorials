#include <iostream>
#include <vector>
using namespace std;
#include <limits> // Required for clearing bad input

int main() {
   vector<int> oldestPeople(5);  
   int nthPerson;               // User input, Nth oldest person
   // Suggestion 1: Use modern C++ list initialization for clarity.
   // This also allows making the vector `const` as it's not modified.
   const std::vector<int> oldestPeople = {122, 119, 117, 117, 116};
   int nthPerson;

   oldestPeople.at(0) = 122; // Died 1997 in France
   oldestPeople.at(1) = 119; // Died 1999 in U.S.
   oldestPeople.at(2) = 117; // Died 1993 in U.S. 
   oldestPeople.at(3) = 117; // Died 1998 in Canada
   oldestPeople.at(4) = 116; // Died 2006 in Ecuador
   // Suggestion 3: Add a loop to handle invalid input gracefully.
   while (true) {
      // Suggestion 2: Use the vector's .size() method instead of a hardcoded number.
      std::cout << "Enter N (1.." << oldestPeople.size() << "): ";
      std::cin >> nthPerson;

   cout << "Enter N (1..5): ";
   cin  >> nthPerson;
      // Check if the user entered non-numeric input
      if (std::cin.fail()) {
         std::cout << "Invalid input. Please enter a number." << std::endl;
         std::cin.clear(); // Clear the error state
         std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // Discard the rest of the line
         continue; // Restart the loop
      }

   if ((nthPerson >= 1) && (nthPerson <= 5)) {
      cout << "The " << nthPerson << "th oldest person lived ";
      cout << oldestPeople.at(nthPerson - 1) << " years." << endl;
      // Check if the number is within the valid range
      if ((nthPerson >= 1) && (nthPerson <= oldestPeople.size())) {
         std::cout << "The " << nthPerson << "th oldest person lived ";
         std::cout << oldestPeople.at(nthPerson - 1) << " years." << std::endl;
         break; // Exit loop on success
      } else {
         std::cout << "Input out of range. Please try again." << std::endl;
      }
   }

   return 0;
}