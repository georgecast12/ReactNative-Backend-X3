const express = require("express");
const router = express.Router();

//Item Model
const api_controller = require("../controllers/api_controller");

//@route GET api/items,  Get all items, access Public

router.get("/", api_controller.fetch);

router.post("/addboat", api_controller.addboat);

module.exports = router;
