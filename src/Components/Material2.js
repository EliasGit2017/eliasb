import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Material2() {
    return (
        <div className="cards2">
            <div className="cards__container2">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/proto.jpg"}
                            text="Check out our Prototype"
                            label="Prototype" 
                            gotothis="https://drive.google.com/drive/folders/1dL-aGh1hwKED5McEInfLjDswSzzQq4Ly"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/perso.jpg"}
                            text="Check out the personas we established"
                            label="Personas" 
                            gotothis="https://drive.google.com/drive/folders/1dL-aGh1hwKED5McEInfLjDswSzzQq4Ly"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/design.jpg"}
                            text="Check out the design spaces we made"
                            label="Design Spaces" 
                            gotothis="https://docs.google.com/drawings/d/1soA1DFA3UxM-orSITqIhy7ftkl9_vYGvhPQpHr-ULY8/edit"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/scena.jpg"}
                            text="Check out the scenarios we produced"
                            label="Design Spaces" 
                            gotothis="https://docs.google.com/document/d/1LRJOMg6PkP_45ggzwscWx8EMiK_6-ONvHnQc6Hi2k9Y/edit"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Material2;