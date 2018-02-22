import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';


//import { Item } from '../models/item';
import { loginperso } from '../models/loginperso';

@Injectable()
export class PersonalService {

  constructor(public http: Http) { }



    getHome(cid:any,hn:any): Observable<loginperso[]>{
   //return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/patient_login.php?cid=${cid}`)
   //return this.http.get(`http://192.168.2.208/AppMobile/nab2_service/patient_login.php?cid=${cid}&hn=${hn}`)
   return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/patient_login.php?cid=${cid}&hn=${hn}`)
   
   .map((res:Response) => <loginperso[]> res.json())
   


    }
 
}





