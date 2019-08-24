var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create Schema
var BoatsSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	passengers: {
		type: String,
		required: true,
	},
	rating: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	boatCreated: {
		type: Date,
		default: Date.now,
	},
});

var Boats = mongoose.model("Boats", BoatsSchema);

module.exports = Boats;
