// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const square = (num) => Math.pow(num, 2)
console.log(square(3))
// Task 2: Use template literals to create a welcome message that includes the name and age of a person.

const welcome = (name, age) => console.log(`Hello ${name}, you're ${age} yrs. old.`)

welcome("john", 27)

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {firstName: 'John', lastName: 'Carreos'}

const {firstName, lastName} = person;

console.log(firstName, lastName)

// Task 4: Use the spread operator to merge two arrays into a single array.
const array1 = [1, 2, 3]
const array2 = ['a', 'b', 'c']

const array3 = [...array1, ...array2]

console.log(array3)

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const rectangleArea = (base = 5, height = 10) => base * height
console.log(rectangleArea(1))

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. 
// Instantiate an object of the class and call the introduce method.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my ${this.name} and ${this.age}`)
  }

  longIntro() {
    this.introduce()
  }

}

const person1 = new Person("John", 27);

person1.introduce()
person1.longIntro()
