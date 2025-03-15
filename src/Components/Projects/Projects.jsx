import React from 'react';
import './Projects.css';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

function Projects() {
  return (
    <div id='projects' className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {Services_Data.map((service, index) => (
          <div key={index} className='projects-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p dangerouslySetInnerHTML={{ __html: service.s_desc }}></p>
            <div className="projects-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="Arrow Icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
