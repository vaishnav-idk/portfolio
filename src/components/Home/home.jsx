import React,{useEffect,useState} from 'react'
import '../../css/Home/home.css'
import {Typewriter} from 'react-simple-typewriter'
import resume from '../../image/vaishnav venugopalan resume.pdf'


function Home(props) {

  const color = props.themeColor

 return (
    <div className='home_container' id='home' style={{backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Cpath fill="${color}" d="M0,0 L100,0 L50,50 Z" /%3E%3Cpath fill="${color}" d="M100,100 L50,50 L100,50 Z" /%3E%3C/svg%3E')`,}}>
      <h1>Hello, my name is <span className='name'>Vaishnav Venugopalan</span></h1>
      <h2>
        I am a <span className='post'><Typewriter words={['Front End Developer','Web Developer','Full Stack Developer']} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} loop={Infinity}/></span>
      </h2>
      <p>An aspiring developer. And I love to make web designs and interfaces</p>
      <a href={resume} download="Vaishnav Venugopalan Resume"><button>Download Resume</button></a>
    </div>
  )
}

export default Home
