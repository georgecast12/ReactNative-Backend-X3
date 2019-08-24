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
    thumbnail:
      "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=734&q=80",
    image:
      "https://images.unsplash.com/photo-1563296291-14f26f10c20f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80",

    name: "X3OATS",

    location: "Santa Monica",

    rents: "50",

    price: "70"
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",

    image:
      "https://images.unsplash.com/photo-1556766986-b427ed708496?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

    name: "Shark Lover",

    location: "Venice Beach",

    rents: "10",

    price: "30"
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1500832333538-837287aad2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",

    image:
      "https://images.unsplash.com/photo-1563296291-4ffce652738f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1790&q=80",

    name: "Life On The Line",

    location: "Santa Monica",

    rents: "12",

    price: "50"
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",

    image:
      "https://images.unsplash.com/photo-1527431293370-0cd188ca5d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",

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
