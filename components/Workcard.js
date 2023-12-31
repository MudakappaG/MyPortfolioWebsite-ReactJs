import "./WorkcardStyles.css"

import React from 'react';
import { NavLink } from "react-router-dom";

const Workcard = (props) => {
  return (
    <div className="project-card">
        <img  src={props.imgsrc} alt="props.imgsrc"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.View} className="btn">View</NavLink>
                <NavLink to={props.Source} className="btn">Source</NavLink>
            </div>
        </div>

    </div>
  
  );
}

export default Workcard
