const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const boat = new Schema({
  name: {
    type: String,
    required: true
  },
  passengers: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Boat = mongoose.model("item", boat);
