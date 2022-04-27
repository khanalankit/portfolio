import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleFlip = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="nav_container">
      <NavLink to="/">
        <img className="nav_logo" src={logo} alt="logo" />
      </NavLink>
      {(toggle || screenWidth > 766) && (
        <nav>
          <ul className="list">
            <li className="items" onClick={toggleFlip}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="items" onClick={toggleFlip}>
              <NavLink to="/About_Me">About Me</NavLink>
            </li>
            <li className="items" onClick={toggleFlip}>
              <NavLink to="/My_Projects">My Projects</NavLink>
            </li>
            <li className="items" onClick={toggleFlip}>
              <NavLink to="/Contact_Me">Contact Me</NavLink>
            </li>
          </ul>
        </nav>
      )}
      <FontAwesomeIcon
        icon={faBars}
        className="btn"
        onClick={toggleFlip}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Navbar;
