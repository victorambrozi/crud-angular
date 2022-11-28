import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/messages/model/course';

@Component({
  selector: 'app-messages',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [{
    _id: "1", name: "Angular", category: 'frond-end'
  }];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
