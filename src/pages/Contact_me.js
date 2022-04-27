import React, { useEffect, useState } from "react";
import "./Contact_me.css";
import screen from "../assets/screen.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
        <div className="contact">
          <p className="contactMe">CONTACT ME!</p>
          <label for="name" id="name-label">
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
          </label>
          {Object.keys(nameErr).map((key) => {
            return (
              <div style={{ color: " #FF5733 ", marginTop: "-20px" }}>
                {nameErr[key]}
              </div>
            );
          })}
          <br />
          <label for="email" id="email-label">
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
          </label>

          {Object.keys(emailErr).map((key) => {
            return (
              <div style={{ color: " #FF5733 ", marginTop: "-20px" }}>
                {emailErr[key]}
              </div>
            );
          })}
          <br />
          <br />
          <span className="message_text">
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
          </span>
          <br />
          <br />
          {Object.keys(messageErr).map((key) => {
            return (
              <div style={{ color: " #FF5733 ", marginTop: "-20px" }}>
                {messageErr[key]}
              </div>
            );
          })}
          <input type="submit" value="SEND" id="submit" />
        </div>
        <div className="socials">
          <div className="vertical_social">
            <FontAwesomeIcon className="icons" icon={faHome} />
            <FontAwesomeIcon className="icons" icon={faPhone} />
            <FontAwesomeIcon className="icons" icon={faEnvelope} />
          </div>
          <div className="horizontal_socials">
            <FontAwesomeIcon className="icons" icon={faGithub} />
            <FontAwesomeIcon className="icons" icon={faFacebook} />
            <FontAwesomeIcon className="icons" icon={faInstagram} />
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact_me;
