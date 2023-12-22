import "./FooterStyles.css"
import {FaGithub, 
        FaHackerrank, 
        FaHome, 
        FaLinkedin, 
        FaMailBulk, 
        FaPhone,
        FaFileDownload
    } 
    from "react-icons/fa";
import pdf from "../../assets/Resume.pdf"
import React from 'react';


function Footer() {
  return (
   <div className="footer">
    <div className="footer-container">
    <div className="left">
            
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }} />
                <div>
                    <p>Lee Hwy, Fairfax, VA</p>
                    <p>USA</p>
                </div>
            </div>
            
            <div className="phone">
                <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />  
                    +1-571-356-3000
                </h4>
            </div>

            <div className="email">
                <h4> 
                    <FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem"}} />
                    deepvora15@gmail.com
                </h4>
            </div>
        </div>


        <div className="right">
                <h4> About myself </h4>
                <p> I am a Computer Science Student studying in george mason university.</p>
                <div className="social">
                <a href="https://www.hackerrank.com/voradeep15/">
                    <FaHackerrank size={30} style={{
                        color:"#fff", marginRight:"1rem"
                    }} /></a>
                    <a href="https://www.linkedin.com/in/deep-vora15/">
                    <FaLinkedin size={30} style={{
                        color:"#fff", marginRight:"1rem"
                    }} /></a>
                     <a href="https://github.com/deeppp15">
                    <FaGithub size={30} style={{
                        color:"#fff", marginRight:"1rem",
                        
                    }} /></a>
                    <a href={pdf} download="Deep_Vora_Resume.pdf">
                    <FaFileDownload size={30} style={{
                        color:"#fff", marginRight:"1rem",
                        
                    }} /></a>
                </div>
            </div>
        
       
    </div>
    </div>
  )
}

export default Footer


