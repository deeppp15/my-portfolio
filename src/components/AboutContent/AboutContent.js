import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import Image1 from "../../assets/me.jpeg";
import Image2 from "../../assets/gmu.jpeg";

import React from 'react';
import { Reveal } from "../Utils/Reveal.tsx";

const AboutContent = ()=> {
  return (
    <section id="about" className="section" >
    <div className="about">
      <div className="left">
        <Reveal>
        <h1>Who am I ?</h1>
        <p>Hello! My name is Deep Vora, and I am passionate about pushing the boundaries of technology and making meaningful contributions to the field of computer science. Beyond my professional work, I have contributed to the field through papers on Reinforcement Learning using Neural Networks and Inter-vehicular Networking in Real-Time Systems.</p>
        <Link to="/my-portfolio/#contact">
          {/* <button className="btn">Contact</button> */}
        </Link>
        </Reveal>
      </div>

      
      <Reveal>
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
      </Reveal>
    </div>
    </section>
  )
}

export default AboutContent;