var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

var commentsRouter = require('./routes/commentsRouter');


var db = mongoose.connect("mongodb://localhost/TestReactApi");
var app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3000, function() { console.log("Server started on port: 3000"); });


app.use('/comments', commentsRouter);
