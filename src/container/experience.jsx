import React from 'react'
import './experience.css'

import exp from '../JSON/experience.json'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const experience = () => {
    const ddata = exp.map(
        (item) => {
            return (

                <section id='experience' className='container experience__container'>
                    <div className="experience">
                        <div className="role">
                            <h3> Role :{item.role}</h3>
                            <img className='job' src={item.img} alt="" />
                        </div>
                        <div className="desc">
                            <p className='text-light'>Company Name : {item.company}</p>
                            <p className='text-light'><BsFillPatchCheckFill className='text-primary checkic' />{item.p1}</p>
                            <p className='text-light'><BsFillPatchCheckFill className='text-primary checkic' /> {item.p2}</p>
                            <p className='text-light'><BsFillPatchCheckFill className='text-primary checkic' /> {item.p3}</p>
                            <p className='text-primary technologies'><BsFillPatchCheckFill className='text-primary checkic' /> {item.Technologies}</p>

                        </div>
                    </div>
                </section>

            )
        })
    return ddata;
}

export default experience