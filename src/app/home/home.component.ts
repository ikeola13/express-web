import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { HttpModule } from "@angular/http";
import { ActivatedRoute } from '@angular/router';

import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message:string;
 
  users: string;
  
  Data: any[];

  name;
  email;
  phone;

  constructor(private route: ActivatedRoute,private http: Http,public data: DataService) { 

    this.http = http;
  }
  
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
 

 

  showData(){
    this.http
    .get("http://localhost:3000/getdata")
    .map((response: Response) => response.json())
    .subscribe(
      res => {
        // console.log(res);

        this.Data = res;

        console.log(this.Data);


        
       
      },
      err => {
        // let error = JSON.parse(err.text());
        console.log(err);

        return false;
      }
    );
  }

}
