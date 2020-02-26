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
import CSE from "../assets/CSE.jpg";
import CSE2 from "../assets/CSE2.jpg";
import CSE3 from "../assets/CSE3.jpg";

/* We simply can use an array and loop and print each user */
const DesCathedrale = () => {
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
                                src={CSE}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={CSE2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={CSE3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </article>
                <article className="MonuTitre">
                    <p>Cathédrale Saint-Étienne </p>
                </article>
                <article>
                    <Accordion className="Accordeon" defaultActiveKey="0">
                        <Card className="Horaires">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Horraires
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Lundi    : 09:30–12:30 | 13:30–17:30<br/>
                                    Mardi    : 09:30–12:30 | 13:30–17:30<br/>
                                    Mercredi : 09:30–12:30 | 13:30–17:30<br/>
                                    Jeudi    : 09:30–12:30 | 13:30–17:30<br/>
                                    Vendredi : 09:30–12:30 | 13:30–17:30<br/>
                                    Samedi   : 09:30–12:30 | 13:30–17:30<br/>
                                    Dimanche : 14:00-18:00<br/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Description Détaillée
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    La cathedrale St-Etienne de Metz est le monument le plus visite de la ville. Edifice prestigieux, elle est parmi les plus vastes et les plus hautes de France.<br/><br/>
                                    Elle a ete construite a partir de 1220 sous l'impulsion de l'eveque de Metz Conrad de Scharfenberg. Son emplacement n'est pas du au hasard puisque deux edifices religieux l'ont successivement precedee. Le premier d'entre eux, un oratoire, existait deja au moment du sac de la ville par les Huns en 451. Le monument englobe en realite deux batiments : la cathedrale et la collegiale Notre-Dame-la-Ronde, construite vers 1186 et remaniee pour s'inserer a l'ensemble. Les deux tours de la cathedrale marquent la jonction entre ces deux eglises. Le portail de la Vierge, entree actuelle de la cathedrale, etait l'un des portails de Notre-Dame-la-Ronde. Conrad de Scharfenberg choisit d'edifier la cathedrale dans le style gothique, alors en pleine expansion en France et en Europe depuis son apparition un siecle plus tot. La pierre de Jaumont, exploitee a proximite de Metz, fut employee pour l'ensemble du monument et lui donne son eclat dore si caracteristique.<br/><br/>
                                    Elle possede la plus grande surface de vitraux en France (6500 m2).La cathedrale est un edifice de grande envergure. L’interieur frappe par l’elevation de la voute qui culmine a 42 metres, hauteur d’autant plus impressionnante que celle des bas-cotes depasse de peu les 13 metres alors que les fenetres hautes atteignent 14 metres et permettent a la lumiere de penetrer abondamment. La cathedrale fait l’objet d’un classement au titre des monuments historiques depuis le 16 fevrier 1930.<br/><br/>
                                    De plus elle s’honore d’avoir recu la visite du pape Jean-Paul II le 10 octobre 1988, a l’occasion de son voyage en Alsace et en Lorraine.<br/><br/>
                                    La cathedrale de Metz a la particularite de ne pas posseder de "facade harmonique" a la maniere des autres grandes cathedrales gothiques de France (comme a Reims, Paris ou encore Toul), c'est d'ailleurs grace a cette facade singuliere qu'a ete possible la realisation de la grande verriere. Ainsi la cathedrale n'a qu'un seul portail sur sa facade principale.<br/><br/>
                                    Enfin, une visite de la cathedrale ne peut ignorer ses nombreuses richesses interieures. Outre les monuments funeraires, comme ceux du cardinal de Givry et de Paul Dupont des Loges, tous deux eveques de Metz, elle offre a voir son mobilier liturgique, des sculptures religieuses et un important Tresor. Ce dernier renferme des objets cultuels et precieux comme des crosses episcopales, des calices, la chape dite de Charlemagne ou encore l'anneau de saint Arnoul, eveque de Metz au VIIe siecle et ancetre des Carolingiens. Un detour par la crypte de l'edifice permet d'observer les dernieres richesses de la cathedrale. Parmi elles, il est difficile de manquer le Graoully, animal fantastique etroitement lie a l'histoire du christianisme a Metz.

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

export default DesCathedrale;