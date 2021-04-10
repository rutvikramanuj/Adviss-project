
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { signupDetails } from '../signupDetails.model';
import { SingupDataService } from '../singup-data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  buttonConditionStudent = false;
  buttonConditionFaculty = false;
  buttonConditionClerk = false;
  buttonConditionAdmin = false;
  
  studentPng = false;
  clerkPng = false;
  facultyPng = false;
  adminPng = false;
  buttonConditionsLeftSide = false;
  schoolName='';
  schoolCode='';
  address='';
  city='';
  pinCode='';
  pinCodeFinal='';
  contactNumber='';
  addharNumber='';
  username= '';
  panNumber='';
  email='';
  password='';
  confirmPassword='';
  msg='password is not matching';
  msgCondition=false;
  check='';
  conditionProfile = false;
  @Output() signUpDetails = new EventEmitter<{schoolName,
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
                                              confirmPassword}>();
  // sharedDetails= signupDetails;
  // @Output() sharedDetails:any = new EventEmitter<any>();
details:Array<any>=[];
  constructor(private signupData:SingupDataService) {
    console.warn(this.signupData.getDeta());
    
   }

  ngOnInit(): void {
    this.studentPng = true;
    this.clerkPng = true;
    this.facultyPng = true;
    this.adminPng = true;
  }

  studentSelected(){
    this.studentPng = false;
    this.clerkPng = false;
    this.facultyPng = false;
    this.adminPng = false;

    this.buttonConditionsLeftSide = true;
    this.buttonConditionStudent = true;
    this.buttonConditionClerk = false;
    this.buttonConditionFaculty = false;
    this.buttonConditionAdmin = false;

  }
  clerkSelected(){
    this.studentPng = false;
    this.clerkPng = false;
    this.facultyPng = false;
    this.adminPng = false;

    this.buttonConditionsLeftSide = true;

    this.buttonConditionStudent = false;
    this.buttonConditionClerk = true;
    this.buttonConditionFaculty = false;
    this.buttonConditionAdmin = false;

  }
  adminSelected(){
    this.studentPng = false;
    this.clerkPng = false;
    this.facultyPng = false;
    this.adminPng = false;

    this.buttonConditionsLeftSide = true;

    this.buttonConditionStudent = false;
    this.buttonConditionClerk = false;
    this.buttonConditionFaculty = false;
    this.buttonConditionAdmin = true;

  }
  facultySelected(){
    this.studentPng = false;
    this.clerkPng = false;
    this.facultyPng = false;
    this.adminPng = false;

    this.buttonConditionsLeftSide = true;

    this.buttonConditionStudent = false;
    this.buttonConditionClerk = false;
    this.buttonConditionFaculty = true;
    this.buttonConditionAdmin = false;
  }
  insideSchoolName(event:Event){
    this.schoolName =(<HTMLInputElement>event.target).value;
   }
  insideSchoolCode(event:Event){
   this.schoolCode =(<HTMLInputElement>event.target).value;
 }

  insideAddress(event:Event){
  this.address =(<HTMLInputElement>event.target).value;
 }
  insideCity(event:Event){
  this.city =(<HTMLInputElement>event.target).value;
}
  insidepinCode(event:Event){
  this.pinCode =(<HTMLInputElement>event.target).value;
}
  insideContactNumber(event:Event){
  this.contactNumber =(<HTMLInputElement>event.target).value;
}
  insideAddharNumber(event:Event){
  this.addharNumber =(<HTMLInputElement>event.target).value;
}
  insidePanNumber(event:Event){
  this.panNumber =(<HTMLInputElement>event.target).value;
  }

  insideUsername(event:Event){
    this.username =(<HTMLInputElement>event.target).value;
  }

  insideEmail(event:Event){
    this.email =(<HTMLInputElement>event.target).value; 
  }
  insidePassword(event:Event){
    this.password =(<HTMLInputElement>event.target).value; 
  }
  insideConfirmPassword(event:Event){
    this.confirmPassword =(<HTMLInputElement>event.target).value;
}
    
  
  signInButton(){
   this.signUpDetails.emit({schoolName:this.schoolName,
    schoolCode:this.schoolCode,
    address:this.address,
    city:this.city,
    pinCode:this.pinCode,
    addharNumber:this.addharNumber,
    panNumber:this.panNumber,
    username:this.username,
    contactNumber:this.contactNumber,
    email:this.email,
    password:this.password,
    confirmPassword:this.confirmPassword}) 
                        //  console.log(this.signUpDetails);
                        this.conditionProfile = true;                   
                        
                        this.details.push(new signupDetails(this.schoolName,
                          this.schoolCode,
                          this.address,
                          this.city,
                          this.pinCode,
                          this.addharNumber,
                          this.panNumber,
                          this.username,
                          this.contactNumber,
                          this.email,
                          this.password,
                          this.confirmPassword,)
                          ) 
                            console.warn(this.details);
                            // this.sharedDetails=this.details;
                            // this.sharedDetails.emit(this.details);
                            
 }

}

