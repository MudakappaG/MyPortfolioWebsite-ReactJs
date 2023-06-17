import "./FootStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaMailBulk, FaPhone, FaTwitter ,FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa"
import { Link } from "react-router-dom"

const Foot = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    < FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}} />
                    <div>
                        <p>22 Kuvempu sankirna. </p>
                        <p>Bengaluru.</p>

                    </div>
                </div>
                <div className="phone">
                    <h4>< FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}} />
                81230-81652</h4>
                </div>
                <div className="email">
                    <h4>  < FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}} />
                mudakappajaladi09@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is Mudakappa G Jaladi.
                    I'm Studying Computer Science Engineering
                    in the Mvj College of Engineering.
                    I enjoy discussing new Projects and design challenges.</p>
                    <div className="social">
                    <Link to="https://www.linkedin.com/in/mudakappa-g-jaladi-928b61227"><FaLinkedin size={20} 
                    style={{color:"#fff" , marginRight:"2rem"}}  /></Link> 
                    <Link to="https://github.com/MudakappaG"> <FaGithub size={20} 
                    style={{color:"#fff" , marginRight:"2rem"}}  /></Link>
                    <Link to="https://www.facebook.com/mudakappag.jaladi.7?mibextid=ZbWKwL"><FaFacebook size={20} 
                    style={{color:"#fff" , marginRight:"2rem"}}  /></Link>
                    <Link> <FaInstagram size={20} 
                    style={{color:"#fff" , marginRight:"2rem"}}  /></Link>
                    <Link to="https://twitter.com/MudakappaJ?s=09">  <FaTwitter size={20} 
                    style={{color:"#fff" , marginRight:"2rem"}}  /></Link>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Foot
