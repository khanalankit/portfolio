import React, { useEffect, useState } from "react";
import "./Contact_me.css";
import screen from "../assets/screen.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact_me = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [messageErr, setMessageErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      //send this data to database or api
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  var nameRegex = /^[ a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const messageErr = {};
    let isValid = true;
    if (name.trim().length < 1) {
      nameErr.nameEmpty = "Name is required";
      isValid = false;
    } else if (!name.match(nameRegex)) {
      nameErr.numName = "Invalid name";
      isValid = false;
    }
    if (email.trim().length < 1) {
      emailErr.emailemp = "Email is required";
      isValid = false;
    } else if (!email.match(emailRegex)) {
      emailErr.emailName = "Invalid email";
      isValid = false;
    }
    if (message.trim().length < 10) {
      messageErr.msgtxt = "atleast 10 letters is required!!";
      isValid = false;
    }
    setNameErr(nameErr);
    setEmailErr(emailErr);
    setMessageErr(messageErr);
    return isValid;
  };
  return (
    <div className="contact_container">
      <form action="#" id="contact-form" onSubmit={onSubmit}>
        <h1 className="contactMe">Contact Me</h1>
        <label for="name" id="name-label">
          Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />

        {Object.keys(nameErr).map((key) => {
          return (
            <div style={{ color: " #FF5733 ", marginTop: "-20px" }}>
              {nameErr[key]}
            </div>
          );
        })}

        <label for="email" id="email-label">
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />

        {Object.keys(emailErr).map((key) => {
          return (
            <div style={{ color: " #FF5733 ", marginTop: "-20px" }}>
              {emailErr[key]}
            </div>
          );
        })}
        <br />
        <span className="message_text">Message</span>
        <br />
        <br />
        <textarea
          name="data"
          id="textarea"
          cols="90"
          rows="10"
          placeholder="Enter your message here"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <br />
        <br />
        {Object.keys(messageErr).map((key) => {
          return (
            <div style={{ color: " #FF5733 ", marginTop: "-20px" }}>
              {messageErr[key]}
            </div>
          );
        })}
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
};

export default Contact_me;
