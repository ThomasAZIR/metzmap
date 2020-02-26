import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import axios from 'axios';
import TestPage from "./pages/test";
import TestPage2 from "./pages/test2";
import checkDist from "./utils/checkDist";
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
import ReactNotification, {store} from "react-notifications-component";
import "./utils/animate.css"
import 'react-notifications-component/dist/theme.css'

class App extends Component {

    state = {
        lat: 49.1191,
        lng: 6.1727,
        zoom: 17,
        monuments: [],
        pos :[]
    }

    static pos =  [49.1191, 6.1727];
    static lat;
    static long;
    static notifiableCath =true;
    static notifiableCentrePom =true;
    static notifiableOpera =true;
    static notifiablePorteAll =true;
    static notifiablePorteSerp =true;
    static notifiableTempleNeuf =true;
    static notifiableTourCamoufle =true;

    static sendNotif(msg){

    }

    static calculDist=(lat1,lon1,lat2,lon2) =>{
        var la1 = lat1* Math.PI / 180
        var la2 = lat2* Math.PI / 180;
        var lo1 = lon1* Math.PI / 180;
        var lo2 = lon2* Math.PI / 180;

        //console.log(Math.acos(Math.sin(la1)*Math.sin(la2)+Math.cos(la1)*Math.cos(la2)*Math.cos(lo2-lo1))*6371)
        return (Math.acos(Math.sin(la1)*Math.sin(la2)+Math.cos(la1)*Math.cos(la2)*Math.cos(lo2-lo1))*6371)

    }

    static checkDistCath = (lat1,lon1) => {
        var la = 49.120144;
        var lo = 6.175728;
        //console.log(this.calculDist(lat1,lon1,la,lo))
        if ((this.calculDist(lat1,lon1,la,lo)<100) && App.notifiable){
            console.log('es');
            App.notifiable = false;
            App.handleOnClickDefault("cath");
            if (navigator.vibrate) {
                // vibration API supported
                navigator.vibrate(1000);
            }
        }
    }

    static checkDistCentrePom = (lat1,lon1) => {
        var la =49.10801343213407;
        var lo =6.181236066001792;
        //console.log(this.calculDist(lat1,lon1,la,lo))
        if (this.calculDist(lat1,lon1,la,lo)<0.1){
            console.log('Proche CentrePom')
        }
    }

    static checkDistOpera = (lat1,lon1) => {
        var la = 49.121518;
        var lo =6.172733;
        //console.log(this.calculDist(lat1,lon1,la,lo))
        if (this.calculDist(lat1,lon1,la,lo)<0.1){
            console.log('Proche Opera')
        }
    }

    static checkporteAll = (lat1,lon1) => {
        var la = 49.117763;
        var lo = 6.185567;
        //console.log(this.calculDist(lat1,lon1,la,lo))
        if (this.calculDist(lat1,lon1,la,lo)<0.1){
            console.log('Proche porteAll')
        }
    }

    static checkporteSerp  = (lat1,lon1) => {
        var la = 49.112572;
        var lo = 6.171036;
        //console.log(this.calculDist(lat1, lon1, la, lo))
        if (this.calculDist(lat1, lon1, la, lo) < 0.1) {
            console.log('Proche porteSerp')
        }
    }

    static checktempleNeuf  = (lat1,lon1) => {
        var la = 49.120512;
        var lo = 6.171831;
        //console.log(this.calculDist(lat1, lon1, la, lo))
        if (this.calculDist(lat1, lon1, la, lo) < 0.1) {
            console.log('Proche temple Neuf')
        }
    }

    static checktourCamoufle  = (lat1,lon1) => {
        var la = 49.1120838;
        var lo = 6.173649;
        //console.log(this.calculDist(lat1, lon1, la, lo))
        if (this.calculDist(lat1, lon1, la, lo) < 0.1) {
            console.log('Proche tour Camoufle')
        }
    }


    static checkDistAll = (lat1,lon1) => {
        this.checkDistCath(lat1,lon1);
        this.checkDistCentrePom(lat1,lon1);
        this.checkDistOpera(lat1,lon1);
        this.checkporteAll(lat1,lon1);
        this.checkporteSerp(lat1,lon1);
        this.checktempleNeuf(lat1,lon1);
        this.checktourCamoufle(lat1,lon1);
    }


    componentDidMount(){
        setTimeout(App.setNotifiableTrue, 120000);

        let Options = {
            enableHighAccuracy: true,
            timeOut: 5000,
            maximumAge: 0
        };
        this.setState({ready:false, error: null });
        navigator.geolocation.watchPosition( this.success, this.fail, Options);

        this.state.startposition = [this.state.lat, this.state.lng];

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

        this.interval = setInterval(() => {
            this.setState({})
        }, 1000);

        console.log(this)
    }

    marqueursWeb= () => {
        if((!this.state.monuments.data)){
            this.state.monuments.map(person => {/*console.log('yes');console.log(parseFloat(person.latitu)); console.log(parseFloat(person.longitu)); */return(<Marker position={[parseFloat(person.latitu),parseFloat(person.longitu)]} icon={marqueursPerso}><Popup>Yes</Popup> </Marker>)});
        }
    }

    success = (position) => {
        //console.log(position.coords.latitude);
        //console.log(position.coords.longitude);
        this.setState({
            ready:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
            App.lat  = position.coords.latitude;
            App.long = position.coords.longitude;
        /*this.state.where.lat = position.coords.latitude;
        this.state.where.lng = position.coords.longitude;*/
        /*if((position.coords.latitude >= 49.034712999999995) && (position.coords.latitude <= 49.034712999999997) ) {
            window.alert('yes!');
            console.log('yes');
        }*/
        App.checkDistAll(position.coords.latitude,position.coords.longitude);
    }
    fail = (err) => {
        this.setState({error: err.message});
    }

    recentrer(){
        console.log(App.pos);
        App.pos=[0,0];
        App.pos = [App.lat,App.long];

    }

    static getPos(){
        return App.pos;
    }

    static handleOnClickDefault = (msg) => {
            store.addNotification({
                title:"New Card added",
                message : msg,
                type : "success",
                container: "top-right",
                insert:"top",
                animationIn : ["animated", "fadeIn"],
                animationOut : ["animated", "fadeOut"],

                dismiss:{
                    duration:2000
                }
            })
        }



    MainPage = () => {
        return (
            <div className = 'App'>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <ReactNotification/>
                { this.state.ready && (
                    <Map className="map" center={App.getPos()} zoom={this.state.zoom}>
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
                    </Map>)}
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
                            <Button  onClick={this.recentrer} variant="sec" className="BoutonMenuSelec"><img onClick={this.recentrer} src={carto} className="Picto" alt="carte" /></Button>
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