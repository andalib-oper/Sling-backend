var mongoose = require("mongoose"),
  Schema = mongoose.Schema;


  var imageSchema = new Schema({
    image: {
      file: String,
    },
  });

  module.exports = mongoose.model("image", imageSchema);