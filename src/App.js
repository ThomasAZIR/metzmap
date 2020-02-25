import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import axios from 'axios';
import TestPage from "./pages/test";
import TestPage2 from "./pages/test2";
import marqueursPerso from "./utils/marqueursPerso"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import logo from './assets/logoo.png';
import carto from './assets/carteb.png';
import circuit from './assets/circuitb.png';
import monum from './assets/rechercheb.png';

import {
    HashRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import {win} from "leaflet/src/core/Browser";

var myIcon = L.icon({

    iconSize : [25, 41],
    iconAnchor : [12.5, 41],
    popupAnchor: [0,-41]
});

class App extends Component {

    state = {
        lat: 49.1191,
        lng: 6.1727,
        zoom: 17,
        monuments: [],
    }



    componentDidMount(){
        let Options = {
            enableHighAccuracy: true,
            timeOut: 5000,
            maximumAge: 0
        };
        this.setState({ready:false, error: null });
        navigator.geolocation.watchPosition( this.success, this.fail, Options);

        axios.get("https://devweb.iutmetz.univ-lorraine.fr/~vivier19u/monumetz/articles.php")
            .then(res => {
                console.log(res)
                this.setState({})
            })
        axios.get(`https://devweb.iutmetz.univ-lorraine.fr/~vivier19u/monumetz/articles.php`)
            .then(res => {
                const monuments = res.data;
                this.setState({ monuments });
            })

        console.log(this)
    }

    marqueursWeb= () => {
        if((!this.state.monuments.data)){
            this.state.monuments.map(person => {/*console.log('yes');console.log(parseFloat(person.latitu)); console.log(parseFloat(person.longitu)); */return(<Marker position={[parseFloat(person.latitu),parseFloat(person.longitu)]} icon={marqueursPerso}><Popup>Yes</Popup> </Marker>)});
        }
}

    success = (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({
            ready:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
        /*if((position.coords.latitude >= 49.034712999999995) && (position.coords.latitude <= 49.034712999999997) ) {
            window.alert('yes!');
            console.log('yes');
        }*/
    }
    fail = (err) => {
        this.setState({error: err.message});
    }



     MainPage = () => {
                const position = [this.state.lat, this.state.lng];
                return (
                <div className = 'App'>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                <Map className="map" center={position} zoom={this.state.zoom}>
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {marqueursPerso.CathMarqueur()}
                {marqueursPerso.CentrePomMarqueur()}
                {marqueursPerso.OperaMarqueur()}
                {marqueursPerso.porteAllMarqueur()}
                {marqueursPerso.porteSerpMarqueur()}
                {marqueursPerso.templeNeufMarqueur()}
                {marqueursPerso.tourCamoufleMarqueur()}
                {this.marqueursWeb()}
                { this.state.ready && (<Marker position={[this.state.where.lat,this.state.where.lng]} icon={marqueursPerso.locaIcon}>
                    <Popup>
                        Votre position
                    </Popup>
                </Marker>)}

                    {!(this.state.monuments.data)&&
                    this.state.monuments.map(person => <Marker position={[parseFloat(person.latitu),parseFloat(person.longitu)]} icon={marqueursPerso.flagIcon}><Popup>{person.nom} <br /> {person.adresse} <br /> {person.libelle} </Popup> </Marker>)}
                </Map>
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
                                <Button  variant="sec" className="BoutonMenuSelec"><Link to="/"><img src={carto} className="Picto" alt="carte" /></Link></Button>
                                <Button  variant="prem" className="BoutonMenu"><Link to="/test"><img src={monum} className="PictoMonu" alt="recherche" /></Link></Button>
                            </ButtonGroup>
                        </>
                    </footer>
            </div>
        );
    };

    render(){
        return (
            <Router>
                <Route exact path="/" component={this.MainPage} />
                <Route exact path="/test" component={TestPage} />
                <Route exact path="/test2" component={TestPage2} />
            </Router>
  );
  }
}

export default App;
