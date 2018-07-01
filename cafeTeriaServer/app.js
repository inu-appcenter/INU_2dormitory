const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  create = require("./routes/create"),
  read = require("./routes/read"),
  upDate = require("./routes/upDate"),
  deleterepo = require("./routes/delete");

var app = express(),
  router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extneded: false }));

/*
app.use('/create',create);
*/
app.use("/read", read);
/*app.use('/upDate',upDate);
app.use('/deleterepo',deleterepo);
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
/*
// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});
*/
app.get("/", (req, res) => res.send("Hello world"));

app.listen(3300, () => console.log("example app listening on port 3300"));
