import React from 'react';
import Navbar from '../components/Navbar/Navbar2';
import Footer from '../components/Footer/Footer';
import HeroImgProj from '../components/HeroImg/HeroImgProj';
import Work from '../components/WorkCard/Work';
const Project = () => {
  return (
    <div>
     <Navbar/>
     <HeroImgProj heading="PROJECTS."  text="Some of my most recent works"/>
     <Work />
     <Footer/> 
     </div>
  )
}

export default Project;