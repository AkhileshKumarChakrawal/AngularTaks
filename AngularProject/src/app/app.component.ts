import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  buttonDisable : boolean;
  pdata = localStorage.getItem('passdata');
  constructor(private router : Router){
localStorage.clear();
  console.log(localStorage);
    if(localStorage.length > 0){
      this.buttonDisable = false;
    }
    else if(localStorage.length ==0){
      this.buttonDisable = true;
    }
    console.log(this.pdata);

  }

  OpenFormPage(){
    this.router.navigate(['/regform']);
  }
  OpenLoginPage(){
    this.router.navigate(['/login']);
  }
}

