import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const [activeNav, setActiveNav] = useState('#');

    const handleClick = () => setClick(!click);
    const changColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Yash Lokhande</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu "}>
                <li>
                    <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#' ? 'active' : ''}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
                </li>
                <li>
                    <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
                </li>
                <li>
                    <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skill</a>
                </li>
                <li>
                    <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}>Education</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick} style={{}}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />)
                    :
                    (<FaBars size={20} style={{ color: "#fff" }} />)
                }
            </div>
        </div>
    )
}

export default Navbar