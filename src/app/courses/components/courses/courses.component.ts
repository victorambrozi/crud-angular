import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/courses/models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-messages',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.courses = this.courseService.list();
  }
}
