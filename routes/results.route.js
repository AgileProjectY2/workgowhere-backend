const express = require("express");
const resultsController = require("../controllers/results.controller");
const router = express.Router();

router.get("/estate", resultsController.results_estate);
router.get("/keywords", resultsController.results_keywords);

module.exports = router;
