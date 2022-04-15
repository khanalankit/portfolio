import React from 'react'
import "./Homepage.css"
import profile from "../assets/profile_pic1.png"

const Homepage = () => {
  return (
    <div className='hero_container'>
      <div className='des_container'>
      <h1>Darshan Gautam</h1>
      <p>Bachelors in Electronics and Communication Engineering.<br/>Software Engineer intern at Optimum Futurist.</p>
      <button type="button">Contact Me</button>
      </div>
      <img className='profile' src={profile} alt="profile picture"/>
    </div>
  )
}

export default Homepage