import React from 'react'
import './team.css';
import Team1 from './team1.jpg';
import Team2 from './team2.jpg';
import Team3 from './team3.jpg';

const team = () => {
  return (
    <div>
        <div className="container">
        <div className="text-center heading fw-bolder mb-3" style={{color:'#ffc107'}}>Our Team</div>
        <div className="container row d-flex justify-content-evenly">
      <div class="card col-md-4" style={{ width: "18rem" }}>
  <img src={Team1} alt="Card Image"/>
  <h2 class="card-heading">David</h2>
  <h3 class="card-subheading">Founder</h3>
  <p class="card-text">The creative star whom you have seen on the stage in a Rajasthan Royals match, in fashion shows...
</p>
</div>
      <div class="card col-md-4" style={{ width: "18rem" }}>
  <img src={Team2} alt="Card Image"/>
  <h2 class="card-heading">Yashwant Saini</h2>
  <h3 class="card-subheading">Social Media Manager</h3>
  <p class="card-text">Social media can be a tough turf at times. Our social media manager manages to keep you updated... </p>
</div>
      <div class="card col-md-4" style={{ width: "18rem" }}>
  <img src={Team3} alt="Card Image"/>
  <h2 class="card-heading">Lavisha Mehta</h2>
  <h3 class="card-subheading">Graphics Designer</h3>
  <p class="card-text">An ace graphics designer brings out the clearest message in every sphere. Aiding Niswarth... </p>
</div>
      
</div>
</div>
    </div>
  )
}

export default team
