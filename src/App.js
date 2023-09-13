// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/about";
import Project from "./routes/project";
import  Contact from "./routes/contact";
import {BrowserRouter, Route, Routes}from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   </>
  );
}

export default App;
