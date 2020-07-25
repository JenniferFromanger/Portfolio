import React, { useState } from "react";
import axios from "axios";
import { backend } from "../conf";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import "react-toastify/dist/ReactToastify.css";
import "../styles/FormContact.scss";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const FormContact = () => {
  const classes = useStyles();
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
      <Grid container justify="center" alignItems="center">
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
            label="Name"
            variant="filled"
            color="secondary"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TextField
            type="email"
            name="email"
            value={email}
            required
            label="Email"
            variant="filled"
            color="secondary"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TextField
            type="text"
            name="subject"
            value={subject}
            required
            label="Subject"
            variant="filled"
            color="secondary"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <TextField
            multiline
            rows={5}
            type="text"
            name="content"
            value={content}
            label="Your Message"
            variant="filled"
            color="secondary"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className={classes.button}
            endIcon={<SendIcon>send</SendIcon>}
          >
            Send
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default FormContact;
