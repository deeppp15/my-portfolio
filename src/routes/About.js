import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProj from '../components/HeroImgProj'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>About
        <Navbar/>
        <HeroImgProj heading="ABOUT" text="I am a Full stack developer."/>
        <AboutContent/>
        <Footer/>
    </div>
  )
}

export default About