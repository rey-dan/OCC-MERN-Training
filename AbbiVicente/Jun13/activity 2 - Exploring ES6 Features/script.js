// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const calculateSquare = (num) => {
	const square = num ** 2;
	console.log(`The square of ${num} is ${square}`);
};

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const welcomeMessage = (name, age) => {
	console.log(`Welcome, ${name}. You are ${age} years old.`);
};
welcomeMessage("Flask", 2);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = { firstName: "Abbi", lastName: "Vicente" };
const { firstName, lastName } = person;
console.log(`First Name: ${firstName}; Last Name: ${lastName}`);

// Task 4: Use the spread operator to merge two arrays into a single array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const calculateRectangleArea = (length, width) => {
	const area = length * width;
	console.log(`The rectangle are is ${area}`);
};
calculateRectangleArea(4, 6);

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	introduce() {
		console.log(`My name is ${this.name}. I am ${this.age} years old.`);
	}
}

const personNew = new Person("Rosie", 26);
personNew.introduce();
