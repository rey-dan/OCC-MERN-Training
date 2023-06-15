//Common JS built-in methods
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

//Example 2:  Array.prototype.map();
//The map() method creates a new array populated

const squares = numbers.map((number) => number * number);

console.log(squares);

//Example 3: .filter()
//Creates a new array
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

//Example 4: .reduce()
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);

//Example 5: .split()
const message = "Hello, World!";
const words = message.split(", ");
console.log(words);

//Example 6: .includes()
const sentence = "The quick brown fox jumps over the lazy dog";
const containsWord = sentence.includes("fox");
console.log(containsWord);

//Example 7: .trim()
const paddedText = "   Hello!   ";
const trimmedText = paddedText.trim();
console.log(trimmedText);

//Example 8: .keys()
const person = { number: "John", age: 30, city: "New York" };
const keys = Object.keys(person);
console.log(keys);

//Example 9: Object.values()
const values = Object.values(person);
console.log(values);

//Example 10: Object.entries()
const entries = Object.entries(person);
console.log(entries);

//Example 11: Math.max()
// const maxNumber = Math.max(10, 5, 20);
// console.log(maxNumber);

//Example 12: Math.random()
const randomValue = Math.random();
console.log(randomValue);

//Example 13: Date()
const currentDate = new Date();
console.log(currentDate);

//Example 14: Math.floor()
const roundedNumber = Math.floor(3.7);
console.log(roundedNumber);

//Example 15: Math.ceil()
const roundedNumber2 = Math.ceil(3.2);
console.log(roundedNumber2);

//Example 16: parseInt(). Turning strings to numbers
// let x = parseInt(prompt("Enter Number"));

// const stringNumber = "42";
// const parsedNumber = parseInt(stringNumber);

//Example 17: parseFloat()
// const stringFloat = "3.14";
// const parsedFloat = parseFloat(stringFloat);
// console.log(parsedFloat);

//Example 18: Math.random() with Math.floor()
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInteger = getRandomInt(1, 10);
console.log(randomInteger);

//Example 19: Math.pow()
const powerResult = Math.pow(2, 3);
console.log(powerResult);

//Example 20: Math.abs()
const absoluteValue = Math.abs(-5);
console.log(absoluteValue);

//Example 21: Math.round()
const roundedValue = Math.round(3, 6);
console.log(roundedValue);

//Example 22: Math.max() and Math.min()
const maxNumber2 = Math.max(5, 10, 3);
const minNumber = Math.min(5, 10, 3);
console.log(maxNumber2);
console.log(minNumber);
