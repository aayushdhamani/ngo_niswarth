import React from 'react'
import './donate.css';
import scanner from './Scanner.jpg';
import qr from './qr.png';

const donate = () => {
  return (
   <>
   <div className="text-center heading fw-bolder" style={{color:'#ffc107'}}>Donate Now</div>
   <div className="container">
   <div className=" row mt-4">
    <div className="scanner col-md-4 " >
    <img src={scanner} alt="" class="" style={{width:'80%', height:'90%'}}/>
    </div>
    <div className="container col-md-8" style={{fontSize:'10px'}}>

        <p class="dohed" style={{color:'grey'}}>Remember that the happiest people are not those getting more, but those giving more.</p>
        <img class="qr"  src={qr} alt="qr"  />
    </div>
    </div>
   </div>
   </>
  )
}

export default donate
