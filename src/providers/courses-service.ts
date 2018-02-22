import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/observable';


import { Item } from '../models/item';

@Injectable()
export class CoursesService {

  constructor(public http: Http) { }
 
 
  getCourses(): Observable<Item[]>{
    return this.http.get('https://codingthailand.com/api/get_courses.php')
   .map((res:Response) => <Item[]> res.json());
   
 }

}
