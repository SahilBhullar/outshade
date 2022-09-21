const express = require("express");
const router = express.Router();

//--------RequireJsonWebToken-------//
const jwt=require("jsonwebtoken")

//--------RequireUser-------//
const createuser = require("../Controller/userController");

//--------RequireLogin-------//
const loginUser = require("../Controller/loginUser");

//--------RequireUpdateUser-------//
const updateUser=require("../Controller/updateUser")


//--------RequireEvent-------//
const createEvent = require("../Controller/eventController");

//--------RequireEventDetails-------//
const eventDetails=require("../Controller/eventGet")

//--------RequireUpdateEvent-------//
const updateEvent=require("../Controller/eventupdate")

//--------RequireMiddleware-------//
const middleware = require("../Middleware/verify");

//--------CreateUser-------//
router.post("", createuser);

//--------LoginUser-------//
router.post("/login", loginUser);

//--------UpdateUser-------//
router.put("/update/:id",middleware ,updateUser)

//--------CreateEvent-------//
router.post("/createevent", createEvent);

//--------GetEventDetails-------//
router.get("",eventDetails)

//--------UpdateEventDetails-------//
router.put("/:id",middleware,updateEvent)

module.exports = router;
