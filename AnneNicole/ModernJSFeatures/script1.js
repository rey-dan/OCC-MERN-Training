//ARROW FUNCTIONS
// const greet = (name) => {
//   console.log(`Hello, ${name}!`);
// };

// greet("John");

// const multiply = (a, b) => a * b;

// console.log(multiply(5, 7));

// const isEven = (num) => num % 2 === 0;
// console.log(isEven(4));

// const squareArrow = (num) => num * num;
// console.log(squareArrow(9));

//TEMPLATE LITERALS
// const name = "Alice";
// const age = 25;
// console.log(`My name is ${name} and I am ${age} years old.`);

//DESTRUCTURING
// const numbers = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = numbers;
// console.log(first, second, rest);

// const person = { name: "Bob", age: 30, country: "USA" };
// const { name: personName, age: personAge } = person;
// const { name, age } = person;

// console.log(name, age);

//SPREAD OPERATORS
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray);

// const sum = (...numbers) => {
//   return numbers.reduce((total, num) => total + num, 0);
// };

// console.log(sum(1, 2, 3, 4, 5));

//ENHANCED OBJECT LITERALS

// const firstName = "Jane";
// const lastName = "Doe";
// const person = {
//   firstName,
//   lastName,
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.fullName());

//DEFAULT PARAMETERS
const calculateArea = (length = 1, width = 1) => {
  return length * width;
};

console.log(calculateArea());
console.log(calculateArea(3, 4));

//ADDITIONAL EXAMPLES

//Default parameters with template literals
const printMessage = (message = "Hello World!") => {
  console.log(message);
};

printMessage(); //
printMessage("Welcome!"); //

//Destructuring with default values
const settings = {
  theme: "light",
  fontSize: 14,
  showNotifications: true,
};

const { theme, fontSize, showNotifications = false } = settings;
console.log(theme, fontSize, showNotifications);

//SPREAD OPERATOR WITH OBJECTS

const user = {
  name: "John",
  age: 30,
};

const updateUser = {
  ...user,
  location: "USA",
};

console.log(updateUser);
