import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Personal1Page } from '../personal1/personal1';
import { MappigadPage } from '../mappigad/mappigad';
import { AppointPage } from '../appoint/appoint';
import { AmbulancePage } from '../ambulance/ambulance';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-joinhos',
  templateUrl: 'joinhos.html'
})
export class JoinhosPage {


cid:any;
fname:any;
lname:any;
pname:any;
hn:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage:Storage
              
              ) {

                this.cid = localStorage.getItem('cidst');
                this.fname = localStorage.getItem('fnamest');
                this.lname = localStorage.getItem('lnamest');
                this.pname = localStorage.getItem('pnamest');
                this.hn = localStorage.getItem('hnst');

              }



  joinpersonal(){
    
    let cid = this.cid;
    let hn = this.hn;
    let pname = this.pname;
    let fname = this.fname;
    let lname = this.lname;
    this.navCtrl.push(Personal1Page,{cid,hn,pname,fname,lname})
  }
  
  joinpigad(){
     this.navCtrl.push(MappigadPage)
  }
  
  joinappoint(){
      this.navCtrl.push(AppointPage)
    }
  
  
  joinambulance(){
     this.navCtrl.push(AmbulancePage)
  }

}
