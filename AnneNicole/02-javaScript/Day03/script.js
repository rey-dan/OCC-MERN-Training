// // alert("working");

// let age = 25;
// const name = "John";

// //Primitive Data Types
// let count = 10; //Declaring a variable 'name'

// let message = "Hello, World!";

// let isTrue = true;

// let emtpyValue = null;

// let undefinedValue = undefined;

// // Explanation: JavaScript has several primitive data types:
// // - Number: Represents numeric values, including integers and floating-point numbers.
// // - String: Represents sequences of characters enclosed in single or double quotes.
// // - Boolean: Represents the logical values of 'true' and 'false'.
// // - Null: Represents the intentional absence of any object value.
// // - Undefined: Represents the absence of a value or an uninitialized variable.

// //Array Manipulation
// const numbers = [1, 2, 3, 4, 5, 6, "js"];
// const number2 = numbers; // pointing to numbers
// //number2's location is pointing to the location of where numbers is stored

// //Arrays are  reference-based

// // numbers.push(6);

// // console.log(numbers);
// // console.log(number2);

// // const x = "zoom";
// // x = "mooz";

// //Array Methods - mga bagay n kayang gawin
// numbers.push(6);
// console.log(numbers);

// const fruits = ["apple", "banana", "orange"];

// console.log(fruits.indexOf("banana"));

// const slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits);

// const joinedFruits = fruits.join(", ");
// console.log(joinedFruits);

// fruits.reverse();
// console.log(fruits);

// //ARRAY PROPERTIES (length)
// console.log(fruits.length);

// /*length of fruits array is 3

// */

// //ARRAY METHODS (push, slice, join)
// fruits.push();

// //ARRAY NAME is always plural

// console.log(fruits.length - 1);
// console.log(fruits[fruits.length - 1]);

//

// const fruits = ["apple", "banana", "orange"];

// const fruitsMinus = fruits.pop();

// console.log(fruitsMinus);

// console.log(fruits);

// const fruitShifted = fruits.shift();
// console.log(fruitShifted);

// const numbers = [1, 2, 3];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// //ARRAY METHOD
// fruits.forEach(function (fruits) {
//   console.log(fruits);
// });

console.log("*");
console.log("**");
console.log("***");
console.log("****");
console.log("*****");
console.log("******");
console.log("*******");

function makeTriangle() {
  console.log("*");
  console.log("**");
  console.log("***");
  console.log("****");
  console.log("*****");
  console.log("******");
  console.log("*******");
}

makeTriangle();
makeTriangle();
makeTriangle();
makeTriangle();

function sayHi() {
  console.log("Hi there!");
}

sayHi();

//Functions with Parameters

function sayHello(name) {
  console.log("Hello " + name);
}
