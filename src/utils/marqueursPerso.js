import L from "leaflet";
import locapoint from "../assets/marqueurs/locapoint.png";
import cathicone from "../assets/marqueurs/cathicone.png";
import centrepom from "../assets/marqueurs/centrepom.png";
import opera from "../assets/marqueurs/opera.png";
import porteall from "../assets/marqueurs/porteall.png";
import porteserp from "../assets/marqueurs/porteserp.png";
import templeneuf from "../assets/marqueurs/templeneuf.png";
import tourcamoufle from "../assets/marqueurs/tourcamoufle.png";
import React, {Component} from "react";
import {Marker, Popup} from "react-leaflet";

class marqueursPerso extends Component {

    static locaIcon = L.icon({
        iconUrl: locapoint,
        iconSize: [32, 55], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -86]
    });

    static cathIcon = L.icon({
        iconUrl: cathicone,
        iconSize:     [75, 75], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });

    static centrePomIcon = L.icon({
        iconUrl: centrepom,
        iconSize:     [75, 50], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });

    static operaIcon = L.icon({
        iconUrl: opera,
        iconSize:     [75, 75], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });

    static porteAllIcon = L.icon({
        iconUrl: porteall,
        iconSize:     [75, 75], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });

    static porteSerpIcon = L.icon({
        iconUrl: porteserp,
        iconSize:     [75, 75], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });

    static templeNeufIcon = L.icon({
        iconUrl: templeneuf,
        iconSize:     [75, 75], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });

    static tourCamoufleIcon = L.icon({
        iconUrl: tourcamoufle,
        iconSize:     [75, 75], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });


    static CathMarqueur = () => {
        const position = [49.120144, 6.175728];
        return (
            <Marker position={position} icon={marqueursPerso.cathIcon}>
                <Popup>
                    Cathédrale de Metz<br />
                    Adresse : places d'Armes  <br />
                    Cathédrale Saint-Etienne
                </Popup>
            </Marker>
        );
    };

    static CentrePomMarqueur = () => {
        const position = [49.10801343213407, 6.181236066001792];
        return (
            <Marker position={position} icon={marqueursPerso.centrePomIcon}>
                <Popup>
                    Centre Pompidou<br />
                    1 Parvis des Droits de l'Homme, 57020 Metz  <br />
                    Le centre Pompidou-Metz (CPM) est un établissement public de coopération culturelle d’art situé à Metz, entre le parc de la Seille et la gare.
                </Popup>
            </Marker>
        );
    };

    static OperaMarqueur = () => {
        const position = [49.121898, 6.172656];
        return (
            <Marker position={position} icon={marqueursPerso.operaIcon}>
                <Popup>
                    <h1>Opéra-Théâtre</h1><br />
                    5 Place de la Comédie, 57000 Metz  <br />
                    L'un des premiers théâtres construits en France et le plus ancien théâtre encore en activité.
                </Popup>
            </Marker>
        );
    };

    static porteAllMarqueur = () => {
        const position = [49.118054, 6.185340];
        return (
            <Marker position={position} icon={marqueursPerso.operaIcon}>
                <Popup>
                    <h1>Opéra-Théâtre</h1><br />
                    Boulevard André Maginot, 57000 Metz  <br />
                    La porte des Allemands est une porte de ville fortifiée. Elle sert de pont sur la Seille du xiiie siècle au début du xxe siècle. L’édifice est aujourd’hui le plus important vestige des remparts médiévaux messins et témoigne de l’évolution de l’architecture militaire de Metz au Moyen Âge.
                </Popup>
            </Marker>
        );
    };



}


export default marqueursPerso;