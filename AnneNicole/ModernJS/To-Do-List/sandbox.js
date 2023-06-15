"use strict";

let sample = "mmnksdsf";

console.log(sample.toUpperCase());

//get index of
let index = sample.indexOf("k");
console.log(index);

let email = "annenicole@gmail.com";

let result1 = email.lastIndexOf("n");
let result2 = email.slice(0, 5); //from , to
let result3 = email.substr(0, 10); //from, howMany
let result4 = email.replace("m", "w"); // 1st replaced with 2nd

console.log(result4);

/////////////////////////////

let radius = 10;
const pi = 3.14;

//math operators + - * / ** 5

// let result = radius % 3;
let result = pi * radius ** 2;

console.log(result);

//order of operation B I D M A S
//brackets indeces divi....

// result++;
// result--;

// result += 1;
// result -= 1;
// result *= 2;
// result /= 3;

//Nan - not a number;

console.log("the radius is " + radius);
console.log(`${radius} and ${pi}`); //template string / template literal

let ninjas = ["shaun", "ryu", "chun"];

ninjas[1] = "ken";
console.log(ninjas[1]);

// let results = ninjas.join("-");
//let results = ninjas.indexOf("chun"); //get index of
//let results = ninjas.concat("anne", "nicole"); //joining two arrays
let results = ninjas.push("lando"); //push new value in array and counts new length. It alters the existing array, destructive method
results = ninjas.pop(); //removes end value and returns to "results" what it removed. array will be altered as well.

console.log(results);

let age;

console.log(age, age * 3); //undefined and NaN

let height = null;

console.log(height, height * 3); //null and height turns to 0

console.log(true, false, "true", "false");
console.log("true");

console.log(email);

let check = email.includes("!");
console.log(check);

let games = ["birds", "bricks", "towers"];
let findings = games.includes("bricks");
console.log(findings);

console.log("a" > "b");
console.log("a" < "b");
console.log("d" > "p"); //letters that are further along the alphabet are considered as greater than
console.log("z" > "h");
console.log("k" > "l");

console.log("A" > "a"); //lowercase letters are greater than uppercase letters
console.log("A" < "a");

console.log("ant" > "Zebra"); //lowercase letters are also greater than uppercase letters further along the line of the alphabet
console.log("Croc" > "cobra");
console.log("------------------");

/////////////////////////////
let calls = 25;
//loose comparison (different types can still be equal)
console.log(calls == 25);
console.log(calls == "25"); //Javascript turns the string into a number before it evaluates it. type conversion.
console.log(calls != 25);
console.log(calls != "25");

//strict comparison (different types cannot be equal)
console.log(calls === 25);
console.log(calls === "25");
console.log(calls !== 25);
console.log(calls !== "25");

//type conversion - turning a datatype into another datatype
let scores = "100";

scores = Number(scores);
console.log(scores + 1);
console.log(typeof scores);

// let resulting = String(50);
// let resulting = Boolean(100);
// let resulting = Boolean(0);
// let resulting = Boolean(-100);
// let resulting = Boolean("-100");
// let resulting = Boolean("100");
// let resulting = Boolean("");

// console.log(resulting, typeof resulting);

//CONTROL FLOWS
//for loop
//.length
// array[i]

// for (let i = 0; i < names.length; i++) {
//   let html = `<diV>${names[i]}<</div>`;
//   console.log(html);
// }

//while loop

//dowhile loop

// let k = 2;

// do {
//   console.log(`val of k is: ${k}`);
//   k++;
// } while (k < 5);

//if statements

const speak = function (name = "luigi", time = "night") {
  console.log(`good ${time} ${name}`);
};

speak();
speak("nica");
speak("nica", "morning");

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

const areaResult = calcArea(5);

console.log(areaResult);

//ARROW FUNCTION
const calcArea2 = (radius) => 3.14 * radius ** 2;
// const calcArea2 = () => 3.14 * radius ** 2;
// const calcArea2 = (radius, width) => 3.14 * radius ** 2;

const areaResult2 = calcArea2(6);

console.log(areaResult2);

//CALLBACK FUNCTIONS

const myFunc = (callBackFunc) => {
  //do something
  let value = 50;
  callBackFunc(value);
};

myFunc((value) => {
  //do somethin
  console.log(value);
});

//callbacks and foreach

let people = ["marion", "junjun", "sadako", "gollum"];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

// people.forEach(logPerson);

const ul = document.querySelector(".people");

let html = ``;

people.forEach(function (person) {
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

//OBJECT LITERAL

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@netninja.com",
  location: "berlin",
  blogs2: [
    { title: "why mac & cheese rules", likes: 50 },
    { title: "10 things to make with marmite", likes: 60 },
  ],
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  login: function () {
    console.log("the user logged in");
  },
  logBlogs: function () {
    console.log("THIS USER HAS WRITTEN THESE BLOGS:");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
  logBlogs2: () => {
    console.log(this);
  },
  logBlogs3() {
    console.log("THIS USER HAS WRITTEN THESE BLOGS:");
    this.blogs2.forEach((blog) => {
      console.log(`${blog.title} with ${blog.likes} likes`);
    });
  },
};

console.log(user);
console.log(user.name);
user.age = 35;
console.log(user.age);
user.age = 65;
console.log(user.age);

console.log(user["name"]);
user["name"] = "chun";
console.log(user["name"]);

const key = "location";
//user.key - can not be used given that it will look for an object property
console.log(user[key]);

console.log(typeof user);

//OBJECT METHODS
user.login();

user.logBlogs();
user.logBlogs2();
user.logBlogs3();

//MATH OBJECTS

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 5.3;

console.log(Math.round(area));
console.log(Math.floor(area)); //rounds to base number
console.log(Math.ceil(area)); //rounds to next number
console.log(Math.trunc(area)); //removes the decimal

//RANDOM NUMBERS

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

let scoreOne = 200;
let scoreTwo = scoreOne;

console.log(scoreOne);
console.log(scoreTwo);

scoreOne = 700;
console.log(scoreOne);
console.log(scoreTwo);

const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);
