import React,{useState} from 'react'
import '../../css/Sidenav/sidenav.css'
function Sidenavbar(props) {

  const [sidebarIndex,setSidebarIndex] = useState(null);

  function handleSidebarIndex(index){
    setSidebarIndex(index)
  }
  
  
    
  return (

      <div className={`sidenav_container ${ props.sideBarExpand ? 'open' :''}`}>
        <button className='sidenav_toggle' onClick={props.sideBarExpandFunction}><i class="fa-solid fa-bars"/></button>
      <ul>
        <li><a href="#home" className="heading" onClick={()=>handleSidebarIndex(0)}><span> my PortFolio</span></a></li>
        <li><a href='#home' className={`nav-content ${sidebarIndex === 0 ? 'active':''}`} onClick={()=>handleSidebarIndex(0)}><i class="fa fa-home"/><span>Home</span></a></li>
        <li><a href='#about_me' className={`nav-content ${sidebarIndex === 1 ? 'active':''}`} onClick={()=>handleSidebarIndex(1)}><i class="fa fa-user"/><span>About Me</span></a></li>
        <li><a href='#services' className={`nav-content ${sidebarIndex === 2 ? 'active':''}`} onClick={()=>handleSidebarIndex(2)}><i class="fa fa-home"/><span>Services</span></a></li>
        <li><a href='#projects' className={`nav-content ${sidebarIndex === 3 ? 'active':''}`} onClick={()=>handleSidebarIndex(3)}><i class="fa fa-th-large"/><span>Projects</span></a></li>
        <li><a href='#contact_me' className={`nav-content ${sidebarIndex === 4 ? 'active':''}`} onClick={()=>handleSidebarIndex(4)}><i class="fa fa-envelope"/><span>Contact Me</span></a></li>
      </ul>
      </div>


      

      

  )
}

export default Sidenavbar
