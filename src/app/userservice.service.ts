import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  getUser() {
    throw new Error('Method not implemented.');
  }

  constructor( public http :HttpClient) { }
  
  getcommonservice(){
    var url="./assets/json/app.json";
    return this.http.get(url);  
  }
}

