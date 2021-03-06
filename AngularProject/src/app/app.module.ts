import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { MarksDetailComponent } from './marks-detail/marks-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    MarksDetailComponent,
    StudentEditComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    StudentRegistrationComponent,
    StudentHomeComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
