var mongoose = require("mongoose"),
  Schema = mongoose.Schema;


  var imageSchema = new Schema({
    image: String,
  });

  module.exports = mongoose.model("image", imageSchema);