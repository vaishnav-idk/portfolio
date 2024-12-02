import React, { useState } from 'react'
import '../../css/About_me/about_me.css'
import about_me_pic from "../../image/about_me_pic.png"
import certification from "./certification"
import education from "./education"
import experience from "./experience"
import skills from "./skills"



function About_me() {

  const [displayContent,setdisplayContent] = useState([])
  const [activeIndex,setactiveIndex] = useState(null)

  function mapContent(content,index){

    setdisplayContent(content);
    setactiveIndex(index);
  }


  return (
    <div className='about_me_container' id='about_me'>
      <img src={about_me_pic} alt="img" />
      <div className='about_me_content'>
        <h2>About Me</h2>
        <p>
          I am a MCA graduate at Chinmaya Institute of Technology, Kannur. I have done an internship at Dhanwis Techinfo Solutions, Kannur on Python Full Stack Development.
          I have a strong foundation in web development and have been part of web development projects. 
          As an excellent practical learner, I am always interested in improving my skills through practical experience and applying them in real world scenarios.
        </p>
        <div className='detail_container'>
          <button className={activeIndex === 0 ? 'active':''} onClick={()=>{mapContent(skills,0)}}>Skills</button>
          <button className={activeIndex === 1 ? 'active':''} onClick={()=>{mapContent(experience,1)}}>Experience</button>
          <button className={activeIndex === 2 ? 'active':''} onClick={()=>{mapContent(education,2)}}>Education</button>
          <button className={activeIndex === 3 ? 'active':''} onClick={()=>{mapContent(certification,3)}}>Certification</button>
        </div>



        
          <div className='detail_content 'style={{display: displayContent.length === 0 ? 'none' : ''}}>
          {
            displayContent.map(item =>{
              return(<>
              
                
                <p className='detail_head'style={{marginBottom:"5px"}}><span>{item.type || item.course || item.work}</span> <span>{item.year ? `| ${item.year}` : null}</span></p>
                
                <p className='detail_sub' style={{marginBottom:"5px",marginLeft:"10px"}}>
                  {item.school ? `${item.school}` : null }
                </p>

                <p className='detail_sub' style={{marginBottom:"10px",marginLeft:"10px"}}>  
                { 
                  item.skillList ? item.skillList.map(element =>{return(<span>{element}, </span>)}) : null ||
                  item.percentage ? `Percentage: ${item.percentage}` : null ||
                  item.workPlace ? `${item.workPlace}` : null ||
                  item.platform ? `${item.platform}` : null
                }
                </p>
                
                
                </>
              );
            })
          }
          </div>
        
      </div>
    </div>
  )
}

export default About_me
