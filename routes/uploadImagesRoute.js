const router = require("express").Router();
const uploadImagesController = require("../controllers/uploadImagesController");

router.post("/image", uploadImagesController.allImages);

module.exports = router;
