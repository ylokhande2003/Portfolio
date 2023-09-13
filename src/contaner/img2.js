import "./img2.css";
import React, { Component } from 'react'
 
class img2 extends Component{
    render(){
        return (
            <div className="Hero-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          );
    };
};
;
export default img2