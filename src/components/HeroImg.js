import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"
import { useTypingEffect } from "../hooks/typing-effect"


const HeroImg = () => {
    const myh = useTypingEffect("Fullstack Developer.", 100);
  return <div className='hero'>
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
        
        <div className="content">
            <p>Hi, I am a</p>
            <h1> {myh}</h1>
            <div>
                <Link to="/my-portfolio/project"  className="btn">Projects </Link>
                <Link to="/my-portfolio/contact"  className="btn btn-light .btn-hover">Contact</Link>
            </div>
        </div>
    </div>
 
}

export default HeroImg;