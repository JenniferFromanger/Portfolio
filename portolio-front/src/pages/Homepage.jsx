import React from "react";
import "../styles/Homepage.scss";
import Aside from "../components/Aside";
import Main from "../components/Main";

export default function Homepage() {
  return (
    <div className="homepage">
      <Aside />
      <Main />
    </div>
  );
}
