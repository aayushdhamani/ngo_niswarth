import React from 'react'
import logo from './logo.png';
import './footer.css';

const footer = () => {
  return (
   <div>
    <footer class="footer" style={{fontsize:'10px'}}>
    <div className="image container">
      <img src={logo}  alt="" />
    </div>
    <div className=" row container-fluid" style={{backgroundColor:'#f9b316'}}>
      <div className="email col-md-6 text-end">

        <p ><b>Email:</b> <a href="mailto:ni.swarth20202@gmail.com" >ni.swarth2020@gmail.com</a></p>
      </div>
      <div className="mobile col-md-6 text-start">

        <p><b>Mobile:</b><a href="tel:9829254717">Call us at 9829254717</a></p>
      </div>

    </div>
    </footer>
    
    </div>
  )
}

export default footer
