import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../conf";
import { Grid } from "@material-ui/core";
import "../styles/Dashboard.scss";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get(`${backend}/contacts`).then(({ data }) => {
      setContacts(data);
    });
  }, []);

  return (
    <div className="dash">
      <h2>My Dashboard</h2>
      <Grid item xs={6}>
        <h3>My messages</h3>
        {contacts.map((contact) => {
          return (
            <div className="messages">
              <p>
                <span>Sending date : </span>
                {contact.date}
              </p>
              <p>
                <span>Contact Name : </span>
                {contact.name}
              </p>
              <p>
                <span>Contact Email : </span>
                {contact.email}
              </p>
              <p>
                <span>Subject : </span>
                {contact.subject}
              </p>
              <p>
                <span>Message : </span>
                {contact.content}
              </p>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
