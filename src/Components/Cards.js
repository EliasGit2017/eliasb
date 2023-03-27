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
                            src={process.env.PUBLIC_URL + "/images/s1_docs.png"}
                            text="Digodoc : an Ocaml documentation explorer"
                            label="Ocaml"
                            gotothis="https://github.com/EliasGit2017/digodoc"
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + "/images/g_opt.png"}
                            text="Operations Research : Modelization & Optimization applied to health models"
                            label="Python"
                            gotothis="https://github.com/EliasGit2017/Optimisation-localisation-unites-de-soins-et-prise-en-charge"
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + "/images/serv_arch.png"}
                            text="SMT & Theorem provers server (designed as a StraExec clone)"
                            label="OCaml"
                            gotothis="https://github.com/EliasGit2017/ProofBox.git"
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + "/images/dockerhub.png"}
                            text="Docker images of the alt-ergo SMT solver"
                            label="OCaml"
                            gotothis="https://github.com/EliasGit2017/alt-ergo-docker-images.git"
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + "/images/sud.png"}
                            text="Sudoku Game with integrated SAT solver. In depth exploration of Clojure"
                            label="Clojure"
                            gotothis="https://github.com/EliasGit2017/Clojure_Sudoku_Game-Solver.git"
                        />
                        {/* Improve this by adding new elements when available */}

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
