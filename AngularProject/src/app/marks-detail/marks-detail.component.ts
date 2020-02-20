import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-marks-detail',
  templateUrl: './marks-detail.component.html',
  styleUrls: ['./marks-detail.component.css']
})
export class MarksDetailComponent implements OnInit {


  @Input()  marks;
  constructor() {
    console.log(this.marks);
  }

  ngOnInit() {
    //console.log(this.marksDetailArray);
  }

}
