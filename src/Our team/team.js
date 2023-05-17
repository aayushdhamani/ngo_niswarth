import React from 'react'
import './team.css';

const team = () => {
  return (
    <div>
        <div className="container">
        <div className="text-center heading fw-bolder mb-3" style={{color:'#ffc107'}}>Our Team</div>
        <div className="container row d-flex justify-content-evenly">
      <div class="card col-md-4" style={{ width: "18rem" }}>
  <img src="path/to/image.jpg" alt="Card Image"/>
  <h2 class="card-heading">David</h2>
  <h3 class="card-subheading">Founder</h3>
  <p class="card-text">The creative star whom you have seen on the stage in a Rajasthan Royals match, in fashion shows, on a live stage, is the founder of this larger-than-life Niswarth organization. Moved by the condition of animals around his house in the COVID-19 pandemic, he decided to set up an animal shelter home in Jaipur for the loving souls. 
</p>
</div>
      <div class="card col-md-4" style={{ width: "18rem" }}>
  <img src="path/to/image.jpg" alt="Card Image"/>
  <h2 class="card-heading">Yashwant Saini</h2>
  <h3 class="card-subheading">Social Media Manager</h3>
  <p class="card-text">Social media can be a tough turf at times. Our social media manager manages to keep you updated through our social media handles and worthy posts. </p>
</div>
      <div class="card col-md-4" style={{ width: "18rem" }}>
  <img src="path/to/image.jpg" alt="Card Image"/>
  <h2 class="card-heading">Lavisha Mehta</h2>
  <h3 class="card-subheading">Graphics Designer</h3>
  <p class="card-text">An ace graphics designer brings out the clearest message in every sphere. Aiding Niswarth in spreading the word far and wide. </p>
</div>
      
</div>
</div>
    </div>
  )
}

export default team
