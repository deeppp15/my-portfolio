import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";
import {FaBars,FaTimes } from "react-icons/fa";
import React,{ useState } from 'react';
import { NavHashLink  } from "react-router-hash-link";


const Navbar = () => {
    
    const[click,setClick]= useState(false);
    const[color, setColor]=useState(false);

    const handleClick = () => {
        //console.log("click value is :- ", click);
        setClick(!click);
    };


    const changeColor = () => {
        if(window.scrollY >= 100 ){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor);



  return (
    <section id="home">
    <div className={color  ? "header header-bg":"header"}>
        <NavLink to="/my-portfolio/#home">
            <h1>Deep Vora</h1>         
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li >
                    <NavHashLink to="#home" smooth>Home</NavHashLink>
                </li>
                <li>
                    <NavHashLink to="#projects" smooth>Projects</NavHashLink>
                </li>
                <li >
                    <NavHashLink  to="#about"  smooth>About</NavHashLink>
                </li>
                <li >
                    <NavHashLink to="#contact" smooth>Contact</NavHashLink>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
            {click ? ( <FaTimes size={20} style={{ color: "#fff" }} />):
            (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </div>
        </section>
  )
}

export default Navbar;