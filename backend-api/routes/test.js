const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Test API is working properly ,right");
});

module.exports = router;
