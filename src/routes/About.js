import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProj from '../components/HeroImgProj'
const About = () => {
  return (
    <div>About
        <Navbar/>
        <HeroImgProj heading="ABOUT" text="I am a Full stack developer."/>
        <Footer/>
    </div>
  )
}

export default About