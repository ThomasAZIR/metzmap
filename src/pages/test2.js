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
import ReactNotification from 'react-notifications-component'
import {store} from "react-notifications-component"
import "../utils/animate.css"
import 'react-notifications-component/dist/theme.css'
/* We simply can use an array and loop and print each user */

function Home(){
    const handleOnClickDefault = () => {
        store.addNotification({
            title:"New Card added",
            message : "yes",
            type : "success",
            container: "top-right",
            insert:"top",
            animationIn : ["animated", "fadeIn"],
            animationOut : ["animated", "fadeOut"],

            dismiss:{
                duration:2000
            }
        })
    }
    return(
        <div>
            <button onClick={handleOnClickDefault}>
                default
            </button>
        </div>
    )
}

const TestPage2 = () => {
    return (
        <div className = 'App'>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <body>
            <ReactNotification/>
            <Home />
            <p>Parcours</p>
            </body>

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
                        <Button  variant="sec" className="BoutonMenuSelec"><Link to="/test2"><img src={circuit} className="Picto" alt="circuit" /></Link></Button>
                        <Button  variant="prem" className="BoutonMenu"><Link to="/"><img src={carto} className="Picto" alt="carte" /></Link></Button>
                        <Button  variant="prem" className="BoutonMenu"><Link to="/test"><img src={monum} className="PictoMonu" alt="recherche" /></Link></Button>
                    </ButtonGroup>
                </>
            </footer>

        </div>
    );
};

export default TestPage2;