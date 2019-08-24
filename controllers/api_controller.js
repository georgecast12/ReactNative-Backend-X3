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

const trialboat = [{ name: "Sam", passengers: "5", rating: "5", price: "50" }];

exports.addboat = function(req, res) {
  db.Boat.create(trialboat)
    .then(function(dbBoat) {
      res.json(dbBoat);
    })
    .catch(function(err) {
      res.json(err);
    });
};
