import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'page-km',
  templateUrl: 'km.html'
})
export class KmPage {


  //chTitle:string;
  chUrl:string;
  chUrlTrusted: SafeResourceUrl;

  constructor(private domSanitizer:DomSanitizer ,
              public navCtrl: NavController, 
              public navParams: NavParams,
              private loadingCtrl:LoadingController) {

                this.presentLoading();
       // this.chTitle = this.navParams.get('ch_title');
       // this.chUrl = 'https://www.youtube.com/embed/'+this.navParams.get('ch_url');
        this.chUrl = 'http://km.kolokhospital.com/index.php/article-content';
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
