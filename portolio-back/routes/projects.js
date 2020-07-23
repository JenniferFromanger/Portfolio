const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projects");

// Get All projects
router.get("/", projectController.getAllProjects);

// Get one project
router.get("/:id", projectController.getOneProject);

module.exports = router;
