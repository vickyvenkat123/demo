import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BashboardComponent } from './bashboard/bashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeComponent } from './employe/employe.component';
import { DepartmentComponent } from './department/department.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BashboardComponent,
    EmployeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
