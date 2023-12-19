const express = require("express");
const upload  = require('../middleware/upload')
const router = express.Router({ mergeParams: true });
const imageController = require("../controller/image.controller");


// addImage
router.post("/upload-image",upload , imageController.addImage);

// getImage
router.get("/get-image", imageController.getImage);

module.exports = router