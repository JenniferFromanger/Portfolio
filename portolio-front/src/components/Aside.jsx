import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Aside.scss";

export default function Aside() {
  return (
    <div className="asideMenu">
      <img className="avatar" src="/avatar.png" alt="mon avatar" />
      <NavLink exact to="/">
        <img src="/house.png" alt="accueil" />
      </NavLink>
      <NavLink to="/contact">
        <img src="/contact.png" alt="contactez-moi" />
      </NavLink>
      <img src="/project.png" alt="my work" />
      <img src="/skill.png" alt="my skills" />
      <img src="/log-in.png" alt="my skills" />
    </div>
  );
}
