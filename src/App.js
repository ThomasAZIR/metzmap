import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import leafRed from './assets/cathicone.png';
import leafPoint from './assets/locapoint.png';
import axios from 'axios';
import TestPage from "./pages/test";

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
        persons: [],
    }

    state2 = {
        lat: 49.1202767,
        lng: 6.1755555555555555,
    }

    redIcon = L.icon({
        iconUrl: leafRed,
        iconSize:     [75, 75], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });

    locaIcon = L.icon({
        iconUrl: leafPoint,
        iconSize:     [32, 55], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
    });




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
                const persons = res.data;
                this.setState({ persons });
            })

        console.log(this)
    }

    success = (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({
            ready:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
        if((position.coords.latitude >= 49.034712999999995) && (position.coords.latitude <= 49.034712999999997) ) {
            window.alert('yes!');
            console.log('yes');
        }
    }
    fail = (err) => {
        this.setState({error: err.message});
    }

     MainPage = () => {
         const position = [this.state.lat, this.state.lng];
         const position2 = [this.state2.lat, this.state2.lng];
        return (
            <div className = 'App'>
                <h1> Monu'Metz</h1>
                <Map className="map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position2} icon={this.redIcon}>
                        <Popup>
                            Cathédrale de Metz<br />
                            Adresse : places d'Armes  <br />
                            Cathédrale Saint-Etienne
                        </Popup>
                    </Marker>
                    { this.state.ready && (<Marker position={[this.state.where.lat,this.state.where.lng]} icon={this.locaIcon}>
                        <Popup>
                            Votre position
                        </Popup>
                    </Marker>)}
                </Map>
                <section>
                    <h1> coordonnées : </h1>
                    <div >
                        { !this.state.ready && (
                            <p >Using Geolocation in React Native.</p>
                        )}
                        { this.state.error && (
                            <p>{this.state.error}</p>
                        )}
                        { this.state.ready && (
                            <p>{
                                `Latitude: ${this.state.where.lat}
                    Longitude: ${this.state.where.lng}`
                            }</p>
                        )}

                        <Link to="/test">TestPage</Link>
                        <ul>
                        { this.state.persons.map(person => <li>{person.content}</li>)}
                        </ul>
                    </div>
                </section>


            </div>
        );
    };

    render(){

        return (
            <Router>
                <Route exact path="/" component={this.MainPage} />
                <Route exact path="/test" component={TestPage} />
            </Router>
  );
  }
}

export default App;
