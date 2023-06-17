import React from 'react';
import Navbar from '../components/Navbar'
import Foot from '../components/Foot';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';


const Contact = () => {
  return <div> 
     <Navbar />
     <HeroImg2 heading="CONTACTS." text="Let's Have a Chat"/>
    <Form />
    <Foot />
  </div>;};

export default Contact;
