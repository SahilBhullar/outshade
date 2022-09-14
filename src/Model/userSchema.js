const mongoose = require("mongoose");


const userScehma = new mongoose.Schema(
  {
    title: { type: String, required: true, enum: ["Mr.", "Mrs", "Miss"] },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserCollection", userScehma);
