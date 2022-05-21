import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={process.env.PUBLIC_URL+"/videos/float.mp4"} autoPlay loop muted />
            <h1>Elias Bendjaballah</h1>
            <p>Functional programming enthusiast</p>
            <p>Sorbonne University graduate student</p>
            <p>Operations Research, Multi-Agents Systems and Game/Decision Theory</p>
            {/* <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Joins US
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Joins US ANYWAY 
                </Button>
            </div> */}
        </div>
    );
}

export default HeroSection;
