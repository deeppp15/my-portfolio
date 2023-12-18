import React from 'react'

import "./DataMiningMainStyle.css"

import DataMiningCard from "./DataMiningCard";
import DataMiningContent from "./DataMiningContent";
import { NavHashLink } from 'react-router-hash-link';
import { useEffect } from 'react';

const DataMiningMain =(props) =>{

  useEffect(() => {
    // Scroll to the target section when the component mounts
    const targetElement = document.getElementById('home');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="=work-container">
    <h1 className="project-heading">DataMining </h1>
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