import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import {Subscription} from 'rxjs/Subscription'


import{ LabdetailService } from '../../providers/labdetail1-service';
import{ labdetail } from '../../models/labdetail';


@Component({
  selector: 'page-labdetail1',
  templateUrl: 'labdetail1.html'
})


export class Labdetail1Page {

  labdetailservice: labdetail[];
  icode:number;
  cid:number;
  hn:number;
  fname:any;
  lname:any;
  pname:any;
  nameicode:any;

  sub:Subscription;
  errorMessage:string;
 
 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private clabdetailservice:LabdetailService,
              private loadingCtrl:LoadingController) {

    this.nameicode = this.navParams.get('nameicode');
    this.icode = this.navParams.get('icode');
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

      this.sub =  this.clabdetailservice.getHome(this.cid,this.icode).subscribe(
        (res) => this.labdetailservice = res,
       (error) => {
        this.errorMessage = <any> error,
        loading.dismiss()
      },
      () => loading.dismiss()
    );
  }

 

}
