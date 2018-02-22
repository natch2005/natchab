import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';

import { Spigad } from '../models/spigad';


@Injectable()
export class PigadptshowService {

  constructor(public http: Http) {}

  getPigad(cidss:any): Observable<Spigad[]>{
    return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/spigad.php?cid=${cidss}`)
  
   .map((res:Response) => <Spigad[]> res.json())

    }
  
    getdelPigad(cidss:any): Observable<Spigad[]>{
    return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/dpigad.php?cid=${cidss}`)
  
   .map((res:Response) => <Spigad[]> res.json())

    }

    

 

}
