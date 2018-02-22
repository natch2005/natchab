import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Labdetail1Page } from '../labdetail1/labdetail1';



@Component({
  selector: 'page-labdetail',
  templateUrl: 'labdetail.html'
})
export class LabdetailPage {

  cid:number;
  hn:number;
  fname:any;
  lname:any;
  pname:any;
  icode:number;
  nameicode:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.cid = this.navParams.get('cid');
      this.fname = this.navParams.get('fname');
      this.hn = this.navParams.get('hn');
      this.lname = this.navParams.get('lname');
      this.pname = this.navParams.get('pname');
  }

private labdetail1(icode, nameicode):void{
this.navCtrl.push(Labdetail1Page,{

  nameicode:nameicode,
  icode:icode,
  pname:this.pname,
  fname:this.fname,
  lname:this.lname,
  hn:this.hn,
  cid:this.cid
                            })
                    }

}
