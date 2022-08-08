const router = require("express").Router();
const resultsController = require("../controllers/resultsController");

router.get("/allListings", resultsController.allListings);
router.get("/allFilterkeywords", resultsController.allFilterkeywords);

module.exports = router;
