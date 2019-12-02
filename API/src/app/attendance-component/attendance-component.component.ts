import { Component, OnInit, Input } from '@angular/core';
import { attendance } from '../attendance';
import { APIService } from '../api.service';

@Component({
  selector: 'app-attendance-component',
  templateUrl: './attendance-component.component.html',
  styleUrls: ['./attendance-component.component.css']
})
export class AttendanceComponentComponent implements OnInit {
  attendances: attendance[];

  service: APIService

  // @Input() Attendance: attendance;

  constructor(service: APIService) {
    this.service = service;
   }

  ngOnInit() {
    // this.getAttendances();
  }

  // getAttendances(): void{
  //   this.service.getAttendances()
  // }
  getAttendanceTest(){
    
  }

  dum(){
    console.log(this.service)
  }
}

