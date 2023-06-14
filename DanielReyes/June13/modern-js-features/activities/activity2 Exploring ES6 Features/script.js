// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const square = (num) => {
    let squared = (num*num);
    console.log(squared);
    return squared;
}

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const createWelcomeMessage = function (name, age) {
    let welcomeMessage = `Welcome, ${name} with the age of ${age}!`;
    console.log(welcomeMessage);
    return welcomeMessage;
}

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
    firstName: "Danny",
    lastName: "Phantom"
};

const destructuring = function (){
    console.log(`First name: ${person.firstName}`);
    console.log(`Last name: ${person.lastName}`);
}

// Task 4: Use the spread operator to merge two arrays into a single array.
const mergeArray = function(array1, array2) {
    let mergedArray = [...array1, ...array2];
    return mergedArray;
}

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const rectangleArea = function(length = 1, width = 1) {
    return length * width;
}


// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduction(){
        console.log(`Hi! I'm ${this.name}. ${this.age} year/s old. Nice to meet you.`);
    }
}

const person1 = new Person("Danny Phantom", 23);
person1.introduction();

const newPerson = new Person();
newPerson.setName("Ben");
newPerson.introduction();