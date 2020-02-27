import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  mail = '';
  password = '';
  constructor(private router: Router) {
    this.mail = localStorage.getItem("mail");
    this.password = localStorage.getItem("password");
    /* this.mail = sessionStorage.getItem("mail");
    this.password = sessionStorage.getItem("password"); */
    console.log(this.mail+" "+this.password);
  }

  ngOnInit() {
  }

  studentsList(){
    this.router.navigate(['studentDetails']);
  }

}
