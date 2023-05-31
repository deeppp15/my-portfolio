import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import Image1 from "../assets/me.jpeg";
import Image2 from "../assets/gmu.jpeg";

import React from 'react';

const AboutContent = ()=> {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am Deep Vora, a dedicated and enthusiastic individual with a strong foundation in programming languages and a diverse skill set in tools and frameworks. I am eager to leverage my skills and expand my knowledge in the field of computer science. Apart from my technical background you will find me watching re runs of The Office and ocassionally playing Valorant.</p>
        <Link to="/my-portfolio/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      
      
      
      <div className="right">
          <div className="img-container">
                <div className="img-stack top">
                  <img src={Image1}  className="img" alt="true"/>
                  </div>
              
                  <div className="img-stack bottom">
                  <img src={Image2}   className="img" alt="true"/>
                </div>
          </div>
      </div>
    </div>
  )
}

export default AboutContent;