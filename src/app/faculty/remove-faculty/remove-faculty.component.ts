import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-faculty',
  templateUrl: './remove-faculty.component.html',
  styleUrls: ['./remove-faculty.component.css']
})
export class RemoveFacultyComponent implements OnInit {
  goToHome=false;
  toHideDiv=false;
  constructor() { }

  ngOnInit(): void {
  }
  removeButton(){
    this.goToHome=true;
    this.toHideDiv=true;
    alert("faculty Has been Removed Successfully")
  }
}
