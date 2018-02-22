import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { BarcodewebPage } from '../barcodeweb/barcodeweb';
import { InAppBrowser } from '@ionic-native/in-app-browser';



@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})


export class BarcodePage {
  data:any;
  barcodeFormat:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              private iab: InAppBrowser
              ) {}


scan():void{


this.barcodeScanner.scan().then((barcodeData) => {
 // Success! Barcode data is here
 this.data = barcodeData.text;
 this.barcodeFormat = barcodeData.format;



// ------------------------ ใช้แบบ In App Browser
 const browser = this.iab.create(this.data, '_blank', "location=yes");
       browser.show();
       
// ------------------------ ใช้แบบ In App Browser


/*
//--------------------------- ใช้แบบ เปิดเวบหน้าเวบ
 let webtext = this.data;
 this.navCtrl.push(BarcodewebPage,{webtext})
}, (err) => {
    // An error occurred

*/

});

}

}
