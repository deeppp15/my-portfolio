import React from 'react';
import { NavLink,Link } from "react-router-dom";
import { Document, Page } from 'react-pdf';

const DataMiningCard  =(props) =>{
    return (
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
    )
  }

export default DataMiningCard