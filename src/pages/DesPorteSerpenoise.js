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
const DesPorteSertp = () => {
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
                    <p>Porte Serpenoise</p>
                </article>
                <article>
                    <Accordion className="Accordeon" defaultActiveKey="0">
                        <Card className="Horaires">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Horraires
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Description Détaillée
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    La cite messine s’approprie au xiiie siecle les droits d’une « ville libre » du Saint-Empire romain germanique. La bourgeoisie s’enrichissant, elle fait de Metz une republique oligarchique
                                    puissante. Face aux convoitises de ses puissants voisins, la ville de Metz releve ses remparts et rehausse ses tours. La premiere porte Serpenoise est betie au xiiie siecle en meme temps que
                                    les remparts de la ville, sur la voie romaine provenant de Scarpone, ville en amont de Metz sur la Moselle. La Via Scarponensis donna par contraction le nom Serpenoise ou parfois meme Champenoise.
                                    La porte du xiiie siecle n’etait pas particulierement importante. Elle comportait une voûte oblique traversant les remparts. On lui ajoute en 1466 un element cylindrique relie a la porte par un
                                    pont fortifie qui enjambait le canal des remparts, combles pour realiser l’avenue Foch actuelle. Tres endommagee pendant le siege de 1552, la porte Serpenoise medievale fut demolie en 1561 pour
                                    laisser place aux fortifications de la citadelle.
                                    <br/><br/>

                                    La porte Serpenoise est une porte de ville situee a l’angle de l’avenue Robert Schuman et de la rue du General Gaston-Dupuis dans le quartier de Metz-Centre. Elle reste le temoin symbolique associe
                                    a plusieurs evenements historiques de la ville de Metz, dont elle a marque la limite sud du iiie siecle lors de la construction du rempart romain, jusqu’au debut du xxe siecle au moment de la
                                    destruction de l’enceinte.
                                    <br/><br/>
                                    La porte Serpenoise actuelle est reconstruite en 1852, non loin de l’emplacement où s’elevait jadis la porte de Scarponne. C’est un tunnel coude d’une trentaine de metres traversant le talus du
                                    rempart sud. La porte sert de liaison avec l’ancienne gare. A l’exterieur, un pont enjambe le fosse des fortifications. En 1892, la porte est elargie et l’on jette a bas sa partie exterieure —
                                    la double entree qui precede la porte —, genante pour la circulation. En 1902-1903, lors du demantelement des remparts, la partie interieure est aussi detruite. La porte Serpenoise est remaniee
                                    et prend sa forme actuelle d’Arc de triomphe. On ne conserve en effet qu’un troncon de la porte et l’on y ajoute quatre tourelles et un escalier. Elle devient ainsi un monument autonome,
                                    agrementant la promenade du nouveau boulevard arbore. La porte Serpenoise est appelee Prinz Friedrich Karl Tor pendant l’Annexion allemande.
                                    <br/><br/>
                                    Les deux facades sont demontees et reunies pour devenir un Arc de triomphe couronne d'echauguettes, coiffee d’un talus herbeux, evoquant un bastion. Certains elements proviennent du rempart
                                    Saint-Thiebault.
                                    De part et d’autre du porche, sur les deux piliers, les dates de construction et de plusieurs evenements de l’histoire de la cite sont rappeles aux passants :
                                    - le 9 avril 1473, la ville est sauvee de l’invasion des soldats du duc de Lorraine deguises en marchands, par le boulanger Harelle qui les apercoit franchissant la porte alors qu’il travaille la
                                    nuit a proximite, et fait sonner la cloche La Mutte ;
                                    - en novembre 1552, les soldats du duc de Guise defendent la ville heroïquement face a Charles Quint qui l’assiege et ne parvient pas a s’emparer de cette porte ;
                                    - le 31 octobre 1870, les troupes prussiennes y entrent apres la defaite de Napoleon III a Sedan ;
                                    - le 19 novembre 1918, les troupes alliees font leur entree par la porte Serpenoise pour la liberation de Metz.
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

export default DesPorteSertp;