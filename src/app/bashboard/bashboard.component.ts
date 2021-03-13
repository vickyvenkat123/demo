import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-bashboard',
  templateUrl: './bashboard.component.html',
  styleUrls: ['./bashboard.component.css']
})
export class BashboardComponent implements OnInit {
  tabledata: any ;
  mydata:any=[];
 

  constructor( public service :UserserviceService ) { }
 

  ngOnInit(): void {
  }
  table(){
    this.tabledata=true;
    this.service.getcommonservice().subscribe((data: any) =>{
      this.mydata=data;
      console.log(this.mydata);
    });
  }

}
