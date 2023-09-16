import "./img.css";
import React from 'react'
import Wallpaper from "../assets/wallpaper.jpeg";
import { Link } from "react-router-dom";

function img() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Wallpaper} alt="Wallpaper" />
      </div>
      <div className="content">
        <p> HI , I`M A STUDENT</p>
        <h1>React Developer.</h1>
        <div className="btn-parent">
          <Link to="/project" className="btn">project</Link>
          <Link to="/contact" className="btn-light">contact</Link>
        </div>
      </div>

    </div>
  )
}

export default img