import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { backend } from "../conf";
import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import "../styles/Private.scss";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Private() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState({});

  const handleChange = (e) => {
    const tmp = { ...authUser, [e.target.name]: e.target.value };
    setAuthUser(tmp);
  };

  const signIn = (e) => {
    e.preventDefault();

    axios.post(`${backend}/auth/signin`, authUser).then(({ data }) => {
      dispatch({
        type: "LOGIN",
        payload: {
          token: data.token,
          email: data.user.email,
          id: data.user.id,
        },
      });
    });
  };

  return (
    <div className="login">
      <h2>Sorry this page is for administrators only</h2>
      <Grid container justify="center" alignItems="center">
        <form
          onSubmit={(e) => {
            signIn(e);
          }}
        >
          <TextField
            type="email"
            name="email"
            required
            label="Email required"
            variant="filled"
            color="secondary"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <TextField
            type="password"
            name="password"
            required
            label="Password required"
            variant="filled"
            color="secondary"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Button
            variant="contained"
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
}
