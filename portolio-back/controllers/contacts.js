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

const getContacts = async (req, res) => {
  try {
    const contacts = await connection.query(
      'SELECT id, name, email, subject, content, DATE_FORMAT(date, "%D %b %Y") AS date FROM contact ORDER BY date DESC'
    );

    return res.status(200).send(contacts[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error while reading projects");
  }
};

module.exports = { createOneContact, getContacts };
