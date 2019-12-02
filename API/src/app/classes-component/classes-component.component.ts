import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { APIService } from '../api.service';

@Component({
  selector: 'app-classes-component',
  templateUrl: './classes-component.component.html',
  styleUrls: ['./classes-component.component.css']
})
export class ClassesComponentComponent implements OnInit {
  classes: Class[];

  service: APIService

  constructor(service: APIService) {
    this.service = service;
   }

  ngOnInit() {

  }

  getClasses(): void{
    this.service.getClasses()
    // .subscribe((data: Class[]) => {console.log(data); this.classes = data;});

    // .subscribe(classes => this.classes = classes)
  }

  // viewAttendance(id: number)
  // {
  //   this.service.viewAttendance();
  // }

  // getAttendances(){
  //   this.service.getAttendances();
  // }
}
