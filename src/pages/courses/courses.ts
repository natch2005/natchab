import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import{ CoursesService } from '../../providers/courses-service';
import{ Item } from '../../models/item';


@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})
export class CoursesPage {
  courses: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private coursesService:CoursesService) {}


ionViewWillEnter(){

this.coursesService.getCourses().subscribe( (res) => this.courses = res );

}


}
