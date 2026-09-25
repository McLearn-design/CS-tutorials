#include <iostream>
#include <cstring>
#include <cctype>
using namespace std;



int main(){
char str1[10] = "Earth"; 
char str2[20] = "Earthlings";
char str3[15] = "Mars";

if(strcmp(str1, str2) == 0) {
    cout << "equal" << endl;
}else{
    cout << "Not equal" << endl;
}
if (str1 == str3){
    cout << "test" << endl;
}
char myString[30] = "Hey9! Go";
cout << isalpha('A') << endl;            // Returns true
cout << isalpha(myString[0]) << endl;    // Returns true because 'H' is alphabetic
cout << isalpha(myString[3]) << endl;    // Returns false because '9' is not alphabetic
cout << isdigit(myString[3]) << endl;    // Returns true because '9' is numeric
cout << isdigit(myString[4]) << endl;    // Returns false because ! is not numeric
cout << isalnum('A') << endl;            // Returns true
cout << isalnum(myString[3]) << endl;    // Returns true because '9' is numeric
cout << isspace(myString[5]) << endl;    // Returns true because that character is a space ' '.
cout << isspace(myString[0]) << endl;    // Returns false because 'H' is not whitespace.
cout << islower(myString[0]) << endl;    // Returns false because 'H' is not lowercase. 
cout << islower(myString[1]) << endl;    // Returns true because 'e' is lowercase.
cout << islower(myString[3]) << endl;    // Returns false because '9' is not a lowercase letter.
cout << isupper(myString[0]) << endl;    // Returns true because 'H' is uppercase. 
cout << isupper(myString[1]) << endl;    // Returns false because 'e' is not uppercase.
cout << isupper(myString[3]) << endl;    // Returns false because '9' is not an uppercase letter.
cout << isblank(myString[5]) << endl;    // Returns true because that character is a space ' '. 
cout << isblank(myString[0]) << endl;    // Returns false because 'H' is not blank.
cout << isxdigit(myString[3]) << endl;  // Returns true because '9' is a hexadecimal digit.
cout << isxdigit(myString[1]) << endl;  // Returns true because 'e' is a hexadecimal digit.
cout << isxdigit(myString[6]) << endl;  // Returns false because 'G' is not a hexadecimal digit.
cout << ispunct(myString[4]) << endl;  // Returns true because '!' is a punctuation character. 
cout << ispunct(myString[6]) << endl; // Returns false because 'G' is not a punctuation character.
cout << isprint(myString[0]) << endl;    // Returns true because 'H' is a alphabetic. 
cout << isprint(myString[4]) << endl;    // Returns true because '!' is punctuation.
cout << isprint(myString[5]) << endl;    // Returns true because that character is a space ' '.
cout << isprint('\0') << endl;           // Returns false because the null character is not printable
cout << iscntrl(myString[0]) << endl;    // Returns false because 'H' is a not a control character 
cout << iscntrl(myString[5]) << endl;    // Returns false because space is a not a control character
cout << iscntrl('\0') << endl;           // Returns true because the null character is a control character
char letter;
letter = toupper(myString[0]);   // Returns 'H' (no change)
cout << letter << endl;
letter = toupper(myString[1]) ;  // Returns 'E' ('e' converted to 'E') 
cout << letter << endl;
letter = toupper(myString[3]) ;  // Returns '9' (no change) 
cout << letter << endl;
letter = toupper(myString[5]) ;  // Returns ' ' (no change)
cout << letter << endl;
letter = tolower(myString[0]) ;  // Returns 'h' ('H' converted to 'h')
cout << letter << endl;
letter = tolower(myString[1]);  // Returns 'e' (no change)
cout << letter << endl;
letter = tolower(myString[3]);  // Returns '9' (no change) 
cout << letter << endl;
letter = tolower(myString[5]);  // Returns ' ' (no change)
cout << letter << endl;
return 0;
}
