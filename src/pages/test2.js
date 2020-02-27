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
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import MM2 from "../assets/MM2.jpg";
import MM3 from "../assets/MM3.jpg";
import CO from "../assets/CO.jpg";
import CO2 from "../assets/CO2.jpg";
import MI from "../assets/MI.jpg";
import MI2 from "../assets/MI2.jpg";
import MO from "../assets/MO.jpg";
import MO2 from "../assets/MO2.jpg";
import EG from "../assets/EG.jpg";
import EG2 from "../assets/EG2.jpg";
import KA from "../assets/KA.jpg";
import KA2 from "../assets/KA2.jpg";
import KAY from "../assets/KAY.jpg";
import KAY2 from "../assets/KAY2.jpg";
import MU from "../assets/MU.jpg";
import MU2 from "../assets/MU2.jpg";

/* We simply can use an array and loop and print each user */

const TestPage2 = () => {
    return (
        <div className = 'App'>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <body className="Bevents">
            <p id="eventsmetz">Evenements :</p>
            <Accordion className="Accordeon">


                <Card>
                    <Accordion.Toggle className="Accorder" as={Card.Header} eventKey="0">
                        Marathon de Metz
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={MM2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={MM3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <article className="EventDes">
                                <br/><br/>
                                Tracé au coeur du patrimoine lorrain, le marathon de Metz Mirabelle est l’un de plus beaux de France. Son parcours roulant permettra à chacun de réaliser un temps de référence (course classante et qualificative) dans une ambiance festive et conviviale.<br/>
                                Un challenge à relever en famille ou entre amis le 18 octobre 2020.
                                <br/><br/><br/>
                            </article>
                            <article className="MonuInfo">
                                <p id="Emp">Tarifs d’inscriptions 2020</p>
                                <p id="Adresse">Jusqu'au 8 juin : 37 €<br/>
                                Du 9 juin au 7 septembre : 48 €<br/>
                                Du 8 septembre au 16 octobre : 57 €</p>
                            </article>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Accordion.Toggle className="Accorder" as={Card.Header} eventKey="1">
                        Constellation de Metz
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="Accord">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={CO}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={CO2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <article className="EventDes">
                                <br/><br/>
                                Porté depuis 2017 par la Ville de Metz et ses partenaires, Constellations de Metz est un festival d’arts numériques qui se déroule de juin à septembre. En lien avec l’identité « Art & Tech » du territoire messin, ce festival s’attache à mettre en valeur le patrimoine et l’espace urbain de la ville.<br/>
                                Constellations de Metz invite à une interprétation de la ville à travers le regard d’artistes venus de tous horizons. Durant plus de deux mois, l’art investit les rues et permet aux visiteurs de découvrir le territoire, à travers parcours artistiques, projections, spectacles, expositions et concerts.
                                <br/><br/><br/>
                            </article>
                            <article className="MonuInfo">
                                <p id="Emp">Dates 2020</p>
                                <p id="Adresse">25 juin au 5 septembre 2020</p>
                                <p id="Emp"> Parcours :</p>
                                    <p id="Adresse">Pierres Numériques<br/>
                                    Street Art<br/>
                                    Art et Jardin<br/></p>
                            </article>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Accordion.Toggle className="Accorder" as={Card.Header} eventKey="2">
                        Fete de la Mirabelle
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="Accord">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={MI}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={MI2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <article className="EventDes">
                                <br/><br/>
                                Les fêtes de la Mirabelle ont lieu chaque année au mois d'août à Metz dans le but de célébrer et promouvoir ce fruit emblématique de la Lorraine. Tous les ans, elles attirent près de 80000 visiteurs.<br/>
                                Durant quinze jours ont lieu de nombreuses animations autour de la mirabelle comme des dîners spectacles, des concerts, des bals, une fête foraine, un feu d'artifice, une parade et des points de découvertes culinaires. Un grand marché aux produits du terroir et de l'artisanat avec une centaine d'exposants réunis sur deux jours permet au public de rencontrer les producteurs de mirabelles, mais aussi les pâtissiers, les chocolatiers et les apiculteurs de la région.
                                <br/><br/><br/>
                            </article>
                            <article className="MonuInfo">
                                <p id="Emp">Dates 2020</p>
                                <p id="Adresse">Aout 2020<br/></p>
                            </article>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Accordion.Toggle className="Accorder" as={Card.Header} eventKey="3">
                        Les Montgolfiades de Metz 2020
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="Accord">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={MO}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={MO2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <article className="EventDes">
                                <br/><br/>
                                Au fil des années, les Montgolfiades de Metz sont devenues une manifestation aérostatique des plus populaires. À la fin du mois d'août, les montgolfières envahissent le ciel messin pour le plus grand bonheur du public.
                                Ce grand meeting d'aérostats et de montgolfières est rendez-vous incontournable de la fin de l'été auquel participent de nombreux clubs et pilotes, passionnés de ballons et de montgolfières.
                                Chaque été, plusieurs dizaines de montgolfières sont réunies du côté de Metz, autour du plan d’eau. Les pilotes et instructeurs de l'APIMM (Association des Pilotes de Montgolfières de Moselle) invitent leurs homologues d’autres associations pour ce meeting estival - à l’image du rassemblement de montgolfières à Chambley et ses quelques 1 000 pilotes présents.
                                <br/><br/><br/>
                            </article>
                            <article className="MonuInfo">
                                <p id="Emp">Dates 2020</p>
                                <p id="Adresse">Aout 2020<br/></p>
                            </article>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>

            <p id="eventsmetz">Activités :</p>
            <Accordion className="Accordeon">


                <Card>
                    <Accordion.Toggle className="Accorder" as={Card.Header} eventKey="0">
                        Shopping au Muse
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={MU}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={MU2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <article className="EventDes">
                                <br/><br/>
                                Muse centre commercial à Metz quartier de l'Amphithéâtre Une collection exceptionnelle de 115 boutiques et restaurants.Des marques inédites et des pop-up stores, une palette unique de services, des espaces accueillants et surprenants. Un parcours d’oeuvres d’art spécialement créées pour vous par de grands artistes…
                                <br/><br/><br/>
                            </article>
                            <article className="MonuInfo">
                                <p id="Emp">Horaire :</p>
                                <p id="Adresse">LUNDI : 08:30–20:00<br/>
                                                MARDI : 08:30–20:00<br/>
                                                MERCREDI : 08:30–20:00<br/>
                                                JEUDI : 08:30–20:00<br/>
                                                VENDREDI : 08:30–20:00<br/>
                                                SAMEDI : 08:30–20:00<br/>
                                                DIMANCHE : Fermé
                                                </p>
                            </article>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Accordion.Toggle className="Accorder" as={Card.Header} eventKey="1">
                        Kayak Club de Metz
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="Accord">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={KAY}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={KAY2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <article className="EventDes">
                                <br/><br/>
                                Parcourez la Moselle au centre ville de Metz et venez découvrir ses rives abritant une faune et une flore sauvage.<br/>
                                Apprenez au milieu du plan d’eau et naviguez aux pieds des magnifiques monuments de la ville de Metz. Une occasion de s’initier avec notre club de canoë kayak.
                                <br/><br/><br/>
                            </article>
                            <article className="MonuInfo">
                                <p id="Emp">Horaires :</p>
                                <p id="Adresse">LUNDI : 10:00–18:00<br/>
                                    MARDI : 10:00–18:00<br/>
                                    MERCREDI : 10:00–18:00<br/>
                                    JEUDI : 10:00–18:00<br/>
                                    VENDREDI : 10:00–18:00<br/>
                                    SAMEDI : 10:00–18:00<br/>
                                    DIMANCHE : Fermé
                                </p>
                                <p id="Emp"> Adresse :</p>
                                <p id="Adresse">2 Prom. Hildegarde, 57050 Longeville-lès-Metz</p>
                            </article>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Accordion.Toggle className="Accorder" as={Card.Header} eventKey="2">
                        Escape Hunt Metz
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="Accord">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={EG}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={EG2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <article className="EventDes">
                                <br/><br/>
                                Escape Hunt Metz est un Live Escape Game. Situé à Augny, vous pouvez venir jouer dans l'un des Escape Hunt les plus grands de France ! Dans la peau de détectives en herbe, vous êtes enfermés dans une pièce par équipe de 2 à 5 joueurs et disposez de 60 minutes pour collecter des indices et résoudre une série d'énigmes pour progresser vers la sortie avant la fin du temps imparti. Une véritable course contre la montre dans laquelle esprit d'équipe et rapidité seront vos meilleurs alliés.
                                <br/><br/><br/>
                            </article>
                            <article className="MonuInfo">
                                <p id="Emp">Horaires :</p>
                                <p id="Adresse">LUNDI : 14:00–22:00<br/>
                                    MARDI : 14:00–22:00<br/>
                                    MERCREDI : 14:00–22:00<br/>
                                    JEUDI : 14:00–22:00<br/>
                                    VENDREDI : 14:00–23:30<br/>
                                    SAMEDI : 11:00–00:00<br/>
                                    DIMANCHE : 14:00-22:00
                                </p>
                                <p id="Emp"> Adresse :</p>
                                <p id="Adresse">Parc Aravis - Zac d'Augny, 11 Allée des Tilleuls, 57130 Jouy-aux-Arches</p>
                            </article>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Accordion.Toggle className="Accorder" as={Card.Header} eventKey="3">
                        Metz Kart Indoor
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="Accord">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={KA}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={KA2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <article className="EventDes">
                                <br/><br/>
                                Situé à Augny, notre établissement vous propose de pratiquer les activités de loisirs du karting, du bowling et du laser games.<br/>
                                Venez en famille ou entre amis faire chauffer la gomme sur la piste couverte de Metz Kart Indoor ou bien passez un moment de détente agréable dans l'ambiance feutrée du bowling de l'étoile.<br/>
                                De nombreuses formules, en groupes ou individuelles, vous sont proposées alors venez vous amuser.
                                <br/><br/><br/>
                            </article>
                            <article className="MonuInfo">
                                <p id="Emp">Horaires :</p>
                                <p id="Adresse">LUNDI : FERME<br/>
                                    MARDI : 14:00–00:00<br/>
                                    MERCREDI : 14:00–00:00<br/>
                                    JEUDI : 14:00–00:00<br/>
                                    VENDREDI : 14:00–00:00<br/>
                                    SAMEDI : 14:00–00:00<br/>
                                    DIMANCHE : 14:00-23:00
                                </p>
                                <p id="Emp"> Adresse :</p>
                                <p id="Adresse">Zone d'Activité Commerciale D, Rue Carcantin, 57685 Augny</p>
                            </article>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
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