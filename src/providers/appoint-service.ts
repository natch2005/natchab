import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';

import { dateappoint } from '../models/dateappoint';
import { queuerub } from '../models/queuerub';
import { queuerai } from '../models/queuerub';


@Injectable()
export class AppointService {

  constructor(public http: Http) {}

   getDateappo(hn:any): Observable<dateappoint[]>{
   return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/dateappoint.php?hn=${hn}`)
   .map((res:Response) => <dateappoint[]> res.json())
    }

    getQueuerub(hn:any): Observable<queuerub[]>{
   return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/queuerubya.php?hn=${hn}`)
   .map((res:Response) => <queuerub[]> res.json())
    }

        getQueuerai(hn:any): Observable<queuerai[]>{
   return this.http.get(`http://1.179.171.188/AppMobile/nab2_service/queuerai.php?hn=${hn}`)
   .map((res:Response) => <queuerai[]> res.json())
    }

}
