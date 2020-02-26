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
import CP from "../assets/images_monuments/CP.jpg";
import CP2 from "../assets/images_monuments/CP2.jfif";

/* We simply can use an array and loop and print each user */
const DesCP = () => {
    return (
        <div className = 'App'>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <body className="Bmonu">
            <section>
                <article className="MonuImage">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={CP2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={CP}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </article>
                <article className="MonuTitre">
                    <p>Tour Camoufle</p>
                </article>
                <article>
                    <Accordion className="Accordeon" defaultActiveKey="0">
                        <Card className="Horaires">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Horaires
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Zone libre d'accès<br/>
                                    Ouvert 24h/24 | 7j/7
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Description Détaillée
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Aux xive et xve siècles, la Lorraine devient le théâtre régulier d’affrontements entre différents seigneurs du Saint-Empire romain germanique. Les ducs de Lorraine,
                                    de Bar, de Luxembourg, les comtes de Deux-Ponts, de Vaudémont, l’archevêque de Trèves, les évêques de Metz, Toul et Verdun, s’allient ou s’opposent au gré des circonstances,
                                    dans un monde fortement marqué par la féodalité.
                                    <br/><br/>
                                    La tour Camoufle est un vestige de l’ancienne enceinte médiévale de Metz en Moselle. Elle est légèrement antérieure à l’extension de la porte des Allemands par Henry de Busdorff : sa
                                    construction est entreprise en 1437 lors du renforcement des sept kilomètres de remparts messins à l’emplacement d’une ancienne tour gallo-romaine. Elle se situe alors à l’angle de la
                                    fausse braie entre la porte Serpenoise qu’elle défend et la porte Saint-Thiébault. Elle est édifiée sous le nom de tour du Champ à Panne et se voit garnie de pièces d’artillerie. Elle
                                    porte le surnom de Jacob de Castel dit « Camoufle », un bombardier messin du xve siècle célèbre pour son adresse, au point d’être soupçonné d’avoir passé un pacte avec le diable.
                                    D’abord tour du rempart médiéval, elle assure sa fonction défensive jusqu’au siège de Charles Quint. Elle porte des traces de boulets, vraisemblablement des sièges de 1444 et 1552.
                                    <br/><br/>
                                    En 1732, Cormontaigne aménage le nouveau rempart Saint-Thiébault et fait garder la tour. À l’époque moderne, compte tenu des progrès de l’artillerie, elle perd de son utilité, mais
                                    elle est conservée sur le rempart sans trop de dommages.
                                    En 1903, lors des travaux d’urbanisme dans le nouveau quartier impérial de Metz, le fossé des remparts est remblayé au moment de la création de l’avenue Foch, enfouissant plus de la
                                    moitié de la tour.
                                    <br/><br/>
                                    La tour Camoufle fait l’objet d’une inscription au titre des monuments historiques depuis le 31 décembre 1929. Elle est aujourd'hui désaffectée mais reste l'une des rares tours de
                                    l'ancienne médiévale à avoir été conservée.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </article>
                <article className="MonuInfo">
                    <p id="Emp">Emplacement :</p>
                    <p id="Adresse">Place d'Armes, 57000 Metz</p>
                    <Button id="vp" variant="warning">Voir sur la Map</Button>
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

export default DesCP;