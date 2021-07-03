import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor( private http:HttpClient ) { }

  ngOnInit() {
  }


  callWebService(){
    this.http.get('URL').subscribe((result)=>{
      // toconsimi result

      
    })
  }

}
