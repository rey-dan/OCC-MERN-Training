/*1. Create a function called isLegalAge that accepts a number and returns true if the number supplied is greater than or equal to 18. Return false if otherwise */

// function isLegalAge(age) {
//   return age >= 18;
// }

// console.log(isLegalAge(15));

//2. Create a function called loopThis that accepts 2 numbers. The first number should be lower than the second. Using these numbers, print out the result in the console using for loop.

// function loopThis(num1, num2) {
//   let max;
//   let min;

//   if (num1 > num2) {
//     max = num1;
//     min = num2;
//   } else {
//     max = num2;
//     min = num1;
//   }

//   let counter = 0;
//   for (let i = min; i <= max; i++) {
//     counter += i;
//     console.log(counter);
//     counter = 0;
//   }
// }

// loopThis(9, 2);

//SIR ALLAN SOLUTION
// function loopThis(start, end){
//   if(start < end){
//       for(let i = start; i <= end; i++){
//           console.log(i)
//       }
//   }else{
//       console.log('Please make sure the 1st number is lower than the second')
//   }
// }

//////////

//3. Create another function called loopEven that takes in 2 numbers and prints out the even numbers between the numbers provided.

// function loopEven(start, end) {
//   if (start < end) {
//     for (let i = start; i <= end; i++) {
//       const getEven = i % 2;

//       if (getEven == 0) {
//         console.log(i);
//       }
//     }
//   } else {
//     console.log("Please make sure the 1st number is lower than the second");
//   }
// }

// loopEven(2, 30);
// loopEven(20, 3);

// function loopEven(num1, num2) {
//   let max;
//   let min;

//   if (num1 > num2) {
//     max = num1;
//     min = num2;
//   } else {
//     max = num2;
//     min = num1;
//   }

//   let counter = 0;
//   for (let i = min; i <= max; i++) {
//     counter += i;
//     const getEven = counter % 2;
//     if (getEven == 0) {
//       console.log(counter);
//     }
//     counter = 0;
//   }
// }

// loopEven(10, 20);

//4. Create a function called calculatesSum that takes in an array of numbers as its arguement and return the sum of the numbers inside the array.

// function calculateSum(arr) {
//   let sum = 0;

//   arr.forEach((num) => (sum += num));

//   return sum;
// }

// let numbersArray = [2, 4, 6, 8, 10];
// let sum = calculateSum(numbersArray);
// console.log(sum);

///////////////////

// return sum;

// let x = 12;
// let y = "12";

// if (x === y) {
//   console.log("they are equal");
// } else {
//   console.log("not equal");
// }

// let a = "19";
// let b = 9;

// console.log(a + b);

/*More on JS Functions
Function Declaration*/

//Function Declaration - hoisted
// function greet(name) {
//   console.log("Hello " + name);
// }

//Function Expression - not hoisted
// const greet = function (name) {
//   console.log("Hello " + name);
// };

//Using a function expression as a callback
//Only function expression can be used as a callback function

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// function difference(a, b) {
//   return a - b;
// }

// let result1 = calculate(2, 3, product);
// let result2 = calculate(10, 2, difference);
// let result3 = result2 - result1;

// console.log(result2);

// const sum1 = function (a, b) {
//   return a + b;
// };

// const product = function (a, b) {
//   return a * b;
// };

// console.log(calculate(2, 3, sum1));
// console.log(calculate(2, 3, product));
// console.log(calculate(10, 2, difference));

/*In this example, the function expression square is converted to an arrow function by removing 
the function keyword and adding the arrow (=>) between the parameter and the function body. 
The return statement remains the same. */

// const square1 = function (num) {
//   return num * num;
// };

// const square2 = (num) => {
//   return num * num;
// };

/*Function Expression with multiple parameters to Arrow Functions 

const add = function(a, b){
  return a+b;
}

const add = (a, b) =>{
  return a+b;
}


const multiply = (a,b) = >  a * b;



JS OBJECTS
Object Literals



*/

//DO NOT USE ARROW FUNCTIONS AS A METHOD IN OBJECTS

/*
const person = {
  name: "Monts",
  age: 23,
  greet: function () {
    console.log(`Hello ` + this.name);
  },
  greet2: function () {
    console.log(`Hello ` + this.name);
  },
};

console.log(person.name, person.age);
person.greet();

const products = [
  { id: 1, name: "shirt", price: 20 },
  { id: 1, name: "shoes", price: 50 },
  { id: 1, name: "hat", price: 10 },
];

function allArray() {
  let amount = 0;
  for (let i = 0; i < products.length; i++) {
    amount += products[i].price;
  }
  return amount;
}

console.log(allArray());

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
*/

const para = document.querySelector("body > div.error");
const errors = document.querySelectorAll(".error");

// console.log(para);

const paras = document.querySelectorAll("p");

// console.log(paras[1]); //array method on a NODE LIST

paras.forEach((para) => {
  console.log(para);
});

console.log(errors);

//get an element by ID
const title = document.getElementById("page-title");
console.log(title);

//get elements by their class name
const errors1 = document.getElementsByClassName("error");
console.log(errors1);
console.log(errors1[1]); //but can not use array methods

//get elements by their tag name
const paras1 = document.getElementsByTagName("p");
console.log(paras1);
console.log(paras1[1]);
