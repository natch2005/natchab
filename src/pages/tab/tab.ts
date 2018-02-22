import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';
import { HospitalPage } from '../hospital/hospital';
import { PersonalPage } from '../personal/personal';
import { Personal1Page } from '../personal1/personal1';
import { ClinicPage } from '../clinic/clinic';
import { AboutusPage } from '../aboutus/aboutus';




@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

PageClogin:any;
token:any;

  tab1Root = HomePage;
  tab2Root = HospitalPage;
  //tab3Root = this.PageClogin;
  tab3Root = PersonalPage;
  tab4Root = ClinicPage;
  tab5Root = AboutusPage;

  




  constructor(public navCtrl: NavController, 
              public navParams: NavParams
              ) { 
      
 let token = localStorage.getItem('cidst');
if(token){
  this.PageClogin = Personal1Page;  
  console.log('tab มีlogin',this.PageClogin);
}else{ 
  this.PageClogin = PersonalPage;
  console.log('tab ไม่มีlogin',this.PageClogin);
}

     }




}
