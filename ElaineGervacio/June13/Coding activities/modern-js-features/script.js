// //Arrow functions
// const greet = (name) => {
//     console.log(`Hello, ${name}!`);
// };

// greet('John');

// //Implicit return
// const multiply = (a, b) => a * b;
// console.log(multiply(5, 7));

// const isEven = (num) => num % 2 === 0;
// console.log(isEven(4));

// //transforming function expression to arrow function
// function square(num){
//     return num & num;
// }console.log(square(3));

// // const squareArrow = (num) =>

// //template literals
// const name = 'Alice';
// const age = 25;
// console.log(`My name is ${name} and I am ${age} years old.`);

// //Destructuring
// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// console.log(first, second, rest);

// const person = {name: 'Bob', age: 30, country: 'USA'};
// const { name: personName, age: personAge} = person;
// console.log(personName, personAge);
// const {name, age} = person;
// console.log(name);

//Spread Operator
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, array2];
// console.log(combinedArray);

// const sum = (...numbers) => {
//     return numbers.reduce((total, num)=> total + num, 0)
// }

// console.log(sum(1,2,3,4,5));

//Enhanced object literals
// const firstName = 'Jane';
// const lastName = 'Doe';
// const person = {
//     firstName,
//     lastName,
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// console.log(person.fullName);

//Default parameters
// const calculateArea = (length = 1, width = 1) => {
//     return length * width;
// };
// console.log(calculateArea());
// console.log(calculateArea(3, 4));

// const printMessagge = (message = 'Hello, World!') => {
//     console.log(message);
// };
// printMessagge();
// printMessagge('Welcome !');

//Destructuring with default values
// const settings = {
//     theme: 'light',
//     fontSize: 14,
//     showNotifications: true
// };

// const {theme, fontSize, showNotifications = false} = settings;
// console.log(theme, fontSize, showNotifications);

//Spread Operator with objects
// const user = {
//     name: 'John',
//     age: 30
// };

// const updatedUser = {
//     ...user,
//     location: 'USA',
// };
// console.log(updatedUser);

