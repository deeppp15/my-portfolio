import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProj from '../components/HeroImgProj'
const Project = () => {
  return (
    <div>Project
     <Navbar/>
     <HeroImgProj heading="PROJECTS."  text="Some of my most recent works"/>
     <Footer/> 
     </div>
  )
}

export default Project