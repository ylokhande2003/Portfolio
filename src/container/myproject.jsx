import React from 'react'
import './projects.css'
import data from '../JSON/data.json'

import { NavLink } from 'react-router-dom'
const Projects = function myfunction() {
  const ddata = data.map(
    (item) => {
      return (
        <div className='projects__div' id='project'>

          <div className='project_cart'>
            <img src={item.image} alt='' />
            <h2 className='project_title'>{item.name}</h2>
            <div className='description'>
              <p>{item.description}</p>
              <div className='btn btn-outer'>
                {/* <a href={item.github}>View</a> */}
                <NavLink target='_blanck' to={item.github} className='btn-view'>Source Code</NavLink>
              </div>
            </div>
          </div>
        </div>
      )
    }
  )
  return ddata;
}

export default Projects;

// {item.name}