import React from 'react';
import Navbar from '../components/Navbar'
import Foot from '../components/Foot';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent'

const About = () => {
  return <div> 
     <Navbar />
     <HeroImg2 heading="ABOUT." text="I'm A Friendly Front End Developer."/>
     <AboutContent />
    <Foot />
  </div>;};

export default About;
