import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={process.env.PUBLIC_URL+"/videos/food.mp4"} autoPlay loop muted />
            <h1>Cooking project</h1>
            <p>a simple and intuitive solution for indecise food lovers</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Joins US
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Joins US ANYWAY 
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
