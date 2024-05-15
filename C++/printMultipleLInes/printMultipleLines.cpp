#include <iostream>
#include <string>

using namespace std;

int main() {
    string fullName;
    cout << "Print your first and last name: ";
    getline (cin, fullName);
    cout << "Your full name is " << fullName;
    return 0;
}