import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProj from '../components/HeroImgProj'

const Contact = () => {
  return (
    <div>Contact
      <Navbar/>
      <HeroImgProj heading="Contact" text="Let's have a chat."/>
      <Footer/>
    </div>
  )
}

export default Contact