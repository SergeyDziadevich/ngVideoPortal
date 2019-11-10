import { Injectable } from '@angular/core';

// RxJs
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Course } from '../models';

const courses = [
  {
    id: 3,
    title: 'Video Course 3. Name tag',
    creationDate: '11.05.2019',
    duration: 125,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details
    about various components of a course description. Course descriptions report information about a university or college's
    classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
    descriptions for all courses offered during a particular semester.`,
    topRated: true
  },
  {
    id: 1,
    title: 'Video Course 1. Name tag',
    creationDate: '12.15.2019',
    duration: 188,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details
     about various components of a course description. Course descriptions report information about a university or college's
     classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
     descriptions for all courses offered during a particular semester.`,
     topRated: false
  },
  {
    id: 4,
    title: 'Video Course 4. Name tag',
    creationDate: '09.11.2019',
    duration: 55,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details
    about various components of a course description. Course descriptions report information about a university or college's
    classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
    descriptions for all courses offered during a particular semester.`,
    topRated: false
  },
  {
    id: 2,
    title: 'Video Course 2. Name tag',
    creationDate: '11.10.2019',
    duration: 77,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details
    about various components of a course description. Course descriptions report information about a university or college's
    classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain
    descriptions for all courses offered during a particular semester.`,
    topRated: true
  }
];

const coursesObservable: Observable<Array<Course>> = of(courses);

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  filterText: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public filterText$ = this.filterText.asObservable();

  constructor() { }

  getCourses(): Observable<Course[]> {
    return coursesObservable;
  }

  getCourse(id: number | string): Observable<Course> {
    return this.getCourses().pipe(
      map((coursesList: Array<Course>) => coursesList.find(course => course.id === +id)),
      catchError(err => throwError('Error in getCourse method'))
    );
  }

  addCourse(): void {
    let lastId = 0;
    if (courses.length > 0) {
      lastId = courses[courses.length - 1].id;
    }

    courses.push(new Course(lastId + 1, 'new course', (new Date()).toString(), 0, 'Learn about where you can ' +
      // tslint:disable-next-line:max-line-length
      'find course descriptions, what information they include, how they work, and details about various components of a course description.' +
      ' Course descriptions report information about a university or college\'s classes.' ));
  }

  editCourse(course: Course): void {
    const i = courses.findIndex(item => item.id === course.id);

    if (i > -1) {
      courses.splice(i, 1, course);
    }
  }

  deleteCourse(course: Course): void {
    const i = courses.findIndex(item => item.id === course.id);

    if (i > -1) {
      courses.splice(i, 1);
    }
  }

  getFilterText(): BehaviorSubject<string> {
    return this.filterText;
  }
}
