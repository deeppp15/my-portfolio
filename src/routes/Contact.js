import React from 'react'
import Navbar from '../components/Navbar/Navbar2'
import Footer from '../components/Footer/Footer'
import HeroImgProj from '../components/HeroImg/HeroImgProj'
import  Form  from '../components/Form/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      {/* <HeroImgProj heading="Contact" text="Let's have a chat."/> */}
      <Form/>
      {/* <Footer/> */}
    </div>
  )
}

export default Contact;