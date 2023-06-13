function isLegalAge(age) {
  return age >= 18 ? true : false;
}
function loopThis(num1, num2) {
  if (num1 < num2) {
    for (let i = num1; i < num2; i++) {
      console.log(i);
    }
  } else {
    console.log("Please make sure the first number is lower than the second");
  }
}

function loopEven(a, b) {
  for (let i = a; i < b; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
loopEven(1, 10);

function calculatesSum(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  console.log("The sum of the array elements is " + sum);
}

let num = [2, 4, 6, 8, 10];
calculatesSum(num);
//The sum of the array elements is 30

let x = 12;
let y = "12";
if (x === y) {
  console.log("they are equal");
} else {
  console.log("not equal");
}

// function greet(name) {
//   console.log("Hello" + name);
// }
// //function Expression
// greet("Ken");
// const greet = function (name) {
//   console.log("Hello " + name);
// };

// //using a function expression as a callback

// function calculate(a, b, operation) {
//   return operation(a, b);
// }
// const product = function (a, b) {
//   return a * b;
// };
// console.log(calculate(2, 3, product));

const square = function (num) {
  return num * num;
};
const square1 = (num) => {
  return num * num;
};

const add = (a, b) => {
  return a + b;
};
const multiply = (a, b) => a * b;

//JS Objects

const person = {
  name: "Ken",
  age: 22,
  greet: () => {
    console.log("Hello" + name);
  },
};
const people = [
  { name: "John", age: 22 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
const products = [
  { name: "John", age: 22 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
let total = 0;
for (let i = 0; i < products.length; i++) {
  total += products[i].price;
}
console.log(total);
