import React from "react";
import "./Homepage.css";
import profile from "../assets/profile-removebg.png";
import resume from "../assets/Resume.pdf";

const Homepage = () => {
  return (
    <div className="hero_container">
      <div className="des_container">
        <h1>Darshan Gautam</h1>
        <p>
          Bachelors in Electronics and Communication Engineering.
          <br />
          Software Engineer intern at Optimum Futurist.
        </p>
        <div className="home_Btn">
          <a href={resume} download="resume">
            <button type="button">DOWNLOAD CV</button>
          </a>
          <a href="/Contact_Me">
            <button type="button">CONTACT ME</button>
          </a>
        </div>
      </div>
      <img className="profile" src={profile} alt="profile picture" />
    </div>
  );
};

export default Homepage;
