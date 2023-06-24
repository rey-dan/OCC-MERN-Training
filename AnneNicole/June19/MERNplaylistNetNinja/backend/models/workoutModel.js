const mongoose = require("mongoose");

//function to create new schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    //Does not allow if one of the fields are missing
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
    user_id: {
      type: String,
      required: true,
    },
  },
  //Automatically adds a create stamp property for us, to say when the document was created. And also add an updated property, when it was last updated.
  { timestamps: true }
);

//automatically creates a collection for us based on its name "Workout". It pluralizes this and builds that collection in the database for us.
module.exports = mongoose.model("Workout", workoutSchema);
