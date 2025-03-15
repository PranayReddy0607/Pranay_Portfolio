import React from 'react'
import'./Education.css'
import education_data from'../../assets/education_data'

const Education = () => {
  return (
    <div>
      <div id='education' className="education">
        <div className="education-title">
          <h1>My Education</h1>
        </div>
        <div className="education-container">
          {education_data.map((education,index)=>{
            return<div key={index} className='education-formate'>
              <h3>{education.s_no}</h3>
              <h2>{education.s_name}</h2>
              <p dangerouslySetInnerHTML={{ __html: education.s_desc }}></p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Education
