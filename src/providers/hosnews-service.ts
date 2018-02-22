import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/observable';


import { Item } from '../models/item';

@Injectable()
export class HosnewsService {

  constructor(public http: Http) { }
 
 
  getHosnews(): Observable<Item[]>{
   
    //อันนี้จะใช้ได้แต่ต้องอยู่ในเวบ kolokhospital และเป็น pakad.php version ใหม่
    //return this.http.get('http://kolokhospital.com/AppMobile/NatchToHos_service/sample/webservice/pakad.php')

    //ไฟล์อยู่ที่ 208 แต่ link dbของเวบ
    return this.http.get('http://1.179.171.188/AppMobile/nab2_service/pakad.php')

   .map((res:Response) => <Item[]> res.json());
   
 }

}
