import "./HeroImgStyles.css";
import React from "react"
import { Link } from "react-router-dom";
import appu from "../assets/pexels-photo-4256211.webp";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={appu} alt="appu" />
      </div>
      <div className="content">
        <p>HI, I'M A STUDENT.</p>
        <h1>SOFTWARE ENGINEERING</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
