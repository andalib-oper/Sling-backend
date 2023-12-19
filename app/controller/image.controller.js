const Image = require("../model/image.model");

exports.addImage = (req, res) => {
  console.log("pathi1",req?.files?.file)
  const path1 = req.files.file;
  console.log("pathddfdf", path1)
  const encodedImage = path1.data.toString('base64');
  const newImg = new Image({
    image: encodedImage,
  });
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
