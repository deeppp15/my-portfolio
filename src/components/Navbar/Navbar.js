import "./NavbarStyles.css";
import {FaBars,FaTimes } from "react-icons/fa";
import React,{ useState } from 'react';
import { NavHashLink  } from "react-router-hash-link";


const Navbar = () => {
    
    const[click,setClick]= useState(false);
    const[color, setColor]=useState(false);

    const handleClick = () => {
        console.log("click value is :- ", click);
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
        <NavHashLink to="/my-portfolio/#home">
            <h1>Deep Vora</h1>         
            </NavHashLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li >
                    <NavHashLink to="/my-portfolio/#home" smooth className={".navlink"} >Home</NavHashLink>
                </li>
                <li>
                    <NavHashLink to="/my-portfolio/#projects" smooth className={".navlink"}>Projects</NavHashLink>
                </li>
                <li >
                    <NavHashLink  to="/my-portfolio/#about"  smooth className={".navlink"}>About</NavHashLink>
                </li>
                <li >
                    <NavHashLink to="/my-portfolio/#contact" smooth className={".navlink"}>Contact</NavHashLink>
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