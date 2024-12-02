import React from 'react'
import Service_Card from './service_card'
import '../../css/Services/service_main.css'
import service_details from "./service_detail"


function Service() {
  return (
    <div className='service_main' id='services'>
        <h1>Services</h1>
        <div className="service_container">
        {service_details.map((item,index) =>{
            return <Service_Card key={index} id={index} title={item.title} description={item.description} icons={item.icon}/>
        })}
        </div>

        
    </div>
  )
}

export default Service
