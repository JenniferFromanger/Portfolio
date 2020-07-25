import React from "react";
import "../styles/Main.scss";
import Typical from "react-typical";

export default function Main() {
  return (
    <div className="main">
      <h1>
        <Typical
          steps={[
            "Hello",
            1000,
            "Welcome to",
            1000,
            "Jennifer Fromanger",
            1000,
            "Web Developer",
            1000,
            "Portfolio",
            3000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>
    </div>
  );
}
