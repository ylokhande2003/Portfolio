import React from 'react'
// import Navbar from '../container/Navbar'
import Navbar from '../container/Navbar'
import Img from '../container/img'
import Fotter from '../container/footer'
import Projects from '../container/myproject'
import About from '../container/about'
import Skill from '../container/serves'
import Contact from '../container/contact'
import Education from '../container/education'
import Exp from '../container/allexp'
const Home = () => {
  return (
    <div id='home'>
      <Navbar />
      <Img />
      <h1 style={{ display: "flex", justifyContent: "center", margin: "10px" }}>PROJECTS</h1>
      <div className='outer-projects'>
        <Projects />
      </div>
      <Education />
      <Skill />
      <Exp />
      <About />
      <Contact />
      <Fotter />
    </div>
  )
}

export default Home