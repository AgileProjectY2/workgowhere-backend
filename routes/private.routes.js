const express = require("express");
const privateController = require("../controllers/private.controller");
const router = express.Router();

router.get("/dashboard/:id", privateController.user_dashboard);
router.post("/new-listing/:id", privateController.user_new_listing);
router.delete("/delete/:id/:listing_id", privateController.user_delete_listing);

module.exports = router;
