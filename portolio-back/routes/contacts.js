const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contacts");

// Post one contact
router.post("/", contactController.createOneContact);

// Get my contacts and messages
router.get("/", contactController.getContacts);

module.exports = router;
