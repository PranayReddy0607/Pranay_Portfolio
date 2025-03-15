import React from 'react'
import './Contact.css'
import mail_icon from'../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available for Internships, and as a fresher can join in the company ASAP as a developper.</p>
                <div className="contact-details">
                    <div className="contact-datail">
                        <img src={mail_icon} alt="" /><p>myadadhapranayreddy@gmail.com</p>
                    </div>
                    <div className="contact-datail">
                        <img src={call_icon} alt="" /><p>+91 9573848846</p>
                    </div>
                    <div className="contact-datail">
                        <img src={location_icon} alt="" /><p>Hyd, Telangana, India</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor ="">Write your message hear</label>
                <textarea name="message" rows="8" placeholder='enter your message'></textarea>
                <button type='sumbit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}
import './Contact.css'
export default Contact
