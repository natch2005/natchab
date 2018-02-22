import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';


import { meddetail } from '../models/meddetail';


@Injectable()
export class MeddetailService {

  constructor(public http: Http) {}


    getHome(cid:number,vstdate:any): Observable<meddetail[]>{
   //return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/patient_login.php?cid=${cid}`)
   //return this.http.get(`http://192.168.2.208/AppMobile/nab2_service/patient_login.php?cid=${cid}&hn=${hn}`)
   //return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/patient_login.php?cid=${cid}&hn=${hn}`)
   //return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/meddate.php?cid=${cid}`)
   return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/meddetail.php?cid=${cid}&vstdate=${vstdate}`)
   
   .map((res:Response) => <meddetail[]> res.json())

    }

}
