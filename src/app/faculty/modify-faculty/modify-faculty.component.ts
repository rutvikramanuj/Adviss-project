import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-faculty',
  templateUrl: './modify-faculty.component.html',
  styleUrls: ['./modify-faculty.component.css']
})
export class ModifyFacultyComponent implements OnInit {
    goToAdd=false;
    hideDiv=false;
  constructor() { }

  ngOnInit(): void {
  }
  modifyButton(){
    this.goToAdd=true;
    this.hideDiv=true;
  }
}
