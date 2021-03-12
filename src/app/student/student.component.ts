import { Component, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    cardIsSelected='rutvik';
    addStudentCard=false;
    modifyStudentCard=false;
    removeStudentCard=false;
   toHideDiv = false;
  constructor() { }

  ngOnInit(): void {
  }

  addStudentDiv(){
    
    this.addStudentCard=true;
    this.modifyStudentCard=false;
    this.removeStudentCard=false;
    this.toHideDiv = true;
  }
  modifyStudentDiv(){
    this.addStudentCard=false;
    this.modifyStudentCard=true;
    this.removeStudentCard=false;
    this.toHideDiv = true;
  }
  removeStudentDiv(){
    this.addStudentCard=false;
    this.modifyStudentCard=false;
    this.removeStudentCard=true;
    this.toHideDiv = true;
  }
}
