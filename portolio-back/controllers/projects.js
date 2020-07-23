const { connection } = require("../connection");

const getAllProjects = async (req, res) => {
  try {
    const project = await connection.query(
      'SELECT title, github_link as githubLink, netlify_link as netlifyLink, picture_1 as picture1, picture_2 as picture2, description, DATE_FORMAT(date, "%M %Y") FROM project'
    );

    return res.status(200).send(project[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error while reading projects");
  }
};

module.exports = { getAllProjects };
