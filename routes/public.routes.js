const express = require("express");
const publicController = require("../controllers/public.controller");
const router = express.Router();

router.post("/register", publicController.account_register);
router.post("/login", publicController.account_login);

module.exports = router;
