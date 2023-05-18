import React from 'react'
import './home.css';
import 'tailwindcss/tailwind.css';
import img1 from './img1.jpg';
import img3 from './dog1.jpg';
import img2 from './dog2.jpg';
import img4 from './dog3.jpg';



const home = () => {
  return (
    <>
    <div>
      <div>
      <div className="container" >
        <div className=" justify-center items-center mt-4" style={{fontSize:'10px'}}>
          <div>
          <h1 className="brand_name  text-center fw-bold" style={{color:'#f9b316'}}>
          NISWARTH
          </h1>
          </div>
 <div><p className=" sub-heading text-center fw-bold" style={{color:'#f9b316'}}>{" "}Animal welfare Organisation{" "}</p></div>
          <p className=" slogen mt-3 text-center" style={{color:'grey'}}>
          सेवा मनुष्य की स्वाभाविक वृत्ति है। सेवा ही उसके जीवन का आधार है। – प्रेमचन्द
          </p>
        </div>
      </div>
    </div>
    <div className="container mt-5">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
    </>
  )
}

export default home
