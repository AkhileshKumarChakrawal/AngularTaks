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
    /*this.StudentRegistration = this.formbuilder.group({
      FirstName : ['', Validators.required],
      LastName : ['' , Validators.required],
      Dob : ['' , Validators.required],
      gender : ['' , Validators.required],
      email : ['' , Validators.required],
      pass : ['' , Validators.required],
      confirmpass : ['' , Validators.required],
      marks : this.formbuilder.group({
        math : ['', Validators.required],
        physics : ['' , Validators.required],
        English : ['', Validators.required]
      })
    });
*/

    this.StudentRegistration = new FormGroup({
      FirstName : new FormControl('', Validators.required),
      LastName : new FormControl(''),
      Dob : new FormControl(''),
      gender : new FormControl(''),
      email : new FormControl(''),
      pass : new FormControl(''),
      confirmpass : new FormControl(''),
      marks : new FormGroup({
        math : new FormControl(''),
        physics : new FormControl(''),
        English : new FormControl('')
      })
    });
  }

  ngOnInit() {
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
