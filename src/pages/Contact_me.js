import React from 'react'
import "./Contact_me.css"
const Contact_me = () => {
  return (
    <div className='contact_container'>
    <form action="#"id='contact-form'>
        <label for="name" id="name-label">Name</label><br/>
        <input type="text" id="name" name="name" placeholder="Enter your name" required/><br/><br/>
        <label for="email" id="email-label">Email</label><br/>
        <input type="email" id="email" name="email" placeholder="Enter your email" required/><br/><br/>
        <span className='message_text'>Message</span><br/>   
        <textarea name="data" id="textarea" cols="90" rows="10" placeholder="Enter your message here...."></textarea>
        <br/><br/>
        <input type="submit" value="Submit" id="submit"/> 
    </form>
</div>
  )
}

export default Contact_me