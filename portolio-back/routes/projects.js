const express = require("express");
const router = express.Router();
const passport = require("passport");

const projectController = require("../controllers/projects");

// Get All projects
router.get("/", projectController.getAllProjects);

// Get one project
router.get("/:id", projectController.getOneProject);

// -------------------- Auth wall
router.use((req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, msg) => {
    if (err) {
      console.log("----");
      console.log(err);
      return res.status(500).send(err);
    }
    if (!user) {
      console.log("----");
      console.log("No user found");
      return res.sendStatus(500);
    }

    next();
  })(req, res);
});
// -------------------- / Auth wall

// Post one project
router.post("/", projectController.CreateOneProject);

// Change one project
router.put("/:id", projectController.ChangeOneProject);

// Delete one project
router.delete("/:id", projectController.DeleteOneProject);

module.exports = router;
