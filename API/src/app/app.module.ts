import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AttendanceComponentComponent } from './attendance-component/attendance-component.component';
import { ClassesComponentComponent } from './classes-component/classes-component.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    AttendanceComponentComponent,
    ClassesComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
