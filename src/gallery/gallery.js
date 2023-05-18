import React from 'react'
import "./gallery.css"
import img1 from "./dog1.jpg"

const gallery = () => {
  return (
          <>
          
    <div className="container-fluid ">
      <div ><h1 className='text-center heading fw-bolder mt-5' style={{color:'#f9b316'}}>Gallery <hr/></h1></div>
    <div className="row">
      <div className="column">
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        
      </div>
      <div className="column">
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
       
      </div>
      <div className="column">
        <img src={img1} />
        <img src={img1} />
        <img src={img1} />
        
      </div>
   
      
    </div>
  </div>
  </>
   
  )
}

export default gallery