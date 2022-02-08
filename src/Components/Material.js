import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Material() {
    return (
        <div className="cards2">
            <h1>Where you can find all the relevant material we made during our working sessions !</h1>
            <div className="cards__container2">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/inte.jpg"}
                            text="Check out our interaction points"
                            label="Interaction points" 
                            gotothis="https://drive.google.com/drive/folders/1dL-aGh1hwKED5McEInfLjDswSzzQq4Ly"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/brain.jpg"}
                            text="Check out our brainstorming session on Connexion!"
                            label="Brainstorming"
                            gotothis="https://jamboard.google.com/d/1qtFQzeYa3hW5s8hXTv3b2G5vx1f4eXfrUakhJfN4n-0/viewer"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/brain2.jpg"} 
                            text="Check out our brainstorming session on Synchronisation"
                            label="Brainstorming" 
                            gotothis="https://jamboard.google.com/d/1H2imkMWmIbyple-2fRrZMvt9lAKgnRBBvnWiEw9crEs/viewer"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/story.jpg"}
                            text="Check out our first storyboard"
                            label="StoryBoard" 
                            gotothis="https://drive.google.com/drive/folders/1dL-aGh1hwKED5McEInfLjDswSzzQq4Ly"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/story2.jpg"}
                            text="Check out our second storyboard"
                            label="StoryBoard" 
                            gotothis="https://drive.google.com/drive/folders/1dL-aGh1hwKED5McEInfLjDswSzzQq4Ly"
                        />
                        
                        
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/proto.jpg"}
                            text="Check out the personas we established"
                            label="Personas" 
                            gotothis="https://drive.google.com/drive/folders/1dL-aGh1hwKED5McEInfLjDswSzzQq4Ly"
                        />{/*
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/proto.jpg"}
                            text="Check out the design spaces we established"
                            label="Design Spaces" 
                            gotothis="https://docs.google.com/drawings/d/1soA1DFA3UxM-orSITqIhy7ftkl9_vYGvhPQpHr-ULY8/edit"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/scena.jpg"}
                            text="Check out the design spaces we established"
                            label="Design Spaces" 
                            gotothis="https://docs.google.com/drawings/d/1soA1DFA3UxM-orSITqIhy7ftkl9_vYGvhPQpHr-ULY8/edit"
                        />*/}
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Material;