const express = require("express");
const router = express.Router();

router.post("/", function(req, res, next) {
  console.log(req.query);
  res.send(true);
});

router.get("/", function(req, res, next) {
  console.log(req.query);
  res.send(true);
});

module.exports = router;
