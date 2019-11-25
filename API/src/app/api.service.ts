import { Injectable } from '@angular/core';
import { Class, ClassesRespoonse } from './class';
import { attendance, AttendanceRespoonse } from 'src/app/attendance';
import { Observable, of } from 'rxjs';
import { classes } from './mock-Class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  classes: Class[] = [];

  attendances: attendance[] = [];
  secret: string = "password";
  constructor(private http: HttpClient) { }

  getClasses()
  {
    this.http.get<ClassesRespoonse>("http://45.77.238.164/classes?secret=password" + this.secret)
    .subscribe((data: ClassesRespoonse) => {this.classes = data.classes;});
  }

  getAttendances()
  {
    //-------------------- need to do {classid} --------------------
    this.http.get<AttendanceRespoonse>("http://45.77.238.164/attendance/{classid}?secret=password" + this.secret)
    .subscribe((data: AttendanceRespoonse) => {this.attendances = data.attendances;});
  }

  viewAttendance(id: number): Observable<Class>{
    return of(classes.find(Class => Class.classId === id))
  }
  // getClasses(): Class[]
  // {
  //   return classes;
  // }
}

// export class APIService {
//   // classes: Class[] = [];

//   attendances: attendance[] = [];

//   constructor(private http: HttpClient) { }

//   getClasses(): Observable<Class[]>
//   {
//     this.http.get<Class[]>("https://jsonplaceholder.typicode.com/albums")
//     return of(classes);
//   }
// }
