import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import * as moment from 'moment';


import {Subscription} from 'rxjs/Subscription'

import{ AppointService } from '../../providers/appoint-service';
import{ AppointlonService } from '../../providers/appointlon-service';

import{ dateappoint } from '../../models/dateappoint';
import{ queuerub } from '../../models/queuerub';
import{ queuerai } from '../../models/queuerub';

import{ FeedBack } from '../../models/feedback';

declare var window;

@Component({
  selector: 'page-appoint',
  templateUrl: 'appoint.html'
})
export class AppointPage {

  cid:any;
fname:any;
lname:any;
pname:any;
hn:any;
sub:Subscription;
errorMessage:string;
jan:boolean;
jandate:boolean;
showdatelons:boolean;

dateappoint: dateappoint[];
queuerub: queuerub[];
queuerai: queuerai[];

 location:any;


   dateshow:any;
  newdate:any;
  d:any;
  b:any;
  year:any;
  month:any;
  day:any;
  today:Date;
  mydate: String;
  dateConfig: { min?: string, max?: string } = {};
  

  feedback:FeedBack;
  
AppointlonService
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage:Storage,
              private loadingCtrl:LoadingController, 
              private cAppointService:AppointService, 
              private cAppointlonService:AppointlonService,
              private alertCtrl:AlertController
              ) {

                 this.cid = localStorage.getItem('cidst');
                this.fname = localStorage.getItem('fnamest');
                this.lname = localStorage.getItem('lnamest');
                this.pname = localStorage.getItem('pnamest');
                this.hn = localStorage.getItem('hnst');


                  
                this.dateConfig.min = (new Date()).toISOString();
                this.dateConfig.max = "2020-10-31";


              }


    ionViewWillEnter() {
      this.getDateappo();
      this.getQueuerub();
      this.getQueuerai();
  }

  ionViewDidEnter() {
  this.initRefresh();
}

ionViewDidLeave() {
  this.stopRefresh();
}

private timeoutId: number;

private initRefresh() {
  this.refresh();
  this.timeoutId = setInterval(() => this.refresh(), 15 * 1000);
}

private refresh() {
  console.log(`Refresh at ${moment().format('LTS')}`);
  this.getQueuerai();
}

private stopRefresh() {
  clearInterval(this.timeoutId);
}



   private getDateappo() {
   
     let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูลครับ...',
      spinner: 'bubbles'
    });
    loading.present();

      this.sub =  this.cAppointService.getDateappo(this.hn).subscribe(
        (res) => this.dateappoint = res,
       (error) => {
        this.errorMessage = <any> error,
        loading.dismiss()
      },
      () => loading.dismiss()
    );

        this.sub =  this.cAppointService.getDateappo(this.hn).subscribe(
    res => {    let dateappointshow:any = res;
       if (dateappointshow != '') {
         let mydate = dateappointshow[0].nextdate;
         this.mydate = mydate;
       }else { 

            this.jandate = true;
          //this.navCtrl.setRoot(ClinicPage,{});
//loading.dismiss();
       }
    }, error => {}, () => {}
  );



    
                        }
  
  private getQueuerub() {
         this.sub =  this.cAppointService.getQueuerub(this.hn).subscribe(
        (res) => this.queuerub = res);
        
        this.sub =  this.cAppointService.getQueuerub(this.hn).subscribe(
    res => {    let queuerubshow:any = res;
       if (queuerubshow != '') {}else { 

            this.jan = true;
          //this.navCtrl.setRoot(ClinicPage,{});
//loading.dismiss();
       }
    }, error => {}, () => {}
  );

                        }

    private getQueuerai() {
         this.sub =  this.cAppointService.getQueuerai(this.hn).subscribe(
        (res) => this.queuerai = res);
                        }

    private reloadq() {
      this.getDateappo();
      this.getQueuerub();
      this.getQueuerai();
                        }

    callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }

     private datecalen(mydate){
console.log(mydate)
    let loader = this.loadingCtrl.create({
      content: '<h6>ทำการยื่นเรื่อง เลือนวันนัดเรียบร้อย <br> หากได้รับการอนุมัติวันที่นัดจะเปลี่ยนโดยอัตโนมัติ</h6>',
      spinner: 'bubbles',
      duration: 5000
    });
    loader.present();
    this.showdatelons=false ;
    this.getDatelon();
  }
  
  private showdatelon(){
    console.log('เข้ากด');
    this.showdatelons=true ;
  }
  
  getDatelon():void{

let hnlon = localStorage.getItem('hnst');
let datelon = this.mydate ;

 
  
this.cAppointlonService.signup(hnlon,datelon).subscribe(
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
       this.errorMessage = <any> error
    }, () => {}
  );


  
 //this.navCtrl.setRoot(MappigadPage);
 //this.navCtrl.push(MappigadPage);

                                 

  }

    

}
