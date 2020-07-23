const express = require("express");
const router = express.Router();

const groupController = require("../controllers/projects");

// Get All projects
router.get("/", groupController.getAllProjects);

module.exports = router;
