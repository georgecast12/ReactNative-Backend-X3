// const createError = require("http-errors");
// const express = require("express");
// // const path = require("path");
// // const cookieParser = require("cookie-parser");
// // const logger = require("morgan");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// var mongojs = require("mongojs");

// var User = require("./models/userModel");

// // const indexRouter = require("./routes/index");
// // const usersRouter = require("./routes/users");

// const app = express();

// //Bodyparser Middleware
// app.use(bodyParser.json());

// // Database configuration
// // Save the URL of our database as well as the name of our collection
// var databaseUrl = " mongodb://127.0.0.1:27017/X3Backend";
// var collections = ["boats"];

// // Use mongojs to hook the database to the db variable
// // var db = mongojs(databaseUrl, collections);

// //Connect to Mongo
// mongoose
//   .connect("mongodb://127.0.0.1:27017/X3Backend")

// var db = mongoose.connection;
// 	.then(() => console.log("MongoDB Connected"))
// 	.catch(err => console.log(err));

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log("Server started on port ${port}"));
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

// Requiring the `User` model for accessing the `users` collection
var User = require("./models/userModel");
var Boats = require("./models/Boats");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/X3Backend", { useNewUrlParser: true });

// Routes

// Create a new user using req.body

User.create({ username: "Sam", password: "hellos", email: "sam@gmail.com" })
	.then(function(dbUser) {
		// If saved successfully, send the the new User document to the client
		res.json(dbUser);
	})
	.catch(function(err) {
		// If an error occurs, send the error to the client
		res.json(err);
	});

Boats.createCollection({
	name: "Sam",
	passangers: "5",
	rating: "5",
	price: "40",
})
	.then(function(dbBoats) {
		// If saved successfully, send the the new User document to the client
		res.json(dbBoats);
	})
	.catch(function(err) {
		// If an error occurs, send the error to the client
		res.json(err);
	});

// Start the server
app.listen(PORT, function() {
	console.log("App running on port " + PORT + "!");
});
