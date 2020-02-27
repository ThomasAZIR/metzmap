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
import TN from "../assets/TN.jpg"
import TN2 from "../assets/TN2.jpg"
import App from "../App";


/* We simply can use an array and loop and print each user */
const DesTempleNeuf = () => {
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
                                src={TN}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={TN2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </article>
                <article className="MonuTitre">
                    <p>Temple Neuf </p>
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
                                    Le Temple neuf, ou Nouveau Temple protestant, est un édifice de culte réformé d’Alsace et de Lorraine construit à Metz, entre 1901 et 1905, durant la période wilhelminienne. Le contexte historique de l'époque est celui de l'Alsace-Lorraine rattachée au deuxième Reich allemand suite au traité de Francfort.<br/><br/>
                                    À l'époque du rattachement de Metz et du Nord-Est de la Lorraine à l'Empire Allemand (district de Lorraine), la ville se transforme sous l’action des autorités qui décident de faire de son urbanisme une vitrine de l’empire wilhelmien. L’éclectisme architectural se traduit par l’apparition de nombreux édifices de style néoroman, tels la poste centrale, le « Temple neuf », ou la nouvelle gare ferroviaire ; de style néogothique, tels le portail de la cathédrale et le temple de Garnison, ou encore de style néo-Renaissance, tel le palais du Gouverneur. Le « Temple neuf » illustre cette politique de germanisation par l’architecture, déployée par Guillaume II, pour asseoir son emprise sur la ville. Cette politique de modernisation architecturale tous azimuts, marquée par de nombreux édifices dans tout le département de la Moselle, avait pour but de séduire les populations annexées en leur démontrant le profit d'un "retour" dans le giron de l'Empire allemand.<br/><br/>
                                    En 1898, la municipalité de Metz accorde à la communauté réformée un terrain planté de saules, appelé « jardin d’Amour »1, sur l’île du Petit-Saulcy, pour l'érection d'un temple de style néo-roman rhénan. L’architecte retenu pour le projet est Conrad Wahn, l'architecte en chef de la Ville de Metz. Ce dernier, expérimenté, avait déjà travaillé en Moselle sur de nombreux projets architecturaux, tant religieux que civils. Loin d'être une réplique servile d’un modèle existant, le projet de Wahn relève d’une approche stylistique volontairement « archéologique ».<br/><br/>
                                    La construction de l’édifice commence en 1901 et se poursuit pendant trois ans. La première pierre est posée par le Statthalter Hermann zu Hohenlohe-Langenburg, le 25 novembre 1901. Le temple est inauguré le samedi 14 mai 1904 par l’empereur Guillaume II en personne, accompagné de l’impératrice, de la princesse Victoria-Louise de Prusse et des plus hautes autorités du Reichsland Elsaß-Lothringen.<br/><br/>
                                    Le plan, en croix grecque, présente toutefois une nef centrale. Le temple mesure 53 mètres de longueur, pour 26 mètres de largeur. La hauteur au niveau de la tour centrale atteint près de 55 mètres. Pour accueillir le public, sa capacité est à l'époque de 1204 places assises, réparties dans la nef, mais aussi le chœur et les galeries. Les chapiteaux des colonnes du portail représentent les quatre évangélistes entourant l’agneau mystique. La chaire est décorée des Tables de la Loi, selon la tradition réformée ancienne. Les vitraux du fond proviennent de l’hospice Saint-Nicolas et ont été mis en place dans les années 1990. Le chœur, marqué par un arc triomphal en plein-cintre, est animé par une arcature aveugle à fines colonnettes.

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </article>
                <article className="MonuInfo">
                    <p id="Emp">Emplacement :</p>
                    <p id="Adresse">Place de la Comédie, 57000 Metz</p>
                    <Link to={"/"} > <Button onClick={App.centrerTempleNeuf()} id="vp" variant="warning">Voir sur la carte</Button> </Link>
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

export default DesTempleNeuf;