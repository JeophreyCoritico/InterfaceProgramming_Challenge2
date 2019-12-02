import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  constructor(public service: APIService) {
   }

getSecret(password: string){
  this.service.secret = password;
}

  ngOnInit() {
  }

}
