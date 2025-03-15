import React from 'react'
import './Footer.css'
import footer_logo from'../../assets/footer_logo.svg'
import user_icon from'../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <p>I am a developer with the experience of 6 months, and have the certification of python fullstack developer from ISM Univ and Infosys Springbord.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your name'/>
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <div className="footer-bottom-left">@ 2024 Pranay Reddy,  All rights reserved.</div>
        <div className="footer-bottom-right">
          <p>Term & Conditions</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
