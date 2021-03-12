import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  age='';
  name='';
  schoolName='';
  schoolCode='';
  constructor() { }

  ngOnInit(): void {
  }

  insideSchoolName(event:Event){
    this.schoolName =(<HTMLInputElement>event.target).value;
    
  }
  insideSchoolCode(event:Event){
   this.schoolCode =(<HTMLInputElement>event.target).value;
   
 }
}
