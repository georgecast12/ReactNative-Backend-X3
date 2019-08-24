var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create Schema
var BoatSchema = new Schema({
  thumbnail: {
    type: String
  },
  image: {
    type: String
  },
  name: {
    type: String
  },
  location: {
    type: String
  },
  rents: {
    type: String
  },
  price: {
    type: String
  },
  boatCreated: {
    type: Date,
    default: Date.now
  }
});

const Boat = mongoose.model("Boat", BoatSchema);

module.exports = Boat;
