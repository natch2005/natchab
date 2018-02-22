import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Head1Page } from '../head1/head1';


@Component({
  selector: 'page-head1detail',
  templateUrl: 'head1detail.html'
})
export class Head1detailPage {

  nametopic:string;
  detailtopic:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private loadingCtrl:LoadingController) {
                this.presentLoading();
     this.nametopic = this.navParams.get('nametopic');
  this.detailtopic = this.navParams.get('detailtopic');
}

 presentLoading() {
    let loader = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูลครับ...',
      spinner: 'bubbles',
      duration: 1000
    });
    loader.present();
  }



}
