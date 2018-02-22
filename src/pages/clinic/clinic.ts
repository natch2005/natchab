import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { CliniccidPage } from '../cliniccid/cliniccid';

import {Subscription} from 'rxjs/Subscription'

import{ ClinicService } from '../../providers/clinic-service';
import{ clinic } from '../../models/clinic';


@Component({
  selector: 'page-clinic',
  templateUrl: 'clinic.html'
})
export class ClinicPage {

 clinicservice: clinic[];
  myForm:FormGroup;
  loginname: FormControl;
  pass: FormControl;
    jan:any;
  sub:Subscription;
errorMessage:string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fb:FormBuilder,
              private loadingCtrl:LoadingController, 
              private cClinicService:ClinicService ) {


  this.loginname = this.fb.control('',Validators.required);
  this.pass = this.fb.control('',Validators.required);
  this.myForm = this.fb.group({
       'loginname': this.loginname,
       'pass': this.pass
     });   

 this.jan = this.navParams.get('jan');

              }


          public loginpersonal():void {

console.log("ok");
  let loginname = this.myForm.controls['loginname'].value;
  let pass = this.myForm.controls['pass'].value;
  
 // this.navCtrl.push(Personal1Page,{cid,hn})



 

  


let loading = this.loadingCtrl.create({content: 'กำลังเข้าระบบ...',spinner: 'bubbles'});
      loading.present();

     this.cClinicService.getHome(loginname,pass).subscribe(
    res => {    let clinicservice:any = res;
       if (clinicservice != '') {
          console.log(clinicservice);
          let namedoctor = clinicservice[0].namedoctor;
          this.navCtrl.push(CliniccidPage,{loginname,pass,namedoctor});
          loading.dismiss();
         } else { 
            let jan = 'ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูล';
          this.navCtrl.setRoot(ClinicPage,{jan,loginname,pass});
          loading.dismiss();

       }
    }, error => {}, () => {}
  );


}


}
