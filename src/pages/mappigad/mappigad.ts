import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

import {Subscription} from 'rxjs/Subscription'

import { Storage } from '@ionic/storage';

import{ PigadptService } from '../../providers/pigadpt-service';
import{ PigadptshowService } from '../../providers/pigadptshow-service';

import{ FeedBack } from '../../models/feedback';
import{ Spigad } from '../../models/spigad';


@Component({
  selector: 'page-mappigad',
  templateUrl: 'mappigad.html'
})
export class MappigadPage {

map: GoogleMap;
feedback:FeedBack;
errorMessage:string;

janpigad:any;

spigad: Spigad[];
sub:Subscription;
cidss:any;
fnameuser:any;
lnameuser:any;

lat:any;
lng:any;
datesave:any;
showpigad:boolean;
showpigadnull:boolean;
location:any;

pigadlats:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private platform:Platform,
              private googleMaps: GoogleMaps,
              private storage:Storage,
              private loadingCtrl:LoadingController,
              private cPigadptService:PigadptService,
              private alertCtrl:AlertController,
              private cPigadptshowService:PigadptshowService,
              private geolocation: Geolocation
              ) {

                //this.cidss = this.navParams.get('id');
                this.cidss = localStorage.getItem('cidst');
                this.fnameuser = localStorage.getItem('fnamest');
                this.lnameuser = localStorage.getItem('lnamest');

                this.platform.ready().then(()=>{
                  //แสดงแผนที่
                  this.showMap();
                  
                })

                    

              }

                ionViewWillEnter() {
      this.getPigad();
  }
   



    private getPigad() {
         this.sub =  this.cPigadptshowService.getPigad(this.cidss).subscribe(
        res => { let spigad:any = res;
          
        if(spigad !='' ){
          console.log(spigad);
          let lat = spigad[0].pigadlat;
          let lng = spigad[0].pigadlng;
          let datesave = spigad[0].datesave;
          this.lat = lat;
          this.lng = lng;
          this.datesave = datesave;
          this.showpigad = false;
          this.showpigadnull = true;
          
        }else{
            let janpigad = 'คุณยังไม่ได้ทำการบันทึกพิกัดบ้านของคุณ';
            this.janpigad=janpigad;
            this.showpigad = true;
            this.showpigadnull = false;
          }
        }
         );
        
  }






          showMap():void{

             let element: HTMLElement = document.getElementById('map');

 let map: GoogleMap = this.googleMaps.create(element);

 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
   }
 );
 let ionic: LatLng = new LatLng(6.02720,101.97129);

 // create CameraPosition
 let position: CameraPosition = {
   target: ionic,
   zoom: 15,
   tilt: 30
 };

 // move the map's camera to position
 map.moveCamera(position);




              let location = new LatLng(6.02720,101.97129);
              this.map = new GoogleMap('map',{
                'camera':{
                  'LatLng': location,
                  'zoom' : 15
                }
              });
              this.map.on(GoogleMapsEvent.MAP_READY).subscribe(()=>{
console.log('Map is ready');
              });
          
          }




          

          delpigad():void{
                        this.sub =  this.cPigadptshowService.getdelPigad(this.cidss).subscribe(
        res => { let spigad:any = res; }
         );
this.getPigad();
          }




getMyLocation():void{
  this.map.getMyLocation().then((location)=>{

      let position: CameraPosition ={
        target: location.latLng,
        zoom: 15
      }
      this.map.moveCamera(position);

         let markerOptions: MarkerOptions = {
   position: location.latLng,
   title: 'ตำแหน่งของบ้านคุณ'
 }
 
    this.map.addMarker(markerOptions).then((marker: Marker) => {
      marker.showInfoWindow();
   
    })




let tokencid = localStorage.getItem('cidst');
let pigadlat = location.latLng.lat ;
let pigadlng = location.latLng.lng ;









  let loader = this.loadingCtrl.create({
     content: 'กำลังบันทึกพิกัดบ้านของคุณ...' 
     
  });
  loader.present();
  

this.cPigadptService.signup(tokencid,pigadlat,pigadlng).subscribe(
    res => {
       this.feedback = res;
       if (this.feedback.status == 'ok') {
          //console.log(this.feedback.message);
          let alert = this.alertCtrl.create({
            title: this.feedback.message,
            //title: 'บันทึกข้อมูลเรียบร้อย',
            buttons: ['ตกลง']
            });
          alert.present();          
       } else { //status == 'error'
          //console.log(this.feedback.message);
          let alert = this.alertCtrl.create({
            title: this.feedback.message,
            //title: 'ท่านเคยบันทึกพิกัดไปแล้ว',
            buttons: ['ตกลง']
          });
          alert.present();
       }



    }, error => {
       this.errorMessage = <any> error,
       loader.dismiss();
    }, () => {
       loader.dismiss(); 
    }
  );


  
 //this.navCtrl.setRoot(MappigadPage);
 //this.navCtrl.push(MappigadPage);
 
 this.getPigad();
                                 

  });


  
}



}
