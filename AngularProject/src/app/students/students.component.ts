import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from "../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student = [
    {sid : 101 , sname : 'Aman', address : {dist : 'Vns', state : 'UP', zip : 221005 }},
    {sid : 102 , sname : 'Azhar', address : {dist : 'Mumbai', state : 'Maharastra', zip : 221003 }},
    {sid : 103 , sname : 'Akash', address : {dist : 'Lucknow', state : 'UP', zip : 241063 }},
    {sid : 104 , sname : 'Amar', address : {dist : 'Gorakhpur', state : 'UP', zip : 218503 }},
    {sid : 105 , sname : 'Aayushaman', address : {dist : 'bhopal', state : 'MP', zip : 418503 }}
  ];

  Marks =[
    {math : 66, english : 77 , physics : 88, sid : 101, name : 'Aman'},
    {math : 94, english : 58 , physics : 89, sid : 102, name :'Azhar'},
    {math : 46, english : 98 , physics : 48, sid : 103, name : 'Akash'},
    {math : 84, english : 39 , physics : 71, sid : 104 , name: 'Amar'},
    {math : 43, english : 62 , physics : 54, sid : 105 , name : 'Aayushaman'}
  ];
  //public studMarks : any;
  public marksArray : {};
  selectedId : number;
  constructor(private routeStudent : Router) { }

  ngOnInit() {
  }

  viewDetail(studentId){
  console.log(studentId);
  this.selectedId = studentId;
  for(let i = 0; i<this.Marks.length; i++){
  if(this.Marks[i].sid == studentId){
    this.marksArray =  this.Marks[i];
    console.log(this.marksArray);
  }
  }

  }

  editPage(studentId){
  this.routeStudent.navigate(['./students' , studentId]);
  }
}
