import React from 'react'
import Skill from './skill'
import './skill.css'
const skill = () => {
    return (
        <section id='skills'>
            <h2 style={{ padding: "1rem" }}>My all Skills !</h2>
            <div className="container sevices__container">
                <Skill />
            </div>
        </section>
    )
}

export default skill