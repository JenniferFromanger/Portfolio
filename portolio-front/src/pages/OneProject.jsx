import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/OneProject.scss";
import { backend } from "../conf";
import axios from "axios";
import "animate.css/animate.min.css";

export default function OneProject() {
  const [oneProject, setOneProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${backend}/projects/${id}`).then(({ data }) => {
      setOneProject(data);
    });
  }, [id]);

  return (
    <div className="oneProject">
      <div className="title">
        <h2>{oneProject.title}</h2>
        <p className="animate__animated animate__bounceInLeft">
          Project carried out on {oneProject.date}
        </p>
      </div>
      <p className="animate__animated animate__bounceInLeft">
        Find all the project code on GitHub :
        <a href={oneProject.githubLink}> {oneProject.githubLink}</a>
      </p>
      <p className="animate__animated animate__bounceInLeft">
        Visit the website :
        <a href={oneProject.netlifyLink}> {oneProject.netlifyLink}</a>
      </p>
      <p>{oneProject.description}</p>
      <div className="image">
        <img src={oneProject.picture1} alt={oneProject.title} />
        <img src={oneProject.picture2} alt={oneProject.title} />
      </div>
    </div>
  );
}
