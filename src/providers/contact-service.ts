import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { FeedBack } from '../models/contactfeedback';


@Injectable()
export class ContactSerivce {

  //apiUrl:string = 'https://codingthailand.com/api';
   apiUrl:string = 'http://1.179.171.188/appmobile/nab2_service/';
   //apiUrl:string = 'http://192.168.2.208/appmobile/NatchToHos_service/sample/webservice';

  constructor(public http: Http) {}

  public signup(fullname:string, 
                email:string, 
               // password:string, 
                phone:string, 
                detailcon:string ):Observable<FeedBack> {
    let myHeader = new Headers();
    myHeader.append('Content-Type','application/json');

    let body = {
      'fullname': fullname,
      'email': email,
      //'password': password,
      'phone': phone,
      'detailcon': detailcon 

    }
    return this.http.post(`${this.apiUrl}/contact.php`, body, myHeader)
    .map((res:Response) => <FeedBack> res.json())
    .catch(this.handleError);
  }
  
  private handleError(error:any) {
    return Observable.throw(error.json().description || 'เกิดข้อผิดพลาดจาก Server');
  }
}
