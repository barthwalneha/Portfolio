import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    
    return (
      <section id="header">
  <div className="header container">
    <div className="nav-bar">
      <div className="brand">
        <a href="#hero">
          <h1><span>T</span>ata <span>S</span>TRIVE</h1>
        </a>
      </div>
      <div className="nav-list">
        <div className="hamburger">
          <div className="bar"></div>
        </div>
        <ul>
          <li> <Link to="/">
             <a href="#hero" data-after="Home">Home</a> 
            </Link>
            </li>
          <li>
          <Link to="/Education">
          <a href="#services" data-after="Service">Skills</a>
          </Link>
          </li>
          <li>
          <Link to="/Certificates">

          <a href="#projects" data-after="Projects">Certificates</a>
          </Link>
          </li>

          <li>
          <Link to="/About">

          <a href="#about" data-after="About">About</a>
          </Link>
          </li>
          
          <li>
          <Link to="/Contact">
          <a href="#contact" data-after="Contact">Contact</a>

          </Link>

          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
// <!-- End Header -->

    )
};

export default Header;