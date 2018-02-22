import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,LoadingController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
//import { Camera } from 'ionic-native';
import { Geolocation } from '@ionic-native/geolocation';
import { DomSanitizer } from '@angular/platform-browser';

import{ PigadptService } from '../../providers/pigadpt-service';

import{ FeedBack } from '../../models/feedback';

import { JoinhosPage } from '../joinhos/joinhos';






@Component({
  selector: 'page-ambulance',
  templateUrl: 'ambulance.html'
})
export class AmbulancePage {

cid:any;
fname:any;
lname:any;
pname:any;
hn:any;


pigadlat:any;
pigadlng:any;

todayDate: String = new Date().toISOString();
//timesave : string = new Date().toTimeString();
timesave : string = new Date().toLocaleTimeString();

//imageData:string = '';
public imageData: string;
useURI:boolean = false;
feedback:FeedBack;
imageDatas:string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public camera: Camera,
              private cPigadptService:PigadptService,
              private alertCtrl:AlertController,
              private _sanitizer: DomSanitizer,
              private geolocation: Geolocation,
              private loadingCtrl:LoadingController
              ) {

                this.cid = localStorage.getItem('cidst');
                this.fname = localStorage.getItem('fnamest');
                this.lname = localStorage.getItem('lnamest');
                this.pname = localStorage.getItem('pnamest');
                this.hn = localStorage.getItem('hnst');
console.log(this.todayDate)
console.log(this.timesave)
              }





  upload():void{

    let loader = this.loadingCtrl.create({
      content: '<h6>ส่งข้อมูลเรียบร้อย <br> ดำเนินการอย่างรวดเร็ว </h6>',
      spinner: 'bubbles',
      duration: 5000
    });
    loader.present();
    this.navCtrl.pop(JoinhosPage);

    this.cPigadptService.upload(this.imageData,this.pigadlat,this.pigadlng,this.todayDate,this.hn,this.cid,this.timesave).subscribe(
      (res) => {
        this.feedback = res;
        if(this.feedback.status == 'ok'){
          let alert = this.alertCtrl.create({
            title: this.feedback.message,
            buttons:['ตกลง']
          });
          alert.present();
        } else{
          let alert = this.alertCtrl.create({
            title: this.feedback.message,
            buttons:['ตกลง']
          });
          alert.present();
        }
      }
    )
  }



  takePicture(sourceType):void{
    //console.log('กดถ่ายรูป');
const  options: CameraOptions = {

/*
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  allowEdit: true,
  sourceType: sourceType,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  saveToPhotoAlbum: false
*/


  quality: 75,
  destinationType: this.camera.DestinationType.DATA_URL,
  allowEdit: true,
  sourceType: sourceType,
  encodingType: this.camera.EncodingType.JPEG,
  targetWidth: 300,
  targetHeight: 300,
  saveToPhotoAlbum: false



}
this.camera.getPicture(options).then((imageData) => {
 this.imageData = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});

this.getMyLocation();
                                
                              }





getMyLocation():void{
console.log('กดดูพิกัด')
  this.geolocation.getCurrentPosition().then((resp) => {
    this.pigadlat = resp.coords.latitude;
    this.pigadlng = resp.coords.longitude;
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
 //let pigadlat = location.latLng.lat ;
//this.pigadlat = data.coords.latitude;
//this.pigadlng = data.coords.longitude;
});

  
                    }






}
