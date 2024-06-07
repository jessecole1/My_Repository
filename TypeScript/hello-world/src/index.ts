console.log("Hello, World!");

let age: number = 20;

if (age < 50)
    age += 10;
console.log(age);


let course = "TypeScript";
let level = 1;

// arrays 

// Dont need to set the type, javascript will guess what type it is
let number = [1, 2, 3];

// Creating an empty array, you need to set the type 
let numberTwo: number[] = [];
numberTwo.push(1);
numberTwo.push(34);

console.log(numberTwo);

// Tuples

let user: [number, string] = [30, "Jesse"];
console.log(user);
user.push(1);
console.log(user);

// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
    Small = 1, Medium, Large
}

let mySize = Size.Medium;
console.log(mySize);

// Functions 
//   - always properly annotate functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

console.log(calculateTax(50000, 2021));

// Objects 
