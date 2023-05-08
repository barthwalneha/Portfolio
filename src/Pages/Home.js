
import React from 'react';
import cv from "../cv_Neha.pdf";

const Home = () =>{
  return(
    <section id="hero">
    <div className="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>NEHA BARTHWAL <span></span></h1> <br/> <br/> 
        <div className="buttonFor">  
          <a   href={cv} className="btn btn-lg btn-secondary" target="_blank"> Download Resume </a>

        </div>
      </div>
    </div>
  </section>

  )

} ;

export default Home;


