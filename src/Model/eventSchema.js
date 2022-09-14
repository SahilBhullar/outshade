const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const userCollecton = require("../Model/userSchema");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    eventDate: { type: String, required: true },

    invitations: [
      {
        invitee: { type: ObjectId, refs: "userCollecton", required: true },
        timings: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("eventCollection ", eventSchema);
