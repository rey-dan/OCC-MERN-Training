// Your code implementation goes here:

// Calculate the square root of a given number
const squareRoot = (num) => Math.sqrt(num)
console.log(squareRoot(9))

// Generate a random number between 1 and 10
const randomNum = () => (Math.random() * 10 + 1)

console.log(randomNum())


// Convert a string representation of a number to an actual number
const stringToNum = (str) => parseFloat(str) 

console.log(stringToNum("23"))

// Check if a value is not a number
const isNumber = (x) => typeof x === 'number'

console.log(isNumber(3))

// Convert a number to a string
const numToString = (num) => (num).toString()

console.log(numToString(3))