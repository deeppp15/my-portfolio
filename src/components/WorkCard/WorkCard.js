import "./WorkCardStyles.css";

import React from 'react';

import { Link } from "react-router-dom";
import { Reveal } from "../Utils/Reveal.tsx";

const WorkCard =(props) =>{
  return (
    <Link to={props.view}>
      <Reveal>
        <div className="project-card"> 
          <img className="project-img" src={props.imgsrc} alt="image" />
            <h2 className="project-title">{props.title}</h2>
              <div className="pro-details">
                <p>{props.text}</p>
                </div>
            </div>
            </Reveal>
            </Link>
  )
}

export default WorkCard