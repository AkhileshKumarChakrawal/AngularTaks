import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-marks-detail',
  templateUrl: './marks-detail.component.html',
  styleUrls: ['./marks-detail.component.css']
})
export class MarksDetailComponent implements OnInit {

  check : boolean;
  @Input()marks : {};
  constructor() {
    console.log(typeof this.marks);
    if(typeof this.marks == "undefined"){
      this.check = false;
    }
  }

  ngOnInit() {
    //console.log(this.marksDetailArray);
  }

}
