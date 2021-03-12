import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  cardIsSelected='rutvik';
  addFacultyCard=false;
  modifyFacultyCard=false;
  removeFacultyCard=false;
 toHideDiv = false;

  constructor() { }

  ngOnInit(): void {
  }
  addFacultyDiv(){
    
    this.addFacultyCard=true;
    this.modifyFacultyCard=false;
    this.removeFacultyCard=false;
    this.toHideDiv = true;
  }
  modifyFacultyDiv(){
    this.addFacultyCard=false;
    this.modifyFacultyCard=true;
    this.removeFacultyCard=false;
    this.toHideDiv = true;
  }
  removeFacultyDiv(){
    this.addFacultyCard=false;
    this.modifyFacultyCard=false;
    this.removeFacultyCard=true;
    this.toHideDiv = true;
  }
}
