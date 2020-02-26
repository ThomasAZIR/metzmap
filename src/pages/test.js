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
import pompidou from "../assets/images_monuments/Centre Pompidou-Metz.jpg"
import catheSE from "../assets/images_monuments/Cathédrale Saint-Etienne Metz.jpg"
import temple9 from "../assets/images_monuments/Temple Neuf.jpg"
import porte_all from "../assets/images_monuments/Porte des Allemands.jpg"
import tour_cam from "../assets/images_monuments/Tour Camoufle de Metz.jpg"
import porte_serp from "../assets/images_monuments/Porte Serpenoise.jpg"
import opera_the from "../assets/images_monuments/Opéra-Théâtre de Metz Métropole.JPG"

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
                <Link to="/cathédraleSE"><h2>Cathédrale Saint-Etienne de Metz</h2></Link>
                    <Link to="/"><img className="listemon" src={catheSE}/></Link>
                <p>Adresse : places d'Armes - 57000 Metz</p>
                <p>Coordonnées : Lat: 49.120476 - Long: 6.175774</p>
                <p>Description : La cathédrale Saint-Étienne de Metz est la cathédrale catholique du diocèse de Metz, dans le département français de la Moselle en région Grand Est.</p>
                </div>
                <div className="sep">
                    <Link to="/DesCentrePompidou"><h2>Centre Pompidou de Metz</h2></Link>
                    <Link to="/DesCentrePompidou"><img className="listemon" src={pompidou}/></Link>
                    <p>Adresse: 1 Parvis des Droits de l'Homme - 57020 Metz</p>
                    <p>Coordonnées: Lat: 49.108359 - Long: 6.181696</p>
                    <p>Description: Musée d'Art </p>
                </div>
                <div className="sep">
                    <Link to=""></Link><h2>Temple Neuf</h2>
                    <Link to="/"><img className="listemon" src={temple9}/></Link>
                    <p>Adresse : Place de la Comédie - 57000 Metz</p>
                    <p>Coordonnées : Lat: 49.120725 - Long: 6.172121</p>
                    <p>Le Temple neuf, ou Nouveau Temple protestant, est un édifice de culte réformé d’Alsace et de Lorraine construit à Metz, entre 1901 et 1905, durant la période wilhelminienne.</p>
                </div>
                <div className="sep">
                    <Link to=""></Link><h2>Porte Serpenoise</h2>
                    <Link to="/"><img className="listemon" src={porte_serp}/></Link>
                    <p>Adresse : 53 Rue Mazelle - 57000 Metz</p>
                    <p>Coordonnées : Lat: 49.112589 - Long: 6.171004</p>
                    <p>La porte Serpenoise est une porte de ville située à l’angle de l’avenue Robert Schuman et de la rue du Général Gaston-Dupuis dans le quartier de Metz-Centre.</p>
                </div>
                <div className="sep">
                    <Link to=""></Link><h2>Tour Camoufle</h2>
                    <Link to="/"><img className="listemon" src={tour_cam}/></Link>
                    <p>Adresse : Square Camoufle - 57000 Metz</p>
                    <p>Coordonnées : Lat: 49.111973 - Long: 6.173487</p>
                    <p>La tour Camoufle est un vestige de l’ancienne enceinte médiévale de Metz en Moselle. C’est l’une des rares tours de l’enceinte médiévale à avoir été conservée.</p>
                </div>
                <div className="sep">
                    <Link to=""></Link><h2>Opéra-Théâtre de Metz Métropôle</h2>
                    <Link to="/"><img className="listemon" src={opera_the}/></Link>
                    <p>Adresse : 5 Place de la Comédie - 57000 Metz</p>
                    <p>Coordonnées : Lat: 49.121898 - Long: 6.172656</p>
                    <p>L'un des premiers théâtres construits en France et le plus ancien théâtre encore en activité.</p>
                </div>
                <div className="last">
                    <Link to="/porte_allemands"><h2>Porte des Allemands</h2></Link>
                    <Link to="/"><img className="listemon" src={porte_all}/></Link>
                    <p>Adresse: Boulevard André Maginot - 57000 Metz</p>
                    <p>Coordonnées: Lat: 49.118054 - Long: 6.185340</p>
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