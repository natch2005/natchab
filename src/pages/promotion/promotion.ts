import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html'
})
export class PromotionPage {

    chUrl:string;
  chUrlTrusted: SafeResourceUrl;

  constructor(private domSanitizer:DomSanitizer ,
              public navCtrl: NavController, 
              public navParams: NavParams,
              private loadingCtrl:LoadingController) {

                this.presentLoading();

                this.chUrl = 'http://kolokhospital.com/%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8';


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
