import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import leafRed from './assets/cathicone.png';

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


    render(){
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
                          A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                  </Marker>
              </Map>


          </div>
  );
  }
}

export default App;
