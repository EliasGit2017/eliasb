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
                            text="Check out the interviews made by Damien"
                            label="Interviews"
                            gotothis="https://github.com/DamienLegros/IHMPROJECT/tree/main/Interviews%20Damien"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/img-11.jpg"} 
                            text="Check out the interviews made by Lydia"
                            label="Interviews" 
                            gotothis="https://github.com/DamienLegros/IHMPROJECT/blob/main/Interviews%20Lydia/IntrvwsLydia.pdf"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/img-12.jpg"}
                            text="Check out the interviews made by Elias"
                            label="Interviews" 
                            gotothis="https://github.com/DamienLegros/IHMPROJECT/tree/main/Interviews%20Elias"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/img-13.jpg"}
                            text="Check out the interviews made by Sarah"
                            label="Interviews" 
                            gotothis="https://github.com/DamienLegros/IHMPROJECT/blob/main/Interviews%20Sarah/interview%20sarah%20-%20R%C3%A9ponses%20au%20formulaire%201.pdf"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/lost_dav.jpg"}
                            text="Check out the interviews made by David"
                            label="Interviews" 
                            gotothis="https://github.com/DamienLegros/IHMPROJECT/blob/main/Interviews%20David/IHM-Interview.pdf"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
