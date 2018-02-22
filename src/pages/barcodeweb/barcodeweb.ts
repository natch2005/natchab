import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/*
  Generated class for the Barcodeweb page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-barcodeweb',
  templateUrl: 'barcodeweb.html'
})
export class BarcodewebPage {

   chUrl:string;
  chUrlTrusted: SafeResourceUrl;

  constructor(private domSanitizer:DomSanitizer ,
              public navCtrl: NavController, 
              public navParams: NavParams,
              private loadingCtrl:LoadingController) {

               this.presentLoading();

       // this.chTitle = this.navParams.get('ch_title');
       // this.chUrl = 'https://www.youtube.com/embed/'+this.navParams.get('ch_url');
       this.chUrl = this.navParams.get('webtext');

        

       //this.chUrl = 'http://1.179.171.188/natchtohos/login.php';
  }

   presentLoading() {
    let loader = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูลครับ...',
      spinner: 'bubbles',
      duration: 2000
    });
    loader.present();
  }

  ionViewWillEnter() {
        this.chUrlTrusted = this.domSanitizer.bypassSecurityTrustResourceUrl(this.chUrl);
  }

}
