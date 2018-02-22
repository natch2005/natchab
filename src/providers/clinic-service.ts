import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';


import { clinic } from '../models/clinic';


@Injectable()
export class ClinicService {

  constructor(public http: Http) {}


    getHome(loginname:any,pass:any): Observable<clinic[]>{
   //return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/patient_login.php?cid=${cid}`)
   //return this.http.get(`http://192.168.2.208/AppMobile/nab2_service/patient_login.php?cid=${cid}&hn=${hn}`)
   //return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/patient_login.php?cid=${cid}&hn=${hn}`)
   return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/doctor_login.php?loginname=${loginname}&pass=${pass}`)
   
   .map((res:Response) => <clinic[]> res.json())
   


    }

}
