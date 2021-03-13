import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BashboardComponent } from './bashboard/bashboard.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeComponent } from './employe/employe.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path : "login", component :LoginComponent},
  {path :"bashboard",component :BashboardComponent,
  children: [
  { path : '', redirectTo :'employe', pathMatch : 'full'},
  {path :"employe",component :EmployeComponent},
  {path :"department",component :DepartmentComponent},
]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
