import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HospitalPage } from '../pages/hospital/hospital';
import { PersonalPage } from '../pages/personal/personal';
import { ClinicPage } from '../pages/clinic/clinic';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { TabPage } from '../pages/tab/tab';
import { Map } from '../pages/map/map';
import { ContactPage } from '../pages/contact/contact';
import { CoursesPage } from '../pages/courses/courses';
import { KmPage } from '../pages/km/km';
import { NatchtohosPage } from '../pages/natchtohos/natchtohos';
import { Head1Page } from '../pages/head1/head1';
import { Head1detailPage } from '../pages/head1detail/head1detail';
import { Personal1Page } from '../pages/personal1/personal1';
import { LabdetailPage } from '../pages/labdetail/labdetail';
import { Labdetail1Page } from '../pages/labdetail1/labdetail1';
import { MeddetailPage } from '../pages/meddetail/meddetail';
import { MeddatePage } from '../pages/meddate/meddate';
import { CliniccidPage } from '../pages/cliniccid/cliniccid';
import { LogoutPage } from '../pages/logout/logout';
import { BarcodePage } from '../pages/barcode/barcode';
import { CameraPage } from '../pages/camera/camera';
import { BarcodewebPage } from '../pages/barcodeweb/barcodeweb';
import { MappigadPage } from '../pages/mappigad/mappigad';
import { JoinhosPage } from '../pages/joinhos/joinhos';
import { PromotionPage } from '../pages/promotion/promotion';
import {  ServicesPage } from '../pages/services/services';
import {  AppointPage } from '../pages/appoint/appoint';
import {  AmbulancePage } from '../pages/ambulance/ambulance';


import { CoursesService } from '../providers/courses-service';
import { HomeService } from '../providers/home-service';
import { HosnewsService } from '../providers/hosnews-service';
import { ContactSerivce } from '../providers/contact-service';
import { PersonalService } from '../providers/personal-service';
import { LabdetailService } from '../providers/labdetail1-service';
import { MeddateService } from '../providers/meddate-service';
import { MeddetailService } from '../providers/meddetail-service';
import { ClinicService } from '../providers/clinic-service';
import { CliniccidService } from '../providers/cliniccid-service';
import { PigadptService } from '../providers/pigadpt-service';
import { PigadptshowService } from '../providers/pigadptshow-service';
import { AppointService } from '../providers/appoint-service';
import { AppointlonService } from '../providers/appointlon-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { IonicStorageModule } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import { Camera } from '@ionic-native/camera';


import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HospitalPage,
    PersonalPage,
    ClinicPage,
    AboutusPage,TabPage,Map,ContactPage,CoursesPage,Head1Page,Head1detailPage,KmPage,NatchtohosPage,Personal1Page,LabdetailPage,
    Labdetail1Page,MeddetailPage,MeddatePage,CliniccidPage,LogoutPage,BarcodePage,CameraPage,BarcodewebPage,MappigadPage,JoinhosPage,
    PromotionPage,ServicesPage,AppointPage,AmbulancePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC70nULZ0eYUnPCFnSaDTCshBvHfiJEoEY'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HospitalPage,
    PersonalPage,
    ClinicPage,
    AboutusPage,TabPage,Map,ContactPage,CoursesPage,Head1Page,Head1detailPage,KmPage,NatchtohosPage,Personal1Page,LabdetailPage,
    Labdetail1Page,MeddetailPage,MeddatePage,CliniccidPage,LogoutPage,BarcodePage,CameraPage,BarcodewebPage,MappigadPage,JoinhosPage,
    PromotionPage,ServicesPage,AppointPage,AmbulancePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoursesService,
    HomeService,
    HosnewsService,
    ContactSerivce,
    PersonalService,
    LabdetailService,MeddateService,MeddetailService,ClinicService,CliniccidService,BarcodeScanner,InAppBrowser,
    GoogleMaps,PigadptService,PigadptshowService,Geolocation,CallNumber,AppointService,AppointlonService,Camera
  ]
})
export class AppModule {}
