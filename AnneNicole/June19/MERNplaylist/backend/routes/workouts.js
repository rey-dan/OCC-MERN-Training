//const express = require("express"); - This line imports the express module again to create an instance of the Router class, which allows us to define routes.
const express = require("express");
const Workout = require("../models/workoutModel");

//const router = express.Router(); - This creates a new router instance using express.Router(). We can use this router to define the specific routes for workouts.
//This line creates a router object using the express.Router() method. The router object allows you to define routes and middleware specific to a certain subset or grouping of routes.
//Once you've defined the routes and middleware on the router object, you can export it using module.exports to make it available for use in other parts of your application, where it can be mounted on the main app object.
//Both objects have similar methods and properties for route handling, but the router object provides a way to modularize and organize routes in separate files or modules.
const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//GET single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json(error: error.message)
  }
});

//DELETE a new  workout
router.delete("/:id", (req, res) => [
  res.json({ mssg: "DELETE a new workout" }),
]);

//UPDATE a new workout
router.patch("/:id", (req, res) => [
  res.json({ mssg: "UPDATE a new workout" }),
]);

module.exports = router;
