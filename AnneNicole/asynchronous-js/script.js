/*
Synchronous Programming: In synchronous programming, tasks are executed one after the other in a sequential manner. Each task must complete before the next task can start. This blocking behavior can lead to inefficient use of resources, especially when dealing with time-consuming operations.

*/

// console.log(1);
// console.log(2);
// console.log(3);

//Asychronous

// const task1 = () => {
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
//   setTimeout(() => {
//     console.log("task1");
//   }, 5000);
// };

// const task2 = () => {
//   console.log("task2");
// };

// const task3 = () => {
//   console.log("task3");
// };

// task1();
// task2();
// task3();

// console.log("start of program");
// processData();
// console.log("end of program");

// setTimeout(() => {
//   console.log("This is from set time out");
// }, 5000);

// setTimeout();

//Synchronous can not proceed unless the one on top has not yet been completed
//Asychrounous can

//Using callback functions
let members = ["John", "Sam", "Alice"];

// const getAllMembers = () => {
//   console.log(members);
// };

// getAllMembers();

// const addMember = (member) => {
//   setTimeout(() => {
//     members.push(member);
//     console.log("New member added");
//   }, 3000);
// };

// addMember("Jane");
// getAllMembers();

//Using Callback Functions

// const getAllMembers = () => {
//   console.log(members);
// };

// const addMember = (member, callback) => {
//   setTimeout(() => {
//     callback();
//     members.push(member);
//     console.log("New member added");
//   }, 3000);
// };

// addMember("Jane", getAllMembers);

// const changeColor = (color, delay, callback) => {
//   setTimeout(() => {
//     document.body.style.background = color;
//     callback;
//   }, delay);
// };
//
//CALLBACK HELL
// changeColor("red", 2000, () => {
//   changeColor('green', 3000, {}=>{
//     changeColor('blue', 4000, ()=>{
//       alert('stop and is hungry')
//     })
//   });
// });

// changeColor()

//Promises - Pending, Fullfilled/Resolved, Rejected

let myPromise = new Promise((resolve, reject) => {
  const num1 = 2;
  const num2 = 4;

  if (num1 === num2) {
    resolve("yes they are equal");
  } else {
    reject("a problem occured");
  }
});

myPromise
  .then((res) => {
    console.log(`${res} thank you for fulfilling it.`);
  })
  .catch((err) => {
    console.log(err);
  });
