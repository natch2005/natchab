import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

   chUrl:string;
  chUrlTrusted: SafeResourceUrl;

  constructor(private domSanitizer:DomSanitizer ,
              public navCtrl: NavController, 
              public navParams: NavParams,
              private loadingCtrl:LoadingController) {

                this.presentLoading();

                this.chUrl = 'http://kolokhospital.com/%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88';


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
