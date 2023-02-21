import React from "react";
import "./homePage.css";
import profile from "../assets/profile_pic1.jpg";
import resume from "../assets/Resume.pdf";
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
          <NavLink to={resume} target="_blank" download="resume">
            <button type="button" className="homeButton">
              DOWNLOAD CV
            </button>
          </NavLink>
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
