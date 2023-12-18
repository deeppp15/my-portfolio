import "./HeroImgProjStyles.css"

import React, { Component } from 'react'

class HeroImgProj extends Component {
    render(){
        return (
            <section id="top">
        <div className="hero-img">
            <div className="heading">
            <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
        </section>
      );
    }
}

export default HeroImgProj