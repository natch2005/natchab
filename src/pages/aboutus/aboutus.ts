import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { ClinicPage } from '../clinic/clinic';



@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {
  company:string ='Natch Application Brand';


    showing:boolean = true;
  slides = [
    {
      //title: "การกระทำ",
      //description: "",
      image: "assets/img/natchabout33.jpg",
    },
    {
      //title: "การให้เกียรติกัน",
      //description: "",
      image: "assets/img/natchabout22.jpg",
    },
    {
      //title: "ผมไม่กล้าพัก",
      //description: "",
      image: "assets/img/natchabout11.jpg",
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

openContact(){
  this.navCtrl.push(ContactPage,{
    companyName:this.company,
    compweb:'www.baanit.com'
  });
 
}

}
