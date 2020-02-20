import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import {MarksDetailComponent} from "./marks-detail/marks-detail.component";
import {StudentEditComponent} from "./student-edit/student-edit.component";


const routes: Routes = [
  {
    path :'students' , component : StudentsComponent
  },
  {
    path : 'student/:id' , component : StudentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
