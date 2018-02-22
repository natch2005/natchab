import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { FeedBack } from '../models/feedback';

@Injectable()
export class AppointlonService {

  constructor(public http: Http) { }
    public signup(hnlon:any,datelon:any): Observable<FeedBack>{
      let myHeader = new Headers();
      myHeader.append('Content-Type','application/json');
      let body={
        'hnlon' : hnlon,
        'datelon' : datelon

      }
      return this.http.post(`http://1.179.171.188/AppMobile/nab2_service/insert_appointlon.php`, body, myHeader)
      .map((res:Response) => <FeedBack[]> res.json())
      .catch(this.handleError);
       }
      
      private handleError(error:any) {
    return Observable.throw(error.json().description || 'เกิดข้อผิดพลาดจาก Server');
  }

}
