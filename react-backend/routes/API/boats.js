const express = require("express");
const router = express.Router();

//Item Model
const Boat = require("../../models/boat");

//@route GET api/items,  Get all items, access Public

router.get("/", (req, res) => {
  Boat.find()
    .sort({ date: -1 })
    .then(boats => res.json(boats));
});

module.exports = router;
