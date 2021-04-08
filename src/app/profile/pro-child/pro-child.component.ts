import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pro-child',
  templateUrl: './pro-child.component.html',
  styleUrls: ['./pro-child.component.css']
})
export class ProChildComponent implements OnInit {
@Input() messege;
@Output() parentComponent= new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit("hello");
  }

}
