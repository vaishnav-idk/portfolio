import React from 'react'
import '../../css/Contact_me/contact_me.css'



function Contact_me() {

  return (
    <div className="contact_me_main" id='contact_me'>
        <h1>Contact Me</h1>

        <div className='contact_me_container'>
        <a className='linkedin_list' href="https://www.linkedin.com/in/vaishnav-venugopalan" target="_blank">
            <ul >
                <li><i className="fa-brands fa-linkedin"/></li>
                <li><p className='platform'>Connect Me</p></li>
                <li><p className='link'>linkedin.com/in/vaishnav-venugopalan</p></li>
            </ul>
        </a>

        <a className='email_list' href="https://mail.google.com/mail/?view=cm&fs=1&to=yourname@example.com" target="_blank">
            <ul >
                <li><i className="fa-regular fa-envelope"/></li>
                <li><p className='platform'>Send a mail</p></li>
                <li><p className='link'>vaishnavvgpl@gmail.com</p></li>
            </ul>
        </a>
        <a className='phone_list'>
            <ul >
                <li><i className="fa-solid fa-phone"/></li>
                <li><p className='platform'>Call Me On</p></li>
                <li><p className='link'>+917736775168</p></li>
            </ul>
        </a>
            
        </div>
    </div>
    
  )
}

export default Contact_me
