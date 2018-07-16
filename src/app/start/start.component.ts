import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import "rxjs/add/operator/map";
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { HttpModule } from "@angular/http";



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  message:string;

  constructor(private http: Http) { 
    this.http = http;
  }

  ngOnInit() {
   
  }

  submit(name:HTMLInputElement,email:HTMLInputElement,phone:HTMLInputElement,password:HTMLInputElement){
    console.log(name.value,email.value,phone.value,password.value);

    let body = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,

    }
    this.http
        .post("http://localhost:3000/register", body)
        .map((response: Response) => response.json())
        .subscribe(
          res => {
            console.log(res);


           
          },
          err => {
            // let error = JSON.parse(err.text());
            console.log(err);

            return false;
          }
        );

  }

}
