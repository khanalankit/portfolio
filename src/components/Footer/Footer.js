import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="copyright">
        <p>Copyright @2022 | Designed by Darshan Gautam</p>
      </div>
      <div className="footer_socials">
        <a href="https://github.com/darsan012" target="_blank">
          <FontAwesomeIcon className="fa_icons" icon={faGithub} />
        </a>
        <a href="https://www.facebook.com/darsan.gautam.9" target="_blank">
          <FontAwesomeIcon className="fa_icons" icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/darsan_gautam/" target="_blank">
          <FontAwesomeIcon className="fa_icons" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/ankit-khanal-b49010176"
          target="_blank"
        >
          <FontAwesomeIcon className="fa_icons" icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
