const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let dbStatus = "trying to connect DB...";

router.get("/", (req, res, next) => {
  res.send(dbStatus);
});

// Connect to MongoDB
mongoose
  .connect("mongodb://mongodb:27017/testMyApp", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MongoDB Connected");
    dbStatus = "successfully connected to DB";
  })
  .catch(err => {
    console.log(err);
    dbStatus = "failed to connect DB";
  });

module.exports = router;
