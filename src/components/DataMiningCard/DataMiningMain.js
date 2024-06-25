import React from 'react'

import "./DataMiningMainStyle.css"

import DataMiningCard from "./DataMiningCard";
import DataMiningContent from "./DataMiningContent";
import { useEffect } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { NavHashLink  } from "react-router-hash-link";

const DataMiningMain =(props) =>{
  
  useEffect(() => {
    // Scroll to the target section when the component mounts
    const targetElement = document.getElementById('home');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="work-container">
      <div className="the-heading" >
      <NavHashLink to="/my-portfolio/#projects" smooth>
        <FaArrowCircleLeft size={30} style={{color:"#fff", marginRight:"1rem"}} />
      </NavHashLink>
      
      <h1 >DataMining </h1>
      </div>
        <div className="data-container">
           {DataMiningContent.map((val,ind) =>{
            return(
                <DataMiningCard key={ind}
                          imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        report={val.report}
                        src={val.src}

                        />

            );
           })}

        </div>
        </div>                      

  )
}

export default DataMiningMain;