import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { ContactSerivce } from '../../providers/contact-service';

import { FeedBack } from '../../models/contactfeedback';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  myForm:FormGroup;
  fullname: FormControl;
  email: FormControl;
 // password: FormControl;
   phone: FormControl;
    detailcon: FormControl;
  feedback:FeedBack;
  errorMessage:string;


constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fb:FormBuilder,
              private contactSerivce:ContactSerivce,
              private alertCtrl:AlertController,
              private loadingCtrl:LoadingController
              ) {
     this.fullname = this.fb.control('',Validators.required);
     this.email = this.fb.control('',Validators.compose([
       Validators.required,
       ContactPage.emailValidator
     ]));
     //this.password = this.fb.control('',Validators.required);
    // this.password = this.fb.control('',Validators.compose([Validators.required,Validators.minLength(3)])); 
     this.phone = this.fb.control('',Validators.compose([Validators.required,Validators.minLength(10)]));
     this.detailcon = this.fb.control('',Validators.compose([Validators.required,Validators.minLength(3)]));

     this.myForm = this.fb.group({
       'fullname': this.fullname,
       'email': this.email,
       //'password': this.password,
       'phone': this.phone,
       'detailcon': this.detailcon
     });     
  }

 //ตรวจสอบความถูกต้องของอีเมล์โดยใช้ Regular Expression
static emailValidator(control: FormControl) {
  let email_regxp: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_regxp.test(control.value) ? null : { invalidEmail: true };
}

public signup():void {
  //console.log(this.myForm.value);
  let fullname = this.myForm.controls['fullname'].value;
  let email = this.myForm.controls['email'].value;
  //let password = this.myForm.controls['password'].value;
  let phone = this.myForm.controls['phone'].value;
  let detailcon = this.myForm.controls['detailcon'].value;

  let loader = this.loadingCtrl.create({
     content: 'กำลังบันทึกข้อมูล...' 
  });
  loader.present();

  this.contactSerivce.signup(fullname,email,phone,detailcon).subscribe(
    res => {
       this.feedback = res;
           
    }, error => {
       this.errorMessage = <any> error,
       loader.dismiss();
       
    }, () => {
       loader.dismiss(); 
    }
    
  );
            let alert = this.alertCtrl.create({
      title: 'ส่งข้อมูลเรียบร้อย',
      subTitle: 'ทางทีมงานจะนำความคิดเห็นนี้ไปปรับปรุงแก้ไข เพื่อพัฒนาต่อไป',
      buttons: ['ตกลง']
    });
    alert.present();
            this.myForm.reset();
}



}

