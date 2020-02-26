import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import cathicone from "./assets/marqueurs/cathicone.png";
import centrepom from "./assets/marqueurs/centrepom.png";
import operaim from "./assets/marqueurs/opera.png";
import porteall from "./assets/marqueurs/porteall.png";
import porteserp from "./assets/marqueurs/porteserp.png";
import templeneuf from "./assets/marqueurs/templeneuf.png";
import tourcamoufle from "./assets/marqueurs/tourcamoufle.png";
import 'leaflet/dist/leaflet.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import axios from 'axios';
import TestPage from "./pages/test";
import TestPage2 from "./pages/test2";
import Cathedrale from "./pages/test";
import Opera from "./pages/test";
import Templeneuf from "./pages/test";
import Porteserp from "./pages/test";
import Porteall from "./pages/test";
import Centrepom from "./pages/test";
import Tourcamoufle from "./pages/test";
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

    static notif(nom, image){
        return(
            <div className="notif" >
                <h1>{nom} à proximité</h1>
                <img src ={image} sizes="10px"/>
            </div>
        )
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
        if ((this.calculDist(lat1,lon1,la,lo)<100) && App.notifiableCath){
            App.notifiableCath = false;
            App.handleOnClickDefault("Cathédrale", "/monu/cathedrale");
            if (navigator.vibrate) {
                // vibration API supported
                navigator.vibrate(2000);
            }
        }
        else if ((this.calculDist(lat1,lon1,la,lo)>=100) && !App.notifiableCath){
            App.notifiableCath = true;
        }
    }

    static checkDistCentrePom = (lat1,lon1) => {
        var la =49.10801343213407;
        var lo =6.181236066001792;
        //console.log(this.calculDist(lat1,lon1,la,lo))
        if ((this.calculDist(lat1,lon1,la,lo)<0.1) && App.notifiableCentrePom){
            App.notifiableCentrePom= false;
            App.handleOnClickDefault("Centre Pompidou", "/monu/centrepom");
            if (navigator.vibrate) {
                // vibration API supported
                navigator.vibrate(2000);
            }
        }
        else if ((this.calculDist(lat1,lon1,la,lo)>=0.1) && !App.notifiableCentrePom) {
            App.notifiableCentrePom = true;
        }
    }

    static checkDistOpera = (lat1,lon1) => {
        var la = 49.121518;
        var lo =6.172733;
        //console.log(this.calculDist(lat1,lon1,la,lo))
        if ((this.calculDist(lat1,lon1,la,lo)<0.1)&& App.notifiableOpera){
            App.notifiableOpera= false;
            App.handleOnClickDefault("Opera Théâtre", "/monu/opera");
            if (navigator.vibrate) {
                // vibration API supported
                navigator.vibrate(2000);
            }
        }
        else if ((this.calculDist(lat1,lon1,la,lo)>=0.1) && !App.notifiableOpera) {
            App.notifiableCentrePom = true;
        }
    }

    static checkporteAll = (lat1,lon1) => {
        var la = 49.117763;
        var lo = 6.185567;
        //console.log(this.calculDist(lat1,lon1,la,lo))
        if ((this.calculDist(lat1,lon1,la,lo)<0.1) && App.notifiablePorteAll){
            App.notifiablePorteAll= false;
            App.handleOnClickDefault("Porte des Allemands", "/monu/porteall");
            if (navigator.vibrate) {
                // vibration API supported
                navigator.vibrate(2000);
            }
        }
        else if ((this.calculDist(lat1,lon1,la,lo)>=0.1) && !App.notifiablePorteAll) {
            App.notifiablePorteAll = true;
        }
    }



    static checkporteSerp  = (lat1,lon1) => {
        var la = 49.112572;
        var lo = 6.171036;
        //console.log(this.calculDist(lat1, lon1, la, lo))
        if ((this.calculDist(lat1, lon1, la, lo) < 0.1) && App.notifiablePorteSerp) {
            App.notifiablePorteAll= false;
            App.handleOnClickDefault("Porte Serpenoise", "/monu/porteserp");
            if (navigator.vibrate) {
                // vibration API supported
                navigator.vibrate(2000);
            }
        }
        else if ((this.calculDist(lat1,lon1,la,lo)>=0.1) && !App.notifiablePorteSerp) {
            App.notifiablePorteSerp = true;
        }
    }

    static checktempleNeuf  = (lat1,lon1) => {
        var la = 49.120512;
        var lo = 6.171831;
        //console.log(this.calculDist(lat1, lon1, la, lo))
        if((this.calculDist(lat1, lon1, la, lo) < 0.1) && App.notifiableTempleNeuf) {
            App.notifiableTempleNeuf= false;
            App.handleOnClickDefault("Temple Neuf", "/monu/templeneuf");
            if (navigator.vibrate) {
                // vibration API supported
                navigator.vibrate(2000);
            }
        }
        else if ((this.calculDist(lat1,lon1,la,lo)>=0.1) && !App.notifiableTempleNeuf) {
            App.notifiableTempleNeuf = true;
        }
    }

    static checktourCamoufle  = (lat1,lon1) => {
        var la = 49.1120838;
        var lo = 6.173649;
        //console.log(this.calculDist(lat1, lon1, la, lo))
        if ((this.calculDist(lat1, lon1, la, lo) < 0.1) && App.notifiableTourCamoufle) {
            App.notifiableTourCamoufle= false;
            App.handleOnClickDefault("Tour Camoufle", "/monu/tourcamoufle");
            if (navigator.vibrate) {
                // vibration API supported
                navigator.vibrate(2000);
            }
        }
        else if ((this.calculDist(lat1,lon1,la,lo)>=0.1) && !App.notifiableTourCamoufle) {
            App.notifiableTourCamoufle = true;
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

    static handleOnClickDefault = (nom,lien) => {
            store.addNotification({
                title:<h2>{nom}</h2>,
                message : <p className="texteNofif">à proximité < br/>< br/><Link className="lienNofif" to={lien}> Plus d'info  </Link></p>,
                //content : App.notif(nom,image),
                type : "info",
                container: "top-right",
                insert:"top",
                animationIn : ["animated", "bounceInDown"],
                animationOut : ["animated", "zoomOut"],

                dismiss:{
                    duration:10000
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
                <Route exact path="/monu/cathedrale" component={Cathedrale} />
                <Route exact path="/monu/centrepom" component={Centrepom} />
                <Route exact path="/monu/opera" component={Opera} />
                <Route exact path="/monu/templeneuf" component={Templeneuf} />
                <Route exact path="/monu/porteserp" component={Porteserp} />
                <Route exact path="/monu/porteall" component={Porteall} />
                <Route exact path="/monu/tourcamoufle" component={Tourcamoufle} />
            </Router>
        );
    }
}

export default App;