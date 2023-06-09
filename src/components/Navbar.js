import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import {FaBars,FaTimes } from "react-icons/fa";
import React,{ useState } from 'react';
;
//  Portfolio header to go to home
// Creating the navbar here 
const Navbar = () => {
    
    const[click,setClick]= useState(false);
    const handleClick = () => {
        console.log("click value is :- ", click);
        setClick(!click);
    };


    const[color, setColor]=useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100 ){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);
  return (
    <div className={color  ? "header header-bg":"header"}>
        <Link to="/my-portfolio">
            <h1>Deep Vora</h1>         
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/my-portfolio">Home</Link>
                </li>
                <li>
                    <Link to="/my-portfolio/project">Project</Link>
                </li>
                <li>
                    <Link to="/my-portfolio/about">About</Link>
                </li>
                <li>
                    <Link to="/my-portfolio/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
            {click ? ( <FaTimes size={20} style={{ color: "#fff" }} />):
            (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </div>
  )
}

export default Navbar;