import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  StudentRegistration : FormGroup;
  constructor() { }

  ngOnInit() {
    this.StudentRegistration = new FormGroup({
      FirstName : new FormControl(),
      LastName : new FormControl(),
      Dob : new FormControl(),
      gender : new FormControl(),
      email : new FormControl(),
      pass : new FormControl(),
      confirmpass : new FormControl(),
      marks : new FormGroup({
        math : new FormControl(),
        physics : new FormControl(),
        English : new FormControl()
      })
    });
  }
  RegSubmit(){
    console.log(this.StudentRegistration.value);
  }
}
