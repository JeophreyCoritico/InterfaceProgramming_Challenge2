import { Component, OnInit, Input } from '@angular/core';
import { attendance } from '../attendance';
import { APIService } from '../api.service';

@Component({
  selector: 'app-attendance-detail',
  templateUrl: './attendance-detail.component.html',
  styleUrls: ['./attendance-detail.component.css']
})
export class AttendanceDetailComponent implements OnInit {

  attendances: attendance[];

  @Input() Attendance: attendance;

  service: APIService

  constructor(service: APIService) {
    this.service = service;
   }

  ngOnInit() {
  }

}
