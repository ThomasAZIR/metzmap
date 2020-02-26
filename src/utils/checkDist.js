import {Component} from "react";
import React from "react";
import {store} from "react-notifications-component";


class checkDist extends Component {

     static handleOnClickDefault = () => {
        store.addNotification({
            title:"New Card added",
            message : "yes",
            type : "success",
            container: "top",
            insert:"top",
            animationIn : ["animated", "fadeIn"],
            animationOut : ["animated", "fadeOut"],

            dismiss:{
                duration:2000
            }
        })
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
       if (this.calculDist(lat1,lon1,la,lo)<100){
           console.log('es');
           checkDist.handleOnClickDefault();
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
        //this.checkDistCath(lat1,lon1);
        //this.checkDistCentrePom(lat1,lon1);
        //this.checkDistOpera(lat1,lon1);
        //this.checkporteAll(lat1,lon1);
        //this.checkporteSerp(lat1,lon1);
        //this.checktempleNeuf(lat1,lon1);
        //this.checktourCamoufle(lat1,lon1);
    }
}

export default checkDist;