const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  create = require("./routes/create"),
  read = require("./routes/read"),
  upDate = require("./routes/upDate"),
  deleterepo = require("./routes/delete"),
  cors = require('cors'),
  mongoose = require('mongoose');

var app = express(),
  router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extneded: false }));
app.use(cors());

var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
  //connected db
  console.log('connected to mongo server');
});

mongoose.connect('mongodb://localhost/testDomitory');





app.use('/create',create)
app.use("/read", read)
/*app.use('/upDate',upDate);
app.use('/deleterepo',deleterepo);
*/
// catch 404 and forward to error handler
  
app.use(express.static(path.join(__dirname, 'build/build')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build/build', 'index.html'));
});

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
// app.get("/", (req, res) => res.send("Hello world"));

app.listen(5630, () => console.log("example app listening on port 5630"));
