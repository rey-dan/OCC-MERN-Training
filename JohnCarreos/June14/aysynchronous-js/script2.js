// Create a Promise

const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(()=>{
      // Resolve the promise with the fetched data 
      const data = 'Fetched Data';
      resolve(data)
    }, 2000)
  })
}

//Use the promise with chaining
let result = fetchData()
  .then((data)=>{
    //Handle the resolved value
    console.log(data)
  })
  .catch((error)=>{
    console.log(error)
  })
