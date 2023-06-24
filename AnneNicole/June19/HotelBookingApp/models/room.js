const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxcount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    rentperday: {
      type: Number,
      required: true,
    },
    imageurls: [],
    currentbookings: [],
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;

/*In the code snippet `const roomModel = mongoose.model("rooms", roomSchema);`, `mongoose.model()` is a method provided by Mongoose to create a model based on a schema. 

The `mongoose.model()` function takes two arguments:
1. The first argument is the name of the collection in MongoDB where the documents will be stored. In this case, it is "rooms". If the collection doesn't exist, Mongoose will create it automatically when you save a document using the model.
2. The second argument is the schema that defines the structure and validation rules for the documents in the collection. In this case, it is the `roomSchema` that was defined earlier.

The `mongoose.model()` method returns a constructor function that represents the model for the specified collection. This model can be used to perform CRUD operations (Create, Read, Update, Delete) on the documents within the collection.

By assigning the result of `mongoose.model("rooms", roomSchema)` to the `roomModel` variable, you can use `roomModel` to interact with the "rooms" collection in MongoDB. For example, you can use `roomModel.create()`, `roomModel.find()`, `roomModel.updateOne()`, etc., to create, retrieve, update, or delete documents in the "rooms" collection.

The exported `roomModel` can be imported in other parts of your application to perform database operations specific to the "rooms" collection using the defined schema.*/
