import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
sendOtp:boolean=false;
toHideDiv=false;
  constructor() { }

  ngOnInit(): void {
  }
otpFunction(){
  this.sendOtp=true;
  this.toHideDiv=true;
}
}
