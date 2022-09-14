const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/outshade", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is Successful");
  })
  .catch((error) => {
    console.log("No Connection", error);
  });
const route = require("./src/Router/router");
app.use("/", route);

app.listen(process.env.Port || 9000, () => {
  console.log("Server is Started at port " + (process.env.Port || 9000));
});
