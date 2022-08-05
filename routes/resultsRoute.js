const express = require("express");
const resultsController = require("../controllers/resultsController");
const router = express.Router();

router.post("/estate", resultsController.results_estate);
router.post("/keywords", resultsController.results_keywords);

module.exports = router;
