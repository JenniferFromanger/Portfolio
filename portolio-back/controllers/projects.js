const { connection } = require("../connection");

const getAllProjects = async (req, res) => {
  try {
    const project = await connection.query(
      'SELECT id, title, github_link as githubLink, netlify_link as netlifyLink, picture_1 as picture1, picture_2 as picture2, description, DATE_FORMAT(date, "%M %Y") FROM project'
    );

    return res.status(200).send(project[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error while reading projects");
  }
};

const getOneProject = async (req, res) => {
  const { id } = req.params;
  try {
    // get one project
    const [
      data,
    ] = await connection.query(
      'SELECT id, title, github_link as githubLink, netlify_link as netlifyLink, picture_1 as picture1, picture_2 as picture2, description, DATE_FORMAT(date, "%M %Y") as date FROM project WHERE id = ?',
      [id]
    );

    return res.status(200).send(data[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error while reading the project.");
  }
};

const CreateOneProject = async (req, res) => {
  try {
    const project = await connection.query("INSERT INTO project SET ?", [
      req.body,
    ]);

    return res.status(200).send(project);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error while creating the project.");
  }
};

const ChangeOneProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await connection.query("UPDATE project SET ? WHERE id=?", [
      req.body,
      id,
    ]);
    return res.send(project);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error while changing the project.");
  }
};

const DeleteOneProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await connection.query("DELETE FROM project WHERE id=?", [
      id,
    ]);
    return res.send(project);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error while deleting the project.");
  }
};

module.exports = {
  getAllProjects,
  getOneProject,
  CreateOneProject,
  ChangeOneProject,
  DeleteOneProject,
};
