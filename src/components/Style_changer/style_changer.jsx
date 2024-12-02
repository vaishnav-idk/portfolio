import React, { useState } from 'react'
import '../../css/Style_changer/style_changer.css'
function Style_changer(props) {


  const [themeExpand,setThemeExpand]=useState(false)

  function handleThemeExpand(){
    setThemeExpand(!themeExpand)
  }





  return (
    <div className="style_changer_main">
      <div className={`style_changer_container ${themeExpand ? 'theme_expand' : null}`}>
        <div className="style_changer_buttons">
          <button onClick={handleThemeExpand}><i className="fa-solid fa-gear"/></button>
          <button onClick={props.handledarkMode}>{ props.darkMode ? <i className="fa-solid fa-sun"/> : <i className="fa-solid fa-moon"/>}</button>
        </div>
        <div className="style_changer_options">
          <h5>Theme Colors</h5>
          <ul>
            <li><button onClick={()=>props.handleThemeColor('orangered')} className='orangered'></button></li>
            <li><button onClick={()=>props.handleThemeColor('purple')} className='purple'></button></li>
            <li><button onClick={()=>props.handleThemeColor('teal')} className='teal'></button></li>
            <li><button onClick={()=>props.handleThemeColor('goldenrod')} className='goldenrod'></button></li>
          </ul>
        
        </div>
      </div>
    </div>
    
  )
}

export default Style_changer
