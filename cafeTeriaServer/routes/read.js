const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  //console.log(req.params);
  res.send(true);
});

module.exports = router;
