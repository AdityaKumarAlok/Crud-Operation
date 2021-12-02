//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

var homeSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Age: {
    type: String,
    required: true,
  },
});

// exporting Schemas from models
module.exports = mongoose.model("homeSchemas", homeSchema);
