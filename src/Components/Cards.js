import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Some of my personal & academic projects are listed below :</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/s1_docs.png"}
                            text="Digodoc : an Ocaml documentation explorer"
                            label="Ocaml"
                            gotothis="https://github.com/EliasGit2017/digodoc"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/g_opt.png"} 
                            text="Operations Research : Modelization & Optimization applied to health models"
                            label="Python" 
                            gotothis="https://github.com/EliasGit2017/Optimisation-localisation-unites-de-soins-et-prise-en-charge"
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/sud.png"}
                            text="Sudoku Game with integrated SAT solver. In depth exploration of Clojure"
                            label="Clojure" 
                            gotothis="https://github.com/EliasGit2017/Clojure_Sudoku_Game-Solver.git"
                        />

                        {/* Improve this by adding new elements when available */}

                        {/* <CardItem 
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
                        /> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
