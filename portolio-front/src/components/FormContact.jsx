import React, { useState } from "react";
import axios from "axios";
import { backend } from "../conf";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import "../styles/FormContact.scss";

const FormContact = () => {
  const initialValues = { name: "", email: "", subject: "", content: "" };
  const [contact, setContact] = useState(initialValues);

  const handleChange = (e) => {
    const tmp = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(tmp);
  };

  const error = () => toast.error("sorry that didn't work");
  const notify = () => toast.info("Your message is saved !");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${backend}/contacts`, contact).then(notify).catch(error);
    setContact(initialValues);
  };
  const { name, email, subject, content } = contact;
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
        <TextField
          type="text"
          name="name"
          value={name}
          required
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Name"
        />
        <TextField
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Email"
        />
        <TextField
          type="text"
          name="subject"
          value={subject}
          required
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Subject"
        />
        <TextField
          multiline
          rows={5}
          type="text"
          name="content"
          value={content}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Your Message"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="poster"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default FormContact;
