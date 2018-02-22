import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { FeedBack } from '../models/feedback';



@Injectable()
export class PigadptService {

    constructor(public http: Http) { }



    public signup(tokencid:any,pigadlat:any,pigadlng:any): Observable<FeedBack>{
      let myHeader = new Headers();
      myHeader.append('Content-Type','application/json');

      let body={
        'tokencid' : tokencid,
        'pigadlat' : pigadlat,
        'pigadlng' : pigadlng

      }
      return this.http.post(`http://1.179.171.188/AppMobile/nab2_service/insert_pt_pigad.php`, body, myHeader)
      .map((res:Response) => <FeedBack[]> res.json())
      .catch(this.handleError);
   
    }
    
    

      private handleError(error:any) {
    return Observable.throw(error.json().description || 'เกิดข้อผิดพลาดจาก Server');
  }



      //-------------- upload picture ambulance
    public upload(imageData:string,pigadlat:any,pigadlng:any,todayDate:any,hn:any,cid:any,timesave:any): Observable<FeedBack>{
      let myHeader = new Headers();
      myHeader.append('Content-Type','application/json');

      let body={
        'imageData' : imageData,
        'pigadlat' : pigadlat,
        'pigadlng' : pigadlng,
        'todayDate' : todayDate,
        'hn' : hn,
        'cid' : cid,
        'timesave' : timesave

      }
      return this.http.post(`http://1.179.171.188/AppMobile/nab2_service/upload_image.php`, body, myHeader)
      .map((res:Response) => <FeedBack[]> res.json())
      .catch(this.handleError);
   
    }
      //---------------- จบ upload picture ambulance




}
