// Variables and Data Types
let greeting = "Hello, World!";
let number = 42;
let isTrue = true;
let floatNumber = 3.14;
let array = [1, 2, 3, 4, 5];
let object = { key: "value", anotherKey: "anotherValue" };
console.log(array)

// Operators
let sum = 5 + 10;
let difference = 20 - 5;
let product = 8 * 2;
let quotient = 24 / 3;
let remainder = 15 % 4;
console.log(product)

// Conditionals
if (number > 0) {
  console.log("Number is positive");
} else if (number < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}

let i = 0;
while (i < 5) {
  console.log("While loop iteration number: " + i);
  i++;
}

// Functions
function add(a, b) {
  return a + b;
}

let result = add(3, 7);
console.log("Result of addition: " + result);

// Objects and Methods
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Full Name: " + person.fullName());

// // Events (in a browser environment)
// document.getElementById("myButton").addEventListener("click", function() {
//   alert("Button clicked!");
// });
