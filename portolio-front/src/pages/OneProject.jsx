import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/OneProject.scss";
import { backend } from "../conf";
import axios from "axios";

export default function OneProject() {
  const [oneProject, setOneProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${backend}/projects/${id}`).then(({ data }) => {
      setOneProject(data);
    });
  }, [id]);

  return <div className="oneProject"></div>;
}
