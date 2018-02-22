import { Component } from '@angular/core';
import { NavController, NavParams,Events } from 'ionic-angular';

import { TabPage } from '../tab/tab';

import { MyApp } from '../../app/app.component';



@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private events:Events
              ) {}

 logout():void {
    localStorage.removeItem('cidst');
    localStorage.removeItem('hnst');
    localStorage.removeItem('pnamest');
    localStorage.removeItem('fnamest');
    localStorage.removeItem('lnamest');
       this.events.publish('user:logout')
       this.navCtrl.setRoot(TabPage);
 }

}
