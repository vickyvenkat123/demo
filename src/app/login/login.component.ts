import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any ;
  password: any ;

  constructor(public router:Router) { }
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });
  ngOnInit(): void {
    
}
onSubmitReactiveform(){
  console.log(this.username + "" + this.password);
 
    this.router.navigate(["bashboard"]);
  }
}

