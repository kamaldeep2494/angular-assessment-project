import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  // styleUrls: ['./directive-practice.component.css']
  styles : [
    `.show{
      display : none;
    }
    `]
})
export class DirectivePracticeComponent implements OnInit {
toggle = false;
logArr = [];

  constructor() { }

  ngOnInit() {
  }

  togglePara(){
  this.toggle = !this.toggle;

  console.log(this.toggle);
  //var i = 1;
  
  // this.logArr.push(this.logArr.length + 1);
  this.logArr.push(new Date());
  
  }

}
