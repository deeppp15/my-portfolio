//FIrst create a functional component 
import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Work from '../components/Work';
import ExperienceCard from '../components/ExperienceCard';

const Home = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg />
     <ExperienceCard />
     <Work />
     <Footer /> 
    </div>
  )
}

export default Home;
