import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Personal1Page } from '../personal1/personal1';

import {Subscription} from 'rxjs/Subscription'

import{ PersonalService } from '../../providers/personal-service';
import{ loginperso } from '../../models/loginperso';

import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class PersonalPage {

personalservice: loginperso[];
  myForm:FormGroup;
  cid: FormControl;
  hn: FormControl;
  jan:any;
  sub:Subscription;
errorMessage:string;
pname:any;
fname:any;
lname:any;

cidst:any;
hnst:any;
pnamest:any;
fnamest:any;
lnamest:any;



  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fb:FormBuilder,
              private loadingCtrl:LoadingController, 
              private cPersonalService:PersonalService,
              private storage:Storage
               ) {


  this.cid = this.fb.control('',Validators.required);
  this.hn = this.fb.control('',Validators.required);
  this.myForm = this.fb.group({
       'cid': this.cid,
       'hn': this.hn
     });   

     this.jan = this.navParams.get('jan');


this.storage.ready().then(()=>{
  
 let token = localStorage.getItem('cidst');

if(token){
  console.log('บัตรประชาชนอยู่ใน store');
  
  let cid = localStorage.getItem('cidst');
  let hn = localStorage.getItem('hnst');
  let pname = localStorage.getItem('pnamest');
  let fname = localStorage.getItem('fnamest');
  let lname = localStorage.getItem('lnamest');
 this.navCtrl.setRoot(Personal1Page,{cid,hn,pname,fname,lname});
 
 
}else{ console.log('5555 ไม่มีบัตรประชาชนอยู่ใน store'); }

});
               

               }




          public loginpersonal():void {

//console.log("ok");
  let cid = this.myForm.controls['cid'].value;
  let hn = this.myForm.controls['hn'].value;
  
//this.getHome
  //this.navCtrl.push(Personal1Page,{cid,hn})

 let loading = this.loadingCtrl.create({content: 'กำลังเข้าระบบ...',spinner: 'bubbles'});
      loading.present();
     this.cPersonalService.getHome(cid,hn).subscribe(
    res => {    let personalservice:any = res;
       if (personalservice != '') {
          console.log('login ok!');
          let pname = personalservice[0].pname;
          let fname = personalservice[0].fname;
          let lname = personalservice[0].lname;
          this.navCtrl.setRoot(Personal1Page,{cid,hn,pname,fname,lname});
          loading.dismiss();
         } else { 
            let jan = 'ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูล';
            this.jan= jan;
          //this.navCtrl.setRoot(PersonalPage,{jan,cid,hn});
          loading.dismiss();

       }
    }, error => {}, () => {}
  );

}






}
