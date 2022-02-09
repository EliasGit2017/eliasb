import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out the current work and progress we made for this project!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/lol.jpg"}
                            text="Check out the interview made by Fares"
                            label="Interviews"
                            gotothis="https://github.com/DamienLegros/IHMPROJECT/tree/main/Interviews%20Damien"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/img-11.jpg"} 
                            text="Check out the interview made by Lyna"
                            label="Interviews" 
                            gotothis=""
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/img-12.jpg"}
                            text="Check out the interview made by Elias"
                            label="Interviews" 
                            gotothis="https://drive.google.com/file/d/1-SQugxs4AMUeERDB3Ck0uqccsqMveB_d/view?usp=sharing"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/img-13.jpg"}
                            text="Check out the interview made by David"
                            label="Interviews" 
                            gotothis="https://drive.google.com/file/d/1UVL-AVT88ghu7F3p4kleHaPQg-xzQf3w/view?usp=sharing"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/lost_dav.jpg"}
                            text="Check out the interview made by Lorenzo"
                            label="Interviews" 
                            gotothis="https://drive.google.com/file/d/1gnyQHfrRKaAbh2w-a1LsuyhRkP0R8ruk/view?usp=sharing"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
