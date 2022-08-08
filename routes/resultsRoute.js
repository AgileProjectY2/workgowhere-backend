const router = require("express").Router();
const resultsController = require("../controllers/resultsController");

router.get("/", resultsController.results);

module.exports = router;
