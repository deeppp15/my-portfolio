import React from 'react';
import Navbar from '../components/Navbar/Navbar2';
import Footer from '../components/Footer/Footer';
import HeroImgProj from '../components/HeroImg/HeroImgProj';
import AboutContent from '../components/AboutContent/AboutContent';

const About = () => {
  return (
    <div>
        <Navbar/>
        {/* <HeroImgProj heading="ABOUT" text="I am a Developer."/> */}
        <AboutContent/>
        {/* <Footer/> */}
    </div>
  )
}

export default About;