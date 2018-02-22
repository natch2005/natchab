import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import {Subscription} from 'rxjs/Subscription'

import{ HomeService } from '../../providers/home-service';
//import{ Item } from '../../models/item';
import{ Shome } from '../../models/shome';

import { Head1detailPage } from '../head1detail/head1detail';



@Component({
  selector: 'page-head1',
  templateUrl: 'head1.html'
})
export class Head1Page {
  chomeservice: Shome[];
  id:number;
nameid:string;
sub:Subscription;
errorMessage:string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private homeservice:HomeService,
              private loadingCtrl:LoadingController) {
  this.id = this.navParams.get('id');
  this.nameid = this.navParams.get('nameid');
  }

  ionViewWillEnter() {
      this.getHome();
  }

  ionViewWillLeave() {
      this.sub.unsubscribe();
  }


    private getHome() {
       let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูลครับ...',
      spinner: 'bubbles'
    });
    loading.present();

      this.sub =  this.homeservice.getHome(this.id).subscribe(
        (res) => this.chomeservice = res,
       (error) => {
        this.errorMessage = <any> error,
        loading.dismiss()
      },
      () => loading.dismiss()
    );
  }


private head1detail(h):void{
this.navCtrl.push(Head1detailPage,{
  nametopic : h.titleT2,
  detailtopic : h.detail_p2
                            })
                    }

 
   getItems(ev: any) {
  
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.chomeservice = this.chomeservice.filter((shome:Shome) => {
        return (shome.titleT2.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getHome();
    }
  }



   // this.homeservice.getHome().subscribe( (res) => this.chomeservice = res );
   // });




//ionViewWillEnter(){
//this.homeservice.getHome(id).subscribe( (res) => this.chomeservice = res );
//}

}
