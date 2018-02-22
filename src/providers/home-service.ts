import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';


//import { Item } from '../models/item';
import { Shome } from '../models/shome';

@Injectable()
export class HomeService {

  constructor(public http: Http) { }



    getHome(id:number): Observable<Shome[]>{
   return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/home.php?idsel=${id}`)
  
   .map((res:Response) => <Shome[]> res.json())

    }
 
}
