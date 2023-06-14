// Your code implementation goes here:

// Calculate the square root of a given number
function squareRoot(num){
    return Math.sqrt(num);
}
// Generate a random number between 1 and 10
function random(){
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

// Convert a string representation of a number to an actual number
function convertToNumber(input){
    return Number(input);
}

// Check if a value is not a number
function isNotANumber(value){
    return isNaN(value);
}

// Convert a number to a string
function convertToString(number){
    return number.toString();
}
