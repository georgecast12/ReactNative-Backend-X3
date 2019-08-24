// Require all models
var db = require("../models");

exports.fetch = function(req, res) {
  db.Boat.find({})
    .then(function(dbBoat) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbBoat);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};

const boats = [
  {
    thumbnail: "",

    image: "",

    name: "X3OATS",

    location: "Santa Monica",

    rents: "50",

    price: "70"
  },
  {
    thumbnail: "",

    image: "",

    name: "Shark Lover",

    location: "Venice Beach",

    rents: "10",

    price: "30"
  },
  {
    thumbnail: "",

    image: "",

    name: "Life On The Line",

    location: "Santa Monica",

    rents: "12",

    price: "50"
  },
  {
    thumbnail: "",

    image: "",

    name: "Live On the Wave",

    location: "San Diego",

    rents: "5",

    price: "100"
  }
];

exports.addboat = function(req, res) {
  db.Boat.create(boats)
    .then(function(dbBoat) {
      res.json(dbBoat);
    })
    .catch(function(err) {
      res.json(err);
    });
};
