import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { backend } from "../conf";
import "../styles/Projects.scss";
import "animate.css/animate.min.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${backend}/projects`).then(({ data }) => {
      setProjects(data);
    });
  }, []);

  return (
    <div className="all">
      <h1 className="animate__animated animate__bounceInDown">My projects</h1>
      <div className="projects">
        {projects.map((project) => {
          return (
            <NavLink to={`/projects/${project.id}`} key={project.id}>
              <div className="card">
                <img src={project.picture1} alt={project.title} />
                <h2 className="animate__animated animate__rubberBand">
                  {project.title}
                </h2>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
