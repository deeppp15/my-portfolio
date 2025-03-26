import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../../assets/intro-bg.jpg"
import { useTypingEffect } from "../../hooks/typing-effect"
import { NavHashLink  } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ai from "../../assets/aws-ai.png"
import dva from "../../assets/aws-dva.png"

const HeroImg = () => {
    
    const myh = useTypingEffect("oftware Developer.", 100);
  return <div className='hero'>
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
        
        <div className="content">
            <p>Hi, I am a</p>
            <h1> S{myh}</h1>
            <div >
                <NavHashLink to="/my-portfolio/#projects" smooth  className="btn">Projects </NavHashLink>
                <NavHashLink to="/my-portfolio/#contact"  smooth className="btn btn-light .btn-hover">Contact</NavHashLink>
            </div>
        </div>
        <div className="badges">
            <h1 style={{ textAlign: 'center' }} className="exp-heading">Certifications</h1>
            <div className="badges-container">
            <img src={dva} alt="AWS Technical Essentials" className="badge" />
            <img src={ai} alt="AWS Cloud Practitioner" className="badge" />
            </div>
        </div>

    </div>
 
}

export default HeroImg;