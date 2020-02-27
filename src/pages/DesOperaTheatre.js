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
import CP from "../assets/OT.jpg";
import CP2 from "../assets/OT2.jpg";
import App from "../App";

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
                    <p>Opéra-Théâtre de Metz Métropole </p>
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
                                    L’ile du Petit Saulcy, entouree par le bras de la Moselle, doit son nom aux saules plantes sur ses rives pour retenir la terre. Autrefois nommee ile du Grand Saulcy, cette lande boueuse
                                    et inhabitee servait de depot de bois de chauffage. La ville decide de paver l’ile en 1732 et d’y construire l’« Hotel des Spectacles ». Elle dote l’ile de quais. De nouveaux ponts la
                                    relient au quartier des Roches et a la ville haute, et a l’extremite de l’ile Chambiere. Le theatre contribue des son origine a l’ordonnancement d’une place moderne dont il constitue la
                                    facade aux cotes de deux autres edifices de facture homogene : le pavillon Saint-Marcel, et celui de la Douane. C’est la premiere place moderne que fait realiser le gouverneur de la ville,
                                    le duc de Belle-Isle.
                                    <br/><br/>
                                    L’hotel des Spectacles, futur theatre, puis opera-theatre de Metz, aujourd’hui opera-theatre de Metz Metropole, Metzer Operatheater (en allemand) est l’un des premiers theatres construits
                                    en France et le plus ancien theatre encore en activite. Avant sa construction place de la Comedie, la salle de jeu de paume « Chatin », a cote de l’hotel Gargan en Nexirue, servait de
                                    salle de theatre. Le batiment est construit de 1738 a 1752 dans un style classique. le theatre est erige selon le projet de l’architecte messin Jacques Oger. L’edifice a vu ses travaux
                                    suspendus durant huit ans par la guerre de Succession d’Autriche. Inaugure par un bal public le 3 fevrier 1752, ce theatre a l’italienne est le plus ancien de France encore en activite.
                                    Un peristyle forme de vingt-et-une arcades est construit en 1754, pour reunir les trois pavillons, dotant le theatre d’une terrasse, au centre de la composition architecturale. Sous le
                                    fronton, on devine une inscription gravee dans la pierre a l’epoque revolutionnaire.
                                    <br/><br/>
                                    En 1858, le sculpteur Charles Petre agremente la facade du theatre au niveau de son couronnement, avec les allegories de la Tragedie, l’Inspiration, la Poesie lyrique, la Comedie, et la
                                    Musique. L’interieur actuel du theatre date egalement de cette epoque. Les agrafes des arcades du rez-de-chaussee sont ornees de figures feminines et de tetes de satyres aux regards
                                    grivois. En 1868, une gigantesque fontaine —?qui a depuis disparu?—, est elevee au centre de la place, celebrant l’arrivee des eaux de Gorze a Metz. En 1887, la ville redoute les incendies
                                    dus aux lampes a huiles et souhaite eclairer son theatre a l’electricite. Le moulin des Thermes est alors equipe de deux turbines et devient la premiere usine de production electrique.
                                    Il fournissait aussi l’eclairage public des places de Metz.
                                    <br/><br/>
                                    L’hotel des Spectacles, qui deviendra l’opera-theatre de Metz est le plus ancien theatre en activite de France, puisqu’il n’a pas change d’affectation depuis son inauguration en 1752.
                                    Au cours de son histoire, de nombreuses troupes se sont produites dans la salle de Metz et de grands noms y ont joue ou travaille : Sarah Bernhardt dans la Tosca en 1905, ou Jean Cocteau
                                    pour les decors de Pelleas dans les annees 1960. Le theatre fonctionne aujourd’hui en permanence avec plus de 103 personnes. Il est l’un des derniers operas francais a posseder ses propres
                                    ateliers, où se creent costumes et decors.
                                    <br/><br/>
                                    Le theatre, pour ses facades et toitures, fait l’objet d’un classement au titre des monuments historiques depuis le 6 janvier 1930. L’opera-theatre de Metz, place sous la tutelle de la
                                    communaute d’agglomeration de Metz Metropole, est membre de la Reunion des operas de France.

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </article>
                <article className="MonuInfo">
                    <p id="Emp">Emplacement :</p>
                    <p id="Adresse">Place d'Armes, 57000 Metz</p>
                    <Link to={"/"} > <Button onClick={App.centrerOperaMarqueur()} id="vp" variant="warning">Voir sur la carte</Button> </Link>
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