import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import {MarksDetailComponent} from "./marks-detail/marks-detail.component";
import {StudentEditComponent} from "./student-edit/student-edit.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {StudentRegistrationComponent} from "./student-registration/student-registration.component";


const routes: Routes = [
 /* {
    path : '' , redirectTo : '/students' , pathMatch : 'full'
  },*/

  {
    path :'students' ,  children :[
      {
        path : '' , component : StudentsComponent
      },
      {
        path : ':id' , component : StudentEditComponent
      }
    ]
  },
  {
    path : 'regform' , component : StudentRegistrationComponent
  },
  {
    path : 'login' , component : LoginPageComponent
  }

 /* {path : 'students' , component : StudentsComponent},
  {path : 'studentedit/:id' , component : StudentEditComponent}
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
