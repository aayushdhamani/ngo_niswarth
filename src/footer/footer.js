import React from 'react'
import logo from './logo.jpg';
import './footer.css';

const footer = () => {
  return (
   <div>
    <footer class="footer my-2" style={{fontsize:'10px'}}>
    <div className="image container ">
      <img src={logo}  alt="" />
    </div>
    <div className="container ">
        <p ><b>Email:</b> <a href="mailto:ni.swarth20202@gmail.com" >ni.swarth2020@gmail.com</a></p>
        <p><b>Mobile:</b><a href="tel:9829254717">Call us at 9829254717</a></p>

    </div>
    </footer>
    
    </div>
  )
}

export default footer
