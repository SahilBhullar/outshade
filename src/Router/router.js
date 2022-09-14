const express = require("express");
const router = express.Router();

//--------RequireUser-------//
const createuser = require("../Controller/userController");

//--------RequireEvent-------//
const createEvent = require("../Controller/eventController");

//--------CreateUser-------//
router.post("", createuser);

//--------CreateEvent-------//
router.post("/createevent", createEvent);

module.exports = router;
