import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';

import { labdetail } from '../models/labdetail';


@Injectable()
export class LabdetailService {

  constructor(public http: Http) {}


   getHome(cid:number,icode:number): Observable<labdetail[]>{

   return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/labdetail.php?cid=${cid}&icode=${icode}`)
   
   .map((res:Response) => <labdetail[]> res.json())

    }

}
