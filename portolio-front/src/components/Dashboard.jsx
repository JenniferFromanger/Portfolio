import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../conf";
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
      <p>My messages</p>
      {contacts.map((contact) => {
        return (
          <div className="messages">
            <p>{contact.date}</p>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.subject}</p>
            <p>{contact.content}</p>
          </div>
        );
      })}
    </div>
  );
}
