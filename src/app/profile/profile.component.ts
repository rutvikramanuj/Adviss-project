import { Component, OnInit } from '@angular/core';
import { signupDetails } from '../signupDetails.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  msg="hello";
  details=[];
  schoolName;
    schoolCode;
    address;
    city;
    pinCode;
    addharNumber;
    panNumber;
    username;
    contactNumber;
    email;
    password;
    confirmPassword;
  constructor() { }

  ngOnInit(): void {
  }
  parentComp(data){
    console.warn(data);
    
  }
  signUpDetails(event:Event){
    console.warn(Event);
    
  }
  sharedDetails(details){
    console.warn(details);
    
  }
  detailsAddedFunction(details:{schoolName,
    schoolCode,
    address,
    city,
    pinCode,
    addharNumber,
    panNumber,
    username,
    contactNumber,
    email,
    password,
    confirmPassword}){
     console.warn();
      
    }
  }
