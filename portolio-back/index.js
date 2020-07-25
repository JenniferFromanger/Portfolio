require("dotenv").config();
const express = require("express");
const app = express();

const auth = require("./routes/auth");
const contacts = require("./routes/contacts.js");
const projects = require("./routes/projects.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", auth);
app.use("/contacts", contacts);
app.use("/projects", projects);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("Erreur server");
  } else {
    console.log(`Server is listening on ${process.env.PORT}`);
  }
});
