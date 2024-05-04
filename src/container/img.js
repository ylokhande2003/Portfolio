import "./img.css";
import React from 'react'
import Wallpaper from "../assets/wallpaper.jpeg";

function img() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Wallpaper} alt="Wallpaper" />
      </div>
      <div className="content">
        <p> HI , I`M A STUDENT</p>
        <h1>Software Developer.</h1>
        <div className="btn-parent">
          <a href="#project" className="btn">project</a>
          <a href="#contact" className="btn-light">contact</a>
        </div>
      </div>

    </div>
  )
}

export default img 