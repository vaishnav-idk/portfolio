import React from 'react'
import Card from './card'
import '../../css/Projects/project.css'
import project_details from "./project_detail"


function Project() {
  return (
    <div className='project_main' id='projects'>
        <h1>Projects</h1>
        <div className="project_container">
        {project_details.map((item,index) =>{
            return <Card key={index} id={index} title={item.title} description={item.description} images={item.images}/>
        })}
        </div>

        
    </div>
  )
}

export default Project
