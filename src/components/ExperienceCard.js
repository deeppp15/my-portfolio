//import { Link } from "react-router-dom";
import "./ExperienceCard.css";
import React from 'react';
import cmpImg from "../assets/company.jpeg"
import gmuImg from "../assets/gmu.jpg"
import unimum from "../assets/university_of_Mumbai.jpg"
//Divide it into two pars one info and other images slideshow
function ExperienceCard() {
  return (
    <div className="exp">
        <h1 className="exp-heading">Experience</h1>
        <div className="card-container">
           
           
        <div className="card" >
                <div className="card-left">
                <h2>George Mason University</h2>
                
                <p className="date">August, 2022 - Present</p>
                <p className="title">Masters in Computer Science</p>
            
                    <div className="points">
                        <p>I am currently pursuing my Master's degree in Computer Science from George Mason University, USA. In this program, I have had the opportunity to delve into advanced subjects such as data mining, analysis of algorithms, database management, and secure software design. </p>
                    </div>
                    <div className="points">
                        <p>The curriculum has not only enhanced my technical skills but has also nurtured my ability to think critically and solve complex problems. Collaborating with diverse peers and experienced professors has provided me with valuable insights and a stimulating learning environment.</p>
                    </div>
                    <div className="points">
                        <p>My journey at George Mason University has further fueled my passion for pushing the boundaries of technology and making meaningful contributions to the field of computer science.</p>
                    </div>
         
                </div>
                <div className="card-right">
                    <img className="card-right-img"src={gmuImg} alt="Company Logo" />
                </div>
            </div>
           
           
           
           
            <div className="card" >
                <div className="card-left">
                <h2>Bitwise Pvt Limited</h2>
                
                <p className="date">Feb, 2021 - Aug, 2023</p>
                <p className="title">Software Developer</p>
            
                    <div className="points">
                        <p>Owned external customer web portal, including development cycle, 
                        unit testing, and code reviews.</p>
                    </div>
                    <div className="points">
                        <p>Development and maintenance of REST endpoints and UI of web portal, enabling self-service for our 
                        customer for onboarding and platform administration.</p>
                    </div>
                    <div className="points">
                        <p>Developed and maintained APIs across the remainder of our products, working within a larger team 
                        development cycle and participated in regular architecture and scoping meetings, for new product
                        development.</p>
                    </div>
         
                </div>
                <div className="card-right">
                    <img  className="card-right-img" src={cmpImg} alt="Company Logo" />
                </div>
            </div>


            <div className="card" >
                <div className="card-left">
                <h2>University Of Mumbai</h2>
                
                <p className="date">August, 2016 - February, 2021</p>
                <p className="title">Bachelors in Computer Engineering</p>
            
                    <div className="points">
                        <p>I completed my Bachelor's degree in Computer Engineering from the esteemed University of Mumbai, 
                            specializing in subjects such as computer architecture, data structures and algorithms,
                             software engineering, and operating systems.</p>
                    </div>
                    <div className="points">
                        <p>Throughout my academic journey, I delved deep into these subjects, gaining a comprehensive understanding
                             of the core principles and practical aspects of computer science and engineering.</p>
                    </div>
                    <div className="points">
                        <p>The rigorous curriculum equipped me with strong analytical and problem-solving skills, while courses like database management
                             and network security honed my expertise in critical areas of the field.</p>
                    </div>
         
                </div>
                <div className="card-right">
                    <img  className="card-right-img" src={unimum} alt="Company Logo" />
                </div>
            </div>


        </div>
    </div>
  )
};

export default ExperienceCard;