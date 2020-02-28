import { Component , OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  enabledata : boolean = false;
  password = localStorage.getItem('passdata');
  constructor(private router : Router) {
//localStorage.clear();
    console.log("appdata"+localStorage);

    if (localStorage.length != 0) {
      this.enabledata = true;
    }

  }

  /*OpenFormPage(){
    this.router.navigate(['/regform']);
  }
  OpenLoginPage(){
    this.router.navigate(['/login']);
  }*/

  buttonDisables(){
    return  typeof this.password !== 'undefined' && this.password !== null && this.password !=='';
  }
}

