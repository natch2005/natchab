import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Head1Page } from '../head1/head1';
import{ Head1 } from '../../providers/head1';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

private top1():void{
this.navCtrl.push(Head1Page,{
  id:1,
  nameid:'ส่วนหัว'
                            })
                    }

private top2():void{
this.navCtrl.push(Head1Page,{
  id:2,
  nameid:'ส่วนลำตัว'
                            })
                    }

private top3():void{
this.navCtrl.push(Head1Page,{
  id:3,
  nameid:'ส่วนลำตัวส่วนล่าง'
                            })
                    }

private top4():void{
this.navCtrl.push(Head1Page,{
  id:4,
  nameid:'ยาสมุนไพร'
                            })
                    }

private top5():void{
this.navCtrl.push(Head1Page,{
  id:5,
  nameid:'ปฐมพยาบาล'
                            })
                    }


}
