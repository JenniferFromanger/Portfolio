const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

// Route to create a new user only for me
router.post("/signup", authController.createUser);

// Route to identify myself and secure the dashboard
router.post("/signin", authController.checkUser);

module.exports = router;
