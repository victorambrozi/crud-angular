import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './components/courses/courses.component';

// material
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, MessagesRoutingModule, MatTableModule],
})
export class CoursesModule {}
