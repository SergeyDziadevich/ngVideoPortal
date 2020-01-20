import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import {
  CourseComponent,
  CourseListComponent,
  CourseFormComponent,
  CourseSearchComponent,
  CourseDeleteModalComponent
} from './components';

import { CoursesRoutingModule } from './courses-routing.module';
import { DatapickerComponent } from './components/course-form/datapicker/datapicker.component';
import { DurationComponent } from './components/course-form/duration/duration.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseComponent,
    CourseFormComponent,
    CourseSearchComponent,
    CourseDeleteModalComponent,
    DatapickerComponent,
    DurationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    CoursesRoutingModule,
    MatDialogModule
  ],
  entryComponents: [CourseDeleteModalComponent],
  exports: []
})
export class CoursesModule { }
