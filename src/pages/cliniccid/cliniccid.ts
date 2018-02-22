import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { LabdetailPage } from '../labdetail/labdetail';
import { ClinicPage } from '../clinic/clinic';

import { MeddatePage } from '../meddate/meddate';

import{ CliniccidService } from '../../providers/cliniccid-service';
import{ cliniccid } from '../../models/cliniccid';


@Component({
  selector: 'page-cliniccid',
  templateUrl: 'cliniccid.html'
})
export class CliniccidPage {

  myForm:FormGroup;
  cid: FormControl;
  cliniccidservice: cliniccid[];
  jan:any;
  namedoctor:any;


   constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fb:FormBuilder,
              private loadingCtrl:LoadingController, 
              private cCliniccidService:CliniccidService ) {

                  //this.jan = this.navParams.get('jan');


                  this.cid = this.fb.control('',Validators.required);
                  this.myForm = this.fb.group({'cid': this.cid});   

                  this.namedoctor = this.navParams.get('namedoctor');

              }











 private lab1():void{

 let cid = this.myForm.controls['cid'].value;
 let namedoctor = this.namedoctor;


  let loading = this.loadingCtrl.create({content: 'กำลังโหลดข้อมูล...',spinner: 'bubbles'});
      loading.present();

     this.cCliniccidService.getHome(cid,namedoctor).subscribe(
    res => {    let cliniccidservice:any = res;
       if (cliniccidservice != '') {
          console.log(cliniccidservice);
          let hn = cliniccidservice[0].hn;
          let pname = cliniccidservice[0].pname;
          let fname = cliniccidservice[0].fname;
          let lname = cliniccidservice[0].lname;
          this.navCtrl.push(LabdetailPage,{cid,hn,pname,fname,lname});
          loading.dismiss();
         } else { 
            let jan = 'เลขบัตรไม่อยู่ในระบบ';
            console.log(jan);
            this.jan=jan;
          //this.navCtrl.setRoot(ClinicPage,{});
loading.dismiss();
       }
    }, error => {}, () => {}
  );




/*
    let cid = this.myForm.controls['cid'].value;
    this.navCtrl.push(LabdetailPage,{
      cid:cid
                                    })

 */                                   
                    }

   private med1():void{


 let cid = this.myForm.controls['cid'].value;
 let namedoctor = this.namedoctor;



     this.cCliniccidService.getHome(cid,namedoctor).subscribe(
    res => {    let cliniccidservice:any = res;
       if (cliniccidservice != '') {
          console.log(cliniccidservice);
          let hn = cliniccidservice[0].hn;
          let pname = cliniccidservice[0].pname;
          let fname = cliniccidservice[0].fname;
          let lname = cliniccidservice[0].lname;
          this.navCtrl.push(MeddatePage,{cid,hn,pname,fname,lname});
          
         } else { 
            let jan = 'เลขบัตรไม่อยู่ในระบบ';
            console.log(jan);
             this.jan=jan;
         // this.navCtrl.setRoot(ClinicPage,{jan});

       }
    }, error => {}, () => {}
  );




    
                    }


}
