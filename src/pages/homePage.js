import React from "react";
import "./homePage.css";
import profile from "../assets/profile_pic1.jpg";
import resume from "../assets/CV.pdf";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="hero_container">
      <div className="des_container">
        <h1>Hi, I'm Ankit Khanal</h1>
        <p>
          Bachelors in Computer Engineering.
          <br />
          Aspiring Astronaut.
        </p>
        <div className="home_Btn">
          <a href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/ankit+-khanal+/0f1178eb-1639-4882-89e0-3dd5c0171002?view=html" target="_blank" download="CV">
            <button type="button" className="homeButton">
              DOWNLOAD CV
            </button>
          </a>
          <NavLink to="/contactMe">
            <button type="button" className="homeButton">
              CONTACT ME
            </button>
          </NavLink>
        </div>
      </div>
      <img className="profile" src={profile} alt="profile" />
    </div>
  );
};

export default Homepage;
