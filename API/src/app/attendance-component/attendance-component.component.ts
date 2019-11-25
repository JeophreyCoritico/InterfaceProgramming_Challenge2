import { Component, OnInit } from '@angular/core';
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

  constructor(service: APIService) {
    this.service = service;
   }

  ngOnInit() {
    this.getAttendances();
  }

  getAttendances(): void{
    this.service.getAttendances()
  }
}

