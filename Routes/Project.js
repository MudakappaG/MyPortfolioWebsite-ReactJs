import React from 'react';
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2';
import Foot from '../components/Foot';
import Work from '../components/Work'

const Project = () => {
  return  <div> 
    <Navbar />
    <HeroImg2 heading="PROJECTS." text="Some of my most recect works"/>
    <Work />
    <Foot />

    
     </div>; 
     };

export default Project;