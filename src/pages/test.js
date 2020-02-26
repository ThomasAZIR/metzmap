/*users.jsx*/
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import logo from "../assets/logoo.png";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import marqueursPerso from "../utils/marqueursPerso";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import circuit from "../assets/circuitb.png";
import carto from "../assets/carteb.png";
import monum from "../assets/rechercheb.png";
/* We simply can use an array and loop and print each user */
const TestPage = () => {
    return (
        <div className = 'App'>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <h1>Liste des monuments</h1>
            <div className="liste">
            <div className="sep">
                <h2>Centre Pompidou de Metz</h2>
                <p>Adresse: 1 Parvis des Droits de l'Homme - 57020 Metz</p>
                <p>Coordonnées: Lat: 49.108359 / Long: 6.181696</p>
                <p>Description: Musée d'Art </p>
            </div>
            <div className="last">
                <h2>Porte des Allemands</h2>
                <p>Adresse: Boulevard André Maginot - 57000 Metz</p>
                <p>Coordonnées: Lat: 49.118054 / Long: 6.185340</p>
                <p>Description: Site Historique</p>
            </div>
            </div>

            <footer className="App-footer">
                <>
                    <style type="text/css">
                        {`
                        .btn-prem {
                        background-color: lightseagreen;
                                  }
                    `}
                    </style>
                    <style type="text/css">
                        {`
                        .btn-sec {
                        background-color: darkslategrey;
                                  }
                    `}
                    </style>
                    <ButtonGroup className="BarreBouton" aria-label="Basic example">
                        <Button  variant="prem" className="BoutonMenu"><Link to="/test2"><img src={circuit} className="Picto" alt="circuit" /></Link></Button>
                        <Button  variant="prem" className="BoutonMenu"><Link to="/"><img src={carto} className="Picto" alt="carte" /></Link></Button>
                        <Button  variant="sec" className="BoutonMenuSelec"><Link to="/test"><img src={monum} className="PictoMonu" alt="recherche" /></Link></Button>
                    </ButtonGroup>
                </>
            </footer>

        </div>
    );
};

export default TestPage;