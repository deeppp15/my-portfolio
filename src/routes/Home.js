//FIrst create a functional component 
import React from 'react';
import Navbar from '../components/Navbar/Navbar2';
import HeroImg from '../components/HeroImg/HeroImg';
import Footer from '../components/Footer/Footer';
import Work from '../components/WorkCard/Work';
import ExperienceCard from '../components/ExperienceCard/ExperienceCard';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg />
     <ExperienceCard />
     <Work />
     <About />
     <Contact />
     <Footer /> 
    </div>
  )
}

export default Home;
