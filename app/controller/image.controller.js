const Image = require("../model/image.model");
const fs = require("fs");
const path = require("path");

exports.addImage = (req, res) => {
  const path1 = req.file.path.replace(/\\/g, "/");
  const imgPath = path.join(__dirname, `../../${path1}`); // Replace with your image path
  console.log("imagepath", imgPath);
  const imgData = fs.readFileSync(imgPath);
  const encodedImage = imgData.toString("base64");
  const newImg = new Image({
    image: encodedImage,
  });
  console.log("newImage", newImg)
  newImg
    .save()
    .then(() => {
      res.status(201).json({ message: "Image added successfully" });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    })
};

exports.getImage = (req, res) => {
  Image.find()
    .then((image) => {
      res.status(200).json({ message: "Image got successfully", data: image });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};
