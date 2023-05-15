import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"

const HeroImg = () => {
  return <div className='hero'>
    <div className="mask">
    <img className="into-img"
    src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>Hi, I am a FREELANCER.</p>
        <h1>FullstackDev Developer.</h1>
    <div>
    <Link to="/project"  className="btn">Projects </Link>
    <Link to="/contact"  className="btn btn-light .btn-hover">Contact</Link>
</div>
    </div>
    </div>
 
}

export default HeroImg
