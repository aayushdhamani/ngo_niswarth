import React from 'react';
import "./gallery.css";
import g1 from '../Images/Gallery/1.jpg'
import g2 from '../Images/Gallery/2.jpg'
import g3 from '../Images/Gallery/3.jpg'
import g4 from '../Images/Gallery/4.jpg'
import g5 from '../Images/Gallery/5.jpg'
import g6 from '../Images/Gallery/6.jpg'
import g7 from '../Images/Gallery/7.jpg'
import g8 from '../Images/Gallery/8.jpg'
import g9 from '../Images/Gallery/9.jpg'


const gallery = () => {
  return (
          <>
          <div className="conatiner ">
    <div className="container-fluid p-5">
      <div ><p className='gallery text-center heading fw-bolder mb-0' style={{color:'#f9b316'}} >Gallery <hr/></p></div>
    <div className="row mt-3">
      <div className="column">
        <img src={g1} /> 
        <img src={g2} /> 
        <img src={g3} /> 
      </div>
      <div className="column">
        <img src={g4} /> 
        <img src={g5} /> 
        <img src={g6} /> 
      </div>
      <div className="column">
        <img src={g7} /> 
        <img src={g8} /> 
        <img src={g9} /> 
      </div>
      
   
      
    </div>
  </div>
  </div>
  </>
   
  )
}

export default gallery