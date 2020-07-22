const express = require("express");
const router = express.Router();

const groupController = require("../controllers/contacts");

// Post one contact
router.post("/", groupController.createOneContact);

module.exports = router;
