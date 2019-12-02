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
  secret: string = "";
  constructor(private http: HttpClient) { }

  getClasses()
  {
    this.http.get<ClassesRespoonse>("http://45.77.238.164/classes?secret=" + this.secret)
    .subscribe((data: ClassesRespoonse) => {this.classes = data.classes;});
  }

  getAttendances(id: string)
  {
    //-------------------- need to do {classid} --------------------
    this.http.get<AttendanceRespoonse>("http://45.77.238.164/attendance/" + id + "?secret=" + this.secret)
    .subscribe((data: AttendanceRespoonse) => {console.log(data); this.attendances = data.attendance;});
  }

  


  // viewAttendance(id: number): Observable<Class>{
  //   return of(classes.find(Class => Class.classId === id))
  // }


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
