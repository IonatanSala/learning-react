var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentModel = new Schema({
  author: String,
  text: String
});

module.exports = mongoose.model("Comment", commentModel);
