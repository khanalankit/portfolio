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
        <p>Copyright @{new Date().getFullYear()} | Designed by Ankit Khanal</p>
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
        <a
      id="cy-effective-orcid-url"
      className="underline"
      href="https://orcid.org/0000-0003-0573-3978"
      target="orcid.widget"
      rel="me noopener noreferrer"
      style={{ verticalAlign: 'top' }}
    >
      <img
        src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
        style={{ width: '1em', marginInlineStart: '0.5em' }}
        alt="ORCID iD icon"
      />
      https://orcid.org/0000-0003-0573-3978
    </a>
      </div>
    </div>
  );
};

export default Footer;
