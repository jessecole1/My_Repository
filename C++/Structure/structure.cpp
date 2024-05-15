#include <iostream>
#include <string>

int main() {
    struct {
        int myAge;
        string myName;
    } jesseStructure;

    std::cout << "Enter your full name: ";
    getline (cin, name);
    jesseStructure.myName = name;
    std::cout << "Thank you.\nPlease enter your age: ";
    std::cin >> age;
    jesseStructure.myAge = age;
    std::cout << "You are " << jesseStructure.myName << " and you are " << jesseStructure.myAge << " years old";
    return 0;
}

// I tried building a program to take in your name and age and put it in a structure
// I just tried guessing how to do this, it doesn't work at all 