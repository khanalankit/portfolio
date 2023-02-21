import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="copyright">
        <p>Copyright @2022 | Designed by Darshan Gautam</p>
      </div>
      <div className="footer_socials">
        <a href="https://twitter.com/astro_jr_ak" target="_blank">
          <FontAwesomeIcon className="fa_icons" icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/ankit.khanal.5454/" target="_blank">
          <FontAwesomeIcon className="fa_icons" icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/astro_jr_ak/" target="_blank">
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
