import React from 'react'
import Each from './educationEach'
const education = () => {
    return (
        <section id='education' className='container education' style={{ margin: "5rem 0" }}>
            <h5>Get To Know</h5>
            <h2>My Education !</h2>
            <Each />
        </section>
    )
}

export default education