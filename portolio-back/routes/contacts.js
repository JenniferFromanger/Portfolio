const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contacts");

// Post one contact
router.post("/", contactController.createOneContact);

module.exports = router;
