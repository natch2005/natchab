import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {Subscription} from 'rxjs/Subscription'

import{ HosnewsService } from '../../providers/hosnews-service';
import{ Item } from '../../models/item';


@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html'
})
export class HospitalPage {
  hosnews: Item[];
  sub:Subscription;
  errorMessage:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private hosnewsService:HosnewsService,
              private loadingCtrl:LoadingController) {}
 


ionViewWillEnter(){
  //this.hosnewsService.getHosnews().subscribe( (res) => this.hosnews = res );
this.getHosnews();
}

  ionViewWillLeave() {
      this.sub.unsubscribe();
  }


    private getHosnews() {
       let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูลครับ...',
      spinner: 'bubbles'
    });
    loading.present();



      this.sub = this.hosnewsService.getHosnews().subscribe( (res) => this.hosnews = res ,
     
       (error) => {
        this.errorMessage = <any> error,
        loading.dismiss()
      },
      () => loading.dismiss()
    );
  }


  private doRefresh(refresher) {

//setTimeout(() => {refresher.complete();}, 2000);

      this.sub = this.hosnewsService.getHosnews().subscribe( 
        (res) => this.hosnews = res,
        (error) => {
          this.errorMessage = <any> error,
          refresher.complete()
        },
        () =>  refresher.complete()
      );
  }


}
