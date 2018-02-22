import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


import {Subscription} from 'rxjs/Subscription'

import{ MeddetailService } from '../../providers/meddetail-service';
import{ meddetail } from '../../models/meddetail';


@Component({
  selector: 'page-meddetail',
  templateUrl: 'meddetail.html'
})
export class MeddetailPage {


  meddetailservice: meddetail[];
  cid:number;
  hn:number;
  fname:any;
  lname:any;
  pname:any;
  vstdate:any;


  sub:Subscription;
  errorMessage:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private cMeddetailService:MeddetailService,
              private loadingCtrl:LoadingController) {

    this.vstdate = this.navParams.get('vstdate');
    this.cid = this.navParams.get('cid');
    this.fname = this.navParams.get('fname');
    this.hn = this.navParams.get('hn');
    this.lname = this.navParams.get('lname');
    this.pname = this.navParams.get('pname');

  }

    ionViewWillEnter() {
      this.getHome();
  }


   private getHome() {
   
   /* แบบไม่มีโหลด
         this.sub =  this.cPersonalService.getHome(this.cid).subscribe(
        (res) => this.personalservice = res,(error) => {});
    */
     let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูลครับ...',
      spinner: 'bubbles'
    });
    loading.present();

      this.sub =  this.cMeddetailService.getHome(this.cid,this.vstdate).subscribe(
        (res) => this.meddetailservice = res,
       (error) => {
        this.errorMessage = <any> error,
        loading.dismiss()
      },
      () => loading.dismiss()
    );
  }


}
