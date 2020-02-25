import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  Studentlogin : FormGroup;
  constructor() { }
   emailGet = localStorage.getItem('emaildata');
    passwordGet = localStorage.getItem('passdata');

  ngOnInit() {
    this.Studentlogin = new FormGroup({
      email : new FormControl(),
      password : new FormControl()
    });

  }

  LoginSubmit(){
    console.log(this.Studentlogin.value);
    console.log(localStorage);
    if(this.Studentlogin.get('email').value === this.emailGet && this.Studentlogin.get('password').value === this.passwordGet){
      localStorage.clear();
      console.log(localStorage);
    }
    else{
      console.log("email and password not match");

    }

  }
}
