import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
  otpVar=false;
  valueToHideDiv=false;
  constructor() { }

  ngOnInit(): void {
  }
  toOtpVarification(){
  this.otpVar=true;
  this.valueToHideDiv=true;
  alert("OTP sent Successfully in registered Email address");
  }
}
