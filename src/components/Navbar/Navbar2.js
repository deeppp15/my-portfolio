import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";
import {FaBars,FaTimes } from "react-icons/fa";
import React,{ useState } from 'react';
import { NavHashLink  } from "react-router-hash-link";


const Navbar = () => {
    
    const[click,setClick]= useState(false);
    const[color, setColor]=useState(false);

    const handleClick = () => {
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

    //Chaning NavLink Col      
        const handleHashChange = () => {
            const currLink= window.location.hash.substring(1);
            document.querySelectorAll('li').forEach(item => {
                    const href= item.querySelector('a').getAttribute('href');
                    const hashValue = href.substring(href.indexOf('#')+1); // Gets '#contact'
                    console.log("Hash:-"+hashValue+",curr:"+currLink+",condition- "+href.match(currLink));
                    if(href.match(currLink) && currLink)  {
                        item.classList.add('clicked');
                    }else{
                        item.classList.remove('clicked');
                    }
              });        
        };
      
        window.addEventListener('hashchange', handleHashChange);
      
        // Initial call to set the correct class on page load
        handleHashChange();
      
        
  return (
    <section id="home">
    <div className={color  ? "header header-bg":"header"}>
        <NavHashLink to="#home" smooth>
            <h1>Deep Vora</h1>         
            </NavHashLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
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