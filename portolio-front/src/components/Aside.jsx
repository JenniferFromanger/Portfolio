import React from "react";
import "../styles/Aside.scss";

export default function Aside() {
  return (
    <div className="asideMenu">
      <img className="avatar" src="/avatar.png" alt="mon avatar" />
      <img src="/house.png" alt="accueil" />
      <img src="/contact.png" alt="contactez-moi" />
      <img src="/project.png" alt="my work" />
      <img src="/skill.png" alt="my skills" />
    </div>
  );
}
