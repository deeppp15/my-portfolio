import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../../assets/intro-bg.jpg"
import { useTypingEffect } from "../../hooks/typing-effect"
import { NavHashLink  } from "react-router-hash-link";
import { Link } from "react-router-dom";
import GitChart from "./GitChart";

const HeroImg = () => {
 const myh = useTypingEffect("eep Vora", 100);
  return <div className='hero'>
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
        
        <div className="content">
            <p>Hi, I am </p>
            <h1> D{myh}</h1>
            <div >
                <NavHashLink to="/my-portfolio/#projects" smooth  className="btn">Projects </NavHashLink>
                <NavHashLink to="/my-portfolio/#contact"  smooth className="btn btn-light .btn-hover">Contact</NavHashLink>
            </div>
        </div>

        <div>
            <GitChart />
        </div>
    </div>
 
}

export default HeroImg;