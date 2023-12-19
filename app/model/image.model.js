var mongoose = require("mongoose"),
  Schema = mongoose.Schema;


  var imageSchema = new Schema({
    image: String,
    createdAt: Date
  });

  module.exports = mongoose.model("image", imageSchema);