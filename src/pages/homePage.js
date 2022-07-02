import React from "react";
import "./Homepage.css";
import profile from "../assets/profile_pic1.png";
import resume from "../assets/Resume.pdf";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="hero_container">
      <div className="des_container">
        <h1>Hi, I'm Darshan Gautam</h1>
        <p>
          Bachelors in Electronics and Communication Engineering.
          <br />
          Software Engineer intern at Optimum Futurist.
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
      <img className="profile" src={profile} alt="profile picture" />
    </div>
  );
};

export default Homepage;
