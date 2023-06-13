// SYNTAX BASIC AND TYPES

let age = 25; //let , const, var

console.log(age)

age = 30;
console.log(30);

// ---------- //

// strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log('index of the @ sign:', index);

// for loops

// for(let i = 0; i < 5; i++){
//   console.log('loop: ', i);
// }

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

// function declaration
function greet(){
    console.log('hello there');
  }
  
  // function expression
  const speak = function(){
    console.log('good day!');
  };
  
  // greet();
  // greet();
  
  speak();


  // object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){
      // access the blogs here
      // console.log(this);
      console.log('this user has written these blogs:');
      this.blogs.forEach(blog => {
        console.log(blog);
      })
    }
  };
  
  // console.log(this);
  user.logBlogs();

  // const para = document.querySelector('p');
// const para = document.querySelector('.error');
const para = document.querySelector('div.error');

console.log(para);

// query multiple elements at once
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(paras, errors);
console.log(paras[1], errors[0]);