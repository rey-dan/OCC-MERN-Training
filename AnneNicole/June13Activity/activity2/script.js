// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.

const getSquare = (num) => console.log(Math.pow(num, 2));

getSquare(3);
getSquare(4);
getSquare(5);

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const name = "Anne";
const age = 55;
console.log(`Hello ${name}! You are now ${age} years old.`);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
  firstName: "Maria",
  lastName: "Buendia",
};

const { firstName, lastName } = person;

console.log(firstName, lastName);

// Task 4: Use the spread operator to merge two arrays into a single array.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const combined = [...arr1, ...arr2];
console.log(combined);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.

function rectangleArea(length = 5, width = 8) {
  return length * width;
}

console.log(rectangleArea());
console.log(rectangleArea(3, 5));

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduction() {
    console.log(
      `Hi! I'm ${this.name}. ${this.age} year/s old. Nice to meet you.`
    );
  }
}

const person1 = new Person("Danny Phantom", 23);
pers;
