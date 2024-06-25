//import { Link } from "react-router-dom";
import "./ExperienceCard.css";
import React from 'react';
import cmpImg from "../../assets/company.jpg";
import gmuImg from "../../assets/gmu.jpg";
import unimum from "../../assets/university_of_Mumbai.jpg";
import { Reveal } from "../Utils/Reveal.tsx";
//Divide it into two pars one info and other images slideshow
function ExperienceCard() {
  return (
    <div className="exp">
        
        <h1 style={{ textAlign: 'center' }}className="exp-heading">Experience</h1>
        
        
        <div className="card-container">
           
        <Reveal> 
        <div className="card" >
                <div className="card-child ">
                <h2>George Mason University</h2>
                
                <p className="date">August, 2022 - May, 2024</p>
                <p className="title">Masters in Computer Science</p>
            
                <div className="points">
                    <p>In this program, I have had the opportunity to delve into advanced subjects such as -   
                        Database Design, Theory and Application of Data Mining, User Interface Design/Development, Mining Massive Datasets using MapReduce, Secure Software Engineering, Analysis of Algorithms, Object-Oriented Specification and Construction, and Computer and Systems Programming.</p>
                </div>
                <div className="points">
                    <p>The curriculum has not only enhanced my technical skills but has also nurtured my ability to think critically and solve complex problems. Collaborating with diverse peers and experienced professors has provided me with valuable insights and a stimulating learning environment.</p>
                </div>
                <div className="points">
                    <p>My journey at George Mason University has further fueled my passion for pushing the boundaries of technology and making meaningful contributions to the field of computer science.</p>
                </div>

         
                </div>
                <div className="card-child">
                    <img className="card-img"src={gmuImg}  alt="George Mason University Logo" />
                </div>
            </div>
           
            </Reveal>

            <Reveal> 
            <div className="card" >
                <div className="card-child">
                    <img  className="card-img" src={cmpImg} alt="Bitwise Pvt Limited Logo" />
                </div>

                <div className="card-child">
                <h2>Bitwise Pvt Limited</h2>
                
                <p className="date">Feb, 2021 - Aug, 2023</p>
                <p className="title">Software Development Engineer</p>
            
                    <div className="points">
                    <p>Enhanced system reliability and fault tolerance by designing and developing robust retry mechanisms across 50 microservices which led to a reduction of defects by 48%.</p>
                    </div>
                    <div className="points">
                    <p>Automated data extraction, analysis, and purging for top financial service clients and banking systems; reduced manual labor by up to 85%.</p>
                    </div>
                    <div className="points">
                    <p>Optimized operational efficiency by implementing batch processing jobs, resulting in significant latency reduction.</p>
                    </div>
                    <div className="points">
                    <p>Subject Matter Expert (SME) for dispute management service, automation, and scaling systems.</p>
                    </div>
                    <div className="points">
                    <p>Automated integration testing by delivering mock transaction and validation systems.</p>
                    </div>
                    <div className="points">
                    <p>Maintained web applications by troubleshooting bugs, releasing features, and enhancing overall system functionality.</p>
                    </div>

         
                </div>
            </div>
            </Reveal>
            
            <Reveal> 
            <div className="card" >
                <div className="card-child">
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
                <div className="card-child">
                    <img  className="card-img" src={unimum} alt="University of Mumbai Logo" />
                </div>
            </div>
            </Reveal>

        </div>
        
    </div>
  )
};

export default ExperienceCard;