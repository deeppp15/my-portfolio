import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProj from '../components/HeroImgProj'
import WorkCard from '../components/WorkCard'
const Project = () => {
  return (
    <div>Project
     <Navbar/>
     <HeroImgProj heading="PROJECTS."  text="Some of my most recent works"/>
     <WorkCard />
     <Footer/> 
     </div>
  )
}

export default Project