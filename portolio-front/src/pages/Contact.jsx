import React from "react";
import "../styles/Contact.scss";
import FormContact from "../components/FormContact";
import "animate.css/animate.min.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="animate__animated animate__fadeInLeft">About Me</h2>
      <p>
        I have always been passionated about the web, its place in our society
        and its evolution. I have chosen to become an actor of this evolution.
        Since March 2020, I am doing a training as a React and Node.js web
        developer and I am really enjoying it.
      </p>
      <p>
        In this portfolio you will find an overview of my projects as well as a
        link to my github and linkedIn. Also, my hard skills are mentioned in
        the portfolio.
      </p>
      <h2 className="animate__animated animate__fadeInLeft">Contact Me</h2>
      <p>
        If you wish to contact me, do not hesitate to fill out this form, I will
        get back to you very quickly ...
      </p>
      <div className="logos">
        <a href="https://github.com/JenniferFromanger">
          <img src="/gitHub.png" alt="Mon gitHub" />
        </a>
        <a href="https://www.linkedin.com/in/jennifer-fromanger-2045301a3/">
          <img className="small" src="/linkedin.png" alt="Mon LinkedIn" />
        </a>
      </div>
      <FormContact />
    </div>
  );
}
