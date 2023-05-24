import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProj from '../components/HeroImgProj'
import Work from '../components/Work'
import ExperienceCard from '../components/ExperienceCard'
const Project = () => {
  return (
    <div>Project
     <Navbar/>
     <HeroImgProj heading="PROJECTS."  text="Some of my most recent works"/>
     <Work />
     <Footer/> 
     </div>
  )
}

export default Project