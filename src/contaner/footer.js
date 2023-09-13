import "./footer.css";
import React from 'react'
import { FaBlenderPhone, FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaPhoneAlt, FaPhoneSquare, FaTwitter } from "react-icons/fa";

export const footer = () => {
  return (
    <div className="footer">
        <div className="fotter-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white"}}/>
                    <div>
                    <p className="hii"> hii aurangabad</p> </div>
                </div>
                <div className="location">
                    <FaPhoneAlt size={20} style={{color:"white"}}/>
                    <div>
                    <p className="hii"> 7775058622</p> </div>
                </div>
                <div className="location">
                    <FaMailBulk size={20} style={{color:"white"}}/>
                    <div>
                    <p className="hii"> yashlokhande20@gmail.com</p> </div>
                </div>
                {/* <div className="email">
                <h4><FaMailBulk size={20} style={{color:"white"}}/>
                     yashlokhande20@gmail.com</h4>
                </div> */}
            </div>

            <div className="right">
                <h4>Abut me</h4>
                <p>xcy text h iudhfhj nuhuifghk uhfn fuypiuerfg yghf 9uyfuioshf</p>
                <div className="social">
                <FaLinkedin size={30} style={{color:"white",margin:"10px"}}/>
                <FaTwitter size={30} style={{color:"white",margin:"10px"}}/>
                <FaFacebook size={30} style={{color:"white",margin:"10px"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default footer