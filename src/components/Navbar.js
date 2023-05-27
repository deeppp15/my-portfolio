import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import {FaBars,FaTimes } from "react-icons/fa";
import React,{ useState } from 'react'
;
//  Portfolio header to go to home
// Creating the navbar here 
const Navbar = () => {
    const[click,setClick]= useState(false);
    const handleClick=()=> setClick(!click);

  return (
    <div className="header">
        <Link to="/my-portfolio">
            <h1>Deep Vora</h1>         
            </Link>
            <ul className={click?"nav-menu active":"nav-menu"}>
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
            <div className="hamburger" onclick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff" }} />):
            (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </div>
  )
}

export default Navbar