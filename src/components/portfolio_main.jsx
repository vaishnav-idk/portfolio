import React,{useState,useEffect} from 'react'
import '../css/portfolio_main.css'
import Sidenavbar from './Sidenav/sidenav'
import Home from './Home/home'
import About_me from './About_me/about_me'
import Project from './Projects/project'
import Contact_me from './Contact_me/contact_me'
import Footer from './Footer/footer'
import Style_changer from './Style_changer/style_changer'
import Service from './Services/service_main'



function Portfolio_main() {


    const [isOpen,setisOpen] = useState(false)

    function sidebarToggle(){
        setisOpen(!isOpen)           
    }
    
    const [darkMode,setdarkMode]=useState(false)

    function handledarkMode(){
      setdarkMode(!darkMode)
    }

    const [themeColor,setThemeColor]=useState('orangered')

    function handleThemeColor(color){
      setThemeColor(color)
    }

    useEffect(() => {
      document.documentElement.style.setProperty('--secondary-color', themeColor);
    }, [themeColor]); 

    useEffect(()=>{
      if(darkMode === true){
        document.documentElement.style.setProperty('--primary-color','rgb(17, 17, 17)');
        document.documentElement.style.setProperty('--texture-color','rgb(37, 37, 37)');
        document.documentElement.style.setProperty('--text-color','whitesmoke');
      }
      else{
        document.documentElement.style.setProperty('--primary-color','aliceblue');
        document.documentElement.style.setProperty('--texture-color','white');
        document.documentElement.style.setProperty('--text-color','black');
      }
    },[darkMode])

  return (
    <div className='portfolio_main' style={{overflowX:"hidden",position:"relative"}}>

      <Sidenavbar sideBarExpand={isOpen} sideBarExpandFunction={sidebarToggle}/>
      
      <div className={`main-content ${isOpen ? 'shift':''}`} style={{color : darkMode ? 'whitesmoke' : 'black'}}>
        <Style_changer darkMode={darkMode} handledarkMode={handledarkMode} handleThemeColor={handleThemeColor}/>
        <Home darkMode={darkMode} themeColor ={themeColor}/>
        <About_me/>
        <Service/>
        <Project/>
        <Contact_me/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Portfolio_main
