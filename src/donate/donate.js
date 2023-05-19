import React from 'react'
import './donate.css';
import scanner from './Scanner.jpg';
import qr from './qr.png';

const donate = () => {
  return (
   <>
   <div className="text-center heading fw-bolder " style={{color:'#f9b316'}}>Donate Now</div>
   <div className="container">
   <div className=" row mt-4">
    <div className="scanner col-md-4 " >
    <img src={scanner} alt="" class="" style={{width:'80%', height:'90%'}}/>
    </div>
    <div className="container col-md-8" style={{fontSize:'10px'}}>

        
        <p class="dohed" style={{color:'grey'}}>Remember that the happiest people are not those getting more, but those giving more.</p>
        <p class="dohed" style={{color:'grey'}}>Donate for the shelter services</p>
        <p class="dohed" style={{color:'grey'}}>Donate to feed stray dogs, cats, cows</p>
        <img class="qr"  src={qr} alt="qr"  />
    </div>
    </div>
   <div className=" text-start heading  " style={{color:'#f9b316',fontSize:'10px'}}>
    <p class="join fw-bolder">BECOME A PROUD VOLUNTEER</p>
    
    <p class="dohed" style={{color:'grey'}}>Join hands with the team of Niswarth to provide food and shelter to the animals around you. Save the beautiful souls with love and compassion</p>
   </div>
   </div>
   </>
  )
}

export default donate
