import React from 'react'
import'./About.css'
import profile_img from '../../assets/Pranay pic.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm Pranay, a passionate and dedicated fresher in the field of web development. With a solid foundation in front-end development, I have hands-on experience working with HTML, CSS, and JavaScript, to create visually appealing and user-friendly websites.</p>
                    <p>I am currently expanding my skill set by diving into full-stack development, exploring back-end technologies, and learning to build comprehensive web applications. I am eager to bring my knowledge and enthusiasm to new projects, continuously learning and growing in this ever-evolving field.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>0.6</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
