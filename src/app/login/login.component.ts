import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import "rxjs/add/operator/map";
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { HttpModule } from "@angular/http";
import { Router, ActivatedRoute,  NavigationExtras  } from '@angular/router';

import { HomeComponent } from '../home/home.component';

import { DataService } from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message:string;

  constructor(private http: Http,
    private router: Router,public data: DataService) { 
    this.http = http;
  
  }



 

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

 

  login(email:HTMLInputElement,password:HTMLInputElement){
    console.log(email.value,password.value);

    
    this.http
        // .get("http://localhost:3000/login?email="+ email.value)
        .get("http://localhost:3000/login?email="+ email.value+ "&password="+password.value)
        .map((response: Response) => response.json())
        .subscribe(
          res => {
            console.log(res);
            if(res.length >= 1){
             
            this.router.navigate(['home']);
            }
            else{
              return;
            }
            
            

           
          },
          err => {
            // let error = JSON.parse(err.text());
            console.log(err);

            return false;
          }
        );

  }

}
