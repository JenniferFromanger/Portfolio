const { connection } = require("../connection");
const express = require("express");
const router = express.Router();

const createOneContact = async (req, res) => {
  try {
    await connection.query("INSERT INTO contact SET ?", [req.body]);
    const contact = {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      content: req.body.content,
    };

    return res.status(200).send({ contact });
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error while creating the contact.");
  }
};

module.exports = { createOneContact };
