import "./footer.css";
import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { BsInstagram, BsGithub } from 'react-icons/bs'

export const footer = () => {
    return (
        <div className="footer">
            <div className="fotter-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white" }} />
                        <div>
                            <p className="hii"> Maharashatra, aurangabad</p> </div>
                    </div>
                    <div className="location">
                        <FaPhoneAlt size={20} style={{ color: "white" }} />
                        <div>
                            <p className="hii"> 7775058622</p> </div>
                    </div>
                    <div className="location">
                        <FaMailBulk size={20} style={{ color: "white" }} />
                        <div>
                            <p className="hii"> yashlokhande20@gmail.com</p> </div>
                    </div>
                </div>

                <div className="right">
                    <h4>Abut me</h4>
                    <p>100 DSA @ LeetCode+GFG | Full Stack Developer(Node Js + React Js + Flutter + HTML + CSS + JavaScript) | CSE Grade '24</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/yash-lokhande-34a313227/" target="_blanck" rel="noreferrer"><FaLinkedin size={30} style={{ color: "white", margin: "10px" }} /></a>
                        <a href="https://github.com/ylokhande2003" target="_blanck" rel="noreferrer"><BsGithub size={30} style={{ color: "white", margin: "10px" }} /></a>
                        <a href="https://www.instagram.com/_yash___20/" target="_blanck" rel="noreferrer"><BsInstagram size={30} style={{ color: "white", margin: "10px" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default footer