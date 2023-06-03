import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgProj from '../components/HeroImgProj'
import  Form  from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgProj heading="Contact" text="Let's have a chat."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;