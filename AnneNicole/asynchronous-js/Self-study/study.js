// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("this is in the then " + message);
// }).catch((message) => {
//   console.log("This is in the catch " + message);
// });

//PROMISES WERE MEANT TO REPLACE CALLBACKS
//Used when you want to do something that will take a long time in the background
//Download image from a different server and you just want to do something  after it's complete instead of making everything else wait for it.
//And also you can catch it to see if it's failed so that you can re-try it or give the user as error message if it did fail

// const userleft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userleft) {
//     errorCallback({
//       name: "User left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "webdevSimplified < Cat",
//     });
//   } else {
//     callback("Thumbs up and Subscribe");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log("Success: " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userleft) {
//       reject({
//         name: "User left",
//         message: ":(",
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "User Watching Cat Meme",
//         message: "webdevSimplified < Cat",
//       });
//     } else {
//       resolve("Thumbs up and Subscribe");
//     }
//   });
// }

// watchTutorialPromise()
//   .then((message) => {
//     console.log("Success: " + message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });

////////////////
////////////////
////////////////

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve("Video 1 Recorded");
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve("Video 2 Recorded");
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve("Video 3 Recorded");
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (messages) => {
//     console.log(messages);
//   }
// );

// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log(message);
//   }
// );

////////////////////

// const axiosRequest = require("axios");

// let response = axiosRequest.get("https://www.boredapi.com/api/activity");

// console.log(`You could ${response.data.activity}`);

/*
In JavaScript, the .get method you are referring to is commonly associated with making asynchronous HTTP requests using libraries like jQuery or Axios. The reason why the request does not finish processing immediately is due to the nature of asynchronous programming and the event-driven model in JavaScript.

JavaScript is designed to be single-threaded, meaning it can only execute one operation at a time. When you make an HTTP request using the .get method, it initiates the request but allows the rest of your JavaScript code to continue running without waiting for the response.

The .get method typically accepts a callback function or returns a Promise that allows you to handle the response once it is available. This means that the rest of your code can continue executing while the HTTP request is being processed in the background.

Once the server responds to the request, the callback function associated with the .get method or the .then method of the returned Promise is triggered, allowing you to handle the response data and perform any necessary actions.

This asynchronous behavior is beneficial because it allows your JavaScript code to remain responsive and continue executing other tasks while waiting for the HTTP request to complete. It prevents the browser or the application from freezing or becoming unresponsive during potentially long-running network operations. */

//Network latency
//Server processing time
//Data transfer size
//DNS resolution
//Caching

// const axiosRequest = require("axios");

// axiosRequest2
//   .get("https://www.boredapi.com/api/activity")
//   .then((response) => {
//     console.log(`You could ${response.data.activity}`);
//   })
//   .catch((error) => {
//     console.error(`ERROR! ${error}`);
//   });

// console.log("Why am I here?");

//AWAIT
async function getActivity() {
  try {
    let response = await axiosRequest.get("https://httpstat.us/500");
    console.log(`You could ${response.data.activity}`);
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}

// async function getActivity() {}

// getActivity();

/////////

///////////////////

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve(`Google says hi`);
    } else {
      reject(`We can only talk to Google`);
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log(`Processing response`);
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest("Googe")
//   .then((response) => {
//     console.log("Response received");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
