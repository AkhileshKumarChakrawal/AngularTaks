import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  StudentRegistration : FormGroup;
  marks : FormGroup;
  storeData : any ={};
  constructor(private formbuilder : FormBuilder) {


    this.StudentRegistration = this.formbuilder.group({

      email: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
     }
     get firstname(){
    return this.StudentRegistration.get('FirstName');
     }
     get lastname(){
    return this.StudentRegistration.get('LastName');
     }
    get emailid(){
    return this.StudentRegistration.get('email');
    }
    get password(){
    return this.StudentRegistration.get('pass');
    }
    get confirmpwd(){
    return this.StudentRegistration.get('Confirmpass');
    }
    get maths(){
    return this.StudentRegistration.get('math');
    }
    get physics(){
    return this.StudentRegistration.get('physics');
    }
    get english(){
    return this.StudentRegistration.get('English');
    }

  RegSubmit(){
    console.log(this.StudentRegistration.value);
    let emailId = this.StudentRegistration.get('email').value;
    let password = this.StudentRegistration.get('pass').value;
    console.log(emailId + " "+ password);
    localStorage.setItem('emaildata' , emailId);
    localStorage.setItem('passdata',password);
  }
}
