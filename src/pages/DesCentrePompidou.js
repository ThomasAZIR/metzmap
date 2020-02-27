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
                    <p>Centre Pompidou </p>
                </article>
                <article>
                    <Accordion className="Accordeon" defaultActiveKey="0">
                        <Card className="Horaires">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Horaires
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Lundi    : 10:00-18:00 <br/>
                                    Mardi    :    Fermé    <br/>
                                    Mercredi : 10:00-18:00 <br/>
                                    Jeudi    : 10:00-18:00 <br/>
                                    Vendredi : 10:00-18:00 <br/>
                                    Samedi   : 10:00-18:00 <br/>
                                    Dimanche : 10:00-18:00<br/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Description Détaillée
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Le centre Pompidou-Metz (CPM) est un établissement public de coopération culturelle d’art situé à Metz, entre le parc de la Seille et la gare. Sa construction est réalisée dans le cadre de l’opération d’aménagement du quartier de l’Amphithéâtre.<br/><br/>
                                    Sa création est la première expérience de décentralisation d’un établissement public culturel, en l’occurrence le centre national d'art et de culture Georges-Pompidou de Paris. Perçu comme élément fondateur du nouveau quartier de l’Amphithéâtre, il a ouvert ses portes le 12 mai 2010. Les architectes associés sont: Shigeru Ban, Jean de Gastines, et Philip Gumuchdjian. Le maître d’ouvrage est la communauté d’agglomération de Metz Métropole en partenariat avec le centre Pompidou. La ville de Metz est mandataire du maître d’ouvrage. Le projet est également financé par la ville de Metz, le conseil général de la Moselle, le conseil régional de Lorraine, l’État et la Communauté européenne. L’édifice est réalisé par l’entreprise de construction Demathieu & Bard.<br/><br/>
                                    La première pierre a été posée le 7 novembre 2006 par Claude Pompidou, épouse de Georges Pompidou. Le centre s’inscrit dans un projet d’urbanisation du quartier de l’Amphithéâtre au lieu d’anciennes friches ferroviaires. Engagé par Metz-Métropole, le nouveau quartier est dédié aux affaires, au commerce et à l’habitation, dans une démarche de haute qualité environnementale (HQE).<br/><br/>
                                    L’architecture de l’édifice est inspirée d’un chapeau chinois traditionnel acheté par Shigeru Ban à la Maison de la Chine dans le quartier de Saint-Germain-des-Prés à Paris.<br/><br/>
                                    Créé en 2010, le centre Pompidou-Metz est l'un des musées français les plus visités hors de Paris , du fait notamment de sa proximité avec l'Allemagne, le Luxembourg et la Belgique.<br/><br/>
                                    Le budget total de l’opération se monte à 69,33 millions d’euros hors taxes en 2009. Il comprend 51,66 millions € hors taxes pour les travaux de construction du bâtiment et 17,67 millions € hors taxes pour les honoraires, le mobilier, les aménagements intérieurs et extérieurs et les frais divers. La communauté d’agglomération de Metz-Métropole finance majoritairement le projet à hauteur de 43,33 millions €. Les autres financements proviennent de l’État (4 millions €), de l’Union européenne à travers le plan Feder (2 millions €), de la région Lorraine (10 millions €) et du département de la Moselle (10 millions €).
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </article>
                <article className="MonuInfo">
                    <p id="Emp">Emplacement :</p>
                    <p id="Adresse">Place d'Armes, 57000 Metz</p>
                    <Link to={"/"} > <Button onClick={App.centrerCentrePom()} id="vp" variant="warning">Voir sur la carte</Button> </Link>
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