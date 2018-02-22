import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';


import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';

declare var window;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class Map {

   lat: number = 6.02720;
   lng: number = 101.97129;
   zoom: number = 15;
   location:any;
 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private platform:Platform,
              private geolocation: Geolocation,
              private callNumber: CallNumber
              ) {

                
  }

  callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }

startExternalMap() {
  let sendnameplace ='โรงพยาบาลสุไหงโก-ลก';
    
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then((position) => {
        // ios
        if (this.platform.is('ios')) {
          //window.open('maps://?q=' + this.location.name + '&saddr=' + position.coords.latitude + ',' + position.coords.lo6.0272955,101.9706421ngitude + '&daddr=' + this.location.latitude + ',' + this.location.longitude, '_system');
         window.open('maps://?q=' + sendnameplace + '&saddr=' + position.coords.latitude + ',' + position.coords.longitude + '&daddr=6.02720,101.97129');
        };
        // android
        if (this.platform.is('android')) {
           window.open('geo://' + position.coords.latitude + ',' + position.coords.longitude + '?q=6.02720,101.97129(โรงพยาบาลสุไหงโกลก)', '_system');
        };
      });
    });
}







}
