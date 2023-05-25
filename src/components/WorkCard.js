import "./WorkCardStyles.css"


import React from 'react'
import dataImg from "../assets/dataMining.png"
import { NavLink } from "react-router-dom"
const WorkCard =() =>{
  return (
    <div className="=work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={dataImg} alt="image" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                  <p> These are the Projects </p>
                    <div className="pro-btns">
                      <NavLink to="www.google.com" 
                      className="btn">View</NavLink>
                      <NavLink to="www.google.com" 
                      className="btn">Source</NavLink>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard