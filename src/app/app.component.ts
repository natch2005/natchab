import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { HospitalPage } from '../pages/hospital/hospital';
import { PersonalPage } from '../pages/personal/personal';
import { ClinicPage } from '../pages/clinic/clinic';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { TabPage } from '../pages/tab/tab';
import { Map } from '../pages/map/map';
import { ContactPage } from '../pages/contact/contact';
import { CoursesPage } from '../pages/courses/courses';
import { Head1Page } from '../pages/head1/head1';
import { KmPage } from '../pages/km/km';
import { NatchtohosPage } from '../pages/natchtohos/natchtohos';
import { LogoutPage } from '../pages/logout/logout';
import { BarcodePage } from '../pages/barcode/barcode';
import { CameraPage } from '../pages/camera/camera';
import { MappigadPage } from '../pages/mappigad/mappigad';
import { JoinhosPage } from '../pages/joinhos/joinhos';

import { LabdetailPage } from '../pages/labdetail/labdetail';






@Component({
 
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

    isLogin = false;
  profile:any;

  rootPage: any = TabPage;
  fnameuser:any;
  lnameuser:any;

  pages: Array<{title: string, component: any, xxx: any}>;
  loginPages: Array<{title: string, component: any, xxx: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private events:Events
              ) {
    this.initializeApp();

    this.listenToLoginEvents();
    // used for an example of ngFor and navigation


           let token = localStorage.getItem('cidst');
if(token){
  console.log('บัตรประชาชนอยู่ใน store');
   this.isLogin = true;
   this.fnameuser = localStorage.getItem('fnamest');
   this.lnameuser = localStorage.getItem('lnamest');
    
  
}else{ 
  console.log('5555 ไม่มีบัตรประชาชนอยู่ใน store'); 

}

    this.pages = [
      { title: 'หน้าหลัก', component: TabPage, xxx: 'home' },
      { title: 'เข้าสู่ระบบ', component: PersonalPage, xxx: 'ios-key' },
      { title: 'แผนที่โรงพยาบาล', component: Map, xxx: 'navigate' },
    ];

    this.loginPages = [
      { title: 'หน้าหลัก', component: TabPage, xxx: 'home' },
      { title: 'แผนที่โรงพยาบาล', component: Map, xxx: 'navigate' },
      { title: 'เชื่อมโยงโรงพยาบาล', component: JoinhosPage, xxx: 'ios-medkit' },
      { title: 'Barcode Scaner ', component: BarcodePage, xxx: 'md-barcode' },
      { title: 'NatchToHos', component: NatchtohosPage, xxx: 'at' },
      { title: 'บันทึกพิกัดบ้าน', component: MappigadPage, xxx: 'ios-contact' },
      { title: 'ออกจากระบบ', component: LogoutPage, xxx: 'unlock' }
    ];
    



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();








    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    this.nav.setRoot(page.component);
  }


 
  private listenToLoginEvents() {
        this.events.subscribe('user:login',()=>{
          this.isLogin = true;

          this.fnameuser = localStorage.getItem('fnamest');
          this.lnameuser = localStorage.getItem('lnamest');

        });

         this.events.subscribe('user:logout',()=>{
           this.isLogin = false;
        });  
  }







}
