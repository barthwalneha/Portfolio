import React from "react";
import neha from "../Images/Neha.jpeg";
import cv from "../cv_Neha.pdf";
import {about} from "../Content";
const About = () => {
     return(
      <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={neha} alt="img"/>
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About <span>me</span></h1>
          <h2>{about.profile}</h2>
          <p>{about.text}</p>

             <a   href={cv} className="btn btn-lg btn-primary" target="_blank"> Download Resume </a>
  
  
        </div>
      </div>
    </section>
  
     )

}

export default About;