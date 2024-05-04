import React from 'react'
import './skill.css'
import data from '../JSON/skill.json'

const Skill = function Each() {


    const ddata = data.map(
        (item) => {
            return (
                <div className="container sevices__container">
                    <div className='skill'>
                        <img className='skill-img' src={item.image} alt="" />
                        <h5>{item.name}</h5>
                    </div>
                </div>

            )
        }
    )
    return ddata;

}
export default Skill