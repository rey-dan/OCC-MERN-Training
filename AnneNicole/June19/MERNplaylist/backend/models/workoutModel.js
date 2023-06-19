const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  //Automatically adds a create stamp property for us, to say when the document was created. And also add an updated property, when it was last updated.
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
