import React, { useState } from "react";
import "./contactMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [messageErr, setMessageErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isNameValid = nameValidation();
    const isEmailValid = emailValidation();
    const isMessageValid = messageValidation();
    if (isNameValid && isEmailValid && isMessageValid) {
      //send this data to database or api
      const value = {
        name: name,
        email: email,
        message: message,
      };
      const setContactInfo = async () => {
        try {
          const resp = await axios.post(
            "https://portfoliobackned.herokuapp.com/api/contact",
            value
          );
          if (resp) {
            toast("Message sent..");
            setName("");
            setEmail("");
            setMessage("");
          }
        } catch (err) {
          console.error(err, "error");
        }
      };
      setContactInfo();
    }

    // console.log(name, email, message);
  };
  var nameRegex = /^[ a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //name validation
  const nameValidation = () => {
    const nameErr = {};
    let isValid = true;
    if (name.trim().length < 1) {
      nameErr.nameEmpty = "Name is required";
      isValid = false;
    } else if (!name.match(nameRegex)) {
      nameErr.numName = "Invalid name";
      isValid = false;
    }
    setNameErr(nameErr);
    return isValid;
  };

  //email validation
  const emailValidation = () => {
    const emailErr = {};
    let isValid = true;
    if (email.trim().length < 1) {
      emailErr.emailemp = "Email is required";
      isValid = false;
    } else if (!email.match(emailRegex)) {
      emailErr.emailName = "Invalid email";
      isValid = false;
    }
    setEmailErr(emailErr);
    return isValid;
  };

  //message validation
  const messageValidation = () => {
    const messageErr = {};
    let isValid = true;
    if (message.trim().length < 10) {
      messageErr.msgtxt = "atleast 10 letters is required!!";
      isValid = false;
    }
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
              onBlur={nameValidation}
            />
          </label>
          {Object.keys(nameErr).map((key) => {
            return (
              <div style={{ color: " rgb(204,1,0) ", marginTop: "-20px" }}>
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
              onBlur={emailValidation}
            />
          </label>

          {Object.keys(emailErr).map((key) => {
            return (
              <div style={{ color: " rgb(204,1,0)", marginTop: "-20px" }}>
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
              onBlur={messageValidation}
            />
          </span>
          <br />
          <br />
          {Object.keys(messageErr).map((key) => {
            return (
              <div style={{ color: " rgb(204,1,0) ", marginTop: "-20px" }}>
                {messageErr[key]}
              </div>
            );
          })}
          <br />
          <input type="submit" id="submit" />
        </div>
        <div className="socials">
          <div className="vertical_social">
            <div className="info">
              <FontAwesomeIcon className="icons" icon={faHome} />
              <p>Nagarjun-6,Kathmandu</p>
            </div>
            <div className="info">
              <FontAwesomeIcon className="icons" icon={faPhone} />
              <p>+977 9863330067</p>
            </div>
            <div className="info">
              <FontAwesomeIcon className="icons" icon={faEnvelope} />
              <p>akkhanal2000@gmail.com</p>
            </div>
          </div>
          <div className="horizontal_socials">
            <a href="https://twitter.com/astro_jr_ak" target="_blank">
              <FontAwesomeIcon className="icons" id="twitter" icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/ankit.khanal.5454/" target="_blank">
              <FontAwesomeIcon
                className="icons"
                id="facebook"
                icon={faFacebook}
              />
            </a>
            <a href="https://www.instagram.com/astro_jr_ak/" target="_blank">
              <FontAwesomeIcon
                className="icons"
                id="insta"
                icon={faInstagram}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-khanal-b49010176"
              target="_blank"
            >
              <FontAwesomeIcon
                className="icons"
                id="linkedin"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
