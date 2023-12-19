const express = require("express");
const router = express.Router({ mergeParams: true });
const imageController = require("../controller/image.controller");


// addImage
router.post("/upload-image", imageController.addImage);

// getImage
router.get("/get-image", imageController.getImage);

module.exports = router