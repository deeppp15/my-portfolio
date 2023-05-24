import { Link } from "react-router-dom";
import "./ExperienceCard.css";
import React from 'react';

function ExperienceCard() {
  return (
    <div className="exp">
        <h1 className="exp-heading">Experience</h1>
        <div className="card-container">
            <div className="card">
                <h3>---Company---</h3>
                <span className="bar"></span>
                <p>$100</p>
                <p>3 days</p>
                <p>3 Pages</p>
                <p>Featured</p>
                <p>Responsive Design</p>
                <Link to="/contact" className="btn">
                    Contact Me
                </Link>
            </div>



            <div className="card">
                <h3>---Education---</h3>
                <span className="bar"></span>
                <p>$100</p>
                <p>5 days</p>
                <p>5 Pages</p>
                <p>George Maosn</p>
                <p>Mashterss</p>
                <Link to="/contact" className="btn">
                    Contact Me
                </Link>
            </div>



            <div className="card">
                <h3>---High Education---</h3>
                <span className="bar"></span>
                <p>Mumbai</p>
                <p>5 days</p>
                <p>5 Pages</p>
                <p>Mumbai Univ</p>
                <p>Bachleorsh</p>
                <Link to="/contact" className="btn">
                    Contact Me
                </Link>
            </div>
        </div>
    </div>
  )
};

export default ExperienceCard;