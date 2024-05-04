import React from 'react'
import './contact.css'

import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wjaya18', 'template_j5149id', form.current, 'PkvHqw1jjaSOLNaXw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section id='contact' className='container contact__container' style={{ margin: "5rem 0" }}>
            <h5>Send a message</h5>
            <h2>Contact Me!</h2>
            <div className="contact">

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" placeholder='Message' required></textarea>
                    <button className='btn btn-primary' type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact