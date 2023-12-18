import React from 'react';
import { NavLink,Link } from "react-router-dom";
import { Document, Page } from 'react-pdf';
import { Reveal } from '../Utils/Reveal.tsx';
import { NavHashLink  } from "react-router-hash-link";

const DataMiningCard  =(props) =>{
    return (
      <Reveal>
          <div className="data-card"> 
         
            <img className="data-img" src={props.imgsrc} alt="image" />
              <h2 className="data-title">{props.title}</h2>
                <div className="data-details">
                  <p>{props.text}</p>
                    <div className="data-btns">
                      <NavLink to={props.report} 
                      className="btn">report</NavLink >
                      <NavLink to={props.src} 
                      className="btn">Source</NavLink>
                      </div>
                  </div>
                 
              </div>
              </Reveal>

    )
  }

export default DataMiningCard