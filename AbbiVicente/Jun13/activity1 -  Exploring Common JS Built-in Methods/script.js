// Calculate the square root of a given number
const num = 24;
const squareRoot = Math.sqrt(num);
console.log(`The square root of ${num} is ${squareRoot}`);

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

// Convert a string representation of a number to an actual number
const stringNumber = "42";
const parsedNumber = parseInt(stringNumber);
console.log(parsedNumber);

// Check if a value is not a number
const checkIfNum = "Abbi";
console.log(`Is "${checkIfNum}" not a number? ${isNaN(checkIfNum)}`);

// Convert a number to a string
const number = 23;
const string = number.toString();
console.log(`Number to string: ${string}`);
