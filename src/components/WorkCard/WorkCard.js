import "./WorkCardStyles.css";

import React from 'react';

import { Link } from "react-router-dom";
import { Reveal } from "../Utils/Reveal.tsx";
import {FaExternalLinkAlt} from "react-icons/fa";

const WorkCard =(props) =>{
  const isExternal= (props.title !== 'Data Mining Basics');
  const linkProps = isExternal
    ? { href: props.view, target: "_blank", rel: "noopener noreferrer" }
    : { to: props.view };
    const LinkComponent = isExternal ? 'a' : Link;

  return (
    <LinkComponent {...linkProps} >
      <Reveal>
        <div className="project-card"> 
          <img className="project-img" src={props.imgsrc} alt="image" />
            <h2 className="project-title">   {props.title}&emsp;
                {isExternal && <FaExternalLinkAlt size={15} />}
              </h2>
              <div className="pro-details">
                <p>{props.text}</p>
                </div>
            </div>
        </Reveal>
    </LinkComponent>
  )
}

export default WorkCard;