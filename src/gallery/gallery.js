import React from 'react'
import "./gallery.css"

import g1 from "./g1.jpg"
import g2 from "./g2.jpg"
import g3 from "./g3.jpg"
import g4 from "./g5.jpg"
import g5 from "./g7.jpg"
import g7 from "./g8.jpg"
import g8 from "./g9.jpg"
import g9 from "./g12.jpg"
import g10 from "./g11.jpg"
import g11 from "./g8.jpg"
import g12 from "./g4.jpg"

const gallery = () => {
  return (
          <>
          
    <div className="container-fluid">
      <div ><p className='gallery text-center heading fw-bolder ' style={{color:'#f9b316'}} >Gallery <hr/></p></div>
    <div className="row mt-3">
      <div className="column">
        <img src={g1} />
        <img src={g8} />
        <img src={g7} />
  
        
      </div>
      <div className="column">
      <img src={g4} />
 
        <img src={g11} />
        <img src={g12} />
    
       
      </div>
      <div className="column">
      <img src={g5} />
      
        <img src={g9} />
        <img src={g2} />
      
      </div>
      
   
      
    </div>
  </div>
  </>
   
  )
}

export default gallery