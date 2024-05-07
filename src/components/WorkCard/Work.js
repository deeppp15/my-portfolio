import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
//Get card from WorkCard and Work card will get data from WorkCardData js
import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

const Work =() =>{
  return (
    <section id="projects" className="section">
    <div className="=work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {WorkCardData.map((val,ind) =>{
            return(
                <WorkCard key={ind}
                          imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        />
            )
           })}
        </div>
    </div>
    </section>
  );
};

export default Work