#include <iostream>
#include <string>

int main() {
    int myArray[] = {10, 5, 2, 3};
    for (int i : myArray) {
        std::cout << i << "\n";
    }
    std::cout << sizeof(myArray) / sizeof(int);
    return 0;
}