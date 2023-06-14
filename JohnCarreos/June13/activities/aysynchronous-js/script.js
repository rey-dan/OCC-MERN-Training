// Synchronous Programming: In synchronous programming, tasks are executed one after the other in a sequential manner. 
// Each task must complete before the next task can start. This blocking behavior can lead to inefficient use of resources,
//  especially when dealing with time-consuming operations.




// Synchronous - mag-run na agad ung ibang task kahit di pa tapos ung unang na call na task
// Asynchronous - hintayin muna ung naunang task bago mag run ung iba


console.log(1)
console.log(2)
console.log(3)
const task1 = () => {
  // for (let i = 0; i <= 100; i++) {
  //   console.log(i)
  // }
  setTimeout(() => {
    console.log('task1')
  },5000)

}

// console.log('Start of Program')
// processData()
// console.log('End of Program')

const task2 = () => {
  console.log('task2')
}
const task3 = () => {
  console.log('task3')
}
task1();
task2();
task3();

// Using Callback Functions
let members = ['John', 'Sam', 'Alice'];

// const getAllMembers = () => {
//   console.log(members)
// }
// const addMember = (member) => {
//   setTimeout(()=>{
//     members.push(member)
//     console.log('New Member Added')
//   },3000)
// }

// addMember('Jane') //takes 3 seconds before it adds Jane
// getAllMembers() //prints members array

const getAllMembers = () => {
  console.log(members)
}
const addMember = (member, callback) => {
  setTimeout(()=>{
    members.push(member)
    console.log('New Member Added')
    callback()
  },3000)
}

addMember('Jane', getAllMembers) //takes 3 seconds before it adds Jane

const changeColor = (color, delay, callback) => {
  setTimeout(() => {
    
    document.body.style.background = color
    console.log("hi")
    console.log('hello')
    
  }, delay);
}

changeColor('red', 2000, ()=> {
  changeColor('green', 3000, ()=>{
    changeColor('blue', 5000, () =>{
      console.log('stop Im hungry')
    })
  })
})

// Promises - Pending, Fullfilled/Resolved, Rejected

let myPromise = new Promise((resolve, reject)=>{
  const num1 = 2;
  const num2 = 4;

  if (num1 === num2) {
    resolve('yes they are equal')
  } else {
    reject('a problem occured')
  }
})

myPromise
  .then((res)=>{
    console.log(`${res} thank you for fulfilling it.`)
  })
  .catch((err) => {
    console.log(err)
  })
