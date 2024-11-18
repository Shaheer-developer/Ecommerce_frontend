import React from "react";
import "./Hero.css"
import handicon from "../assets/hand_icon.png"
import arrow from '../assets/arrow.png'
import heroimage from '../assets/hero_image.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="heroleft">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={handicon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <button>Latest Collection<img src={arrow} alt="" /></button>
                    </div>
                
            </div>
            <div className="heroright">
                <img src={heroimage} alt="" />
            </div>


        </div>

    )
}

export default Hero