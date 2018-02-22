import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Events } from 'ionic-angular';


import {Subscription} from 'rxjs/Subscription'

import{ PersonalService } from '../../providers/personal-service';
import{ loginperso } from '../../models/loginperso';

import { LabdetailPage } from '../labdetail/labdetail';
import { MeddatePage } from '../meddate/meddate';
import { PersonalPage } from '../personal/personal';
import { AboutusPage } from '../aboutus/aboutus';
import { PromotionPage } from '../promotion/promotion';
import { ServicesPage } from '../services/services';


import { Storage } from '@ionic/storage';





export class AvatarPage { }





@Component({
  selector: 'page-personal1',
  templateUrl: 'personal1.html'
})
export class Personal1Page {

personalservice: loginperso[];

cid:number;
hn:number;

pname:any;
fname:any;
lname:any;



//xxxx:any;
//fname:any;


sub:Subscription;
errorMessage:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private cPersonalService:PersonalService,
              private loadingCtrl:LoadingController,
              private storage:Storage,
              private events:Events                
              ) {

      this.cid = this.navParams.get('cid');
      this.hn = this.navParams.get('hn');
      this.pname = this.navParams.get('pname');
      this.fname = this.navParams.get('fname');
      this.lname = this.navParams.get('lname');


let cidst = this.navParams.get('cid');
let hnst = this.navParams.get('hn');
let pnamest = this.navParams.get('pname');
let fnamest = this.navParams.get('fname');
let lnamest = this.navParams.get('lname');


  localStorage.setItem('cidst', cidst);
  localStorage.setItem('hnst', hnst);
  localStorage.setItem('pnamest', pnamest);
  localStorage.setItem('fnamest', fnamest);
  localStorage.setItem('lnamest', lnamest);

   
  this.events.publish('user:login')
  
  

     

  }
 


  private lab1():void{
this.navCtrl.push(LabdetailPage,{
  pname:this.pname,
  fname:this.fname,
  lname:this.lname,
  hn:this.hn,
  cid:this.cid
                            })
                    }


  private med1():void{
this.navCtrl.push(MeddatePage,{
  pname:this.pname,
  fname:this.fname,
  lname:this.lname,
  hn:this.hn,
  cid:this.cid
                            })
                    }

private cPromotion():void{
this.navCtrl.push(PromotionPage)
                    }

                    private cServiceS():void{
this.navCtrl.push(ServicesPage)
                    }




}
