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
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import PA from "../assets/PA.jpg";
import PA2 from "../assets/PA2.jpg";
import PA3 from "../assets/PA3.jpg";
import App from "../App";


/* We simply can use an array and loop and print each user */
const DesPorteDesAllemands = () => {
    return (
        <div className = 'App'>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <body className="Bmonu">
            <section>
                <article id="MonuImageTN">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={PA}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={PA2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={PA3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </article>
                <article className="MonuTitre">
                    <p>Porte des Allemands </p>
                </article>
                <article>
                    <Accordion className="Accordeon" defaultActiveKey="0">
                        <Card className="Horaires">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Horraires
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Lundi    : FERMEE<br/>
                                    Mardi    : 14:00–19:00<br/>
                                    Mercredi : 14:00–19:00<br/>
                                    Jeudi    : 14:00–19:00<br/>
                                    Vendredi : 14:00–19:00<br/>
                                    Samedi   : 14:00–19:00<br/>
                                    Dimanche : 14:00-19:00<br/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Description Détaillée
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Construite au XIIIe siecle, la porte des Allemands est un symbole du passe medieval de Metz, Ville d’art et d’histoire. Cet ouvrage defensif est le seul vestige encore en elevation des portes medievales de la ville. Son imposante et majestueuse silhouette est, depuis sa reouverture au public le 7 juin 2014, l’ecrin privilegie de nombreuses manifestations culturelles. Elle sert de pont sur la Seille du XIIIe siecle au debut du XXe siecle. L’edifice est aujourd’hui le plus important vestige des remparts medievaux messins et temoigne de l’evolution de l’architecture militaire de Metz au Moyen age.<br/><br/>
                                    Mentionnee des 12671, l’edifice etait l'une des sept principales portes de la cite, qui en comptait douze autres, moins importantes, a l'epoque medievale. A la fois porte et pont fortifies, l’edifice enjambe la Seille au niveau du pont Henry-de-Ranconval qui relie aujourd'hui la voie rapide Est au boulevard Andre-Maginot, ce dernier ayant remplace les remparts au debut du XXe siecle. La porte fortifiee dominait la ligne d’enceinte orientale sur pres de 1 200 m, depuis la porte Mazelle jusqu’a la porte Sainte-Barbe. La porte des Allemands fait partie des remparts medievaux de Metz. Veritable porte-forteresse, dotee de tours, de creneaux et de machicoulis, la porte des Allemands doit son nom aux chevaliers de l'Ordre Teutonique, ou « Freres hospitaliers de Notre-Dame-des-Allemands », installes a cette epoque dans une rue voisine. Leur hospice fut detruit par Francois de Guise, lors du siege de Metz de 1552.<br/><br/>
                                    Depuis son inauguration en juin 2014, la Porte des Allemands est un lieu culturel pluridisciplinaire. Elle propose depuis avril 2016 un accueil scolaire destine aux ecoles maternelles et elementaires. L'occasion sera offerte de decouvrir l'histoire et l'architecture du batiment a travers des ateliers interactifs (contes, jeux de construction, chasses aux tresors …).<br/><br/>
                                    De plus La porte des Allemands est un edifice classe au titre des monuments historiques depuis le 3 decembre 1966.<br/><br/>
                                    Il est aussi classe comme un etablissement recevant du Public (ERP) de type L (salles d’audition, reunions, conferences, spectacles et a usages multiples) avec une activite de type N (restauration et debit de boissons), et de type T (salles d’expositions), il peut accueillir jusqu’a 446 personnes reparties dans tous les espaces accessibles.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </article>
                <article className="MonuInfo">
                    <p id="Emp">Emplacement :</p>
                    <p id="Adresse">Boulevard André Maginot, 57000 Metz</p>
                    <Link to={"/"} > <Button onClick={App.centrerPorteAll()} id="vp" variant="warning">Voir sur la carte</Button> </Link>
                </article>

            </section>


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
                        <Button  variant="prem" className="BoutonMenu"><Link to="/test2"><img src={circuit} className="Picto" alt="circuit" /></Link></Button>
                        <Button  variant="prem" className="BoutonMenu"><Link to="/"><img src={carto} className="Picto" alt="carte" /></Link></Button>
                        <Button  variant="sec" className="BoutonMenuSelec"><Link to="/test"><img src={monum} className="PictoMonu" alt="recherche" /></Link></Button>
                    </ButtonGroup>
                </>
            </footer>

        </div>
    );
};

export default DesPorteDesAllemands;