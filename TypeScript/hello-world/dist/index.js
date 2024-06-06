"use strict";
console.log("Hello, World!");
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let course = "TypeScript";
let level = 1;
let number = [1, 2, 3];
let numberTwo = [];
numberTwo.push(1);
numberTwo.push(34);
console.log(numberTwo);
let user = [30, "Jesse"];
console.log(user);
user.push(1);
console.log(user);
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
console.log(calculateTax(50000, 2021));
//# sourceMappingURL=index.js.map