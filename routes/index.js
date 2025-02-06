const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller.js");
const panController = require("../controllers/pan.controller.js");
const fundController = require("../controllers/fund.controller.js");

router.post("/auth", authController.handleAuth);

router.post("/verify/pan", panController.validatePAN);

router.get("/mutual-funds", fundController.getMutualFunds);

module.exports = router;
