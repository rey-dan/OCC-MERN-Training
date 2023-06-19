//EXPRESS APP SETUP

require("dotenv").config();

//const express = require("express"); - This line imports the express module, which is a popular web application framework for Node.js. It provides various features and methods to build web servers and handle HTTP requests.
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//The next line creates an instance of the Express application by calling the express() function. This instance represents our web server.
//By calling express(), we invoke the Express constructor function to create an application object. This app object will have various methods and properties that we can use to define routes, handle requests, and perform other server-related operations.
//The app object acts as a central hub for our web server. We can register middleware functions, define routes, set up error handling, and configure other aspects of our server using the methods and properties provided by the app object.
// Define routes using methods such as app.get(), app.post(), app.put(), etc.
// Register middleware functions using app.use().
// Set up server-level configuration using methods like app.set().
// Start the server and make it listen for incoming requests using app.listen().
//In summary, creating an instance of the Express application with const app = express() is the first step in building a web server with Express. It gives us access to the features and functionality provided by Express, allowing us to define and handle routes, middleware, and other server-related tasks.
const app = express();

//The express.json() middleware is designed to intercept the incoming requests and parse the JSON payload contained in the request body. It extracts the JSON data and transforms it into a JavaScript object, making it accessible for further processing within the server code.
//By using this middleware, you can easily work with JSON data in your Express application. For example, if a client sends a request with JSON data in the body, you can access that data in your route handlers by accessing the req.body property. This property will contain the parsed JavaScript object representation of the JSON data.
app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//app.use("/api/workouts", workoutRoutes); - This middleware mounts the workoutRoutes module at the specified path (/api/workouts). All routes defined in the workoutRoutes module will be prefixed with /api/workouts. For example, if there is a route defined as / in the workoutRoutes module, it will be accessible as /api/workouts/.
app.use("/api/workouts", workoutRoutes);

//Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to DB and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
//The following block of code defines a route for the root URL ("/") using the app.get() method. This means that when a GET request is made to the root URL, the callback function (req, res) => { ... } will be executed. In this case, the callback function sends a JSON response with the message "Welcome to the app" back to the client.

//Finally, the app.listen() method is called to start the server and make it listen on port 4000. When the server starts listening, it executes the callback function () => { ... }, which in this case simply logs a message to the console saying "listening on port 4000".
