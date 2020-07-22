import React, { useState } from "react";
import axios from "axios";
import { backend } from "../conf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContact = () => {
  const [contact, setContact] = useState({});

  const handleChange = (e) => {
    const tmp = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(tmp);
  };

  const error = () => toast.error("oups il y a une erreur");
  const notify = () => toast.info("Votre contact est enregistré !");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${backend}/contacts`, contact).then(notify).catch(error);
  };
  return (
    <div className="form">
      <ToastContainer
        position="bottom-left"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: "20px", textAlign: "center" }}
      />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="name"
          required
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          required
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Email"
        />
        <input
          type="text"
          name="subject"
          required
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Subject"
        />
        <input
          className="message"
          type="text"
          name="content"
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Your Message"
        />
        <button type="submit" value="poster" />
      </form>
    </div>
  );
};

export default FormContact;
