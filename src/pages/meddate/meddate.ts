import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import {Subscription} from 'rxjs/Subscription'


import{ MeddateService } from '../../providers/meddate-service';
import{ meddate } from '../../models/meddate';
import { MeddetailPage } from '../meddetail/meddetail';



@Component({
  selector: 'page-meddate',
  templateUrl: 'meddate.html'
})


export class MeddatePage {


  meddateservice: meddate[];
  cid:number;
  hn:number;
  fname:any;
  lname:any;
  pname:any;


  sub:Subscription;
  errorMessage:string;




  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private cMeddateService:MeddateService,
              private loadingCtrl:LoadingController) {

    
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

      this.sub =  this.cMeddateService.getHome(this.cid).subscribe(
        (res) => this.meddateservice = res,
       (error) => {
        this.errorMessage = <any> error,
        loading.dismiss()
      },
      () => loading.dismiss()
    );
  }


    private mdedetail(h):void{
this.navCtrl.push(MeddetailPage,{
  pname:this.pname,
  fname:this.fname,
  lname:this.lname,
  hn:this.hn,
  cid:this.cid,
  vstdate:h.vstdate
                            })
                    }


}
